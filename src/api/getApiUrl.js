export function getApiUrl() {
  let apiUrl = localStorage.getItem("workshop-fastapi-api-url");
  if (apiUrl) {
    return apiUrl;
  } else {
    return ("http://127.0.0.1:8000/");
  }
}
