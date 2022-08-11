const getTotalPrice = () => {
  const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
  const totalPrice = savedProducts
    .reduce((acc, { quantity, price }) => acc + (+quantity * +price), 0);

  return totalPrice.toFixed(2).replace('.', ',');
};

export default getTotalPrice;
