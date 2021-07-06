// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'None'){
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`  
  }else{
    return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != 'None'){
    return `* [License](#license)`
  }else{
    return "";
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'None'){
    return `## License
    
    This Project is licensed under the ${license} license`
  }else{
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing 
${data.contributing}
##  Test
In order to test please run
${data.tests}
## Questions
If you have any questions on this project please contact me at
${data.email}

or feel free to check out my [github](https://github.com/${data.github})
`
}

module.exports = generateMarkdown;
