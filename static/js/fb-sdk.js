window.fbAsyncInit = function() {
  FB.init({
    appId: "2165665033684141",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v2.10"
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src =
    "https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.2&appId=2165665033684141&autoLogAppEvents=1";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
