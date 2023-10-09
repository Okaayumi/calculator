

function figure(button){
    //*ボタン(onclilck=figure)した時画面に反映//
    let display=document.getElementById("display");
    let button_value=button.value;//*ボタンの値を定義してる//
    let last=display.value.slice(-1);
    let d=display.value.slice(0,-1);
    
    
   
    if(button_value == "AC"){
        display.value = "0";
    }else if(button_value == "="){
        display.value = eval(display.value);//*できてないかも//
    }else if((button_value=="+")||(button_value=="-")||(button_value=="*")||(button_value=="/")){
        if((last=="+")||(last=="-")||(last=="*")||(last=="/")){
            display.value=d + button_value;//*末尾を入力した演算子にしたい//
        }else{
            display.value += button_value; 
        }
    }
    
    else{
        if(display.value == "0"){//*先頭に演算子が打てないように//
            if(button_value=="+"){
                display.value="0";
            }else if(button_value=="*"){
                display.value="0";
                
            }else if(button_value=="/"){
                display.value="0";
                
            }else{
            display.value = button_value;
            }
        }else{
          display.value += button_value;  
        }
        
    }
}

    