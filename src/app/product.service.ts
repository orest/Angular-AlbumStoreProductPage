import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from "rxjs/operators"
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductService {
    private _albumUrl = "../assets/album.json"
    private _productsUrl = "../assets/products.json";

    //constructor(private _http: HttpClient) { }
    constructor(private _http: Http) { }

    getAlbum(id: number): Observable<Album> {
        return this._http.get(this._albumUrl).map(p => <Album>p.json());
    }
    
    getProducts(): Observable<Product[]> {
        return this._http.get(this._productsUrl).map(p => <Product[]>p.json());
    }
}
