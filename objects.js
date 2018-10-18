var playlist = {
  drake: 'hotline bling'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  var newObject = Object.assign({}, playlist)
  delete newObject.artistName
  return newObject
}