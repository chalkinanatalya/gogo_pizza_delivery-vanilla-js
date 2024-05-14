import { hideLoader, showLoader } from "./loader.js";

export const getData = async (url) => {
    showLoader();
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('fetching server problems')
        }
        return  await response.json();
    } catch (error) {
        console.error(`Error fetching pizzas: ${error}`);
        return [];
    } finally {
        hideLoader();
    }

}