const doMath = (quantity, price) => {
  const result = quantity * price;
  return result.toFixed(2);
};

const mapedProducts = ({ id, saleDate, status, products, users }) => {
  const product = products.map((e) => ({
      productName: e.name,
      quantity: e.saleProduct.quantity,
      unityPrice: e.price,
      subTotal: doMath(e.saleProduct.quantity, e.price),
    }));

    const result = {
      sale: id,
      sellerName: users.name,
      saleDate,
      status,
      products: product,
    };

    return result;
};

module.exports = {
  doMath,
  mapedProducts,
};
