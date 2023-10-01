class Shape {
    constructor() {
      
      this.text = ''; 
      this.color = 'black'; 
    }
  
    
    setText(text) {
      this.text = text;
    }
  
   
    setColor(color) {
      if (isValidColor(color)) {
        this.color = color;
      } else {
        console.error('Invalid color:', color);
      }
    }
  }
  
   
  function isValidColor(color) {
    
    const validColorNames = ['white', 'black', 'red', 'green', 'blue'];
    if (validColorNames.includes(color.toLowerCase())) {
      return true;
    } else if (/^#([0-9A-Fa-f]{3}){1,2}$/i.test(color)) {
      return true;
    }
    return false;
  }
  
  class Triangle extends Shape {
    constructor() {
      super();
      
    }
  
    render() {
      
      return `<svg width="300" height="200">
        <polygon points="150,10 40,190 260,190" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">
          ${this.text}
        </text>
      </svg>`;
    }
  }
  
  class Circle extends Shape {
    constructor() {
      super();
   
    }
  
    render() {
      
      return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">
          ${this.text}
        </text>
      </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor() {
      super();
      
    }
  
    render() {
   
      return `<svg width="300" height="200">
        <rect width="200" height="200" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">
          ${this.text}
        </text>
      </svg>`;
    }
  }
  
  module.exports = { Triangle, Circle, Square };
  