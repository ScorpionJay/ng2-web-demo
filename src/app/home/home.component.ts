import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };

  swipeOptions: any

  slides: any
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  ngOnInit(): void {
    // this.homeService.getHeroes()
    //         .then(
    //           heroes => {this.heroes = heroes//.slice(1,5)
    //           console.log(heroes)
    //         }
    //        )

    this.slides = [
          {
            "link":"https://github.com",
            "img":"https://static.lufaxcdn.com/wcm-images/5GbQZmvn0OKbrgQ80IeMqA.png"
          },
          {
            "link":"https://github.com",
            "img":"https://static.lufaxcdn.com/wcm-images/mtPTXc8HCQIVSdbI-p3Ujw.png"
          },
          {
            "link":"https://github.com",
            "img":"https://static.lufaxcdn.com/wcm-images/0y44GG-RHYJmEHx6UFqIwQ.png"
          }
    ] 

    this.swipeOptions = {
        loop: true,
        autoplay:5000,
        speed: 400,
        pagination: '.swiper-pagination',
        autoHeight:true
      }

   
  }
  // public ngOnInit() {
  //   console.log('hello `Home` component');
  //   // this.title.getData().subscribe(data => this.data = data);
  // }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
