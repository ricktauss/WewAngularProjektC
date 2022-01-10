import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FitnessEquipment } from '../entities/fitnessEquipment';

@Injectable({
  providedIn: 'root'
})
export class FitnessEquipmentService {

  constructor(private http: HttpClient)  { }

  search(equipmentName:string, equipmentCategory:string) : Observable<FitnessEquipment[]>{
    const url =  "http://localhost:3000/fitnessEquipment";

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('equipmentName_like', equipmentName).set('equipmentCategory_like', equipmentCategory);

    return this.http.get<FitnessEquipment[]>(url, { headers, params });
  }

  addEquipment(fitnessEquipment:FitnessEquipment) : Observable<FitnessEquipment>{

    const url =  "http://localhost:3000/fitnessEquipment";

    const headers = new HttpHeaders().set('Accept', 'application/json');
  
    delete fitnessEquipment.id;

    return this.http.post<FitnessEquipment>(url,fitnessEquipment,{ headers })
  }

  editEquipment(fitnessEquipment:FitnessEquipment) : Observable<FitnessEquipment>{

    const url =  "http://localhost:3000/fitnessEquipment/" + fitnessEquipment.id!.toString();

    const headers = new HttpHeaders().set('Accept', 'application/json');
 

    return this.http.put<FitnessEquipment>(url,fitnessEquipment,{ headers })
  }

  
  deleteEquipment(equipmentID:number) : Observable<FitnessEquipment>{

    const url =  "http://localhost:3000/fitnessEquipment/" + equipmentID.toString();

    const headers = new HttpHeaders().set('Accept', 'application/json');
 

    return this.http.delete<FitnessEquipment>(url,{ headers })
  }

}
