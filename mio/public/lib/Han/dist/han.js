!function(e,n){"object"==typeof module&&"object"==typeof module.exports?module.exports=n(e,!0):"function"==typeof define&&define.amd?define(function(){return n(e,!0)}):n(e)}("undefined"!=typeof window?window:this,function(e,n){"use strict";function t(e){return"function"==typeof e||e instanceof Element?e:void 0}function i(e){var n=0===e.index&&e.isEnd?"biaodian cjk":"biaodian cjk portion "+(0===e.index?"is-first":e.isEnd?"is-end":"is-inner"),t=U.create("h-char-group",n);return t.innerHTML=e.text,t}function r(e){var n=U.create("div"),t=e.charCodeAt(0).toString(16);return n.innerHTML='<h-char unicode="'+t+'" class="biaodian cjk '+a(e)+'">'+e+"</h-char>",n.firstChild}function a(e){return e.match(q.char.biaodian.open)?"bd-open":e.match(q.char.biaodian.close)?"bd-close bd-end":e.match(q.char.biaodian.end)?/(?:\u3001|\u3002|\uff0c)/i.test(e)?"bd-end bd-cop":"bd-end":e.match(new RegExp(F.biaodian.liga))?"bd-liga":e.match(new RegExp(F.biaodian.middle))?"bd-middle":""}function o(e,n){var t,i=U.create("canvas");return i.width="50",i.height="20",i.style.display="none",P.appendChild(i),t=i.getContext("2d"),t.textBaseline="top",t.font="15px "+n+", sans-serif",t.fillStyle="black",t.strokeStyle="black",t.fillText(e,0,0),{node:i,context:t,remove:function(){U.remove(i,P)}}}function c(e,n){var t,i=e.context,r=n.context;try{for(var a=1;a<=20;a++)for(var o=1;o<=50;o++){if(void 0===t&&i.getImageData(o,a,1,1).data[3]!==r.getImageData(o,a,1,1).data[3]){t=!1;break}if("boolean"==typeof t)break;50===o&&20===a&&void 0===t&&(t=!0)}return e.remove(),n.remove(),e=null,n=null,t}catch(e){}return!1}function s(e,n,t){var e=e,n=n||"sans-serif",t=t||"辭Q";return n=o(t,n),e=o(t,e),!c(e,n)}function d(e){var n,t=U.create("!"),i=e.classList;return t.appendChild(U.clone(e)),U.tag("rt",t.firstChild).forEach(function(e){var t,r=U.create("!"),a=[];do{if(!(t=(t||e).previousSibling)||t.nodeName.match(/((?:h\-)?r[ubt])/i))break;r.insertBefore(U.clone(t),r.firstChild),a.push(t)}while(!t.nodeName.match(/((?:h\-)?r[ubt])/i));n=i.contains("zhuyin")?g(r,e):f(r,e);try{e.parentNode.replaceChild(n,e),a.map(U.remove)}catch(e){}}),h(t)}function u(e){var n=U.create("!");return n.appendChild(U.clone(e)),U.tag("rt",n.firstChild).forEach(function(e){var n,t,i=U.create("!"),r=[];do{if(!(n=(n||e).previousSibling)||n.nodeName.match(/((?:h\-)?r[ubt])/i))break;i.insertBefore(U.clone(n),i.firstChild),r.push(n)}while(!n.nodeName.match(/((?:h\-)?r[ubt])/i));t=U.create("rt"),t.innerHTML=b(e),e.parentNode.replaceChild(t,e)}),n.firstChild}function l(e){var n,t,i,r,a=U.create("!"),o=e.classList;return a.appendChild(U.clone(e)),n=a.firstChild,t=i=U.tag("rb",n),r=t.length,function(e){e&&(i=U.tag("rt",e).map(function(e,n){if(t[n]){var i=g(t[n],e);try{t[n].parentNode.replaceChild(i,t[n])}catch(e){}return i}}),U.remove(e),n.setAttribute("rightangle","true"))}(n.querySelector("rtc.zhuyin")),U.qsa("rtc:not(.zhuyin)",n).forEach(function(e,t){var a;a=U.tag("rt",e).map(function(e,n){var a,c,s=Number(e.getAttribute("rbspan")||1),d=0,u=[];s>r&&(s=r);do{try{a=i.shift(),u.push(a)}catch(e){}if(void 0===a)break;d+=Number(a.getAttribute("span")||1)}while(s>d);if(s<d){if(u.length>1)return void console.error("An impossible `rbspan` value detected.",ruby);u=U.tag("rb",u[0]),i=u.slice(s).concat(i),u=u.slice(0,s),d=s}c=f(u,e,{class:o,span:d,order:t});try{u[0].parentNode.replaceChild(c,u.shift()),u.map(U.remove)}catch(e){}return c}),i=a,1===t&&n.setAttribute("doubleline","true"),U.remove(e)}),h(a)}function h(e){var n=e.firstChild,t=U.create("h-ruby");return t.innerHTML=n.innerHTML,U.setAttr(t,n.attributes),t.normalize(),t}function p(e){if(!e instanceof Element)return e;var n=e.classList;return n.contains("pinyin")?n.add("romanization"):n.contains("romanization")?n.add("annotation"):n.contains("mps")?n.add("zhuyin"):n.contains("rightangle")&&n.add("complex"),e}function f(e,n,t){var i=U.create("h-ru"),n=U.clone(n),t=t||{};return t.annotation="true",Array.isArray(e)?i.innerHTML=e.map(function(e){return void 0===e?"":e.outerHTML}).join("")+n.outerHTML:(i.appendChild(U.clone(e)),i.appendChild(n)),U.setAttr(i,t),i}function g(e,n){var e=U.clone(e),t=U.create("h-ru");return t.setAttribute("zhuyin",!0),t.appendChild(e),t.innerHTML+=b(n),t}function b(e){var n,t,i,r="string"==typeof e?e:e.textContent;return n=r.replace(q.zhuyin.diao,""),i=n?n.length:0,t=r.replace(n,"").replace(/[\u02C5]/g,"ˇ").replace(/[\u030D]/g,"͘"),0===i?"":'<h-zhuyin length="'+i+'" diao="'+t+'"><h-yin>'+n+"</h-yin><h-diao>"+t+"</h-diao></h-zhuyin>"}function v(e,n){return e&&n&&e.parentNode===n.parentNode}function m(e,n){var t=e,n=n||"";if(U.isElmt(e.nextSibling)||v(e,e.nextSibling))return n+Z;for(;!t.nextSibling;)t=t.parentNode;return e!==t&&t.insertAdjacentHTML("afterEnd","<h-hws hidden> </h-hws>"),n}function y(e,n){return e.isEnd&&0===e.index?n[1]+Z+n[2]:0===e.index?m(e.node,e.text):e.text}function x(e){return 0===e.index?U.clone($):""}function E(e){var n=e.node.parentNode;return 0===e.index&&(J=e.endIndexInNode-2),"h-hws"!==n.nodeName.toLowerCase()||1!==e.index&&e.indexInMatch!==J||n.classList.add("quote-inner"),e.text}function w(e){var n=e.node.parentNode;return"h-hws"===n.nodeName.toLowerCase()&&n.classList.add("quote-outer"),e.text}function N(){var e,n=U.create("div");return n.innerHTML="<span>a b</span><span style=\"font-family: 'Han Space'\">a b</span>",P.appendChild(n),e=n.firstChild.offsetWidth!==n.lastChild.offsetWidth,U.remove(n),e}function C(e){var n=e.nextSibling;n&&Q(n,"h-cs.jinze-outer")?n.classList.add("hangable-outer"):e.insertAdjacentHTML("afterend",K)}function T(e){return e.replace(/(biaodian|cjk|bd-jiya|bd-consecutive|bd-hangable)/gi,"").trim()}function S(e){var n,t=e.text,i=e.node.parentNode,r=U.parent(i,"h-char.biaodian"),a=B.createBDChar(t);return a.innerHTML="<h-inner>"+t+"</h-inner>",a.classList.add(ne),(n=U.parent(i,"h-jinze"))&&k(n),r?function(){return r.classList.add(ne),Q(i,"h-inner, h-inner *")?t:a.firstChild}():a}function L(e){var n,t=X,i=e.node.parentNode,r=U.parent(i,"h-char.biaodian"),a=U.parent(r,"h-jinze");return n=r.classList,t&&r.setAttribute("prev",t),ee&&n.contains("bd-open")&&ee.pop().setAttribute("next","bd-open"),ee=void 0,e.isEnd?(X=void 0,n.add(te,"end-portion")):(X=T(r.getAttribute("class")),n.add(te)),a&&(ee=z(a,{prev:t,class:T(r.getAttribute("class"))})),e.text}function k(e){Q(e,".tou, .touwei")&&!Q(e.previousSibling,"h-cs.jiya-outer")&&e.insertAdjacentHTML("beforebegin",ie),Q(e,".wei, .touwei")&&!Q(e.nextSibling,"h-cs.jiya-outer")&&e.insertAdjacentHTML("afterend",ie)}function z(e,n){var t,i;return Q(e,".tou, .touwei")&&(t=e.previousSibling,Q(t,"h-cs")&&(t.className="jinze-outer jiya-outer",t.setAttribute("prev",n.prev))),Q(e,".wei, .touwei")&&(i=e.nextSibling,Q(i,"h-cs")&&(i.className="jinze-outer jiya-outer "+n.class,i.removeAttribute("prev"))),[t,i]}function I(e,n,t){return function(){var i=B.localize.writeOnCanvas(n,e),r=B.localize.writeOnCanvas(t,e);return B.localize.compareCanvases(i,r)}}function M(){return I('"Romanization Sans"',"i̍","󰁩")}function R(e){return function(n){var n=n||j,t=B.find(n).avoid(re);return e.forEach(function(e){t.replace(new RegExp(e[0],"ig"),function(n,t){var i=U.clone(ae);return i.innerHTML="<h-inner>"+t[0]+"</h-inner>",i.setAttribute("display-as",e[1]),0===n.index?i:""})}),t}}var j=e.document,A=j.documentElement,P=j.body,H="3.3.0",O=["initCond","renderElem","renderJiya","renderHanging","correctBiaodian","renderHWS","substCombLigaWithPUA"],B=function(e,n){return new B.fn.init(e,n)},D=function(){return arguments[0]&&(this.context=arguments[0]),arguments[1]&&(this.condition=arguments[1]),this};B.version=H,B.fn=B.prototype={version:H,constructor:B,context:P,condition:A,routine:O,init:D,setRoutine:function(e){return Array.isArray(e)&&(this.routine=e),this},render:function(e){var n=this,e=Array.isArray(e)?e:this.routine;return e.forEach(function(e){"string"==typeof e&&"function"==typeof n[e]?n[e]():Array.isArray(e)&&"function"==typeof n[e[0]]&&n[e.shift()].apply(n,e)}),this}},B.fn.init.prototype=B.fn,B.init=function(){return B.init=B().render()};var F={punct:{base:"[…,.;:!?‽_]",sing:"[‐-—…]",middle:"[\\/~\\-&‐-—_]",open:"['\"‘“\\(\\[¡¿⸘«‹‚“„]",close:"['\"”’\\)\\]»›‛”‟]",end:"['\"”’\\)\\]»›‛”‟‼‽⁇-⁉,.;:!?]"},biaodian:{base:"[︰．、，。：；？！ー]",liga:"[—…⋯]",middle:"[·＼／－゠＆・＿]",open:"[「『《〈（〔［｛【〖]",close:"[」』》〉）〕］｝】〗]",end:"[」』》〉）〕］｝】〗︰．、，。：；？！ー]"},hanzi:{base:"[一-鿿㐀-䶵㇀-㇣〇﨎﨏﨑﨓﨔﨟﨡﨣﨤﨧-﨩]|[�-�][�-�]",desc:"[⿰-⿺]",radical:"[⼀-⿕⺀-⻳]"},latin:{base:"[A-Za-z0-9À-ÿĀ-ſƀ-ɏⱠ-Ɀ꜠-ꟿḀ-ỿ]",combine:"[̀-́᷀-᷿]"},ellinika:{base:"[0-9Ͱ-Ͽἀ-῿]",combine:"[̀-᷀ͅ-᷿]"},kirillica:{base:"[0-9Ѐ-҂Ҋ-ӿԀ-ԯꙀ-ꙮ꙾-ꚗ]",combine:"[҃-҉ⷠ-ⷿ꙯-꙽ꚟ]"},kana:{base:"[アイウエオ-ヺあいうえお-ゔゟヿ]|�[�-�]",small:"[ぁぃぅぇぉァィゥェォっゃゅょゎゕゖッャュョヮヵヶㇰ-ㇿ]",combine:"[゙-゜]",half:"[ｦ-ﾟ]",mark:"[゠ゝゞ・-ヾ]"},eonmun:{base:"[가-힣]",letter:"[ᄀ-ᇿㅏ-ㅣㄱ-ㆎꥠ-ꥼힰ-ퟻ]",half:"[ﾡ-ￜ]"},zhuyin:{base:"[ㄅ-ㄭㆠ-ㆺ]",initial:"[ㄅ-ㄙㄪ-ㄬㆠ-ㆣ]",medial:"[ㄧ-ㄩ]",final:"[ㄚ-ㄩㄭㆤ-ㆳㆸ-ㆺ]",tone:"[˙ˊ˅ˇˋ˪˫]",checked:"[ㆴ-ㆷ][̍͘]?"}},q=function(){var e="[\\x20\\t\\r\\n\\f]",n=F.punct.open,t=(F.punct.close,F.punct.end),i=F.punct.middle,r=F.punct.sing,a=n+"|"+t+"|"+i,o=F.biaodian.open,c=F.biaodian.close,s=F.biaodian.end,d=F.biaodian.middle,u=F.biaodian.liga+"{2}",l=o+"|"+s+"|"+d,h=F.kana.base+F.kana.combine+"?",p=F.kana.small+F.kana.combine+"?",f=F.kana.half,g=F.eonmun.base+"|"+F.eonmun.letter,b=F.eonmun.half,v=F.hanzi.base+"|"+F.hanzi.desc+"|"+F.hanzi.radical+"|"+h,m=F.ellinika.combine,y=F.latin.base+m+"*",x=F.ellinika.base+m+"*",E=F.kirillica.combine,w=F.kirillica.base+E+"*",N=y+"|"+x+"|"+w,C=v+"|(?:"+N+"|['’])+",T=F.zhuyin.initial,S=F.zhuyin.medial,L=F.zhuyin.final,k=F.zhuyin.tone+"|"+F.zhuyin.checked;return{char:{punct:{all:new RegExp("("+a+")","g"),open:new RegExp("("+n+")","g"),end:new RegExp("("+t+")","g"),sing:new RegExp("("+r+")","g")},biaodian:{all:new RegExp("("+l+")","g"),open:new RegExp("("+o+")","g"),close:new RegExp("("+c+")","g"),end:new RegExp("("+s+")","g"),liga:new RegExp("("+u+")","g")},hanzi:new RegExp("("+v+")","g"),latin:new RegExp("("+y+")","ig"),ellinika:new RegExp("("+x+")","ig"),kirillica:new RegExp("("+w+")","ig"),kana:new RegExp("("+h+"|"+p+"|"+f+")","g"),eonmun:new RegExp("("+g+"|"+b+")","g")},group:{biaodian:[new RegExp("(("+l+"){2,})","g"),new RegExp("("+u+o+")","g")],punct:null,hanzi:new RegExp("("+v+")+","g"),western:new RegExp("("+y+"|"+x+"|"+w+"|"+a+")+","ig"),kana:new RegExp("("+h+"|"+p+"|"+f+")+","g"),eonmun:new RegExp("("+g+"|"+b+"|"+a+")+","g")},jinze:{hanging:new RegExp(e+"*([、，。．])(?!"+s+")","ig"),touwei:new RegExp("("+o+"+)("+C+")("+s+"+)","ig"),tou:new RegExp("("+o+"+)("+C+")","ig"),wei:new RegExp("("+C+")("+s+"+)","ig"),middle:new RegExp("("+C+")("+d+")("+C+")","ig")},zhuyin:{form:new RegExp("^˙?("+T+")?("+S+")?("+L+")?("+k+")?$"),diao:new RegExp("("+k+")","g")},hws:{base:[new RegExp("("+v+")("+N+"|"+n+")","ig"),new RegExp("("+N+"|"+t+")("+v+")","ig")],strict:[new RegExp("("+v+")"+e+"?("+N+"|"+n+")","ig"),new RegExp("("+N+"|"+t+")"+e+"?("+v+")","ig")]},"display-as":{"ja-font-for-hant":["查 査","啟 啓","鄉 鄕","值 値","污 汚"],"comb-liga-pua":[["a[̍͘]","󰁡"],["e[̍͘]","󰁥"],["i[̍͘]","󰁩"],["o[̍͘]","󰁯"],["u[̍͘]","󰁵"],["ㆴ[̍͘]","󳆴"],["ㆵ[̍͘]","󳆵"],["ㆶ[̍͘]","󳆶"],["ㆷ[̍͘]","󳆷"]],"comb-liga-vowel":[["a[̍͘]","󰁡"],["e[̍͘]","󰁥"],["i[̍͘]","󰁩"],["o[̍͘]","󰁯"],["u[̍͘]","󰁵"]],"comb-liga-zhuyin":[["ㆴ[̍͘]","󳆴"],["ㆵ[̍͘]","󳆵"],["ㆶ[̍͘]","󳆶"],["ㆷ[̍͘]","󳆷"]]},"inaccurate-char":[["[•‧]","·"],["⋯⋯","……"],["──","——"],["‵","‘"],["′","’"],["‶","“"],["″","”"]]}}();B.UNICODE=F,B.TYPESET=q,B.UNICODE.cjk=B.UNICODE.hanzi,B.UNICODE.greek=B.UNICODE.ellinika,B.UNICODE.cyrillic=B.UNICODE.kirillica,B.UNICODE.hangul=B.UNICODE.eonmun,B.UNICODE.zhuyin.ruyun=B.UNICODE.zhuyin.checked,B.TYPESET.char.cjk=B.TYPESET.char.hanzi,B.TYPESET.char.greek=B.TYPESET.char.ellinika,B.TYPESET.char.cyrillic=B.TYPESET.char.kirillica,B.TYPESET.char.hangul=B.TYPESET.char.eonmun,B.TYPESET.group.hangul=B.TYPESET.group.eonmun,B.TYPESET.group.cjk=B.TYPESET.group.hanzi;var U={id:function(e,n){return(n||j).getElementById(e)},tag:function(e,n){return this.makeArray((n||j).getElementsByTagName(e))},qs:function(e,n){return(n||j).querySelector(e)},qsa:function(e,n){return this.makeArray((n||j).querySelectorAll(e))},parent:function(e,n){return n?function(){if("function"==typeof U.matches){for(;!U.matches(e,n);){if(!e||e===j.documentElement){e=void 0;break}e=e.parentNode}return e}}():e?e.parentNode:void 0},create:function(e,n){var t="!"===e?j.createDocumentFragment():""===e?j.createTextNode(n||""):j.createElement(e);try{n&&(t.className=n)}catch(e){}return t},clone:function(e,n){return e.cloneNode("boolean"!=typeof n||n)},remove:function(e){return e.parentNode.removeChild(e)},setAttr:function(e,n){if("object"==typeof n){var t=n.length;if("object"==typeof n[0]&&"name"in n[0])for(var i=0;i<t;i++)void 0!==n[i].value&&e.setAttribute(n[i].name,n[i].value);else for(var r in n)n.hasOwnProperty(r)&&void 0!==n[r]&&e.setAttribute(r,n[r]);return e}},isElmt:function(e){return e&&e.nodeType===Node.ELEMENT_NODE},isIgnorable:function(e){return!!e&&("WBR"===e.nodeName||e.nodeType===Node.COMMENT_NODE)},makeArray:function(e){return Array.prototype.slice.call(e)},extend:function(e,n){if(("object"==typeof e||"function"==typeof e)&&"object"==typeof n)for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}},_=function(n){function t(e,n,t){var i=Element.prototype,r=i.matches||i.mozMatchesSelector||i.msMatchesSelector||i.webkitMatchesSelector;return e instanceof Element?r.call(e,n):!(!t||!/^[39]$/.test(e.nodeType))}var i="0.2.1",r=n.NON_INLINE_PROSE,a=n.PRESETS.prose.filterElements,o=e||{},c=o.document||void 0;if(void 0===c)throw new Error("Fibre requires a DOM-supported environment.");var s=function(e,n){return new s.fn.init(e,n)};return s.version=i,s.matches=t,s.fn=s.prototype={constructor:s,version:i,finder:[],context:void 0,portionMode:"retain",selector:{},preset:"prose",init:function(e,n){if(n&&(this.preset=null),this.selector={context:null,filter:[],avoid:[],boundary:[]},!e)throw new Error("A context is required for Fibre to initialise.");return e instanceof Node?e instanceof Document?this.context=e.body||e:this.context=e:"string"==typeof e&&(this.context=c.querySelector(e),this.selector.context=e),this},filterFn:function(e){var n=this.selector.filter.join(", ")||"*",i=this.selector.avoid.join(", ")||null,r=t(e,n,!0)&&!t(e,i);return"prose"===this.preset?a(e)&&r:r},boundaryFn:function(e){var n=this.selector.boundary.join(", ")||null,i=t(e,n);return"prose"===this.preset?r(e)||i:i},filter:function(e){return"string"==typeof e&&this.selector.filter.push(e),this},endFilter:function(e){return e?this.selector.filter=[]:this.selector.filter.pop(),this},avoid:function(e){return"string"==typeof e&&this.selector.avoid.push(e),this},endAvoid:function(e){return e?this.selector.avoid=[]:this.selector.avoid.pop(),this},addBoundary:function(e){return"string"==typeof e&&this.selector.boundary.push(e),this},removeBoundary:function(){return this.selector.boundary=[],this},setMode:function(e){return this.portionMode="first"===e?"first":"retain",this},replace:function(e,t){var i=this;return i.finder.push(n(i.context,{find:e,replace:t,filterElements:function(e){return i.filterFn(e)},forceContext:function(e){return i.boundaryFn(e)},portionMode:i.portionMode})),i},wrap:function(e,t){var i=this;return i.finder.push(n(i.context,{find:e,wrap:t,filterElements:function(e){return i.filterFn(e)},forceContext:function(e){return i.boundaryFn(e)},portionMode:i.portionMode})),i},revert:function(e){var n=this.finder.length,e=Number(e)||(0===e?Number(0):"all"===e?n:1);if(void 0===n||0===n)return this;e>n&&(e=n);for(var t=e;t>0;t--)this.finder.pop().revert();return this}},s.fn.filterOut=s.fn.avoid,s.fn.init.prototype=s.fn,s}(function(){function e(e){return String(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function n(){return t.apply(null,arguments)||i.apply(null,arguments)}function t(e,t,r,a,o){if(t&&!t.nodeType&&arguments.length<=2)return!1;var c="function"==typeof r;c&&(r=function(e){return function(n,t){return e(n.text,t.startIndex)}}(r));var s=i(t,{find:e,wrap:c?null:r,replace:c?r:"$"+(a||"&"),prepMatch:function(e,n){if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";if(a>0){var t=e[a];e.index+=e[0].indexOf(t),e[0]=t}return e.endIndex=e.index+e[0].length,e.startIndex=e.index,e.index=n,e},filterElements:o});return n.revert=function(){return s.revert()},!0}function i(e,n){return new r(e,n)}function r(e,t){var i=t.preset&&n.PRESETS[t.preset];if(t.portionMode=t.portionMode||a,i)for(var r in i)d.call(i,r)&&!d.call(t,r)&&(t[r]=i[r]);this.node=e,this.options=t,this.prepMatch=t.prepMatch||this.prepMatch,this.reverts=[],this.matches=this.search(),this.matches.length&&this.processMatches()}var a="retain",o="first",c=j,s={}.toString,d={}.hasOwnProperty;return n.NON_PROSE_ELEMENTS={br:1,hr:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1},n.NON_CONTIGUOUS_PROSE_ELEMENTS={address:1,article:1,aside:1,blockquote:1,dd:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,nav:1,noscript:1,ol:1,output:1,p:1,pre:1,section:1,ul:1,br:1,li:1,summary:1,dt:1,details:1,rp:1,rt:1,rtc:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1,table:1,tbody:1,thead:1,th:1,tr:1,td:1,caption:1,col:1,tfoot:1,colgroup:1},n.NON_INLINE_PROSE=function(e){return d.call(n.NON_CONTIGUOUS_PROSE_ELEMENTS,e.nodeName.toLowerCase())},n.PRESETS={prose:{forceContext:n.NON_INLINE_PROSE,filterElements:function(e){return!d.call(n.NON_PROSE_ELEMENTS,e.nodeName.toLowerCase())}}},n.Finder=r,r.prototype={search:function(){function n(e){for(var o=0,d=e.length;o<d;++o){var u=e[o];if("string"==typeof u){if(a.global)for(;t=a.exec(u);)c.push(s.prepMatch(t,i++,r));else(t=u.match(a))&&c.push(s.prepMatch(t,0,r));r+=u.length}else n(u)}}var t,i=0,r=0,a=this.options.find,o=this.getAggregateText(),c=[],s=this;return a="string"==typeof a?RegExp(e(a),"g"):a,n(o),c},prepMatch:function(e,n,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return e.endIndex=t+e.index+e[0].length,e.startIndex=t+e.index,e.index=n,e},getAggregateText:function(){function e(i,r){if(3===i.nodeType)return[i.data];if(n&&!n(i))return[];var r=[""],a=0;if(i=i.firstChild)do{if(3!==i.nodeType){var o=e(i);t&&1===i.nodeType&&(!0===t||t(i))?(r[++a]=o,r[++a]=""):("string"==typeof o[0]&&(r[a]+=o.shift()),o.length&&(r[++a]=o,r[++a]=""))}else r[a]+=i.data}while(i=i.nextSibling);return r}var n=this.options.filterElements,t=this.options.forceContext;return e(this.node)},processMatches:function(){var e,n,t,i=this.matches,r=this.node,a=this.options.filterElements,o=[],c=r,s=i.shift(),d=0,u=0,l=0,h=[r];e:for(;;){if(3===c.nodeType&&(!n&&c.length+d>=s.endIndex?n={node:c,index:l++,text:c.data.substring(s.startIndex-d,s.endIndex-d),indexInMatch:d-s.startIndex,indexInNode:s.startIndex-d,endIndexInNode:s.endIndex-d,isEnd:!0}:e&&o.push({node:c,index:l++,text:c.data,indexInMatch:d-s.startIndex,indexInNode:0}),!e&&c.length+d>s.startIndex&&(e={node:c,index:l++,indexInMatch:0,indexInNode:s.startIndex-d,endIndexInNode:s.endIndex-d,text:c.data.substring(s.startIndex-d,s.endIndex-d)}),d+=c.data.length),t=1===c.nodeType&&a&&!a(c),e&&n){if(c=this.replaceMatch(s,e,o,n),d-=n.node.data.length-n.endIndexInNode,e=null,n=null,o=[],s=i.shift(),l=0,u++,!s)break}else if(!t&&(c.firstChild||c.nextSibling)){c.firstChild?(h.push(c),c=c.firstChild):c=c.nextSibling;continue}for(;;){if(c.nextSibling){c=c.nextSibling;break}if((c=h.pop())===r)break e}}},revert:function(){for(var e=this.reverts.length;e--;)this.reverts[e]();this.reverts=[]},prepareReplacementString:function(e,n,t,i){var r=this.options.portionMode;return r===o&&n.indexInMatch>0?"":(e=e.replace(/\$(\d+|&|`|')/g,function(e,n){var i;switch(n){case"&":i=t[0];break;case"`":i=t.input.substring(0,t.startIndex);break;case"'":i=t.input.substring(t.endIndex);break;default:i=t[+n]}return i}),r===o?e:n.isEnd?e.substring(n.indexInMatch):e.substring(n.indexInMatch,n.indexInMatch+n.text.length))},getPortionReplacementNode:function(e,n,t){var i=this.options.replace||"$&",r=this.options.wrap;if(r&&r.nodeType){var a=c.createElement("div");a.innerHTML=r.outerHTML||(new XMLSerializer).serializeToString(r),r=a.firstChild}if("function"==typeof i)return i=i(e,n,t),i&&i.nodeType?i:c.createTextNode(String(i));var o="string"==typeof r?c.createElement(r):r;return i=c.createTextNode(this.prepareReplacementString(i,e,n,t)),i.data&&o?(o.appendChild(i),o):i},replaceMatch:function(e,n,t,i){var r,a,o=n.node,s=i.node;if(o===s){var d=o;n.indexInNode>0&&(r=c.createTextNode(d.data.substring(0,n.indexInNode)),d.parentNode.insertBefore(r,d));var u=this.getPortionReplacementNode(i,e);return d.parentNode.insertBefore(u,d),i.endIndexInNode<d.length&&(a=c.createTextNode(d.data.substring(i.endIndexInNode)),d.parentNode.insertBefore(a,d)),d.parentNode.removeChild(d),this.reverts.push(function(){r===u.previousSibling&&r.parentNode.removeChild(r),a===u.nextSibling&&a.parentNode.removeChild(a),u.parentNode.replaceChild(d,u)}),u}r=c.createTextNode(o.data.substring(0,n.indexInNode)),a=c.createTextNode(s.data.substring(i.endIndexInNode));for(var l=this.getPortionReplacementNode(n,e),h=[],p=0,f=t.length;p<f;++p){var g=t[p],b=this.getPortionReplacementNode(g,e);g.node.parentNode.replaceChild(b,g.node),this.reverts.push(function(e,n){return function(){n.parentNode.replaceChild(e.node,n)}}(g,b)),h.push(b)}var v=this.getPortionReplacementNode(i,e);return o.parentNode.insertBefore(r,o),o.parentNode.insertBefore(l,o),o.parentNode.removeChild(o),s.parentNode.insertBefore(v,s),s.parentNode.insertBefore(a,s),s.parentNode.removeChild(s),this.reverts.push(function(){r.parentNode.removeChild(r),l.parentNode.replaceChild(o,l),a.parentNode.removeChild(a),v.parentNode.replaceChild(s,v)}),v}},n}()),Y=function(){var e=U.create("div");return e.appendChild(U.create("","0-")),e.appendChild(U.create("","2")),e.normalize(),2!==e.firstChild.length}();U.extend(_.fn,{normalize:function(){return Y&&this.context.normalize(),this},jinzify:function(e){return this.filter(e||null).avoid("h-jinze").replace(q.jinze.touwei,function(e,n){var t=U.create("h-jinze","touwei");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""}).replace(q.jinze.wei,function(e,n){var t=U.create("h-jinze","wei");return t.innerHTML=n[0],0===e.index?t:""}).replace(q.jinze.tou,function(e,n){var t=U.create("h-jinze","tou");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""}).replace(q.jinze.middle,function(e,n){var t=U.create("h-jinze","middle");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""}).endAvoid().endFilter()},groupify:function(e){var e=U.extend({biaodian:!1,hanzi:!1,kana:!1,eonmun:!1,western:!1},e||{});return this.avoid("h-word, h-char-group"),e.biaodian&&this.replace(q.group.biaodian[0],i).replace(q.group.biaodian[1],i),(e.hanzi||e.cjk)&&this.wrap(q.group.hanzi,U.clone(U.create("h-char-group","hanzi cjk"))),e.western&&this.wrap(q.group.western,U.clone(U.create("h-word","western"))),e.kana&&this.wrap(q.group.kana,U.clone(U.create("h-char-group","kana"))),(e.eonmun||e.hangul)&&this.wrap(q.group.eonmun,U.clone(U.create("h-word","eonmun hangul"))),this.endAvoid(),this},charify:function(e){var e=U.extend({avoid:!0,biaodian:!1,punct:!1,hanzi:!1,latin:!1,ellinika:!1,kirillica:!1,kana:!1,eonmun:!1},e||{});return e.avoid&&this.avoid("h-char"),e.biaodian&&this.replace(q.char.biaodian.all,t(e.biaodian)||function(e){return r(e.text)}).replace(q.char.biaodian.liga,t(e.biaodian)||function(e){return r(e.text)}),(e.hanzi||e.cjk)&&this.wrap(q.char.hanzi,t(e.hanzi||e.cjk)||U.clone(U.create("h-char","hanzi cjk"))),e.punct&&this.wrap(q.char.punct.all,t(e.punct)||U.clone(U.create("h-char","punct"))),e.latin&&this.wrap(q.char.latin,t(e.latin)||U.clone(U.create("h-char","alphabet latin"))),(e.ellinika||e.greek)&&this.wrap(q.char.ellinika,t(e.ellinika||e.greek)||U.clone(U.create("h-char","alphabet ellinika greek"))),(e.kirillica||e.cyrillic)&&this.wrap(q.char.kirillica,t(e.kirillica||e.cyrillic)||U.clone(U.create("h-char","alphabet kirillica cyrillic"))),e.kana&&this.wrap(q.char.kana,t(e.kana)||U.clone(U.create("h-char","kana"))),(e.eonmun||e.hangul)&&this.wrap(q.char.eonmun,t(e.eonmun||e.hangul)||U.clone(U.create("h-char","eonmun hangul"))),this.endAvoid(),this}}),U.extend(B,{isNodeNormalizeNormal:Y,find:_,createBDGroup:i,createBDChar:r}),U.matches=B.find.matches,["setMode","wrap","replace","revert","addBoundary","removeBoundary","avoid","endAvoid","filter","endFilter","jinzify","groupify","charify"].forEach(function(e){B.fn[e]=function(){return this.finder||(this.finder=B.find(this.context)),this.finder[e](arguments[0],arguments[1]),this}});var W={};W.writeOnCanvas=o,W.compareCanvases=c,W.detectFont=s,W.support=function(){function n(e){var n,t=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+r.join(t+" ")+t).split(" ");return i.forEach(function(e){"string"==typeof a.style[e]&&(n=!0)}),n||!1}function t(e,n){var t,i,r,a=P||U.create("body"),o=U.create("div"),c=P?o:a,n="function"==typeof n?n:function(){};return t=["<style>",e,"</style>"].join(""),c.innerHTML+=t,a.appendChild(o),P||(a.style.background="",a.style.overflow="hidden",r=A.style.overflow,A.style.overflow="hidden",A.appendChild(a)),i=n(c,e),U.remove(c),P||(A.style.overflow=r),!!i}function i(n,t){var i;return e.getComputedStyle?i=j.defaultView.getComputedStyle(n,null).getPropertyValue(t):n.currentStyle&&(i=n.currentStyle[t]),i}var r="Webkit Moz ms".split(" "),a=U.create("h-test");return{columnwidth:n("columnWidth"),fontface:function(){var e;return t('@font-face { font-family: font; src: url("//"); }',function(n,t){var i=U.qsa("style",n)[0],r=i.sheet||i.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(t.split(" ")[0])}),e}(),ruby:function(){var e,n=U.create("ruby"),t=U.create("rt"),r=U.create("rp");return n.appendChild(r),n.appendChild(t),A.appendChild(n),e="none"===i(r,"display")||"ruby"===i(n,"display")&&"ruby-text"===i(t,"display"),A.removeChild(n),n=null,t=null,r=null,e}(),"ruby-display":function(){var e=U.create("div");return e.innerHTML='<h-test-a style="display: ruby;"></h-test-a><h-test-b style="display: ruby-text-container;"></h-test-b>',"ruby"===e.querySelector("h-test-a").style.display&&"ruby-text-container"===e.querySelector("h-test-b").style.display}(),"ruby-interchar":function(){var e,n="inter-character",t=U.create("div");return t.innerHTML='<h-test style="-moz-ruby-position:'+n+";-ms-ruby-position:"+n+";-webkit-ruby-position:"+n+";ruby-position:"+n+';"></h-test>',e=t.querySelector("h-test").style,e.rubyPosition===n||e.WebkitRubyPosition===n||e.MozRubyPosition===n||e.msRubyPosition===n}(),textemphasis:n("textEmphasis"),unicoderange:function(){var e;return t('@font-face{font-family:test-for-unicode-range;src:local(Arial),local("Droid Sans")}@font-face{font-family:test-for-unicode-range;src:local("Times New Roman"),local(Times),local("Droid Serif");unicode-range:U+270C}',function(){e=!W.detectFont("test-for-unicode-range",'Arial, "Droid Sans"',"Q")}),e}(),writingmode:n("writingMode")}}(),W.initCond=function(e){var n,e=e||A,t="";for(var i in W.support)n=(W.support[i]?"":"no-")+i,e.classList.add(n),t+=n+" ";return t};var V=W.support["ruby-interchar"];U.extend(W,{renderRuby:function(e,n){var n=n||"ruby",t=U.qsa(n,e);U.qsa("rtc",e).concat(t).map(p),t.forEach(function(e){var n,t=e.classList;t.contains("complex")?n=l(e):t.contains("zhuyin")&&(n=V?u(e):d(e)),n&&e.parentNode.replaceChild(n,e)})},simplifyRubyClass:p,getZhuyinHTML:b,renderComplexRuby:l,renderSimpleRuby:d,renderInterCharRuby:u}),U.extend(W,{renderElem:function(e){this.renderRuby(e),this.renderDecoLine(e),this.renderDecoLine(e,"s, del"),this.renderEm(e)},renderDecoLine:function(e,n){var t=U.qsa(n||"u, ins",e),i=t.length;e:for(;i--;){var r=t[i],a=null;do{if(!(a=(a||r).previousSibling))continue e;t[i-1]===a&&r.classList.add("adjacent")}while(U.isIgnorable(a))}},renderEm:function(e,n){var t=n?"qsa":"tag",n=n||"em";U[t](n,e).forEach(function(e){var n=B(e);W.support.textemphasis?n.avoid("rt, h-char").charify({biaodian:!0,punct:!0}):n.avoid("rt, h-char, h-char-group").jinzify().groupify({western:!0}).charify({hanzi:!0,biaodian:!0,punct:!0,latin:!0,ellinika:!0,kirillica:!0})})}}),B.normalize=W,B.localize=W,B.support=W.support,B.detectFont=W.detectFont,B.fn.initCond=function(){return this.condition.classList.add("han-js-rendered"),B.normalize.initCond(this.condition),this},["Elem","DecoLine","Em","Ruby"].forEach(function(e){var n="render"+e;B.fn[n]=function(e){return B.normalize[n](this.context,e),this}}),U.extend(B.support,{heiti:!0,songti:B.detectFont('"Han Songti"'),"songti-gb":B.detectFont('"Han Songti GB"'),kaiti:B.detectFont('"Han Kaiti"'),fangsong:B.detectFont('"Han Fangsong"')}),B.correctBiaodian=function(e){var e=e||j,n=B.find(e);return n.avoid("h-char").replace(/([‘“])/g,function(e){var n=B.createBDChar(e.text);return n.classList.add("bd-open","punct"),n}).replace(/([’”])/g,function(e){var n=B.createBDChar(e.text);return n.classList.add("bd-close","bd-end","punct"),n}),B.support.unicoderange?n:n.charify({biaodian:!0})},B.correctBasicBD=B.correctBiaodian,B.correctBD=B.correctBiaodian,U.extend(B.fn,{biaodian:null,correctBiaodian:function(){return this.biaodian=B.correctBiaodian(this.context),this},revertCorrectedBiaodian:function(){try{this.biaodian.revert("all")}catch(e){}return this}}),B.fn.correctBasicBD=B.fn.correctBiaodian,B.fn.revertBasicBD=B.fn.revertCorrectedBiaodian;var Z="<<hws>>",$=U.create("h-hws");$.setAttribute("hidden",""),$.innerHTML=" ";var J;U.extend(B,{renderHWS:function(e,n){var t=n?"textarea, code, kbd, samp, pre":"textarea",i=n?"strict":"base",e=e||j,r=B.find(e);return r.avoid(t).replace(B.TYPESET.hws[i][0],y).replace(B.TYPESET.hws[i][1],y).replace(new RegExp("("+Z+")+","g"),x).replace(/([\'"])\s(.+?)\s\1/g,E).replace(/\s[‘“]/g,w).replace(/[’”]\s/g,w).normalize(),r}}),U.extend(B.fn,{renderHWS:function(e){return B.renderHWS(this.context,e),this},revertHWS:function(){return U.tag("h-hws",this.context).forEach(function(e){U.remove(e)}),this.HWS=[],this}});var G="bd-hangable",K='<h-cs hidden class="jinze-outer hangable-outer"> </h-cs>',Q=B.find.matches;B.support["han-space"]=N(),U.extend(B,{detectSpaceFont:N,isSpaceFontLoaded:N(),renderHanging:function(e){var e=e||j,n=B.find(e);return n.avoid("textarea, code, kbd, samp, pre").avoid("h-char.bd-hangable").replace(q.jinze.hanging,function(e){if(/^[\x20\t\r\n\f]+$/.test(e.text))return"";var n,t,i,r,a=e.node.parentNode;return(n=U.parent(a,"h-jinze"))&&C(n),r=e.text.trim(),t=B.createBDChar(r),t.innerHTML="<h-inner>"+r+"</h-inner>",t.classList.add(G),i=U.parent(a,"h-char.biaodian"),i?function(){return i.classList.add(G),Q(a,"h-inner, h-inner *")?r:t.firstChild}():t}),n}}),U.extend(B.fn,{renderHanging:function(){var e=this.condition.classList;return B.isSpaceFontLoaded=N(),B.isSpaceFontLoaded&&e.contains("no-han-space")&&(e.remove("no-han-space"),e.add("han-space")),B.renderHanging(this.context),this},revertHanging:function(){return U.qsa("h-char.bd-hangable, h-cs.hangable-outer",this.context).forEach(function(e){var n=e.classList;n.remove("bd-hangable"),n.remove("hangable-outer")}),this}});var X,ee,ne="bd-jiya",te="bd-consecutive",ie='<h-cs hidden class="jinze-outer jiya-outer"> </h-cs>',Q=B.find.matches;B.renderJiya=function(e){var e=e||j,n=B.find(e);return n.avoid("textarea, code, kbd, samp, pre, h-cs").avoid("h-char.bd-jiya").charify({avoid:!1,biaodian:S}).endAvoid().avoid("textarea, code, kbd, samp, pre, h-cs").replace(q.group.biaodian[0],L).replace(q.group.biaodian[1],L),n},U.extend(B.fn,{renderJiya:function(){return B.renderJiya(this.context),this},revertJiya:function(){return U.qsa("h-char.bd-jiya, h-cs.jiya-outer",this.context).forEach(function(e){var n=e.classList;n.remove("bd-jiya"),n.remove("jiya-outer")}),this}});var re="textarea, code, kbd, samp, pre",ae=U.create("h-char","comb-liga")
;return U.extend(B,{isVowelCombLigaNormal:function(){return I('"Romanization Sans"',"a̍","󰁡")}(),isVowelICombLigaNormal:M(),isZhuyinCombLigaNormal:function(){return I('"Zhuyin Kaiti"',"ㆴ͘","󳆴")}(),isCombLigaNormal:M()(),substVowelCombLiga:R(B.TYPESET["display-as"]["comb-liga-vowel"]),substZhuyinCombLiga:R(B.TYPESET["display-as"]["comb-liga-zhuyin"]),substCombLigaWithPUA:R(B.TYPESET["display-as"]["comb-liga-pua"]),substInaccurateChar:function(e){var e=e||j,n=B.find(e);n.avoid(re),B.TYPESET["inaccurate-char"].forEach(function(e){n.replace(new RegExp(e[0],"ig"),e[1])})}}),U.extend(B.fn,{"comb-liga-vowel":null,"comb-liga-vowel-i":null,"comb-liga-zhuyin":null,"inaccurate-char":null,substVowelCombLiga:function(){return this["comb-liga-vowel"]=B.substVowelCombLiga(this.context),this},substVowelICombLiga:function(){return this["comb-liga-vowel-i"]=B.substVowelICombLiga(this.context),this},substZhuyinCombLiga:function(){return this["comb-liga-zhuyin"]=B.substZhuyinCombLiga(this.context),this},substCombLigaWithPUA:function(){return B.isVowelCombLigaNormal()?B.isVowelICombLigaNormal()||(this["comb-liga-vowel-i"]=B.substVowelICombLiga(this.context)):this["comb-liga-vowel"]=B.substVowelCombLiga(this.context),B.isZhuyinCombLigaNormal()||(this["comb-liga-zhuyin"]=B.substZhuyinCombLiga(this.context)),this},revertVowelCombLiga:function(){try{this["comb-liga-vowel"].revert("all")}catch(e){}return this},revertVowelICombLiga:function(){try{this["comb-liga-vowel-i"].revert("all")}catch(e){}return this},revertZhuyinCombLiga:function(){try{this["comb-liga-zhuyin"].revert("all")}catch(e){}return this},revertCombLigaWithPUA:function(){try{this["comb-liga-vowel"].revert("all"),this["comb-liga-vowel-i"].revert("all"),this["comb-liga-zhuyin"].revert("all")}catch(e){}return this},substInaccurateChar:function(){return this["inaccurate-char"]=B.substInaccurateChar(this.context),this},revertInaccurateChar:function(){try{this["inaccurate-char"].revert("all")}catch(e){}return this}}),e.addEventListener("DOMContentLoaded",function(){var e;A.classList.contains("han-init")?B.init():(e=j.querySelector(".han-init-context"))&&(B.init=B(e).render())}),void 0!==n&&!1!==n||(e.Han=B),B});