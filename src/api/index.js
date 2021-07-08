import instance from "./instance";

import cocktailsModule from "./cocktails";
import paymentModule from "./payment";
import authModule from "./auth";

export default {
  cocktails: cocktailsModule(instance),
  payment: paymentModule(instance),
  auth: authModule(instance),
};
