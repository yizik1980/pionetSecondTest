import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { page } from '../../model/page';
import { pageService } from '../../service/pages.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class pageListComponent implements OnInit, OnDestroy {

  pages: page[];
  pages$: Observable<page[]>;
  fullpageList: page[];
  editpage: boolean = false;
  pagesSubscriber: Subscription;
  constructor(private pageService: pageService, private router: Router) { }
  ngOnDestroy(): void {
    this.pagesSubscriber.unsubscribe();
  }

  ngOnInit() {
    this.pageService.getpages();
    this.pagesSubscriber = this.pageService.getAllpages.subscribe(allpages => {
      this.pages = allpages.sort((a, b) => {
        var nameA = a.title.toUpperCase(); // ignore upper and lowercase
        var nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    })
  }
  showPage(p: page) {
    this.pageService.showCoveTrigger.next(p);
  }
  updatepage(p: page) {
    this.pageService.showCoveTrigger.next(p);
    this.router.navigate(['page', p.id]);
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
