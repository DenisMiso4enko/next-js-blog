import { BASE_URL } from "@/src/constance";

// export const httpRequest = (path: string, method: string, body?: any) => {
//   return fetch(`${BASE_URL}/${path}`, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(body),
//   });
// };

export const httpRequestPost = async (
  url: string,
  method: string,
  body: any
) => {
  try {
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: body ? JSON.stringify(body) : undefined,
    };
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};
