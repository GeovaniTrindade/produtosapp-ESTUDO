import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-movimentacoes-cadastro',
  templateUrl: './movimentacoes-cadastro.component.html',
  styleUrls: ['./movimentacoes-cadastro.component.css']
})
export class MovimentacoesCadastroComponent implements OnInit {

  produtos: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {

  }

  //formulário para cadastro de movimentações
  formCadastro = new FormGroup({
    idProduto: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    observacoes: new FormControl('', [Validators.required, Validators.minLength(8)]),
    quantidade: new FormControl('', [Validators.required, Validators.min(1)]),
    dataMovimentacao: new FormControl('', [Validators.required])
  });



  ngOnInit(): void {
    this.httpClient.get(environments.apiProdutos + '/produtos')
      .subscribe({
        next: (data) => {
          this.produtos = data as [];
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }

  //função para acessar os campos do formulário na página de forma a verificar se eles possuem erro
  get form(): any {
    return this.formCadastro.controls;
  }

  //função para capturar o evento de SUBMIT do formulário
  onSubmit(): void {
    this.httpClient.post(environments.apiProdutos + '/movimentacoes', this.formCadastro.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = data.mensagem;
          this.formCadastro.reset();
        },
        error: (e) => {
          this.mensagem = e.error.mensagem;
        }
      })
  }

  // 1h
}


