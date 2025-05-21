import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-consulta',
  templateUrl: './produtos-consulta.component.html',
  styleUrls: ['./produtos-consulta.component.css']
})
export class ProdutosConsultaComponent implements OnInit {

  // variáveis
  produtos: any[] = [];
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {

  }


  // função executada no momento que a página abre
  ngOnInit(): void {
    // fazendo uma requisição GET para a API
    this.httpClient.get('http://localhost:8081/api/produtos')
      .subscribe({ // capturando o retorno da API
        next: (data) => { // recebendo o retorno de sucesso
          // armazenar os dados na variável
          this.produtos = data as any[];
        },
        error: (e) => { // recebendo o retorno de erro
          console.log(e)
        }
      })
  }

  onDelete(idProduto: number, nome: string): void {

    if(window.confirm('Deseja realmente excluir o produto' + " " + nome + '?')){
      this.httpClient.delete('http://localhost:8081/api/produtos/' + idProduto)
        .subscribe({
          next: (data: any) => {
            this.mensagem = data.mensagem;
            this.ngOnInit();
          },
          error: (e) => {
            this.mensagem = e.error.mensagem;
          }
        })
    }
  }
}
