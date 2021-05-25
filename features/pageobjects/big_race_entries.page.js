import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class BigRaceEntriesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstRaceDate () { return $('[data-test-selector="RC-bigRaces__dateWide"]') }


    async getRaceDate () {
        return await (await this.firstRaceDate).getText()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('big-race-entries');
    }
}

// module.exports = new BigRaceEntriesPage();
export default new BigRaceEntriesPage();

