var compassRotation
const isIOS = (
  navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
  navigator.userAgent.match(/AppleWebKit/)
);

function startCompass() {
  if (isIOS) {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === "granted") {
          window.addEventListener("deviceorientation", deviceOrientationhHandler, true);
        } else {
          alert("has to be allowed!");
        }
      })
      .catch(() => alert("not supported"));
  }
  else {
    window.addEventListener("deviceorientationabsolute", deviceOrientationhHandler, true);
  }
}

function deviceOrientationhHandler(e) {
  compassRotation = e.webkitCompassHeading || Math.abs(e.alpha - 360);
  let locationMarkerIcon = document.getElementById("location-marker-icon")
  if (locationMarkerIcon != null) {
    locationMarkerIcon.style.transform = `translate(-50%, -50%) rotate(${compassRotation}deg)`;
  }
}

if (isIOS){
  alert("oki")
  setTimeout(startCompass, 1000)
}
else{
  startCompass()
}
