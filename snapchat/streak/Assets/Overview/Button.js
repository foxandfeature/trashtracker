//@input Component.ScriptComponent[] buttons
//@input Asset.ObjectPrefab scanner

for (var i=0;i<script.buttons.length;i++){
    if (script.buttons[i].onPressUp != null) {
        script.buttons[i].onPressUp.add(function(){
            global.sceneManager.loadSceneSync("Scanner")
            global.sceneManager.unloadSceneByName("Overview")
            setTimeout(function(){global.sceneManager.unloadSceneByName("Overview")}, 1)
        })
    }
}
