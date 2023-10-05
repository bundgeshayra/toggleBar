import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  toggle: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  
  useLanguage() {
    this.toggle = !this.toggle;
    let variableName : string|undefined = document.getElementById('btn')?.innerText;
    // console.log(variableName);
    
    if(variableName == 'english'){
      this.translate.use('en');
    }
    if(variableName == 'France'){
      this.translate.use('fr');
    }
  }

  doToggle(): void {
    this.toggle = !this.toggle;
    let variableName = document.getElementById('btn')?.innerText;
    // Do some other stuff needed
  }
}


