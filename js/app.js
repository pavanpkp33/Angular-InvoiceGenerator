var app = angular.module('myApp',[]);

app.controller("orderGenerator", function($scope)
     { 
	 var grandTotal;
        $scope.items = [
           {Name: "Ice Cream", Price: 3, Quantity: ""},
        {Name: "Pizza", Price: 7, Quantity: ""},
        {Name: "Garlic Bread", Price: 5, Quantity: ""},
        {Name: "Pasta", Price: 8, Quantity: ""},
        {Name: "Soda", Price: 2, Quantity: ""}
		
        ];
		
		 $scope.selectedItems = [];   
    
    $scope.addItem = function(item) {
		
        $scope.selectedItems.push(item);
 $scope.item = {};
    }
	
	 $scope.removeItem = function(index){
        $scope.selectedItems.splice(index,1);
    }
	
	$scope.generateBill = function(){
        var sum = 0;
 for(count=0;count<$scope.selectedItems.length;count++){
     sum += $scope.selectedItems[count].Price*$scope.selectedItems[count].Quantity;
 }
 grandTotal = sum;
 return sum;
    }
	 var invoiceArr = [];
	$scope.invoice = function(){
        
		var local ={};
		invoiceArr.length =0;
 for(count=0;count<$scope.selectedItems.length;count++){
	 sumIndividual = $scope.selectedItems[count].Price*$scope.selectedItems[count].Quantity;
	 
	 local.Name = $scope.selectedItems[count].Name;
	 local.Price = $scope.selectedItems[count].Price;
	 local.Quantity = $scope.selectedItems[count].Quantity;
	 local.total = sumIndividual;
	 invoiceArr.push(local);
	 local ={};
     
 }
 
	var header = "<h3>Yummys!!</h3><h5>431, 9th Avenue, BG Road, <br>KAR, IND - 560085.</h5><center> <h4>Retail Invoice</h4></center>";
	document.getElementById("shopHeading").innerHTML = header;
	document.getElementById("grandTotal").innerHTML = "Grand Total: "+grandTotal+"$";
	var r = new Array(), j = -1;

 for (var key=0, size=invoiceArr.length; key<size; key++){
     r[++j] ='<tr><td>';
     r[++j] = invoiceArr[key]["Name"];
     r[++j] = '</td><td >';
     r[++j] = invoiceArr[key]["Price"];
     r[++j] = '</td><td>';
     r[++j] = invoiceArr[key]["Quantity"];
     r[++j] = '</td><td>';
	  r[++j] = invoiceArr[key]["total"];
     r[++j] = '</td></tr>';
 }
 var value = (r.join(''));
 	var message ="<table class=\"table table-hover\"><tr><th>Item</th><th>Price/Unit</th><th>Quantity</th><th>Amount($)</th></tr>"+value+"</table>";
	document.getElementById("billingTable").innerHTML = message;
    }
	
});