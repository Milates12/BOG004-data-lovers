/* reestableciendo conexion con github eslint-disable no-undef */ 
export const getByCountry = (data, country) => {
  const countryFilterData = data.filter(item => item.team === country);
  return countryFilterData;
};

export const getByGender = (data,gender) => {
  const genderFilterData = data.filter(item => item.gender === gender);
  return genderFilterData;
};

//Aplica los dos filtros por country y por gender
export const filterData = (data, country, gender) =>{
  //Si esta definido y es diferente de _all
  if (country && country !== "_all") {
    data = getByCountry(data, country);
  }
  //Si gender esta definido y es diferente de _all
  if (gender && gender !== "_all") {
    data = getByGender(data, gender);
  }
  return data
}

/**
 * Listado de Paises ordenados
 */
export const getByCountries = (data) =>{
  let dataTeam = data.map((ele) => ele.team);
  let sortData = Array.from(new Set(dataTeam.sort()));
  return sortData;
}

