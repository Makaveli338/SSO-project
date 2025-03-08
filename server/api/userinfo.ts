import { defineEventHandler, sendError } from 'h3';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const userInfoUrl = process.env.OAUTH_USERINFO_URL;

export default defineEventHandler(async (event) => {
  const accessToken = event.req.headers['authorization']?.split(' ')[1];

  if (!accessToken) {
    return sendError(event, new Error('User not authenticated'));
  }

  try {
    if (!userInfoUrl) {
      return sendError(event, new Error('User info URL is not defined'));
    }

    const userInfoResponse = await axios.get(userInfoUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return userInfoResponse.data;
  } catch (error) {
    console.error('Error fetching user info:', error);
    return sendError(event, new Error('Failed to fetch user info'));
  }
});