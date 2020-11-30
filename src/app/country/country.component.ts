import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { InjectApiService } from '../inject-api.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
    Data=[];
  currentval=""
  
  constructor(private api:InjectApiService) { }

  ngOnInit(): void {
  }

  
  getval(val)
  {
     console.warn(val)
    //  if(val==){
    //    this.show=true
    //    return this.show;
    //   }
        this.currentval=val
    // if(this.currentval==val){
    //   this.show=true
    //   return this.show;
    // }
}
ChangeCountry()
{
 this.api.getDynamicData(this.currentval).subscribe(data  =>{
   console.warn(data)
   this.Data=data
 })
}
}