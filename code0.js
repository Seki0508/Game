gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDBrownButtonWithShadowObjects1= [];
gdjs.LobbyCode.GDBrownButtonWithShadowObjects2= [];
gdjs.LobbyCode.GDBrownButtonWithShadowObjects3= [];
gdjs.LobbyCode.GDPlayerNumberTextObjects1= [];
gdjs.LobbyCode.GDPlayerNumberTextObjects2= [];
gdjs.LobbyCode.GDPlayerNumberTextObjects3= [];
gdjs.LobbyCode.GDWallsObjects1= [];
gdjs.LobbyCode.GDWallsObjects2= [];
gdjs.LobbyCode.GDWallsObjects3= [];
gdjs.LobbyCode.GDPlayerObjectObjects1= [];
gdjs.LobbyCode.GDPlayerObjectObjects2= [];
gdjs.LobbyCode.GDPlayerObjectObjects3= [];
gdjs.LobbyCode.GDBackgroundObjects1= [];
gdjs.LobbyCode.GDBackgroundObjects2= [];
gdjs.LobbyCode.GDBackgroundObjects3= [];
gdjs.LobbyCode.GDTitleObjects1= [];
gdjs.LobbyCode.GDTitleObjects2= [];
gdjs.LobbyCode.GDTitleObjects3= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.LobbyCode.GDPlayerObjectObjects1, gdjs.LobbyCode.GDPlayerObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDPlayerObjectObjects2[i].getBehavior("Physics2").getLinearVelocityX() > 5 ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDPlayerObjectObjects2[k] = gdjs.LobbyCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.LobbyCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDPlayerObjectObjects2 */
{for(var i = 0, len = gdjs.LobbyCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.LobbyCode.GDPlayerObjectObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.LobbyCode.GDPlayerObjectObjects1, gdjs.LobbyCode.GDPlayerObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDPlayerObjectObjects2[i].getBehavior("Physics2").getLinearVelocityX() < -(5) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDPlayerObjectObjects2[k] = gdjs.LobbyCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.LobbyCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDPlayerObjectObjects2 */
{for(var i = 0, len = gdjs.LobbyCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.LobbyCode.GDPlayerObjectObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.LobbyCode.GDPlayerObjectObjects1, gdjs.LobbyCode.GDPlayerObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDPlayerObjectObjects2[i].getBehavior("Physics2").getLinearVelocityY() < -(5) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDPlayerObjectObjects2[k] = gdjs.LobbyCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.LobbyCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDPlayerObjectObjects2 */
{for(var i = 0, len = gdjs.LobbyCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.LobbyCode.GDPlayerObjectObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

/* Reuse gdjs.LobbyCode.GDPlayerObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDPlayerObjectObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDPlayerObjectObjects1[i].getBehavior("Physics2").getLinearVelocityY() > 5 ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDPlayerObjectObjects1[k] = gdjs.LobbyCode.GDPlayerObjectObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDPlayerObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDPlayerObjectObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDPlayerObjectObjects1[i].getBehavior("Animation").setAnimationName("Fall");
}
}}

}


};gdjs.LobbyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.LobbyCode.GDBackgroundObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Background", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.LobbyCode.GDBackgroundObjects1.length !== 0 ? gdjs.LobbyCode.GDBackgroundObjects1[0] : null), true, "Background", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BrownButtonWithShadow"), gdjs.LobbyCode.GDBrownButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDBrownButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDBrownButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDBrownButtonWithShadowObjects1[k] = gdjs.LobbyCode.GDBrownButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDBrownButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.LobbyCode.GDPlayerObjectObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDPlayerObjectObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDPlayerObjectObjects1[i].getBehavior("Physics2").applyPolarImpulse(gdjs.random(360), 1, (gdjs.LobbyCode.GDPlayerObjectObjects1[i].getCenterXInScene()), (gdjs.LobbyCode.GDPlayerObjectObjects1[i].getCenterYInScene()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.LobbyCode.GDPlayerObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDPlayerObjectObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDPlayerObjectObjects1[i].getBehavior("Animation").getAnimationName() != "Hit" ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDPlayerObjectObjects1[k] = gdjs.LobbyCode.GDPlayerObjectObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDPlayerObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.LobbyCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.LobbyCode.GDBrownButtonWithShadowObjects3.length = 0;
gdjs.LobbyCode.GDPlayerNumberTextObjects1.length = 0;
gdjs.LobbyCode.GDPlayerNumberTextObjects2.length = 0;
gdjs.LobbyCode.GDPlayerNumberTextObjects3.length = 0;
gdjs.LobbyCode.GDWallsObjects1.length = 0;
gdjs.LobbyCode.GDWallsObjects2.length = 0;
gdjs.LobbyCode.GDWallsObjects3.length = 0;
gdjs.LobbyCode.GDPlayerObjectObjects1.length = 0;
gdjs.LobbyCode.GDPlayerObjectObjects2.length = 0;
gdjs.LobbyCode.GDPlayerObjectObjects3.length = 0;
gdjs.LobbyCode.GDBackgroundObjects1.length = 0;
gdjs.LobbyCode.GDBackgroundObjects2.length = 0;
gdjs.LobbyCode.GDBackgroundObjects3.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects3.length = 0;

gdjs.LobbyCode.eventsList1(runtimeScene);
gdjs.LobbyCode.GDBrownButtonWithShadowObjects1.length = 0;
gdjs.LobbyCode.GDBrownButtonWithShadowObjects2.length = 0;
gdjs.LobbyCode.GDBrownButtonWithShadowObjects3.length = 0;
gdjs.LobbyCode.GDPlayerNumberTextObjects1.length = 0;
gdjs.LobbyCode.GDPlayerNumberTextObjects2.length = 0;
gdjs.LobbyCode.GDPlayerNumberTextObjects3.length = 0;
gdjs.LobbyCode.GDWallsObjects1.length = 0;
gdjs.LobbyCode.GDWallsObjects2.length = 0;
gdjs.LobbyCode.GDWallsObjects3.length = 0;
gdjs.LobbyCode.GDPlayerObjectObjects1.length = 0;
gdjs.LobbyCode.GDPlayerObjectObjects2.length = 0;
gdjs.LobbyCode.GDPlayerObjectObjects3.length = 0;
gdjs.LobbyCode.GDBackgroundObjects1.length = 0;
gdjs.LobbyCode.GDBackgroundObjects2.length = 0;
gdjs.LobbyCode.GDBackgroundObjects3.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects3.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
