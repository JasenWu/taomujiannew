// JavaScript Document
    function AddFavorite(sURL, sTitle)
    {
        try
        {
            window.external.addFavorite(sURL, sTitle);
        }
        catch (e)
        {
            try
            {
                window.sidebar.addPanel(sTitle, sURL, "");
            }
            catch (e)
            {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
	
    function SetHome(obj,vrl)
    {
        try
        {
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝，请检查杀毒软件权限");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
    }
	
	//起始位置,单位px
	var ss=0;
	
	//翻滚高度,单位px
	var step=31;
	
	function jc_marquee(elemtid,y){
		$('#'+elemtid).animate({top: '-'+y+'px'} , "slow");
	}
	
	function jc_vmarquee(id,time){
		
		ss=ss+step;
		if (ss>$('#'+id).height()-step){
			ss=00;
		}
		setTimeout("jc_marquee('"+id+"',"+ss+");jc_vmarquee('"+id+"',"+time+")",time);
	}
	 
	
	//文章页侧边栏收缩
	function hideright(a){
	if (a==1)
	{
		$('.pright').hide();
		$('.pleft').width(982);
		$('.hiderightbtn').attr('href','javascript:hideright(2);');
		$('.hiderightbtn').attr('title','显示侧边栏');
		$('.hiderightbtn').html("<img src='/images/icon/26.png'/>");
	}
	else 
	{
		$('.pright').show();
		$('.pleft').width(636);
		$('.hiderightbtn').attr('href','javascript:hideright(1);');
		$('.hiderightbtn').attr('title','隐藏侧边栏');
		$('.hiderightbtn').html("<img src='/images/icon/27.png'/>");
	}
	};
	
	//文章页改变字体大小
	function changetextsize(a){
		if (a==1)
		{
			$('#content').css('font-size','14px');
			$('#content').css('line-height','28px');
		}
		if (a==2)
		{
			$('#content').css('font-size','16px');
			$('#content').css('line-height','32px');
		}
	};
	
	

	
	
