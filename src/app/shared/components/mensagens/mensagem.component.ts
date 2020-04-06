import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-mensagem',
    templateUrl: './mensagem.component.html'
})
export class MensagemComponent {

    @Input() texto: string = '';

}