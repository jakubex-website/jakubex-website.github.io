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

jQuery(document).ready(function(){
	jQuery("#scroll-up").hide();
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 1000) {
				jQuery('#scroll-up').fadeIn();
			} else {
				jQuery('#scroll-up').fadeOut();
			}
		});
		jQuery('a#scroll-up').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

}
/*
     FILE ARCHIVED ON 15:03:13 Jan 25, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:08 Jan 11, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 93.106 (2)
  load_resource: 118.069
  PetaboxLoader3.datanode: 119.497 (4)
  captures_list: 163.829
  CDXLines.iter: 37.448 (3)
  exclusion.robots.policy: 0.287
  RedisCDXSource: 10.598
  exclusion.robots: 0.311
  esindex: 0.022
  LoadShardBlock: 108.024 (3)
*/