function generateMarkdown(data) {
  return `

# Title
# ${data.title}
# Username 
${data.username}
# Description 
${data.description}
# Instructions
${data.instructions}
# Usage
${data.usage}
# License 
${data.license}
# Contributing
${data.contributing}
# Tests
${data.tests}
# Email
${data.email}

`;
}

module.exports = generateMarkdown;
