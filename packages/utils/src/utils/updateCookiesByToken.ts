import deleteCookiesByToken from "../helpers/unit/deleteCookiesByToken";
import setCookiesByToken from "../helpers/unit/setCookiesByTokens";

type CookieDomainNameType = "maxverse" | "maxst" | "tlona";
type TokensType = {
  token: string;
  refresh_token: string;
  id_token: string;
};

const updateCookiesByToken = (
  cookieDomainName: CookieDomainNameType,
  tokens: TokensType
) => {
  try {
    const { token, refresh_token, id_token } = tokens;
    if (!cookieDomainName || !token || !refresh_token || !id_token) {
      throw new Error(
        `cookieDomainName : ${cookieDomainName}, tokens : ${tokens}`
      );
    } else {
      deleteCookiesByToken(cookieDomainName, tokens);
      return setCookiesByToken(cookieDomainName, tokens);
    }
  } catch (error: any) {
    throw Error(error);
  }
};

export default updateCookiesByToken;
