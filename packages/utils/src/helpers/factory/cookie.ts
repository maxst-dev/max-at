const cookie = (() => {
  return {
    setCookie: (
      cookieName?: string,
      value?: string,
      cookieDomainName?: string,
      cookieExpires?: string
    ) => {
      try {
        let cookie = `${cookieName}=${value};`;
        if (cookieDomainName) {
          const domain = `.${cookieDomainName}.io`;
          cookie += `domain=${domain}; path=/;`;
        }
        if (cookieExpires) {
          cookie += `expires=${cookieExpires};`;
        }
        return (document.cookie = cookie);
      } catch (error: any) {
        throw Error(error);
      }
    },

    deleteCookie: (cookieName: string, cookieDomainName: string) => {
      try {
        const cookieExpires = "Thu, 01 Jan 1970 00:00:01 GMT";
        return cookie.setCookie(
          cookieName,
          "",
          cookieDomainName,
          cookieExpires
        );
      } catch (error: any) {
        throw Error(error);
      }
    },
  };
})();

export default cookie;
