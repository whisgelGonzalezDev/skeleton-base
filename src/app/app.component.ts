import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HelpersService } from './services/helpers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'structure-base';

  constructor(private translate: TranslateService,
    private helper: HelpersService) {

  }

  ngOnInit() {
    this.helper.getItemLocalStorage()
  }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang)
    this.helper.saveItemLocalStorage(lang)
  }

}
