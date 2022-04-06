import { dataCountriesList } from "./data";
import { Countries } from "./types";

export const getAllCountries = async () => {
  return await new Promise<Countries>((resolve, reject) => {
    setTimeout(() => {
      resolve(dataCountriesList);
    }, Math.random() * 1000);
  });
};
