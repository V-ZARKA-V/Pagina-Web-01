  
  let Client_id = 'ca57bcc70d744c5f9fe471a9d79703a4';
  let redirect_url = 'https://example.com/callback' ;
  let scopes = 'user-read-playback-state user-modify-playback-state' ;
  
  let button = document.getElementById("button_Generator-Token")

  button.addEventListener("click",() =>{
    scopes = encodeURIComponent(scopes);
    window.location.href= 'https://accounts.spotify.com/authorize?client_id=' + Client_id +'&response_type=token&redirect_uri='+ redirect_url+ '&scope='+ scopes +'&show_dialog=true' ;
})
