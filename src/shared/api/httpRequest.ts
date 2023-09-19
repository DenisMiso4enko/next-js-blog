import { BASE_URL } from "@/src/constance";

export const httpRequest = (path: string, method: string, body?: any) => {
  return fetch(`${BASE_URL}/${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  });
};
