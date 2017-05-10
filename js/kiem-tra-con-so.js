$(function()
{
  //gggg
  $("#st1,#st2").focusout(function(){
     var regex = /^[0-9]+$/;    // allow only numbers [0-9] 
     if( !regex.test($(this).val()) ) {
      $(this).attr('title','nhap vao so nguyen');
      $(this).focus();
      $("#checkbox-tinhtoan").prop('checked',false);
      $("#checkbox-tinhtoan").attr('DISABLED',true);
     }
     else
     {
         $(this).removeAttr('title');
         $("#checkbox-tinhtoan").removeAttr('DISABLED');
     }
  });
   
});