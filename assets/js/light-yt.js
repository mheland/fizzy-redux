/*
 * Light YouTube Embeds by @labnol
 * Credit: https://www.labnol.org/
 * Title from YT oauth by @kmhelander 
 * Optimzed by Google Bard
 */


function getYoutubeData(videoId) {
  let ytDataUrl = 'https://www.youtube-nocookie.com/oembed?format=json&url=http%3A//youtube.com/watch%3Fv%3D' + videoId;
  return fetch(ytDataUrl)
    .then(res => res.json())
    .catch(err => { console.log(err) });
}

function labnolIframe(youtubePlayer) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube-nocookie.com/embed/' + youtubePlayer.dataset.id + '?autoplay=1&rel=0');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '1');
  iframe.setAttribute('allow',
    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  youtubePlayer.parentNode.replaceChild(iframe, youtubePlayer);
}

function initYouTubeVideos() {
  let playerElements = document.getElementsByClassName('youtube-player');
  for (let n = 0; n < playerElements.length; n++) {
    let videoId = playerElements[n].dataset.id;
    let thisPlayerId = 'playerid-' + n.toString();

    getYoutubeData(videoId)
      .then(out => document.getElementById(thisPlayerId).innerHTML = out.title.substr(0, 40))
      .catch(err => { console.log(err) });

    let div = document.createElement('div');
    div.setAttribute('data-id', videoId);
    div.appendChild(document.createElement('img')).src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
    
    let videoTitle = document.createElement('div');
    videoTitle.setAttribute('class', 'videotitle');
    videoTitle.setAttribute('id', thisPlayerId);
    videoTitle.appendChild(document.createTextNode(''));
    div.appendChild(videoTitle);

    let playButton=document.createElement('div');
    playButton.setAttribute("class", "play plausible-event-name=VideoPlay");
    div.appendChild(playButton); 
    
    div.onclick = function() { labnolIframe(this); };
    playerElements[n].appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', initYouTubeVideos);
