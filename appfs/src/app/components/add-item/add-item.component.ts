import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {item} from '../../models/items';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  
})
export class AddItemComponent implements OnInit {

  newitem: item ={
    title : '',
    description : ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.newitem.title != '' && this.newitem.description != ''){
      this.itemService.addItem(this.newitem);
      this.newitem.title = '';
      this.newitem.description = '';
    }

}
}
