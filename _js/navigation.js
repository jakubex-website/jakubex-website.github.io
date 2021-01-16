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

/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var container, button, menu;

	container = document.getElementById( 'site-navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'h3' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += 'nav-menu';

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'main-small-navigation' ) )
			container.className = container.className.replace( 'main-small-navigation', 'main-navigation' );
		else
			container.className = container.className.replace( 'main-navigation', 'main-small-navigation' );
	};
} )();


}
/*
     FILE ARCHIVED ON 20:29:43 Jan 19, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:12 Jan 11, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 491.962
  exclusion.robots: 0.158
  exclusion.robots.policy: 0.146
  RedisCDXSource: 0.827
  esindex: 0.011
  LoadShardBlock: 463.863 (3)
  PetaboxLoader3.datanode: 333.548 (7)
  PetaboxLoader3.resolve: 168.468 (4)
  CDXLines.iter: 17.539 (2)
  load_resource: 70.089
*/