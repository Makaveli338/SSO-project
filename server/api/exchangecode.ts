import { defineEventHandler, readBody } from 'h3';
import axios from 'axios';

// Define the event handler for the API route
export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const { code, state } = await readBody(event);

    // Check if the authorization code is present
    if (!code) {
      return { success: false, error: 'Missing authorization code' };
    }

    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post(
      'https://test.sso.pesaflow.com/oauth/access-token',
      new URLSearchParams({
        client_id: process.env.CLIENT_ID || '',
        client_secret: process.env.CLIENT_SECRET || '',
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.REDIRECT_URI || '',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    // Return the token response data
    return tokenResponse.data;
  } catch (error : any) {
    // Log and return an error if the token exchange fails
    console.error("❌ Token Exchange Error:", error.response?.data || error.message);
    return { success: false, error: 'Failed to exchange code for token' };
  }
});