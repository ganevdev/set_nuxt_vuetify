import devicesJSON from "~/assets/devices.json";

export const state = () => ({
  devices: devicesJSON
});

export const getters = {
  deviceByASIN: state => ASIN => {
    return state.devices.find(device => device.ASIN == ASIN);
  }
};
