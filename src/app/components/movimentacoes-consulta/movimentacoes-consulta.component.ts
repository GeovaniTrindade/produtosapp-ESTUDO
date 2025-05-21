import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movimentacoes-consulta',
  templateUrl: './movimentacoes-consulta.component.html',
  styleUrls: ['./movimentacoes-consulta.component.css']
})
export class MovimentacoesConsultaComponent {

  //variáveis
  movimentacoes: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
  }

  formConsulta = new FormGroup({
    dataInicio: new FormControl('', [Validators.required]),
    dataFim: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formConsulta.controls;
  }

  onSubmit(): void {

    //capturar as datas selecionadas no formulário
    var dataInicio = this.formConsulta.value.dataInicio;
    var dataFim = this.formConsulta.value.dataFim;

    //fazendo a requisição para consultar as movimentações na API
    this.httpClient.get('http://localhost:8081/api/movimentacoes/' + dataInicio + "/" + dataFim)
      .subscribe({
        next: (data) => {
          this.movimentacoes = data as any[];
        },
        error: (e) => {
          console.log(e.error);
        }
      });
  }
}
