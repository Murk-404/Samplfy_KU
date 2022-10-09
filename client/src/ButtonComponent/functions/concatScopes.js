const concatScopes = function() {
  var SCOPES = "";
  const SCOPES_ARR = ["ugc-image-upload",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-follow-modify",
  "user-follow-read",
  "user-read-recently-played",
  "user-read-playback-position",
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "app-remote-control",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-modify",
  "user-library-read"];

  SCOPES_ARR.forEach(function (key) {
    SCOPES = SCOPES + key + "%20";
  });
  SCOPES = SCOPES.slice(0, SCOPES.length-3);
  return SCOPES
}

export default concatScopes