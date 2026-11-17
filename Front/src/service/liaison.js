
import config from "./config_api_front.js";

export async function apiFetch(endpoint, options = {}) {
    const url = `${config.API_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

    const response = await fetch(url, {
        ...options,
        headers: {
            ...(options.body ? { "Content-Type": "application/json" } : {}),
            ...options.headers
        }
    });

    if (!response.ok) {
        throw new Error(`Erreur API : ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();
}
