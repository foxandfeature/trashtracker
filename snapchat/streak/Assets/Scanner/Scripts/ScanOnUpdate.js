//@input bool printDebugLog
//@input string scanType = "Objects" {"values": [{"value": "Objects", "label": "Objects"}, {"value": "Cars", "label": "Cars"},  {"value": "Places", "label": "Places"}], "widget": "combobox"}
//@input SceneObject scanner

scan();

function scan() {
    global.getScanResults(script.scanType, function callback(data) {
        if (data && data.length > 0) {
            for (var i=0;i<data.length;i++) {
                debugPrint("Scan Result: " + data[i].name);
                if (data[i].name == "Waste container"){
                    global.increaseStreak()
                    global.sceneManager.loadSceneSync("Overview")
                    global.sceneManager.unloadSceneByName("Scanner")
                    return
                }
            }
            
        } else {
            debugPrint("Scan has No Result!");
        }
        
        scan();
    }, function failureCallback(data) {
        debugPrint("Scan Failed! " + data);
        scan();
    });        
}

function debugPrint(message) {
    if (script.printDebugLog) {
        print(message);
    }
}