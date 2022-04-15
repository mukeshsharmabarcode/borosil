$(document).ready(function(){ 

$('#usr').blur(function(){
  
  if($('#usr').val() == '' ){
    $('#usr').css({ "border":"2px solid #e74c3c"});
    $(".usr").css({ "color":" #e74c3c"});
 }else{
  $('#usr').css({ "border":"2px solid rgb(2 53 100)"});
  $(".usr").css({ "color":"rgb(2 53 100)"});
 }
});
$('#pwd').blur(function(){
  
  if($('#pwd').val() == '' ){
    $('#pwd').css({ "border":"2px solid #e74c3c"});
    $(".psd").css({ "color":" #e74c3c"});
 }else{
  $('#pwd').css({ "border":"2px solid rgb(2 53 100)"});
  $(".psd").css({ "color":"rgb(2 53 100)"});
 }
});
$("input").keyup(function(){
  if($('#usr').val() != '' & $('#pwd').val() != '' ){
    $('.login-btn').prop('disabled', false);
  }
  else{
    $('.login-btn').prop('disabled', true);
  }


});
$('.input1,.input').blur(function(){
  
  if($(this).val() == '' ){
    $(this).css({ "border": ".14rem solid #c0392b"});
    $(this).siblings().css({"color": "#c0392b"});
    $(this).siblings().css({ "visibility": "visible","color": "#c0392b"});
  
  }
//else if($(this).val() != ''){
//   $(this).css({ "border-color":"#2c3e50;"});
//   $(this).siblings().css({"color": "#2c3e50;"});
//  }
});
$('.input1,.input').keyup(function(){
  $(this).css({ "border":".14rem solid #0652dd"});
  $(this).siblings().css({"color": "#2c3e50"});
  $(this).siblings('.has-error').css({"visibility": "hidden"});

});
$('.input1,.input').change(function(){
  $(this).css({ "border":".14rem solid #0652dd"});
  $(this).siblings().css({"color": "#2c3e50"});
  $(this).siblings('.has-error').css({"visibility": "hidden"});

});
      $("#edit").click(function(){
  
    $('input').prop('disabled', false);
     $('textarea').prop('disabled', false);
     $('select').prop('disabled', false);
  });

});


// $('.input1').change(function(){
  
  
   
  
 
// });
let fillup = ()=>{
  let usrv = $('#usr').val();
let pwdv = $('#pwd').val();
  
  if((usrv ==='admin') && ( pwdv ==='Bci@123')){
    
  }
  else{
    swal("Login Failed ", "invalid username  or password", "error"); 
    
    return false
  }
}


// $('.dropdown-toggle').dropdown()

 $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
				$('#content').toggleClass('active');
            });
			
			 $('.more-button,.body-overlay').on('click', function () {
                $('#sidebar,.body-overlay').toggleClass('show-nav');
            });
			
        });

 
// charts
var xValues = ["Drums", "Rfid Linked", "On Hold", "Qc Completed", "In Stock"];
var yValues = [200, 100, 75, 54, 50];
var barColors = ["#3498db", "#e74c3c","#d35400","#f39c12","#16a085"];

new Chart("drum", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: ""
    }
  }
});

var xValues1 = ["In Picking", "Picked", "Loaded", "Dispatch"];
var yValues1 = [100, 29, 40, 44];
var barColors1 = ["#3498db", "#3498db","#3498db","#3498db"];

new Chart("dispatch", {
  type: "bar",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors1,
      data: yValues1
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: ""
    }
  }
});












