var compassRotation
var compassActive = false
const isIOS = (
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
  navigator.userAgent.match(/AppleWebKit/)
);

function startCompass() {
  if (compassActive != true) {
    if (isIOS) {
      DeviceOrientationEvent.requestPermission()
        .then((response) => {
          if (response === 'granted') {
            document.getElementById('ios-magnetometer-request-menu').style.visibility = 'hidden';
            window.addEventListener('deviceorientation', deviceOrientationhHandler, true);
            compassActive = true
          }
          else {
            document.getElementById('ios-magnetometer-request-menu').style.visibility = 'hidden';
          }
        })
        .catch(() => { document.getElementById('ios-magnetometer-request-menu').style.visibility = 'visible'; });
    }
    else {
      window.addEventListener('deviceorientationabsolute', deviceOrientationhHandler, true);
      compassActive = true
    }
  }
}

var minDeviceOrientationEvents = 1
function deviceOrientationhHandler(e) {
  if (minDeviceOrientationEvents == 0) {
    compassRotation = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    locationMarkerDiv.style.transform = `translate(-50%, -50%) rotate(${compassRotation}deg)`;
    if (compassActive && directionMarkerImg.style.visibility != 'visible') {
      directionMarkerImg.style.visibility = 'visible'
    }
  }
  else {
    minDeviceOrientationEvents -= 1;
  }
}


if (window.DeviceOrientationEvent) {
  startCompass()
}
