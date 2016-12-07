export const createRoaster = (roaster, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/roasters/',
    data: {roaster},
    success,
    error
  });
};

export const fetchRoasters = success => {
  $.ajax({
    method: "GET",
    url: "api/roasters/",
    success
  });
};

export const fetchRoaster = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/roasters/${id}`,
    success
  });
};
