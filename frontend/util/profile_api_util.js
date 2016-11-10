export const updateProfile = (user, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user},
    success,
    error
  });
};

export const fetchProfile = (params, success) => {
  $.ajax({
    method: "GET",
    url: `api/users/${params.id}`,
    data: {params},
    success
  });
};
