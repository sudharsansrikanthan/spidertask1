var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x;
var y=10;
var x2;
var y2=10;
var z=0;
var cx=250;
var cy=450;
var dy=1.5;
var dy2=1.5;
var score=0;
var rightPressed = false;
var leftPressed = false;
var t=2*Math.PI/180;
var p=cx+50;
var q=cy;
var r=cx-50;
var s=cy;
var e=cx+50;
var f=cy;
var g=cx-50;
var h=cy;

if((Math.floor((Math.random() * 10) + 1))%2==0)
x=(150+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1));
else
x=(210+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1));

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {                                                                                           
 if(e.key == "Left" || e.key == "ArrowLeft") {
          
          leftPressed=true; 
    }   
 if(e.key == "Right" || e.key == "ArrowRight") {
          
      rightPressed=true;
        
    }
   
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}



function drawCircle() {
    if(rightPressed==false && leftPressed==false)
{    
     p=e;
     q=f;
     r=g;
     s=h;
}
if(leftPressed==true)
          {p=cx+50*Math.cos(t);
           q=cy-50*Math.sin(t);
           r=cx-50*Math.cos(t);
           s=cy+50*Math.sin(t); 
           t=t+2*Math.PI/180;
           e=p;
           f=q;
           g=r;
           h=s;
           }    
 if(rightPressed==true)
          {p=cx+50*Math.cos(t);
           q=cy-50*Math.sin(t);
           r=cx-50*Math.cos(t);
           s=cy+50*Math.sin(t); 
           t=t-2*Math.PI/180;
           e=p;
           f=q;
           g=r;
           h=s;
           } 
    
    ctx.beginPath();
    ctx.arc( cx, cy, 50, 0, Math.PI * 2, true);
    ctx.strokeStyle='black';
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc( p, q, 5, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle='blue';
    ctx.arc( r, s, 5, 0, Math.PI * 2, true);
    ctx.fill(); 
   
}



function drawBlock2() {
ctx.beginPath();
ctx.fillStyle='black';
ctx.fillRect( x2, y2, 90, 20);
}

function drawBlock() {
ctx.beginPath();
ctx.fillStyle='black';
ctx.fillRect( x, y, 90, 20);
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Score: "+score, 8, 40);
}

function duetGame() {
  ctx.font="16x Arial";
  ctx.fontStyle="black";
  ctx.fillText("DUET GAME", 8, 20);
}

function collisionDetection() {
 if(((p>=x)&&(p<=x+90))&&((q>=y)&&(q<=y+20)))
 alert("GAME OVER : YOUR SCORE IS "+score);
 if(((r>=x)&&(r<=x+90))&&((s>=y)&&(s<=y+20)))
 alert("GAME OVER : YOUR SCORE IS "+score);
 if(((p>=x2)&&(p<=x2+90))&&((q>=y2)&&(q<=y2+20)))
 alert("GAME OVER : YOUR SCORE IS "+score);
 if(((r>=x2)&&(r<=x2+90))&&((s>=y2)&&(s<=y2+20)))
 alert("GAME OVER : YOUR SCORE IS "+score);
 if(cy==50)
 alert("YOU WIN");

}

function draw() {
ctx.clearRect( 0, 0, canvas.width, canvas.height);
drawCircle();
drawBlock();
drawScore();
duetGame();
collisionDetection();
y=y+dy;
if(y>=canvas.height)
  {y=10;
   if((Math.floor((Math.random() * 10) + 1))%2==0)
   x=(150+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1));
   else
   x=(210+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1));
  drawBlock();
  score=score+1;
  }

if(score>4)
{  if(y==canvas.height*0.5)
   {if((Math.floor((Math.random() * 10) + 1))%2==0)
   x2=(150+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1));
   else
   x2=(210+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1)+Math.floor((Math.random() * 10) + 1));
   z=x2;
   y2=10;
   }
}

if(score>4&&z==x2)
{drawBlock2();
 y2=y2+dy2;
}

if(score>10)
{cy=cy-0.25;
 f=cy-50*Math.sin(t);
 h=cy+50*Math.sin(t); 
 dy=1.75;
 dy2=1.75;
}
requestAnimationFrame(draw);
}





