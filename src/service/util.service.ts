import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/shared/models/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  jsonToFromData(object, fileKeys: string[]): FormData {
    //Change json to FormData
    var formData = new FormData();
    Object.keys(object).forEach((key) => {
      if (object[key] != null && object[key]) {
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

  paginationToHttpParam(pagi: Pagination): HttpParams {
    return new HttpParams()
      .set('page', pagi.page.toString())
      .set('limit', pagi.limit.toString())
      .set('sort', pagi.sort)
      .set('order', pagi.order)
      .set('param', pagi.param);
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
