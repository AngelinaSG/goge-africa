import axios from "axios";

export default function () {
  return {
    async checkPaymentInfo() {
      return await axios.post(
        "https://api.sandbox.checkout.com/payments",
        {
          source: {
            type: "card",
            number: "4242424242424242",
            expiry_month: 9,
            expiry_year: 2022,
            cvv: "100",
          },
          amount: 2000,
          currency: "USD",
          reference: "TRK12345",
        },
        {
          headers: {
            Authorization: "sk_test_adcf254d-2469-4357-b59b-55cdec435ed2",
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
    },
  };
}
