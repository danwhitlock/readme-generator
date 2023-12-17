// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Contents

  ## Installation
  ${data.dependencies}
  
  ## Usage
  ${data.instructions}
  
  ## License
  ${data.license}

  ## Contributions
  ${data.contributions}

  ## Testing
  ${data.tests}

  ## Questions
  If you have any questions, reach out to me at ${emailAddress}
`;
}

module.exports = generateMarkdown;
