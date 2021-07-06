import axios from "axios";

export default function () {
  return {
    async checkPaymentInfo() {
      return await axios.post(
        "https://api.checkout.com/payments",
        {
          source: {
            type: "token",
            token: "tok_4gzeau5o2uqubbk6fufs3m7p54",
          },
          amount: 6500,
          currency: "USD",
          reference: "ORD-5023-4E89",
          metadata: {
            udf1: "TEST123",
            coupon_code: "NY2018",
            partner_id: 123989,
          },
        },
        {
          headers: {
            Authorization: "pk_test_daff9f59-3828-4dfd-9d6d-8352811bc8bb",
          },
        }
      );
    },
  };
}
