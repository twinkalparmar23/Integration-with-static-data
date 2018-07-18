import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { EmployeeComponent } from './components/employee/employee.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditEmployeeComponent } from './components/employee-edit/edit-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './components/models/employee.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        EmployeeListComponent,
        EmployeeComponent,
        WelcomeComponent,
        EditEmployeeComponent
        
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },
            //{ path: '**', redirectTo: 'home' }

            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'employeeAdd', component: EmployeeComponent },
            { path: 'employeelist', component: EmployeeListComponent },
            { path: 'employeeEdit', component: EditEmployeeComponent, data: { name } }
        ])
    ],
    providers: [EmployeeService]
})
export class AppModuleShared {
    
}
