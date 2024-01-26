import axios from "axios";

export const $api = (method: string) => axios.create({baseURL: process.env.API_SERVER_URL + method})