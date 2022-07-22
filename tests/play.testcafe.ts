// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />

import Eyes from '@applitools/eyes-testcafe';
import { fixture } from 'testcafe';
// Initialize the eyes
const eyes = new Eyes();

// Set page used in the test
fixture`Testcafe Demo App`.page`https://demo.applitools.com`
    // Call Close on eyes to let the server know it should display the results
    .afterEach(async () => eyes.close())
    .after(async () => {
        // Wait and collect all test results
        // we pass false to this method to suppress the exception that is thrown if we
        // find visual differences
        let allTestResults = await eyes.waitForResults(false)
        // Print results
        console.log(allTestResults)
    });

test('ultraFastTest', async t => {
    // Call Open on eyes to initialize a test session
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'Demo App - Testcafe - Ultrafast',
        testName: 'Smoke Test - Testcafe - Ultrafast',
    });

    await eyes.checkWindow({
        tag: "Login Window",
        target: 'window',
        fully: true
    });
});
