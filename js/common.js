


  $(document).ajaxStart(function () {
    NProgress.start();


  });


    $(document).ajaxStop(function () {
      setInterval(function () {
      NProgress.done();
    })
    }, 1000)




  if(location.href.indexOf('login.html')==-1){
    $.ajax({
      type:'get',
      url:'/employee/checkRootLogin',
      success:function(data){
        if(data.error ==400){
          location.href = "login.html";


        }

      }
    })

  }

  // 二级菜单的出现与隐藏
  $(".child").prev().on("click", function () {
    $(this).next().slideToggle();
  });

  // 侧边栏的出现与隐藏
  $('.icon-left').on('click', function () {
    $("#slide-left").toggleClass("now");
    $("#main-right").toggleClass("now");
  });

  $('.icon-right').on('click', function () {
    $('#logoutModal').modal("show");

    $('.btn-logout').off().on('click', function () {
      $.ajax({
        type: 'get',
        url: "/employee/employeeLogout",
        success: function (data) {
          if (data.success) {
            location.href = "login.html";

          }

        }

      })

    })
  })









