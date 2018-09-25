import { Component } from '@angular/core';

@Component({
  selector: 'header-root',
  template: `<div style="height: 50px;background: black;padding: 5px 0 0 0;">
    <div style="margin:auto;width:1080px">
       <div style="margin:auto;width:90%;float:left"> <h1 style="display: inline;">
           <a routerLink="/"class="anchor_changes"> DKonnect</a>
        </h1><h1 style="color:green;display: inline">.</h1>
        </div>
        <div style="margin:auto;width:10%;color:red;float:left;"><a routerLink="/add"><img style="width:40%" src="./assets/icons8-customer-64.png"></a></div>
    </div>
</div>`,
  styles: ['']
})
export class headerComponent {
  
}
