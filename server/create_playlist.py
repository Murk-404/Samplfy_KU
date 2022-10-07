import spotipy
from firebase import Firebase
import firebase
import sys

if (sys.argv[4] == '1'):
  time_range = 'top-tracks-short'
elif (sys.argv[4] == '2'):
  time_range = 'top-tracks-medium'
elif (sys.argv[4] == '3'):
  time_range = 'top-tracks-long'

title = sys.argv[1]
description = sys.argv[2]
user = sys.argv[3]
visibility = sys.argv[4]
if(visibility == 'true'):
  visibility = True
else:
  visibility = False

config  = {
  "apiKey": "AIzaSyDeoQZ6j4Y4w-t4fXqatjvcHFc2TaJ75d0",
  "authDomain": "spotify-react-project-d3cd9.firebaseapp.com",
  "databaseURL": "https://spotify-react-project-d3cd9-default-rtdb.firebaseio.com",
  "storageBucket": "spotify-react-project-d3cd9.appspot.com",
}

firebase = Firebase(config)
db = firebase.database()

data = db.child(user).child('top-tracks').child(time_range).get().val()
token = db.child(user).child('user-token').get().val()

playlistArr = []

for key in data['items']:
  playlistArr.append(key['uri'])

SPOTIFY = spotipy.Spotify(auth=token)
SPOTIFY.user_playlist_create(user, name=title, public=visibility, description=description)

playlist_id = ''
playlists = SPOTIFY.user_playlists(user)

def get_playlist():
  for playlist in playlists['items']:
    if playlist['name'] == title:
      playlist_id = playlist['id']
      return playlist_id

id = get_playlist()
SPOTIFY.user_playlist_add_tracks(user, id, playlistArr)
print('Success')