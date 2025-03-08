import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Received body:", body); // Log request body

  const { code, state } = body;

  if (!code) {
    console.error("Authorization code is missing!");
    return { error: "Authorization code is required" };
  }

  try {
    const response = await fetch('https://your-auth-provider.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code,
        state,
        client_id: 'your-client-id',
        client_secret: 'your-client-secret',
        redirect_uri: 'http://localhost:3000/auth/redirect',
        grant_type: 'authorization_code'
      })
    });

    const data = await response.json();
    console.log("Token Response:", data); // Log API response

    if (!data.access_token) {
      console.error("Missing access token in response:", data);
      return { error: "Invalid response, missing access token" };
    }

    return { accessToken: data.access_token };
  } catch (error) {
    console.error("Token exchange failed:", error);
    return { error: "Token exchange failed" };
  }
});
