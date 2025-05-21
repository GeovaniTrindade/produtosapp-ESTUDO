import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { decrypt } from "../helpers/crypto.helper";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(
        private router: Router
    ) { }

    // metodo para verificar se uma rota pode ser usada
    canActivate() {

        // ler os dados gravados na local storage
        let data = localStorage.getItem('auth');

        // verificar se não está vazio
        if (data != null) {
            // descriptografar
            let auth = JSON.parse(decrypt(data));

            // verificar se há um token
            if (auth.accessToken != null) {
                return true;
            }
        }

        this.router.navigate(['/login']);
        return false;

    }
}

// 2h40min