function ToIconLevelPicturesFilter(){
  return function(prevLevel,curLevel){
    if(prevLevel<curLevel){
      return 'images\increase.jpg';
    }else if(prevLevel==curLevel){
      return 'images\equal.png';
    }else{
      return 'images\decrease.jpg';
    }
  }
}
