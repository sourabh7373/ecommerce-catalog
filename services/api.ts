import axios from "axios";

export const API_URL = "http://localhost:3002/products"; // JSON Server

export const getProducts = () => axios.get(API_URL);