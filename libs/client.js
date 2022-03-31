import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "sumahorepair",
    apiKey: process.env.API_KEY,
});