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
          if (response === "granted") {
            Document.getElementById("ios-magnetometer-request-menu").style.visibility = hidden;
            window.addEventListener("deviceorientation", deviceOrientationhHandler, true);
            compassActive = true
          } else {
            Document.getElementById("ios-magnetometer-request-menu").style.visibility = visible;
          }
        })
        .catch(() => alert("not supported"));
    }
    else {
      window.addEventListener("deviceorientationabsolute", deviceOrientationhHandler, true);
      compassActive = true
    }
  }
}

function deviceOrientationhHandler(e) {
  compassRotation = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  let locationMarkerIcon = document.getElementById("location-marker-icon")
  if (locationMarkerIcon != null) {
    locationMarkerIcon.style.transform = `translate(-50%, -50%) rotate(${compassRotation}deg)`;
  }
}

if (window.DeviceOrientationEvent) {
  startCompass()
}


