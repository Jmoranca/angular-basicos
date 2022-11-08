import { NgModule } from "@angular/core";
import { contadorComponent } from './contador/contador.componente';

@NgModule({

    declarations: [
        contadorComponent
    ],
    exports: [
        contadorComponent
    ]
})
export class ContadorModule { }