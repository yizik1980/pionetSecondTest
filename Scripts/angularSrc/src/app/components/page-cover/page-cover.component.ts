import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { pageService } from '../../service/pages.service';

@Component({
  selector: 'app-page-cover',
  templateUrl: './page-cover.component.html',
  styleUrls: ['./page-cover.component.css']
})
export class pageCoverComponent implements OnInit, OnDestroy {
  @Input()
  ImgSrc: string | ArrayBuffer;
  show: boolean;
  showCoverSubscriber$: Subscription;
  constructor(private pageservice: pageService) { }
  ngOnDestroy(): void {
    this.showCoverSubscriber$.unsubscribe();
  }

  ngOnInit(): void {
    this.showCoverSubscriber$ = this.pageservice.showCoveTrigger.subscribe(page => {
      this.show = !!page.htmlContent;
      this.ImgSrc = page.htmlContent;
    })
  }

}
