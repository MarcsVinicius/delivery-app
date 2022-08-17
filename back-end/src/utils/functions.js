const doMath = (quantity, price) => {
  const result = quantity * price;
  return result.toFixed(2);
};

const mapedProducts = ({ id, saleDate, status, products, users }) => {
  const product = products.map((e) => ({
      productName: e.name,
      quantity: e.salesProduct.quantity,
      unityPrice: e.price,
      subTotal: doMath(e.salesProduct.quantity, e.price),
    }));
    console.log(id);

    const result = {
      sale: id,
      sellerName: users.name,
      saleDate,
      status,
      products: product,
    };

    return result;
};

const setRole = (value) => {
  let role = '';
  
  if (value) {
    role = value;
  } else {
    role = 'administrator';
  }
  return role;
};

module.exports = {
  doMath,
  mapedProducts,
  setRole,
};
