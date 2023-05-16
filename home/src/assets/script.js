/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products =[]; 

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
let Strawberry ={
  name: "Strawberries",
  price: 10,
  quantity: 0,
  productId: 1,
  image: src = "images/strawberry.jpg"
};
let Cherry=	{
  name: "Cherries",
  price: 6,
  quantity: 0,
  productId: 2,
  image: src = "images/cherry.jpg"
};
let Orange= {
  name: "Oranges",
  price: 10,
  quantity: 0,
  productId: 3,
  image: src = "images/orange.jpg"
};

products.push(Strawberry, Cherry, Orange);
//products.push(Strawberry);
//products.push(Cherry);
//products.push(Orange);


/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart =[];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
 
  //find the product 
    /*for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) { 
      product = products[i]; 
      break; }
  }
  //find item in the cart 
     let index = -1;
   for (let i = 0; i < cart.length; i++) {
       if (cart[i].productId === productId) {
         index = i;
          break; 
        }
      }
    if (index === -1) {
    const Item = {productId: product.productId, name: product.name, price: product.price, quantity: 1};
    cart.push(Item);
    }else {
    //already in the cart, increase its quantity
    cart[index].quantity++;}*/
    let product = products.find(product => product.productId === productId);
    product.quantity += 1;
  
    if (!cart.includes(product)) {
      cart.push(product)
    }
  }
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
 //find the product 
 for (let i = 0; i < cart.length; i++) {
  if (cart[i].productId === productId) {
    cart[i].quantity++;
   }
 }
 }
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId){
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      if(cart[i].quantity===1){
        removeProductFromCart(productId)
      }else {
        cart[i].quantity--;
      }
     }
   }}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId){
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === productId) {
      cart[i].quantity =0;
      cart.splice(i,1);
     }
}}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
	let total = 0;
	for (const product of cart) {
    total += product.quantity * product.price;
	}
	return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  for(i=0 ;i<=cart.length-1;i++){
    cart[i].quantity=0;
    cart.pop(cart[i]);
}}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid =0;
function pay(amount){
   totalPaid+=amount;
    return  totalPaid - cartTotal();
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}