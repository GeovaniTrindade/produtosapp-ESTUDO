import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent {

  //variáveis
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  // criando a estrutura do formulário
  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zÀ-Üà-ü0-9\s]{8,150}$/)]),
    descricao: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zÀ-Üà-ü0-9\s]{8,150}$/)]),
    preco: new FormControl('', [Validators.required, Validators.min(1)]),
    quantidade: new FormControl('', [Validators.required, Validators.min(1)])
  });

  // função para exibir na página as msg de validação de erro nos campos do formulário
  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {
    // chamada para o serviço da API
    this.httpClient.post('http://localhost:8081/api/produtos', this.formCadastro.value)
      .subscribe({ // capturando a resposta da API
        next: (data: any) => { // recebendo a resposta de sucesso
          // exibindo mensagem na página
          this.mensagem = data.mensagem;
          // limpando os campos do formulário
          this.formCadastro.reset();
        },
        error: (e) => { // recebendo a resposta de erro
          console.log(e.error);
        }
      })
  }

}
