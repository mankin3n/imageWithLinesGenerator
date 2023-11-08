const { createCanvas } = require('canvas');
const fs = require('fs');

// Calculate canvas size
const margin = 500;
const radiusLargestCircle = 1000;
const canvasWidth = radiusLargestCircle * 2 + margin * 2; // Diameter of the largest circle plus margins on each side
const canvasHeight = radiusLargestCircle * 2 + margin * 4; // Enough space for all circles and margins

const canvas = createCanvas(canvasWidth, canvasHeight);
const ctx = canvas.getContext('2d');

// Set the white background
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

// Function to draw a circle given its center and radius
function drawCircle(centerX, centerY, radius) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

// Set the fill color for the circles
ctx.fillStyle = 'blue';

// Draw three circles vertically aligned, with the smallest at the top
const centerYFirstCircle = margin + 10; // Center of the first (smallest) circle
const centerYSecondCircle = centerYFirstCircle + 20 + margin + 100; // Center of the second circle
const centerYThirdCircle = centerYSecondCircle + 200 + margin + 1000; // Center of the third (largest) circle

drawCircle(canvasWidth / 2, centerYFirstCircle, 10);   // 10px radius circle
drawCircle(canvasWidth / 2, centerYSecondCircle, 100); // 100px radius circle
drawCircle(canvasWidth / 2, centerYThirdCircle, 1000); // 1000px radius circle

// Save to a file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('vertical-circles.png', buffer);
