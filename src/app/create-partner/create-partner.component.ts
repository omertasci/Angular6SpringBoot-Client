import { Component, OnInit } from '@angular/core';

import { Partner } from '../partner';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.css']
})
export class CreatePartnerComponent implements OnInit {

  partner: Partner = new Partner();
  submitted = false;

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
  }

  newPartner(): void {
    this.submitted = false;
    this.partner = new Partner();
  }

  save() {
    this.partnerService.createPartner(this.partner)
      .subscribe(data => console.log(data), error => console.log(error));
    this.partner = new Partner();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
