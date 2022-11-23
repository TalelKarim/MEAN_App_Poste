import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutClientComponent } from 'src/app/ajout-client/ajout-client.component';
import { AuthComponent } from 'src/app/auth/auth.component';
import { ConsultComponent } from 'src/app/consult/consult.component';
import { EnvoiDepotComponent } from 'src/app/envoi-depot/envoi-depot.component';
import { InscriptionComponent } from 'src/app/inscription/inscription.component';
import { InterfaceAdminComponent } from 'src/app/interface-admin/interface-admin.component';
import { SupprClientComponent } from 'src/app/suppr-client/suppr-client.component';
import { AdminajoutComponent } from './app/adminajout/adminajout.component';
import { AdmindepotComponent } from './app/admindepot/admindepot.component';
import { ConsultallComponent } from './app/consultall/consultall.component';
import { ConsultparamComponent } from './app/consultparam/consultparam.component';

const routes: Routes = [{path:"" ,component:AuthComponent},
{path:"ajout-client" , component:AjoutClientComponent},
{path:"consult",component:ConsultComponent},
{path:"envoi-depot",component:EnvoiDepotComponent},
{path:"inscription",component:InscriptionComponent},
{path:"interface-admin",component:InterfaceAdminComponent},
{path:"suppr-client",component:SupprClientComponent},
{path:"consultall",component:ConsultallComponent},
{path:"consultparam",component:ConsultparamComponent},
{path:"adminajout",component:AdminajoutComponent},
{path:"admindepot",component:AdmindepotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
