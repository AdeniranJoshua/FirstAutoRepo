/**
 * sub page containing specific selectors and methods for a specific page
 */
class Runner_tabComponent {
    /**
     * define selectors using getter methods
     */
    get runners_index () { return $$('.RC-indexButtons__button') }
    get runners_tab () { return $('=Runners Index')}

    async getRunnersIndexBtnSize () {
        return await (await this.runners_index).length
    }

    async getRunnersIndexBtnText (loc) {
        return await (await this.runners_index)[loc].getText()
    }

    async invokeRunnersTab () {
        await (await this.runners_tab).click();
    }

    async invokeSignInBtn () {
        await (await this.signInBtn).click();
    }

}

export default new Runner_tabComponent();
