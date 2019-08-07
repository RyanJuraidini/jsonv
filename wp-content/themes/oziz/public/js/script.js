var THEMEOZIZ = THEMEOZIZ || {};

(function ($) {
    
    "use strict";
    
    THEMEOZIZ.header = {
        
        init: function () {
            THEMEOZIZ.header.video();
            THEMEOZIZ.header.menu();
            THEMEOZIZ.header.skip_link();
			
			THEMEOZIZ.header.header_v1_anchor();
            if (oziz_vars.header_menu_type == 'fixed') {
				THEMEOZIZ.header.header_v1();
				
			}
            
        },
        video : function () {
            jQuery(".player").YTPlayer({
                height: "100%",
                width: "100%"
            });
        },
        skip_link : function () {
            var isIe = /(trident|msie)/i.test(navigator.userAgent);

            if (isIe && document.getElementById && window.addEventListener ) {
                window.addEventListener(
                    'hashchange', function () {
                        var id = location.hash.substring(1),
                        element;

                        if (! ( /^[A-z0-9_-]+$/.test(id) ) ) {
                            return;
                        }

                        element = document.getElementById(id);

                        if (element ) {
                            if (! ( /^(?:a|select|input|button|textarea)$/i.test(element.tagName) ) ) {
                                element.tabIndex = -1;
                            }

                            element.focus();
                        }
                    }, false 
                );
            }
        },
        
        menu : function () {
            var container, button, menu, links, i, len;
            container = document.getElementById('site-navigation');
            if (! container ) {
                return;
            }

            button = container.getElementsByTagName('button')[0];
            if ('undefined' === typeof button ) {
                return;
            }

            menu = container.getElementsByTagName('ul')[0];

            // Hide menu toggle button if menu is empty and return early.
            if ('undefined' === typeof menu ) {
                button.style.display = 'none';
                return;
            }

            menu.setAttribute('aria-expanded', 'false');
            if (-1 === menu.className.indexOf('nav-menu') ) {
                menu.className += ' nav-menu';
            }

            button.onclick = function () {
                if (-1 !== container.className.indexOf('toggled') ) {
                    container.className = container.className.replace(' toggled', '');
                    button.setAttribute('aria-expanded', 'false');
                    menu.setAttribute('aria-expanded', 'false');
                } else {
                    container.className += ' toggled';
                    button.setAttribute('aria-expanded', 'true');
                    menu.setAttribute('aria-expanded', 'true');
                }
            };

            // Get all the link elements within the menu.
            links    = menu.getElementsByTagName('a');

            // Each time a menu link is focused or blurred, toggle focus.
            for ( i = 0, len = links.length; i < len; i++ ) {
                links[i].addEventListener('focus', toggleFocus, true);
                links[i].addEventListener('blur', toggleFocus, true);
            }

            /**
             * Sets or removes .focus class on an element.
             */
            function toggleFocus()
            {
                var self = this;

                // Move up through the ancestors of the current link until we hit .nav-menu.
                while ( -1 === self.className.indexOf('nav-menu') ) {

                      // On li elements toggle the class .focus.
                    if ('li' === self.tagName.toLowerCase() ) {
                        if (-1 !== self.className.indexOf('focus') ) {
                                      self.className = self.className.replace(' focus', '');
                        } else {
                                  self.className += ' focus';
                        }
                    }

                      self = self.parentElement;
                }
            }

            /**
             * Toggles `focus` class to allow submenu access on tablets.
             */
            ( function ( container ) {
                var touchStartFn, i,
                parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

                if ('ontouchstart' in window ) {
                    touchStartFn = function ( e ) {
                         var menuItem = this.parentNode, i;

                        if (! menuItem.classList.contains('focus') ) {
                            e.preventDefault();
                            for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
                                if (menuItem === menuItem.parentNode.children[i] ) {
                                    continue;
                                }
                                menuItem.parentNode.children[i].classList.remove('focus');
                            }
                            menuItem.classList.add('focus');
                        } else {
                            menuItem.classList.remove('focus');
                        }
                    };

                    for ( i = 0; i < parentLink.length; ++i ) {
                        parentLink[i].addEventListener('touchstart', touchStartFn, false);
                    }
                }
            }( container ) );
        },
        
        header_v1: function () {
            
            let wrapper_video_exist =  $('#wrapper_oz-video').length;
            
            $header.css('position', 'relative');
            $window.on(
                'scroll', function () {
            
                    if (wrapper_video_exist>0 ) { 
                        $header_top = $('#wpadminbar').height() + $('#wrapper_oz-video').height() + $('#masthead').height();
                    } else {
                        $header_top = $('#wpadminbar').height() + $('#oz-video').height() + $('#masthead').height();
                    }
                    if(jQuery(this).scrollTop() > $header_top) {
                           $header.css('position', 'fixed');
                        if ($('#wpadminbar').css('position')==='absolute') {
                            $header.css('top', '0px')
                        } else {
                            $header.css('top', $('#wpadminbar').height() + 'px');    
                        }                    
                    }
                    else if(jQuery(this).scrollTop() < $header_top) {
                           $header.css('position', 'relative');
                           $header.css('top',0);
                    }
                }
            );
        },
		
		
		header_v1_anchor: function() {
			/* scrollTo */
			function oz_scrollTo(id){
				if (oziz_vars.header_menu_type == 'fixed') {
					$('html,body').animate({scrollTop: $(id).offset().top - $('#wpadminbar').height() - $('#masthead').height()},'slow');
				} else {
					$('html,body').animate({scrollTop: $(id).offset().top},'slow');
				}
			};
			$('#masthead a[href*=#]').click(function() {				
				let target = this.hash;				
				oz_scrollTo(target);
			});
		}
    }
    
    // Document on resize
    THEMEOZIZ.documentOnResize = {
        
        init: function () {
            
            
        }
        
    };
    
    // Document on ready
    THEMEOZIZ.documentOnReady = {
        init: function () {
            THEMEOZIZ.header.init();            
        }
    }
    var $window             = $(window),
    $header            = $('#masthead'),
    $header_top  = 1;
    
    $(document).ready(THEMEOZIZ.documentOnReady.init);
    $window.on('resize', THEMEOZIZ.documentOnResize.init)
    
})(jQuery);