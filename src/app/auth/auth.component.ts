import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  useAnimation,
  keyframes,
  // ...
} from '@angular/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';


const fadeAnimation = animation(
  [
    style({ opacity: '{{ start }}' }),
    animate('{{ time }}', keyframes([style({ opacity: '{{ end }}' })])),
  ],
  { params: { time: '1000ms', start: 0, end: 1 } }
);

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    ButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  animations: [
    trigger('manageFormContainer', [
      // transition(':enter', [
      //   useAnimation(fadeAnimation, {
      //     params: {
      //       time: '2s',
      //       start: 1,
      //       end: 0,
      //     },
      //   }),
      // ]),
      state(
        'showLogin',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'showRegister',
        style({
          transform: 'translateX(66.4%)',
        })
      ),
      transition('showLogin => showRegister', [
        animate(
          '1.0s ease-in-out',
          keyframes([
            style({ transform: 'translateX(0%)' }),
            style({ transform: 'translate(33.2%)' }),
            style({ transform: 'translate(66.4%)' }),
          ])
        ),
      ]),
      transition('showRegister => showLogin', [
        animate(
          '1.0s ease-in-out',
          keyframes([
            style({ transform: 'translate(66.4%) ' }),
            style({ transform: 'translate(33.2%) ' }),
            style({ transform: 'translateX(0%) ' }),
          ])
        ),
      ]),
    ]),
    trigger('manageGreetingsContainer', [
      state(
        'showLogin',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        'showRegister',
        style({
          transform: 'translateX(-150%)',
        })
      ),
      transition('showLogin => showRegister', [
        animate(
          '1.0s ease-in-out',
          keyframes([
            style({ transform: 'translateX(0%) scaleX(1)' }),
            style({ transform: 'translate(-50%) scaleX(1.5)' }),
            style({ transform: 'translate(-150%) scaleX(1)' }),
          ])
        ),
      ]),
      transition('showRegister => showLogin', [
        animate(
          '1.0s ease-in-out',
          keyframes([
            style({ transform: 'translateX(-150%) scaleX(1)' }),
            style({ transform: 'translate(-50%) scaleX(1.5)' }),
            style({ transform: 'translate(0%) scaleX(1)' }),
          ])
        ),
      ]),
    ]),

    // trigger('openClose', [
    //   state(
    //     'open',
    //     style({
    //       height: '200px',
    //       opacity: 1,
    //       backgroundColor: 'yellow',
    //     })
    //   ),
    //   state(
    //     'closed',
    //     style({
    //       height: '100px',
    //       opacity: 0.8,
    //       backgroundColor: 'blue',
    //     })
    //   ),
    //   transition('open => closed', [animate('2s')]),
    //   transition('closed => open', [animate('0.5s')]),
    // ]),
  ],
})
export class AuthComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(private navCtrl: Router) {}

  nextPlease() {
    this.navCtrl.navigate(['home']);
  }
}
