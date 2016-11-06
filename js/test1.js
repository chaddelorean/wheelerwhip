var cartContents = new Array();
cartContents["name"] = "blake";
jQuery(document).ready(function(){
	$('.accordion .head').click(function() {
		$(this).next().toggle('slow');
		return false;
	}).next().hide();
	
    $('input[name="Add"]').click(function() {
	  alert('you just clicked the buttton!');

var obj = {items:[{"name":"blakeHeringer","description":"the item description goes here"},{"name":"stevenHansen"}]};
$.cookie.set('testobject',obj,{json:true});
var a = $.cookie.get('testobject',true);
//$.cookie.unset('testobject');
alert('object:'+a.items[0].description);


var replacement = '<input type="hidden" name="item_name_3" value="Larger Item" /><input type="hidden" name="amount_3" value="425" />';
$('#testForm').append(replacement);

//alert();


    });	
	
	
    $('#selectedValue').change(function() {
	  alert('you just selected something!');
      alert($('#selectedValue').val());
	  alert($("#selectedValue0 option:selected").attr('price'));
  	  alert($("#selectedValue").attr('description'));

    });		
	
});
