async function regMatomo() {

  var now = new Date().getTime();
  let baseurl = "https://stats.helander.stream/matomo.php"
  let mRand = "&rand=" + Math.floor(Math.random() * 10000).toString();
  let mAction = encodeURIComponent( "Blog View/" + document.title);
  let mScreen = encodeURIComponent(screen.width + "x" + screen.height);
  let mURL = encodeURIComponent(window.location.href);
  let mPageLoad = now - performance.timing.navigationStart;

  let matomoparams = "idsite=6&rec=1&action_name=" + mAction + "&res=" + mScreen + "&url=" + mURL + "&pf_dm1=" + mPageLoad + "&apiv=1&bots=1&send_image=0" + mRand;

  let track = baseurl + "?" + matomoparams;

  data = navigator.sendBeacon(track);
  return data;
  
}


async function matomoExit() {
    let baseurl = "https://stats.helander.stream/matomo.php"
    let mRand = "&rand=" + Math.floor(Math.random() * 10000).toString();
    let exitping = baseurl + "?" + "idsite=6&rec=1&ping=1&send_image=0" + mRand;

   data = navigator.sendBeacon(exitping); 
   return data;
      
}


    