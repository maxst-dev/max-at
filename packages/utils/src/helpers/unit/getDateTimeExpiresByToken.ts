import jwt from "jwt-decode";

type DecodedTokenType = {
  exp: number;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  nonce: string;
  session_state: string;
  at_hash: string;
  acr: string;
  sid: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
};

// TODO token Type 지정
const getDateTimeExpiresByToken = (jwtToken: any) => {
  try {
    const unixTimeStampExpires = (jwt(jwtToken) as DecodedTokenType).exp;
    const dateTimeExpires = new Date(unixTimeStampExpires * 1000);
    return dateTimeExpires;
  } catch (error: any) {
    throw Error(error);
  }
};

export default getDateTimeExpiresByToken;
