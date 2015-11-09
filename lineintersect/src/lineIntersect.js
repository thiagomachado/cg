
var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() 
{
<<<<<<< HEAD
    //Carrega figura usada como ponto das extremidades
=======
    //Carrega figura usada como ponto da extremidades
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    game.load.spritesheet('ponto', 'asset/point.png', 64, 64);
}

var segmentoInicio1;
var segmentoFim1;
var segmentoInicio2;
var segmentoFim2;

var segmento1;
var segmento2;

<<<<<<< HEAD
var s;
var t;

var cor = 'rgb(255,255,255)';
//cria objeto do tipo ponto
var pontoIntercecao = new Phaser.Point();

=======
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
function create() 
{

    game.stage.backgroundColor = '#000';
<<<<<<< HEAD
    
    //adiciona imagem ao ponto inicial
    segmentoInicio1 = game.add.sprite(450, 100, 'ponto', 0);
    //Permite que esse ponto seja arrastado com o mouse (ou touch)
=======

    segmentoInicio1 = game.add.sprite(450, 100, 'ponto', 0);
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    segmentoInicio1.anchor.set(0.5);
    segmentoInicio1.inputEnabled = true;
    segmentoInicio1.input.enableDrag(true);

    segmentoFim1 = game.add.sprite(450, 250, 'ponto', 0);
<<<<<<< HEAD
    
=======
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    segmentoFim1.anchor.set(0.5);
    segmentoFim1.inputEnabled = true;
    segmentoFim1.input.enableDrag(true);

    segmentoInicio2 = game.add.sprite(400, 300, 'ponto', 1);
<<<<<<< HEAD
    
=======
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    segmentoInicio2.anchor.set(0.5);
    segmentoInicio2.inputEnabled = true;
    segmentoInicio2.input.enableDrag(true);

    segmentoFim2 = game.add.sprite(400, 500, 'ponto', 1);
<<<<<<< HEAD
    
=======
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    segmentoFim2.anchor.set(0.5);
    segmentoFim2.inputEnabled = true;
    segmentoFim2.input.enableDrag(true);

<<<<<<< HEAD
    //Cria os segmentos de reta
=======
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    segmento1 = new Phaser.Line(segmentoInicio1.x, segmentoInicio1.y, segmentoFim1.x, segmentoFim1.y);
    segmento2 = new Phaser.Line(segmentoInicio2.x, segmentoInicio2.y, segmentoFim2.x, segmentoFim2.y);
}

<<<<<<< HEAD

=======
var cor = 'rgb(255,255,255)';
var pontoIntercecao = new Phaser.Point();
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5

function update() 
{
    segmento1.fromSprite(segmentoInicio1, segmentoFim1, false);
    segmento2.fromSprite(segmentoInicio2, segmentoFim2, false);

<<<<<<< HEAD
    //muda a cor da reta somente se houver intersecção
    if (lineIntersect(segmentoInicio1,segmentoFim1,segmentoInicio2,segmentoFim2))
=======
    pontoIntercecao = segmento1.intersects(segmento2, true);

    if (pontoIntercecao)
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    {
        cor = 'rgb(255,0,0)';
    }
    else
    {
        cor = 'rgb(255,255,255)';
    }

}

function render() 
{

    game.debug.geom(segmento1, cor);
    game.debug.geom(segmento2, cor);

<<<<<<< HEAD
    if (lineIntersect(segmentoInicio1,segmentoFim1,segmentoInicio2,segmentoFim2))
=======
    if (pontoIntercecao)
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
    {
        game.context.fillStyle = 'rgb(0,255,0)';
        game.context.fillRect(pontoIntercecao.x - 2, pontoIntercecao.y - 2, 5, 5);
        game.debug.text("("+pontoIntercecao.x.toFixed(0)+","+pontoIntercecao.y.toFixed(0)+")", pontoIntercecao.x, pontoIntercecao.y);
    }

    //Exibindo as coordenadas de cada ponto
    game.debug.text("("+segmentoInicio1.x.toFixed(0)+","+segmentoInicio1.y.toFixed(0)+")", segmentoInicio1.x, segmentoInicio1.y);
    game.debug.text("("+segmentoFim1.x.toFixed(0)+","+segmentoFim1.y.toFixed(0)+")", segmentoFim1.x, segmentoFim1.y);
    game.debug.text("("+segmentoInicio2.x.toFixed(0)+","+segmentoInicio2.y.toFixed(0)+")", segmentoInicio2.x, segmentoInicio2.y);
    game.debug.text("("+segmentoFim2.x.toFixed(0)+","+segmentoFim2.y.toFixed(0)+")", segmentoFim2.x, segmentoFim2.y);
    
}
<<<<<<< HEAD

//O phaser define uma função de intersecção para o objeto line, mas como o objetivo do trabalho era escrever essa função, eu defini ela aqui
//Recebe os pontos inciais e finais de cada segmento de reta e verifica se existe interseção
function lineIntersect(ponto1, ponto2, ponto3, ponto4)
{
    var det = (ponto4.x - ponto3.x) * (ponto2.y - ponto1.y)  - (ponto4.y - ponto3.y) * (ponto2.x - ponto1.x);
    // verifica se os segmentos são paralelos
    if(det == 0)
      return false;

    this.s = ((ponto4.x - ponto3.x) * (ponto3.y - ponto1.y) - (ponto4.y - ponto3.y) * (ponto3.x - ponto1.x))/ det ;
    this.t = ((ponto2.x - ponto1.x) * (ponto3.y - ponto1.y) - (ponto2.y - ponto1.y) * (ponto3.x - ponto1.x))/ det ;

    //definindo paramentro na equação parametrizada da reta
    pontoIntercecao.x = ponto1.x + (ponto2.x - ponto1.x) * this.s;
    pontoIntercecao.y = ponto1.y + (ponto2.y - ponto1.y) * this.s;

    //sempre que s e t estiverem entre 0 e 1 os segmentos se interceptam 
    return (s>=0 && s<=1 && t>=0 && t<=1);
}


=======
>>>>>>> be68156dadb710819be64f699a3dcff59ddf12a5
