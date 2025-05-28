import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ProdutosCadastroComponent } from './components/produtos-cadastro/produtos-cadastro.component';
import { ProdutosConsultaComponent } from './components/produtos-consulta/produtos-consulta.component';
import { ProdutosEdicaoComponent } from './components/produtos-edicao/produtos-edicao.component';
import { MovimentacoesCadastroComponent } from './components/movimentacoes-cadastro/movimentacoes-cadastro.component';
import { MovimentacoesConsultaComponent } from './components/movimentacoes-consulta/movimentacoes-consulta.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';



//mapear rotas para cada componente criado no projeto
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    //página inicial do projeto
    { path: 'login', component: LoginComponent },
    {
        path: 'produtos-cadastro', component: ProdutosCadastroComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'produtos-consulta', component: ProdutosConsultaComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'produtos-edicao/:id', component: ProdutosEdicaoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'movimentacoes-cadastro', component:
            MovimentacoesCadastroComponent, canActivate: [AuthGuard]
    },
    {
        path: 'movimentacoes-consulta', component:
            MovimentacoesConsultaComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }