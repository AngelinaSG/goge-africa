import instance from "./instance";

import cocktailsModule from "./cocktails";
import paymentModule from "./payment";

export default {
  cocktails: cocktailsModule(instance),
  payment: paymentModule(instance),
};
