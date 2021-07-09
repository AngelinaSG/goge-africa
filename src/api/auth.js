import axios from "axios";

export default function () {
  return {
    async signUp(password, email) {
      return await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUuyZ58eLc9y4BxNSp1aA_1kKibgVVcd0",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
    },
    async login(email, password) {
      return await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUuyZ58eLc9y4BxNSp1aA_1kKibgVVcd0",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
    },
  };
}
