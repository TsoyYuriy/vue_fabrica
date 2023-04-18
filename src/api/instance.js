import axios from "axios";
import { baseApi } from "./baseApi";

export const baseInstance = axios.create({
	baseURL: baseApi,
});
