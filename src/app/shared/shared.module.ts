import { NgModule } from '@angular/core';

import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { RouterModule } from '@angular/router';
import { MensagemComponent } from './components/mensagens/mensagem.component';


@NgModule({
    declarations: [
        BarraSuperiorComponent,
        MensagemComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        BarraSuperiorComponent,
        MensagemComponent
    ]
})
export class SharedModule { }