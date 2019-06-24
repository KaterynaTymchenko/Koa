const customFetch = (url, options) => fetch(url, options).then((res) => {
  if (!res.ok) {
    throw new Error('ERROR');
  } else {
    return res.json();
  }
});

const httpService = {
  get(url) {
    return customFetch(url);
  },
  post(url, data) {
    return customFetch(url, { method: 'POST', data });
  },
};
export default httpService;
