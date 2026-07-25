import countries from "world-countries";

console.log(countries[0].flag);
export const formattedCountries = countries.map((item) => ({
  code: item.cca2,
  name: item.name.common,
  flag: item.flag,
  location: item.latlng,
  region: item.region,
}));

export const findCountryByCode = (code: string) => {
  return formattedCountries.find((item) => item.code === code);
};
