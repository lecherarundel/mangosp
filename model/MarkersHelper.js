

const AVLeanCloud = require('../utils/av-weapp-min-leancloud.js');
var newMarkers = []

function downloadMarker(){
 
var query = new AVLeanCloud.Query('Bike');
var point = new AVLeanCloud.GeoPoint(30.296804, 120.233276)
query.withinKilometers('coordinate', point, 20.0);
query.find().then(function (results) {

  for (let result of results) {
    let newMarker = {
      id: "1",
      latitude: 49,
      longitude: 120,
      width: 50,
      height: 50,
      iconPath: "../../images/scooterMarkers.png",
      title: "芒果滑板车"
    }
    newMarker.latitude = result.attributes.coordinate._latitude
    newMarker.longitude = result.attributes.coordinate._longitude
    newMarkers.push(newMarker)
  }
  //this.onLoad
  refreshFlag = true
  //this.getLocation
}, function (error) {

});

}






module.exports.downloadMarker = downloadMarker
module.exports.newMarkers = newMarkers 