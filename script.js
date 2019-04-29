var itemList = [];
var prices = [];
 

$("#add").click(function() {
    var newPrice = parseInt($("#secondInput").val());
    if(newPrice < 0) {
        alert("No Negative Numbers!");
        return(newPrice);
    }
    var total = 0;
    var newItem = $("#firstInput").val();
    itemList.push(newItem);
    var material = itemList.length;
    $(".materials").text(material);
    prices.push(newPrice);
    prices.forEach(function(price) {
        total = total + parseInt(price);
        $(".total-prices").text(total);
        if(price < 0) {
        alert("No negative numbers!");
        prices.pop();
        itemList.pop();
        }
    });
    $("#cart").append("<div class='new-row'>" + "<div>" + newItem + "</div>" + "<div>" + newPrice + "</div>" + "</div>");
});

$("#totalAdd").click(function() {
   alert("Thank you for Shoping at The Store! " + itemList[0] + " was a Great Choice, and at a whoping " + prices[0] + " dollar(s), WOW!"); 
});

// alert("Prices must be a whole number, no decimals!");



