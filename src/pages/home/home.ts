import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { delay } from 'rxjs/operators/delay';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any[];
  public hideOverlay = true;
  @ViewChild(Content) content: Content;
  constructor(public user: UserProvider) {}
  ngAfterViewInit() {
    this.getUser();
  }

  getUser() {
    this.user
      .getUser()
      .pipe(delay(2000))
      .subscribe(
        res => (this.items = res),
        err => console.log(err),
        () => {
          setTimeout(() => {
            this.content
              .scrollToBottom(0)
              .then(() => (this.hideOverlay = false));
          }, 500);
        }
      );
  }
}
