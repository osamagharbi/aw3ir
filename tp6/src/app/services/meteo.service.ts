import { Injectable } from '@angular/core';
import { MeteoItem } from '../meteoItem';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    let m = new MeteoItem();

    return fetch('https://api.openweathermap.org/data/2.5/weather/?q=' + name + '&units=metric&lang=fr&appid=93564c0bd2701749782f5b2a4856e9d0')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        if (json.cod === 200) {
          return Promise.resolve(json);
        } else {
          m.weather = json;

          console.error('Météo introuvable pour ' + name
            + ' (' + json.message + ')');

          return Promise.reject('Météo introuvable pour ' + name
          + ' (' + json.message + ')');
        }

      });

  }

  getForcast(name: string): Promise<any> {
    console.log('from service', name);

    let m = new MeteoItem();

    return fetch('https://api.openweathermap.org/data/2.5/forecast/?q=' + name +'&lang=fr&appid=0ada432b59deb9716c357092c5f79be6')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        if (json.cod == "200") {
          let aujourdhui = json.list[0].dt_txt.split(' ')[0];
          
          // filtrer 
          json.list = json.list.reduce((a, d) => {
            if (!(a.find(i => i.dt_txt.split(' ')[0] == d.dt_txt.split(' ')[0])) && (d.dt_txt.split(' ')[0] !== aujourdhui)) {
              a.push(d);
            }
            return a;
          }, []);

          return Promise.resolve(json);
        } else {
          m.weather = json;

          console.error('Forcast introuvable pour ' + name
            + ' (' + json.message + ')');

          return Promise.reject('Forcast introuvable pour ' + name
          + ' (' + json.message + ')');
        }

      });

  }
}