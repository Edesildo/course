import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule} from '@angular/router'
import { HttpClient, HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';


import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';


import { CourseModule } from './courses/course.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
        
     {
          path:'',redirectTo:'courses',pathMatch:'full'
        }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
