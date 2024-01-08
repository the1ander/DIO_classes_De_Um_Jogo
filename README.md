<h1> Documentação da Classe Herói em JavaScript </h1>

<h3>Introdução</h3>
<p>Este documento serve como um guia para a implementação da classe <strong>Heroi</strong>  em JavaScript. A classe <strong>Heroi</strong> é uma representação genérica de um personagem de aventura, com propriedades e métodos que permitem simular ações típicas desses personagens.</p>

<h3>Estrutura da Classe</h3>
<p>A classe Heroi possui as seguintes propriedades e método:</p>

<h4>Propriedades</h4>

  <ol>nome: String que representa o nome do herói.</ol>
  <ol>idade: Número que indica a idade do herói.</ol>
  <ol>tipo: String que define o tipo do herói. Os tipos possíveis são:</ol>

<li>
    <ul>Guerreiro</ul>
    <ul>Mago</ul>
    <ul>Monge</ul>
    <ul>Ninja</ul>
</li>

<h4>Método</h4>

  <ul>atacar(): Método que simula o ataque do herói. A ação de ataque varia de acordo com o tipo do herói:</ul>
  <ul>Se o herói for um mago, a mensagem exibida será: "mago atacou usando magia".</ul>
  <ul>Se o herói for um guerreiro, a mensagem exibida será: "guerreiro atacou usando espada".</ul>
  <ul>Se o herói for um monge, a mensagem exibida será: "monge atacou usando artes marciais".</ul>
  <ul>Se o herói for um ninja, a mensagem exibida será: "ninja atacou usando shuriken".</ul>

<p>A mensagem é formatada e exibida no console seguindo o padrão: "o {nome} com ${idade} anos de xp, ${skill} para atacar`".</p>

<h3>Exemplo de uso:</h3>
<p>const heroi1 = new Heroi('Ander', 25, 'guerreiro');
heroi1.atacar(); </p>

<p>const heroi2 = new Heroi('Lucas', 30, 'mago');
heroi2.atacar();</p>

<h4>Conclusão</h4>
<p>Esta classe oferece uma base simples para representar heróis em um jogo ou simulação, permitindo fácil expansão ou modificação para atender a diferentes necessidades e cenários de jogo.</p>

