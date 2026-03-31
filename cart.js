// ============================================================================
// PART 1: SETTING UP THE BASKET
// ============================================================================

// We create a variable named 'cart'.
// 'const' means constant: we cannot replace this variable with a completely new list later.
// '[]' creates an empty Array (a list).
// Think of this as handing the customer an empty physical shopping basket.
const cart = []

// ============================================================================
// PART 2: THE "ADD ITEM" TOOL
// ============================================================================

// We define a function (a tool) named 'addItem'.
// It needs 4 ingredients (parameters) to work:
// 1. 'cart': The current list of items.
// 2. 'name': The name of the product (e.g., "Apple").
// 3. 'price': The cost of one unit (e.g., 0.5).
// 4. 'quantity': How many they want (e.g., 3).
function addItem(cart, name, price, quantity){

    // We need to check if this item is already in the basket.
    // '.find()' is a tool that searches through the list.
    // It looks at every 'item' in the cart until it finds one where 'item.name' matches the 'name' we passed in.
    // If it finds it, 'existingItem' becomes that object. If not, it becomes 'undefined'.
    const existingItem = cart.find(item => item.name === name)

    // 'if' checks if 'existingItem' exists (is not empty/undefined).
    // SCENARIO A: The item is already in the cart (e.g., you already have Apples).
    if (existingItem){
        // We do NOT add a new line item. Instead, we update the quantity.
        // '+=' means "take the current value and add the new quantity to it".
        // Example: If you had 3 Apples and add 2 more, now you have 5.
        existingItem.quantity += quantity
    
    // 'else' means the item was NOT found (SCENARIO B: This is a new product).
    }else{
        // '.push()' adds a new item to the end of the list.
        // We create a new Object { } to represent the product.
        // {name, price, quantity} is shorthand for {name: name, price: price, quantity: quantity}.
        // We are putting a new sticker on a new product and putting it in the basket.
        cart.push({name, price, quantity})
    }

    // 'return' sends the updated cart back to wherever this function was called.
    // This ensures the rest of the program sees the new changes.
    return cart
}

// ============================================================================
// PART 3: THE "REMOVE ITEM" TOOL
// ============================================================================

// We define a function named 'removeItem'.
// It needs 2 ingredients:
// 1. 'cart': The current list.
// 2. 'name': The name of the product to remove (e.g., "Banana").
function removeItem(cart, name){

    // '.findIndex()' is like '.find()', but instead of giving us the item, 
    // it gives us the NUMBER (index) of where the item sits in the list (0, 1, 2, etc.).
    // It searches for an item where 'item.name' matches the 'name' we want to remove.
    const index = cart.findIndex(item => item.name === name)

    // We check if the item was found.
    // In computer lists, if something is NOT found, the index is -1.
    // So, 'if index is NOT equal to -1', it means we found the item.
    if(index !== -1){
        
        // '.splice()' is a tool that changes the contents of an array by removing or replacing existing elements.
        // Parameter 1 (index): Where to start cutting.
        // Parameter 2 (1): How many items to remove (we remove exactly 1 item).
        // This physically cuts the item out of the list.
        cart.splice(index, 1)
    }

    // Send the updated (shorter) cart back.
    return cart
}

// ============================================================================
// PART 4: THE "CALCULATE TOTAL" TOOL
// ============================================================================

// We define a function named 'getCartTotal'.
// It needs 1 ingredient:
// 1. 'cart': The current list of items.
function getCartTotal(cart){

    // '.reduce()' is a powerful tool that boils a list down to a single value.
    // It loops through every item in the cart one by one.
    // (total, item) => ... : 'total' is the running sum, 'item' is the current product being looked at.
    // The ', 0' at the end sets the starting 'total' to zero.
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    // Math breakdown:
    // 1. Take the current 'total'.
    // 2. Add to it: (item.price multiplied by item.quantity).
    // 3. Pass the new total to the next item.
    // 4. Finally, return the final number.
}

// ============================================================================
// PART 5: RUNNING THE GAME (EXECUTION)
// ============================================================================

// 1. Add 3 Apples at $0.50 each.
// The function runs, updates the 'cart' variable, and we log the result to the screen.
console.log(addItem(cart, "Apple", 0.5, 3)) 
// Current Cart: [{ name: "Apple", price: 0.5, quantity: 3 }]

// 2. Add 5 Bananas at $0.30 each.
// "Banana" is new, so it gets pushed to the list.
console.log(addItem(cart, "Banana", 0.3, 5)) 
// Current Cart: [Apple {...}, Banana {...}]

// 3. Add 2 Mangos at $1.00 each.
// "mango" is new (note the lowercase 'm'), so it gets pushed.
console.log(addItem(cart, "mango", 1.0, 2)) 
// Current Cart: [Apple {...}, Banana {...}, mango {...}]

// 4. Remove Bananas.
// The function finds "Banana", gets its index, and splices it out.
console.log(removeItem(cart, "Banana")) 
// Current Cart: [Apple {...}, mango {...}]  <-- Banana is gone!

// 5. Calculate the final price.
// Apple: 0.5 * 3 = 1.5
// Mango: 1.0 * 2 = 2.0
// Total: 1.5 + 2.0 = 3.5
console.log(getCartTotal(cart)) 
// Output: 3.5