var playlist = {
  drake: 'hotline bling'
}

function updatePlaylist(obj, artistName, songTitle) {
  obj.artistName = songTitle
  console.log(obj + "here it is")
  return obj
}

function removeFromPlaylist(playlist, artistName) {
  var newObject = Object.assign({}, playlist)
  delete newObject.artistName
  return newObject
}