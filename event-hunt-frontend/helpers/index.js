import cookie from "cookie";

/**
 * Parse the header cookie
 * @param {Object} req The incoming request
 */
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : "");
}
