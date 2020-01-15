var tabbar = [
    		{title:"发现",url:"/index.php/topic/index.html"},
    		{title:"影院",url:"/index.php/vod/type/id/25.html"},
    		{title:"视频",url:"/index.php/vod/type/id/21.html"},
    		{title:"小说",url:"/index.php/art/type/id/32.html"},
    		{title:"会员",url:"/index.php/user/login.html"},
    		];
    $(function(){
    	$("body").append(createTabBar());
        $(".mui-bar-tab a").each(function(index,item){
            $(this).click(function(){
                //切换导航
                $(".mui-bar-tab a").removeClass("mui-active");
                $(this).addClass("mui-active");
                $(".mui-bar-tab a").each(function(index,item){
                    $(item).find("img").attr("src","/static/tabbar/tabbar0"+(index+1)+".png");
                });
                $(this).find("img").attr("src","/static/tabbar/tabbar0"+(index+1)+"_on.png");
            });
        });
       
    });
    
    function createTabBar(){
    	var localUrl = getUrlString();
    	var html = '<nav class="mui-bar mui-bar-tab">';
    		for(var x in tabbar){
    			var index=parseInt(x)+1;
    			if(localUrl==tabbar[x].url || (index==5 && localUrl.indexOf("user")!=-1)){
    				html += '<a class="mui-tab-item mui-active" href="'+tabbar[x].url+'">';
    				html += '<img src="/static/tabbar/tabbar0'+index+'_on.png" width="24%" />';
    			}else{
    				html += '<a class="mui-tab-item" href="'+tabbar[x].url+'">';
    				html += '<img src="/static/tabbar/tabbar0'+index+'.png" width="24%" />';
    			}
    		
        		html += '<span class="mui-tab-label">'+tabbar[x].title+'</span>';
    			html += '</a>';
    			
    		}
    	html += "<nav>";
    	return html;
    }

    function getUrlString(){
    	return window.location.pathname;
    }