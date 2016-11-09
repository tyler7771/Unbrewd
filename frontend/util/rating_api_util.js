export const createRating = (rating, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/ratings/',
    data: {rating},
    success,
    error
  });
};

export const updateRating = (rating, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/ratings/${rating.id}`,
    data: {rating},
    success,
    error
  });
};

export const fetchRatings = (success, params) => {
  $.ajax({
    method: "GET",
    url: "api/ratings",
    data: {params},
    success
  });
};

export const fetchRating = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/ratings/${id}`,
    success
  });
};

export const deleteRating = (id, success) => {
  $.ajax({
    method: "DELETE",
    url: `api/ratings/${id}`,
    success
  });
};
