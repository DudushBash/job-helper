import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    },
});

export async function searchJobs(query) {
    const response = await api.get("/search", {
        params: { query },
    });
    return response.data;
}
export default api;