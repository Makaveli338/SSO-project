import { defineEventHandler, getQuery } from 'h3';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const tokenUrl = process.env.OAUTH_TOKEN_URL!;

// Define the event handler for the API endpoint
export default defineEventHandler(async (event) => {
  // Parse query parameters from the request
  const query = getQuery(event);
  const { code, state } = query;
  if (Array.isArray(code) || typeof code !== 'string') {
    return { success: false, error: 'Invalid code parameter' };
  }

  try {
    const tokenResponse = await axios.post(tokenUrl, new URLSearchParams({
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: redirectUri || '',
      client_id: clientId || '',
      client_secret: clientSecret || '',
    }));

    const accessToken = tokenResponse.data.access_token;

    // Return the access token to the client
    return { success: true, accessToken };
  } catch (error) {
    return { success: false, error: (error as any).message };
  }
});