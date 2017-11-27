import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import {item} from '../models/items';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class ItemService {
itemsCols: AngularFirestoreCollection<item>;
Items: Observable<item[]>;
itemDoc: AngularFirestoreDocument<item>;
  constructor(public afs: AngularFirestore) { 
    //this.items = this.afs.collection('items').valueChanges();

    this.itemsCols = this.afs.collection('Items', ref => ref.orderBy('title','asc'));

    this.Items = this.itemsCols.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
     
    getItems(){
      return this.Items;

    }
    
    
    addItem(item: item){
      this.itemsCols.add(item);
    }
    deleteItem(item: item){
      this.itemDoc = this.afs.doc(`Items/${item.id}`);
      this.itemDoc.delete();
    }
    updateItem(item){
      this.itemDoc = this.afs.doc(`Items/${item.id}`);
      this.itemDoc.update(item);
    }
    
   }
  

