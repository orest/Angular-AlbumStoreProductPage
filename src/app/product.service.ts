import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map, filter} from "rxjs/operators"

@Injectable()
export class ProductService {
	_albumUrl = "../assets/album.json"

	constructor(private _http: HttpClient) { }

	getAlbum(id: number) {
		return this._http.get(this._albumUrl);
	}
}
