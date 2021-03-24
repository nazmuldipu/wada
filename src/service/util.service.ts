import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  jsonToFromData(object, fileKeys: string[]): FormData {
    //Change json to FormData
    var formData = new FormData();
    Object.keys(object).forEach((key) => {
      if (object[key] != null) {
        formData.append(key, object[key]);
      }
    });

    for (let k of fileKeys) {
      formData.delete(k);
      if (object[k] && object[k].length) {
        for (var i = 0; i < object[k].length; i++) {
          formData.append(k, object[k][i]);
        }
      }
    }

    return formData;
  }

  dynamicSortObject(property) {
    let prop = property.split('.');
    let len = prop.length;

    if (len < 2) {
      var sortOrder = 1;
      if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
      }
      return function (a, b) {
        var result =
          a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
        return result * sortOrder;
      };
    } else if (len >= 2) {
      return function (a, b) {
        var i = 0;
        while (i < len) {
          a = a[prop[i]];
          b = b[prop[i]];
          i++;
        }
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      };
    }
  }
}
