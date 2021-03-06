import { Injectable } from '@angular/core';
import { IEmployee, Employee } from './employee.model';

@Injectable()
export class EmployeeService {
    employees:Employee[]=[
        {   
            
            "firstName":"Twinkal",
            "lastName":"Parmar",
            "emailaddress":"twinkal@gmail.com",
            "contact":"9898324567",
            "address":"Makarpura",
            "username":"twinkal_23",
            "pwd":"12345",
            "gender":"female",
            "qual":"BE",
            "exp":"1",
            "languages":['C/C++','JAVA']
        },
        {   
            
            "firstName":"Ruchi",
            "lastName":"Maurya",
            "emailaddress":"ruchi@gmail.com",
            "contact":"8866514279",
            "address":"Tarsali",
            "username":"ruchiM",
            "pwd":"456789",
            "gender":"female",
            "qual":"BE",
            "exp":"1",
            "languages":['C#','Python']
        },
        {   
            
            "firstName":"Shivali",
            "lastName":"Salunkhe",
            "emailaddress":"shivali@gmail.com",
            "contact":"8956231473",
            "address":"Ravipark",
            "username":"shiv",
            "pwd":"123789",
            "gender":"female",
            "qual":"BE",
            "exp":"1",
            "languages":['JAVA','Python']
        }
    ];

    j:number;
    
    getEmployees(){
        return this.employees;
    }

    addEmployee(emp:Employee){
        this.employees.push(emp);
        console.log(this.employees);
    }

    getEmployeeData(name: string) {
        //console.log("inside method");
        //this.j=this.employees.indexOf(name);
        //console.log(this.j);
        //return this.employees[1];
        let z: number = 0;
       for(var i=0;i<this.employees.length;i++)
       {
           if(this.employees[i].firstName===name)
           {    z=i;
               break;
           }
       }
       //console.log(z);
       return this.employees[z];
    }

    saveEditedData(emp:Employee){
        //console.log("inside edited data method");
        let z: number = 0;
       for(var i=0;i<this.employees.length;i++)
       {
           if(this.employees[i].firstName===name)
           {    z=i;
               break;
           }
       }
       //console.log(z);
       this.employees[z]=emp;
       //this.employees.splice(z,1,emp);
    }

    deleteEmployee(name: string) {
        var a =confirm("do you want to remove empoyee data of "+name+" ??");
        let z: number = 0;
        if(a){
            for(var i=0;i<this.employees.length;i++)
            {
                if(this.employees[i].firstName===name)
                {    z=i;
                    break;
                }
            }
            console.log("item removed:"+this.employees[i].firstName);
            this.employees.splice(z,1);
        }  
    }
}