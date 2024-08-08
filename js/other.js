function toggle_cart(){
    document.getElementById("cart").classList.toggle("menu_width");
    document.querySelector(".cart_button").classList.toggle("cart_btn-style");
}

var foodItems = [["friedRice", 400, 0], ["stringHoppers", 300, 0],["hoppers",80, 0],["riceWithThreeCurries", 250, 0],
                ["noodles",300, 0],["biriyaniSwan", 800, 0],["Buger", 650, 0],["shawarmaDish", 400, 0]];


var cart_items_count = 0;
var final_items = [];


var cart = document.getElementById("cart_total");
cart.value = 0;


// add item into the cart...
function add_item(num){
    if(foodItems[num][2] == 0){
        document.getElementById("cart_count_items").classList.add("active");
        cart_items_count += 1;
    }

    var item = foodItems[num][0];
    document.getElementById(item).style.display = "flex";
    document.getElementById("item_count_" + item).value = 1;

    foodItems[num][2] = 1;
    

    // total calculation...
    var total_amount = 0; 
    for(let i= 0; i < foodItems.length; i++){
        total_amount += foodItems[i][2] * foodItems[i][1]
    }
    cart.innerHTML = total_amount;

    document.getElementById("cart_count_items").innerHTML = cart_items_count
}


// calculate function...
function calculate_total(num){
    var item = foodItems[num][0];
    count = document.getElementById("item_count_" + item).value;

    if(count < 1){
        foodItems[num][2] = 0;
        document.getElementById(item).style.display = "none";
        cart_items_count -= 1;
    }else{
        foodItems[num][2] = count;
    }


    // if(foodItems[item][2] < 1){
    //     document.getElementById(item).style.display = "none";
    // }

    // total calculation...
    var total_amount = 0; 
    for(let i= 0; i < foodItems.length; i++){
        total_amount += foodItems[i][2] * foodItems[i][1]
    }
    cart.innerHTML = total_amount;

    document.getElementById("cart_count_items").innerHTML = cart_items_count

    if(cart_items_count < 1){
        document.getElementById("cart_count_items").classList.toggle("active");
    }
}



// query......start
let querystring = window.location.search;
let urlParam = new URLSearchParams(querystring);
let value = urlParam.get('id');
// query.....end


// for order placing to kitchen....
function order_palced(){
    for(let i = 0; i < foodItems.length; i++){
        if(foodItems[i][2] > 0){
            final_items.push([foodItems[i][0], foodItems[i][2]]);
        };
    };
    window.writeTableData(value="table-01",final_items);
    
    function time_out(){
        location.reload();
    }
    setTimeout(time_out,1000);
}




