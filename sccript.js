class heroi{
constructor(nome, idade, classe){
    this.nome=nome
    this.idade=idade
    this.classe=classe
}

atacar() {

    let ataque;
    let skill;
     
           switch (this.classe) {

                case "mago":
                    skill = "usou magia";
                    break;
                case "guerreiro":
                    skill = "usou espada";
                    break;
                case "monge":
                    skill = "usou artes marciais";
                    break;
                case "ninja":
                    skill = "usou shuriken";
                    break
                default:
                    skill = "as habiliidades dessa classe não está listada";
            }

            console.log(`o heroi ${this.nome} com ${this.idade} anos de xp, ${skill} para atacar`);

    }
    
}

let heroi1 = new heroi ("ander",25,"mago")
heroi1.atacar();

let heroi2 = new heroi ("Lucas", 30, "guerreiro")
heroi2.atacar();





