import devicesJSON from "~/assets/devices.json";

// по статье https://medium.com/a-man-with-no-server/static-site-generators-nuxt-js-2fa9782d27c8

export const state = () => ({
  devices: devicesJSON
});

export const getters = {
  deviceByASIN: state => ASIN => {
    return state.devices.find(device => device.ASIN == ASIN);
  }
};
