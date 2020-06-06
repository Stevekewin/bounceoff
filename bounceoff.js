function bounceoff (boov,mouse){
    if (boov.x -mouse.x <mouse.width/2 + boov.width/2
      &&mouse.x - boov.x <mouse.width/2 + boov.width/2) {
    boov.velocityX = boov.velocityX * (-1);
   mouse.velocityX =mouse.velocityX * (-1);
  }
  if (boov.y -mouse.y <mouse.height/2 + boov.height/2
    &&mouse.y - boov.y <mouse.height/2 + boov.height/2){
    boov.velocityY = boov.velocityY * (-1);
   mouse.velocityY =mouse.velocityY * (-1);
  }
  }