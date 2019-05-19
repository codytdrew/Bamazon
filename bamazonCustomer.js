var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  user: "root",

  password: "root",
  database: "bamazon_db"
});


//connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // // run the start function after the connection is made to prompt the user
  welcome();
});


//function which prompts the user for what action they should take
function welcome() {

  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.log("Welcome to the Bamazon grocery shop.  Here are our current available items.");
    for (var i = 0; i < results.length; i++) {
      console.log("ID " + results[i].item_id + " PRODUCT NAME: " + results[i].product_name + " DEPARTMENT: " + results[i].department_name + " PRICE: $ " + results[i].price + " QUANTITY AVAILABLE: " + results[i].stock_quantity);
    }
    //asks the user what they would like to buy from available products
    inquirer.prompt([{
      name: "input",
      type: "list",
      message: "What is the ID of the product you would like to buy?"

      // User selects what they want and they are given the amount and the price of the product
    }]).then(function (answer) {
      var item_id = parsInt(answer.item_id)

      for (var i = 0; i < results.length; i++) {
        if (results[i].item_id == answer.item_id) {
          var result = results[i];
          console.log('We have ' + result.stock_quantity + '' + result.product_name + ' in stock for $' + result.price + 'pre item');

          // user is prompted with how many of the product they want to buy
          inquirer.prompt([{
            type: 'input',
            name: 'itemQuantity',
            message: 'How many ' + result.product_name + ' would you like to buy?'

          }]).then(function (answer) {
            var quantity = parseInt(answer.itemQuantity);
// response --> checks to see if their is enough supply for user demand.  If not enought, prompts Sorry.
            if (quantity > results.stock_quantity) {
              console.log("Sorry we do not have enough available to fullfill your order. Please choose a lower quantity or select another item.");
              //Asks if the user is done shopping.  If they are done then the program ends.  Otherwise the loops continues with the update in goods.
              inquirer.prompt([{
                type: 'confirm',
                name: 'shop',
                message: "Is there anything else we can help you with?"

                //if they want to keep shopping the items will be redisplayed.  Otherwise they are asked to pay and thanked for their time.
              }]).then(function (answer) {
                if (answer.shop) {
                  welcome();
                } else {
                  console.
                  console.log("Thank you for your purchase. We hope you love your products.")
                
            
              console.log("Time to pay up! You owe:" + total);

              connection.query('UPDATE Products SET stock_quantity = stock_quantity - ? WHERE item_id = ?', [quantity, item_id], function (err, results) {
                if (err) throw err;
              });

              //Cost calculations 
              var cost = result.price;
              var totalCost = cost * quantity;
              var totalCostRound = Math.round(totalCost * 100) / 100;
              var tax = ((.65 / 10000) * 1000) * totalCost;
              var taxRound = Math.round(tax * 100) / 100;
              var total = totalCostRound + taxRound;

                }
              })
            }

          
          })
        }
      }
    })
  })
  connection.end();
}