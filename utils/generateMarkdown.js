// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ![License Badge](https://img.shields.io/badge/license-${data.license}-green)

  ## Contents
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributions](#Contributions)
   - [Testing](#Testing)
   - [Questions](#Questions)

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
  If you have any questions, reach out to me at ${data.emailAddress} or open an issue on my github page: https://github.com/${data.githubUsername}.
`;
}

module.exports = generateMarkdown;
