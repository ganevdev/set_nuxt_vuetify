import Vuex from "vuex";

import devicesJSON from "~/assets/devices.json";

const store = () => {
  return new Vuex.Store({ state: { devices: devicesJSON } });
};

export default store;
