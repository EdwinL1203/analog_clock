$(document).ready(function(){
  
    var sec = $('#seconds');
    var hour = $('#hours');
    var min = $('#minutes');

    setInterval(function(){

    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var sec_degree = seconds * 6;
    var min_degree = minutes * 6;
    var hour_degree = hours * 30 + (minutes / 2);

      sec.css({'-webkit-transform': 'rotate('+ sec_degree + 'deg)', '-moz-transform': 'rotate('+ sec_degree + 'deg)', '-ms-transform': 'rotate('+ sec_degree + 'deg)'});
      
      min.css({'-webkit-transform': 'rotate('+ min_degree + 'deg)', '-moz-transform': 'rotate('+ min_degree + 'deg)', '-ms-transform': 'rotate('+ min_degree + 'deg)'});
      
      hour.css({'-webkit-transform': 'rotate('+ hour_degree + 'deg)', '-moz-transform': 'rotate('+ hour_degree + 'deg)', '-ms-transform': 'rotate('+ hour_degree + 'deg)'});
      
  }, 1000);
});