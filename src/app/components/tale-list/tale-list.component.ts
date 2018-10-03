import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-tale-list',
  templateUrl: './tale-list.component.html',
  styleUrls: ['./tale-list.component.css']
})
export class TaleListComponent implements OnInit {

  taleList: object;

  constructor(
    private httpService: HttpService,
  ) {

    this.taleList = this.fetchTaleList();

  }

  fetchTaleList() {

    return this.httpService.fetch('assets/data/sample.json');

  }

  ngOnInit() {
  }

}
