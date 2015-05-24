var config, env, fs;
fs = require('fs');
config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'features/**/*.feature'
    ],
    suites: {
        all: 'features/**/*.feature',
        nsTable: 'features/nsTable.feature'
    },
    capabilities: {
        browserName: 'chrome'
    },
    multiCapabilities: [],
    beforeLaunch: function () {
    },
    onPrepare: function () {
        var chai, chaiAsPromised;
        browser.ignoreSynchronization = true;
        chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.__base = __dirname;
        global.expect = chai.expect;
        global.common = require(__base + '/lib/common.js');
        global.constants = require(__base + '/lib/constants.js');
        global.PageObject = require(__base + '/lib/pages/pageObject.js');
    },
    onComplete: function () {
    },
    onCleanUp: function () {
    },
    afterLaunch: function () {
    },
    params: {},
    resultJsonOutputFile: 'result/result.json',
    framework: 'cucumber',
    cucumberOpts: {
        require: 'features/**/*.js',
        format: 'summary'
    }
};
exports.config = config;