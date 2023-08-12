const getData = () => {
  return fetch(
    "https://ozon-47890-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
