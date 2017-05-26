import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { TodoService } from './todo.service';
import { LoginService } from './login.service';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path:'todos',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService, TodoService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
