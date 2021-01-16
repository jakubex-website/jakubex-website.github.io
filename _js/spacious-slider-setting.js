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
 * Slider Setting
 * 
 * Contains all the slider settings for the featured post/page slider.
 */
 
jQuery(window).load(function() {
jQuery('.slider-cycle').cycle({ 
   fx:            		'fade',
   pager:  					'#controllers',
	activePagerClass: 	'active',
	timeout:       		4000,
	speed:         		1000,
	pause:         		1,
	pauseOnPagerHover: 	1,
	width: 					'100%',
	containerResize: 		0,
	fit:           		1,
	after: 					function ()	{
									jQuery(this).parent().css("height", jQuery(this).height());
								},
   cleartypeNoBg: 		true

});

});

}
/*
     FILE ARCHIVED ON 16:07:19 Jan 10, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:13 Jan 11, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.178
  exclusion.robots.policy: 0.164
  PetaboxLoader3.datanode: 120.261 (4)
  PetaboxLoader3.resolve: 75.852 (2)
  RedisCDXSource: 2.481
  LoadShardBlock: 126.057 (3)
  esindex: 0.015
  captures_list: 164.503
  CDXLines.iter: 31.57 (3)
  load_resource: 126.298
*/