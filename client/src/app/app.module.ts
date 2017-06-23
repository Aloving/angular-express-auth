import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//modules
import { AppRoutingModule } from './modules/app-routing-module/app-routing.module';

//guards
import { AuthGuard } from './shared/guards/auth-guard/auth.guard';

//services
import { AuthenticationService } from './shared/services/authentication-service/authentication.service';
import { UserService } from './shared/services/user-service/user.service';

//components
import { AppComponent } from './components/app-component/app.component';
import { LoginComponent } from './components/login-component/login.component';
import { HomeComponent } from './components/home-component/home.component';

@NgModule({
	declarations: [HomeComponent, AppComponent, LoginComponent],
	imports: [AppRoutingModule, BrowserModule, FormsModule, HttpModule],
	providers: [AuthGuard, AuthenticationService, UserService],
	bootstrap: [AppComponent],
})
export class AppModule {}
