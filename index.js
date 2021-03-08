let canvas = document.querySelector('canvas');
canvas.width=1000;
canvas.height=500;

let xGrid = 10;
let yGrid = 10;

let ctx = canvas.getContext('2d');

function drawGrids() {
	ctx.beginPath();

	while(xGrid < canvas.height) {
		ctx.moveTo(0, xGrid);
		ctx.lineTo(canvas.width, xGrid);
		xGrid+=10;
	}
	while(yGrid < canvas.width) {
		ctx.moveTo(yGrid, 0);
		ctx.lineTo(yGrid, canvas.height);
		yGrid+=10;
	}
	ctx.stroke();
}
/**
 * https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
 * beginPath() : 새로운 경로 그리기
 * moveTo(x, y) : 펜을 x, y 좌표로 옮긴다.(그냥 커서만 옮긴다.)
 * lintTo(x, y) : 펜을 x, y 좌표로 그리며 움직인다.
 * stroke() : 실제로 윤곽선을 그린다.
 */

drawGrids();