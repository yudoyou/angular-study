import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './app.component.my.html',
  // template: `
  //   <div id="app">
  //     <app-hello-world></app-hello-world>
  //   </div>
  // `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-app';
  ngOnChanges() {
    console.log('ngOnChanges钩子');
  };
  ngOnInit() {
    console.log('ngOnInit钩子');
  }
}
