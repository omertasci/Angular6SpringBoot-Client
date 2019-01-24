import { Component, OnInit, Input } from '@angular/core';
import { PartnerService } from '../partner.service';
import { Partner } from '../partner';
 
import { PartnersListComponent } from '../partners-list/partners-list.component';

@Component({
  selector: 'partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {

  @Input() partner: Partner;
 
  constructor(private partnerService: PartnerService, private listComponent: PartnersListComponent) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.partnerService.updatePartner(this.partner.id,
      { name: this.partner.name, age: this.partner.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.partner = data as Partner;
        },
        error => console.log(error));
  }
 
  deletePartner() {
    this.partnerService.deletePartner(this.partner.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
                