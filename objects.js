var playlist = {
  drake: 'hotline bling'
}

function updatePlaylist(playlist, artistName, songTitle) {
  var newObject = Object.assign({}, playlist, {artistName: songTitle})
  return newObject
}

function removeFromPlaylist(playlist, artistName) {
  var newObject = Object.assign({}, playlist)
  delete newObject.artistName
  return newObject
}