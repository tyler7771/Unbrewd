export const updateProfile = (user, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user},
    success,
    error
  });
};

export const fetchProfile = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/users/${id}`,
    success
  });
};
