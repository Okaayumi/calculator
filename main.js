function figure(button){
    //*ボタン(onclilck=figure)した時画面に反映//
    let display=document.getElementById("display");
    let button_value=button.value;//*ボタンの値を定義してる//
    
   
    if(button_value == "AC"){
        display.value = "0";
    }else if(button_value == "="){
        display.value = eval(display.value);//*できてないかも//
    }else{
        if(display.value == "0"){
            display.value = button_value;
        }else{
          display.value += button_value;  
        }
        
    }
}
    