document.addEventListener("DOMContentLoaded",()=>{var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0<e.length&&e.forEach(r=>{r.addEventListener("click",()=>{var e=r.dataset.target,e=document.getElementById(e);r.classList.toggle("is-active"),e.classList.toggle("is-active")})})});for(var show_search,line_numbers,yearArray=new Array,monthObj=new Object,uniqueYear=($(".post-archive-item").each(function(){var e=$(this).attr("year"),r=$(this).attr("month");yearArray.push(e),e in monthObj||(monthObj[e]=new Array),monthObj[e].push(r)}),$.unique(yearArray)),i=0;i<uniqueYear.length;i++)for(var html="<hr><h2>"+uniqueYear[i]+"</h2>",uniqueMonth=($("[year='"+uniqueYear[i]+"']:first").before(html),$.unique(monthObj[uniqueYear[i]])),m=0;m<uniqueMonth.length;m++){html="<h4>"+uniqueMonth[m]+"</h4>";$("[year='"+uniqueYear[i]+"'][month='"+uniqueMonth[m]+"']:first").before(html)}(show_search=void 0===show_search?!1:show_search)||$("#search-btn").hide(),$("#search-btn").click(function(e){$("#search-form").fadeIn(),$("#search-btn").hide(),$("#search-input").focus(),$("#search-results").show(),e.stopPropagation()}),$("#close-btn").click(function(e){$("#search-form").hide(),$("#search-results").hide(),$("#search-btn").fadeIn(),e.stopPropagation()}),$(document).mouseup(function(e){var r=$("#search-form");r.is(e.target)||0!==r.has(e.target).length||(r.hide(),$("#search-results").hide(),$("#search-btn").fadeIn())}),$(window).scroll(function(){$("#search-form").hide(),$("#search-results").hide(),$("#search-btn").show()}),$(window).scroll(function(){$(window).scrollTop()<400&&$("#fizzy-credit").fadeIn(),400<=$(window).scrollTop()&&$("#fizzy-credit").fadeOut()}),(line_numbers=void 0===line_numbers?!1:line_numbers)&&$("pre").addClass("line-numbers");
//# sourceMappingURL=main.js.map