// const Page = require('./page');
import Page from './page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class RacecardsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get bigRaceEntriesLink () { return $('=Big Race Entries') }


    async invokeBigRaceEntries () {
        await (await this.bigRaceEntriesLink).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('racecards');
    }
}

// module.exports = new RacecardsPage();
export default new RacecardsPage();
