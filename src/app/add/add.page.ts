import { NavController } from '@ionic/angular';
import { Teeshirt } from './../model/teeshirt';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeeshirtsService } from '../services/teeshirts.service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  teeshirts:Teeshirt[]=[];
  public add: FormGroup;
 
  
  constructor(public formBuilder: FormBuilder, public TeeshirtService: TeeshirtsService, private nav:NavController) {
    this.add= formBuilder.group({
      Titre: ["",[Validators.required]],
      Description: ["",[Validators.required]],
      Modele: ["",[Validators.required]],
      photo:["",[Validators.required]],
      Prix: ["",[Validators.required]],

    })
   }


   

   onadd(){
     const data = this.add.value;
     this.TeeshirtService.createTeeshirt(data).subscribe((response) => {
      console.log(response)
      this.nav.pop();
      console.log(this.add.value);
      this.nav.navigateRoot('/home');
     })
   
   }
  ngOnInit() {
  }

}