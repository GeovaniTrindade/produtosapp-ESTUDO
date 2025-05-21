import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { encrypt } from 'src/app/helpers/crypto.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   //variáveis
   mensagem: string = '';

  //construtor
  constructor(
    private httpClient: HttpClient
  ){


  }


  //criando o formulário
  formLogin = new FormGroup({
    //campo 'email'
    email: new FormControl('',
      [Validators.required, Validators.email]),
    //campo 'senha'
    senha: new FormControl('', [Validators.required,
    Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)])
  });

  //função para verificar se os campos
  //do formulário estão com erro de validação
  get form(): any {
    return this.formLogin.controls;
  }

  //função para capturar o submit do formulário
  onSubmit(): void {
    this.httpClient.post('http://localhost:8081/api/auth', this.formLogin.value)
      .subscribe({
        next: (data : any) => {

          // criptografando os dados
          let encryptData = encrypt(JSON.stringify(data));


          // salvar os dados na local storage
          localStorage.setItem('auth', encryptData );

          // redirecionar o usuario para pagina de consulta de produtos
          window.location.href = '/produtos-consulta'
        },
        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      })
  }
// 2h, já atualizei o package.json

}
