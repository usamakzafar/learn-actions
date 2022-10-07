const core = require('@actions/core');
const github = require('@actions/github');
const URL = require("url").URL;

try {
  const descriptionToCheck = core.getInput('description-text');
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  // URL Check
  if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(descriptionToCheck)) {
    core.setOutput(true);
  }
  else {
    setFailed("No url found");
  }
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}