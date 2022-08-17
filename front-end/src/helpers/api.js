export const fetchProducts = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/products`);
  const products = await response.json();
  return products;
};

export const fetchSellers = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users/seller`);
  const products = await response.json();
  return products;
};

export const fetchOrderBySaleId = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/customer/orders/${id}`);
  const products = await response.json();
  return products;
};
