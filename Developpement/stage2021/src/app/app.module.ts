import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { SupprClientComponent } from './suppr-client/suppr-client.component';
import { EnvoiDepotComponent } from './envoi-depot/envoi-depot.component';
import { ConsultComponent } from './consult/consult.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { ConsultallComponent } from './consultall/consultall.component';
import { ConsultparamComponent } from './consultparam/consultparam.component';
import { AdminajoutComponent } from './adminajout/adminajout.component';
import { AdmindepotComponent } from './admindepot/admindepot.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AuthComponent,
    InscriptionComponent,
    AjoutClientComponent,
    SupprClientComponent,
    EnvoiDepotComponent,
    ConsultComponent,
    InterfaceAdminComponent,
    ConsultallComponent,
    ConsultparamComponent,
    AdminajoutComponent,
    AdmindepotComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
