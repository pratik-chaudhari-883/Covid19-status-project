import { Component, OnInit } from '@angular/core';
import { InjectApiService } from '../inject-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  

   global=[];  
     
  constructor(private api:InjectApiService) {
   
    this.api.getData().subscribe(data=>{
      //console.warn(data.Global)
      this.global=data.Global
    })
    
   }
    
 
}
