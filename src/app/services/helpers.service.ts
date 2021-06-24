import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  lang!: string;
  constructor() { }

  saveItemLocalStorage(lang: string) {
    localStorage.setItem('lang', lang);
  }

  getItemLocalStorage() {
    this.lang = localStorage.getItem('lang') || 'es';
  }
}
