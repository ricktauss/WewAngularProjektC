import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FitnessEquipment } from '../entities/fitnessEquipment';

@Injectable({
  providedIn: 'root'
})
export class FitnessEquipmentService {

  constructor(private http: HttpClient)  { }

  search(equipmentName:string) : Observable<FitnessEquipment[]>{
    const url =  "http://localhost:3000/fitnessEquipment";

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('equipmentName', equipmentName);

    return this.http.get<FitnessEquipment[]>(url, { headers, params });
  }

  addEquipment(fitnessEquipment:FitnessEquipment) : Observable<FitnessEquipment>{

    const url =  "http://localhost:3000/fitnessEquipment";

    const headers = new HttpHeaders().set('Accept', 'application/json');
 

    return this.http.post<FitnessEquipment>(url,fitnessEquipment,{ headers })
  }

}
