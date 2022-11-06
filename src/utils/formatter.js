 
const price = (price, withDecimals = false) => {
    let config = {
      style: 'currency',
      currency: 'ARS',
    }

    if (!withDecimals) {
      config = {
        ...config,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }
    }

    const formatter = new Intl.NumberFormat('es-AR', config)

    return formatter.format(price)
}

const formatter = {
  price
}

export default formatter;