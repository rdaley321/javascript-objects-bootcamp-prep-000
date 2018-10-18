var playlist = {
  drake: 'hotline bling'
}

function updatePlaylist(obj, artistName, songTitle) {
  obj.artistName = songTitle
  return obj
  console.log(obj + "here it is")
}

function removeFromPlaylist(playlist, artistName) {
  var newObject = Object.assign({}, playlist)
  delete newObject.artistName
  return newObject
}