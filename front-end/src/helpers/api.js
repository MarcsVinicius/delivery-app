export const fetchProducts = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/products`);
  const products = await response.json();
  return products;
};

export const temp = '';
