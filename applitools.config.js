module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'}
    ],
    // set batch name to the configuration
    batchName: 'testcafe batch with q - the ultimate in wack',
    // specify Eyes concurrency level
    testConcurrency: 25,
    dontCloseBatches: true
}
