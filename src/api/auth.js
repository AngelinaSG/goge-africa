import axios from "axios";

export default function () {
  return {
    async signUp() {
      return await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUuyZ58eLc9y4BxNSp1aA_1kKibgVVcd0",
        {
          email: "lina@gmail.com",
          password: "12345678",
          returnSecureToken: true,
        }
      );
    },
    async login() {
      return await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUuyZ58eLc9y4BxNSp1aA_1kKibgVVcd0",
        {
          email: "lina@gmail.com",
          password: "12345678",
          returnSecureToken: true,
        }
      );
    },
  };
}
