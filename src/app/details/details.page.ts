import { Teeshirt } from './../model/teeshirt';
import { ActivatedRoute, Router } from '@angular/router';
import { TeeshirtsService } from './../services/teeshirts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  teeshirtsData: any;
  teeshirt:Teeshirt= {id: null, Titre: '', Description: '',Modele : '',photo:[''],Prix : null};
  id:number;

  constructor( public router:ActivatedRoute, public teeshirtsService:TeeshirtsService,private nav:NavController
) {}
ionViewWillEnter(){
  this.ngOnInit();
 }
  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
   
   
    this.teeshirtsService.getTeeshirt(this.id).subscribe(response => {
    console.log(response);
     this.teeshirt=response;
           
    })
  }

  edit(id: number) {
    console.log(id);
    this.nav.navigateRoot(['/update/' + id]);
  }

  delete(teeshirt) {
    this.teeshirtsService.deleteTeeshirt(teeshirt.id).subscribe((response) => {
      console.log(teeshirt.id);
      this.getAllTeeshirts();
      this.nav.pop();
      this.nav.navigateRoot(['/home']);
    });
  }
  getAllTeeshirts() {
    this.teeshirtsService.getTeeshirts().subscribe((response) => {
      console.log(response);
      this.teeshirtsData = response;
    });
  }


}
