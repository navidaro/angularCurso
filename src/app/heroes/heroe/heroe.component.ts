import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    
    public get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }
    

    obtenerNombre(): string{
        return `${this.nombre} - ${ this.edad }`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    aumentarEdad(): void{
        this.edad = this.edad + 2;
    }

    disminuirEdad(): void{
        this.edad = this.edad -1;
    }
}