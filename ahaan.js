var canvas = new fabric.Canvas('myCanvas');
blockWidth = 30;
blockHeight = 30;
x = 10;
y = 10;
var player = "";
var block = "";
function update(){
    fabric.Image.fromURL("player.png",function(Img){
     player = Img;
     player.scaleToWidth(150);
     player.scaleToHeight(140);
     player.set({
         top:y,
         left:x
     });
     canvas.add(player);
    });
    }
    function blck(get_Img){
        fabric.Image.fromURL(get_Img,function(Img){
         block = Img;
         block.scaleToWidth(block_width);
         block.scaleToHeight(block_height);
         block.set({
             top:y,
             left:x
         });
         canvas.add(block);
        });
        }
