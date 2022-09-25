import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
from firebase import Firebase
import firebase

exec(open("C:\Spotify_React_Project\server\env.py").read())
SCOPE = open('C:\Spotify_Project\website-files\Spotify_Auth\scopes.txt').read()

top_data = []

token = spotipy.util.prompt_for_user_token(scope=SCOPE)
SPOTIFY = spotipy.Spotify(auth=token)
username = spotipy.Spotify(auth=token).current_user()['uri'].replace('spotify:user:', '')
# for i in range(3):
#   top_data = top_data.append(SPOTIFY.current_user_top_tracks(limit=20, offset=(i*20), time_range='medium_term'))
# termArr = [
#   'short_term',
#   'medium_term',
#   'long_term'
# ]
# dataArr = [
#   SPOTIFY.current_user_top_tracks(limit=50, offset=0, time_range=termArr[0]), 
#   SPOTIFY.current_user_top_tracks(limit=50, offset=0, time_range=termArr[1]), 
#   SPOTIFY.current_user_top_tracks(limit=50, offset=0, time_range=termArr[2])
# ]
top_tracks_short = SPOTIFY.current_user_top_tracks(limit=50, offset=0, time_range='short_term')
top_tracks_medium = SPOTIFY.current_user_top_tracks(limit=50, offset=0, time_range='medium_term')
top_tracks_long = SPOTIFY.current_user_top_tracks(limit=50, offset=0, time_range='long_term')

top_tracks_short_offset = SPOTIFY.current_user_top_tracks(limit=50, offset=49, time_range='short_term')
top_tracks_medium_offset = SPOTIFY.current_user_top_tracks(limit=50, offset=49, time_range='medium_term')
top_tracks_long_offset = SPOTIFY.current_user_top_tracks(limit=50, offset=49, time_range='long_term')

for key in top_tracks_short_offset['items']:
  top_tracks_short['items'].append(key)
for key in top_tracks_medium_offset['items']:
  top_tracks_medium['items'].append(key)
for key in top_tracks_long_offset['items']:
  top_tracks_long['items'].append(key)


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
db.child(username).child("top-tracks-short").set(top_tracks_short)
db.child(username).child("top-tracks-medium").set(top_tracks_medium)
db.child(username).child("top-tracks-long").set(top_tracks_long)

  
# print(type(top_data))
# print(top_data2['items'][0])
# print(len(top_data1['items']))
print(username)