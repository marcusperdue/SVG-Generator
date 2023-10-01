const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => {
        
        return input.length >= 1 && input.length <= 3 ? true : 'Please enter 1 to 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
   
    let selectedShape;
    switch (answers.shape) {
      case 'Circle':
        selectedShape = new Circle();
        break;
      case 'Triangle':
        selectedShape = new Triangle();
        break;
      case 'Square':
        selectedShape = new Square();
        break;
      default:
        console.error('Invalid shape selection');
        return;
    }

     
    selectedShape.setText(answers.text);
    selectedShape.setColor(answers.shapeColor);

    
    const svgString = selectedShape.render();

   
    fs.writeFile('logo.svg', svgString, (err) => {
      if (err) {
        console.error('Error writing SVG file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
