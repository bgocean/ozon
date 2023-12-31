const postData = () => {
  return fetch("http://localhost:3000/goods", {
    method: "POST",
    body: JSON.stringify({
      title: "Syberia 3",
      price: 1500,
      sale: true,
      img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
      category: "Игры и софт",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export default postData;
