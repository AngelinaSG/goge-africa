import instance from "./instance";

import cocktailsModule from "./cocktails";

export default {
  cocktails: cocktailsModule(instance),
};
