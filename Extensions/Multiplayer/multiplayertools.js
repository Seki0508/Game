var gdjs;(function(n){const r=new n.Logger("Multiplayer"),B=window.performance&&typeof window.performance.now=="function"?window.performance.now.bind(window.performance):Date.now,T=async({relativeUrl:G,method:A,body:L,dev:D})=>{const P=n.playerAuthentication.getUserId(),k=n.playerAuthentication.getUserToken();if(!P||!k)throw r.warn("Cannot fetch as a player if the player is not connected."),new Error("Cannot fetch as a player if the player is not connected.");const y=D?"https://api-dev.gdevelop.io":"https://api.gdevelop.io",N=new URL(`${y}${G}`);N.searchParams.set("playerId",P);const _=N.toString(),R={"Content-Type":"application/json",Authorization:`player-game-token ${k}`},u=await fetch(_,{method:A,headers:R,body:L});if(!u.ok)throw new Error(`Error while fetching as a player: ${u.status} ${u.statusText}`);const f=await u.text();if(f!=="OK")try{return JSON.parse(f)}catch(q){throw new Error(`Error while parsing the response: ${q}`)}};let Ie;(function(t){t.disableMultiplayerForTesting=!1,t._isReadyToSendOrReceiveGameUpdateMessages=!1;let L=null,D=!1,P=!1,k=!1;t._isLobbyGameRunning=!1;let N=!1,_=!1,R=null,u=null,f=null,q=!1,h=null,F=null,Z=!1,Y=null,M=null,U=!1,V=null,H=null,l=null,ee=null,j=null;const Me=1e4,ae=3e4;let te=ae;const Ce=1e3,ve=1e4,Ee=1e3,Pe=1e4;let Q=null;const Le=12e3;t.DEFAULT_OBJECT_MAX_SYNC_RATE=30,t._objectMaxSyncRate=t.DEFAULT_OBJECT_MAX_SYNC_RATE;let m=!1;t.playerNumber=null,t.hostPeerId=null,n.registerRuntimeScenePreEventsCallback(e=>{m=e.getGame().isUsingGDevelopDevelopmentEnvironment(),!t.disableMultiplayerForTesting&&(n.multiplayerMessageManager.handleHeartbeatsToSend(),n.multiplayerMessageManager.handleJustDisconnectedPeers(e),n.multiplayerMessageManager.handleChangeInstanceOwnerMessagesReceived(e),n.multiplayerMessageManager.handleUpdateInstanceMessagesReceived(e),n.multiplayerMessageManager.handleCustomMessagesReceived(),n.multiplayerMessageManager.handleAcknowledgeMessagesReceived(),n.multiplayerMessageManager.resendClearOrCancelAcknowledgedMessages(e),n.multiplayerMessageManager.handleChangeVariableOwnerMessagesReceived(e),t._isLobbyGameRunning&&n.multiplayerMessageManager.handleSavedUpdateMessages(e),n.multiplayerMessageManager.handleUpdateGameMessagesReceived(e),n.multiplayerMessageManager.handleUpdateSceneMessagesReceived(e))}),n.registerRuntimeScenePostEventsCallback(e=>{t.disableMultiplayerForTesting||(Ae(e),ke(e),n.multiplayerMessageManager.handleHeartbeatsReceived(),n.multiplayerMessageManager.handleEndGameMessagesReceived(),n.multiplayerMessageManager.handleResumeGameMessagesReceived(e),n.multiplayerMessageManager.handleDestroyInstanceMessagesReceived(e),n.multiplayerVariablesManager.handleChangeVariableOwnerMessagesToSend(),n.multiplayerMessageManager.handleUpdateGameMessagesToSend(e),n.multiplayerMessageManager.handleUpdateSceneMessagesToSend(e))}),n.registerRuntimeScenePostEventsCallback(()=>{t.disableMultiplayerForTesting||(k=!1,N=!1,_=!1)});const Re=({runtimeGame:e,gameId:o})=>{const s="https://gd.games",a=new URL(`${s}/games/${o}/lobbies${u?`/${u}`:""}`);a.searchParams.set("gameVersion",e.getGameData().properties.version),e.getAdditionalOptions().nativeMobileApp&&a.searchParams.set("nativeMobileApp","true"),a.searchParams.set("isPreview",e.isPreview()?"true":"false"),m&&a.searchParams.set("dev","true"),f&&a.searchParams.set("connectionId",f),t.playerNumber&&a.searchParams.set("positionInLobby",t.playerNumber.toString());const g=n.playerAuthentication.getUserId();g&&a.searchParams.set("playerId",g);const c=n.playerAuthentication.getUserToken();c&&a.searchParams.set("playerToken",c);const i=e.getPlatformInfo();return a.searchParams.set("scm",i.supportedCompressionMethods.join(",")),a.searchParams.set("multiplayerVersion","2"),a.toString()};t.setObjectsSynchronizationRate=e=>{e<1||e>60?(r.warn(`Invalid rate ${e} for object synchronization. Defaulting to ${t.DEFAULT_OBJECT_MAX_SYNC_RATE}.`),t._objectMaxSyncRate=t.DEFAULT_OBJECT_MAX_SYNC_RATE):t._objectMaxSyncRate=e},t.getObjectsSynchronizationRate=()=>t._objectMaxSyncRate,t.hasLobbyGameJustStarted=()=>k,t.isLobbyGameRunning=()=>t._isLobbyGameRunning,t.isReadyToSendOrReceiveGameUpdateMessages=()=>t._isReadyToSendOrReceiveGameUpdateMessages,t.hasLobbyGameJustEnded=()=>N,t.getPlayersInLobbyCount=()=>n.multiplayerMessageManager.getNumberOfConnectedPlayers(),t.isPlayerConnected=e=>n.multiplayerMessageManager.isPlayerConnected(e),t.getCurrentPlayerNumber=()=>t.playerNumber||0,t.isCurrentPlayerHost=()=>!!t.hostPeerId&&t.hostPeerId===n.multiplayerPeerJsHelper.getCurrentId(),t.isMigratingHost=()=>!!Z,t.endLobbyWhenHostLeaves=e=>{q=e},t.shouldEndLobbyWhenHostLeaves=()=>q,t.getPlayerUsername=e=>n.multiplayerMessageManager.getPlayerUsername(e),t.getCurrentPlayerUsername=()=>{const e=t.getCurrentPlayerNumber();return t.getPlayerUsername(e)};const Ae=e=>{const o=n.multiplayerMessageManager.getLatestPlayerWhoJustLeft();if(o){const s=t.getPlayerUsername(o);n.multiplayerComponents.displayPlayerLeftNotification(e,s),n.multiplayerMessageManager.removePlayerWhoJustLeft(),t.isCurrentPlayerHost()&&t.isReadyToSendOrReceiveGameUpdateMessages()&&x()}},ke=e=>{const o=n.multiplayerMessageManager.getLatestPlayerWhoJustJoined();if(o){const s=t.getPlayerUsername(o);n.multiplayerComponents.displayPlayerJoinedNotification(e,s),t.isCurrentPlayerHost()&&t.isReadyToSendOrReceiveGameUpdateMessages()&&x()}n.multiplayerMessageManager.removePlayerWhoJustJoined()},ce=(e,o,s=0)=>{const g=`${m?"https://api-dev.gdevelop.io":"https://api.gdevelop.io"}/game/public-game/${o}`;return fetch(g,{method:"HEAD"}).then(c=>c.status!==200?(r.warn(`Error while fetching the game: ${c.status} ${c.statusText}`),c.status===404||s>2?!1:ce(e,o,s+1)):!0,c=>(r.error("Error while fetching game:",c),!1))},de=function(e,o){if(f){r.info("Already connected to a lobby.");return}l&&(r.warn("Already connected to a lobby. Closing the previous one."),l.close(),f=null,t.playerNumber=null,t.hostPeerId=null,u=null,l=null);const s=n.projectData.properties.projectUuid,a=n.playerAuthentication.getUserId(),g=n.playerAuthentication.getUserToken();if(!s){r.error("Cannot open lobbies if the project has no ID.");return}if(!a||!g){r.warn("Cannot open lobbies if the player is not connected.");return}const c=m?"wss://api-ws-dev.gdevelop.io/play":"wss://api-ws.gdevelop.io/play",i=new URL(c);i.searchParams.set("gameId",s),i.searchParams.set("lobbyId",o),i.searchParams.set("playerId",a),i.searchParams.set("connectionType","lobby"),i.searchParams.set("playerGameToken",g),l=new WebSocket(i.toString()),l.onopen=()=>{if(r.info("Connected to the lobby."),ee=setInterval(()=>{l&&l.send(JSON.stringify({action:"heartbeat",connectionType:"lobby"}))},Me),l){l.send(JSON.stringify({action:"getConnectionId"}));const d=e.getGame().getPlatformInfo();l.send(JSON.stringify({action:"sessionInformation",connectionType:"lobby",isCordova:d.isCordova,devicePlatform:d.devicePlatform,navigatorPlatform:d.navigatorPlatform,hasTouch:d.hasTouch,supportedCompressionMethods:d.supportedCompressionMethods}))}},l.onmessage=d=>{if(d.data){const p=JSON.parse(d.data);switch(p.type){case"connectionId":{const b=p.data,I=b.connectionId,$=b.positionInLobby,W=b.validIceServers||[],we=b.brokerServerConfig;if(!I||!$){r.error("No connectionId or position received"),n.multiplayerComponents.displayErrorNotification(e),l&&l.close();return}Ne({runtimeScene:e,connectionId:I,positionInLobby:$,lobbyId:o,playerId:a,playerToken:g,validIceServers:W,brokerServerConfig:we});break}case"lobbyUpdated":{const I=p.data.positionInLobby;_e({runtimeScene:e,positionInLobby:I});break}case"gameCountdownStarted":{const I=p.data.compressionMethod||"none";Ue({runtimeScene:e,compressionMethod:I});break}case"gameStarted":{te=p.data.heartbeatInterval||ae,Je({runtimeScene:e});break}case"peerId":{const b=p.data;if(!b){r.error("No message received");return}const I=b.peerId,$=b.compressionMethod;if(!I||!$){r.error("Malformed message received");return}const W={times:2,delayInMs:500};try{n.evtTools.network.retryIfFailed(W,async()=>{Oe({peerId:I,compressionMethod:$})})}catch{r.error(`Handling peerId message from websocket failed (after {${W.times}} times with a delay of ${W.delayInMs}ms). Not trying anymore.`)}break}}}},l.onclose=()=>{if(t._isLobbyGameRunning||r.info("Disconnected from the lobby."),f=null,l=null,ee&&clearInterval(ee),t._isLobbyGameRunning)return;const d=n.multiplayerComponents.getLobbiesIframe(e);!d||!d.contentWindow||d.contentWindow.postMessage({id:"lobbyLeft"},"*")}},ge=e=>{n.multiplayerComponents.displayConnectionErrorNotification(e),K(),M=null,R=null,U&&O(e)},Ne=function({runtimeScene:e,connectionId:o,positionInLobby:s,lobbyId:a,playerId:g,playerToken:c,validIceServers:i,brokerServerConfig:d}){if(i.length)for(const b of i)n.multiplayerPeerJsHelper.useCustomICECandidate(b.urls,b.username,b.credential);if(d?n.multiplayerPeerJsHelper.useCustomBrokerServer(d.hostname,d.port,d.path,d.key,d.secure,{onPeerUnavailable:()=>ge(e)}):n.multiplayerPeerJsHelper.useDefaultBrokerServer({onPeerUnavailable:()=>ge(e)}),f=o,t.playerNumber=s,u=a,M==="OPEN_LOBBY_PAGE"){t.openLobbiesWindow(e),O(e);return}else if(M==="JOIN_GAME"){ue();return}else if(M==="START_GAME"){const b={times:2,delayInMs:500};try{n.evtTools.network.retryIfFailed(b,async()=>{ye(),be()})}catch{r.error(`Sending of peerId message from websocket failed (after {${b.times}} times with a delay of ${b.delayInMs}ms). Not trying anymore.`)}return}const p=n.multiplayerComponents.getLobbiesIframe(e);if(!p||!p.contentWindow){r.error("The lobbies iframe is not opened, cannot send the join message.");return}p.contentWindow.postMessage({id:"lobbyJoined",lobbyId:a,playerId:g,playerToken:c,connectionId:f,positionInLobby:s},"https://gd.games")},K=function(){l&&l.close(),f=null,t.playerNumber=null,t.hostPeerId=null,u=null,l=null},_e=function({runtimeScene:e,positionInLobby:o}){t.playerNumber=o;const s=n.multiplayerComponents.getLobbiesIframe(e);!s||!s.contentWindow||s.contentWindow.postMessage({id:"lobbyUpdated",positionInLobby:o},"*")},Ue=function({runtimeScene:e,compressionMethod:o}){n.multiplayerPeerJsHelper.setCompressionMethod(o),t.getCurrentPlayerNumber()===1&&ye();const s=n.multiplayerComponents.getLobbiesIframe(e);if(!s||!s.contentWindow){r.info("The lobbies iframe is not opened, not sending message.");return}s.contentWindow.postMessage({id:"gameCountdownStarted"},"*"),n.multiplayerComponents.hideLobbiesCloseButtonTemporarily(e)},x=async function(){const e=n.projectData.properties.projectUuid;if(!e||!u){r.error("Cannot keep the lobby playing without the game ID or lobby ID.");return}const o=`/play/game/${e}/public-lobby/${u}/action/heartbeat`,s=n.multiplayerMessageManager.getConnectedPlayers();try{await T({relativeUrl:o,method:"POST",body:JSON.stringify({players:s}),dev:m})}catch(a){r.error("Error while sending heartbeat, retrying:",a);try{await T({relativeUrl:o,method:"POST",body:JSON.stringify({players:s}),dev:m})}catch(g){r.error("Error while sending heartbeat a second time. Giving up:",g)}}},Je=function({runtimeScene:e}){const o=n.multiplayerPeerJsHelper.getAllPeers();if(!t.isCurrentPlayerHost()&&o.length===0){n.multiplayerComponents.displayConnectionErrorNotification(e),K(),t.removeLobbiesContainer(e),re(e);return}t.isCurrentPlayerHost()&&(j=setInterval(async()=>{await x()},te)),r.info("Lobby game has started."),n.multiplayerMessageManager.handleSavedUpdateMessages(e),U&&O(e),t._isReadyToSendOrReceiveGameUpdateMessages=!0,k=!0,t._isLobbyGameRunning=!0,t.removeLobbiesContainer(e),l&&l.close(),re(e)};t.handleLobbyGameEnded=function(){r.info("Lobby game has ended."),N=!0,t._isLobbyGameRunning=!1,u=null,t.playerNumber=null,t.hostPeerId=null,t._isReadyToSendOrReceiveGameUpdateMessages=!1,j&&(clearInterval(j),j=null),n.multiplayerPeerJsHelper.disconnectFromAllPeers(),n.multiplayerMessageManager.clearAllMessagesTempData()};const Oe=function({peerId:e,compressionMethod:o}){n.multiplayerPeerJsHelper.setCompressionMethod(o);const s=n.multiplayerPeerJsHelper.getCurrentId();if(!s)throw r.error("No peerId found, the player does not seem connected to the broker server."),new Error("Missing player peerId.");if(s===e){r.info("Received our own peerId, ignoring.");return}t.hostPeerId=e,n.multiplayerPeerJsHelper.connect(e)},Ge=function(){if(!l){r.error("No connection to send the start countdown message. Are you connected to a lobby?");return}l.send(JSON.stringify({action:"startGameCountdown",connectionType:"lobby"}))},be=function(){if(!l){r.error("No connection to send the start countdown message. Are you connected to a lobby?");return}l.send(JSON.stringify({action:"startGame",connectionType:"lobby"})),t._isReadyToSendOrReceiveGameUpdateMessages=!0},ue=function(){if(!l){r.error("No connection to send the join game message. Are you connected to a lobby?");return}l.send(JSON.stringify({action:"joinGame",connectionType:"lobby"}))};t.markConnectionAsConnected=function(){!l||l.send(JSON.stringify({action:"updateConnection",connectionType:"lobby",status:"connected",peerId:n.multiplayerPeerJsHelper.getCurrentId()}))};const E=function(e){h=null,F=null,Y=null,Q&&(clearTimeout(Q),Q=null),Z=!1,t.hostPeerId?n.multiplayerComponents.showHostMigrationFinishedNotification(e):n.multiplayerComponents.showHostMigrationFailedNotification(e)};t.resumeGame=async function(e){t.isCurrentPlayerHost()&&(n.multiplayerMessageManager.sendResumeGameMessage(),await x(),j=setInterval(async()=>{await x()},te)),E(e)};const he=async function({runtimeScene:e}){if(!h||!F)return;try{const s=`/play/game/${h.gameId}/public-lobby/${h.lobbyId}/lobby-change-host-request?peerId=${n.multiplayerPeerJsHelper.getCurrentId()}`;h=await T({relativeUrl:s,method:"GET",dev:m})}catch(s){r.error("Error while trying to retrieve the lobby change host request:",s),t.handleLobbyGameEnded(),E(e);return}if(!h)throw new Error("No lobby change host request received.");const o=h.newHostPeerId;if(!o){if(r.info("No new host picked yet."),B()-F>ve){r.error("Timeout while waiting for the lobby host change. Giving up."),t.handleLobbyGameEnded(),E(e);return}r.info("Retrying..."),setTimeout(()=>{he({runtimeScene:e})},Ce);return}try{const s=h.newLobbyId,a=h.newPlayers;if(!s||!a){r.error("Change host request is incomplete. Cannot change host."),t.handleLobbyGameEnded(),E(e);return}t.hostPeerId=o,Y=B(),u=s,o===n.multiplayerPeerJsHelper.getCurrentId()?(r.info(`We are the new host. Switching to lobby ${s} and awaiting for ${a.length-1} player(s) to connect.`),await fe({runtimeScene:e})):(r.info(`Connecting to new host and switching lobby to ${s}.`),n.multiplayerPeerJsHelper.connect(o),Q=setTimeout(()=>{r.error("Timeout while waiting for the game to resume. Leaving the lobby."),t.handleLobbyGameEnded(),E(e)},Le))}catch(s){r.error("Error while trying to change host:",s),t.handleLobbyGameEnded(),E(e)}},fe=async function({runtimeScene:e}){if(!h)return;const o=h.newPlayers;if(!o){r.error("No expected players in the lobby change host request."),t.handleLobbyGameEnded(),E(e);return}const s=o.map(i=>i.playerNumber);n.multiplayerMessageManager.getConnectedPlayers().map(i=>i.playerNumber).filter(i=>!s.includes(i)).map(i=>{r.info(`Player ${i} left during the host migration. Marking as disconnected.`),n.multiplayerMessageManager.markPlayerAsDisconnected({runtimeScene:e,playerNumber:i})});const c=s.filter(i=>i!==t.playerNumber&&!n.multiplayerMessageManager.hasReceivedHeartbeatFromPlayer(i));if(c.length===0){r.info("All expected players are connected. Resuming the game."),await t.resumeGame(e);return}if(Y&&B()-Y>Pe&&c.length>0){r.error(`Timeout while waiting for players ${c.join(", ")} to connect. Assume they disconnected.`),c.map(i=>{n.multiplayerMessageManager.markPlayerAsDisconnected({runtimeScene:e,playerNumber:i})}),await t.resumeGame(e);return}setTimeout(()=>{fe({runtimeScene:e})},Ee)};t.handleHostDisconnected=async function({runtimeScene:e}){if(!t._isLobbyGameRunning)return;h&&(t.handleLobbyGameEnded(),E(e));const o=n.projectData.properties.projectUuid;if(!o||!u){r.error("Cannot ask for a host change without the game ID or lobby ID.");return}try{Z=!0,n.multiplayerComponents.displayHostMigrationNotification(e);const s=`/play/game/${o}/public-lobby/${u}/lobby-change-host-request`,a=n.multiplayerMessageManager.getPlayersInfo(),g=Object.keys(a).map(d=>({playerNumber:parseInt(d,10),playerId:a[d].playerId,ping:a[d].ping})),c=JSON.stringify({playersInfo:g,peerId:n.multiplayerPeerJsHelper.getCurrentId()});h=await T({relativeUrl:s,method:"POST",body:c,dev:m}),F=B(),await he({runtimeScene:e})}catch(s){r.error("Error while trying to change host:",s),t.handleLobbyGameEnded(),E(e)}},t.endLobbyGame=async function(){if(!t.isLobbyGameRunning())return;if(!t.isCurrentPlayerHost()){r.error("Only the host can end the game.");return}t._isLobbyGameRunning=!1,r.info("Ending the lobby game."),n.multiplayerMessageManager.sendEndGameMessage();const e=n.projectData.properties.projectUuid;if(!e||!u){r.error("Cannot end the lobby without the game ID or lobby ID.");return}const o=`/play/game/${e}/public-lobby/${u}/action/end`;try{await T({relativeUrl:o,method:"POST",body:JSON.stringify({}),dev:m})}catch(s){r.error("Error while ending the game:",s)}t.handleLobbyGameEnded()};const ye=function(){if(!l){r.error("No connection to send the message. Are you connected to a lobby?");return}const e=n.multiplayerPeerJsHelper.getCurrentId();if(!e)throw r.error("No peerId found, the player doesn't seem connected to the broker server."),new Error("Missing player peerId.");l.send(JSON.stringify({action:"sendPeerId",connectionType:"lobby",peerId:e})),t.hostPeerId=e},De=function(e,o,{checkOrigin:s}){if(!(s&&!["https://gd.games","http://localhost:4000"].includes(o.origin))){if(!o.data.id)throw new Error("Malformed message");switch(o.data.id){case"lobbiesListenerReady":{He(e);break}case"joinLobby":{if(!o.data.lobbyId)throw new Error("Malformed message.");M=null,de(e,o.data.lobbyId);break}case"startGameCountdown":{Ge();break}case"startGame":{be();break}case"leaveLobby":{K();break}case"joinGame":{ue();break}}}},z=function(e,o){r.error(o),t.removeLobbiesContainer(e),re(e)},He=e=>{const o=n.multiplayerComponents.getLobbiesIframe(e);if(!o||!o.contentWindow)return;const s=e.getGame().getPlatformInfo();o.contentWindow.postMessage({id:"sessionInformation",isCordova:s.isCordova,devicePlatform:s.devicePlatform,navigatorPlatform:s.navigatorPlatform,hasTouch:s.hasTouch},"*")},je=(e,o)=>{const s=Re({runtimeGame:e.getGame(),gameId:o});H=a=>{De(e,a,{checkOrigin:!0})},window.addEventListener("message",H,!0),n.multiplayerComponents.displayIframeInsideLobbiesContainer(e,s)},O=e=>{U=!1,M=null,n.multiplayerComponents.displayLoader(e,!1)},me=async(e,o,s)=>{if(U)return;const a=n.projectData.properties.projectUuid;if(!a){z(e,"The game ID is missing, the quick join lobby action cannot continue.");return}R=null,U=!0,o&&n.multiplayerComponents.displayLoader(e,!0);const g=`/play/game/${a}/public-lobby/action/quick-join`,c=e.getGame().getPlatformInfo();try{const i=await n.evtTools.network.retryIfFailed({times:2},()=>T({relativeUrl:g,method:"POST",dev:m,body:JSON.stringify({isPreview:e.getGame().isPreview(),gameVersion:e.getGame().getGameData().properties.version,supportedCompressionMethods:c.supportedCompressionMethods})}));if(i.status==="full"||i.status==="not-enough-players"){_=!0,R=i.status==="full"?"FULL":"NOT_ENOUGH_PLAYERS",O(e),s&&t.openLobbiesWindow(e);return}if(i.status==="join-game")if(i.lobby.status==="waiting")M="START_GAME";else if(i.lobby.status==="playing")M="JOIN_GAME";else throw new Error(`Lobby in wrong status: ${i.status}`);else if(f){O(e),t.openLobbiesWindow(e);return}else M="OPEN_LOBBY_PAGE";de(e,i.lobby.id)}catch(i){r.error("An error occurred while joining a lobby:",i),_=!0,R="UNKNOWN",O(e),s&&t.openLobbiesWindow(e)}};t.authenticateAndQuickJoinLobby=async(e,o,s)=>{const a=Date.now();if(V){if(a-V<500){V=a,r.warn("Last request to quick join a lobby was sent too little time ago. Ignoring this one.");return}}else V=a;const g=n.playerAuthentication.getUserId(),c=n.playerAuthentication.getUserToken();if(!g||!c){P=!0;const{status:i}=await n.playerAuthentication.openAuthenticationWindow(e).promise;P=!1,i==="logged"&&await me(e,o,s);return}await me(e,o,s)},t.isSearchingForLobbyToJoin=e=>U,t.hasQuickJoinJustFailed=e=>_,t.getQuickJoinFailureReason=()=>R,t.openLobbiesWindow=async e=>{if(t.isLobbiesWindowOpen(e)||n.playerAuthentication.isAuthenticationWindowOpen())return;const o=n.projectData.properties.projectUuid;if(!o){z(e,"The game ID is missing, the lobbies window cannot be opened.");return}if(D||P)return;if(!e.getGame().getRenderer().getDomElementContainer()){z(e,"The div element covering the game couldn't be found, the lobbies window cannot be displayed.");return}const a=()=>{t.removeLobbiesContainer(e)},g=n.playerAuthentication.getUserId(),c=n.playerAuthentication.getUserToken();if(!g||!c){P=!0;const{status:p}=await n.playerAuthentication.openAuthenticationWindow(e).promise;P=!1,p==="logged"&&t.openLobbiesWindow(e);return}if(n.multiplayerComponents.displayLobbies(e,a),L===null){D=!0;try{L=await ce(e.getGame(),o)}catch(p){L=!1,r.error("Error while checking if the game is registered:",p),z(e,"Error while checking if the game is registered.");return}finally{D=!1}}const i=e.getGame().getRenderer().getElectron(),d=i?()=>i.shell.openExternal("https://wiki.gdevelop.io/gdevelop5/publishing/web"):()=>window.open("https://wiki.gdevelop.io/gdevelop5/publishing/web","_blank");n.multiplayerComponents.addTextsToLoadingContainer(e,L,d),L&&je(e,o)},t.isLobbiesWindowOpen=function(e){return!!n.multiplayerComponents.getLobbiesRootContainer(e)},t.showLobbiesCloseButton=function(e,o){n.multiplayerComponents.changeLobbiesWindowCloseActionVisibility(e,o)},t.removeLobbiesContainer=function(e){Se(),n.multiplayerComponents.removeLobbiesContainer(e)};const Se=function(){H&&(window.removeEventListener("message",H,!0),H=null)},re=function(e){const o=e.getGame().getRenderer().getCanvas();o&&o.focus()};t.leaveGameLobby=async()=>{K(),t.handleLobbyGameEnded()}})(Ie=n.multiplayer||(n.multiplayer={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=multiplayertools.js.map
