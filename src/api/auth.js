import axios from "axios";

export default function () {
  return {
    async auth() {
      return await axios.post("api/auth/register");
    },
  };
}
