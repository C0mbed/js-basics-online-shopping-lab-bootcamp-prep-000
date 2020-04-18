var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log(item);
  let price = Math.floor(Math.random() * (100 - 0) + 0);
  let itemsInCart = {itemName: item, itemPrice: price};
  cart.push(itemsInCart);
  return `${item} has been added to your cart.`
}

function viewCart() {
  let statement = [];
  let lastItem = cart.length-1;
  if (cart.length > 1) {
    for (var i = 0; i < cart.length - 1; i++) {
      let current = `${cart[i].itemName} at $${cart[i].itemPrice}`;
      statement.push(current);
    }
    let fullCart = statement.join(', ');
    return `In your cart, you have ${fullCart}, and ${cart[lastItem].itemName} at $${cart[lastItem].itemPrice}.`;
  } else if (cart.length == 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    return 'Your shopping cart is empty.'
  }

}

function total() {
  let current = 0;
  for (var i = 0; i < cart.length; i++) {
    current = current + cart[i].itemPrice
  }
  return current;
}

function removeFromCart(item) {
  console.log('item contains '+ item);
  for (var i = 0; i < cart.length; i++) {
    let currentItem = cart[i];
    if (currentItem && currentItem == item) {
      cart.splice(i);
    } else {
      return 'This item is not in your cart.'
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber !undefined) {
    let final = total();
    cart = [];
    return `Your total cost is $${final}, which will be charged to the card ${cardNumber}.`;
  } else {
    print('Sorry, we don\'t have a credit card on file for you.');
  }
}
