var playlist = {
  drake: 'hotline bling'
}

function updatePlaylist(obj, artistName, songTitle) {
  obj.artistName =`${songTitle}`
  return obj
}

function removeFromPlaylist(playlist, artistName) {
  var newObject = Object.assign({}, playlist)
  delete newObject.artistName
  return newObject
}