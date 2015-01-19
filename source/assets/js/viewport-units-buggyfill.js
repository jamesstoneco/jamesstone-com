!function(root,factory){"use strict";"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?module.exports=factory():root.viewportUnitsBuggyfill=factory()}(this,function(){"use strict";function debounce(func,wait){var timeout;return function(){var context=this,args=arguments,callback=function(){func.apply(context,args)};clearTimeout(timeout),timeout=setTimeout(callback,wait)}}function inIframe(){try{return window.self!==window.top}catch(e){return!0}}function initialize(initOptions){initialized||(initOptions===!0&&(initOptions={force:!0}),options=initOptions||{},options.isMobileSafari=isMobileSafari,(options.force||isMobileSafari||isOldInternetExplorer||options.hacks&&options.hacks.required(options))&&(options.hacks&&options.hacks.initialize(options),initialized=!0,styleNode=document.createElement("style"),styleNode.id="patched-viewport",document.head.appendChild(styleNode),importCrossOriginLinks(function(){var _refresh=debounce(refresh,options.refreshDebounceWait||100);window.addEventListener("orientationchange",_refresh,!0),window.addEventListener("pageshow",_refresh,!0),(options.force||isOldInternetExplorer||inIframe())&&(window.addEventListener("resize",_refresh,!0),options._listeningToResize=!0),options.hacks&&options.hacks.initializeEvents(options,refresh,_refresh),refresh()})))}function updateStyles(){styleNode.textContent=getReplacedViewportUnits()}function refresh(){initialized&&(findProperties(),setTimeout(function(){updateStyles()},1))}function findProperties(){return declarations=[],forEach.call(document.styleSheets,function(sheet){"patched-viewport"!==sheet.ownerNode.id&&sheet.cssRules&&(sheet.media&&sheet.media.mediaText&&window.matchMedia&&!window.matchMedia(sheet.media.mediaText).matches||forEach.call(sheet.cssRules,findDeclarations))}),declarations}function findDeclarations(rule){if(7===rule.type){var value=rule.cssText;return viewportUnitExpression.lastIndex=0,void(viewportUnitExpression.test(value)&&(declarations.push([rule,null,value]),options.hacks&&options.hacks.findDeclarations(declarations,rule,null,value)))}if(!rule.style){if(!rule.cssRules)return;return void forEach.call(rule.cssRules,function(_rule){findDeclarations(_rule)})}forEach.call(rule.style,function(name){var value=rule.style.getPropertyValue(name);viewportUnitExpression.lastIndex=0,viewportUnitExpression.test(value)&&(declarations.push([rule,name,value]),options.hacks&&options.hacks.findDeclarations(declarations,rule,name,value))})}function getReplacedViewportUnits(){dimensions=getViewport();var open,close,css=[],buffer=[];return declarations.forEach(function(item){var _item=overwriteDeclaration.apply(null,item),_open=_item.selector.length?_item.selector.join(" {\n")+" {\n":"",_close=new Array(_item.selector.length+1).join("\n}");return _open&&_open===open?(_open&&!open&&(open=_open,close=_close),void buffer.push(_item.content)):(buffer.length&&(css.push(open+buffer.join("\n")+close),buffer.length=0),void(_open?(open=_open,close=_close,buffer.push(_item.content)):(css.push(_item.content),open=null,close=null)))}),buffer.length&&css.push(open+buffer.join("\n")+close),css.join("\n\n")}function overwriteDeclaration(rule,name,value){var _value=value.replace(viewportUnitExpression,replaceValues),_selectors=[];options.hacks&&(_value=options.hacks.overwriteDeclaration(rule,name,_value)),name&&(_selectors.push(rule.selectorText),_value=name+": "+_value+";");for(var _rule=rule.parentRule;_rule;)_selectors.unshift("@media "+_rule.media.mediaText),_rule=_rule.parentRule;return{selector:_selectors,content:_value}}function replaceValues(match,number,unit){var _base=dimensions[unit],_number=parseFloat(number)/100;return _number*_base+"px"}function getViewport(){var vh=window.innerHeight,vw=window.innerWidth;return{vh:vh,vw:vw,vmax:Math.max(vw,vh),vmin:Math.min(vw,vh)}}function importCrossOriginLinks(next){var _waiting=0,decrease=function(){_waiting--,_waiting||next()};forEach.call(document.styleSheets,function(sheet){sheet.href&&origin(sheet.href)!==origin(location.href)&&(_waiting++,convertLinkToStyle(sheet.ownerNode,decrease))}),_waiting||next()}function origin(url){return url.slice(0,url.indexOf("/",url.indexOf("://")+3))}function convertLinkToStyle(link,next){getCors(link.href,function(){var style=document.createElement("style");style.media=link.media,style.setAttribute("data-href",link.href),style.textContent=this.responseText,link.parentNode.replaceChild(style,link),next()},next)}function getCors(url,success,error){var xhr=new XMLHttpRequest;if("withCredentials"in xhr)xhr.open("GET",url,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");xhr=new XDomainRequest,xhr.open("GET",url)}return xhr.onload=success,xhr.onerror=error,xhr.send(),xhr}var options,dimensions,declarations,styleNode,initialized=!1,isMobileSafari=/(iPhone|iPod|iPad).+AppleWebKit/i.test(window.navigator.userAgent),viewportUnitExpression=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,forEach=[].forEach,isOldInternetExplorer=!1;return{version:"0.4.1",findProperties:findProperties,getCss:getReplacedViewportUnits,init:initialize,refresh:refresh}});