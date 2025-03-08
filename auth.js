import axios from 'axios';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const authorizationUrl = process.env.OAUTH_AUTHORIZATION_URL;
const tokenUrl = process.env.OAUTH_TOKEN_URL;
const userInfoUrl = process.env.OAUTH_USERINFO_URL;

export function getAuthorizationUrl(state) {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: 'openid',
      state,
    });
    return `${authorizationUrl}?${params.toString()}`;
  }
  
  export async function exchangeCodeForToken(code) {
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    });
    const response = await axios.post(tokenUrl, params);
    return response.data;
  }
  
  export async function getUserInfo(accessToken) {
    const response = await axios.get(userInfoUrl, {
      params: { access_token: accessToken },
    });
    return response.data;
  }