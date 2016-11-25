
var obj = {items:[{"name":"blakeHeringer","description":"the item description goes here"}]};

jQuery(document).ready(function(){
  $('.accordion .head').click(function() {
	$(this).next().toggle('slow');
	return false;
  }).next().hide();
  $("#accordion").accordion({ collapsible: true,autoHeight: false });

/////
      $("#dialog").dialog({
      bgiframe: true,
      autoOpen: false,
      height: 400,
      width: 570,
      modal: true,
      buttons: {
        'UPDATE CART': function() { updateCart();},
        'CANCEL': function() { $('#dialog').dialog('close');}
        },
    });
  var top = $('#accordion').offset().top - parseFloat($('#accordion').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#accordion').addClass('fixed');
    } else {
      // otherwise remove it
      $('#accordion').removeClass('fixed');
    }
  });

////
  
  if($.cookie.get('cartContents',true) != undefined){
    obj = $.cookie.get('cartContents',true);
    buildShoppingCartHtml();
  }
  
// BUTTON LISTENERS
  $('input[name="1"]').click(function() {
    var productDescription =$('#1-1id').val() + " on " + $('#1-2id').val();
    var newItem = {"name":"Specialty Flag","description":productDescription,"QTY":"1","amount":$("#1-2id option:selected").attr('amount')};
    addItemToCartObject(newItem);		
  });
  $('input[name="1flag"]').click(function() {
	var productDescription =$('#1-3id').val();
    var newItem = {"name":"Replacement Specialty Flag","description":productDescription,"QTY":"1","amount":"8.00"};
    addItemToCartObject(newItem);	
  });	
  $('input[name="2"]').click(function() {
    var productDescription =$('#2-1id').val() + " on " + $('#2-2id').val() + " " + $('#2-3id').val();
    var newItem = {"name":"Plain Pennant Flag","description":productDescription,"QTY":"1","amount":$("#2-3id option:selected").attr('amount')};
    addItemToCartObject(newItem);		
  });
   $('input[name="2flag"]').click(function() {
	var productDescription =$('#2-4id').val();
    var newItem = {"name":"Replacement Plain Pennant Flag","description":productDescription,"QTY":"1","amount":"4.50"};
    addItemToCartObject(newItem);		
  });	
    $('input[name="3"]').click(function() {
    var productDescription = $('#3-3id').val() + " " +$('#3-1id').val()  + " on " + $('#3-4id').val() + $('#3-2id').val();
    var newItem = {"name":"Standard Print Pennant Flag","description":productDescription,"QTY":"1","amount":$("#3-2id option:selected").attr('amount')};
    addItemToCartObject(newItem);		
  });
  $('input[name="3flag"]').click(function() {
	var productDescription =$('#3-6id').val() + " on " + $('#3-5id').val();
    var newItem = {"name":"Replacement Standard Print Pennant Flag","description":productDescription,"QTY":"1","amount":"5.00"};
    addItemToCartObject(newItem);	
  });	
    $('input[name="4"]').click(function() {
	var productDescription =$('#4-1id').val() + " on " + $('#4-2id').val();
    var newItem = {"name":"3ft x 5ft Trademarked Specialty Flag","description":productDescription,"QTY":"1","amount":$("#4-2id option:selected").attr('amount')};
    addItemToCartObject(newItem);	
  });
  $('input[name="4flag"]').click(function() {
	var productDescription =$('#4-3id').val();
    var newItem = {"name":"Replacement 3ft x 5ft Trademarked Specialty Flag","description":productDescription,"QTY":"1","amount":"29.00"};
    addItemToCartObject(newItem);	
  });	
    $('input[name="5"]').click(function() {
	var productDescription =$('#5-1id').val() + " on " + $('#5-2id').val();
    var newItem = {"name":"3ft x 5ft Specialty Flag","description":productDescription,"QTY":"1","amount":$("#5-2id option:selected").attr('amount')};
    addItemToCartObject(newItem);		
  });
    $('input[name="5flag"]').click(function() {
	var productDescription =$('#5-4id').val();
    var newItem = {"name":"Replacement 3ft x 5ft Specialty Flag","description":productDescription,"QTY":"1","amount":"10.00"};
    addItemToCartObject(newItem);	
  });	  
    $('input[name="6"]').click(function() {
    var productDescription = $('#6-1id').val() + "Flag on " +$('#6-3id').val() + " " + $('#6-2id').val();
    var newItem = {"name":"Boat Flag","description":productDescription,"QTY":"1","amount":$("#6-2id option:selected").attr('amount')};
    addItemToCartObject(newItem);		
  });
  $('input[name="6flag"]').click(function() {
	var productDescription =$('#6-4id').val();
    var newItem = {"name":"Replacement Boat Flag","description":productDescription,"QTY":"1","amount":"9.00"};
    addItemToCartObject(newItem);	
  });	
    $('input[name="7"]').click(function() {
    var productDescription = "Color: " + $('#7-2id').val() + " Fits " + $('#7-1id').val() +" inch pole";
    var newItem = {"name":"Original Flag Holder","description":productDescription,"QTY":"1","amount":$("#7-2id option:selected").attr('amount')};
    addItemToCartObject(newItem);	
  });
    $('input[name="8"]').click(function() {
	var productDescription =$('#8-1id').val()+ " Fits 1/4in Flags";
    var newItem = {"name":"Shorty Flag Holder","description":productDescription,"QTY":"1","amount":"22.50"};
    addItemToCartObject(newItem);		
  });
    $('input[name="9"]').click(function() {
	var productDescription =$('#9-2id').val() + " Fits " + $('#9-1id').val() + " Axle Nut";
    var newItem = {"name":"Clamp-On Flag Holder","description":productDescription,"QTY":"1","amount":"26.00"};
    addItemToCartObject(newItem);	
  });
    $('input[name="10"]').click(function() {
	var productDescription =$('#10-1id').val();
    var newItem = {"name":"Bolt-On Flag Holder","description":productDescription,"QTY":"1","amount":"22.50"};
    addItemToCartObject(newItem);	
  });
    $('input[name="11"]').click(function() {
	var productDescription =$('#11-1id').val();
    var newItem = {"name":"Springy Thingy Flag Holder","description":productDescription,"QTY":"1","amount":"22.50"};
    addItemToCartObject(newItem);		
  });
    $('input[name="12"]').click(function() {
	var productDescription =$('#12-1id').val();
    var newItem = {"name":"UTV Flag Holder","description":productDescription,"QTY":"1","amount":"28.00"};
    addItemToCartObject(newItem);	
  });
    $('input[name="13"]').click(function() {
	var productDescription =$('#13-1id').val() + " Pole";
    var newItem = {"name":"Split Bolt","description":productDescription,"QTY":"1","amount":"4.50"};
    addItemToCartObject(newItem);	
  });
    $('input[name="14"]').click(function() {
	var productDescription = "Only available in Silver";
    var newItem = {"name":"Steel Flag Bracket","description":productDescription,"QTY":"1","amount":"4.00"};
    addItemToCartObject(newItem);
  });
    $('input[name="15"]').click(function() {
	var productDescription = "Only available in Silver";
    var newItem = {"name":"Bar Gripper","description":productDescription,"QTY":"1","amount":"16.00"};
    addItemToCartObject(newItem);	
  });



//END BUTTON LISTENERS	
	
	
	
	
	
//  $('input[name="Add"]').click(function() {
//	alert('you just clicked the buttton!');
//    $.cookie.set('cartContents',obj,{json:true});
//    var a = $.cookie.get('testobject',true);
//    //$.cookie.unset('testobject');
//    alert('object:'+a.items[0].description);
//	addItemToCartObject(newItem);
//    var replacement = '<input type="hidden" name="item_name_3" value="Larger Item" /><input type="hidden" name="amount_3" value="425" />';
//    $('#testForm').append(replacement);
//  });// end of the "ADD INPUT" listener	
  
  
  
  $('input[name="editCart"]').click(function() {
    buildShoppingCartDialogHtml();
  	$('#dialog').dialog('open');
  });// end of the "EDITCART INPUT" listener	

  $('input[name="checkout"]').click(function() {
    checkout();
	$('#testForm').submit();
  });// end of the "EDITCART INPUT" listener	


  function addItemToCartObject(item){
    var action="";	
	$.each(obj.items, function(key, currentNode){	
	  if(currentNode.description == item.description){
		currentNode.QTY = parseInt(currentNode.QTY)+1;
		action="updated";
	  }else{
	    action ="add";
	  }
	});
    if(action=="add"){
	  obj.items.push(item);
	}
	buildShoppingCartHtml();
  }// end of addItemToCart function		
	
	
  function buildShoppingCartHtml(){
    $.cookie.set('cartContents',obj,{json:true});
	var finishedShoppingCartHtml = "";
	var loopCounter = 0;
	var openingShoppingCartHtml = '<table width="265" border="0" style=" font-size:11px"><tr><td width="185" align="center" class="ui-widget-header">ITEM</td><td width="" align="center" class="ui-widget-header">QTY</td><td width="" align="center" class="ui-widget-header">PRICE</td></tr>';
	var shoppingCartHtml = "";
	var closingShoppingCartHtml = '</table>';
	$.each(obj.items, function(key, currentNode){
	  if(loopCounter > 0){	
        shoppingCartHtml += "<tr><td width='' align='left'><strong>"+currentNode.name + " </strong>" +currentNode.description+"</td><td width='' align='right'>"+currentNode.QTY+"</td><td width='' align='right'>"+currentNode.amount+"</td></tr>";
	  }else{
	    loopCounter ++;
	  }
	});
	if(shoppingCartHtml == ""){
      finishedShoppingCartHtml = openingShoppingCartHtml +'<tr><td width="" align="left">CART IS EMPTY</td><td width="" align="right"></td><td width="" align="right"></td></tr>'+ closingShoppingCartHtml;;
	}else{
	  finishedShoppingCartHtml = openingShoppingCartHtml + shoppingCartHtml + closingShoppingCartHtml;
	}
	$('#cartContents').html(finishedShoppingCartHtml);
  }// end of buildShoppingCartHtml function
		
		
  function buildShoppingCartDialogHtml(){
    // build and place the html for the shopping cart DIALOG BOX
	var loopCounter1 = 0;
	var openingShoppingCartDialogHtml = '<table width="500" border="0" style=" font-size:12px"><tr><td width="350" align="center" class="ui-widget-header">ITEM</td><td width="" align="center" class="ui-widget-header">QTY</td><td width="" align="center" class="ui-widget-header">UNIT-PRICE</td></tr>';
	var shoppingCartDialogHtml = "";
	var closingShoppingCartDialogHtml = '</table>';
	$.each(obj.items, function(key, currentNode){
	  if(loopCounter1 > 0){	
        shoppingCartDialogHtml += '<tr><td width="175" align="left"><strong>'+currentNode.name+'</strong>'+currentNode.description+'</td><td width="25" align="right"><input id="'+loopCounter1+'" type="text" value="'+currentNode.QTY+'" size="5"/></td><td width="" align="right">'+currentNode.amount+'</td></tr>';
	  }
      loopCounter1 ++;
	});
	var finishedShoppingCartDialogHtml = openingShoppingCartDialogHtml + shoppingCartDialogHtml + closingShoppingCartDialogHtml;
	$('#message').html(finishedShoppingCartDialogHtml);	
  }// end of buildShoppingCartDialogHtml function		
		
		
		
  function updateCart(){
    var eraseArray = [];
    var updateLoopCounter = 0;
	$.each(obj.items, function(key, currentNode){
	  if(updateLoopCounter > 0){
	    var theid = "#"+	updateLoopCounter;
		  currentNode.QTY = $(theid).val();
		  if($(theid).val() == 0){
		    eraseArray.push(updateLoopCounter);
		  }
	  }
      updateLoopCounter ++;
	});
	for ( var i=0, len=eraseArray.length; i<len; ++i ){
	  var eraseLocation = eraseArray[i] - i;
      obj.items.splice(eraseLocation,1);
    }
    buildShoppingCartHtml();	
    $('#dialog').dialog('close');
  }// end of update cart		
		
		
  function checkout(){
    var checkoutCounter = 0;
	var checkoutHtml = "";
	$.each(obj.items, function(key, currentNode){
	  if(checkoutCounter > 0){
	     var itemName = currentNode.name + " " + currentNode.description;
		 var amount = currentNode.amount;
		 var quantity = currentNode.QTY;
 		 var number = checkoutCounter;
         checkoutHtml += '<input type="hidden" name="item_name_'+number+'" value="'+itemName+'" /><input type="hidden" name="amount_'+number+'" value="'+amount+'" /><input type="hidden" name="quantity_'+number+'" value="'+quantity+'" />';

	  }
      checkoutCounter ++;
	});  
	$('#testForm').append(checkoutHtml);
  }// end of checkout function		
  	
}); // end of the initial jquery function
