import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  groupsBills = [];
  bills = [];

  constructor(public navCtrl: NavController) {
    this.groupsBills = [
      { id: 1, title: 'Anniversaire Quentin' },
      { id: 2, title: 'Anniversaire Yannick' }
    ];
    this.bills = [
      { groupID: 1, title: 'Courses', amount: 134.97, paidBy: 'Adrien Hecq' },
      { groupID: 1, title: 'Essence', amount: 34.58, paidBy: 'Adrien Hecq' },
      { groupID: 2, title: 'Bar', amount: 40, paidBy: 'Yannick Ferire' }
    ];

    console.log(this.groupsBills)

    this.totalAmountForGroup();
  }
  
  // Filter bills from Group ID
  filterBillsFromGroup(groupID) { 
    return this.bills.filter(bill => bill.groupID == groupID);
  };

  totalAmountForGroup() {
    var groupsBillsLength = this.groupsBills.length,
        billsLength = this.bills.length;
    for (var i = 0; i < groupsBillsLength; i++) {
      var billsFromGroup = this.bills.filter(bill => bill.groupID == this.groupsBills[i].id),
          billsFromGroupLength = billsFromGroup.length,
          totalAmount = 0;
      for (var j = 0; j < billsFromGroupLength; j++) {
        totalAmount = totalAmount + billsFromGroup[j].amount;
        this.groupsBills[i].amount = totalAmount;
      }
    }
  }

}
