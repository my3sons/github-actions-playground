const core = require('@actions/core');
const github = require('@actions/github');

try {

  core.debug("debug message");
  core.warning("my warning messsage");
  core.error("my error message");



  //  throw(new error("oh my that is not good"));
    const name = core.getInput('who-to-greet');
    
    core.setSecret(name); //this will cause name to appear as *** in logs
    console.log(`Hello ${name}`);
    
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    
    console.log(JSON.stringify(github, null, '\t'));

    core.exportVariable("HELLO", "hello Carey"); //this create env variable that can be used in subsequent steps

} catch (error) {
    core.setFailed("it failed!");
}


