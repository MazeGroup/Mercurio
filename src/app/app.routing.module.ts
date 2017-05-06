import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './guards/auth.guard.service';

const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: '', component: AppComponent, canActivate: [AuthGuard]},
    {path: 'acompanhamento/abastecimento',
        loadChildren: 'app/tvc-acompanhamento-abastecimento/tvc-acompanhamento-abastecimento.module#TvcAcompanhamentoAbastecimentoModule',
        canActivate: [AuthGuard]
    },
    {path: 'acompanhamento/demanda',
        loadChildren: 'app/tvc-acompanhamento-demanda/tvc-acompanhamento-demanda.module#TvcAcompanhamentoDemandaModule',
        canActivate: [AuthGuard]
    },
    {path: 'acompanhamento/qualidade',
        loadChildren: 'app/tvc-acompanhamento-qualidade/tvc-acompanhamento-qualidade.module#TvcAcompanhamentoQualidadeModule',
        canActivate: [AuthGuard]
    },
    {path: 'indicador/acuracia',
        loadChildren: 'app/tvc-indicador-acuracia/tvc-indicador-acuracia.module#TvcIndicadorAcuraciaModule',
        canActivate: [AuthGuard]
    },
    {path: 'indicador/eficiencia',
        loadChildren: 'app/tvc-indicador-eficiencia/tvc-indicador-eficiencia.module#TvcIndicadorEficienciaModule',
        canActivate: [AuthGuard]
    },
    {path: 'operacao/abastecimento',
        loadChildren: 'app/tvc-operacao-abastecimento/tvc-operacao-abastecimento.module#TvcOperacaoAbastecimentoModule',
        canActivate: [AuthGuard]
    }
    ,
    {path: 'operacao/inspecao-previsao',
        loadChildren: 'app/tvc-operacao-inspecao-previsao/tvc-operacao-inspecao-previsao.module#TvcOperacaoInspecaoPrevisaoModule',
        canActivate: [AuthGuard]
    },
    {path: 'operacao/inspecao-previsao/:codigo',
        loadChildren: 'app/tvc-operacao-inspecao-previsao/tvc-operacao-inspecao-previsao.module#TvcOperacaoInspecaoPrevisaoModule',
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
