
//@input SceneObject[] scanObjects
//@input SceneObject[] waitingObjects

function initialize() {
    scanAllowed(false);
    scan();
}
initialize();

function scanAllowed(b) {
    for (var i=0;i<script.scanObjects.length;i++) {
        script.scanObjects[i].enabled = b;
    }
    for (var i=0;i<script.waitingObjects.length;i++) {
        script.waitingObjects[i].enabled = !b;
    }
}

function scan() {
    global.getScanResults("Objects", function callback(data) {
        if (data) {
            scanAllowed(true);
        } else {
            scan();
        }
    }, function failureCallback(data) {
        if (data.includes("decline permission")) {
            scanAllowed(false);
        }
        scan();
    });        

}