import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROOT_API } from '../commons/constants/api';
import { AccountLogin, AccountRegister, AccountReq, AccountRes, JwtResponse, LoginWithTotpRequest } from '../commons/dto/account';
import { BaseResponse } from '../commons/dto/response';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseURL = ROOT_API + "/auth";
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  authentication(accountLogin: AccountLogin): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.baseURL}/signin`, accountLogin);
  }

  register(accountRegister: AccountRegister): Observable<BaseResponse> {
    return this.httpClient.post<BaseResponse>(`${this.baseURL}/signup`, accountRegister);
  }

  updateAccount(accountRegister: AccountReq, accountId: number): Observable<BaseResponse> {
    return this.httpClient.put<BaseResponse>(`${this.baseURL}/update-account/${accountId}`, accountRegister);
  }

  getAccount(accountId: number): Observable<AccountRes> {
    return this.httpClient.get<AccountRes>(`${this.baseURL}/${accountId}`);
  }

  activeEmailCode(activeCode: string): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(`${this.baseURL}/activate/${activeCode}`);
  }

  activeTotpCode(loginWithTotp: LoginWithTotpRequest): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.baseURL}/active-totp`, loginWithTotp);
  }

  registerTotpCode(activeCode: string): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(`${this.baseURL}/activate-totp/${activeCode}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    });
  }

  registerTotp(): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(`${this.baseURL}/registerWithTotp`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    });
  }
}
