import cookie from "../factory/cookie";

// TODO token tpye 설정
const deleteCookiesByToken = (cookieDomainName: string, tokens: any) => {
  return Object.keys(tokens).forEach((cookieName) => {
    return cookie.deleteCookie(cookieName, cookieDomainName);
  });
};
export default deleteCookiesByToken;
