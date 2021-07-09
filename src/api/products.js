import axios from "axios";

export default function () {
  return {
    async addProduct(productData) {
      return await axios.put(
        `https://goge-africa-shop-default-rtdb.firebaseio.com/products/${productData.idDrink}.json`,
        productData
      );
    },
    async getProducts() {
      return await axios.get(
        "https://goge-africa-shop-default-rtdb.firebaseio.com/products.json"
      );
    },
  };
}
