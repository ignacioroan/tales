import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpResources } from '../../enums/http-resources.enum';
import { HttpService } from '../../services/http/http.service';

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

    return this.httpService.fetch(HttpResources.TaleListUrl);

  }

  getTaleDate(date) {

    return formatDate(date, 'longDate', 'es-ES');

  }

  getLectureTime(words) {

    const velocity = 200;

    return Math.round(words/velocity);

  }

  showInfo(tale) {

    console.log(tale);

  }

  ngOnInit() {
  }

}
