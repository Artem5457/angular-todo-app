import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  setLocalStorage(key: string, value: any) {
    if (value === null) {
      return localStorage.setItem(key, JSON.stringify([]));
    }

    return localStorage.setItem(key, JSON.stringify(value));
  }
}
