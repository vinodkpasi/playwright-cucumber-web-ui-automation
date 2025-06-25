// eslint-disable-next-line @typescript-eslint/no-require-imports
const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "SkillCycle Test Report",
  pageTitle: "SkillCycle Test Report",
  displayDuration: false,
});
