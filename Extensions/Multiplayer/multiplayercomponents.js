var gdjs;(function(M){const d=new M.Logger("Multiplayer");let v;(function(n){const f="loader-container",D="lobbies-root-container",A="lobbies-frame-container",N="lobbies-close-container",C="lobbies-loader-container",p="lobbies-texts-container",T="lobbies-iframe-container",h="lobbies-iframe";let x=!0;const y=[];n.getDomElementContainer=e=>{const t=e.getGame().getRenderer().getDomElementContainer();return t||(d.error("No DOM element container found."),null)},n.getLobbiesRootContainer=e=>{const t=n.getDomElementContainer(e);return t?t.querySelector(`#${D}`):null},n.getLobbiesLoaderContainer=e=>{const t=n.getDomElementContainer(e);return t?t.querySelector(`#${C}`):null},n.getLobbiesIframeContainer=e=>{const t=n.getDomElementContainer(e);return t?t.querySelector(`#${T}`):null},n.getLobbiesCloseContainer=e=>{const t=n.getDomElementContainer(e);return t?t.querySelector(`#${N}`):null},n.getLobbiesTextsContainer=e=>{const t=n.getDomElementContainer(e);return t?t.querySelector(`#${p}`):null},n.getLobbiesIframe=e=>{const t=n.getDomElementContainer(e);return t?t.querySelector(`#${h}`):null},n.displayLoader=(e,t)=>{const i=n.getDomElementContainer(e);if(!!i)if(t){const r=document.createElement("div");r.id=f,r.style.backgroundColor="#000000",r.style.display="flex",r.style.height="100%",r.style.width="100%",r.style.justifyContent="center",r.style.alignItems="center",r.style.position="relative",r.style.zIndex="2";const o=document.createElement("img");o.setAttribute("width","50px"),o.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxjaXJjbGUgb3BhY2l0eT0nMC4yNScgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iNCI+PC9jaXJjbGU+CjxwYXRoIG9wYWNpdHk9JzAuNzUnIGZpbGw9IiNGRkZGRkYiIGQ9Ik00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3eiI+PC9wYXRoPgo8L3N2Zz4=");try{o.animate([{transform:"rotate(0deg)"},{transform:"rotate(359deg)"}],{duration:3e3,iterations:1/0})}catch{d.warn("Animation not supported, loader will be fixed.")}r.appendChild(o),i.children&&i.children.length>0?i.insertBefore(r,i.children[0]):i.appendChild(r)}else{const r=i.querySelector(`#${f}`);if(!r)return;try{i.removeChild(r)}catch{}}},n.displayLobbies=function(e,t){const i=n.getDomElementContainer(e);if(!i)return;const r=document.createElement("div");r.id=D,r.style.position="relative",r.style.backgroundColor="rgba(14, 6, 45, 0.5)",r.style.opacity="1",r.style.width="100%",r.style.height="100%",r.style.zIndex="2",r.style.pointerEvents="all";const o=document.createElement("div");o.id=A,o.style.backgroundColor="#FFFFFF",o.style.position="absolute",o.style.top="16px",o.style.bottom="16px",o.style.left="16px",o.style.right="16px",o.style.borderRadius="8px",o.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",o.style.overflow="hidden";const a=document.createElement("div");a.id=N,a.style.cursor="pointer",a.style.display="flex",a.style.justifyContent="right",a.style.alignItems="center",a.style.zIndex="3",a.style.position="absolute",a.style.top="32px",a.style.right="32px",m(a,t);const g=document.createElement("img");g.setAttribute("width","15px"),g.setAttribute("src","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgOCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuODUzNTUgMC4xNDY0NDdDOC4wNDg4MiAwLjM0MTcwOSA4LjA0ODgyIDAuNjU4MjkxIDcuODUzNTUgMC44NTM1NTNMMC44NTM1NTMgNy44NTM1NUMwLjY1ODI5MSA4LjA0ODgyIDAuMzQxNzA5IDguMDQ4ODIgMC4xNDY0NDcgNy44NTM1NUMtMC4wNDg4MTU1IDcuNjU4MjkgLTAuMDQ4ODE1NSA3LjM0MTcxIDAuMTQ2NDQ3IDcuMTQ2NDVMNy4xNDY0NSAwLjE0NjQ0N0M3LjM0MTcxIC0wLjA0ODgxNTUgNy42NTgyOSAtMC4wNDg4MTU1IDcuODUzNTUgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4xNDY0NDcgMC4xNDY0NDdDMC4zNDE3MDkgLTAuMDQ4ODE1NSAwLjY1ODI5MSAtMC4wNDg4MTU1IDAuODUzNTUzIDAuMTQ2NDQ3TDcuODUzNTUgNy4xNDY0NUM4LjA0ODgyIDcuMzQxNzEgOC4wNDg4MiA3LjY1ODI5IDcuODUzNTUgNy44NTM1NUM3LjY1ODI5IDguMDQ4ODIgNy4zNDE3MSA4LjA0ODgyIDcuMTQ2NDUgNy44NTM1NUwwLjE0NjQ0NyAwLjg1MzU1M0MtMC4wNDg4MTU1IDAuNjU4MjkxIC0wLjA0ODgxNTUgMC4zNDE3MDkgMC4xNDY0NDcgMC4xNDY0NDdaIiBmaWxsPSIjMUQxRDI2Ii8+Cjwvc3ZnPgo="),a.appendChild(g),x||(a.style.visibility="hidden");const s=document.createElement("div");s.id=C,s.style.display="flex",s.style.flexDirection="column",s.style.height="100%",s.style.width="100%",s.style.justifyContent="center",s.style.alignItems="center";const l=document.createElement("img");l.setAttribute("width","28px"),l.setAttribute("src","data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYW5pbWF0ZS1zcGluIC1tbC0xIG1yLTMgaC01IHctNSB0ZXh0LXdoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxjaXJjbGUgb3BhY2l0eT0nMC4yNScgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0Ij48L2NpcmNsZT4KPHBhdGggb3BhY2l0eT0nMC43NScgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3oiPjwvcGF0aD4KPC9zdmc+"),l.style.marginTop="50px";try{l.animate([{transform:"rotate(0deg)"},{transform:"rotate(359deg)"}],{duration:3e3,iterations:1/0})}catch{d.warn("Animation not supported, loader will be fixed.")}s.appendChild(l);const c=document.createElement("div");c.id=T,c.style.display="flex",c.style.flexDirection="column",c.style.height="100%",c.style.width="100%",c.style.justifyContent="stretch",c.style.alignItems="stretch",c.style.display="none",o.appendChild(a),o.appendChild(s),o.appendChild(c),r.appendChild(o),i.appendChild(r)},n.displayIframeInsideLobbiesContainer=(e,t)=>{const i=n.getLobbiesIframeContainer(e),r=n.getLobbiesLoaderContainer(e),o=n.getLobbiesTextsContainer(e);if(!i||!r||!o){d.error("Lobbies containers not found.");return}const a=document.createElement("iframe");a.id=h,a.setAttribute("sandbox","allow-forms allow-modals allow-orientation-lock allow-popups allow-same-origin allow-scripts"),a.addEventListener("load",()=>{i.style.display="flex",r.style.display="none"}),a.addEventListener("loaderror",()=>{n.addReloadUrlToTextsContainer(()=>{i.removeChild(a),i.style.display="none",r.style.display="flex",n.displayIframeInsideLobbiesContainer(e,t)},o)}),a.src=t,a.style.flex="1",a.style.border="0",i.appendChild(a)},n.addTextsToLoadingContainer=(e,t,i)=>{const r=n.getLobbiesLoaderContainer(e);if(!r){d.error("Loader container not found.");return}const o=document.createElement("div");if(o.id=p,o.style.display="flex",o.style.flexDirection="column",o.style.width="100%",o.style.justifyContent="center",o.style.alignItems="center",o.style.position="relative",o.style.zIndex="3",o.style.fontSize="11pt",o.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',!t){const a=document.createElement("h1");a.innerText="Publish your game!",a.style.fontSize="20pt",a.style.fontWeight="bold";const g=document.createElement("p");g.innerText="GDevelop's lobbies are only available for published games.";const s=document.createElement("p");s.innerText="Click the button below to learn how to publish your game then try again.",o.appendChild(a),o.appendChild(g),o.appendChild(s),r.innerHTML="";const l=document.createElement("a");m(l,i),l.innerText="How to publish my game",l.style.color="#0078d4",l.style.textDecoration="none",l.style.textDecoration="underline",l.style.cursor="pointer",o.appendChild(l)}r.prepend(o)},n.addReloadUrlToTextsContainer=(e,t)=>{const i=document.createElement("a");m(i,e),i.innerText="Try again",i.style.color="#0078d4",i.style.textDecoration="none",i.style.textDecoration="underline",i.style.cursor="pointer",t.appendChild(i)},n.removeLobbiesContainer=function(e){const t=n.getLobbiesRootContainer(e);!t||t.remove()},n.changeLobbiesWindowCloseActionVisibility=function(e,t){x=t;const i=n.getLobbiesCloseContainer(e);!i||(i.style.visibility=t?"inherit":"hidden")},n.hideLobbiesCloseButtonTemporarily=function(e){if(!x)return;const t=n.getLobbiesCloseContainer(e);!t||(t.style.visibility="hidden",setTimeout(()=>{t.style.visibility="inherit"},1e4))},n.displayErrorNotification=function(e){n.showNotification({runtimeScene:e,content:"An error occurred while displaying the game lobbies, please try again.",type:"error"})},n.displayPlayerLeftNotification=function(e,t){n.showNotification({runtimeScene:e,content:`${t} left.`,type:"warning"})},n.displayPlayerJoinedNotification=function(e,t){n.showNotification({runtimeScene:e,content:`${t} joined.`,type:"success"})},n.displayConnectionErrorNotification=function(e){n.showNotification({runtimeScene:e,content:"Could not connect to other players.",type:"error"})},n.displayHostMigrationNotification=function(e){n.showNotification({runtimeScene:e,content:"Migrating host...",type:"warning",id:"migrating-host",persist:!0})},n.showHostMigrationFinishedNotification=function(e){I("migrating-host"),n.showNotification({runtimeScene:e,content:"Host migrated!",type:"success"})},n.showHostMigrationFailedNotification=function(e){I("migrating-host"),n.showNotification({runtimeScene:e,content:"Host migration failed.",type:"error"})};const I=function(e){const t=document.getElementById(e);if(!t){d.warn(`Notification ${e} not found. skipping`);return}const i=y.indexOf(e);i!==-1&&y.splice(i,1),t.remove();for(let r=i;r<y.length;r++){const o=document.getElementById(y[r]);if(!o){d.error("Notification not found.");continue}o.style.top=`${12+r*32}px`}};n.showNotification=function({runtimeScene:e,content:t,type:i,id:r,persist:o}){if(y.length>5){const L=y.shift();if(!L){d.error("No oldest notification ID found.");return}I(L)}const a=r||`notification-${Math.random().toString(36).substring(7)}`,g=e.getGame().getRenderer().getDomElementContainer();if(!g){d.error("No DOM element container found.");return}const s=document.createElement("div");s.id=a,s.style.position="absolute",s.style.pointerEvents="all",s.style.backgroundColor=i==="success"?"#0E062D":i==="warning"?"#FFA500":"#FF0000",s.style.top=`${12+y.length*32}px`,s.style.right="16px",s.style.padding="6px 32px 6px 6px",s.style.zIndex="1",s.style.display="flex",s.style.flexDirection="row-reverse",s.style.justifyContent="space-between",s.style.alignItems="center",s.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",s.style.borderRadius="4px",s.style.fontSize="11pt",s.style.color="#FFFFFF",s.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';try{s.animate([{transform:"translateY(-30px)",opacity:0},{transform:"translateY(0px)",opacity:1}],{duration:700,easing:"ease-out"})}catch{d.warn("Animation not supported, div will be fixed.")}const l=document.createElement("p");if(l.id="loggedText",l.innerHTML=t,l.style.margin="0px",s.appendChild(l),g.appendChild(s),y.push(a),o)return;const c=700,E=3e3;setTimeout(()=>{try{s.animate([{transform:"translateY(0px)",opacity:1},{transform:"translateY(-30px)",opacity:0}],{duration:c,easing:"ease-in"})}catch{d.warn("Animation not supported, div will be fixed.")}},E),setTimeout(()=>{I(a)},E+c)};const m=function(e,t){e.addEventListener("touchstart",i=>{t()}),e.addEventListener("click",i=>{t()})}})(v=M.multiplayerComponents||(M.multiplayerComponents={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=multiplayercomponents.js.map
