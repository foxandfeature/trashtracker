// ScanController.js
// Version: 0.0.1
// Event: On Awake
// Description: Calls the Scan module and expose results through public functions that can be accessed across project

//@input Asset.ScanModule module
//@input float scanThreshold = 0.7 {"widget": "slider", "min": 0.0, "max": 1.0, "step": 0.1}

function onScanComplete(context, callback) {
    return function(json) {

        var obj = JSON.parse(json);

        // If we receive callback without expected scan structure
        // assume no results.
        if (!obj || !obj.annotations || !obj.annotations[context]) {
            callback(null);
            return;
        }
        
        // If we receive scan callback, but get no result data
        // return empty array
        if (!obj.annotations[context].annotations) {
            callback([]);
            return;
        }
        
        var annotations = obj.annotations[context].annotations;
        
        for (var i=0;i<annotations.length;i++) {
            if (annotations[i].confidence < script.scanThreshold) {             
                annotations.splice(i, 1);
            }
        }
        
        callback(annotations);
    };
}

function onScanFailure(callback) {
    return function(reason) {
        print("Scan failure: " + reason);
        callback(reason);
    };    
}

function getScanResults(typeString, callback, failureCallback) {
    var scanType = ScanModule.Contexts[typeString];
    script.module.scan([scanType], onScanComplete(scanType, callback), onScanFailure(failureCallback));
}

global.getScanResults = getScanResults;