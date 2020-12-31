import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { page } from '../../model/page';
import { pageService } from './../../service/pages.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class pageListComponent implements OnInit {

  pages: page[];
  pages$: Observable<page[]>;
  fullpageList: page[];
  editpage: boolean = false;
  constructor(private pageService: pageService, private router:Router) { }

  ngOnInit() {
    this.pageService.getAllpages.subscribe(allpages => {
      this.pages = allpages;
      this.fullpageList = allpages;
    })
  }
  showPage(p: page) {
    this.pageService.showCoveTrigger.next(p);
  }
  updatepage(p: page) {
    this.pageService.showCoveTrigger.next(p);
    this.router.navigate(['page']);
  }
  filterItem($event) {
    const reg = new RegExp($event.target.value);
    this.pages = this.fullpageList.filter(page => reg.test(page.title) || reg.test(page.content))
  }
  deletepage(pageToDelete: page) {
    this.pageService.Deletepage(pageToDelete.id).subscribe(res => {
      this.pageService.getpages();
      this.pageService.showCoveTrigger.next(new page());
    });
  }

}
