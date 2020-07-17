function(){
	function lcXys(){
		var html = document.querySelector('html')
		var userAgent = navigator.userAgent
		//userAgent.indexOf("iPhone"),通过该方法获取iPhone在字符中的索引值
		html.className = "";
		if(userAgent.indexOf("iPhone")!=-1){
			html.classList.add("iphone")
		}else if(userAgent.indexOf("Android")!=-1){
			html.classList.add("android")
		}else if(userAgent.indexOf("iPad")!=-1){
			html.classList.add("ipad")
		}else{
			html.classList.add("pc")
		}
		if(window.innerWidth<640){
			html.classList.add("lt640")
			html.classList.add("lt960")
			html.classList.add("lt1200")
		}else if(window.innerWidth<906){
			html.classList.add("lt640")
			html.classList.add("lt1200")
			html.classList.add("gt960")
		}else if(window.innerWidth<1200){
			html.classList.add("gt960")
			html.classList.add("lt1200")
			html.classList.add("gt640")
		}else{
			html.classList.add("gt960")
			html.classList.add("gt1200")
			html.classList.add("gt640")
		}
		
		//rem布局
		var sreenWidth = window.innerWidth;
		var danwei =screenWidth/3.75;//屏幕的宽度/设计稿占满全屏的宽度为多少rem
		var html = document.querySelector("html")
		html.style.fontSize = danwei + "px";
	}
	lcXys()
	
	window.onresize = function(){
		lcXys()
	}
})()