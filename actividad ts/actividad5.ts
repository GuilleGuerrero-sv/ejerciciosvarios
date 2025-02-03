// EJERCICIO 1: Clase CabeceraPagina
class CabeceraPagina {
    constructor(
        private titulo: string,
        private color: string,
        private fuente: string
    ) {}

    obtenerEstilos(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    posicionTitulo(posicion: 'centrado' | 'derecha' | 'izquierda'): string {
        return `El título aparecerá alineado a la ${posicion}.`;
    }

    imprimirPropiedades(): void {
        console.log(this.obtenerEstilos());
    }
}

// EJERCICIO 2: Clase Calculadora
class Calculadora {
    sumar(a: number, b: number): number { return a + b; }
    restar(a: number, b: number): number { return a - b; }
    multiplicar(a: number, b: number): number { return a * b; }
    dividir(a: number, b: number): number { return b !== 0 ? a / b : NaN; }
    potencia(a: number, b: number): number { return Math.pow(a, b); }
    factorial(n: number): number {
        return n <= 1 ? 1 : n * this.factorial(n - 1);
    }
}

// EJERCICIO 3: Clase Canción
class Cancion {
    private autor: string;

    constructor(public titulo: string, public genero: string) {
        this.autor = '';
    }

    setAutor(autor: string): void { this.autor = autor; }
    getAutor(): string { return this.autor; }
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}

// EJERCICIO 4: Clase Cuenta
class Cuenta {
    constructor(
        private nombre: string,
        private cantidad: number,
        private tipoCuenta: string,
        private numeroCuenta: string
    ) {}

    depositar(valor: number): void {
        if (valor < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += valor;
            console.log(`Depósito exitoso. Nuevo saldo: $${this.cantidad}`);
        }
    }

    retirar(valor: number): void {
        if (valor < 5) {
            console.log("El monto mínimo de retiro es de $5.00");
        } else if (this.cantidad < valor) {
            console.log("Fondos insuficientes");
        } else {
            this.cantidad -= valor;
            console.log(`Retiro exitoso. Nuevo saldo: $${this.cantidad}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipoCuenta}, Número: ${this.numeroCuenta}`);
    }
}

// EJERCICIO 5: Clases Persona y Empleado
abstract class Persona {
    constructor(
        protected nombre: string,
        protected apellido: string,
        protected direccion: string,
        protected telefono: string,
        protected edad: number
    ) {}

    esMayorDeEdad(): void {
        console.log(this.edad >= 18 ? "Es mayor de edad" : "Es menor de edad");
    }

    abstract mostrarDatos(): void;
}

class Empleado extends Persona {
    private sueldo: number = 0;

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
    }
}

// Pruebas
const cuenta = new Cuenta("Juan Pérez", 50, "Ahorro", "12345678");
cuenta.depositar(10);
cuenta.retirar(30);
cuenta.mostrarDatos();

const empleado = new Empleado("Luis", "Gómez", "Calle Falsa 123", "555-1234", 30);
empleado.cargarSueldo(1500);
empleado.mostrarDatos();
empleado.imprimirSueldo();
