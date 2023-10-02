const { Triangle, Circle, Square } = require('./shapes');

// Test cases for the triangle class
describe('Triangle Class', () => {
  it('should render a valid SVG for a triangle', () => {
    const triangle = new Triangle();
    triangle.setText('ABC');
    triangle.setColor('red');
    const svg = triangle.render();
    expect(svg).toContain('<svg');
    expect(svg).toContain('<polygon');
    expect(svg).toContain('fill="red"');
    expect(svg).toContain('ABC');
  });
});

// Test cases for the circle class
describe('Circle Class', () => {
  it('should render a valid SVG for a circle', () => {
    const circle = new Circle();
    circle.setText('X');
    circle.setColor('blue');
    const svg = circle.render();
    
    expect(svg).toContain('<svg');
    expect(svg).toContain('<circle');
    expect(svg).toContain('fill="blue"');
    expect(svg).toContain('X');
  });
});

// Test cases for the square class
describe('Square Class', () => {
  it('should render a valid SVG for a square', () => {
    const square = new Square();
    square.setText('123');
    square.setColor('green');
    const svg = square.render();
    expect(svg).toContain('<svg');
    expect(svg).toContain('<rect');
    expect(svg).toContain('fill="green"');
    expect(svg).toContain('123');
  });
});
