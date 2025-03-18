const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        return JSON.parse(storedCart);
    }
    return []
}

const saveCardData = (cart) => {
    const saveCardDataString = JSON.stringify(cart)
    localStorage.setItem('cart', saveCardDataString)

}

const addToLS = (id) => {
    const cart = getStoredCart()
    cart.push(id);
    saveCardData(cart)
}

export { addToLS };
