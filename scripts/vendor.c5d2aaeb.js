!function(a){if("function"==typeof define&&define.amd){var b="[history"+(new Date).getTime()+"]",c=requirejs.onError;a.toString=function(){return b},requirejs.onError=function(a){-1===a.message.indexOf(b)&&c.call(requirejs,a)},define([],a)}return"object"!=typeof exports||"undefined"==typeof module?a():void(module.exports=a())}(function(){function a(){}function b(a,c,d){var e=/(?:(\w+\:))?(?:\/\/(?:[^@]*@)?([^\/:\?#]+)(?::([0-9]+))?)?([^\?#]*)(?:(\?[^#]+)|\?)?(?:(#.*))?/;if(null==a||""===a||c)a=c?a:y.href,(!D||d)&&(a=a.replace(/^[^#]*/,"")||"#",a=y.protocol.replace(/:.*$|$/,":")+"//"+y.host+O.basepath+a.replace(new RegExp("^#[/]?(?:"+O.type+")?"),""));else{var f=b(),g=u.getElementsByTagName("base")[0];!d&&g&&g.getAttribute("href")&&(g.href=g.href,f=b(g.href,null,!0));var h=f._pathname,i=f._protocol;a=""+a,a=/^(?:\w+\:)?\/\//.test(a)?0===a.indexOf("/")?i+a:a:i+"//"+f._host+(0===a.indexOf("/")?a:0===a.indexOf("?")?h+a:0===a.indexOf("#")?h+f._search+a:h.replace(/[^\/]+$/g,"")+a)}Q.href=a;var j=e.exec(Q.href),k=j[2]+(j[3]?":"+j[3]:""),l=j[4]||"/",m=j[5]||"",n="#"===j[6]?"":j[6]||"",o=l+m+n,p=l.replace(new RegExp("^"+O.basepath,"i"),O.type)+m;return{_href:j[1]+"//"+k+o,_protocol:j[1],_host:k,_hostname:j[2],_port:j[3]||"",_pathname:l,_search:m,_hash:n,_relative:o,_nohash:p,_special:p+n}}function c(){var a=s.navigator.userAgent;return-1===a.indexOf("Android 2.")&&-1===a.indexOf("Android 4.0")||-1===a.indexOf("Mobile Safari")||-1!==a.indexOf("Chrome")||-1!==a.indexOf("Windows Phone")?!!B:!1}function d(){var a;try{a=s.sessionStorage,a.setItem(P+"t","1"),a.removeItem(P+"t")}catch(b){a={getItem:function(a){var b=u.cookie.split(a+"=");return b.length>1&&b.pop().split(";").shift()||"null"},setItem:function(a){var b={};(b[y.href]=A.state)&&(u.cookie=a+"="+x.stringify(b))}}}try{W=x.parse(a.getItem(P))||{}}catch(b){W={}}L(H+"unload",function(){a.setItem(P,x.stringify(W))},!1)}function e(b,c,d,e){var f=0;d||(d={set:a},f=1);var g=!d.set,h=!d.get,i={configurable:!0,set:function(){g=1},get:function(){h=1}};try{F(b,c,i),b[c]=b[c],F(b,c,d)}catch(j){}if(!(g&&h||(b.__defineGetter__&&(b.__defineGetter__(c,i.get),b.__defineSetter__(c,i.set),b[c]=b[c],d.get&&b.__defineGetter__(c,d.get),d.set&&b.__defineSetter__(c,d.set)),g&&h))){if(f)return!1;if(b===s){try{var k=b[c];b[c]=null}catch(j){}if("execScript"in s)s.execScript("Public "+c,"VBScript"),s.execScript("var "+c+";","JavaScript");else try{F(b,c,{value:a})}catch(j){"onpopstate"===c&&(L("popstate",d=function(){M("popstate",d,!1);var a=b.onpopstate;b.onpopstate=null,setTimeout(function(){b.onpopstate=a},1)},!1),T=0)}b[c]=k}else try{try{var l=w.create(b);F(w.getPrototypeOf(l)===b?l:b,c,d);for(var m in b)"function"==typeof b[m]&&(l[m]=b[m].bind(b));try{e.call(l,l,b)}catch(j){}b=l}catch(j){F(b.constructor.prototype,c,d)}}catch(j){return!1}}return b}function f(a,b,c){return c=c||{},a=a===aa?y:a,c.set=c.set||function(c){a[b]=c},c.get=c.get||function(){return a[b]},c}function g(a,b,c){a in X?X[a].push(b):arguments.length>3?L(a,b,c,arguments[3]):L(a,b,c)}function h(a,b,c){var d=X[a];if(d){for(var e=d.length;e--;)if(d[e]===b){d.splice(e,1);break}}else M(a,b,c)}function i(b,c){var d=(""+("string"==typeof b?b:b.type)).replace(/^on/,""),f=X[d];if(f){if(c="string"==typeof b?c:b,null==c.target)for(var g=["target","currentTarget","srcElement","type"];b=g.pop();)c=e(c,b,{get:"type"===b?function(){return d}:function(){return s}});T&&(("popstate"===d?s.onpopstate:s.onhashchange)||a).call(s,c);for(var h=0,i=f.length;i>h;h++)f[h].call(s,c);return!0}return N(b,c)}function j(){var a=u.createEvent?u.createEvent("Event"):u.createEventObject();a.initEvent?a.initEvent("popstate",!1,!1):a.type="popstate",a.state=A.state,i(a)}function k(){U&&(U=!1,j())}function l(a,c,d,e){if(D)R=y.href;else{0===V&&(V=2);var f=b(c,2===V&&-1!==(""+c).indexOf("#"));f._relative!==b()._relative&&(R=e,d?y.replace("#"+f._special):y.hash=f._special)}!E&&a&&(W[y.href]=a),U=!1}function m(a){var c=R;if(R=y.href,c){S!==y.href&&j(),a=a||s.event;var d=b(c,!0),e=b();a.oldURL||(a.oldURL=d._href,a.newURL=e._href),d._hash!==e._hash&&i(a)}}function n(a){setTimeout(function(){L("popstate",function(a){S=y.href,E||(a=e(a,"state",{get:function(){return A.state}})),i(a)},!1)},0),!D&&a!==!0&&"location"in A&&(q(G.hash),k())}function o(a){for(;a;){if("A"===a.nodeName)return a;a=a.parentNode}}function p(a){var c=a||s.event,d=o(c.target||c.srcElement),e="defaultPrevented"in c?c.defaultPrevented:c.returnValue===!1;if(d&&"A"===d.nodeName&&!e){var f=b(),g=b(d.getAttribute("href",2)),h=f._href.split("#").shift()===g._href.split("#").shift();h&&g._hash&&(f._hash!==g._hash&&(G.hash=g._hash),q(g._hash),c.preventDefault?c.preventDefault():c.returnValue=!1)}}function q(a){var b=u.getElementById(a=(a||"").replace(/^#/,""));if(b&&b.id===a&&"A"===b.nodeName){var c=b.getBoundingClientRect();s.scrollTo(v.scrollLeft||0,c.top+(v.scrollTop||0)-(v.clientTop||0))}}function r(){var a=u.getElementsByTagName("script"),c=(a[a.length-1]||{}).src||"",g=-1!==c.indexOf("?")?c.split("?").pop():"";g.replace(/(\w+)(?:=([^&]*))?/g,function(a,b,c){O[b]=(c||"").replace(/^(0|false)$/,"")}),L(H+"hashchange",m,!1);var h=[aa,G,Z,s,_,A];E&&delete _.state;for(var i=0;i<h.length;i+=2)for(var j in h[i])if(h[i].hasOwnProperty(j))if("object"!=typeof h[i][j])h[i+1][j]=h[i][j];else{var k=f(h[i],j,h[i][j]);if(!e(h[i+1],j,k,function(a,b){b===A&&(s.history=A=h[i+1]=a)}))return M(H+"hashchange",m,!1),!1;h[i+1]===s&&(X[j]=X[j.substr(2)]=[])}return A.setup(),O.redirect&&A.redirect(),O.init&&(V=1),!E&&x&&d(),D||u[I](H+"click",p,!1),"complete"===u.readyState?n(!0):(D||b()._relative===O.basepath||(U=!0),L(H+"load",n,!1)),!0}var s=("object"==typeof window?window:this)||{};if(!s.history||"emulate"in s.history)return s.history;var t,u=s.document,v=u.documentElement,w=s.Object,x=s.JSON,y=s.location,z=s.history,A=z,B=z.pushState,C=z.replaceState,D=c(),E="state"in z,F=w.defineProperty,G=e({},"t")?{}:u.createElement("a"),H="",I=s.addEventListener?"addEventListener":(H="on")&&"attachEvent",J=s.removeEventListener?"removeEventListener":"detachEvent",K=s.dispatchEvent?"dispatchEvent":"fireEvent",L=s[I],M=s[J],N=s[K],O={basepath:"/",redirect:0,type:"/",init:0},P="__historyAPI__",Q=u.createElement("a"),R=y.href,S="",T=1,U=!1,V=0,W={},X={},Y=u.title,Z={onhashchange:null,onpopstate:null},$=function(a,b){var c=s.history!==z;c&&(s.history=z),a.apply(z,b),c&&(s.history=A)},_={setup:function(a,b,c){O.basepath=(""+(null==a?O.basepath:a)).replace(/(?:^|\/)[^\/]*$/,"/"),O.type=null==b?O.type:b,O.redirect=null==c?O.redirect:!!c},redirect:function(a,c){if(A.setup(c,a),c=O.basepath,s.top==s.self){var d=b(null,!1,!0)._relative,e=y.pathname+y.search;D?(e=e.replace(/([^\/])$/,"$1/"),d!=c&&new RegExp("^"+c+"$","i").test(e)&&y.replace(d)):e!=c&&(e=e.replace(/([^\/])\?/,"$1/?"),new RegExp("^"+c,"i").test(e)&&y.replace(c+"#"+e.replace(new RegExp("^"+c,"i"),O.type)+y.hash))}},pushState:function(a,b,c){var d=u.title;null!=Y&&(u.title=Y),B&&$(B,arguments),l(a,c),u.title=d,Y=b},replaceState:function(a,b,c){var d=u.title;null!=Y&&(u.title=Y),delete W[y.href],C&&$(C,arguments),l(a,c,!0),u.title=d,Y=b},location:{set:function(a){0===V&&(V=1),s.location=a},get:function(){return 0===V&&(V=1),G}},state:{get:function(){return"object"==typeof W[y.href]?x.parse(x.stringify(W[y.href])):"undefined"!=typeof W[y.href]?W[y.href]:null}}},aa={assign:function(a){D||0!==(""+a).indexOf("#")?y.assign(a):l(null,a)},reload:function(a){y.reload(a)},replace:function(a){D||0!==(""+a).indexOf("#")?y.replace(a):l(null,a,!0)},toString:function(){return this.href},origin:{get:function(){return void 0!==t?t:y.origin?y.origin:y.protocol+"//"+y.hostname+(y.port?":"+y.port:"")},set:function(a){t=a}},href:D?null:{get:function(){return b()._href}},protocol:null,host:null,hostname:null,port:null,pathname:D?null:{get:function(){return b()._pathname}},search:D?null:{get:function(){return b()._search}},hash:D?null:{set:function(a){l(null,(""+a).replace(/^(#|)/,"#"),!1,R)},get:function(){return b()._hash}}};return r()?(A.emulate=!D,s[I]=g,s[J]=h,s[K]=i,A):void 0}),function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);