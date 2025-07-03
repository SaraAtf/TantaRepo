import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  ads: string[] = [
    'buy one get one',
    'Sale up to 50%',
    'Buy Two get Four',
    '',
    'up to 20%',
  ];

  constructor() {}

  getCurrentAd(): Observable<string> {
    // define observable object
    let count = 0;
    let myObservable = new Observable<string>((observer) => {
      let myInterval = setInterval(() => {
        observer.next(this.ads[count++]);
        if (this.ads[count] == '') {
          observer.error('Empty Add');
        }
        if (this.ads.length == count) {
          observer.complete();
        }
      }, 3000);
      // end of observable

      // call automatic complete
      // call automatic error
      // call manually
      return {
        unsubscribe() {
          console.log('Unsubscribe called');
          clearInterval(myInterval);
        },
      };
    });

    return myObservable;
  }
}
