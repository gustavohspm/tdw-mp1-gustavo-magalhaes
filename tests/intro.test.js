const fs = require('fs');
const path = require('path');

test('check if word "blog" exists in file intro.js', () => {
  const data = fs.readFileSync(path.join(__dirname, '../components/intro.js'), 'utf8');
  expect(data).toMatch(/blog/);
});
