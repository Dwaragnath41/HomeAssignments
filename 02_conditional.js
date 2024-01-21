function launchBrowser(browserName) {

    if (browserName == 'chrome') {

        console.log("Browser name is chrome");
    }
    else {

        console.log("Unsupported Browser");
    }


}

function runTests(testType) {

    testType = "smokey"

    switch (testType) {
        case "smoke":

            console.log("Test is smoke");
            break;

        case "sanity":
            console.log("Test is sanity");
            break;

        case "regression":
            console.log("Test is regression");
            break;

        default:
            console.log("Test default is smoke");
            break;
    }


}

runTests();
launchBrowser();