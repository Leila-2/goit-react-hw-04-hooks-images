function fetchImg(value, page) {
  const key = `23558220-fb5623a2d9636919de7621278`;
  let url = `https://pixabay.com/api/?q=${value}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      return data.hits;
    });
}
const api = {
  fetchImg,
};
export default api;
