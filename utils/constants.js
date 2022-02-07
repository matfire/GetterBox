const BASE_URL = process.env.VERCEL_URL || "http://localhost:4000"
const AUTH_REDIRECT = `${BASE_URL}/authorize/callback`

export {BASE_URL, AUTH_REDIRECT}