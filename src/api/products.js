import axios from "axios";

export default function () {
  return {
    async addProduct(productData) {
      return await axios.post(
        `https://goge-africa-shop-default-rtdb.firebaseio.com/products.json`,
        productData
      );
    },
    async getProducts() {
      return await axios.get(
        "https://goge-africa-shop-default-rtdb.firebaseio.com/products.json"
      );
    },
    async orderBy() {
      return await axios.get(
        'https://goge-africa-shop-default-rtdb.firebaseio.com/products/-MeF0gTrLTdrcu5ulpUD.json?orderBy="$value"&equalTo="Alcoholic"&print=pretty'
      );
    },
  };
}
