import { TeeshirtsService } from './../services/teeshirts.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Teeshirt } from '../model/teeshirt';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  Teeshirt: Teeshirt ;
id : number ;
public edit:FormGroup;

  constructor(
    public formBuilder:FormBuilder,
     public TeeshirtService: TeeshirtsService,
      private nav:NavController,
       public router:ActivatedRoute ) { this.edit=formBuilder.group({
      id:[''],
      Titre:['',[Validators.required]],
      Description:['',[Validators.required]],
      Modele:['',[Validators.required]],
      Prix:[,[Validators.required]]
    }) }
   

    update(){
           const st= this.edit.value;
           this.TeeshirtService.updateTeeshirt(this.id,st).subscribe(response => {
             this.edit.reset();
             console.log(response);
             this.nav.navigateForward('home');
           })
         }
  
    ngOnInit() {
      this.id=this.router.snapshot.params['id'];
      this.TeeshirtService.getTeeshirt(this.id).subscribe(response => {
        console.log(response);
        this.Teeshirt=response;
        this.edit.patchValue(this.Teeshirt);
  
      })
    }
  
  }