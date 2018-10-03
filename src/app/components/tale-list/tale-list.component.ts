import { Component, OnInit } from '@angular/core';
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

  showInfo(tale) {

    console.log(tale);

  }

  ngOnInit() {
  }

}
