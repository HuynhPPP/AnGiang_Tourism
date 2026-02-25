const fs = require('fs');
const path = require('path');

const filePath =
  'd:\\Work\\Project_Web\\AnGiang_Tourism\\src\\data\\defaults.ts';

// Read file
let content = fs.readFileSync(filePath, 'utf8');

// Replace patterns
// Pattern 1: image: '/path' -> images: ['/path']
content = content.replace(/(\s+)image: ('\/[^']+'),/g, '$1images: [$2],');

// Pattern 2: image: 'https://url' -> images: ['https://url']
content = content.replace(
  /(\s+)image: ('https:\/\/[^']+'),/g,
  '$1images: [$2],'
);

// Pattern 3: Handle multi-line image URLs
content = content.replace(
  /(\s+)image:\s*\n\s*('https?:\/\/[^']+'),/g,
  '$1images: [$2],'
);

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Migration complete!');
console.log('Converted all image: fields to images: arrays');
