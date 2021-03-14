let canvas = document.querySelector('canvas');
canvas.width=1000;
canvas.height=500;

let xGrid = 10;
let yGrid = 10;
let cellSize = 10;

let ctx = canvas.getContext('2d');

let data = {
	1910 : 1000,
	1920 : 2700,
	1930 : 500,
	1940 : 2100,
	1950 : 2100,
	1960 : 3000,
	1970 : 100,
	1980 : 2500,
	1990 : 1250,
	2000 : 1120,
	2010 : 1950,
	2020 : 3100,
	2030 : 3000,
	2040 : 2400
}

const entries = Object.entries(data);

function drawGrids() {
	ctx.beginPath();

	while(xGrid < canvas.height) {
		ctx.moveTo(0, xGrid);
		ctx.lineTo(canvas.width, xGrid);
		xGrid+=cellSize;
	}
	while(yGrid < canvas.width) {
		ctx.moveTo(yGrid, 0);
		ctx.lineTo(yGrid, canvas.height);
		yGrid+=cellSize;
	}

	ctx.strokeStyle = "gray";
	ctx.stroke();
}

function blocks(count) {
	return count*cellSize;
}

function drawAxis() {
	let xPlot = 5;
	let yPlot = 40;
	let years = 1900;
	let stock = 0;

	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.moveTo(blocks(5), blocks(5));
	ctx.lineTo(blocks(5), blocks(40));
	ctx.lineTo(blocks(80), blocks(40));

	for(let i = 1; i <= 15; i++) { // x축 label
		ctx.strokeText(years, blocks(xPlot), blocks(41));
		ctx.arc(blocks(xPlot), blocks(40), 2, 0, Math.PI*2, true);
		xPlot += 5;
		years += 10;
	}

	for(let i = 1; i <= 10; i++) { // y축 label
		ctx.strokeText(stock, blocks(2), blocks(yPlot));
		yPlot -= 5;
		stock += 500;
	}

	ctx.stroke();
}

function drawChart() {
	ctx.beginPath();
	ctx.strokeStyle = "black";
	ctx.moveTo(blocks(5), blocks(40));

	var xPlot = 10;

	for(const [years, stock] of entries) {
		var stockInBlocks = stock/100; // 현재 블록 하나가 100이므로. 일단 임시로.
		ctx.strokeText(years, blocks(xPlot), blocks(40-stockInBlocks-1));
		ctx.lineTo(blocks(xPlot), blocks(40-stockInBlocks));
		ctx.arc(blocks(xPlot), blocks(40-stockInBlocks), 2, 0, Math.PI*2, true);
		xPlot += 5;
	}
	ctx.stroke();
}

drawGrids();
drawAxis();
drawChart();