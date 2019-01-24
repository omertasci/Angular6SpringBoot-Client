import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PartnerService } from '../partner.service';
import { Partner } from '../partner';

@Component({
  selector: 'partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.css']
})
export class PartnersListComponent implements OnInit {

  partners: Observable<Partner[]>;

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.reloadData();
  }

  deletePartners() {
    this.partnerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.partners = this.partnerService.getPartnersList();
  }

}
