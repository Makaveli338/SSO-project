import { defineEventHandler, readBody } from 'h3';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("🔍 Received Authorization Code:", body.code);

    if (!body.code) {
      return { error: "Missing authorization code" };
    }

    // Ensure the URL is properly defined
    const OAUTH_TOKEN_URL = process.env.OAUTH_TOKEN_URL;
    if (!OAUTH_TOKEN_URL) {
      throw new Error("OAUTH_TOKEN_URL is not defined in environment variables");
    }

    const response = await fetch(OAUTH_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: body.code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });

    const data = await response.json();
    console.log("🔍 Token Exchange Response:", JSON.stringify(data));

    if (!data.access_token) {
      console.error("❌ No access token returned from auth provider:", data);
      return { error: "No access token received", details: data };
    }

    return { accessToken: data.access_token };
  } catch (error) {
    console.error("🚨 Error in exchangecode API:", error);
    return { error: "Internal Server Error", details: error.message };
  }
});
