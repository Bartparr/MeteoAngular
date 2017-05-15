function TempFilter(){
    return function(temp){
      if(temp >= 208.3){
        return  'isHot';
      }else{
        return  'isCold';
      }
    }
};
