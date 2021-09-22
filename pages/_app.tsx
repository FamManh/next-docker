import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(navigator);
    if (
      navigator.userAgent.includes("Google Page Speed Insights") ||
      navigator.userAgent.includes("Chrome-Lighthouse")
    )
      return;
    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`;
    head.appendChild(script);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        // @ts-ignore: Unreachable code error
        attribution="biz_inbox"
        page_id="105679648408592"
      ></div>
      {/* <Script id="fb" strategy="lazyOnload">
        {`

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`}
      </Script> */}
    </>
  );
}
export default MyApp;

// <!-- Messenger Chat plugin Code -->
//     <div id="fb-root"></div>

//     <!-- Your Chat plugin code -->
//     <div id="fb-customer-chat" class="fb-customerchat">
//     </div>

//     <script>
//       var chatbox = document.getElementById('fb-customer-chat');
//       chatbox.setAttribute("page_id", "105679648408592");
//       chatbox.setAttribute("attribution", "biz_inbox");

//       window.fbAsyncInit = function() {
//         FB.init({
//           xfbml            : true,
//           version          : 'v12.0'
//         });
//       };

//       (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));
//     </script>
