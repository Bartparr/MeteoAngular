function LevelFilter(){
    return function(level){
      if(level >= 101910){
        return  'isHot';
      }else{
        return  'isCold';
      }
    }
};
