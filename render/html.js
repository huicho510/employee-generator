const fs = require("fs");
const path = require("path");
const util = require("util");


const manager = require("./constructors/manager");
const engineer = require("./constructors/engineer");
const intern = require("./constructors/Intern");


const templatesDir = path.resolve(__dirname, "../templates1");

const buildDir = path.resolve(__dirname, "../main/");


const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);



async function render(employees) {
  const html = [];

  const [
    managerTemplate,
    internTemplate,
    engineerTemplate,
    mainTemplate
  ] = await Promise.all([
    readFile(path.resolve(templatesDir, "manager.html"), "utf8"),
    readFile(path.resolve(templatesDir, "Intern.html"), "utf8"),
    readFile(path.resolve(templatesDir, "engineer.html"), "utf8"),
    readFile(path.resolve(templatesDir, "main.html"), "utf8")
  ]);


  html.push(
    employees
      .filter(employee => employee instanceof manager)
      .map(employee => {
        let template = managerTemplate;
        for (const key in employee) {
          template = replacePlaceholder(template, key, employee[key]);
        }
        return template;
      })
      .join("")
  );


  html.push(
    employees
      .filter(employee => employee instanceof engineer)
      .map(employee => {
        let template = engineerTemplate;
        for (const key in employee) {
          template = replacePlaceholder(template, key, employee[key]);
        }
        return template;
      })
      .join("")
  );


  html.push(
    employees
      .filter(employee => employee instanceof intern)
      .map(employee => {
        let template = internTemplate;
        for (const key in employee) {
          template = replacePlaceholder(template, key, employee[key]);
        }
        return template;
      })
      .join("")
  );


  if (!fs.existsSync(buildDir)) { 
    fs.mkdirSync(buildDir);
  }
  await writeFile(
    path.resolve(buildDir, "index.html"),
    replacePlaceholder(mainTemplate, "body", html.join(""))
  );
}
function replacePlaceholder(template, target, value) {
  const regex = new RegExp("{{ " + target + " }}", "gm");
  const newTemplate = template.replace(regex, value);
  return newTemplate;
}

module.exports = render;