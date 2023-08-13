import getData from "./getData";
import postData from "./postData";
import renderGoods from "./renderGoods";

const second = () => {
  const cartBtn = document.getElementById("cart");
  
  getData().then((data) => {
    renderGoods(data);
  });
};

export default second;
