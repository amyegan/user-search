import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from '../shared/user-details';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: UserDetails;
  @Input() isLast: boolean;

  constructor() { }

  ngOnInit() {
  }

}
