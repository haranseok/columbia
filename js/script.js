//newsticker 위로 올라가게 하는 것 제이쿼리
function tick() {
  $('#rolling li:first').slideUp(function() {
    $(this).appendTo($('#rolling')).slideDown();
  });
}
setInterval(function() {
  tick()
}, 5000);


// 검색창 fade로 열고 닫기 하기
  $(document).ready(function() {
    $('#searchBtn').click(function() {
      $('.search_container').fadeToggle("fast");
    });
  });



// 이미지 변경하는 js
  $(document).ready(function(){
             /*웹페이지 열었을 때*/
             $("#scOpen").show();
             $("#scClose").hide();

             /*img1을 클릭했을 때 img2를 보여줌*/
             $("#scOpen").click(function(){
                 $("#scOpen").hide();
                 $("#scClose").show();
             });

             /*img2를 클릭했을 때 img1을 보여줌*/
             $("#scClose").click(function(){
                 $("#scOpen").show();
                 $("#scClose").hide();
             });
         });


         //textarea 텍스트 제한

       $(document).ready(function() {
         $('#test').on('keyup', function() {
             $('#text_cnt').html("("+$(this).val().length+"/1000"+"자)");

             if($(this).val().length > 5000) {
                 $(this).val($(this).val().substring(0, 5000));
                 $('#text_cnt').html("(1000/1000"+"자)");
             }
         });
       });
