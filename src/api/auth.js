import axios from "axios";

export default function () {
  return {
    async signUp(email, password) {
      return await axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUuyZ58eLc9y4BxNSp1aA_1kKibgVVcd0",
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        )
        .catch(function (error) {
          if (error.response) {
            throw new Error(
              `Status code ${
                error.response.status
              }: ${error.response.data.error.message
                .toLowerCase()
                .replaceAll("_", " ")}`
            );
          }
        });
    },
    async login(email, password) {
      return await axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUuyZ58eLc9y4BxNSp1aA_1kKibgVVcd0",
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        )
        .catch(function (error) {
          throw new Error(
            `${error.response.status}: ${error.response.data.error.message
              .toLowerCase()
              .replaceAll("_", " ")}`
          );
        });
    },
  };
}
