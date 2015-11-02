    
        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

        function preload() 
        {
            game.load.spritesheet('ponto', 'asset/point.png', 64, 64);
        }

        var segmentoInicio1;
        var segmentoFim1;
        var segmentoInicio2;
        var segmentoFim2;

        var segmento1;
        var segmento2;

        function create() 
        {

            game.stage.backgroundColor = '#000';//'#124184';

            segmentoInicio1 = game.add.sprite(100, 200, 'ponto', 0);
            segmentoInicio1.anchor.set(0.5);
            segmentoInicio1.inputEnabled = true;
            segmentoInicio1.input.enableDrag(true);

            segmentoFim1 = game.add.sprite(400, 300, 'ponto', 0);
            segmentoFim1.anchor.set(0.5);
            segmentoFim1.inputEnabled = true;
            segmentoFim1.input.enableDrag(true);

            segmentoInicio2 = game.add.sprite(200, 400, 'ponto', 1);
            segmentoInicio2.anchor.set(0.5);
            segmentoInicio2.inputEnabled = true;
            segmentoInicio2.input.enableDrag(true);

            segmentoFim2 = game.add.sprite(500, 500, 'ponto', 1);
            segmentoFim2.anchor.set(0.5);
            segmentoFim2.inputEnabled = true;
            segmentoFim2.input.enableDrag(true);

            segmento1 = new Phaser.Line(segmentoInicio1.x, segmentoInicio1.y, segmentoFim1.x, segmentoFim1.y);
            segmento2 = new Phaser.Line(segmentoInicio2.x, segmentoInicio2.y, segmentoFim2.x, segmentoFim2.y);
        }

        var cor = 'rgb(255,255,255)';
        var pontoIntercecao = new Phaser.Point();

        function update() 
        {
            segmento1.fromSprite(segmentoInicio1, segmentoFim1, false);
            segmento2.fromSprite(segmentoInicio2, segmentoFim2, false);
            
            pontoIntercecao = segmento1.intersects(segmento2, true);

            if (pontoIntercecao)
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
            
            if (pontoIntercecao)
            {
                game.context.fillStyle = 'rgb(0,255,0)';
                game.context.fillRect(pontoIntercecao.x - 2, pontoIntercecao.y - 2, 5, 5);
                game.debug.text("("+pontoIntercecao.x+","+pontoIntercecao.y+")", pontoIntercecao.x, pontoIntercecao.y);
            }

            game.debug.text("Drag the handles", 32, 550);
            
            //Exibindo as coordenadas de cada ponto
            game.debug.text("("+segmentoInicio1.x+","+segmentoInicio1.y+")", segmentoInicio1.x, segmentoInicio1.y);
            game.debug.text("("+segmentoFim1.x+","+segmentoFim1.y+")", segmentoFim1.x, segmentoFim1.y);
            game.debug.text("("+segmentoInicio2.x+","+segmentoInicio2.y+")", segmentoInicio2.x, segmentoInicio2.y);
            game.debug.text("("+segmentoFim2.x+","+segmentoFim2.y+")", segmentoFim2.x, segmentoFim2.y);
        }