$(function()
{
  $("#st1-pt,#st1-pt-ptp,#st2-pt,#st2-pt-ptp").focusout(function(){
     if($(this).val()<$(this).attr("min") || $(this).val()>$(this).attr("max"))
     {
         $(this).focus();
         $("#checkbox-tinhtoan").prop('checked',false);
         $("#checkbox-tinhtoan").attr('DISABLED',true);
     }
     else
     {
         $("#checkbox-tinhtoan").removeAttr('DISABLED');
     }
  });
   
});