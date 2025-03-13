import { defineEventHandler, sendRedirect } from 'h3';
import dotenv from 'dotenv';

dotenv.config();

const authorizationUrl = process.env.OAUTH_AUTHORIZATION_URL;
const redirectUri = process.env.REDIRECT_URI;
const CLIENT_ID = process.env.CLIENT_ID;


export default defineEventHandler((event) => {
  const url = `${authorizationUrl}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${redirectUri}`;
  return sendRedirect(event, url);
});