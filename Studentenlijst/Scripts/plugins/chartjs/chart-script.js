/*
Line Chart
*/
var lineChartData = {
	labels : ["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"],
	datasets : [
		{
			label: "My dataset",
			fillColor : "rgba(255,255,255,0)",
			strokeColor : "#fff",
			pointColor : "#00796b ",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data: [300, 280, 260, 240, 220, 210, 205, 105, 406, 386, 366, 316]
		}
	]

}

window.onload = function(){
		var lineChart = document.getElementById("line-chart").getContext("2d");
		window.lineChart = new Chart(lineChart).Line(lineChartData, {
			scaleShowGridLines : false,
			bezierCurve : false,
			scaleFontSize: 12,
			scaleFontStyle: "normal",
			scaleFontColor: "#fff",
			responsive: true,			
		});
};
