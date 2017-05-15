function ToIconSnowFilter(){
    return function(input){
        switch(input){
            case "non":
              return  'images\\nosnow.jpg';
             default:
              return  'images\\snow.jpg';
        }
    };
};
