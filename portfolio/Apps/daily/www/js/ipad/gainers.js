if(!nmg_widget_gainers_counter)var nmg_widget_gainers_counter=0;if(nmg_widget_gainers_counter++,!nmg_widget_gainers_options)var nmg_widget_gainers_options={};!function(e,n){document.write('<div id="gainers-chart-'+e+'"></div>');var t=function(){jQuery(function(){var t="http://widgets.nationmedia.com/stocks/movers.php?chart=gainers&callback=?";jQuery.ajax({type:"GET",url:t,dataType:"jsonp",data:{widget:1,counters:n.counters||5,market_time:n.market_time||0,format:"json"},jsonpCallback:"gainersWidgetCallback"+e,success:function(n){jQuery("#gainers-chart-"+e).html(n.content)},error:function(){}})})};NMGWidgets.jQDeferredLoader.execute(t)}(nmg_widget_gainers_counter,nmg_widget_gainers_options),delete window.nmg_widget_gainers_options;