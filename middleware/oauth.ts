import { defineEventHandler, readBody } from 'h3';
import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Define the event handler for the middleware
export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const body = await readBody(event);
    console.log("🔍 Request Body Received:", body); // Debugging

    if (!body?.code) {
      console.error("❌ Missing authorization code");
      return { success: false, error: "Missing authorization code" };
    }

    console.log("🔍 Authorization code received:", body.code);

    // Ensure OAuth Token URL is set
    const OAUTH_TOKEN_URL = process.env.OAUTH_TOKEN_URL;
    if (!OAUTH_TOKEN_URL) throw new Error("OAUTH_TOKEN_URL is not defined");

    // Create URL-encoded request body
    const tokenRequestBody = new URLSearchParams({
      client_id: process.env.CLIENT_ID || "",
      client_secret: process.env.CLIENT_SECRET || "",
      code: body.code,
      redirect_uri: process.env.REDIRECT_URI || "",
      grant_type: "authorization_code",
    });

    console.log("🔍 Token Request Body:", tokenRequestBody.toString()); // Debugging

    // Send request to OAuth provider
    const tokenResponse = await axios.post(OAUTH_TOKEN_URL, tokenRequestBody.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    console.log("🟢 OAuth Response:", tokenResponse.data);

    // Return the access token
    return { access_token: tokenResponse.data.access_token };
  } catch (error:any) {
    // Log and return an error if the token exchange fails
    console.error("❌ OAuth Exchange Error:", error.response?.data || error.message);
    return { success: false, error: 'Failed to exchange code for token' };
  }
});