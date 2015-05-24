var NsTable;

NsTable = function () {
    PageObject.call(this);

    this.data.url = constants.VIEWLOCATION + '/nsTable.html';

    this.selector = {
        nsTable: 'ns-table'
    }
};

NsTable.prototype = Object.create(PageObject.prototype);

module.exports = NsTable;