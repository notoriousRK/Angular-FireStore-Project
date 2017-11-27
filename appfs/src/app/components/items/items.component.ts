import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {item} from '../../models/items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  
})
export class ItemsComponent implements OnInit {
  
 itemlist: item[]
 editState: boolean = false;
 itemToEdit: item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    
    this.itemService.getItems().subscribe(ITEMS => 
   {
    console.log(ITEMS)
     this.itemlist = ITEMS;
   }
  
  );
      
     
    }
    deleteItem(event, item: item){
    this.clearState();
    this.itemService.deleteItem(item);
    }


    updateItem(item: item){
   this.itemService.updateItem(item);
   this.clearState();
    }

    editItem(event, item: item){
      this.editState = true;
      this.itemToEdit = item;
    }
  
    clearState(){
      this.editState = false;
      this.itemToEdit = null;
    }
  }