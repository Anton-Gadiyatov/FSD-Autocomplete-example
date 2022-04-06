import { countries } from "../countries";

type Countries = string[];

export const getAllCountries = () => {
  return new Promise<Countries>((resolve, reject) => {
    setTimeout(() => resolve(countries), Math.random() * 1000);
  });
};
