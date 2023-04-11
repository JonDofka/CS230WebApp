import { HttpClient } from "@angular/common/http";
import { ProductModel } from "./product.model";
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})


export class GirlsService {
    private baseURL: string = "https://beautycollege-360c1-default-rtdb.firebaseio.com/";
    private girlsEndPoint: string = "GraduatedGirls.json";

    constructor(private http: HttpClient) {

    }

    getGirls() {
        return this.http.get<ProductModel[]>(this.baseURL + this.girlsEndPoint)
    }
}




