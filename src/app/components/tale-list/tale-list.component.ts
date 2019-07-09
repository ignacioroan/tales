import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpResources } from '../../enums/http-resources.enum';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-tale-list',
  templateUrl: './tale-list.component.html',
  styleUrls: ['./tale-list.component.scss']
})
export class TaleListComponent implements OnInit {

  taleList: object

  constructor(
    private httpService: HttpService
  ) {}

  fetchTaleList(): void {

    this.httpService.fetch(HttpResources.TaleListUrl).subscribe(data => this.taleList = data);

  }

  getTaleDate(date): string {

    return formatDate(date, 'longDate', 'es-ES');

  }

  getLectureTime(words): number {

    const velocity = 200;

    return Math.round(words/velocity);

  }

  ngOnInit(): void {

    this.fetchTaleList();

  }

}
