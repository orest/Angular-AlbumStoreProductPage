import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map, filter} from "rxjs/operators"
import { Http } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class ProductService {
	private _albumUrl = "../assets/album.json"

	//constructor(private _http: HttpClient) { }
	constructor(private _http: Http) { }

	getAlbum(id: number) {
		return this._http.get(this._albumUrl).map(p=>p.json());
	}
}
