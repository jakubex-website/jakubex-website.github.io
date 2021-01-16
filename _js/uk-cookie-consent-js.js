var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//All the cookie setting stuff
function catapultSetCookie(cookieName, cookieValue, nDays) {
	var today = new Date();
	var expire = new Date();
	if (nDays==null || nDays==0) nDays=1;
	expire.setTime(today.getTime() + 3600000*24*nDays);
	document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString()+"; path=/";
}
function catapultReadCookie(cookieName) {
	var theCookie=" "+document.cookie;
	var ind=theCookie.indexOf(" "+cookieName+"=");
	if (ind==-1) ind=theCookie.indexOf(";"+cookieName+"=");
	if (ind==-1 || cookieName=="") return "";
	var ind1=theCookie.indexOf(";",ind+1);
	if (ind1==-1) ind1=theCookie.length; 
	return unescape(theCookie.substring(ind+cookieName.length+2,ind1));
}
function catapultDeleteCookie(cookieName) {
	var today = new Date();
	var expire = new Date() - 30;
	expire.setTime(today.getTime() - 3600000*24*90);
	document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString();
}
function catapultAcceptCookies() {
	catapultSetCookie('catAccCookies', true, 30);
	jQuery("#catapult-cookie-bar").hide();
	jQuery("html").css("margin-top","0");
}

}
/*
     FILE ARCHIVED ON 23:58:10 Jan 21, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:12 Jan 11, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 555.128
  exclusion.robots: 0.119
  exclusion.robots.policy: 0.11
  RedisCDXSource: 15.121
  esindex: 0.009
  LoadShardBlock: 510.933 (3)
  PetaboxLoader3.datanode: 1229.0 (8)
  PetaboxLoader3.resolve: 272.657 (6)
  CDXLines.iter: 22.362 (2)
  load_resource: 1048.83 (2)
*/