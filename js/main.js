jQuery(document).ready(function() {
	
	var headerHeight = $(".header").height();
	var tabviewHeight = $(".tabView").height();
	var footerHeight = $(".footer").height();
	$(".mainPanel,.mainPanelLeft,.mainPanelCenter,.mainPanelRight").css("height", window.innerHeight - (headerHeight + footerHeight) + "px")
	$(".statusHeader").css("color", "green");

	var mainPanelHeight =  $(".mainPanel").height();
	$(".chatBoxMain").css("height" , mainPanelHeight -75);
	$(".chatBoxMain ul").css("max-height" , mainPanelHeight -120);
	
	var mainPanelCenterWidth = $(".mainPanelCenter").width();
	$(".chat-content-div").css("width", mainPanelCenterWidth -(mainPanelCenterWidth/2))
	 

	

	//for status chage color
	$("#status").change(function () {
		var el = $(this);
		if (el.val() === "1") {
			$(".statusHeader").css("color", "green");
		}
		else if (el.val() === "2") {
			$(".statusHeader").css("color", "red");
		}
		else if (el.val() === "3") {
			$(".statusHeader").css("color", "orange");
		}
	});
	
	// For Tab left
	jQuery('.mainPanelLeft .tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs #' + currentAttrValue).show().siblings().hide();
		
		// jQuery('.tabs '+currentAttrValue+' span').addClass('activeTabText').siblings().removeClass('inactiveTabText');
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		// jQuery('.'+currentAttrValue+' span').removeClass('inactiveTabText');
		// jQuery('img span').removeClass('dontShowTabText').siblings().addClass('dontShowTabText')
		e.preventDefault();
	});
	// for tab right
	jQuery('.mainPanelRight .tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
	//for tab middle
	jQuery('.mainPanelCenter .tabs.standard .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});

	jQuery('#channel .tab-list-text ').on('click', function(e)  {
		jQuery('.mainTabRow .row').removeClass('tab-list-active')
		jQuery(".toggleButtonText").parent('div').removeClass('tab-list-active');
		jQuery(".toggleButtonText").parent('div').addClass('toggleGroupColor');
		jQuery(this).parent('.mainTabRow .row').addClass('tab-list-active').siblings().removeClass('tab-list-active');
		
		// to show chat box and hidden all
		$(".mainPanelCenter .tabs").css("display","none")
		$(".channelSingle").css("display","block");
		$(".chatBoxMain ul").scrollTop(function() { return this.scrollHeight; });
	});

	jQuery('#user .tab-list-text ').on('click', function(e)  {
		jQuery('.mainTabRow .row').removeClass('tab-list-active')
		jQuery(".toggleButtonText").parent('div').removeClass('tab-list-active');
		jQuery(".toggleButtonText").parent('div').addClass('toggleGroupColor');
		jQuery(this).parent('.mainTabRow .row').addClass('tab-list-active').siblings().removeClass('tab-list-active');
		
		// to show chat box and hidden all
		// $(".mainPanelCenter .tabs").css("display","none")
		// $(".channelSingle").css("display","block");
		// $(".chatBoxMain ul").scrollTop(function() { return this.scrollHeight; });
	});

	jQuery('.toggleButtonText').on('click', function(e)  {
		jQuery('.mainTabRow .row').removeClass('tab-list-active')
		jQuery(".toggleButtonText").parent('div').removeClass('tab-list-active');
		jQuery(this).parent('div').addClass('tab-list-active');
		jQuery(this).parent('div').removeClass('toggleGroupColor');

		var toggleButtonName = jQuery(this).attr("for");

		if(toggleButtonName == "toggleDevelopment"){
			$(".mainPanelCenter .tabs").css("display","none")
			$(".developmentTeam").css("display","block")
		}
		else if(toggleButtonName == "toggleQATeam"){
			$(".mainPanelCenter .tabs").css("display","none")
			$(".qaTeam").css("display","block")
		}
		else {
			$(".mainPanelCenter .tabs").css("display","none")
			$(".defaultPanel").css("display","block")
		}

	});
	
});