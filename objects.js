var playlist = {
  drake: 'hotline bling'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  var newObject = Object.assign({}, playlist)
  delete newObject.artistName
  return newObject
}