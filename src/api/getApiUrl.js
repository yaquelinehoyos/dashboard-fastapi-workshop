export function getApiUrl() {
    let apiUrl = localStorage.getItem("workshop-fastapi-api-url");
    if (apiUrl) {
        return apiUrl;
    } else {
        "http://127.0.0.0:8000/"
    }
};
