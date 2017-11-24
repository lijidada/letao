$(function () {

  var currentPage = 1;
  var pageSize = 2;

  function render() {

    $.ajax({
      type: 'get',
      url: '/category/queryTopCategoryPaging',
      data: {
        page: currentPage,
        pageSize: pageSize

      },
      success: function (info) {

        $('tbody').html(template('first_tmp', info));

        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: currentPage,
          totalPages: Math.ceil(info.total / pageSize),
          onPageClicked: function (a, b, c, page) {
            console.log(page)
            currentPage = page;
            render();
          }

        })
      }
    })
  }

  render();

  $('.btn_first_add').on('click',function(){
    $('#first_add').modal('show');

  })

  var $form = $('#form');
  $form.bootstrapValidator({
    feedbackIcons:{
      valid: 'glyphicon glyphicon-ok',
      invalid:'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields:{
      categoryName:{

        validators:{
          notEmpty:{
            message:"请输入一级分类的名称"
          }
        }

      }
    }
  });


 $form.on('success.form.bv',function(e){
   e.preventDefault();
   $.ajax({
     type:'post',
     url:'/category/addTopCategory',
     data:$form.serialize(),
     success:function(info){
       if(info.success){
        $('#first_add').modal('hide');
        currentPage = 1;
        render();

        $form[0].reset();
        $form.data('bootstrapValidator').resetForm();

       }


     }
   })
 })



})