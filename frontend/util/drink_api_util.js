export const createDrink = (drink, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/drinks/',
    data: drink,
    success,
    error
  });
};

export const updateDrink = (drink, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/drinks/${drink.id}`,
    data: {drink},
    success,
    error
  });
};

export const fetchDrinks = success => {
  $.ajax({
    method: "GET",
    url: "api/drinks",
    success
  });
};

export const fetchDrink = (params, success) => {
  $.ajax({
    method: "GET",
    url: `api/drinks/${params.id}`,
    data: {params},
    success
  });
};

export const deleteDrink = (id, success) => {
  $.ajax({
    method: "DELETE",
    url: `api/drinks/${id}`,
    success
  });
};
