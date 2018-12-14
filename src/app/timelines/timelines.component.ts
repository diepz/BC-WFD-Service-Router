import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilServe: DateUtilService) { }

  ngOnInit() {
  }

  onChange(value) {
    this.output = this.dateUtilServe.getDiffToNow(value);
  }

}
