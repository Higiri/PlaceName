$(function() {
    load("../municipality_list.csv");

	function load (url){
	
		$.get(url, function(data){ 
		
			data = data.replace(/^\d{1,2}(\|*)$/gm,"");
			data = data.split(/[\r\n]+/);
			data = data.filter(Boolean);
		
			var ti = new Object();
			ti.text = data[0];
			$("#ti").text(ti.text);
		
		})
	}
});