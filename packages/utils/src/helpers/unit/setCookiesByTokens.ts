import getDateTimeTokenExpires from "./getDateTimeExpiresByToken";
import cookie from "../factory/cookie";

type newTokensType = {
  token: string;
  refreshToken: string;
  idToken: string;
};

const setCookiesByToken = (cookieDomainName: string, newTokens: any) => {
  try {
    return Object.keys(newTokens).forEach((cookieName: string) => {
      const value = newTokens[cookieName];
      const dateTimeExpires = getDateTimeTokenExpires(newTokens[cookieName]);
      return cookie.setCookie(
        cookieName,
        value,
        cookieDomainName,
        dateTimeExpires.toString()
      );
    });
  } catch {
    throw Error;
  }
};

export default setCookiesByToken;
