 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
	      if (document.hidden) {
		  $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
		  document.title = '别丢下猫猫！';
		  clearTimeout(titleTime);
	       }
	      else {
		  $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
		  document.title = '哈哈，我就知道你舍不得猫猫！' + OriginTitle;
		   titleTime = setTimeout(function (){
			   document.title = OriginTitle;
				                }, 2000);
		           }
	  });

