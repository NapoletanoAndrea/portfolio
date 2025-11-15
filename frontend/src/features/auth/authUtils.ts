import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN } from "../../constants";
import { refreshAccessToken } from "./api";

const isAccessTokenInvalidOrExpired = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (!token) {
    return true;
  }
  const decoded = jwtDecode(token);
  const tokenExpiration = decoded.exp as number;
  const now = Date.now() / 1000;
  return tokenExpiration < now;
};

const refreshAndCacheAccessToken = async () => {
  try {
    const result = await refreshAccessToken();
    localStorage.setItem(ACCESS_TOKEN, result.access);
  } catch (e) {
    console.error("Failed to refresh access token: ", e);
  }
};

export const tryRefreshAccessToken = async () => {
  if (isAccessTokenInvalidOrExpired()) {
    await refreshAndCacheAccessToken();
  }
};

export const getAccessToken = async () => {
  if (isAccessTokenInvalidOrExpired()) {
    await refreshAndCacheAccessToken();
  }
  return localStorage.getItem(ACCESS_TOKEN);
};
