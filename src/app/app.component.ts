import { Component, OnInit } from '@angular/core';
import { decrypt } from './helpers/crypto.helper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  //variáveis
  isAuthenticated: boolean = false;
  nome: string = '';
  email: string = '';

  //função executada quando o componente é aberto
  ngOnInit(): void {
    //ler o conteudo gravado na local storage
    let data = localStorage.getItem('auth');
    //verificando se um conteudo foi obtido
    if (data != null) {
      //descriptografar o conteudo lido
      let auth = JSON.parse(decrypt(data));


      this.isAuthenticated = true;
      this.nome = auth.nomeUsuario;
      this.email = auth.emailUsuario;
    }
  }


  //função para logout do usuário
  logout(): void {
    if (window.confirm('Deseja realmente sair do sistema?')) {
      //apagar o conteudo da local storage
      localStorage.removeItem('auth');
      //redirecionar o usuário de volta para a página de login
      window.location.href = '/login';
    }
  }

  // 3h
}
