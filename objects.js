var playlist = {
  drake: 'hotline bling'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(obj, name) {
  delete obj.name
  return obj
}