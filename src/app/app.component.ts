import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-Databinding';
  firstname = "Sagar Singh"
  imagepath = "assets/tekizma_inc_tekizma_bi_image.png"
  defaultVal = "Tekizma"

  passValueToComponent(e:any){
    console.log(e.target.value);
  }
}
