const cartStorageKey = 'VAPE_SHOP_CART';

const addToCart = (item) => {
    let cart = getCartFromStorage();
    console.log(item)
    console.log(cart)
    const itemIdx = cart.findIndex(i => i.sku === item.sku)


    if (itemIdx === -1) {
        item.quantity = 1;
        cart = cart.concat(item);
    } else {
        cart[itemIdx].quantity = cart[itemIdx].quantity + 1;
    }

    setCartInStorage(cart);
    return cart;
};

const removeFromCart = (item) => {
    
    let cart = getCartFromStorage();
    console.log(item)
    console.log(cart)
    const itemIdx = cart.findIndex(i => i.sku === item.sku);
    
    if (itemIdx === -1) {
        return;
    } else {
        delete cart[itemIdx]
        cart = cart.filter(i => i.sku !== item.sku);
    }

    setCartInStorage(cart);
    // localStoage.clear();
    return cart;
};

const decrementItemInCart = (cart, item) => {
    // skuNum = parseInt(skuNum)
    
    const itemIdx = cart.findIndex(i => i.sku === sku);
    
    if (itemIdx === -1) {
        return;
    } else if (cart[itemIdx].quantity === 1) {
        cart = cart.filter(i => i.sku !== item.sku); //item.skuNum
    }
    else {
        cart[itemIdx].quantity = cart[itemIdx].quantity - 1;
    }

    setCartInStorage(cart);
    return cart;
};


//cb in ()
const getCartFromStorage = () => {

    const cart = localStorage.getItem(cartStorageKey);
    return cart ? JSON.parse(cart) : [];
};

const setCartInStorage = (cart) => {
    
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
};

cart = getCartFromStorage(); 
