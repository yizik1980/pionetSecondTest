import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { page } from '../model/page';

import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class pageService {
  isEditClickedSubject = null;
  isEditClickedObservable = null;
  updatepageObj = { isEditClicked: false, page: null }

  // show cover on its component
  showCoveTrigger = new Subject<page>();
  getAllpages = new Subject<page[]>();
  private baseUrl = environment.asp;
  constructor(private http: HttpClient) {
    this.isEditClickedSubject = new BehaviorSubject(this.updatepageObj);
    this.isEditClickedObservable = this.isEditClickedSubject.asObservable();
  }

  isEditClicked(editClicked: boolean, page: page) {
    this.updatepageObj = { "isEditClicked": editClicked, "page": page };
    this.isEditClickedSubject.next(this.updatepageObj);
  }
  public getpages() {
    return this.http.get<page[]>(this.baseUrl + 'pages').subscribe(result => {
      this.getAllpages.next(result);
    },
      (err) => console.log(err));
  }
  public addpage(page: page) {
    debugger;
    return this.http.post<page>(this.baseUrl + 'pages/postPage', page);
  }
  public updatepage(page: page) {
    return this.http.put(`${this.baseUrl}pages/postPage`, page);
  }
  public Deletepage(id: number) {
    return this.http.post(`${this.baseUrl}pages/Delete`,{id});
  }

}