window.Modernizr=function(e,t,n){function r(e){d.cssText=e}function i(e,t){return r(prefixes.join(e+";")+(t||""))}function s(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t,r){for(var i in e){var o=t[e[i]];if(o!==n)return r===!1?e[i]:s(o,"function")?o.bind(r||t):o}return!1}var a="2.6.2",f={},l=!0,c=t.documentElement,h="modernizr",p=t.createElement(h),d=p.style,v,m={}.toString,g={},y={},b={},w=[],E=w.slice,S,x={}.hasOwnProperty,T;!s(x,"undefined")&&!s(x.call,"undefined")?T=function(e,t){return x.call(e,t)}:T=function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var n=E.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var s=new i,o=t.apply(s,n.concat(E.call(arguments)));return Object(o)===o?o:s}return t.apply(e,n.concat(E.call(arguments)))};return r}),g.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},g.video=function(){var e=t.createElement("video"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(r){}return n},g.audio=function(){var e=t.createElement("audio"),n=!1;try{if(n=!!e.canPlayType)n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(r){}return n};for(var N in g)T(g,N)&&(S=N.toLowerCase(),f[S]=g[N](),w.push((f[S]?"":"no-")+S));return f.addTest=function(e,t){if(typeof e=="object")for(var r in e)T(e,r)&&f.addTest(r,e[r]);else{e=e.toLowerCase();if(f[e]!==n)return f;t=typeof t=="function"?t():t,typeof l!="undefined"&&l&&(c.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),p=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return typeof e=="string"?e.split(" "):e}function i(e){var t=v[e[p]];return t||(t={},d++,e[p]=d,v[d]=t),t}function s(e,n,r){n||(n=t);if(m)return n.createElement(e);r||(r=i(n));var s;return r.cache[e]?s=r.cache[e].cloneNode():c.test(e)?s=(r.cache[e]=r.createElem(e)).cloneNode():s=r.createElem(e),s.canHaveChildren&&!l.test(e)?r.frag.appendChild(s):s}function o(e,n){e||(e=t);if(m)return e.createDocumentFragment();n=n||i(e);var s=n.frag.cloneNode(),o=0,u=r(),a=u.length;for(;o<a;o++)s.createElement(u[o]);return s}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function a(e){e||(e=t);var r=i(e);return g.shivCSS&&!h&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),m||u(e,r),e}var f=e.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h,p="_html5shiv",d=0,v={},m;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,m=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){h=!0,m=!0}})();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:m,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:a,createElement:s,createDocumentFragment:o};e.html5=g,a(t)}(this,t),f._version=a,c.className=c.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+w.join(" "):""),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e}else{e(jQuery)}})(function(e){function o(t){var n=t||window.event,s=[].slice.call(arguments,1),o=0,u=0,a=0,f=0,l=0,c;t=e.event.fix(n);t.type="mousewheel";if(n.wheelDelta){o=n.wheelDelta}if(n.detail){o=n.detail*-1}if(n.deltaY){a=n.deltaY*-1;o=a}if(n.deltaX){u=n.deltaX;o=u*-1}if(n.wheelDeltaY!==undefined){a=n.wheelDeltaY}if(n.wheelDeltaX!==undefined){u=n.wheelDeltaX*-1}f=Math.abs(o);if(!r||f<r){r=f}l=Math.max(Math.abs(a),Math.abs(u));if(!i||l<i){i=l}c=o>0?"floor":"ceil";o=Math[c](o/r);u=Math[c](u/i);a=Math[c](a/i);s.unshift(t,o,u,a);return(e.event.dispatch||e.event.handle).apply(this,s)}var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"];var n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];var r,i;if(e.event.fixHooks){for(var s=t.length;s;){e.event.fixHooks[t[--s]]=e.event.mouseHooks}}e.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var e=n.length;e;){this.addEventListener(n[--e],o,false)}}else{this.onmousewheel=o}},teardown:function(){if(this.removeEventListener){for(var e=n.length;e;){this.removeEventListener(n[--e],o,false)}}else{this.onmousewheel=null}}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});(function(e){"use strict";e.fn.extend({LoaderAnimation:function(t){var n={lineWidth:20,color:"#ffffff",glowColor:"#00aeff",radius:40,font:"normal 14px Arial",onComplete:null},r=e(this),i=e.extend(n,t),s=this;var o=i.lineWidth,u=i.color,a=i.glowColor,f=i.radius,l=i.font;this.currentPercentage=0;var c=e(window),h=Math.PI,p=1.5*h,d=0,v=!!document.createElement("canvas").getContext,m=e(window).width(),g=e(window).height(),y,b,w;var E=function(){b.text((s.currentPercentage|0)+"%")};var S=function(){if(v)w.clearRect(0,0,m,g);return true};var x=function(){var e=2/100*s.currentPercentage,t=m/2,n=g/2;d=e*h+p;S();w.restore();w.beginPath();w.font=l;w.fillStyle=u;w.textAlign="center";w.textBaseline="middle";w.fillText((s.currentPercentage|0)+"%",t,n);w.lineWidth=o;w.strokeStyle=u;if(a){w.shadowOffsetX=0;w.shadowOffsetY=0;w.shadowBlur=20;w.shadowColor=a}w.arc(t,n,f,p,d,false);w.stroke();w.save()};var T=function(){if(s.currentPercentage===100){r.delay(1e3).fadeOut(function(){r.remove();if(typeof i.onComplete==="function")i.onComplete()});c.off("resize.preloader")}};var N=function(){m=e(window).width();g=e(window).height();if(v){y[0].width=m;y[0].height=g}r.width(m);r.height(g)};s.init=function(){if(v){y=e("<canvas style='background: url( \"http://static.bangordailynews.com/wp-content/themes/bdn/images/bdnmaine_110.png\" );background-repeat:no-repeat;background-attachment:fixed;background-position:50% 25%;'>");r.append(y);w=y[0].getContext("2d")}else{b=e("<i class='fallback'></i>");r.append(b)}N();c.on("resize.preloader",N)};s.update=function(t){e.Animation(s,{currentPercentage:t},{duration:3e3}).stop(true,false).progress(function(){if(v)x();else E()}).done(T)};this.init();return this}})})(jQuery);(function(e){"use strict";e.html5Loader=function(t){var n={filesToLoad:null,debugMode:false,onBeforeLoad:function(){},onComplete:function(){},onElementLoaded:function(e,t){},onUpdate:function(e){},onMediaError:function(e,t){}},r=e.extend(n,t);var i=r.filesToLoad,s=r.debugMode,o=r.onBeforeLoad,u=r.onComplete,a=r.onElementLoaded,f=r.onUpdate,l=r.onMediaError;var c=e(window),h=e("body"),p=0,d=0,v=[],m=navigator.userAgent.match(/iPad/i)!=null?true:false,g=function(e){if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))return true;else return false}(navigator.userAgent||navigator.vendor||window.opera),y={};var b=function(e){if(s&&console){console.log(e)}};y["video"]=function(){var e=document.createElement("video"),t=false;try{if(t=!!e.canPlayType){t=new Boolean(t);t.ogg=e.canPlayType('video/ogg; codecs="theora"');t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"');t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(n){}return t}();y["audio"]=function(){var e=document.createElement("audio"),t=false;try{if(t=!!e.canPlayType){t=new Boolean(t);t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"');t.mp3=e.canPlayType("audio/mpeg;");t.wav=e.canPlayType('audio/wav; codecs="1"');t.m4a=e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")}}catch(n){}return t}();var w=function(t){var n=t.type.toLowerCase(),r=t.sources;e.each(r,function(e){if(y[n][e]){t=t.sources[e];t.type=n.toUpperCase();return false}});if(t.source){return t}else{return false}};var E=function(){var e=0;b("_bytesTotal = "+d);b("_bytesLoaded = "+p);e=Math.round(p/d*100);b("Percentage: "+e+"%");f(e);if(!v.length){u()}};var S=function(e,t){var n=t;if(n.type==="VIDEO"||n.type==="AUDIO"){n=w(n)}if(n){d+=n.size;v.push(n)}};var x=function(t){b("json loaded");e(t.files).each(S)};var T=function(t){var n=new e.Deferred,r=t.size,i=e("<img>");e(i).on("load",function(e){b("File Loaded:"+t.source);p+=r;a(t,i[0]);i=null;v.splice(0,1);E();n.resolve()});i.attr("src",t.source);return n.promise()};var N=function(t){var n=new e.Deferred,r=t.size,i=t.type==="VIDEO"?e("<video></video>"):e("<audio></audio>"),s=function(){b("File Loaded:"+t.source);p+=r;a(t,i[0]);v.splice(0,1);i.off();i=null;E();n.resolve()};if(!g&&!m){i.on("loadstart",function(){if(this.networkState==3){l(t,this);s()}});i.on("error stalled",function(){l(t,this);s()});i.on("loadedmetadata",function(){i.on("progress",function(){var e=0;b("loading in progress file:"+t.source);if(this.buffered.length>0){e=r/this.duration*this.buffered.end(0);r-=e;p+=e;E()}})});i.on("canplaythrough load",s)}else{s()}i.attr({preload:"auto",src:t.source,controls:"controls"});return n.promise()};var C=function(t){var n=new e.Deferred,r=t.size;e.getScript(t.source,function(e){b("File Loaded:"+t.source);p+=r;a(t,e);v.splice(0,1);E();n.resolve()});return n.promise()};var k=function(t){var n=new e.Deferred;e.ajax({url:t.source,dataType:"text",success:function(e){b("File Loaded:"+t.source);a(t,e);p+=t.size;v.splice(0,1);E();n.resolve(e)}});return n.promise()};var L=function(){var t=v.slice();e.each(t,function(e,t){b("preloading files");b("file to preload:"+t.source);switch(t.type){case"IMAGE":T(t);break;case"VIDEO":case"AUDIO":N(t);break;case"SCRIPT":C(t);break;case"TEXT":k(t);break;default:return false}})};this.init=function(){b("plugin initialized");var t=new e.Deferred,n=t.promise();o();if(typeof i==="object"){e.proxy(x,this,i)();t.resolve(i)}else{e.getJSON(i,t.resolve);t.pipe(e.proxy(x,this))}n.then(e.proxy(E,this));n.then(e.proxy(L,this))};this.init();return this}})(jQuery)