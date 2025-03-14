import { defineEventHandler, readBody } from 'h3';
import axios from 'axios';

export default defineEventHandler(async (event) => {
  console.log("🔍 Starting token exchange process...");

  try {
    // Read the request body
    const { code, state } = await readBody(event);
    console.log("🔍 Request body received - Code:", code, "State:", state);

    // Check if the authorization code is present
    if (!code) {
      console.error("❌ Missing authorization code in request body");
      return { success: false, error: 'Missing authorization code' };
    }

    // Ensure required environment variables are set
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URI;

    if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
      console.error("❌ Missing required environment variables");
      throw new Error("Missing required environment variables");
    }

    console.log("🔍 Environment variables validated.");

    // Prepare the request body for the OAuth provider
    const tokenRequestBody = new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    });

    console.log("🔍 Request body prepared for OAuth provider.");

    // Send a POST request to the OAuth provider's token endpoint
    const tokenResponse = await axios.post(
      'https://test.sso.pesaflow.com/oauth/access-token',
      tokenRequestBody,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    console.log("✅ Token exchange successful. Response:", tokenResponse.data);

    // Return the token response data to the client
    return tokenResponse.data;
  } catch (error: any) {
    // Log and return an error if the token exchange fails
    console.error("❌ Token Exchange Error:", error.response?.data || error.message);
    return { success: false, error: 'Failed to exchange code for token' };
  }
});