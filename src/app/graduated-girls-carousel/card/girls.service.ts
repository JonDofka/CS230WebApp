//import { HttpClient } from "@angular/common/http";
import { ProductModel } from "./product.model";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { DataBaseService } from "src/app/database.service";


@Injectable({
    providedIn: 'root'
})


export class GirlsService {
    private baseURL: string = "https://beautycollege-360c1-default-rtdb.firebaseio.com/";
    private girlsEndPoint: string = "GraduatedGirls.json";

    constructor(/*private http: HttpClient*/ private db:AngularFireDatabase) {
        
    }

    getGirls() {
        // return this.http.get<ProductModel[]>(this.baseURL + this.girlsEndPoint)
        return this.db.list<ProductModel>("GraduatedGirls").valueChanges();
    }

    addProduct(product:ProductModel){
        this.db.list<ProductModel>("GraduatedGirls").push(product);
    }
}




