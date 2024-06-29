import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ConfigService } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  data: any[] = [];

  constructor(private configService: ConfigService){
   this.configService.getData().subscribe((res: any)=>{
    alert(JSON.stringify(res));
   });
  }
}
