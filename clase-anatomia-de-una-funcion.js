function calcularDescuento (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100
    const precioConDescuento = price - discount

    return precioConDescuento
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calcularDescuento(originalPrice, discountPercentage)

console.log ('Precio Original: $' + originalPrice)
console.log ('Descuento: ' + discountPercentage + '%')
console.log ('Precio con descuento: $' + finalPrice)
