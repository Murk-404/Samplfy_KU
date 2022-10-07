import spotipy
# from spotipy import CacheHandler
# from spotipy.oauth2 import SpotifyAuthBase
# import json
from firebase import Firebase
import firebase
import sys

# print("EMAIL: " + sys.argv[1])

exec(open('C:\Spotify_React_Project\server\env.py').read())
SCOPE = open('C:\Spotify_React_Project\server\scopes.txt').read()

top_data = []
cache_handler = spotipy.cache_handler.MemoryCacheHandler()
oauth_manager = spotipy.oauth2.SpotifyOAuth(cache_handler=cache_handler, scope=SCOPE)
token = spotipy.util.prompt_for_user_token(oauth_manager=oauth_manager)
SPOTIFY = spotipy.Spotify(auth=token)

username = SPOTIFY.current_user()['id']
pfp = SPOTIFY.current_user()['images'][0]['url']
name = SPOTIFY.current_user()['display_name']

top_tracks_short = SPOTIFY.current_user_top_tracks(limit=49, offset=0, time_range='short_term')
top_tracks_medium = SPOTIFY.current_user_top_tracks(limit=49, offset=0, time_range='medium_term')
top_tracks_long = SPOTIFY.current_user_top_tracks(limit=49, offset=0, time_range='long_term')
top_tracks_short_offset = SPOTIFY.current_user_top_tracks(limit=50, offset=49, time_range='short_term')
top_tracks_medium_offset = SPOTIFY.current_user_top_tracks(limit=50, offset=49, time_range='medium_term')
top_tracks_long_offset = SPOTIFY.current_user_top_tracks(limit=50, offset=49, time_range='long_term')

for key in top_tracks_short_offset['items']:
  top_tracks_short['items'].append(key)
for key in top_tracks_medium_offset['items']:
  top_tracks_medium['items'].append(key)
for key in top_tracks_long_offset['items']:
  top_tracks_long['items'].append(key)

top_artists_short = SPOTIFY.current_user_top_artists(limit=49, offset=0, time_range='short_term')
top_artists_medium = SPOTIFY.current_user_top_artists(limit=49, offset=0, time_range='medium_term')
top_artists_long = SPOTIFY.current_user_top_artists(limit=49, offset=0, time_range='long_term')
top_artists_short_offset = SPOTIFY.current_user_top_artists(limit=50, offset=49, time_range='short_term')
top_artists_medium_offset = SPOTIFY.current_user_top_artists(limit=50, offset=49, time_range='medium_term')
top_artists_long_offset = SPOTIFY.current_user_top_artists(limit=50, offset=49, time_range='long_term')

for key in top_artists_short_offset['items']:
  top_artists_short['items'].append(key)
for key in top_artists_medium_offset['items']:
  top_artists_medium['items'].append(key)
for key in top_artists_long_offset['items']:
  top_artists_long['items'].append(key)


config  = {
  "apiKey": "AIzaSyDeoQZ6j4Y4w-t4fXqatjvcHFc2TaJ75d0",
  "authDomain": "spotify-react-project-d3cd9.firebaseapp.com",
  "databaseURL": "https://spotify-react-project-d3cd9-default-rtdb.firebaseio.com",
  "storageBucket": "spotify-react-project-d3cd9.appspot.com",
}

firebase = Firebase(config)
db = firebase.database()
db.child(username).child("top-tracks").child("top-tracks-short").set(top_tracks_short)
db.child(username).child("top-tracks").child("top-tracks-medium").set(top_tracks_medium)
db.child(username).child("top-tracks").child("top-tracks-long").set(top_tracks_long)
db.child(username).child("top-artists").child("top-artists-short").set(top_artists_short)
db.child(username).child("top-artists").child("top-artists-medium").set(top_artists_medium)
db.child(username).child("top-artists").child("top-artists-long").set(top_artists_long)
db.child(username).child("user-token").set(token)
  
print(username + '$' + pfp + '$' + name) 