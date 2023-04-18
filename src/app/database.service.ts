import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataBaseService{
    items: Observable<Object | null>
    static showData: any;
    constructor(private db:AngularFireDatabase){
        console.log("setting up firebase");
        this.items = this.db.object<Object>('GraduatedGirls').valueChanges();
        
    }

    public showData(){
        this.items.subscribe((data)=>{
            console.log(data);
        })

        
    }
}
