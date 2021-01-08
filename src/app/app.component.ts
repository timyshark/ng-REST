import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-REST';
  responseJson: string;
  constructor(private api: ApiService) {}
  testAPI(url : string){
    this.api.testApi$(url)
    .subscribe(
      (res) => (this.responseJson = JSON.stringify(res, null, 2).trim()),
      (err) => {
        this.responseJson = JSON.stringify(err,null,2);
      },
      () => console.log("Completed.")
    )
  }
}
