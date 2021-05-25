import { Given, When, Then } from '@cucumber/cucumber';
import chai, { assert, expect } from 'chai';
import chaiDateTime from "chai-datetime";
chai.use(chaiDateTime);


// const RacecardsPage = require('../pageobjects/racecards.page');
// const BigRaceEntriesPage  = require('../pageobjects/big_race_entries.page');
import runner_tab from '../pageobjects/runner_tab.component';
import RacecardsPage from '../pageobjects/racecards.page';
import BigRaceEntriesPage from '../pageobjects/big_race_entries.page';


Given(/^I am on "([^"]*)"$/, async (url) => {
    await RacecardsPage.open();
});

When(/^I click the "([^"]*)" header$/, async (header) => {
    await RacecardsPage.invokeBigRaceEntries();
});

Then(/^the date of the next big race event is in the future$/, async () => {
    let current_date = new Date();
    let race_date_text = await BigRaceEntriesPage.getRaceDate();
    let race_date = new Date(race_date_text)
    console.log("DEBUG: Current " + current_date)
    console.log("DEBUG racedateText: " + race_date)
    assert.afterDate(race_date, current_date)
});

When(/^I invoke the 'runners' tab$/, async () => {
    await runner_tab.invokeRunnersTab();
});

Then(/^there should be 26 Runner Index buttons$/, async () => {
    await expect(await runner_tab.getRunnersIndexBtnSize()).to.equal(26);
});

Then(/^the Runner Index buttons are named by letters of the alphabet and are in alphabetical order$/, async () => {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let i;
    for (i = 0; i < await runner_tab.getRunnersIndexBtnSize(); i++) {
        await expect(await runner_tab.getRunnersIndexBtnText(i)).to.equal(alphabet[i]);
    }
});
