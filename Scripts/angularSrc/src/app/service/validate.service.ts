import { Injectable } from '@angular/core';
import { page, errorModel, validationConstrains } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  // validation
  error = new errorModel();
  constructor() { }
  validate(page: page): boolean {
    const constrainsName = new validationConstrains({ prop: 'title', content: page.title, isReqire: true, errorMsg: 'Page Name is missing' });
    const constrainsAuthor = new validationConstrains({ prop: 'content', content: page.content, isReqire: true, errorMsg: 'Description Name is missing' });
    const constrainsCoverPhoto = new validationConstrains({ prop: 'category_id', content: page.category_id, isReqire: true, errorMsg: 'categoryId Photo  is missing' });
    return this.error.validate(constrainsName) && this.error.validate(constrainsAuthor) && this.error.validate(constrainsCoverPhoto);
  }
}
