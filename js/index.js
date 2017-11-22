

var myChart = echarts.init(document.querySelector('.pic_left'));


var option = {
    title: {
        text: '2017年注册人数'
    },
    tooltip: {},
    legend: {
        data:['人数']
    },
    xAxis: {
        data: ["一月","二月","三月","四月","五月","六月"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [1000, 2000, 1236, 1510, 1300, 1300]
    }]
};


myChart.setOption(option);


var myChart1 = echarts.init(document.querySelector('.pic_right'));
option1 = {
  title : {
      text: '运动鞋品牌',
      subtext: '纯属虚构',
      x:'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['耐克','乔丹','回力','李宁','鸿星尔克']
  },
  series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
              {value:335, name:'耐克'},
              {value:310, name:'乔丹'},
              {value:234, name:'回力'},
              {value:135, name:'李宁'},
              {value:1548, name:'鸿星尔克'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};

myChart1.setOption(option1);
