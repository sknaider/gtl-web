const fs = require('fs');

const filePath = 'D:\\IA\\webgtl\\new\\itaw-clone\\src\\components\\layout\\HeroValorados.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Count opening and closing tags
const openingTags = content.match(/<[a-zA-Z][^>]*>/g) || [];
const closingTags = content.match(/<\/[a-zA-Z][^>]*>/g) || [];
const selfClosingTags = content.match(/<[a-zA-Z][^>]*\/>/g) || [];

console.log('Opening tags:', openingTags.length);
console.log('Closing tags:', closingTags.length);
console.log('Self-closing tags:', selfClosingTags.length);

// Find mismatches
const tagStack = [];
const lines = content.split('\n');

lines.forEach((line, index) => {
  const openMatch = line.match(/<([a-zA-Z][a-zA-Z0-9]*)/g);
  const closeMatch = line.match(/<\/([a-zA-Z][a-zA-Z0-9]*)/g);
  
  if (openMatch) {
    console.log(`Line ${index + 1}: Opening tags found:`, openMatch);
  }
  if (closeMatch) {
    console.log(`Line ${index + 1}: Closing tags found:`, closeMatch);
  }
});
