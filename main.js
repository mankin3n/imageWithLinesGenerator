const fs = require('fs');
const { createCanvas } = require('canvas');

// Set margins
const margin = 500;

// Calculate the canvas dimensions to fit all the lines with updated margins
const width = 2 * (margin + 1000 + margin);
const height = 2 * (3 * margin + 240); 

// Create a new canvas instance
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Scale the drawing context for better quality
//ctx.scale(2, 2);

// Fill the canvas with a white background
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set text properties
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'right';  // This will align the text to the right so it ends just before the line starts

// Draw the lines with the updated margins, bright color, and text depiction
const lineHeights = [margin + 60, margin + 150, margin + 240];
const lineWidths = [10, 100, 1000];

ctx.strokeStyle = '#00FFFF';  // Bright cyan color
ctx.lineWidth = 2;

for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(margin, lineHeights[i]);
    ctx.lineTo(margin + lineWidths[i], lineHeights[i]);
    ctx.stroke();
    
    // Add text depictions
    ctx.fillText(`${lineWidths[i]}px`, margin - 20, lineHeights[i] + 10);  // 20px offset from the line start and 10px vertical adjustment for better positioning
}

// Save the canvas to an image file
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('output.png', buffer);

console.log('Bright colored lines with text depictions and updated margins image created and saved as output.png');
