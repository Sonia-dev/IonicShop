import { TeeshirtsService } from './../services/teeshirts.service';
import { Teeshirt } from './../model/teeshirt';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSearchbar, IonSlides, NavController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private sliderConfig = {
    spaceBetween: 10,
    centredSlides:true,
    slidesPerview:1.5,
    loop:true,
    pager:true
    //autoplay:true
  };
  
  
  
  selected_option: string;
  teeshirts: Teeshirt[];
  teeshirt: Teeshirt;
  card: [];

  teeshirtsData: any;
  searchedItem: any;
  @ViewChild('selectComponent') selectComponent: IonicSelectableComponent;
  toggle: true;
  //slideConfig
 @ViewChild('slides')slides:IonSlides;
  constructor(
    public teeshirtService: TeeshirtsService,
    private nav: NavController,
    private router: Router
  ) {
    this.teeshirtsData = [];
    this.searchedItem = this.teeshirtsData;
  }

  //details teeshirt
  openDetails(id: number) {
    this.teeshirtService.setData(this.teeshirtsData);
    this.nav.navigateForward(['/details/' + id]);
  }

  ngOnInit() {
    this.teeshirtService.getTeeshirts().subscribe((res) => {
      this.teeshirts = res;
    });
  }
  ionViewWillEnter() {
    this.getAllTeeshirts();
  }
  getAllTeeshirts() {
    this.teeshirtService.getTeeshirts().subscribe((response) => {
      console.log(response);
      this.teeshirtsData = response;
    });
  }
  addTeeshirt() {
    this.nav.navigateForward('/add');
  }
  

  //search
  _ionChange(event: any) {
    console.log(event.detail.value);
    this.searchedItem = this.teeshirtsData;
    const val = event.target.value;

    if (val && val.trim() != '') {
      this.searchedItem = this.searchedItem.filter((item: any) => {
        return item.Titre.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      this.getAllTeeshirts();
    }
  }
  //select searchable
  TeeshirtChanged(id: number) {
    //teeshirtselected

    this.nav.navigateForward(['/details/' + id]);
  }

  openFromCode() {
    this.selectComponent.open();
  }

  clear() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }

  confirm() {
    this.selectComponent.confirm();
    this.selectComponent.close();
  }
  toggleItems() {
    this.selectComponent.toggleItems(this.toggle);
    this.toggle != this.toggle;
  }
}
