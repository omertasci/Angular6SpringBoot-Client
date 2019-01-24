import { Component, OnInit } from '@angular/core';
import { Partner } from '../partner';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'search-partners',
  templateUrl: './search-partners.component.html',
  styleUrls: ['./search-partners.component.css']
})
export class SearchPartnersComponent implements OnInit {

  age: number;
  partners: Partner[];
 
  constructor(private dataService: PartnerService) { }
 
  ngOnInit() {
    this.age = 0;
  }
 
  private searchPartners() {
    this.dataService.getPartnersByAge(this.age)
      .subscribe(partners => this.partners = partners);
  }
 
  onSubmit() {
    this.searchPartners();
  }

}
