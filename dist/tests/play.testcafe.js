// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />
import Eyes from '@applitools/eyes-testcafe';
const eyes = new Eyes();
let checkCount = 0;
let runCount = 0;
const firstCheck = async () => {
    if (checkCount == 0) {
        await eyes.checkWindow({
            tag: "Login Window ${runCount}",
            target: 'window',
            fully: true
        });
        checkCount++;
    }
};
const secondCheck = async () => {
    if (checkCount == 1) {
        await eyes.checkWindow({
            tag: `App Window ${runCount}`,
            target: 'window',
            fully: true
        });
        console.log("ran second check");
        checkCount++;
    }
};
const thirdCheck = async () => {
    console.log("third check");
    console.log("checkCount: " + checkCount);
    if (checkCount == 2) {
        await eyes.checkWindow({
            tag: `App Window ${runCount}`,
            target: 'window',
            fully: true
        });
        console.log("ran third check");
        checkCount++;
    }
};
fixture `Testcafe Demo App`.page `https://demo.applitools.com`
    .afterEach(async () => eyes.close())
    .after(async () => {
    let allTestResults = await eyes.waitForResults(false);
    console.log(allTestResults);
});
test('ultraFastTest', async (t) => {
    await eyes.open({
        t,
        batchId: 'asdfasdfasdfasdf12354125125',
        appName: 'tc quar app1 - the wackness',
        testName: `tc quar test1 - the wackness`,
    });
    await firstCheck();
    await t.click('#log-in');
    if (runCount === 0) {
        console.log("Intentionally Failing First Test");
        runCount = 1;
        throw new Error("Intentionally Failing First Test");
    }
    await secondCheck();
    await thirdCheck();
});
//# sourceMappingURL=play.testcafe.js.map