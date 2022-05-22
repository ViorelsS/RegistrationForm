import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/atoms/header/header.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { UserCardComponent } from './components/atoms/user-card/user-card.component';
import { UsersComponent } from './components/molecules/users/users.component';
import { AddUserComponent } from './components/organisms/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    UserCardComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
