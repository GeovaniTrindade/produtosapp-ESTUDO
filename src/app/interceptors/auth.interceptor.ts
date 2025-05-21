import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { decrypt } from "../helpers/crypto.helper";


const endpoints = [
    "/api/produtos",
    "/api/movimentacoes"
];


@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        //verificando se o Angular está acessando algum 
        //dos endpoints mapeados
        if (endpoints.some(item => req.url.includes(item))) {


            //lendo da local storage os dados do usuário autenticado
            let data = localStorage.getItem('auth');
            if (data != null) {
                //descriptografar o conteudo lido
                let auth = JSON.parse(decrypt(data));
                //enviando o token para a API
                req = req.clone({
                    setHeaders: {
                        Authorization: 'Bearer ' + auth.accessToken
                    }
                })
            }
        }
        return next.handle(req);
    }
}
