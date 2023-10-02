const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); 
const { Triangle, Circle, Square } = require('./lib/shapes');

// Prompt the user for input
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

// Create shape based on user input
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

// Set properties of the selected shape
    selectedShape.setText(answers.text);
    selectedShape.setTextColor(answers.textColor);
    selectedShape.setColor(answers.shapeColor);

    const svgString = selectedShape.render();

 
    const timestamp = Date.now();
    const fileName = `logo_${timestamp}.svg`;

    const filePath = path.join(__dirname, 'examples', fileName);

  // Write the SVG file to the specified path
    fs.writeFile(filePath, svgString, (err) => {
      if (err) {
        console.error('Error writing SVG file:', err);
      } else {
        console.log(`Generated ${fileName} in the examples folder`);
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
