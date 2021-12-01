const key = `23558220-fb5623a2d9636919de7621278`;
const baseUrl = `https://pixabay.com/api/?&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

function fetchImg(value, page) {
  let url = baseUrl + `q=${value}&page=${page}`
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
