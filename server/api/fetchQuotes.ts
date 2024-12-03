import type { quotesInfo } from "./quotesInfo";
const API_URL = "http://localhost:3000/api";

export const fetchQuotes = async (): Promise<quotesInfo[]> => {
  const response = await fetch(`${API_URL}/quotes`);
  if (!response.ok) {
    throw new Error("Failed to fetch quotes");
  }
  return response.json();
};
