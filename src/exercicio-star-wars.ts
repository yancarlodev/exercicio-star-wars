class Personagem {
    protected nome: string;
    protected planeta: string;
    protected energia: number;

    constructor(nome: string, planeta: string, energia: number) {
        this.nome = nome
        this.planeta = planeta
        this.energia = energia
    }

    apresentar(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Planeta: ${this.planeta}`)
        console.log(`Energia: ${this.energia}`)
    }

    usarHabilidade(): void {
        console.log("O personagem usou uma habilidade.")
    }
}

class Jedi extends Personagem {
    private corSabre: string;

    constructor(nome: string, planeta: string, energia: number, corSabre: string) {
        super(nome, planeta, energia)
        this.corSabre = corSabre
    }

    apresentar(): void {
        super.apresentar()
        console.log(`Cor do sabre de luz: ${this.corSabre}`)
    }

    usarHabilidade(): void {
        console.log(`O Jedi ${this.nome} usou a Força para proteger a galáxia.`)
    }
}

class Sith extends Personagem {
    private nivelRaiva: number;

    constructor(nome: string, planeta: string, energia: number, nivelRaiva: number) {
        super(nome, planeta, energia)
        this.nivelRaiva = nivelRaiva
    }

    apresentar(): void {
        super.apresentar()
        console.log(`Nível de raiva: ${this.nivelRaiva}`)
    }

    usarHabilidade(): void {
        console.log(`O Sith ${this.nome} usou o lado sombrio da Força.`)
    }
}

class Droide extends Personagem {
    private funcao: string;

    constructor(nome: string, planeta: string, energia: number, funcao: string) {
        super(nome, planeta, energia)
        this.funcao = funcao
    }

    usarHabilidade(): void {
        console.log(`O droide ${this.nome} executou sua função: ${this.funcao}.`)
    }
}

class Mandaloriano extends Personagem {
    private armaPrincipal: string;

    constructor(nome: string, planeta: string, energia: number, armaPrincipal: string) {
        super(nome, planeta, energia)
        this.armaPrincipal = armaPrincipal
    }

    usarHabilidade(): void {
        console.log(`O Mandaloriano ${this.nome} atacou usando ${this.armaPrincipal}.`)
    }
}

console.log("=== Jedi ===")
const jedi = new Jedi("Obi-Wan Kenobi", "Stewjon", 95, "Azul")
jedi.apresentar()
jedi.usarHabilidade()
console.log("\n")

console.log("=== Sith ===")
const sith = new Sith("Darth Vader", "Tatooine", 100, 98)
sith.apresentar()
sith.usarHabilidade()
console.log("\n")

console.log("=== Droide ===")
const droide = new Droide("R2-D2", "Naboo", 80, "Navegação e reparos")
droide.apresentar()
droide.usarHabilidade()
console.log("\n")

console.log("=== Mandaloriano ===")
const mandaloriano = new Mandaloriano("Din Djarin", "Aq Vetina", 90, "blaster");
mandaloriano.apresentar()
mandaloriano.usarHabilidade()
console.log("\n")

// 1. Qual classe é a superclasse do exercício?
// A classe Personagem.

// 2. Quais classes são subclasses?
// O Jedi, Sith, Droide e Mandaloriano.

// 3. Por que usamos super(...) no construtor das subclasses?
// Para chamar o construtor da superclasse e inicializar seus atributos.

// 4. Qual a diferença entre private e protected?
// Um atributo private só pode ser acesso dentro de sua classe, já o protected pode ser acesso apenas pela classe e as suas subclasses.

// 5. O que é sobrescrita de método?
// É umas das formas de polimorfismo em POO. Em suma, uma subclasse pode implementar um método com a mesma assinatura de sua superclasse, porém com um comportamento diferente.