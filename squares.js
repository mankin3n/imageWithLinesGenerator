const { createCanvas } = require('canvas');
const fs = require('fs');

// Calculate canvas size
const margin = 500;
const sideLargestSquare = 1000;
const canvasWidth = sideLargestSquare + margin * 2 + 200; // Additional space for text
const canvasHeight = sideLargestSquare * 3 + margin * 4; // Enough space for all squares and margins

const canvas = createCanvas(canvasWidth, canvasHeight);
const ctx = canvas.getContext('2d');

// Set the white background
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

// Function to draw a square
function drawSquare(topLeftX, topLeftY, side) {
  ctx.fillStyle = 'blue'; // Set fill color for squares
  ctx.beginPath();
  ctx.rect(topLeftX, topLeftY, side, side);
  ctx.closePath();
  ctx.fill();
}

// Function to add text
function addText(text, x, y) {
  ctx.fillStyle = 'black'; // Set text color
  ctx.font = '30px Arial'; // Increase font size for better visibility
  ctx.fillText(text, x, y);
}

// Draw three squares and add text
const squareSizes = [100, 500, 1000]; // Sizes of the squares
const topLeftXAllSquares = (canvasWidth - sideLargestSquare - 200) / 2; // Adjust for text space

let currentTopLeftY = margin;
squareSizes.forEach(size => {
  drawSquare(topLeftXAllSquares, currentTopLeftY, size);
  addText(`${size}px`, topLeftXAllSquares + size + 20, currentTopLeftY + size / 2 + 10); // Adjust text position
  currentTopLeftY += size + margin;
});

// Save to a file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('vertical-squares-with-text.png', buffer);
