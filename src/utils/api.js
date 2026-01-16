export const BASE_URL = "https://api.nomoreparties.co";

// getContent aceita o token como argumento.
const api = {
  getUserInfo(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  },
};

export default api;
