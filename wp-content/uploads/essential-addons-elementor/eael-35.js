!function(e){var o={};function a(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,o,r){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)a.d(r,i,function(o){return e[o]}.bind(null,i));return r},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="",a(a.s=12)}({12:function(e,o){var a=function(e,o){var a=e.find(".eael-img-accordion").eq(0),r=void 0!==a.data("img-accordion-id")?a.data("img-accordion-id"):"",i=void 0!==a.data("img-accordion-type")?a.data("img-accordion-type"):"",n=0;"on-click"===i?o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").on("click",(function(a){0==o(this).hasClass("overlay-active")&&a.preventDefault(),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover",e).removeClass("overlay-active"),0==n&&(o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").hasClass("overlay-active")&&o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").removeClass("overlay-active"),n+=1),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").css("flex","1"),o(this).find(".overlay").parent(".eael-image-accordion-hover").addClass("overlay-active"),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").find(".overlay-inner").removeClass("overlay-inner-show"),o(this).find(".overlay-inner").addClass("overlay-inner-show"),o(this).css("flex","3")})):o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").on("hover",(function(){o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").hasClass("overlay-active")&&(o("#eael-img-accordion-"+r+" .eael-image-accordion-hover.overlay-active").css("flex","1"),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover").removeClass("overlay-active"),o("#eael-img-accordion-"+r+" .eael-image-accordion-hover .overlay .overlay-inner").removeClass("overlay-inner-show"))}))};ea.hooks.addAction("init","ea",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-image-accordion.default",a)}))}});!function(e){var n={};function a(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=n,a.d=function(e,n,i){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)a.d(i,l,function(n){return e[n]}.bind(null,l));return i},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=23)}({23:function(e,n){var a=function(e,n){var a=n(".eael-simple-menu-container",e).data("indicator-class"),i=n(".eael-simple-menu-container",e).data("hamburger-icon"),l=n(".eael-simple-menu-container",e).data("indicator"),s=n(".eael-simple-menu-container",e).data("dropdown-indicator"),t=n(".eael-simple-menu-container",e).data("dropdown-indicator-class"),r=n(".eael-simple-menu",e).hasClass("eael-simple-menu-horizontal");n(".eael-simple-menu--stretch");function o(){if(window.matchMedia("(max-width: 1024px)").matches)if(n(".eael-simple-menu-container",e).addClass("eael-simple-menu-hamburger"),n(".eael-simple-menu-horizontal",e).addClass("eael-simple-menu-responsive"),n(".eael-simple-menu-toggle-text",e).text(n(".eael-simple-menu-horizontal .current-menu-item a",e).eq(0).text()),n(".eael-simple-menu-container",e).hasClass("eael-simple-menu--stretch")){var a={};n(".eael-simple-menu-horizontal",e).parent().hasClass("eael-nav-menu-wrapper")||n(".eael-simple-menu-horizontal",e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');var i=n(".eael-simple-menu-container nav",e);p(i),a.width=parseFloat(n(".elementor").width())+"px",a.left=-parseFloat(i.offset().left)+"px",a.position="absolute",i.css(a)}else{var l={};n(".eael-simple-menu-horizontal",e).parent().hasClass("eael-nav-menu-wrapper")||n(".eael-simple-menu-horizontal",e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');var s=n(".eael-simple-menu-container nav",e);p(s),l.width="",l.left="",l.position="inherit",s.css(l)}else n(".eael-simple-menu-container",e).removeClass("eael-simple-menu-hamburger"),n(".eael-simple-menu-horizontal",e).removeClass("eael-simple-menu-responsive"),n(".eael-simple-menu-horizontal, .eael-simple-menu-horizontal ul",e).css("display",""),n(".eael-simple-menu-container nav",e).removeAttr("style")}function p(e){var n={width:"",left:"",position:"inherit"};e.css(n)}r&&("svg"==l?n(".eael-simple-menu > li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="indicator-svg">'+a+"</span>")})):n(".eael-simple-menu > li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="'+a+'"></span>')})),"svg"==s?n(".eael-simple-menu > li ul li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="dropdown-indicator-svg">'+t+"</span>")})):n(".eael-simple-menu > li ul li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="'+t+'"></span>')})),n(".eael-simple-menu-horizontal",e).before('<span class="eael-simple-menu-toggle-text"></span>').after('<button class="eael-simple-menu-toggle">'+i+'<span class="eael-simple-menu-toggle-text"></span></button>'),o(),n(".eael-simple-menu-container",e).on("click",".eael-simple-menu-toggle",(function(e){e.preventDefault();var a=n(this).siblings("nav").children(".eael-simple-menu-horizontal");"none"==a.css("display")?a.slideDown(300):a.slideUp(300)})),n(window).on("resize load",(function(){o()}))),n(".eael-simple-menu > li.menu-item-has-children",e).each((function(){if("svg"==l){parseInt(n("a",this).css("line-height"));n(this).append('<span class="eael-simple-menu-indicator"> '+a+"</span>")}else{parseInt(n("a",this).css("line-height"));n(this).append('<span class="eael-simple-menu-indicator '+a+'"></span>')}})),n(".eael-simple-menu > li ul li.menu-item-has-children",e).each((function(e){if("svg"==s){parseInt(n("a",this).css("line-height"));n(this).append('<span class="eael-simple-menu-indicator"> '+t+"</span>")}else{parseInt(n("a",this).css("line-height"));n(this).append('<span class="eael-simple-menu-indicator '+t+'"></span>')}})),n(".eael-simple-menu-dropdown-align-left .eael-simple-menu-vertical li.menu-item-has-children").each((function(){var e=parseInt(n("a",n(this)).css("padding-left"));n("ul li a",this).css({"padding-left":e+20+"px"})})),n(".eael-simple-menu-dropdown-align-right .eael-simple-menu-vertical li.menu-item-has-children").each((function(){var e=parseInt(n("a",n(this)).css("padding-right"));n("ul li a",this).css({"padding-right":e+20+"px"})})),n(".eael-simple-menu",e).on("click",".eael-simple-menu-indicator",(function(e){e.preventDefault(),n(this).toggleClass("eael-simple-menu-indicator-open"),n(this).hasClass("eael-simple-menu-indicator-open")?n(this).siblings("ul").slideDown(300):n(this).siblings("ul").slideUp(300)})),n(".eael-simple-menu-container",e).on("click",".eael-simple-menu-responsive li a",(function(e){n(this).parents(".eael-simple-menu-horizontal").slideUp(300)}))};jQuery(window).on("elementor/frontend/init",(function(){if(ea.elementStatusCheck("eaelSimpleMenu"))return!1;elementorFrontend.hooks.addAction("frontend/element_ready/eael-simple-menu.default",a)}))}});