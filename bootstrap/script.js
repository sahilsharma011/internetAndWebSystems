$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
var current_category = 0;
var mobiles = ["images/m1.jpeg",
				  "images/m2.jpeg",
				  "images/m3.jpeg",
				  "images/m4.jpeg",
				  "images/m5.jpeg"
				];
var mobileHeadings = ["mobile1","mobile2","mobile3","mobile4","mobile5"];		
var mobilePrice = ["20000","40000","10000","10100","50000"];			
var laptops = ["images/l1.jpeg",
  "images/l2.jpeg",
  "images/l3.jpg",
  "images/l4.jpg",
  "images/l5.jpeg"
];
var laptopHeadings = ["laptop1","laptop2","laptop3","laptop4","laptop5"];
var laptopPrice = ["20000","40000","10000","10100","50000"];
var tv = ["images/t1.jpg",
  "images/t2.jpg",
  "images/t3.jpg",
  "images/t4.jpg",
  "images/t5.jpg"
];
var tvHeadings = ["tv1","tv2","tv3","tv4","tv5"];
var tvPrice = ["20000","40000","10000","10100","50000"];
var headphones = ["images/h1.jpg",
  "images/h2.jpg",
  "images/h3.jpg",
  "images/h4.jpg",
  "images/h5.jpg"
];
var headphoneHeadings = ["headphone1","headphone2","headphone3","headphone4","headphone5"];
var headphonePrice = ["20000","40000","10000","10100","50000"];
var speakers = ["images/s1.jpg",
  "images/s2.jpg",
  "images/s3.3pg",
  "images/s4.jpg",
  "images/s5.jpg"
];
var speakersHeadings = ["speakers1","speakers2","speakers3","speakers4","speakers5"];
var speakerPrice = ["20000","40000","10000","10100","50000"];

function showProducts(category)	{	
	current_category = category;
	var img = document.getElementsByClassName('product_image');
	var price = document.getElementsByClassName('product_price');
	var headings = document.getElementsByClassName('product_title');
	var popover = document.getElementsByClassName('product_details');
	for(i = 0 ; i < img.length ; i++)
	{
		switch(category)
		{
			case 0: img[i].setAttribute('src' , mobiles[i]);
					headings[i].innerHTML = mobileHeadings[i];
					price[i].innerHTML = mobilePrice[i];
					popover[i].setAttribute('data-content','GST - N/A');
					break;
			case 1: img[i].src = laptops[i];
					headings[i].innerHTML = laptopHeadings[i];
					price[i].innerHTML = laptopPrice[i];
					popover[i].setAttribute('data-content','GST - 18%');
					break;
			case 2: img[i].src = tv[i];
					headings[i].innerHTML = tvHeadings[i];
					price[i].innerHTML = tvPrice[i];
					popover[i].setAttribute('data-content','GST - 12%');
					break;
			case 3: img[i].src = headphones[i];
					headings[i].innerHTML = headphoneHeadings[i];
					price[i].innerHTML = headphonePrice[i];
					popover[i].setAttribute('data-content','GST - 28%');
					break;
			case 4: img[i].src = speakers[i];
					headings[i].innerHTML = speakerHeadings[i];
					price[i].innerHTML = speakerPrice[i];
					popover[i].setAttribute('data-content','GST - 18%');
					break;
			default: img[i].src = "http://placehold.it/700x400";
					headings[i].innerHTML = "sample heading";
					price[i].innerHTML = "1000";
					popover[i].setAttribute('data-content','GST - N/A');		
		}
		
	}
}
var cart = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function addToCart(product){

	switch(current_category)
		{
			case 0: cart[product]++;
					alert("Item added to cart!");
					break;
			case 1: cart[product + 5]++;
					alert("Item added to cart!");
					break;
			case 2: cart[product + 10]++;
					alert("Item added to cart!");
					break;
			case 3: cart[product + 15]++;
					alert("Item added to cart!");
					break;
			case 4: cart[product + 20]++;
					alert("Item added to cart!");
					break;
			default: alert("this is a new product");		
		}
}
var final_price = 0;
function showCart(){

	var table = document.getElementById("myTable");
	var row;
	var name;
	var qty;
	var price;
	var total;
	for(var i = 0 ; i < cart.length ; i++)
	{
		if(cart[i] > 0)
		{	//console.log(i);
			row = table.insertRow(1);
			name = row.insertCell(0);
			
			qty = row.insertCell(1);
			
			price = row.insertCell(2);
			total = row.insertCell(3);
			
			var category = Math.floor(i/5);
			var product = i%4;
			
			
			switch(category)
			{
				case 0: name.innerHTML = mobileHeadings[product];
					    break;
				case 1: name.innerHTML = laptopHeadings[product];
						break;
				case 2: name.innerHTML = tvHeadings[product];
						break;
				case 3: name.innerHTML = headphoneHeadings[product];
						break;
				case 4: name.innerHTML = speakerHeadings[product];
						break;
			}
			
			
			qty.innerHTML = cart[i];
			
			
			switch(category)
			{
				case 0: price.innerHTML = mobilePrice[product];
					    break;
				case 1: price.innerHTML = laptopPrice[product];
						break;
				case 2: price.innerHTML = tvPrice[product];
						break;
				case 3: price.innerHTML = headphonePrice[product];
						break;
				case 4: price.innerHTML = speakerPrice[product];
						break;
			}
			
			
			
			
			switch(category)
			{
				case 0: total.innerHTML = cart[i]*parseInt(mobilePrice[product]);
						final_price = final_price + (cart[i]*parseInt(mobilePrice[product]));
					    break;
				case 1: total.innerHTML = cart[i]*parseInt(laptopPrice[product]);
						final_price = final_price + (cart[i]*parseInt(laptopPrice[product]));
						break;
				case 2: total.innerHTML = cart[i]*parseInt(tvPrice[product]);
						final_price = final_price + (cart[i]*parseInt(tvPrice[product]));
						break;
				case 3: total.innerHTML = cart[i]*parseInt(headphonePrice[product]);
						final_price = final_price + (cart[i]*parseInt(headphonePrice[product]));
						break;
				case 4: total.innerHTML = cart[i]*parseInt(speakerPrice[product]);
						final_price = final_price + (cart[i]*parseInt(speakerPrice[product]));
						break;
			}
		}
	}
	row = table.insertRow(-1);
	name = row.insertCell(0);
	qty = row.insertCell(1);
	price = row.insertCell(2);

	total = row.insertCell(3);
	if(final_price > 0)
	{
		console.log(final_price)
		total.innerHTML = final_price;
	}
	else
	{
		price.innerHTML = "Cart Empty!";
	}
	final_price = 0;
}

function resetCart(){
	var table = document.getElementById('myTable');
	while(table.rows.length > 0){
		table.deleteRow(1);
	}
}
	var new_category;
	var counter = 5;

	function addCategory(){
		new_category = prompt("Please enter a new category:", "sample");
		var category = document.getElementById('category_id');
		var inhtml = category.innerHTML;
		category.innerHTML = inhtml + '<a href ="#" onclick="showProducts('+counter+')" class="list-group-item cat">'+new_category+'</a>'
		counter++;
	}
