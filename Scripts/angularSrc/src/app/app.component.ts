import { Component, OnInit } from '@angular/core';
import { pageService } from './service/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private pageService: pageService) {

  }
  ngOnInit(): void {
    this.pageService.getpages();
  }
  title = 'pionet Cms';
}
