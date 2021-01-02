
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { page, errorModel } from '../../model/page';
import { pageService } from '../../service/pages.service';
import { ValidateService } from '../../service/validate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-handler',
  templateUrl: './page-handler.component.html',
  styleUrls: ['./page-handler.component.css']
})
export class pageHandlerComponent implements OnInit, OnDestroy {
  page: page;
  updatepageObj: any;
  error = new errorModel();
  isNew: boolean;
  pageSubscribe: Subscription;
  constructor(private pageService: pageService, private validationService: ValidateService, private route: Router, private activatedRoute: ActivatedRoute,) {
    this.page = new page();
    this.isNew = true;
  }
  ngOnDestroy(): void {
    this.pageSubscribe.unsubscribe();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;

    this.pageSubscribe = this.pageService.showCoveTrigger.subscribe(page => {
      this.page = page;
    });
  }
  savepage() {
    this.page.category_id = Math.floor(Math.random() * 100);
    this.page.id = 0;
    this.page.create_at = new Date();
    if (this.validationService.validate(this.page)) {
      this.pageService.addpage(this.page).subscribe(result => {
        this.pageService.getpages();
        this.route.navigate(['']);
      });
    }
    this.error = this.validationService.error;
  }
  updatepage() {
    if (this.validationService.validate(this.page)) {
      this.pageService.updatepage(this.page).subscribe(result => {
        this.pageService.getpages();
      });
    }
    this.error = this.validationService.error;
  }



  uploadFile($event) {
    this.error = new errorModel();
    const inputValue = $event.target;
    const file: File = inputValue.files[0];
    //this.page.fileName = file.name;
    // if (file.size < 50000) {
    //   const Reader: FileReader = new FileReader();
    //   this.page.templateUrl = file.name;
    //   Reader.onloadend = (e) => {
    //     this.page.coverPhoto = e.target.result.toString();
    //     this.pageService.showCoveTrigger.next(this.page);
    //   }
    //   Reader.readAsDataURL(file);
    // } else {
    //   this.error.coverPhoto = 'The file is too large';
    //   inputValue.value = '';
    // }

  }
  clear() {
    this.error = new errorModel();
  }
}
