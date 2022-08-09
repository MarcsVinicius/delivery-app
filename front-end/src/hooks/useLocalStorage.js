const useLocalStorage = (key, initialState) => {
  const setItem = (value) => {
    localStorage.setItem(key, value);
  };

  if (initialState) {
    setItem(initialState);
  }

  return [localStorage.getItem(key), setItem];
};

export default useLocalStorage;
