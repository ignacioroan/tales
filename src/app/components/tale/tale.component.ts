import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tale',
  templateUrl: './tale.component.html',
  styleUrls: ['./tale.component.scss']
})
export class TaleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  fetchTale(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

  }

  ngOnInit() {

    this.fetchTale();

  }

}
