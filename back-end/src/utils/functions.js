const doMath = (quantity, price) => {
  const result = quantity * price;
  return result.toFixed(2);
};

const mapedProducts = ({ id, saleDate, status, products, users, totalPrice }) => {
  const product = products.map((e) => ({
      productName: e.name,
      quantity: e.salesProduct.quantity,
      unityPrice: e.price,
      subTotal: doMath(e.salesProduct.quantity, e.price),
    }));

    const result = {
      sale: id,
      sellerName: users.name,
      saleDate,
      status,
      totalPrice,
      products: product,
    };

    return result;
};

module.exports = {
  doMath,
  mapedProducts,
};
