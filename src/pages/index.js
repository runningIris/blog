/**
 * Index page of the site.  There are no content on this page.  It detects the
 * browser language (if available) and redirects to a locale-specific index
 * page.
 *
 * Ref:  https://github.com/gatsbyjs/gatsby/issues/21548
 */
import { useRef, useEffect } from "react";
import { navigate } from "gatsby";

// Browser language codes are different than ISO codes:
// https://www.metamodpro.com/browser-language-codes
// E.g. Chinese (Hong Kong) is zh-HK instead of zh-Hant-HK
//      Chinese (Traditional) is zh-TW instead of zh-Hant
const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language;
  if (!lang) return "en";

  switch (lang) {
    case "zh":
      return "zh-Hant";
    case "zh-Hant":
      return "zh-Hant";
    case "zh-HK":
      return "zh-Hant";
    case "zh-TW":
      return "zh-Hant";
    case "zh-SG":
      return "zh-Hant";
    case "zh-Hans":
      return "zh-Hans";
    case "zh-CN":
      return "zh-Hans";
    default:
      return "en";
  }
};

const RedirectIndexPage = (props) => {
  const url = useRef(props.location.pathname);
  useEffect(() => {
    // Only redirect when user navigates to "/".  Without this,
    // it seems that all pages throughout the app will get redirected.
    if (url.current === "/") {
      const urlLang = getRedirectLanguage();
      navigate(`/${urlLang}/`);
    }
  }, []);

  return null;
};

export default RedirectIndexPage;
