import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
from firebase import Firebase
import firebase

exec(open("C:\Spotify_React_Project\server\env.py").read())
SCOPE = open('C:\Spotify_Project\website-files\Spotify_Auth\scopes.txt').read()

token = spotipy.util.prompt_for_user_token(scope=SCOPE)
SPOTIFY = spotipy.Spotify(auth=token)
username = spotipy.Spotify(auth=token).current_user()['uri'].replace('spotify:user:', '')
top_data = SPOTIFY.current_user_top_tracks(limit=20, offset=0, time_range='medium_term')
config  = {
  "apiKey": "AIzaSyDeoQZ6j4Y4w-t4fXqatjvcHFc2TaJ75d0",
  "authDomain": "spotify-react-project-d3cd9.firebaseapp.com",
  "databaseURL": "https://spotify-react-project-d3cd9-default-rtdb.firebaseio.com",
  "storageBucket": "spotify-react-project-d3cd9.appspot.com",
}

firebase = Firebase(config)
db = firebase.database()
data = {"token": token}
db.child(username).child("user-token").set(data)
db.child(username).child("top-tracks").set(top_data)


print(username)