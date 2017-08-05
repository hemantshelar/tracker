var _ = require('underscore');
var angular = require('angular');
var appModuleName = 'TrackerApp';

var appModule = angular.module(appModuleName);

var mainCtrl = function () {

    function member(id, name, attending) {
        return {
            id: id,
            name: name,
            attending: attending,
            courtBooked: false,
            contriPaid: false,
            setNotAttending: function (sender) {
                sender.attending = !sender.attending;
            },
            setAttending: function(sender){
                sender.attending = !sender.attending;
            }
        }
    }
    var self = this;
    self.test = "Badminton";
    self.eventCost = "32";

    self.members = [];

    self.populateTestMembers = function () {
        self.members.push(new member(1, 'Hemant', true));
        self.members.push(new member(2, 'Arushi', false));
        self.members.push(new member(3, 'Shilpa', undefined));
        self.members.push(new member(3, 'Aaroh', true));
    }
    self.classYes = "fa fa-2x fa-thumbs-up";
    self.classNo = "fa fa-2x fa-thumbs-up"

    self.populateTestMembers();

    self.getYesClass = function (member) {
        retVal = ""
        if (member.attending === true)
            retVal = "fa fa-lg fa-thumbs-up";
        if (member.attending === false)
            retVal = "fa fa-lg fa-thumbs-down";
        if (member.attending === undefined)
            retVal = "fa fa-lg fa-question";
        return retVal;
    }
    self.getNoClass = function (member) {
        retVal = ""
        if (member.attending === false)
            retVal = "fa fa-lg fa-thumbs-down";
        if (member.attending === true)
            retVal = "fa fa-lg fa-thumbs-down";
        if (member.attending === undefined)
            retVal = "fa fa-lg fa-thumbs-question";
        return retVal;
    }

    self.getContriPaidClass = function(member){
        debugger;
        retVal = "";
        if ( member.contriPaid === true )
            retVal = "fa fa-lg fa-thumbs-up";
        if ( member.contriPaid === false )
            retVal = "fa fa-lg fa-thumbs-down" ;
        return retVal;
    }
    self.setContriPaid = function(member){
        debugger;
        member.contriPaid = !member.contriPaid;
    }
    self.getTotalAttending = function(){
        var count = _.where(self.members,{attending: true}).length;
        return count;
    }
}
appModule.component('mainContent', {
    templateUrl: './scripts/Controllers/MainCtrl.html',
    controllerAs: 'vm',
    controller: mainCtrl
});