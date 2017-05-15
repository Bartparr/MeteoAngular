function ToIconPicturesFilter(){
    return function(sens){
        switch(sens){
            case "Credit":
              return  'human.jpg';
             default:
              return  'toon.jpg';
        }
    };
};
