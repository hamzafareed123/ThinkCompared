import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../../../dataTypes';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getCategoryData(
    categoryId: number,
    pageNo: number = 1,
    perPage: number = 12,
    priceMin: number = 0,
    priceMax: number = 6000
  ): Observable<ApiResponse> {
    const url = `${this.baseUrl}/getItems?selectedValues=%5B%5D&priceMin=${priceMin}&priceMax=${priceMax}&pageNo=${pageNo}&perPage=${perPage}&categoryId=${categoryId}&searchKeyword=&brand=`;
    return this.http.get<ApiResponse>(url);
  }

  getMobileData(
    pageNo: number = 1,
    perPage: number = 12,
    priceMin: number = 0,
    priceMax: number = 6000
  ): Observable<ApiResponse> {
    return this.getCategoryData(3, pageNo, perPage, priceMin, priceMax);
  }

  getLaptopData(
    pageNo: number = 1,
    perPage: number = 12,
    priceMin: number = 0,
    priceMax: number = 6000
  ): Observable<ApiResponse> {
    return this.getCategoryData(22, pageNo, perPage, priceMin, priceMax);
  }

  getMonitorData(
    pageNo: number = 1,
    perPage: number = 12,
    priceMin: number = 0,
    priceMax: number = 6000
  ): Observable<ApiResponse> {
    return this.getCategoryData(23, pageNo, perPage, priceMin, priceMax);
  }

  getDesktopData(
    pageNo: number = 1,
    perPage: number = 12,
    priceMin: number = 0,
    priceMax: number = 6000
  ): Observable<ApiResponse> {
    return this.getCategoryData(24, pageNo, perPage, priceMin, priceMax);
  }

  getAllData(
    pageNo: number = 1,
    perPage: number = 50,
    priceMin: number = 0,
    priceMax: number = 6000
  ): Observable<ApiResponse> {
    const url = `${this.baseUrl}/getItems?selectedValues=%5B%5D&priceMin=0&priceMax=6000&pageNo=${pageNo}&perPage=${perPage}&searchKeyword=&brand=`;
    return this.http.get<ApiResponse>(url);
  }

  getPopularCategoryProducts(): Observable<any[]> {
    const categories = [
      { id: 3, name: 'Mobile' },
      { id: 22, name: 'Laptop' },
      { id: 23, name: 'Monitor' },
      { id: 24, name: 'Desktop' },
    ];

    const requests = categories.map((cat) => this.getCategoryData(cat.id, 1, 12));

    return forkJoin(requests).pipe(
      map((responses: ApiResponse[]) => {
        return responses.map((res, index) => ({
          category: categories[index].name,
          products: res.response.data.data.slice(0, 4),
        }));
      })
    );
  }

  getAllBrandsData(): Observable<any[]> {
    const url = `${this.baseUrl}/brands`;
    return this.http.get<any>(url).pipe(map((res) => res.response.data.data));
  }

  getBrandInfo(brandId: number): Observable<any> {
    const url = `${this.baseUrl}/brand/${brandId}`;
    return this.http.get<any>(url);
  }

  getProductsByBrand(
    brandName: string,
    pageNo: number = 1,
    perPage: number = 12,
    priceMin: number = 0,
    priceMax: number = 6000
  ): Observable<ApiResponse> {
    const url = `${this.baseUrl}/getItems?selectedValues=%5B%5D&priceMin=${priceMin}&priceMax=${priceMax}&pageNo=${pageNo}&perPage=${perPage}&searchKeyword=&brand=${brandName}`;
    return this.http.get<ApiResponse>(url);
  }

 
}
