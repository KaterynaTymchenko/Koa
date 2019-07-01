const httpPath = 'http://localhost:3001';

const customFetch = (url, options) => fetch(`${httpPath}/${url}`, options).then((res) => {
  if (!res.ok) {
    return Promise.reject();
  }
  return res.json();
});

const httpService = {
  get(url) {
    return customFetch(url);
  },
  getById(url, id) {
    return customFetch(`${url}/${id}`);
  },
  post(url, data) {
    return customFetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
  delete(url, id) {
    return customFetch(`${url}/${id}`, {
      method: 'DELETE',
    });
  },
  put(url, id, data) {
    return customFetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },
};
export default httpService;
