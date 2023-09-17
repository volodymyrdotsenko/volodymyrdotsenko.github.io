(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.moment=factory()}(this,function(){'use strict';var hookCallback;function utils_hooks__hooks(){return hookCallback.apply(null,arguments)}
function setHookCallback(callback){hookCallback=callback}
function isArray(input){return Object.prototype.toString.call(input)==='[object Array]'}
function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==='[object Date]'}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i))}
return res}
function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i]}}
if(hasOwnProp(b,'toString')){a.toString=b.toString}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf}
return a}
function create_utc__createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,!0).utc()}
function defaultParsingFlags(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}
function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags()}
return m._pf}
function valid__isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);m._isValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated;if(m._strict){m._isValid=m._isValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined}}
return m._isValid}
function valid__createInvalid(flags){var m=create_utc__createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags)}else{getParsingFlags(m).userInvalidated=!0}
return m}
function isUndefined(input){return input===void 0}
var momentProperties=utils_hooks__hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(!isUndefined(from._isAMomentObject)){to._isAMomentObject=from._isAMomentObject}
if(!isUndefined(from._i)){to._i=from._i}
if(!isUndefined(from._f)){to._f=from._f}
if(!isUndefined(from._l)){to._l=from._l}
if(!isUndefined(from._strict)){to._strict=from._strict}
if(!isUndefined(from._tzm)){to._tzm=from._tzm}
if(!isUndefined(from._isUTC)){to._isUTC=from._isUTC}
if(!isUndefined(from._offset)){to._offset=from._offset}
if(!isUndefined(from._pf)){to._pf=getParsingFlags(from)}
if(!isUndefined(from._locale)){to._locale=from._locale}
if(momentProperties.length>0){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(!isUndefined(val)){to[prop]=val}}}
return to}
var updateInProgress=!1;function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);if(updateInProgress===!1){updateInProgress=!0;utils_hooks__hooks.updateOffset(this);updateInProgress=!1}}
function isMoment(obj){return obj instanceof Moment||(obj!=null&&obj._isAMomentObject!=null)}
function absFloor(number){if(number<0){return Math.ceil(number)}else{return Math.floor(number)}}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber)}
return value}
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++}}
return diffs+lengthDiff}
function Locale(){}
var locales={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key}
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale}
if(next&&next.length>=j&&compareArrays(split,next,!0)>=j-1){break}
j--}
i++}
return null}
function loadLocale(name){var oldLocale=null;if(!locales[name]&&(typeof module!=='undefined')&&module&&module.exports){try{oldLocale=globalLocale._abbr;require('./locale/'+name);locale_locales__getSetGlobalLocale(oldLocale)}catch(e){}}
return locales[name]}
function locale_locales__getSetGlobalLocale(key,values){var data;if(key){if(isUndefined(values)){data=locale_locales__getLocale(key)}else{data=defineLocale(key,values)}
if(data){globalLocale=data}}
return globalLocale._abbr}
function defineLocale(name,values){if(values!==null){values.abbr=name;locales[name]=locales[name]||new Locale();locales[name].set(values);locale_locales__getSetGlobalLocale(name);return locales[name]}else{delete locales[name];return null}}
function locale_locales__getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr}
if(!key){return globalLocale}
if(!isArray(key)){locale=loadLocale(key);if(locale){return locale}
key=[key]}
return chooseLocale(key)}
var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit}
function normalizeUnits(units){return typeof units==='string'?aliases[units]||aliases[units.toLowerCase()]:undefined}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop]}}}
return normalizedInput}
function isFunction(input){return input instanceof Function||Object.prototype.toString.call(input)==='[object Function]'}
function makeGetSet(unit,keepTime){return function(value){if(value!=null){get_set__set(this,unit,value);utils_hooks__hooks.updateOffset(this,keepTime);return this}else{return get_set__get(this,unit)}}}
function get_set__get(mom,unit){return mom.isValid()?mom._d['get'+(mom._isUTC?'UTC':'')+unit]():NaN}
function get_set__set(mom,unit,value){if(mom.isValid()){mom._d['set'+(mom._isUTC?'UTC':'')+unit](value)}}
function getSet(units,value){var unit;if(typeof units==='object'){for(unit in units){this.set(unit,units[unit])}}else{units=normalizeUnits(units);if(isFunction(this[units])){return this[units](value)}}
return this}
function zeroFill(number,targetLength,forceSign){var absNumber=''+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?(forceSign?'+':''):'-')+Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber}
var formattingTokens=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==='string'){func=function(){return this[callback]()}}
if(token){formatTokenFunctions[token]=func}
if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2])}}
if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token)}}}
function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'')}
return input.replace(/\\/g,'')}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]]}else{array[i]=removeFormattingTokens(array[i])}}
return function(mom){var output='';for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i]}
return output}}
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate()}
format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m)}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1}
return format}
var match1=/\d/;var match2=/\d\d/;var match3=/\d{3}/;var match4=/\d{4}/;var match6=/[+-]?\d{6}/;var match1to2=/\d\d?/;var match3to4=/\d\d\d\d?/;var match5to6=/\d\d\d\d\d\d?/;var match1to3=/\d{1,3}/;var match1to4=/\d{1,4}/;var match1to6=/[+-]?\d{1,6}/;var matchUnsigned=/\d+/;var matchSigned=/[+-]?\d+/;var matchOffset=/Z|[+-]\d\d:?\d\d/gi;var matchShortOffset=/Z|[+-]\d\d(?::?\d\d)?/gi;var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict,localeData){return(isStrict&&strictRegex)?strictRegex:regex}}
function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token))}
return regexes[token](config._strict,config._locale)}
function unescapeFormat(s){return regexEscape(s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4}))}
function regexEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&')}
var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==='string'){token=[token]}
if(typeof callback==='number'){func=function(input,array){array[callback]=toInt(input)}}
for(i=0;i<token.length;i++){tokens[token[i]]=func}}
function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token)})}
function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token)}}
var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;var WEEK=7;var WEEKDAY=8;function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate()}
addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format)});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format)});addUnitAlias('month','M');addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',function(isStrict,locale){return locale.monthsShortRegex(isStrict)});addRegexToken('MMMM',function(isStrict,locale){return locale.monthsRegex(isStrict)});addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(month!=null){array[MONTH]=month}else{getParsingFlags(config).invalidMonth=input}});var MONTHS_IN_FORMAT=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m,format){return isArray(this._months)?this._months[m.month()]:this._months[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()]}
var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m,format){return isArray(this._monthsShort)?this._monthsShort[m.month()]:this._monthsShort[MONTHS_IN_FORMAT.test(format)?'format':'standalone'][m.month()]}
function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[]}
for(i=0;i<12;i++){mom=create_utc__createUTC([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i')}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i')}
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i}else if(!strict&&this._monthsParse[i].test(monthName)){return i}}}
function setMonth(mom,value){var dayOfMonth;if(!mom.isValid()){return mom}
if(typeof value==='string'){value=mom.localeData().monthsParse(value);if(typeof value!=='number'){return mom}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom}
function getSetMonth(value){if(value!=null){setMonth(this,value);utils_hooks__hooks.updateOffset(this,!0);return this}else{return get_set__get(this,'Month')}}
function getDaysInMonth(){return daysInMonth(this.year(),this.month())}
var defaultMonthsShortRegex=matchWord;function monthsShortRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this)}
if(isStrict){return this._monthsShortStrictRegex}else{return this._monthsShortRegex}}else{return this._monthsShortStrictRegex&&isStrict?this._monthsShortStrictRegex:this._monthsShortRegex}}
var defaultMonthsRegex=matchWord;function monthsRegex(isStrict){if(this._monthsParseExact){if(!hasOwnProp(this,'_monthsRegex')){computeMonthsParse.call(this)}
if(isStrict){return this._monthsStrictRegex}else{return this._monthsRegex}}else{return this._monthsStrictRegex&&isStrict?this._monthsStrictRegex:this._monthsRegex}}
function computeMonthsParse(){function cmpLenRev(a,b){return b.length-a.length}
var shortPieces=[],longPieces=[],mixedPieces=[],i,mom;for(i=0;i<12;i++){mom=create_utc__createUTC([2000,i]);shortPieces.push(this.monthsShort(mom,''));longPieces.push(this.months(mom,''));mixedPieces.push(this.months(mom,''));mixedPieces.push(this.monthsShort(mom,''))}
shortPieces.sort(cmpLenRev);longPieces.sort(cmpLenRev);mixedPieces.sort(cmpLenRev);for(i=0;i<12;i++){shortPieces[i]=regexEscape(shortPieces[i]);longPieces[i]=regexEscape(longPieces[i]);mixedPieces[i]=regexEscape(mixedPieces[i])}
this._monthsRegex=new RegExp('^('+mixedPieces.join('|')+')','i');this._monthsShortRegex=this._monthsRegex;this._monthsStrictRegex=new RegExp('^('+longPieces.join('|')+')$','i');this._monthsShortStrictRegex=new RegExp('^('+shortPieces.join('|')+')$','i')}
function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||(a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0))?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE}
if(getParsingFlags(m)._overflowWeeks&&overflow===-1){overflow=WEEK}
if(getParsingFlags(m)._overflowWeekday&&overflow===-1){overflow=WEEKDAY}
getParsingFlags(m).overflow=overflow}
return m}
function warn(msg){if(utils_hooks__hooks.suppressDeprecationWarnings===!1&&(typeof console!=='undefined')&&console.warn){console.warn('Deprecation warning: '+msg)}}
function deprecate(msg,fn){var firstTime=!0;return extend(function(){if(firstTime){warn(msg+'\nArguments: '+Array.prototype.slice.call(arguments).join(', ')+'\n'+(new Error()).stack);firstTime=!1}
return fn.apply(this,arguments)},fn)}
var deprecations={};function deprecateSimple(name,msg){if(!deprecations[name]){warn(msg);deprecations[name]=!0}}
utils_hooks__hooks.suppressDeprecationWarnings=!1;var extendedIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var basicIsoRegex=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;var tzRegex=/Z|[+-]\d\d(?::?\d\d)?/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d\d-\d\d/],['YYYY-MM-DD',/\d{4}-\d\d-\d\d/],['GGGG-[W]WW-E',/\d{4}-W\d\d-\d/],['GGGG-[W]WW',/\d{4}-W\d\d/,!1],['YYYY-DDD',/\d{4}-\d{3}/],['YYYY-MM',/\d{4}-\d\d/,!1],['YYYYYYMMDD',/[+-]\d{10}/],['YYYYMMDD',/\d{8}/],['GGGG[W]WWE',/\d{4}W\d{3}/],['GGGG[W]WW',/\d{4}W\d{2}/,!1],['YYYYDDD',/\d{7}/]];var isoTimes=[['HH:mm:ss.SSSS',/\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss,SSSS',/\d\d:\d\d:\d\d,\d+/],['HH:mm:ss',/\d\d:\d\d:\d\d/],['HH:mm',/\d\d:\d\d/],['HHmmss.SSSS',/\d\d\d\d\d\d\.\d+/],['HHmmss,SSSS',/\d\d\d\d\d\d,\d+/],['HHmmss',/\d\d\d\d\d\d/],['HHmm',/\d\d\d\d/],['HH',/\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i;function configFromISO(config){var i,l,string=config._i,match=extendedIsoRegex.exec(string)||basicIsoRegex.exec(string),allowTime,dateFormat,timeFormat,tzFormat;if(match){getParsingFlags(config).iso=!0;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(match[1])){dateFormat=isoDates[i][0];allowTime=isoDates[i][2]!==!1;break}}
if(dateFormat==null){config._isValid=!1;return}
if(match[3]){for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(match[3])){timeFormat=(match[2]||' ')+isoTimes[i][0];break}}
if(timeFormat==null){config._isValid=!1;return}}
if(!allowTime&&timeFormat!=null){config._isValid=!1;return}
if(match[4]){if(tzRegex.exec(match[4])){tzFormat='Z'}else{config._isValid=!1;return}}
config._f=dateFormat+(timeFormat||'')+(tzFormat||'');configFromStringAndFormat(config)}else{config._isValid=!1}}
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return}
configFromISO(config);if(config._isValid===!1){delete config._isValid;utils_hooks__hooks.createFromInputFallback(config)}}
utils_hooks__hooks.createFromInputFallback=deprecate('moment construction falls back to js Date. This is '+'discouraged and will be removed in upcoming major '+'release. Please refer to '+'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''))});function createDate(y,m,d,h,M,s,ms){var date=new Date(y,m,d,h,M,s,ms);if(y<100&&y>=0&&isFinite(date.getFullYear())){date.setFullYear(y)}
return date}
function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<100&&y>=0&&isFinite(date.getUTCFullYear())){date.setUTCFullYear(y)}
return date}
addFormatToken('Y',0,0,function(){var y=this.year();return y<=9999?''+y:'+'+y});addFormatToken(0,['YY',2],0,function(){return this.year()%100});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,!0],0,'year');addUnitAlias('year','y');addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR]=input.length===2?utils_hooks__hooks.parseTwoDigitYear(input):toInt(input)});addParseToken('YY',function(input,array){array[YEAR]=utils_hooks__hooks.parseTwoDigitYear(input)});addParseToken('Y',function(input,array){array[YEAR]=parseInt(input,10)});function daysInYear(year){return isLeapYear(year)?366:365}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0}
utils_hooks__hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000)};var getSetYear=makeGetSet('FullYear',!1);function getIsLeapYear(){return isLeapYear(this.year())}
function firstWeekOffset(year,dow,doy){var
fwd=7+dow-doy,fwdlw=(7+createUTCDate(year,0,fwd).getUTCDay()-dow)%7;return-fwdlw+fwd-1}
function dayOfYearFromWeeks(year,week,weekday,dow,doy){var localWeekday=(7+weekday-dow)%7,weekOffset=firstWeekOffset(year,dow,doy),dayOfYear=1+7*(week-1)+localWeekday+weekOffset,resYear,resDayOfYear;if(dayOfYear<=0){resYear=year-1;resDayOfYear=daysInYear(resYear)+dayOfYear}else if(dayOfYear>daysInYear(year)){resYear=year+1;resDayOfYear=dayOfYear-daysInYear(year)}else{resYear=year;resDayOfYear=dayOfYear}
return{year:resYear,dayOfYear:resDayOfYear}}
function weekOfYear(mom,dow,doy){var weekOffset=firstWeekOffset(mom.year(),dow,doy),week=Math.floor((mom.dayOfYear()-weekOffset-1)/7)+1,resWeek,resYear;if(week<1){resYear=mom.year()-1;resWeek=week+weeksInYear(resYear,dow,doy)}else if(week>weeksInYear(mom.year(),dow,doy)){resWeek=week-weeksInYear(mom.year(),dow,doy);resYear=mom.year()+1}else{resYear=mom.year();resWeek=week}
return{week:resWeek,year:resYear}}
function weeksInYear(year,dow,doy){var weekOffset=firstWeekOffset(year,dow,doy),weekOffsetNext=firstWeekOffset(year+1,dow,doy);return(daysInYear(year)-weekOffset+weekOffsetNext)/7}
function defaults(a,b,c){if(a!=null){return a}
if(b!=null){return b}
return c}
function currentDateArray(config){var nowValue=new Date(utils_hooks__hooks.now());if(config._useUTC){return[nowValue.getUTCFullYear(),nowValue.getUTCMonth(),nowValue.getUTCDate()]}
return[nowValue.getFullYear(),nowValue.getMonth(),nowValue.getDate()]}
function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return}
currentDate=currentDateArray(config);if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config)}
if(config._dayOfYear){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear=!0}
date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate()}
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i]}
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i]}
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=!0;config._a[HOUR]=0}
config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm)}
if(config._nextDay){config._a[HOUR]=24}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp,weekdayOverflow;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);if(weekday<1||weekday>7){weekdayOverflow=!0}}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=defaults(w.gg,config._a[YEAR],weekOfYear(local__createLocal(),dow,doy).year);week=defaults(w.w,1);if(w.d!=null){weekday=w.d;if(weekday<0||weekday>6){weekdayOverflow=!0}}else if(w.e!=null){weekday=w.e+dow;if(w.e<0||w.e>6){weekdayOverflow=!0}}else{weekday=dow}}
if(week<1||week>weeksInYear(weekYear,dow,doy)){getParsingFlags(config)._overflowWeeks=!0}else if(weekdayOverflow!=null){getParsingFlags(config)._overflowWeekday=!0}else{temp=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear}}
utils_hooks__hooks.ISO_8601=function(){};function configFromStringAndFormat(config){if(config._f===utils_hooks__hooks.ISO_8601){configFromISO(config);return}
config._a=[];getParsingFlags(config).empty=!0;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped)}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length}
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=!1}else{getParsingFlags(config).unusedTokens.push(token)}
addTimeToArrayFromToken(token,parsedInput,config)}else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token)}}
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string)}
if(getParsingFlags(config).bigHour===!0&&config._a[HOUR]<=12&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined}
config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config)}
function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){return hour}
if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem)}else if(locale.isPM!=null){isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12}
if(!isPm&&hour===12){hour=0}
return hour}else{return hour}}
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){getParsingFlags(config).invalidFormat=!0;config._d=new Date(NaN);return}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC}
tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!valid__isValid(tempConfig)){continue}
currentScore+=getParsingFlags(tempConfig).charsLeftOver;currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig}}
extend(config,bestMoment||tempConfig)}
function configFromObject(config){if(config._d){return}
var i=normalizeObjectUnits(config._i);config._a=map([i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond],function(obj){return obj&&parseInt(obj,10)});configFromArray(config)}
function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){res.add(1,'d');res._nextDay=undefined}
return res}
function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||locale_locales__getLocale(config._l);if(input===null||(format===undefined&&input==='')){return valid__createInvalid({nullInput:!0})}
if(typeof input==='string'){config._i=input=config._locale.preparse(input)}
if(isMoment(input)){return new Moment(checkOverflow(input))}else if(isArray(format)){configFromStringAndArray(config)}else if(format){configFromStringAndFormat(config)}else if(isDate(input)){config._d=input}else{configFromInput(config)}
if(!valid__isValid(config)){config._d=null}
return config}
function configFromInput(config){var input=config._i;if(input===undefined){config._d=new Date(utils_hooks__hooks.now())}else if(isDate(input)){config._d=new Date(+input)}else if(typeof input==='string'){configFromString(config)}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10)});configFromArray(config)}else if(typeof(input)==='object'){configFromObject(config)}else if(typeof(input)==='number'){config._d=new Date(input)}else{utils_hooks__hooks.createFromInputFallback(config)}}
function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(typeof(locale)==='boolean'){strict=locale;locale=undefined}
c._isAMomentObject=!0;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c)}
function local__createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,!1)}
var prototypeMin=deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other<this?this:other}else{return valid__createInvalid()}});var prototypeMax=deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);if(this.isValid()&&other.isValid()){return other>this?this:other}else{return valid__createInvalid()}});function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0]}
if(!moments.length){return local__createLocal()}
res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i]}}
return res}
function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args)}
function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args)}
var now=function(){return Date.now?Date.now():+(new Date())};function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;this._milliseconds=+milliseconds+seconds*1e3+minutes*6e4+hours*36e5;this._days=+days+weeks*7;this._months=+months+quarters*3+years*12;this._data={};this._locale=locale_locales__getLocale();this._bubble()}
function isDuration(obj){return obj instanceof Duration}
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset<0){offset=-offset;sign='-'}
return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~(offset)%60,2)})}
offset('Z',':');offset('ZZ','');addRegexToken('Z',matchShortOffset);addRegexToken('ZZ',matchShortOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=!0;config._tzm=offsetFromString(matchShortOffset,input)});var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(matcher,string){var matches=((string||'').match(matcher)||[]);var chunk=matches[matches.length-1]||[];var parts=(chunk+'').match(chunkOffset)||['-',0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);return parts[0]==='+'?minutes:-minutes}
function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?+input:+local__createLocal(input))-(+res);res._d.setTime(+res._d+diff);utils_hooks__hooks.updateOffset(res,!1);return res}else{return local__createLocal(input).local()}}
function getDateOffset(m){return-Math.round(m._d.getTimezoneOffset()/15)*15}
utils_hooks__hooks.updateOffset=function(){};function getSetOffset(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(!this.isValid()){return input!=null?this:NaN}
if(input!=null){if(typeof input==='string'){input=offsetFromString(matchShortOffset,input)}else if(Math.abs(input)<16){input=input*60}
if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this)}
this._offset=input;this._isUTC=!0;if(localAdjust!=null){this.add(localAdjust,'m')}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){add_subtract__addSubtract(this,create__createDuration(input-offset,'m'),1,!1)}else if(!this._changeInProgress){this._changeInProgress=!0;utils_hooks__hooks.updateOffset(this,!0);this._changeInProgress=null}}
return this}else{return this._isUTC?offset:getDateOffset(this)}}
function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input}
this.utcOffset(input,keepLocalTime);return this}else{return-this.utcOffset()}}
function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime)}
function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=!1;if(keepLocalTime){this.subtract(getDateOffset(this),'m')}}
return this}
function setOffsetToParsedOffset(){if(this._tzm){this.utcOffset(this._tzm)}else if(typeof this._i==='string'){this.utcOffset(offsetFromString(matchOffset,this._i))}
return this}
function hasAlignedHourOffset(input){if(!this.isValid()){return!1}
input=input?local__createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0}
function isDaylightSavingTime(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset())}
function isDaylightSavingTimeShifted(){if(!isUndefined(this._isDSTShifted)){return this._isDSTShifted}
var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?create_utc__createUTC(c._a):local__createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0}else{this._isDSTShifted=!1}
return this._isDSTShifted}
function isLocal(){return this.isValid()?!this._isUTC:!1}
function isUtcOffset(){return this.isValid()?this._isUTC:!1}
function isUtc(){return this.isValid()?this._isUTC&&this._offset===0:!1}
var aspNetRegex=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;var isoRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;function create__createDuration(input,key){var duration=input,match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months}}else if(typeof input==='number'){duration={};if(key){duration[key]=input}else{duration.milliseconds=input}}else if(!!(match=aspNetRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign}}else if(!!(match=isoRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),d:parseIso(match[4],sign),h:parseIso(match[5],sign),m:parseIso(match[6],sign),s:parseIso(match[7],sign),w:parseIso(match[8],sign)}}else if(duration==null){duration={}}else if(typeof duration==='object'&&('from' in duration||'to' in duration)){diffRes=momentsDifference(local__createLocal(duration.from),local__createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months}
ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale}
return ret}
create__createDuration.fn=Duration.prototype;function parseIso(inp,sign){var res=inp&&parseFloat(inp.replace(',','.'));return(isNaN(res)?0:res)*sign}
function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months}
res.milliseconds=+other- +(base.clone().add(res.months,'M'));return res}
function momentsDifference(base,other){var res;if(!(base.isValid()&&other.isValid())){return{milliseconds:0,months:0}}
other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other)}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months}
return res}
function createAdder(direction,name){return function(val,period){var dur,tmp;if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period).');tmp=val;val=period;period=tmp}
val=typeof val==='string'?+val:val;dur=create__createDuration(val,period);add_subtract__addSubtract(this,dur,direction);return this}}
function add_subtract__addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;if(!mom.isValid()){return}
updateOffset=updateOffset==null?!0:updateOffset;if(milliseconds){mom._d.setTime(+mom._d+milliseconds*isAdding)}
if(days){get_set__set(mom,'Date',get_set__get(mom,'Date')+days*isAdding)}
if(months){setMonth(mom,get_set__get(mom,'Month')+months*isAdding)}
if(updateOffset){utils_hooks__hooks.updateOffset(mom,days||months)}}
var add_subtract__add=createAdder(1,'add');var add_subtract__subtract=createAdder(-1,'subtract');function moment_calendar__calendar(time,formats){var now=time||local__createLocal(),sod=cloneWithOffset(now,this).startOf('day'),diff=this.diff(sod,'days',!0),format=diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';var output=formats&&(isFunction(formats[format])?formats[format]():formats[format]);return this.format(output||this.localeData().calendar(format,this,local__createLocal(now)))}
function clone(){return new Moment(this)}
function isAfter(input,units){var localInput=isMoment(input)?input:local__createLocal(input);if(!(this.isValid()&&localInput.isValid())){return!1}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return+this>+localInput}else{return+localInput<+this.clone().startOf(units)}}
function isBefore(input,units){var localInput=isMoment(input)?input:local__createLocal(input);if(!(this.isValid()&&localInput.isValid())){return!1}
units=normalizeUnits(!isUndefined(units)?units:'millisecond');if(units==='millisecond'){return+this<+localInput}else{return+this.clone().endOf(units)<+localInput}}
function isBetween(from,to,units){return this.isAfter(from,units)&&this.isBefore(to,units)}
function isSame(input,units){var localInput=isMoment(input)?input:local__createLocal(input),inputMs;if(!(this.isValid()&&localInput.isValid())){return!1}
units=normalizeUnits(units||'millisecond');if(units==='millisecond'){return+this===+localInput}else{inputMs=+localInput;return+(this.clone().startOf(units))<=inputMs&&inputMs<=+(this.clone().endOf(units))}}
function isSameOrAfter(input,units){return this.isSame(input,units)||this.isAfter(input,units)}
function isSameOrBefore(input,units){return this.isSame(input,units)||this.isBefore(input,units)}
function diff(input,units,asFloat){var that,zoneDelta,delta,output;if(!this.isValid()){return NaN}
that=cloneWithOffset(input,this);if(!that.isValid()){return NaN}
zoneDelta=(that.utcOffset()-this.utcOffset())*6e4;units=normalizeUnits(units);if(units==='year'||units==='month'||units==='quarter'){output=monthDiff(this,that);if(units==='quarter'){output=output/3}else if(units==='year'){output=output/12}}else{delta=this-that;output=units==='second'?delta/1e3:units==='minute'?delta/6e4:units==='hour'?delta/36e5:units==='day'?(delta-zoneDelta)/864e5:units==='week'?(delta-zoneDelta)/6048e5:delta}
return asFloat?output:absFloor(output)}
function monthDiff(a,b){var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months');adjust=(b-anchor)/(anchor-anchor2)}else{anchor2=a.clone().add(wholeMonthDiff+1,'months');adjust=(b-anchor)/(anchor2-anchor)}
return-(wholeMonthDiff+adjust)}
utils_hooks__hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')}
function moment_format__toISOString(){var m=this.clone().utc();if(0<m.year()&&m.year()<=9999){if(isFunction(Date.prototype.toISOString)){return this.toDate().toISOString()}else{return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')}}else{return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')}}
function format(inputString){var output=formatMoment(this,inputString||utils_hooks__hooks.defaultFormat);return this.localeData().postformat(output)}
function from(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||local__createLocal(time).isValid())){return create__createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix)}else{return this.localeData().invalidDate()}}
function fromNow(withoutSuffix){return this.from(local__createLocal(),withoutSuffix)}
function to(time,withoutSuffix){if(this.isValid()&&((isMoment(time)&&time.isValid())||local__createLocal(time).isValid())){return create__createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix)}else{return this.localeData().invalidDate()}}
function toNow(withoutSuffix){return this.to(local__createLocal(),withoutSuffix)}
function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr}else{newLocaleData=locale_locales__getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData}
return this}}
var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData()}else{return this.locale(key)}});function localeData(){return this._locale}
function startOf(units){units=normalizeUnits(units);switch(units){case 'year':this.month(0);case 'quarter':case 'month':this.date(1);case 'week':case 'isoWeek':case 'day':this.hours(0);case 'hour':this.minutes(0);case 'minute':this.seconds(0);case 'second':this.milliseconds(0)}
if(units==='week'){this.weekday(0)}
if(units==='isoWeek'){this.isoWeekday(1)}
if(units==='quarter'){this.month(Math.floor(this.month()/3)*3)}
return this}
function endOf(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this}
return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms')}
function to_type__valueOf(){return+this._d-((this._offset||0)*60000)}
function unix(){return Math.floor(+this/1000)}
function toDate(){return this._offset?new Date(+this):this._d}
function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()]}
function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()}}
function toJSON(){return this.isValid()?this.toISOString():'null'}
function moment_valid__isValid(){return valid__isValid(this)}
function parsingFlags(){return extend({},getParsingFlags(this))}
function invalidAt(){return getParsingFlags(this).overflow}
function creationData(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}
addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter)}
addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear');addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG');addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input)});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=utils_hooks__hooks.parseTwoDigitYear(input)});function getSetWeekYear(input){return getSetWeekYearHelper.call(this,input,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}
function getSetISOWeekYear(input){return getSetWeekYearHelper.call(this,input,this.isoWeek(),this.isoWeekday(),1,4)}
function getISOWeeksInYear(){return weeksInYear(this.year(),1,4)}
function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy)}
function getSetWeekYearHelper(input,week,weekday,dow,doy){var weeksTarget;if(input==null){return weekOfYear(this,dow,doy).year}else{weeksTarget=weeksInYear(input,dow,doy);if(week>weeksTarget){week=weeksTarget}
return setWeekAll.call(this,input,week,weekday,dow,doy)}}
function setWeekAll(weekYear,week,weekday,dow,doy){var dayOfYearData=dayOfYearFromWeeks(weekYear,week,weekday,dow,doy),date=createUTCDate(dayOfYearData.year,0,dayOfYearData.dayOfYear);this.year(date.getUTCFullYear());this.month(date.getUTCMonth());this.date(date.getUTCDate());return this}
addFormatToken('Q',0,'Qo','quarter');addUnitAlias('quarter','Q');addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH]=(toInt(input)-1)*3});function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3)}
addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek');addUnitAlias('week','w');addUnitAlias('isoWeek','W');addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input)});function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week}
var defaultLocaleWeek={dow:0,doy:6};function localeFirstDayOfWeek(){return this._week.dow}
function localeFirstDayOfYear(){return this._week.doy}
function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d')}
function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d')}
addFormatToken('D',['DD',2],'Do','date');addUnitAlias('date','D');addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10)});var getSetDayOfMonth=makeGetSet('Date',!0);addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format)});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format)});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format)});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday');addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E');addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',matchWord);addRegexToken('ddd',matchWord);addRegexToken('dddd',matchWord);addWeekParseToken(['dd','ddd','dddd'],function(input,week,config,token){var weekday=config._locale.weekdaysParse(input,token,config._strict);if(weekday!=null){week.d=weekday}else{getParsingFlags(config).invalidWeekday=input}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input)});function parseWeekday(input,locale){if(typeof input!=='string'){return input}
if(!isNaN(input)){return parseInt(input,10)}
input=locale.weekdaysParse(input);if(typeof input==='number'){return input}
return null}
var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m,format){return isArray(this._weekdays)?this._weekdays[m.day()]:this._weekdays[this._weekdays.isFormat.test(format)?'format':'standalone'][m.day()]}
var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return this._weekdaysShort[m.day()]}
var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return this._weekdaysMin[m.day()]}
function localeWeekdaysParse(weekdayName,format,strict){var i,mom,regex;if(!this._weekdaysParse){this._weekdaysParse=[];this._minWeekdaysParse=[];this._shortWeekdaysParse=[];this._fullWeekdaysParse=[]}
for(i=0;i<7;i++){mom=local__createLocal([2000,1]).day(i);if(strict&&!this._fullWeekdaysParse[i]){this._fullWeekdaysParse[i]=new RegExp('^'+this.weekdays(mom,'').replace('.','\.?')+'$','i');this._shortWeekdaysParse[i]=new RegExp('^'+this.weekdaysShort(mom,'').replace('.','\.?')+'$','i');this._minWeekdaysParse[i]=new RegExp('^'+this.weekdaysMin(mom,'').replace('.','\.?')+'$','i')}
if(!this._weekdaysParse[i]){regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i')}
if(strict&&format==='dddd'&&this._fullWeekdaysParse[i].test(weekdayName)){return i}else if(strict&&format==='ddd'&&this._shortWeekdaysParse[i].test(weekdayName)){return i}else if(strict&&format==='dd'&&this._minWeekdaysParse[i].test(weekdayName)){return i}else if(!strict&&this._weekdaysParse[i].test(weekdayName)){return i}}}
function getSetDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN}
var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d')}else{return day}}
function getSetLocaleDayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN}
var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d')}
function getSetISODayOfWeek(input){if(!this.isValid()){return input!=null?this:NaN}
return input==null?this.day()||7:this.day(this.day()%7?input:input-7)}
addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear');addUnitAlias('dayOfYear','DDD');addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input)});function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d')}
function hFormat(){return this.hours()%12||12}
addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,hFormat);addFormatToken('hmm',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2)});addFormatToken('hmmss',0,0,function(){return''+hFormat.apply(this)+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)});addFormatToken('Hmm',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2)});addFormatToken('Hmmss',0,0,function(){return''+this.hours()+zeroFill(this.minutes(),2)+zeroFill(this.seconds(),2)});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase)})}
meridiem('a',!0);meridiem('A',!1);addUnitAlias('hour','h');function matchMeridiem(isStrict,locale){return locale._meridiemParse}
addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addRegexToken('hmm',match3to4);addRegexToken('hmmss',match5to6);addRegexToken('Hmm',match3to4);addRegexToken('Hmmss',match5to6);addParseToken(['H','HH'],HOUR);addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input});addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=!0});addParseToken('hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos));getParsingFlags(config).bigHour=!0});addParseToken('hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2));getParsingFlags(config).bigHour=!0});addParseToken('Hmm',function(input,array,config){var pos=input.length-2;array[HOUR]=toInt(input.substr(0,pos));array[MINUTE]=toInt(input.substr(pos))});addParseToken('Hmmss',function(input,array,config){var pos1=input.length-4;var pos2=input.length-2;array[HOUR]=toInt(input.substr(0,pos1));array[MINUTE]=toInt(input.substr(pos1,2));array[SECOND]=toInt(input.substr(pos2))});function localeIsPM(input){return((input+'').toLowerCase().charAt(0)==='p')}
var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM'}else{return isLower?'am':'AM'}}
var getSetHour=makeGetSet('Hours',!0);addFormatToken('m',['mm',2],0,'minute');addUnitAlias('minute','m');addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE);var getSetMinute=makeGetSet('Minutes',!1);addFormatToken('s',['ss',2],0,'second');addUnitAlias('second','s');addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND);var getSetSecond=makeGetSet('Seconds',!1);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100)});addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10)});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond()*10});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond()*100});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond()*1000});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond()*10000});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond()*100000});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond()*1000000});addUnitAlias('millisecond','ms');addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';token.length<=9;token+='S'){addRegexToken(token,matchUnsigned)}
function parseMs(input,array){array[MILLISECOND]=toInt(('0.'+input)*1000)}
for(token='S';token.length<=9;token+='S'){addParseToken(token,parseMs)}
var getSetMillisecond=makeGetSet('Milliseconds',!1);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName');function getZoneAbbr(){return this._isUTC?'UTC':''}
function getZoneName(){return this._isUTC?'Coordinated Universal Time':''}
var momentPrototype__proto=Moment.prototype;momentPrototype__proto.add=add_subtract__add;momentPrototype__proto.calendar=moment_calendar__calendar;momentPrototype__proto.clone=clone;momentPrototype__proto.diff=diff;momentPrototype__proto.endOf=endOf;momentPrototype__proto.format=format;momentPrototype__proto.from=from;momentPrototype__proto.fromNow=fromNow;momentPrototype__proto.to=to;momentPrototype__proto.toNow=toNow;momentPrototype__proto.get=getSet;momentPrototype__proto.invalidAt=invalidAt;momentPrototype__proto.isAfter=isAfter;momentPrototype__proto.isBefore=isBefore;momentPrototype__proto.isBetween=isBetween;momentPrototype__proto.isSame=isSame;momentPrototype__proto.isSameOrAfter=isSameOrAfter;momentPrototype__proto.isSameOrBefore=isSameOrBefore;momentPrototype__proto.isValid=moment_valid__isValid;momentPrototype__proto.lang=lang;momentPrototype__proto.locale=locale;momentPrototype__proto.localeData=localeData;momentPrototype__proto.max=prototypeMax;momentPrototype__proto.min=prototypeMin;momentPrototype__proto.parsingFlags=parsingFlags;momentPrototype__proto.set=getSet;momentPrototype__proto.startOf=startOf;momentPrototype__proto.subtract=add_subtract__subtract;momentPrototype__proto.toArray=toArray;momentPrototype__proto.toObject=toObject;momentPrototype__proto.toDate=toDate;momentPrototype__proto.toISOString=moment_format__toISOString;momentPrototype__proto.toJSON=toJSON;momentPrototype__proto.toString=toString;momentPrototype__proto.unix=unix;momentPrototype__proto.valueOf=to_type__valueOf;momentPrototype__proto.creationData=creationData;momentPrototype__proto.year=getSetYear;momentPrototype__proto.isLeapYear=getIsLeapYear;momentPrototype__proto.weekYear=getSetWeekYear;momentPrototype__proto.isoWeekYear=getSetISOWeekYear;momentPrototype__proto.quarter=momentPrototype__proto.quarters=getSetQuarter;momentPrototype__proto.month=getSetMonth;momentPrototype__proto.daysInMonth=getDaysInMonth;momentPrototype__proto.week=momentPrototype__proto.weeks=getSetWeek;momentPrototype__proto.isoWeek=momentPrototype__proto.isoWeeks=getSetISOWeek;momentPrototype__proto.weeksInYear=getWeeksInYear;momentPrototype__proto.isoWeeksInYear=getISOWeeksInYear;momentPrototype__proto.date=getSetDayOfMonth;momentPrototype__proto.day=momentPrototype__proto.days=getSetDayOfWeek;momentPrototype__proto.weekday=getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday=getSetISODayOfWeek;momentPrototype__proto.dayOfYear=getSetDayOfYear;momentPrototype__proto.hour=momentPrototype__proto.hours=getSetHour;momentPrototype__proto.minute=momentPrototype__proto.minutes=getSetMinute;momentPrototype__proto.second=momentPrototype__proto.seconds=getSetSecond;momentPrototype__proto.millisecond=momentPrototype__proto.milliseconds=getSetMillisecond;momentPrototype__proto.utcOffset=getSetOffset;momentPrototype__proto.utc=setOffsetToUTC;momentPrototype__proto.local=setOffsetToLocal;momentPrototype__proto.parseZone=setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset=hasAlignedHourOffset;momentPrototype__proto.isDST=isDaylightSavingTime;momentPrototype__proto.isDSTShifted=isDaylightSavingTimeShifted;momentPrototype__proto.isLocal=isLocal;momentPrototype__proto.isUtcOffset=isUtcOffset;momentPrototype__proto.isUtc=isUtc;momentPrototype__proto.isUTC=isUtc;momentPrototype__proto.zoneAbbr=getZoneAbbr;momentPrototype__proto.zoneName=getZoneName;momentPrototype__proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);momentPrototype__proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);momentPrototype__proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);momentPrototype__proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',getSetZone);var momentPrototype=momentPrototype__proto;function moment__createUnix(input){return local__createLocal(input*1000)}
function moment__createInZone(){return local__createLocal.apply(null,arguments).parseZone()}
var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function locale_calendar__calendar(key,mom,now){var output=this._calendar[key];return isFunction(output)?output.call(mom,now):output}
var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format}
this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1)});return this._longDateFormat[key]}
var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate}
var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number)}
function preParsePostFormat(string){return string}
var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relative__relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(isFunction(output))?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number)}
function pastFuture(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return isFunction(format)?format(output):format.replace(/%s/i,output)}
function locale_set__set(config){var prop,i;for(i in config){prop=config[i];if(isFunction(prop)){this[i]=prop}else{this['_'+i]=prop}}
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+(/\d{1,2}/).source)}
var prototype__proto=Locale.prototype;prototype__proto._calendar=defaultCalendar;prototype__proto.calendar=locale_calendar__calendar;prototype__proto._longDateFormat=defaultLongDateFormat;prototype__proto.longDateFormat=longDateFormat;prototype__proto._invalidDate=defaultInvalidDate;prototype__proto.invalidDate=invalidDate;prototype__proto._ordinal=defaultOrdinal;prototype__proto.ordinal=ordinal;prototype__proto._ordinalParse=defaultOrdinalParse;prototype__proto.preparse=preParsePostFormat;prototype__proto.postformat=preParsePostFormat;prototype__proto._relativeTime=defaultRelativeTime;prototype__proto.relativeTime=relative__relativeTime;prototype__proto.pastFuture=pastFuture;prototype__proto.set=locale_set__set;prototype__proto.months=localeMonths;prototype__proto._months=defaultLocaleMonths;prototype__proto.monthsShort=localeMonthsShort;prototype__proto._monthsShort=defaultLocaleMonthsShort;prototype__proto.monthsParse=localeMonthsParse;prototype__proto._monthsRegex=defaultMonthsRegex;prototype__proto.monthsRegex=monthsRegex;prototype__proto._monthsShortRegex=defaultMonthsShortRegex;prototype__proto.monthsShortRegex=monthsShortRegex;prototype__proto.week=localeWeek;prototype__proto._week=defaultLocaleWeek;prototype__proto.firstDayOfYear=localeFirstDayOfYear;prototype__proto.firstDayOfWeek=localeFirstDayOfWeek;prototype__proto.weekdays=localeWeekdays;prototype__proto._weekdays=defaultLocaleWeekdays;prototype__proto.weekdaysMin=localeWeekdaysMin;prototype__proto._weekdaysMin=defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort=localeWeekdaysShort;prototype__proto._weekdaysShort=defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse=localeWeekdaysParse;prototype__proto.isPM=localeIsPM;prototype__proto._meridiemParse=defaultLocaleMeridiemParse;prototype__proto.meridiem=localeMeridiem;function lists__get(format,index,field,setter){var locale=locale_locales__getLocale();var utc=create_utc__createUTC().set(setter,index);return locale[field](utc,format)}
function list(format,index,field,count,setter){if(typeof format==='number'){index=format;format=undefined}
format=format||'';if(index!=null){return lists__get(format,index,field,setter)}
var i;var out=[];for(i=0;i<count;i++){out[i]=lists__get(format,i,field,setter)}
return out}
function lists__listMonths(format,index){return list(format,index,'months',12,'month')}
function lists__listMonthsShort(format,index){return list(format,index,'monthsShort',12,'month')}
function lists__listWeekdays(format,index){return list(format,index,'weekdays',7,'day')}
function lists__listWeekdaysShort(format,index){return list(format,index,'weekdaysShort',7,'day')}
function lists__listWeekdaysMin(format,index){return list(format,index,'weekdaysMin',7,'day')}
locale_locales__getSetGlobalLocale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output}});utils_hooks__hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',locale_locales__getLocale);var mathAbs=Math.abs;function duration_abs__abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this}
function duration_add_subtract__addSubtract(duration,input,value,direction){var other=create__createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble()}
function duration_add_subtract__add(input,value){return duration_add_subtract__addSubtract(this,input,value,1)}
function duration_add_subtract__subtract(input,value){return duration_add_subtract__addSubtract(this,input,value,-1)}
function absCeil(number){if(number<0){return Math.floor(number)}else{return Math.ceil(number)}}
function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;if(!((milliseconds>=0&&days>=0&&months>=0)||(milliseconds<=0&&days<=0&&months<=0))){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0}
data.milliseconds=milliseconds%1000;seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24);monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays));years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this}
function daysToMonths(days){return days*4800/146097}
function monthsToDays(months){return months*146097/4800}
function as(units){var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==='month'?months:months/12}else{days=this._days+Math.round(monthsToDays(this._months));switch(units){case 'week':return days/7+milliseconds/6048e5;case 'day':return days+milliseconds/864e5;case 'hour':return days*24+milliseconds/36e5;case 'minute':return days*1440+milliseconds/6e4;case 'second':return days*86400+milliseconds/1000;case 'millisecond':return Math.floor(days*864e5)+milliseconds;default:throw new Error('Unknown unit '+units)}}}
function duration_as__valueOf(){return(this._milliseconds+this._days*864e5+(this._months%12)*2592e6+toInt(this._months/12)*31536e6)}
function makeAs(alias){return function(){return this.as(alias)}}
var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function duration_get__get(units){units=normalizeUnits(units);return this[units+'s']()}
function makeGetter(name){return function(){return this._data[name]}}
var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days()/7)}
var round=Math.round;var thresholds={s:45,m:45,h:22,d:26,M:11};function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture)}
function duration_humanize__relativeTime(posNegDuration,withoutSuffix,locale){var duration=create__createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds<thresholds.s&&['s',seconds]||minutes<=1&&['m']||minutes<thresholds.m&&['mm',minutes]||hours<=1&&['h']||hours<thresholds.h&&['hh',hours]||days<=1&&['d']||days<thresholds.d&&['dd',days]||months<=1&&['M']||months<thresholds.M&&['MM',months]||years<=1&&['y']||['yy',years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a)}
function duration_humanize__getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return!1}
if(limit===undefined){return thresholds[threshold]}
thresholds[threshold]=limit;return!0}
function humanize(withSuffix){var locale=this.localeData();var output=duration_humanize__relativeTime(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output)}
return locale.postformat(output)}
var iso_string__abs=Math.abs;function iso_string__toISOString(){var seconds=iso_string__abs(this._milliseconds)/1000;var days=iso_string__abs(this._days);var months=iso_string__abs(this._months);var minutes,hours,years;minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60;years=absFloor(months/12);months%=12;var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){return'P0D'}
return(total<0?'-':'')+'P'+(Y?Y+'Y':'')+(M?M+'M':'')+(D?D+'D':'')+((h||m||s)?'T':'')+(h?h+'H':'')+(m?m+'M':'')+(s?s+'S':'')}
var duration_prototype__proto=Duration.prototype;duration_prototype__proto.abs=duration_abs__abs;duration_prototype__proto.add=duration_add_subtract__add;duration_prototype__proto.subtract=duration_add_subtract__subtract;duration_prototype__proto.as=as;duration_prototype__proto.asMilliseconds=asMilliseconds;duration_prototype__proto.asSeconds=asSeconds;duration_prototype__proto.asMinutes=asMinutes;duration_prototype__proto.asHours=asHours;duration_prototype__proto.asDays=asDays;duration_prototype__proto.asWeeks=asWeeks;duration_prototype__proto.asMonths=asMonths;duration_prototype__proto.asYears=asYears;duration_prototype__proto.valueOf=duration_as__valueOf;duration_prototype__proto._bubble=bubble;duration_prototype__proto.get=duration_get__get;duration_prototype__proto.milliseconds=milliseconds;duration_prototype__proto.seconds=seconds;duration_prototype__proto.minutes=minutes;duration_prototype__proto.hours=hours;duration_prototype__proto.days=days;duration_prototype__proto.weeks=weeks;duration_prototype__proto.months=months;duration_prototype__proto.years=years;duration_prototype__proto.humanize=humanize;duration_prototype__proto.toISOString=iso_string__toISOString;duration_prototype__proto.toString=iso_string__toISOString;duration_prototype__proto.toJSON=iso_string__toISOString;duration_prototype__proto.locale=locale;duration_prototype__proto.localeData=localeData;duration_prototype__proto.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',iso_string__toISOString);duration_prototype__proto.lang=lang;addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf');addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d=new Date(parseFloat(input,10)*1000)});addParseToken('x',function(input,array,config){config._d=new Date(toInt(input))});utils_hooks__hooks.version='2.11.2';setHookCallback(local__createLocal);utils_hooks__hooks.fn=momentPrototype;utils_hooks__hooks.min=min;utils_hooks__hooks.max=max;utils_hooks__hooks.now=now;utils_hooks__hooks.utc=create_utc__createUTC;utils_hooks__hooks.unix=moment__createUnix;utils_hooks__hooks.months=lists__listMonths;utils_hooks__hooks.isDate=isDate;utils_hooks__hooks.locale=locale_locales__getSetGlobalLocale;utils_hooks__hooks.invalid=valid__createInvalid;utils_hooks__hooks.duration=create__createDuration;utils_hooks__hooks.isMoment=isMoment;utils_hooks__hooks.weekdays=lists__listWeekdays;utils_hooks__hooks.parseZone=moment__createInZone;utils_hooks__hooks.localeData=locale_locales__getLocale;utils_hooks__hooks.isDuration=isDuration;utils_hooks__hooks.monthsShort=lists__listMonthsShort;utils_hooks__hooks.weekdaysMin=lists__listWeekdaysMin;utils_hooks__hooks.defineLocale=defineLocale;utils_hooks__hooks.weekdaysShort=lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits=normalizeUnits;utils_hooks__hooks.relativeTimeThreshold=duration_humanize__getSetRelativeTimeThreshold;utils_hooks__hooks.prototype=momentPrototype;var _moment=utils_hooks__hooks;return _moment}))