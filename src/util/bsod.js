// credit goes to https://github.com/tholman/bsod.js

const wipeDomAndHead = () => {
  document.body.innerHTML = '';
  document.getElementsByTagName("head")[0].innerHTML = "";
  document.title = "Uh oh";
}

const applyProperties = (target, properties) => {
  for( let key in properties ) {
    target.style[ key ] = properties[ key ];
  }
}

const getBrowser = () => {
  const ua = navigator.userAgent;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  let tem = null;

  if(/trident/i.test(M[1])){
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE '+(tem[1] || '');
  }

  if(M[1]=== 'Chrome'){
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if(tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }

  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);

  return M[0];
}

const showBSOD = () => {
  wipeDomAndHead();
  const body = document.body;
  const bgStyles = {
    'font-family': "'Lucida Console', 'Lucida Sans Typewriter', monaco, 'Bitstream Vera Sans Mono', monospace",
    'background': '#0000AA',
    'position': 'fixed',
    'top': '0px',
    'left': '0px',
    'width': '100%',
    'height': '100%',
    'color': '#fff'
  }

  const bsodContainer = document.createElement('div');
  applyProperties( bsodContainer, bgStyles );

  const errorStyles = {
    'position': 'absolute',
    'left': '50%',
    'top': '50%',
    'font-size': '14px',
    'max-width': '420px',
    'transform': 'translateX(-50%) translateY(-50%)',
    'mozTransform': 'translateX(-50%) translateY(-50%)',
    'webkitTransform': 'translateX(-50%) translateY(-50%)',
  }

  const error = document.createElement('div');
  applyProperties( error, errorStyles );
  bsodContainer.appendChild( error );

  const headerStyles = {
    'text-align': 'center',
    'margin-bottom': '10px'
  }

  const header = document.createElement('div');
  applyProperties( header, headerStyles );
  error.appendChild( header );

  const headerContentStyles = {
    'background': 'rgba(255, 255, 255, 0.7)',
    'color': '#0000AA',
    'margin': 'auto'
  }

  const headerContent = document.createElement('span');
  applyProperties( headerContent, headerContentStyles );
  headerContent.innerHTML = `${getBrowser()}: FATAL ERROR`;
  header.appendChild( headerContent );

  const mainContent = document.createElement('div');
  mainContent.innerHTML = "What?! Why did you click that? Look what you've done! How am I even supposed to fix this? Sigh. I guess...you could try turning it off and on again? Otherwise, beats me.";
  error.appendChild(mainContent);
  body.appendChild(bsodContainer);
}

export default showBSOD;