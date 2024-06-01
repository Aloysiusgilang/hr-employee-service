import axios from "axios";

const authBaseUrl = process.env.AUTH_BASE_URL || "http://localhost:8001";

export async function getUserByUserId(userId: string, token: string) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(`${authBaseUrl}/users/${userId}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching user:", error);
    throw error;
  }
}
