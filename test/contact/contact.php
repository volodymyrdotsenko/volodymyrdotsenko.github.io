<!DOCTYPE html>
<html lang="en-US" data-bt-theme="Industrial 1.3.1">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
  <meta http-equiv='refresh' content='3; url=https://ikigaicorporation.com'>

<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<script type="06cd7e663a0e46d4271fe72d-text/javascript">if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script><script type="06cd7e663a0e46d4271fe72d-text/javascript">class RocketLazyLoadScripts{constructor(e){this.triggerEvents=e,this.eventOptions={passive:!0},this.userEventListener=this.triggerListener.bind(this),this.delayedScripts={normal:[],async:[],defer:[]},this.allJQueries=[]}_addUserInteractionListener(e){this.triggerEvents.forEach((t=>window.addEventListener(t,e.userEventListener,e.eventOptions)))}_removeUserInteractionListener(e){this.triggerEvents.forEach((t=>window.removeEventListener(t,e.userEventListener,e.eventOptions)))}triggerListener(){this._removeUserInteractionListener(this),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this._loadEverythingNow.bind(this)):this._loadEverythingNow()}async _loadEverythingNow(){this._delayEventListeners(),this._delayJQueryReady(this),this._handleDocumentWrite(),this._registerAllDelayedScripts(),this._preloadAllScripts(),await this._loadScriptsFromList(this.delayedScripts.normal),await this._loadScriptsFromList(this.delayedScripts.defer),await this._loadScriptsFromList(this.delayedScripts.async),await this._triggerDOMContentLoaded(),await this._triggerWindowLoad(),window.dispatchEvent(new Event("rocket-allScriptsLoaded"))}_registerAllDelayedScripts(){document.querySelectorAll("script[type=rocketlazyloadscript]").forEach((e=>{e.hasAttribute("src")?e.hasAttribute("async")&&!1!==e.async?this.delayedScripts.async.push(e):e.hasAttribute("defer")&&!1!==e.defer||"module"===e.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(e):this.delayedScripts.normal.push(e):this.delayedScripts.normal.push(e)}))}async _transformScript(e){return await this._requestAnimFrame(),new Promise((t=>{const n=document.createElement("script");let i;[...e.attributes].forEach((e=>{let t=e.nodeName;"type"!==t&&("data-rocket-type"===t&&(t="type",i=e.nodeValue),n.setAttribute(t,e.nodeValue))})),e.hasAttribute("src")&&this._isValidScriptType(i)?(n.addEventListener("load",t),n.addEventListener("error",t)):(n.text=e.text,t()),e.parentNode.replaceChild(n,e)}))}_isValidScriptType(e){return!e||""===e||"string"==typeof e&&["text/javascript","text/x-javascript","text/ecmascript","text/jscript","application/javascript","application/x-javascript","application/ecmascript","application/jscript","module"].includes(e.toLowerCase())}async _loadScriptsFromList(e){const t=e.shift();return t?(await this._transformScript(t),this._loadScriptsFromList(e)):Promise.resolve()}_preloadAllScripts(){var e=document.createDocumentFragment();[...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async].forEach((t=>{const n=t.getAttribute("src");if(n){const t=document.createElement("link");t.href=n,t.rel="preload",t.as="script",e.appendChild(t)}})),document.head.appendChild(e)}_delayEventListeners(){let e={};function t(t,n){!function(t){function n(n){return e[t].eventsToRewrite.indexOf(n)>=0?"rocket-"+n:n}e[t]||(e[t]={originalFunctions:{add:t.addEventListener,remove:t.removeEventListener},eventsToRewrite:[]},t.addEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.add.apply(t,arguments)},t.removeEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.remove.apply(t,arguments)})}(t),e[t].eventsToRewrite.push(n)}function n(e,t){let n=e[t];Object.defineProperty(e,t,{get:()=>n||function(){},set(i){e["rocket"+t]=n=i}})}t(document,"DOMContentLoaded"),t(window,"DOMContentLoaded"),t(window,"load"),t(window,"pageshow"),t(document,"readystatechange"),n(document,"onreadystatechange"),n(window,"onload"),n(window,"onpageshow")}_delayJQueryReady(e){let t=window.jQuery;Object.defineProperty(window,"jQuery",{get:()=>t,set(n){if(n&&n.fn&&!e.allJQueries.includes(n)){n.fn.ready=n.fn.init.prototype.ready=function(t){e.domReadyFired?t.bind(document)(n):document.addEventListener("rocket-DOMContentLoaded",(()=>t.bind(document)(n)))};const t=n.fn.on;n.fn.on=n.fn.init.prototype.on=function(){if(this[0]===window){function e(e){return e.split(" ").map((e=>"load"===e||0===e.indexOf("load.")?"rocket-jquery-load":e)).join(" ")}"string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=e(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach((t=>{delete Object.assign(arguments[0],{[e(t)]:arguments[0][t]})[t]}))}return t.apply(this,arguments),this},e.allJQueries.push(n)}t=n}})}async _triggerDOMContentLoaded(){this.domReadyFired=!0,await this._requestAnimFrame(),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._requestAnimFrame(),window.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._requestAnimFrame(),document.dispatchEvent(new Event("rocket-readystatechange")),await this._requestAnimFrame(),document.rocketonreadystatechange&&document.rocketonreadystatechange()}async _triggerWindowLoad(){await this._requestAnimFrame(),window.dispatchEvent(new Event("rocket-load")),await this._requestAnimFrame(),window.rocketonload&&window.rocketonload(),await this._requestAnimFrame(),this.allJQueries.forEach((e=>e(window).trigger("rocket-jquery-load"))),window.dispatchEvent(new Event("rocket-pageshow")),await this._requestAnimFrame(),window.rocketonpageshow&&window.rocketonpageshow()}_handleDocumentWrite(){const e=new Map;document.write=document.writeln=function(t){const n=document.currentScript;n||console.error("WPRocket unable to document.write this: "+t);const i=document.createRange(),r=n.parentElement;let a=e.get(n);void 0===a&&(a=n.nextSibling,e.set(n,a));const o=document.createDocumentFragment();i.setStart(o,0),o.appendChild(i.createContextualFragment(t)),r.insertBefore(o,a)}}async _requestAnimFrame(){return new Promise((e=>requestAnimationFrame(e)))}static run(){const e=new RocketLazyLoadScripts(["keydown","mousemove","touchmove","touchstart","touchend","wheel"]);e._addUserInteractionListener(e)}}RocketLazyLoadScripts.run();
</script>
<title>Active pharmaceutical ingredients - Ikigai&reg; Corporation</title>
<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%2C100italic%2C200italic%2C300italic%2C400italic%2C500italic%2C600italic%2C700italic%2C800italic%2C900italic%7CMontserrat%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%2C100italic%2C200italic%2C300italic%2C400italic%2C500italic%2C600italic%2C700italic%2C800italic%2C900italic%7CMontserrat%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%2C100italic%2C200italic%2C300italic%2C400italic%2C500italic%2C600italic%2C700italic%2C800italic%2C900italic%7CRoboto%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%2C100italic%2C200italic%2C300italic%2C400italic%2C500italic%2C600italic%2C700italic%2C800italic%2C900italic%7CMontserrat%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%2C100italic%2C200italic%2C300italic%2C400italic%2C500italic%2C600italic%2C700italic%2C800italic%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%20Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;subset=latin%2Clatin-ext&#038;display=swap">
<link rel="stylesheet" href="./../wp-content/cache/min/1/94ef57cb2a7e04898d8df31f764bfef2.css" media="all" data-minify="1">
<meta name="description" content="API (Active Pharmaceutical Ingredient) determines the active component which is included in the medicine. CATEGORY :ALLAPI. ANTIBIOTICSAPI. BOLDENONE SERIESAPI. CANRENONE DERIVATIVESAPI. CORTICAL STEROIDAPI. DHEA &amp; DERIVATIVESAPI. ESTROGENAPI. NANDROLONE SERIESAPI. OTHERSAPI. PROGESTERONE &amp; INTERMEDIATEAPI. STARTING MATERIALAPI. TESTOSTERONE SERIES">
<link rel="canonical" href="./index.html">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="article">
<meta property="og:title" content="Active pharmaceutical ingredients - Ikigai&reg; Corporation">
<meta property="og:description" content="API (Active Pharmaceutical Ingredient) determines the active component which is included in the medicine. CATEGORY :ALLAPI. ANTIBIOTICSAPI. BOLDENONE SERIESAPI. CANRENONE DERIVATIVESAPI. CORTICAL STEROIDAPI. DHEA &amp; DERIVATIVESAPI. ESTROGENAPI. NANDROLONE SERIESAPI. OTHERSAPI. PROGESTERONE &amp; INTERMEDIATEAPI. STARTING MATERIALAPI. TESTOSTERONE SERIES">
<meta property="og:url" content="./active-pharmaceutical-ingredients/">
<meta property="og:site_name" content="Ikigai&reg; Corporation">
<meta property="article:modified_time" content="2021-01-28T12:32:49+00:00">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:label1" content="Est. reading time">
<meta name="twitter:data1" content="1 minute">
<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"./#website","url":"./","name":"Ikigai&reg; Corporation","description":"Leading suppliers of API (active pharmaceutical ingredients)","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"./?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"WebPage","@id":"./active-pharmaceutical-ingredients/#webpage","url":"./active-pharmaceutical-ingredients/","name":"Active pharmaceutical ingredients - Ikigai&reg; Corporation","isPartOf":{"@id":"./#website"},"datePublished":"2020-01-30T19:55:43+00:00","dateModified":"2021-01-28T12:32:49+00:00","description":"API (Active Pharmaceutical Ingredient) determines the active component which is included in the medicine. CATEGORY :ALLAPI. ANTIBIOTICSAPI. BOLDENONE SERIESAPI. CANRENONE DERIVATIVESAPI. CORTICAL STEROIDAPI. DHEA & DERIVATIVESAPI. ESTROGENAPI. NANDROLONE SERIESAPI. OTHERSAPI. PROGESTERONE & INTERMEDIATEAPI. STARTING MATERIALAPI. TESTOSTERONE SERIES","breadcrumb":{"@id":"./active-pharmaceutical-ingredients/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["./active-pharmaceutical-ingredients/"]}]},{"@type":"BreadcrumbList","@id":"./active-pharmaceutical-ingredients/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"./"},{"@type":"ListItem","position":2,"name":"Active pharmaceutical ingredients"}]}]}</script>

<link rel="dns-prefetch" href="//use.fontawesome.com">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link href="//fonts.gstatic.com" crossorigin rel="preconnect">
<style type="text/css">img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}</style>

<style id="industrial-style-inline-css" type="text/css">select, input{font-family: Roboto;} input:not([type='checkbox']):not([type='radio']), textarea, select{ font-family: "Montserrat";} input:not([type='checkbox']):not([type='radio']):not([type='submit']):focus, textarea:focus{-webkit-box-shadow: 0 0 4px 0 #58a0d3; box-shadow: 0 0 4px 0 #58a0d3;} html a:hover, .btLightSkin a:hover, .btDarkSkin .btLightSkin a:hover, .btLightSkin .btDarkSkin .btLightSkin a:hover, .btDarkSkin a:hover, .btLightSkin .btDarkSkin a:hover, .btDarkSkin.btLightSkin .btDarkSkin a:hover{ color: #58a0d3;} .btLightSkin .btText a, .btDarkSkin .btLightSkin .btText a, .btLightSkin .btDarkSkin .btLightSkin .btText a, .btDarkSkin .btText a, .btLightSkin .btDarkSkin .btText a, .btDarkSkin.btLightSkin .btDarkSkin .btText a{color: #58a0d3;} body{font-family: "Roboto",Arial,sans-serif;} .btContentHolder cite{ font-family: Montserrat;} h1, h2, h3, h4, h5, h6{font-family: "Montserrat";} .btContentHolder table thead th{ background-color: #58a0d3; font-family: Montserrat;} .btAccentColorBackground{background-color: #58a0d3 !important;} .btAccentColorBackground .headline b.animate.animated{color: #1a86d3;} .btAccentColorBackground .btDash.bottomDash .dash:after{border-color: #1a86d3;} .btAccentDarkColorBackground{background-color: #2e7ab0 !important;} .btAccentDarkColorBackground .headline b.animate.animated{color: #1a86d3;} .btAccentVeryDarkColorBackground{background-color: #19425f !important;} .btAccentLightColorBackground{background-color: rgba(88,160,211,0.7) !important;} .btAlternateColorBackground{background-color: #1a86d3 !important;} .btAlternateDarkColorBackground{background-color: #125b8f !important;} .btAlternateVeryDarkColorBackground{background-color: #0c3e61 !important;} .btAlternateLightColorBackground{background-color: rgba(26,134,211,0.6) !important;} .btAccentDarkHeader .btPreloader .animation > div:first-child, .btLightAccentHeader .btPreloader .animation > div:first-child{ background-color: #2e7ab0;} .btPreloader .animation .preloaderLogo{height: 100px;} .mainHeader{ font-family: "Montserrat";} .btMenuVertical.btAccentDarkHeader .mainHeader, .btMenuVertical.btLightAccentHeader .mainHeader{background-color: #58a0d3;} .btMenuVertical.btLightAlternateHeader .mainHeader{background-color: #1a86d3;} .menuPort{font-family: "Montserrat";} .menuPort nav ul li a:hover{color: #58a0d3 !important;} .menuPort nav > ul > li > a{line-height: 100px;} .btTextLogo{ line-height: 100px;} .btLogoArea .logo img{height: 100px;} .btHorizontalMenuTrigger{ line-height: 100px;} .btMenuHorizontal .menuPort nav > ul > li.current-menu-ancestor > a:after, .btMenuHorizontal .menuPort nav > ul > li.current-menu-item > a:after{ background-color: #58a0d3;} .btAccentDarkHeader.btMenuHorizontal .menuPort nav > ul > li.current-menu-ancestor > a:after, .btAccentDarkHeader.btMenuHorizontal .menuPort nav > ul > li.current-menu-item > a:after, .btAccentLightHeader.btMenuHorizontal .menuPort nav > ul > li.current-menu-ancestor > a:after, .btAccentLightHeader.btMenuHorizontal .menuPort nav > ul > li.current-menu-item > a:after{background-color: #1a86d3;} .btMenuHorizontal .menuPort nav > ul > li > ul li.current-menu-ancestor > a, .btMenuHorizontal .menuPort nav > ul > li > ul li.current-menu-item > a{color: #58a0d3 !important;} body.btMenuHorizontal .subToggler{ line-height: 100px;} .btMenuHorizontal .topBarInMenu{ height: 100px;} .btLightSkin.btAccentLightHeader.btMenuHorizontal .btBelowLogoArea .menuPort > nav > ul > li > a:hover, .btDarkSkin.btAccentLightHeader.btMenuHorizontal .btBelowLogoArea .menuPort > nav > ul > li > a:hover, .btLightSkin.btAccentLightHeader.btMenuHorizontal .topBar .menuPort > nav > ul > li > a:hover, .btDarkSkin.btAccentLightHeader.btMenuHorizontal .topBar .menuPort > nav > ul > li > a:hover{color: #1a86d3 !important;} .btAccentLightHeader.btMenuHorizontal:not(.btBelowMenu) .btBelowLogoArea, .btAccentLightHeader.btMenuHorizontal:not(.btBelowMenu) .topBar, .btAccentLightHeader.btMenuHorizontal.btStickyHeaderActive .btBelowLogoArea, .btAccentLightHeader.btMenuHorizontal.btStickyHeaderActive .topBar{background-color: #58a0d3;} .btAccentLightHeader.btMenuHorizontal:not(.btBelowMenu) .btBelowLogoArea:before, .btAccentLightHeader.btMenuHorizontal:not(.btBelowMenu) .topBar:before, .btAccentLightHeader.btMenuHorizontal.btStickyHeaderActive .btBelowLogoArea:before, .btAccentLightHeader.btMenuHorizontal.btStickyHeaderActive .topBar:before{ background-color: #58a0d3;} .btAccentLightHeader.btMenuHorizontal.btBelowMenu:not(.btStickyHeaderActive) .mainHeader .btBelowLogoArea, .btAccentLightHeader.btMenuHorizontal.btBelowMenu:not(.btStickyHeaderActive) .mainHeader .topBar{background-color: #58a0d3;} .btLightSkin.btLightHeader.btMenuHorizontal .btBelowLogoArea .menuPort > nav > ul > li > a:hover, .btDarkSkin.btLightHeader.btMenuHorizontal .btBelowLogoArea .menuPort > nav > ul > li > a:hover, .btLightSkin.btLightHeader.btMenuHorizontal .topBar .menuPort > nav > ul > li > a:hover, .btDarkSkin.btLightHeader.btMenuHorizontal .topBar .menuPort > nav > ul > li > a:hover{color: #1a86d3 !important;} .btLightSkin.btAccentDarkHeader.btMenuHorizontal .mainHeader .menuPort > nav > ul > li > a:hover, .btDarkSkin.btAccentDarkHeader.btMenuHorizontal .mainHeader .menuPort > nav > ul > li > a:hover{color: #1a86d3 !important;} .btAccentDarkHeader.btMenuHorizontal:not(.btBelowMenu) .mainHeader, .btAccentDarkHeader.btMenuHorizontal.btStickyHeaderActive .mainHeader{background-color: #58a0d3;} .btAccentDarkHeader.btMenuHorizontal.btBelowMenu:not(.btStickyHeaderActive) .mainHeader .port .btLogoArea{background-color: #58a0d3;} .btLightSkin.btLightAccentHeader.btMenuHorizontal .mainHeader .btLogoArea .menuPort > nav > ul > li > a:hover, .btDarkSkin.btLightAccentHeader.btMenuHorizontal .mainHeader .btLogoArea .menuPort > nav > ul > li > a:hover{color: #1a86d3 !important;} .btLightAccentHeader.btMenuHorizontal:not(.btBelowMenu) .mainHeader, .btLightAccentHeader.btMenuHorizontal.btStickyHeaderActive .mainHeader{background-color: #58a0d3;} .btLightAccentHeader.btMenuHorizontal.btBelowMenu:not(.btStickyHeaderActive) .mainHeader .port .btLogoArea{background-color: #58a0d3;} .btLightSkin.btLightAlternateHeader.btMenuHorizontal .mainHeader .btLogoArea .menuPort > nav > ul > li > a:hover, .btDarkSkin.btLightAlternateHeader.btMenuHorizontal .mainHeader .btLogoArea .menuPort > nav > ul > li > a:hover{color: #58a0d3 !important;} .btLightAlternateHeader.btMenuHorizontal:not(.btBelowMenu) .mainHeader, .btLightAlternateHeader.btMenuHorizontal.btStickyHeaderActive .mainHeader{background-color: #1a86d3;} .btLightAlternateHeader.btMenuHorizontal.btBelowMenu:not(.btStickyHeaderActive) .mainHeader .port .btLogoArea{background-color: #1a86d3;} .btAccentDarkHeader.btMenuVertical > .menuPort .logo, .btLightAccentHeader.btMenuVertical > .menuPort .logo{background-color: #58a0d3;} .btLightAlternateHeader.btMenuVertical > .menuPort .logo{background-color: #1a86d3;} .btMenuVertical > .menuPort .btCloseVertical:before:hover{color: #58a0d3;} @media (min-width: 1200px){.btMenuVerticalOn .btVerticalMenuTrigger .btIco a:before{color: #58a0d3 !important;} }.btMenuHorizontal .topBarInLogoArea{ height: 100px;} .btMenuHorizontal .topBarInLogoArea .topBarInLogoAreaCell{border: 0 solid #58a0d3;} .btSearchInner.btFromTopBox{ background: #58a0d3;} .btSearchInner.btFromTopBox form button:hover:before{color: #58a0d3;} .btDarkSkin .btSiteFooter .port:before, .btLightSkin .btDarkSkin .btSiteFooter .port:before, .btDarkSkin.btLightSkin .btDarkSkin .btSiteFooter .port:before{background-color: #58a0d3;} .btMediaBox.btQuote, .btMediaBox.btLink{ background-color: #58a0d3;} .btArticleListItem .headline a:hover{color: #58a0d3;} .btCommentsBox .vcard .posted{ font-family: "Montserrat";} .btCommentsBox .commentTxt p.edit-link, .btCommentsBox .commentTxt p.reply{ font-family: "Montserrat";} .comment-respond .btnOutline button[type="submit"]{font-family: "Montserrat";} a#cancel-comment-reply-link:hover{color: #58a0d3;} .post-password-form input[type="submit"]{ background: #58a0d3; font-family: "Montserrat";} .btPagination{font-family: "Montserrat";} .btPagination .paging a:hover:after{border-color: #58a0d3;} span.btHighlight{ background-color: #58a0d3;} .btArticleCategories a:not(:first-child):before{ background-color: #58a0d3;} .btArticleMeta{font-family: "Montserrat";} body:not(.btNoDashInSidebar) .btBox > h4:after, body:not(.btNoDashInSidebar) .btCustomMenu > h4:after, body:not(.btNoDashInSidebar) .btTopBox > h4:after{ border-bottom: 3px solid #58a0d3;} .btBox ul li.current-menu-item > a, .btCustomMenu ul li.current-menu-item > a, .btTopBox ul li.current-menu-item > a{color: #58a0d3;} .btBox .ppTxt .header .headline a a:hover, .btCustomMenu .ppTxt .header .headline a a:hover, .btTopBox .ppTxt .header .headline a a:hover{color: #58a0d3;} .btBox p.posted, .btBox .quantity, .btCustomMenu p.posted, .btCustomMenu .quantity, .btTopBox p.posted, .btTopBox .quantity{ font-family: Montserrat;} .widget_calendar table caption{background: #58a0d3; font-family: "Montserrat";} .widget_rss li a.rsswidget{font-family: "Montserrat";} .fancy-select .trigger.open{color: #58a0d3;} .fancy-select ul.options li:hover{color: #58a0d3;} .widget_shopping_cart .total{ font-family: Montserrat;} .widget_shopping_cart .widget_shopping_cart_content .mini_cart_item .ppRemove a.remove{ background-color: #58a0d3;} .widget_shopping_cart .widget_shopping_cart_content .mini_cart_item .ppRemove a.remove:hover{background-color: #1a86d3;} .menuPort .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents, .topTools .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents, .topBarInLogoArea .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetIcon span.cart-contents{ background-color: #1a86d3; font: normal 10px/1 Montserrat;} .btMenuVertical .menuPort .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent .verticalMenuCartToggler, .btMenuVertical .topTools .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent .verticalMenuCartToggler, .btMenuVertical .topBarInLogoArea .widget_shopping_cart .widget_shopping_cart_content .btCartWidgetInnerContent .verticalMenuCartToggler{ background-color: #58a0d3;} .widget_recent_reviews{font-family: Montserrat;} .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle{ background-color: #58a0d3;} .btBox .tagcloud a, .btTags ul a{ background: #58a0d3; font-family: "Montserrat";} .btSidebar .btIconWidget:hover .btIconWidgetText, footer .btIconWidget:hover .btIconWidgetText{color: #58a0d3;} .btTopBox.widget_bt_text_image .widget_sp_image-description{ font-family: 'Roboto',arial,sans-serif;} .btMenuHorizontal .topTools .btIconWidget:hover, .btMenuHorizontal .topBarInMenu .btIconWidget:hover{color: #58a0d3;} .btMenuHorizontal .topTools .btAccentIconWidget, .btMenuHorizontal .topBarInMenu .btAccentIconWidget{background-color: #58a0d3;} .btTopToolsInMenuArea.btMenuHorizontal .topTools .btAccentIconWidget, .btTopToolsInMenuArea.btMenuHorizontal .topBarInMenu .btAccentIconWidget{background-color: #1a86d3;} .btTopToolsInMenuArea.btMenuHorizontal .topTools .btAccentIconWidget:hover, .btTopToolsInMenuArea.btMenuHorizontal .topBarInMenu .btAccentIconWidget:hover{color: #58a0d3;} .btAccentLightHeader.btMenuHorizontal .topTools .btAccentIconWidget, .btLightAccentHeader.btMenuHorizontal .topTools .btAccentIconWidget, .btAccentLightHeader.btMenuHorizontal .topBarInMenu .btAccentIconWidget, .btLightAccentHeader.btMenuHorizontal .topBarInMenu .btAccentIconWidget{background-color: #1a86d3;} .btMenuHorizontal .topTools .btAccentIconWidget:hover, .btMenuHorizontal .topBarInMenu .btAccentIconWidget:hover{color: #1a86d3;} .btTopToolsInMenuArea.btLightAccentHeader.btMenuHorizontal .topTools .btAccentIconWidget:hover, .btTopToolsInMenuArea.btLightAccentHeader.btMenuHorizontal .topBarInMenu .btAccentIconWidget:hover{background-color: #58a0d3;} .btLightSkin.btAccentLightHeader.btMenuHorizontal .btBelowLogoArea .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before, .btDarkSkin.btAccentLightHeader.btMenuHorizontal .btBelowLogoArea .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before, .btLightSkin.btAccentLightHeader.btMenuHorizontal .topBar .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before, .btDarkSkin.btAccentLightHeader.btMenuHorizontal .topBar .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before{color: #1a86d3;} .btLightSkin.btLightHeader.btMenuHorizontal .btBelowLogoArea .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:hover:before, .btDarkSkin.btLightHeader.btMenuHorizontal .btBelowLogoArea .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:hover:before, .btLightSkin.btLightHeader.btMenuHorizontal .topBar .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:hover:before, .btDarkSkin.btLightHeader.btMenuHorizontal .topBar .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:hover:before{color: #1a86d3;} .btLightSkin.btLightHeader.btMenuHorizontal .btBelowLogoArea .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before, .btDarkSkin.btLightHeader.btMenuHorizontal .btBelowLogoArea .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before, .btLightSkin.btLightHeader.btMenuHorizontal .topBar .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before, .btDarkSkin.btLightHeader.btMenuHorizontal .topBar .btIco.btIcoDefaultType.btIcoDefaultColor .btIcoHolder:hover:before{color: #1a86d3;} .btLightSkin.btAccentDarkHeader.btMenuHorizontal .mainHeader .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btDarkSkin.btAccentDarkHeader.btMenuHorizontal .mainHeader .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before{color: #1a86d3;} .btLightSkin.btAccentDarkHeader.btMenuHorizontal .mainHeader .btIco.btIcoDefaultType .btIcoHolder:hover:before, .btDarkSkin.btAccentDarkHeader.btMenuHorizontal .mainHeader .btIco.btIcoDefaultType .btIcoHolder:hover:before{color: #1a86d3;} .btLightSkin.btLightAccentHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btDarkSkin.btLightAccentHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before{color: #1a86d3;} .btLightSkin.btLightAccentHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType .btIcoHolder:hover:before, .btDarkSkin.btLightAccentHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType .btIcoHolder:hover:before{color: #1a86d3;} .btLightSkin.btLightAlternateHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btDarkSkin.btLightAlternateHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before{color: #58a0d3;} .btLightSkin.btLightAlternateHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType .btIcoHolder:hover:before, .btDarkSkin.btLightAlternateHeader.btMenuHorizontal .mainHeader .btLogoArea .btIco.btIcoDefaultType .btIcoHolder:hover:before{color: #58a0d3;} .btSpecialHeaderIcon .btIco .btIcoHolder:before, .btSpecialHeaderIcon .btIconWidgetTitle, .btSpecialHeaderIcon .btIconWidgetText{color: #58a0d3 !important;} .btLightSkin .btBox .btSearch button:hover, .btDarkSkin .btLightSkin .btBox .btSearch button:hover, .btLightSkin .btDarkSkin .btLightSkin .btBox .btSearch button:hover, .btDarkSkin .btBox .btSearch button:hover, .btLightSkin .btDarkSkin .btBox .btSearch button:hover, .btDarkSkin.btLightSkin .btDarkSkin .btBox .btSearch button:hover, .btLightSkin form.woocommerce-product-search button:hover, .btDarkSkin .btLightSkin form.woocommerce-product-search button:hover, .btLightSkin .btDarkSkin .btLightSkin form.woocommerce-product-search button:hover, .btDarkSkin form.woocommerce-product-search button:hover, .btLightSkin .btDarkSkin form.woocommerce-product-search button:hover, .btDarkSkin.btLightSkin .btDarkSkin form.woocommerce-product-search button:hover{background: #58a0d3 !important; border-color: #58a0d3 !important;} .topTools .widget_search button, .topBarInMenu .widget_search button{ background: #58a0d3;} .topTools .widget_search button:before, .topBarInMenu .widget_search button:before{ color: #58a0d3;} .topTools .widget_search button:hover, .topBarInMenu .widget_search button:hover{background: #2e7ab0;} .btIcoFilledType.btIcoAccentColor.btIconHexagonShape.btIco .btIcoHolder .hex{fill: #58a0d3;} .btIcoFilledType.btIcoAlternateColor.btIconHexagonShape.btIco .btIcoHolder .hex{fill: #1a86d3;} .btIcoOutlineType.btIcoAccentColor.btIconHexagonShape.btIco .btIcoHolder .hex{ stroke: #58a0d3;} .btIcoOutlineType.btIcoAlternateColor.btIconHexagonShape.btIco .btIcoHolder .hex{ stroke: #1a86d3;} .btLightSkin .btIconHexagonShape.btIcoOutlineType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoOutlineType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoOutlineType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btIconHexagonShape.btIcoOutlineType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btIconHexagonShape.btIcoOutlineType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btDarkSkin.btLightSkin .btDarkSkin .btIconHexagonShape.btIcoOutlineType.btIcoAccentColor.btIco:hover .btIcoHolder .hex{fill: #58a0d3; stroke: #58a0d3;} .btLightSkin .btIconHexagonShape.btIcoOutlineType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoOutlineType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoOutlineType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btIconHexagonShape.btIcoOutlineType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btIconHexagonShape.btIcoOutlineType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btDarkSkin.btLightSkin .btDarkSkin .btIconHexagonShape.btIcoOutlineType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex{fill: #1a86d3; stroke: #1a86d3;} .btLightSkin .btIconHexagonShape.btIcoFilledType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoFilledType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoFilledType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btIconHexagonShape.btIcoFilledType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btIconHexagonShape.btIcoFilledType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex, .btDarkSkin.btLightSkin .btDarkSkin .btIconHexagonShape.btIcoFilledType.btIcoAlternateColor.btIco:hover .btIcoHolder .hex{ stroke: #1a86d3;} .btLightSkin .btIconHexagonShape.btIcoFilledType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoFilledType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btLightSkin .btIconHexagonShape.btIcoFilledType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btDarkSkin .btIconHexagonShape.btIcoFilledType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btLightSkin .btDarkSkin .btIconHexagonShape.btIcoFilledType.btIcoAccentColor.btIco:hover .btIcoHolder .hex, .btDarkSkin.btLightSkin .btDarkSkin .btIconHexagonShape.btIcoFilledType.btIcoAccentColor.btIco:hover .btIcoHolder .hex{ stroke: #58a0d3;} .btIconHexagonShape .btIco.btIcoFilledType .btIcoHolder svg .hex{ fill: #58a0d3;} .btIconHexagonShape .btIco.btIcoFilledType:hover .btIcoHolder svg .hex{stroke: #58a0d3;} .btIconHexagonShape .btIco.btIcoOutlineType .btIcoHolder svg .hex{stroke: #58a0d3;} .btIconHexagonShape .btIco.btIcoOutlineType:hover .btIcoHolder svg .hex{stroke: #58a0d3; fill: #58a0d3;} .btIco.btIcoFilledType.btIcoAccentColor .btIcoHolder:before, .btIco.btIcoOutlineType.btIcoAccentColor:hover .btIcoHolder:before{-webkit-box-shadow: 0 0 0 1em #58a0d3 inset; box-shadow: 0 0 0 1em #58a0d3 inset;} .btIco.btIcoFilledType.btIcoAccentColor:hover .btIcoHolder:before, .btIco.btIcoOutlineType.btIcoAccentColor .btIcoHolder:before{-webkit-box-shadow: 0 0 0 1px #58a0d3 inset; box-shadow: 0 0 0 1px #58a0d3 inset; color: #58a0d3;} .btIco.btIcoFilledType.btIcoAlternateColor .btIcoHolder:before, .btIco.btIcoOutlineType.btIcoAlternateColor:hover .btIcoHolder:before{-webkit-box-shadow: 0 0 0 1em #1a86d3 inset; box-shadow: 0 0 0 1em #1a86d3 inset;} .btIco.btIcoFilledType.btIcoAlternateColor:hover .btIcoHolder:before, .btIco.btIcoOutlineType.btIcoAlternateColor .btIcoHolder:before{-webkit-box-shadow: 0 0 0 1px #1a86d3 inset; box-shadow: 0 0 0 1px #1a86d3 inset; color: #1a86d3;} .btLightSkin .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btLightSkin .btIco.btIcoDefaultType.btIcoDefaultColor:hover .btIcoHolder:before, .btDarkSkin .btLightSkin .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btDarkSkin .btLightSkin .btIco.btIcoDefaultType.btIcoDefaultColor:hover .btIcoHolder:before, .btLightSkin .btDarkSkin .btLightSkin .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btLightSkin .btDarkSkin .btLightSkin .btIco.btIcoDefaultType.btIcoDefaultColor:hover .btIcoHolder:before, .btDarkSkin .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btDarkSkin .btIco.btIcoDefaultType.btIcoDefaultColor:hover .btIcoHolder:before, .btLightSkin .btDarkSkin .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btLightSkin .btDarkSkin .btIco.btIcoDefaultType.btIcoDefaultColor:hover .btIcoHolder:before, .btDarkSkin.btLightSkin .btDarkSkin .btIco.btIcoDefaultType.btIcoAccentColor .btIcoHolder:before, .btDarkSkin.btLightSkin .btDarkSkin .btIco.btIcoDefaultType.btIcoDefaultColor:hover .btIcoHolder:before{color: #58a0d3;} .btLightSkin .btIco.btIcoDefaultType.btIcoAlternateColor .btIcoHolder:before, .btDarkSkin .btLightSkin .btIco.btIcoDefaultType.btIcoAlternateColor .btIcoHolder:before, .btLightSkin .btDarkSkin .btLightSkin .btIco.btIcoDefaultType.btIcoAlternateColor .btIcoHolder:before, .btDarkSkin .btIco.btIcoDefaultType.btIcoAlternateColor .btIcoHolder:before, .btLightSkin .btDarkSkin .btIco.btIcoDefaultType.btIcoAlternateColor .btIcoHolder:before, .btDarkSkin.btLightSkin .btDarkSkin .btIco.btIcoDefaultType.btIcoAlternateColor .btIcoHolder:before{color: #1a86d3;} .btIcoAccentColor span{color: #58a0d3;} .btIcoAlternateColor span{color: #1a86d3;} .btIcoDefaultColor:hover span{color: #58a0d3;} .btBtn{ font-family: "Montserrat";} .btnFilledStyle.btnAccentColor, .btnOutlineStyle.btnAccentColor:hover{background-color: #58a0d3; border: 2px solid #58a0d3;} .btnOutlineStyle.btnAccentColor, .btnFilledStyle.btnAccentColor:hover{ border: 2px solid #58a0d3; color: #58a0d3;} .btnOutlineStyle.btnAccentColor span, .btnFilledStyle.btnAccentColor:hover span, .btnOutlineStyle.btnAccentColor span:before, .btnFilledStyle.btnAccentColor:hover span:before, .btnOutlineStyle.btnAccentColor a, .btnFilledStyle.btnAccentColor:hover a, .btnOutlineStyle.btnAccentColor .btIco a:before, .btnFilledStyle.btnAccentColor:hover .btIco a:before, .btnOutlineStyle.btnAccentColor button, .btnFilledStyle.btnAccentColor:hover button{color: #58a0d3 !important;} .btnBorderlessStyle.btnAccentColor span, .btnBorderlessStyle.btnNormalColor:hover span, .btnBorderlessStyle.btnAccentColor span:before, .btnBorderlessStyle.btnNormalColor:hover span:before, .btnBorderlessStyle.btnAccentColor a, .btnBorderlessStyle.btnNormalColor:hover a, .btnBorderlessStyle.btnAccentColor .btIco a:before, .btnBorderlessStyle.btnNormalColor:hover .btIco a:before, .btnBorderlessStyle.btnAccentColor button, .btnBorderlessStyle.btnNormalColor:hover button{color: #58a0d3;} .btnFilledStyle.btnAlternateColor, .btnOutlineStyle.btnAlternateColor:hover{background-color: #1a86d3; border: 2px solid #1a86d3;} .btnOutlineStyle.btnAlternateColor, .btnFilledStyle.btnAlternateColor:hover{ border: 2px solid #1a86d3; color: #1a86d3;} .btnOutlineStyle.btnAlternateColor span, .btnFilledStyle.btnAlternateColor:hover span, .btnOutlineStyle.btnAlternateColor span:before, .btnFilledStyle.btnAlternateColor:hover span:before, .btnOutlineStyle.btnAlternateColor a, .btnFilledStyle.btnAlternateColor:hover a, .btnOutlineStyle.btnAlternateColor .btIco a:before, .btnFilledStyle.btnAlternateColor:hover .btIco a:before, .btnOutlineStyle.btnAlternateColor button, .btnFilledStyle.btnAlternateColor:hover button{color: #1a86d3 !important;} .btnBorderlessStyle.btnAlternateColor span, .btnBorderlessStyle.btnAlternateColor span:before, .btnBorderlessStyle.btnAlternateColor a, .btnBorderlessStyle.btnAlternateColor .btIco a:before, .btnBorderlessStyle.btnAlternateColor button{color: #1a86d3;} .btCounterHolder{font-family: "Montserrat";} .btCounterHolder .btCountdownHolder .days_text, .btCounterHolder .btCountdownHolder .hours_text, .btCounterHolder .btCountdownHolder .minutes_text, .btCounterHolder .btCountdownHolder .seconds_text{ font-family: Montserrat; color: #58a0d3;} .btProgressContent{font-family: "Montserrat";} .btProgressContent .btProgressAnim{ background-color: #58a0d3;} .btShowTitle{ border-left: 4px solid #58a0d3;} .btAccentColorBackground .btShowTitle{border-left: 4px solid #1a86d3;} .btPriceTable .btPriceTableHeader{background: #58a0d3;} .btPriceTableSticker{ font-family: "Montserrat";} .header .btSuperTitle{font-family: "Montserrat";} .header .btSubTitle{font-family: "Roboto";} .btDash.bottomDash .dash:after{ border-bottom: 4px solid #58a0d3;} .btDash.topDash .btSuperTitle:after, .btDash.topDash .btSuperTitle:before{ border-top: 1px solid #58a0d3;} .btNoMore{ font-family: Montserrat;} .btGridContent .header .btSuperTitle a:hover{color: #58a0d3;} .btCatFilter{ font-family: Montserrat;} .btCatFilter .btCatFilterItem:hover{color: #58a0d3;} .btCatFilter .btCatFilterItem.active{color: #58a0d3;} .nbs a .nbsItem .nbsDir{ font-family: "Montserrat";} .btLightSkin .btSimpleArrows .nbs a:hover:before, .btDarkSkin .btLightSkin .btSimpleArrows .nbs a:hover:before, .btLightSkin .btDarkSkin .btLightSkin .btSimpleArrows .nbs a:hover:before, .btDarkSkin .btSimpleArrows .nbs a:hover:before, .btLightSkin .btDarkSkin .btSimpleArrows .nbs a:hover:before, .btDarkSkin.btLightSkin .btDarkSkin .btSimpleArrows .nbs a:hover:before{color: #58a0d3 !important;} .neighboringArticles .nbs a .nbsItem .nbsDir{ font-family: 'Roboto',arial,sans-serif;} .neighboringArticles .nbs a:hover .nbsDir{color: #58a0d3;} .recentTweets small:before{ color: #58a0d3;} .btInfoBar .btInfoBarMeta p strong{color: #58a0d3;} .tabsHeader li{ font-family: "Montserrat";} .tabsVertical .tabAccordionTitle{ font-family: "Montserrat";} .btVisualizer{font-family: Montserrat;} form.wpcf7-form .wpcf7-submit{ background-color: #58a0d3;} .btAnimNav li.btAnimNavDot{ font-family: Montserrat;} .btAnimNav li.btAnimNavNext:hover, .btAnimNav li.btAnimNavPrev:hover{border-color: #58a0d3; color: #58a0d3;} .headline b.animate.animated{ color: #58a0d3;} .headline em.animate{ font-family: Roboto;} p.demo_store{ background-color: #58a0d3;} .woocommerce .woocommerce-info a: not(.button), .woocommerce .woocommerce-message a: not(.button), .woocommerce-page .woocommerce-info a: not(.button), .woocommerce-page .woocommerce-message a: not(.button){color: #58a0d3;} .woocommerce .woocommerce-message:before, .woocommerce .woocommerce-info:before, .woocommerce-page .woocommerce-message:before, .woocommerce-page .woocommerce-info:before{ color: #58a0d3;} .woocommerce a.button, .woocommerce input[type="submit"], .woocommerce button[type="submit"], .woocommerce input.button, .woocommerce input.alt:hover, .woocommerce a.button.alt:hover, .woocommerce .button.alt:hover, .woocommerce button.alt:hover, .woocommerce-page a.button, .woocommerce-page input[type="submit"], .woocommerce-page button[type="submit"], .woocommerce-page input.button, .woocommerce-page input.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce-page .button.alt:hover, .woocommerce-page button.alt:hover{ font-family: Montserrat;} .woocommerce a.button:hover, .woocommerce input[type="submit"]:hover, .woocommerce .button:hover, .woocommerce button:hover, .woocommerce input.alt, .woocommerce a.button.alt, .woocommerce .button.alt, .woocommerce button.alt, .woocommerce-page a.button:hover, .woocommerce-page input[type="submit"]:hover, .woocommerce-page .button:hover, .woocommerce-page button:hover, .woocommerce-page input.alt, .woocommerce-page a.button.alt, .woocommerce-page .button.alt, .woocommerce-page button.alt{ font-family: "Montserrat";} .woocommerce p.lost_password:before, .woocommerce-page p.lost_password:before{ color: #58a0d3;} .woocommerce form.login p.lost_password a:hover, .woocommerce-page form.login p.lost_password a:hover{color: #58a0d3;} .woocommerce .added:after, .woocommerce .loading:after, .woocommerce-page .added:after, .woocommerce-page .loading:after{ background-color: #58a0d3;} .woocommerce form .form-row .select2-container, .woocommerce-page form .form-row .select2-container{ font-family: "Montserrat";} .woocommerce div.product p.price, .woocommerce div.product span.price, .woocommerce-page div.product p.price, .woocommerce-page div.product span.price{ font-family: "Montserrat"; color: #58a0d3;} .woocommerce div.product .stock, .woocommerce-page div.product .stock{color: #58a0d3;} .woocommerce div.product a.reset_variations:hover, .woocommerce-page div.product a.reset_variations:hover{color: #58a0d3;} .woocommerce .added_to_cart, .woocommerce-page .added_to_cart{ font-family: Montserrat;} .woocommerce .products ul li.product .btPriceTableSticker, .woocommerce ul.products li.product .btPriceTableSticker, .woocommerce-page .products ul li.product .btPriceTableSticker, .woocommerce-page ul.products li.product .btPriceTableSticker{ background: #1a86d3;} .woocommerce .products ul li.product .price, .woocommerce ul.products li.product .price, .woocommerce-page .products ul li.product .price, .woocommerce-page ul.products li.product .price{ font-family: "Montserrat";} .woocommerce nav.woocommerce-pagination, .woocommerce-page nav.woocommerce-pagination{ font-family: "Montserrat";} .woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li a.next, .woocommerce nav.woocommerce-pagination ul li a.prev, .woocommerce nav.woocommerce-pagination ul li span.current, .woocommerce-page nav.woocommerce-pagination ul li a:focus, .woocommerce-page nav.woocommerce-pagination ul li a:hover, .woocommerce-page nav.woocommerce-pagination ul li a.next, .woocommerce-page nav.woocommerce-pagination ul li a.prev, .woocommerce-page nav.woocommerce-pagination ul li span.current{background: #58a0d3;} .woocommerce .star-rating span:before, .woocommerce-page .star-rating span:before{ color: #58a0d3;} .woocommerce p.stars a[class^="star-"].active:after, .woocommerce p.stars a[class^="star-"]:hover:after, .woocommerce-page p.stars a[class^="star-"].active:after, .woocommerce-page p.stars a[class^="star-"]:hover:after{color: #58a0d3;} .woocommerce-cart table.cart td.product-remove a.remove{ color: #58a0d3; border: 1px solid #58a0d3;} .woocommerce-cart table.cart td.product-remove a.remove:hover{background-color: #58a0d3;} .woocommerce-cart .cart_totals .discount td{color: #58a0d3;} .woocommerce-account header.title .edit{ color: #58a0d3;} .woocommerce-account header.title .edit:before{ color: #58a0d3;} .btLightSkin.woocommerce-page .product .headline a:hover, .btDarkSkin .btLightSkin.woocommerce-page .product .headline a:hover, .btLightSkin .btDarkSkin .btLightSkin.woocommerce-page .product .headline a:hover, .btDarkSkin.woocommerce-page .product .headline a:hover, .btLightSkin .btDarkSkin.woocommerce-page .product .headline a:hover, .btDarkSkin.btLightSkin .btDarkSkin.woocommerce-page .product .headline a:hover{color: #58a0d3;} .btQuoteBooking .btTotalNextWrapper{ font-family: "Montserrat";} .btQuoteBooking .btContactNext{ border: #58a0d3 2px solid; color: #58a0d3;} .btQuoteBooking .btContactNext:hover, .btQuoteBooking .btContactNext:active{background-color: #58a0d3 !important;} .btQuoteBooking .btQuoteSwitch:hover{-webkit-box-shadow: 0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2); box-shadow: 0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2);} .btQuoteBooking .btQuoteSwitch.on .btQuoteSwitchInner{ background: #58a0d3;} .btQuoteBooking .dd.ddcommon.borderRadiusTp .ddTitleText, .btQuoteBooking .dd.ddcommon.borderRadiusBtm .ddTitleText{ -webkit-box-shadow: 5px 0 0 #58a0d3 inset,0 2px 10px rgba(0,0,0,.2); box-shadow: 5px 0 0 #58a0d3 inset,0 2px 10px rgba(0,0,0,.2);} .btQuoteBooking .ui-slider .ui-slider-handle{ background: #58a0d3;} .btQuoteBooking .btQuoteBookingForm .btQuoteTotal{ background: #58a0d3;} .btQuoteBooking .btContactFieldMandatory.btContactFieldError input, .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea{border: 1px solid #58a0d3; -webkit-box-shadow: 0 0 0 1px #58a0d3 inset; box-shadow: 0 0 0 1px #58a0d3 inset;} .btQuoteBooking .btContactFieldMandatory.btContactFieldError .dd.ddcommon.borderRadius .ddTitleText{border: 1px solid #58a0d3; -webkit-box-shadow: 0 0 0 1px #58a0d3 inset; box-shadow: 0 0 0 1px #58a0d3 inset;} .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:hover, .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:hover{-webkit-box-shadow: 0 0 0 1px #58a0d3 inset,0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2); box-shadow: 0 0 0 1px #58a0d3 inset,0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2);} .btQuoteBooking .btContactFieldMandatory.btContactFieldError .dd.ddcommon.borderRadius:hover .ddTitleText{-webkit-box-shadow: 0 0 0 1px #58a0d3 inset,0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2); box-shadow: 0 0 0 1px #58a0d3 inset,0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2);} .btQuoteBooking .btContactFieldMandatory.btContactFieldError input:focus, .btQuoteBooking .btContactFieldMandatory.btContactFieldError textarea:focus{-webkit-box-shadow: 0 0 0 1px #58a0d3 inset,5px 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2); box-shadow: 0 0 0 1px #58a0d3 inset,5px 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2);} .btQuoteBooking .btContactFieldMandatory.btContactFieldError .dd.ddcommon.borderRadiusTp .ddTitleText{-webkit-box-shadow: 0 0 0 1px #58a0d3 inset,5px 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2); box-shadow: 0 0 0 1px #58a0d3 inset,5px 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2);} .btQuoteBooking .btSubmitMessage{color: #58a0d3;} .btDatePicker .ui-datepicker-header{ background-color: #58a0d3;} .btQuoteBooking .btContactSubmit{font-family: "Montserrat"; background-color: #58a0d3; border: 1px solid #58a0d3;} .btQuoteBooking .btContactSubmit:hover{ color: #58a0d3;} .btPayPalButton:hover{-webkit-box-shadow: 0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2); box-shadow: 0 0 0 #58a0d3 inset,0 1px 5px rgba(0,0,0,.2);} #btSettingsPanel #btSettingsPanelToggler:before{ color: #58a0d3;} #btSettingsPanel h4{ background-color: #58a0d3;} #btSettingsPanel .btSettingsPanelRow.btAccentColorRow .trigger, #btSettingsPanel .btSettingsPanelRow.btAccentColorRow select{border-color: #58a0d3;} #btSettingsPanel .btSettingsPanelRow.btAlternateColorRow .trigger, #btSettingsPanel .btSettingsPanelRow.btAlternateColorRow select{border-color: #1a86d3;} .wp-block-button__link:hover{color: #58a0d3 !important;}
.tagcloud a { color: #ffffff; } .btTopToolsInMenuArea.btMenuHorizontal .topTools .btAccentIconWidget, .btTopToolsInMenuArea.btMenuHorizontal .topBarInMenu .btAccentIconWidget { background-color: #02b3f9; }</style>
<link rel="stylesheet" id="industrial-print-css" href="./../wp-content/themes/industrial/print.css?ver=5.8" type="text/css" media="print">
<style id="elementor-frontend-inline-css" type="text/css">@font-face{font-family:eicons;src:url(./../wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.eot?5.10.0);src:url(./../wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.eot?5.10.0#iefix) format("embedded-opentype"),url(./../wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff2?5.10.0) format("woff2"),url(./../wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff?5.10.0) format("woff"),url(./../wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.ttf?5.10.0) format("truetype"),url(./../wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.svg?5.10.0#eicon) format("svg");font-weight:400;font-style:normal}</style>
<style id="font-awesome-official-v4shim-inline-css" type="text/css">@font-face {
font-family: "FontAwesome";
font-display: block;
src: url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-brands-400.eot"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-brands-400.woff2") format("woff2"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-brands-400.woff") format("woff"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-brands-400.ttf") format("truetype"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-brands-400.svg#fontawesome") format("svg");
}

@font-face {
font-family: "FontAwesome";
font-display: block;
src: url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.eot"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.eot?#iefix") format("embedded-opentype"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.woff2") format("woff2"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.woff") format("woff"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.ttf") format("truetype"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-solid-900.svg#fontawesome") format("svg");
}

@font-face {
font-family: "FontAwesome";
font-display: block;
src: url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-regular-400.eot"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-regular-400.woff2") format("woff2"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-regular-400.woff") format("woff"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-regular-400.ttf") format("truetype"),
		url("https://use.fontawesome.com/releases/v5.13.0/webfonts/fa-regular-400.svg#fontawesome") format("svg");
unicode-range: U+F004-F005,U+F007,U+F017,U+F022,U+F024,U+F02E,U+F03E,U+F044,U+F057-F059,U+F06E,U+F070,U+F075,U+F07B-F07C,U+F080,U+F086,U+F089,U+F094,U+F09D,U+F0A0,U+F0A4-F0A7,U+F0C5,U+F0C7-F0C8,U+F0E0,U+F0EB,U+F0F3,U+F0F8,U+F0FE,U+F111,U+F118-F11A,U+F11C,U+F133,U+F144,U+F146,U+F14A,U+F14D-F14E,U+F150-F152,U+F15B-F15C,U+F164-F165,U+F185-F186,U+F191-F192,U+F1AD,U+F1C1-F1C9,U+F1CD,U+F1D8,U+F1E3,U+F1EA,U+F1F6,U+F1F9,U+F20A,U+F247-F249,U+F24D,U+F254-F25B,U+F25D,U+F267,U+F271-F274,U+F279,U+F28B,U+F28D,U+F2B5-F2B6,U+F2B9,U+F2BB,U+F2BD,U+F2C1-F2C2,U+F2D0,U+F2D2,U+F2DC,U+F2ED,U+F328,U+F358-F35B,U+F3A5,U+F3D1,U+F410,U+F4AD;
}</style>
<script  data-rocket-type="text/javascript" src="./../wp-includes/js/jquery/jquery.min.js?ver=3.6.0" id="jquery-core-js" defer></script>
<script  data-rocket-type="text/javascript" src="./../wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2" id="jquery-migrate-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/bold-page-builder/script_fe.js?ver=1620657753" id="bt_bb_fe-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/industrial/bt_elements.js?ver=1620657753" id="bt_plugin_enqueue-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/modal-for-elementor/js/jquery.cookie.js?ver=1620657753" id="jquery-cookie-js" defer></script>
<script  data-rocket-type="text/javascript" src="./../wp-content/themes/industrial/framework/js/html5shiv.min.js?ver=1" id="html5shiv-min-js" defer></script>
<script  data-rocket-type="text/javascript" src="./../wp-content/themes/industrial/framework/js/respond.min.js?ver=1" id="respond-min-js" defer></script>
<script  data-rocket-type="text/javascript" id="industrial-header-misc-js-before">
window.BoldThemesURI = "./wp-content/themes/industrial"; window.BoldThemesAJAXURL = "./wp-admin/admin-ajax.php";window.boldthemes_text = [];window.boldthemes_text.previous = 'previous';window.boldthemes_text.next = 'next';
</script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/themes/industrial/framework/js/header.misc.js?ver=1620657753" id="industrial-header-misc-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/sticky-header-effects-for-elementor/assets/js/she-header.js?ver=1620657753" id="she-header-js" defer></script>
<link rel="https://api.w.org/" href="./../wp-json/index.html">
<link rel="alternate" type="application/json" href="./../wp-json/wp/v2/pages/3408/index.html">
<meta name="generator" content="WordPress 5.8">
<link rel="shortlink" href="./../index.html?p=3408">
<link rel="alternate" type="application/json+oembed" href="./../wp-json/oembed/1.0/embed/index.html?url=https%3A%2F%2F%2Factive-pharmaceutical-ingredients%2F">
<link rel="alternate" type="text/xml+oembed" href="./../wp-json/oembed/1.0/embed/index.html?url=https%3A%2F%2F%2Factive-pharmaceutical-ingredients%2F&#038;format=xml">
<script  data-rocket-type="text/javascript">
            ( function () {
                window.lae_fs = { can_use_premium_code: false};
            } )();
        </script>
<link rel="preload" as="font" href="./../wp-content/themes/industrial/fonts/Productivity.woff?uo8kwk" crossorigin>
<link rel="preload" as="font" href="./../wp-content/themes/industrial/fonts/Development.ttf?uo8kwk" crossorigin>
<link rel="preload" as="font" href="./../wp-content/themes/industrial/fonts/Construction.ttf?uo8kwk" crossorigin>
<link rel="preload" as="font" href="./../wp-content/themes/industrial/fonts/CraftEssential.ttf?uo8kwk" crossorigin>
<link rel="preload" as="font" href="./../wp-content/themes/industrial/fonts/Pe-icon-7-stroke.woff?d7yf1v" crossorigin>
<link rel="icon" href="./../wp-content/uploads/2018/10/cropped-cropped-imgonline-com-ua-Compressed-09lij2UbRT-com-1-32x32.jpg" sizes="32x32">
<link rel="icon" href="./../wp-content/uploads/2018/10/cropped-cropped-imgonline-com-ua-Compressed-09lij2UbRT-com-1-192x192.jpg" sizes="192x192">
<link rel="apple-touch-icon" href="./../wp-content/uploads/2018/10/cropped-cropped-imgonline-com-ua-Compressed-09lij2UbRT-com-1-180x180.jpg">
<meta name="msapplication-TileImage" content="./../wp-content/uploads/2018/10/cropped-cropped-imgonline-com-ua-Compressed-09lij2UbRT-com-1-270x270.jpg">
<noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style></noscript>

<script  async src="//www.googletagmanager.com/gtag/js?id=UA-124610061-1"></script>
<script >
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-124610061-1');
	
</script>

<script  async src="//www.googletagmanager.com/gtag/js?id=AW-634803173"></script>
<script >
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-634803173');
</script>

<script >
  gtag('event', 'conversion', {'send_to': 'AW-634803173/aDeACK-KstABEOWn2a4C'});
</script>

<script >(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJ8SPBQ');</script>

<script async src="./../cdn-cgi/bm/cv/669835187/api.js"></script>
</head>
<body class="page-template-default page page-id-3408 bt_bb_plugin_active bt_bb_fe_preview_toggle has-navmenu has-megamenu bodyPreloader btMenuLeftEnabled btMenuBelowLogo btStickyEnabled btHideHeadline btLightSkin btTopToolsInMenuArea btRemovePreloader btSoftRoundedButtons btLightAlternateHeader btNoSidebar cookies-not-set elementor-default elementor-kit-3445 elementor-page elementor-page-3408" data-autoplay="0">

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJ8SPBQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<div class="btPageWrap" id="top">
<header class="mainHeader btClear gutter ">
<div class="port">
<div class="btLogoArea menuHolder btClear">
<span class="btVerticalMenuTrigger">&nbsp;<span class="btIco btIcoDefaultType"><a href="#" target="_self" data-ico-fa="&#xf0c9;" class="btIcoHolder"></a></span></span>
<span class="btHorizontalMenuTrigger">&nbsp;<span class="btIco btIcoDefaultType"><a href="#" target="_self" data-ico-fa="&#xf0c9;" class="btIcoHolder"></a></span></span>
<div class="logo">
<span>
<a href="./../index.html"><img class="btMainLogo" data-hw="1" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Ikigai&reg; Corporation" data-lazy-src="./../wp-content/uploads/2020/05/logo-2.png"><noscript><img class="btMainLogo" data-hw="1" src="./../wp-content/uploads/2020/05/logo-2.png" alt="Ikigai&reg; Corporation"></noscript>
<img class="btAltLogo" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="Ikigai&reg; Corporation" data-lazy-src="./../wp-content/uploads/2018/10/cropped-imgonline-com-ua-Compressed-09lij2UbRT-com.jpg"><noscript><img class="btAltLogo" src="./../wp-content/uploads/2018/10/cropped-imgonline-com-ua-Compressed-09lij2UbRT-com.jpg" alt="Ikigai&reg; Corporation"></noscript></a> </span>
</div>
<div class="topBarInLogoArea">
<div class="topBarInLogoAreaCell">
<span class="btIconWidget btAccentIconWidget btWidgetWithText"><span class="btIconWidgetIcon"><span class="btIco btIcoDefaultType btIcoDefaultColor"><span data-ico-pr="&#xf10f;" class="btIcoHolder"></span></span></span><span class="btIconWidgetContent"><span class="btIconWidgetTitle">Working hours:</span><span class="btIconWidgetText">Mon - Fri 9.00 - 18.00</span></span></span> </div>
</div>
</div>
<div class="btBelowLogoArea btClear"> <div class="menuPort">
<div class="topBarInMenu">
<div class="topBarInMenuCell">
<span id="time610e3a31c10e7" class="btIconWidget"><span class="btIconWidgetIcon"><span class="btIco btIcoDefaultType btIcoDefaultColor"><span data-ico-fa="&#xf017;" class="btIcoHolder"></span></span></span><span class="btIconWidgetContent"><span class="btIconWidgetTitle">Hong Kong time</span><span class="btIconWidgetText"></span></span></span><div class="btTopBox widget_search">
<h2 class="widgettitle">Search</h2>
<div class="btSearch">
<span class="btIco btIcoDefaultType btIcoDefaultColor"><a href="#" target="_self" data-ico-fa="&#xf002;" class="btIcoHolder" style="color:#fff"></a></span><div class="btSearchInner gutter" role="search">
<div class="btSearchInnerContent port">
<form action="./../index.html" method="get">
<input type="text" name="s" placeholder="Looking for..." class="untouched">
<button type="submit" data-icon="&#xf105;"></button>
</form>
<div class="btSearchInnerClose"><span class="btIco "><a href="#" target="_self" data-ico-fa="&#xf00d;" class="btIcoHolder"></a></span></div>
</div>
</div>
</div>
</div> </div>
</div>
<nav>
<ul id="menu-primary-menu" class="menu">
<li id="menu-item-3253" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3253"><a title="						" href="./../index.html">Home</a></li>
<li id="menu-item-3403" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3403">
<a href="./../about-us/index.html">About us</a><ul class="sub-menu">
<li id="menu-item-3399" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3399"><a href="./../about-us/index.html#company_profile">Company Profile/ Who we are?</a></li>
<li id="menu-item-3400" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3400"><a href="./../about-us/index.html#vision&#038;values">Vision &#038; Values</a></li>
<li id="menu-item-3401" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3401"><a href="./../about-us/index.html#business_segment">Business Segments</a></li>
<li id="menu-item-3402" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3402"><a href="./../about-us/index.html#geographic_spread">Geographic spread</a></li>
</ul>
</li>
<li id="menu-item-3459" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3459"><a href="./../our-technology/index.html">Our Technology</a></li>
<li id="menu-item-3256" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-3256">
<a title="						" href="./../services/index.html">Product Portfolio</a><ul class="sub-menu">
<li id="menu-item-3415" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3408 current_page_item menu-item-3415"><a href="./index.html" aria-current="page">Active pharmaceutical ingredients</a></li>
<li id="menu-item-3868" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3868"><a href="./../pharmaceutical_intermediates/index.html">Pharmaceutical intermediates</a></li>
<li id="menu-item-3414" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3414"><a href="./../pharmaceutical_excipients/index.html">Pharmaceutical excipients</a></li>
</ul>
</li>
<li id="menu-item-3872" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3872">
<a href="./../policies/index.html">Policies</a><ul class="sub-menu">
<li id="menu-item-3497" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-3497"><a href="./../services/privacy-policy/index.html">Privacy Statement</a></li>
<li id="menu-item-3739" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3739"><a href="./../services/ordering-details-terms-and-conditions/index.html">Ordering Details, Terms, and Conditions</a></li>
<li id="menu-item-3738" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3738"><a href="./../services/browser-recommendation/index.html">Browser Recommendation</a></li>
<li id="menu-item-3737" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3737"><a href="./../services/new-product-suggestion/index.html">New Product Suggestion</a></li>
</ul>
</li>
<li id="menu-item-3594" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3594"><a href="./../services/partner_with_us/index.html">Partner with us</a></li>
<li id="menu-item-3494" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3494"><a href="./../careers/index.html">Careers</a></li>
<li id="menu-item-4734" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4734"><a href="./../library/index.html">Library</a></li>
<li id="menu-item-3438" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3438"><a href="./../contact/index.html">Contact</a></li>
</ul> </nav>
</div>
</div>
</div>
</header>

<div class="container" style="
   
    font-size: xx-large;
    font-weight: 500;
    padding-top: 45vh;
    padding-left: 5vh;

">

<!--page-content-here-->
<?php
 
if($_POST) {
    $visitor_name = "";
    $visitor_subject = "New subject";
    $visitor_email = "";
    $visitor_message = "";
     
    if(isset($_POST['visitor_name'])) {
      $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }
    if(isset($_POST['visitor_email'])){
        $recipient = "v.dotsenko@techage.eu";
    }
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
     
    if(mail($recipient, $email_title, $visitor_message, $headers)) {
        echo "<p>Thank you, $visitor_name, your message was successfully sent! <br> We will write back to you soon.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}

 
?>
<!--page-content-end-->
</div>
<div class="bt_bb_wrapper"><section id="bt_section610e3a31c4f1c" data-parallax="0.7" data-parallax-offset="0" class="boldSection btDivider topSpaced bottomSemiSpaced btDarkSkin gutter boxed inherit btParallax" style="background-color:#1a86d3  !important;"><div class="port"><div class="boldCell"><div class="boldCellInner"><div class="boldRow "><div class="boldRowInner">
<div class="rowItem col-md-3 col-sm-6 col-ms-12 btTextLeft" data-width="3"><div class="rowItemContent">
<header class="header btClear small btDash bottomDash  regular"><div class="btSuperTitle"><span>HONG KONG</span></div>
<div class="dash"><h4><span class="headline">Headquarter</span></h4></div></header><span class="btIco btIcoDefaultType btIcoSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../index.html" target="no_target" data-ico-es="&#xe964;" class="btIcoHolder"><span>+852 3575 9046 </span></a></span><div class="btClear btSeparator noBorder"><hr></div>
<span class="btIco btIcoDefaultType btIcoSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../index.html" target="_self" data-ico-fa="&#xf0c1;" class="btIcoHolder"><span>www.ikigaicorporation.com</span></a></span><div class="btClear btSeparator noBorder"><hr></div>
<div class="bpgPhoto btDefaultHoverType">
<a href="./../index.html" target="_self" title=""></a>
<div class="boldPhotoBox"><div class="bpbItem"><div class="btImage">
<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" title="" data-lazy-src="./../wp-content/uploads/2020/05/HK-e1588760431256.png"><noscript><img src="./../wp-content/uploads/2020/05/HK-e1588760431256.png" alt="" title=""></noscript>
</div></div></div>
<div class="captionPane btDarkSkin btTextCenter">
<div class="captionTable">
<div class="captionCell">
<div class="captionTxt"></div>
</div>
</div>
</div>
</div>
</div></div>
<div class="rowItem col-md-6 col-sm-12 btTextLeft" data-width="6"><div class="rowItemContent">
<header class="header btClear small btDash bottomDash  regular"><div class="btSuperTitle"><span>LOCATIONS</span></div>
<div class="dash"><h4><span class="headline">Our network</span></h4></div></header><div class="btClear btSeparator bottomSmallSpaced noBorder"><hr></div>
<div class="boldRow "><div class="boldRowInner">
<div class="rowItem rowInnerItem col-sm-6  btTextLeft"><div class="rowItemContent">
<div class="bpgPhoto btDefaultHoverType"><div class="btImage">
<img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" alt="" title="						" data-lazy-src="./../wp-content/uploads/2016/10/world-dot-map-gray-320x156.png"><noscript><img src="./../wp-content/uploads/2016/10/world-dot-map-gray-320x156.png" alt="" title="						"></noscript>
</div></div>
<div class="btClear btSeparator topSmallSpaced noBorder"><hr></div>
</div></div>
<div class="rowItem rowInnerItem col-sm-6  btTextLeft"><div class="rowItemContent">
<header class="header btClear small  "><div class="btSuperTitle"><span>OUR NETWORK</span></div></header><div class="btClear btSeparator bottomExtraSmallSpaced noBorder"><hr></div>
<span class="btIco btIcoDefaultType btIcoExtraSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../contact/index.html" target="no_target" data-ico-fa="&#xf041;" class="btIcoHolder"><span>Asia</span></a></span><span class="btIco btIcoDefaultType btIcoExtraSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../contact/index.html" target="no_target" data-ico-fa="&#xf041;" class="btIcoHolder"><span>Americas</span></a></span><span class="btIco btIcoDefaultType btIcoExtraSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../contact/index.html" target="no_target" data-ico-fa="&#xf041;" class="btIcoHolder"><span>Middle East</span></a></span><span class="btIco btIcoDefaultType btIcoExtraSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../contact/index.html" target="no_target" data-ico-fa="&#xf041;" class="btIcoHolder"><span>Europe</span></a></span><span class="btIco btIcoDefaultType btIcoExtraSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../contact/index.html" target="no_target" data-ico-fa="&#xf041;" class="btIcoHolder"><span>Africa</span></a></span><span class="btIco btIcoDefaultType btIcoExtraSmallSize btIcoDefaultColor btIconCircleShape"><a href="./../contact/index.html" target="no_target" data-ico-fa="&#xf041;" class="btIcoHolder"><span>Oceania</span></a></span>
</div></div>
</div></div>
<div class="btClear btSeparator bottomExtraSmallSpaced noBorder"><hr></div>
<div class="btClear btSeparator bottomSemiSpaced noBorder"><hr></div>
</div></div>
<div class="rowItem col-md-3 col-sm-6 col-ms-12 btTextLeft" data-width="3"><div class="rowItemContent">
<header class="header btClear small btDash bottomDash  regular"><div class="btSuperTitle"><span>GET IN TOUCH</span></div>
<div class="dash"><h4><span class="headline">Follow us</span></h4></div></header><div class="btClear btSeparator bottomSmallSpaced noBorder"><hr></div>
<span class="btIco btIcoFilledType btIcoBigSize btIcoAccentColor btIconCircleShape"><a href="https://www.facebook.com/ikigaicorporationcom" target="no_target" data-ico-fa="&#xf09a;" class="btIcoHolder"></a></span><span class="btIco btIcoFilledType btIcoBigSize btIcoAccentColor btIconCircleShape"><a href="https://www.instagram.com/ikigaicorporation" target="no_target" data-ico-fa="&#xf16d;" class="btIcoHolder"></a></span><span class="btIco btIcoFilledType btIcoBigSize btIcoAccentColor btIconCircleShape"><a href="https://www.google.com/maps/place/IKIGAI+CORPORATION+LTD/@22.3937048,113.9694348,17z/data=!3m1!4b1!4m5!3m4!1s0x3403fb18add189e3:0xccf4eec041856f0d!8m2!3d22.3936999!4d113.9716288" target="no_target" data-ico-fa="&#xf1a0;" class="btIcoHolder"></a></span><span class="btIco btIcoFilledType btIcoBigSize btIcoAccentColor btIconCircleShape"><a href="https://wa.me/message/UZHAWI3JZQDVB1" target="no_target" data-ico-fa="&#xf232;" class="btIcoHolder"></a></span><div class="btClear btSeparator bottomSemiSpaced noBorder"><hr></div>
</div></div>
</div></div></div></div></div></section></div>
<footer>
<section class="boldSection btSiteFooterWidgets gutter topSpaced bottomSemiSpaced btDoubleRowPadding">
<div class="port">
<div class="boldRow btTextLeft" id="boldSiteFooterWidgetsRow">
<div class="btBox widget_search">
<h4><span>Search</span></h4>
<div class="btSearch">
<span class="btIco btIcoDefaultType btIcoDefaultColor"><a href="#" target="_self" data-ico-fa="&#xf002;" class="btIcoHolder" style="color:#fff"></a></span><div class="btSearchInner gutter" role="search">
<div class="btSearchInnerContent port">
<form action="./../index.html" method="get">
<input type="text" name="s" placeholder="Looking for..." class="untouched">
<button type="submit" data-icon="&#xf105;"></button>
</form>
<div class="btSearchInnerClose"><span class="btIco "><a href="#" target="_self" data-ico-fa="&#xf00d;" class="btIcoHolder"></a></span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> <section class="boldSection gutter btSiteFooter btGutter">
<div class="port">
<div class="boldRow">
<div class="rowItem btFooterCopy col-md-6 col-sm-12 btTextLeft">
<p class="copyLine">Ikigai Corporation Company is a leading pharmaceutical contract development and manufacturing organisation (CDMO) for both APIs and finished dose forms.</p> </div>
<div class="rowItem btFooterMenu col-md-6 col-sm-12 btTextRight">
<ul id="menu-primary-menu-1" class="menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3253"><a title="						" href="./../index.html">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3403"><a href="./../about-us/index.html">About us</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3459"><a href="./../our-technology/index.html">Our Technology</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-3256"><a title="						" href="./../services/index.html">Product Portfolio</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3872"><a href="./../policies/index.html">Policies</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3594"><a href="./../services/partner_with_us/index.html">Partner with us</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3494"><a href="./../careers/index.html">Careers</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4734"><a href="./../library/index.html">Library</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3438"><a href="./../contact/index.html">Contact</a></li>
</ul> </div>
</div>
</div>
</section>
</footer>
</div>
<script >window.addEventListener('DOMContentLoaded', function() {
				(function( $ ) {
					$( document ).ready(function() {
						
						var time_notation = '24';
						
						var time = function() {
							
							if ( time_notation == '12' ) {
								var time = moment().tz( 'Asia/Hong_Kong' ).format( 'h:mm A' );
							} else {
								var time = moment().tz( 'Asia/Hong_Kong' ).format( 'H:mm' );
							}

							$( '#time610e3a31c10e7 .btIconWidgetText' ).html( time );
						}
						setInterval( function() {
							time();
						}, 1000 );
						time();
					});
				})( jQuery );
			});</script>
<script  data-rocket-type="text/javascript" src="./../wp-includes/js/comment-reply.min.js?ver=5.8" id="comment-reply-js" defer></script>
<script type="06cd7e663a0e46d4271fe72d-text/javascript" id="buttonizer_frontend_javascript-js-extra">
/* <![CDATA[ */
var buttonizer_ajax = {"ajaxurl":".\/wp-admin\/admin-ajax.php","version":"2.4.3","buttonizer_path":".\/wp-content\/plugins\/buttonizer-multifunctional-button","buttonizer_assets":".\/wp-content\/plugins\/buttonizer-multifunctional-button\/assets\/","base_url":".","current":[],"in_preview":"","is_admin":"","cache":"ec7e88ea4f3f1891d22d4075828b5b63","enable_ga_clicks":"1"};
/* ]]> */
</script>
<script  data-rocket-type="text/javascript" src="./../wp-content/plugins/buttonizer-multifunctional-button/assets/frontend.min.js?v=7ab4fd8a7cd8bd136942183145de39a0&#038;ver=5.8" id="buttonizer_frontend_javascript-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/modal-for-elementor/js/bootstrap.js?ver=1620657753" id="bootstrap-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/modal-for-elementor/js/popup.js?ver=1620657753" id="modal-popup-js-js" defer></script>
<script  data-rocket-type="text/javascript" id="rocket-browser-checker-js-after">
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
</script>
<script type="06cd7e663a0e46d4271fe72d-text/javascript" id="rocket-preload-links-js-extra">
/* <![CDATA[ */
var RocketPreloadLinksConfig = {"excludeUris":"\/(.+\/)?feed\/?.+\/?|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/wp-admin\/|\/logout\/|\/pudra\/","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm","siteUrl":".","onHoverDelay":"100","rateThrottle":"3"};
/* ]]> */
</script>
<script  data-rocket-type="text/javascript" id="rocket-preload-links-js-after">
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
</script>
<script  data-rocket-type="text/javascript" src="./../wp-content/themes/industrial/framework/js/slick.min.js?ver=5.8" id="slick-min-js" defer></script>
<script  data-rocket-type="text/javascript" src="./../wp-content/themes/industrial/framework/js/jquery.magnific-popup.min.js?ver=5.8" id="jquery-magnific-popup-min-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/themes/industrial/framework/js/iscroll.js?ver=1620657753" id="iscroll-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/themes/industrial/framework/js/fancySelect.js?ver=1620657753" id="fancySelect-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/themes/industrial/framework/js/misc.js?ver=1620657753" id="industrial-misc-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/themes/industrial/framework/js/dir.hover.js?ver=1620657753" id="industrial-dir-hover-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/themes/industrial/framework/js/sliders.js?ver=1620657753" id="industrial-sliders-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/themes/industrial/framework/js/bt_parallax.js?ver=1620657753" id="industrial-bt-parallax-js" defer></script>
<script type="06cd7e663a0e46d4271fe72d-text/javascript" id="cookie-notice-front-js-extra">
/* <![CDATA[ */
var cnArgs = {"ajaxUrl":".\/wp-admin\/admin-ajax.php","nonce":"870ef1de7b","hideEffect":"fade","position":"bottom","onScroll":"1","onScrollOffset":"100","onClick":"0","cookieName":"cookie_notice_accepted","cookieTime":"604800","cookieTimeRejected":"604800","cookiePath":"\/","cookieDomain":"","redirection":"0","cache":"1","refuse":"0","revokeCookies":"0","revokeCookiesOpt":"automatic","secure":"1"};
/* ]]> */
</script>
<script  async data-rocket-type="text/javascript" src="./../wp-content/plugins/cookie-notice/includes/../js/front.min.js?ver=2.1.0" id="cookie-notice-front-js"></script>
<script type="06cd7e663a0e46d4271fe72d-text/javascript" src="./../wp-includes/js/wp-embed.min.js?ver=5.8" id="wp-embed-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/industrial/moment.js?ver=1620657753" id="bt_moment-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/industrial/moment-timezone-with-data.js?ver=1620657753" id="bt_moment_timezone-js" defer></script>
<script  data-rocket-type="text/javascript" src="./../wp-content/plugins/industrial/imagesloaded.pkgd.min.js?ver=5.8" id="boldthemes_imagesloaded-js" defer></script>
<script  data-rocket-type="text/javascript" src="./../wp-content/plugins/industrial/packery.pkgd.min.js?ver=5.8" id="boldthemes_packery-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/industrial/bt_grid_tweak.js?ver=1620658021" id="boldthemes_grid_tweak-js" defer></script>
<script  data-minify="1" data-rocket-type="text/javascript" src="./../wp-content/cache/min/1/wp-content/plugins/industrial/bt_grid.js?ver=1620658021" id="boldthemes_grid-js" defer></script>

<div id="cookie-notice" role="banner" class="cookie-notice-hidden cookie-revoke-hidden cn-position-bottom" aria-label="Cookie Notice" style="background-color: rgba(0,0,0,1);">
<div class="cookie-notice-container" style="color: #fff;">
<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button bootstrap" aria-label="I AGREE, thank you.">I AGREE, thank you.</a><a href="./../services/privacy-policy/index.html" target="_blank" id="cn-more-info" class="cn-more-info cn-button bootstrap" aria-label="Privacy policy">Privacy policy</a></span><a href="javascript:void(0);" id="cn-close-notice" data-cookie-set="accept" class="cn-close-icon" aria-label="I AGREE, thank you."></a>
</div>
</div>
 <script  data-rocket-type="text/javascript">window.addEventListener('DOMContentLoaded', function() {
        jQuery(document).ready(function ($) {
            //$( document ).ajaxStart(function() {
            //});

			
            for (var i = 0; i < document.forms.length; ++i) {
                var form = document.forms[i];
				if ($(form).attr("method") != "get") { $(form).append('<input type="hidden" name="kNEuIGs" value="ToGFEeP2A" />'); }
if ($(form).attr("method") != "get") { $(form).append('<input type="hidden" name="-rgtSF" value="PeoHbQdFwGR2kU" />'); }
            }

			
            $(document).on('submit', 'form', function () {
				if ($(this).attr("method") != "get") { $(this).append('<input type="hidden" name="kNEuIGs" value="ToGFEeP2A" />'); }
if ($(this).attr("method") != "get") { $(this).append('<input type="hidden" name="-rgtSF" value="PeoHbQdFwGR2kU" />'); }
                return true;
            });

			
            jQuery.ajaxSetup({
                beforeSend: function (e, data) {

                    //console.log(Object.getOwnPropertyNames(data).sort());
                    //console.log(data.type);

                    if (data.type !== 'POST') return;

                    if (typeof data.data === 'object' && data.data !== null) {
						data.data.append("kNEuIGs", "ToGFEeP2A");
data.data.append("-rgtSF", "PeoHbQdFwGR2kU");
                    }
                    else {
                        data.data =  data.data + '&kNEuIGs=ToGFEeP2A&-rgtSF=PeoHbQdFwGR2kU';
                    }
                }
            });

        });
	});</script>
<script type="06cd7e663a0e46d4271fe72d-text/javascript">window.lazyLoadOptions={elements_selector:"img[data-lazy-src],.rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}};window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script><script data-no-minify="1" async src="./../wp-content/plugins/wp-rocket/assets/js/lazyload/16.1/lazyload.min.js" type="06cd7e663a0e46d4271fe72d-text/javascript"></script><script src="./../cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="06cd7e663a0e46d4271fe72d-|49" defer></script><script type="text/javascript">(function(){window['__CF$cv$params']={r:'67b14aa0bd2192f8',m:'43df34172ca0f4f68ebbecbcf9a5a00029aba502-1628347556-1800-AVTlhDW4t9yA80xF5UdjoXKJiq7B7xNjRkAuPvixBxFixLosCDHCFG2h63XgOhBwRiCIDj2P9TKIHYBnV4kRgrcIoT5BrroyHzIFxwvjgkVmd115AGEcIIJPkP66qAQCQm/6tYO8Bkqd31TIv3OlW/z8inBUFtnaZsPjnH1RBzcf',s:[0xc47a4f690a,0xb1c6885590],}})();</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"67b14aa0bd2192f8","version":"2021.7.0","r":1,"token":"e3b748a178054eff95051ca851daefa1","si":10}'></script>
</body>
</html>