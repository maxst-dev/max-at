import cookie from "../helpers/factory/cookie";

type CookieDomainNameType = "maxverse" | "maxst" | "tlona";
type CookieNamesType = Array<"token" | "refresh_token" | "id_token" | "locale">;

const deleteCookiesByToken = (
  cookieDomainName: CookieDomainNameType,
  cookieNames: CookieNamesType
) => {
  try {
    if (!cookieDomainName || !cookieNames) {
      throw new Error(
        `cookieNames : ${cookieNames}, cookieDomainName : ${cookieDomainName}`
      );
    }
    cookieNames.forEach((cookieName) => {
      return cookie.deleteCookie(cookieName, cookieDomainName);
    });
  } catch (error) {
    throw Error;
  }
};
export default deleteCookiesByToken;
