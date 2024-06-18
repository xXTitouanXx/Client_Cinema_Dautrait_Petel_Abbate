import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/toPromise' ;
//import 'rxjs/add/operator/map' ;
import { HttpHeaders } from '@angular/common/http';
import {environment} from "../../environments/environment";

const    ENDPOINT = environment.endpoint;

@Injectable()
export class AuthService {
}
