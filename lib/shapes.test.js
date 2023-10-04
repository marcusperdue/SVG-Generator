const { Triangle, Circle, Square } = require('./shapes');

// SVG Rendering Tests
describe('SVG Rendering Tests', () => {

  // Test cases for the triangle class
  describe('Triangle SVG Rendering', () => {
    let triangle;
    let svg;

    beforeEach(() => {
      triangle = new Triangle();
      triangle.setText('ABC');
      triangle.setColor('red');
      svg = triangle.render();
    });

    it('should render a valid SVG container for a triangle', () => {
      expect(svg).toContain('<svg');
    });

    it('should render a triangle polygon', () => {
      expect(svg).toContain('<polygon');
    });

    it('should render the triangle with the correct color', () => {
      expect(svg).toContain('fill="red"');
    });

    it('should render the triangle with the correct text', () => {
      expect(svg).toContain('ABC');
    });
  });

  // Test cases for the circle class
  describe('Circle SVG Rendering', () => {
    let circle;
    let svg;

    beforeEach(() => {
      circle = new Circle();
      circle.setText('X');
      circle.setColor('blue');
      svg = circle.render();
    });

    it('should render a valid SVG container for a circle', () => {
      expect(svg).toContain('<svg');
    });

    it('should render a circle', () => {
      expect(svg).toContain('<circle');
    });

    it('should render the circle with the correct color', () => {
      expect(svg).toContain('fill="blue"');
    });

    it('should render the circle with the correct text', () => {
      expect(svg).toContain('X');
    });
  });

  // Test cases for the square class
  describe('Square SVG Rendering', () => {
    let square;
    let svg;

    beforeEach(() => {
      square = new Square();
      square.setText('123');
      square.setColor('green');
      svg = square.render();
    });

    it('should render a valid SVG container for a square', () => {
      expect(svg).toContain('<svg');
    });

    it('should render a rectangle for the square', () => {
      expect(svg).toContain('<rect');
    });

    it('should render the square with the correct color', () => {
      expect(svg).toContain('fill="green"');
    });

    it('should render the square with the correct text', () => {
      expect(svg).toContain('123');
    });
  });

});
