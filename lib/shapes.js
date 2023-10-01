class Shape {
  constructor() {
    this.text = '';
    this.color = 'black';
    this.textColor = 'black'; 
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

  setTextColor(textColor) {
    if (isValidColor(textColor)) {
      this.textColor = textColor;
    } else {
      console.error('Invalid text color:', textColor);
    }
  }
}

function isValidColor(color) {
  const validColorNames = [
    'white',
    'black',
    'red',
    'green',
    'blue',
    'orange',
    'yellow',
    'purple',
    'pink',
    'brown',
    'gray',
    'cyan',
    'magenta',
    'aliceblue',
    'antiquewhite',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'blanchedalmond',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'oldlace',
    'olive',
    'olivedrab',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'plum',
    'powderblue',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'skyblue',
    'slateblue',
    'slategray',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'whitesmoke',
    'yellowgreen',
  ];

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
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 40,190 260,190" fill="${this.color}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.color}" />
        <text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
  }
}

module.exports = { Triangle, Circle, Square };
