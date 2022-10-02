import axios from 'axios';
export function getActualPrice(price, discount) {
  if (discount) {
    return price - price * discount;
  }
  return price;
}

export const configAxios = () => {
  axios.defaults.baseURL = 'http://www.rncourseproject.com/app';
};
