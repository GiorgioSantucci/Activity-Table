/*
Bisogna associare la loading_bar a tutti gli input. 
Bisogna contare quanti input vengono checkati.
Bisogna controllare la barra.

aria-value-now=
*/

/*addEventListener per ogni checkbox*/
var loadValue1 = 0;
var loadValue2 = 0;
var loadValue3 = 0;
var loadValue4 = 0;
var loadValue5 = 0;
var loadValue6 = 0;
var loadValue7 = 0;

var formula1;
var formula2;
var formula3;
var formula4;
var formula5;
var formula6;
var formula7;


var numeroAttività = 5; //Provissorio, obv: general purpose 


function loadingBar1(spunta){
    var barra1 = document.getElementById("bar1");
    if(spunta.checked){
        loadValue1++;
        formula1 = (loadValue1/numeroAttività) * 100;
        formula1.toString();
        barra1.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula1+'%"></div>';
    }
    else{
        loadValue1--;
        formula1 = (loadValue1/numeroAttività) * 100;
        barra1.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula1+'%"></div>';
    }

}

function loadingBar2(spunta){
    var barra2 = document.getElementById("bar2");
    if(spunta.checked){
        loadValue2++;
        formula2 = (loadValue2/numeroAttività) * 100;
        formula2.toString();
        barra2.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula2+'%"></div>';
    }
    else{
        loadValue2--;
        formula2 = (loadValue2/numeroAttività) * 100;
        barra2.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula2+'%"></div>';
    }

}

function loadingBar3(spunta){
    var barra3 = document.getElementById("bar3");
    if(spunta.checked){
        loadValue3++;
        formula3 = (loadValue3/numeroAttività) * 100;
        formula3.toString();
        barra3.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula3+'%"></div>';
    }
    else{
        loadValue3--;
        formula3 = (loadValue3/numeroAttività) * 100;
        barra3.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula3+'%"></div>';
    }
    
}

function loadingBar4(spunta){
    var barra4 = document.getElementById("bar4");
    if(spunta.checked){
        loadValue4++;
        formula4 = (loadValue4/numeroAttività) * 100;
        formula4.toString();
        barra4.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula4+'%"></div>';
    }
    else{
        loadValue4--;
        formula4 = (loadValue4/numeroAttività) * 100;
        barra4.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula4+'%"></div>';
    }
    
}

function loadingBar5(spunta){
    var barra5 = document.getElementById("bar5");
    if(spunta.checked){
        loadValue5++;
        formula5 = (loadValue5/numeroAttività) * 100;
        formula5.toString();
        barra5.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula5+'%"></div>';
    }
    else{
        loadValue5--;
        formula5 = (loadValue5/numeroAttività) * 100;
        barra5.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula5+'%"></div>';
    }
    
}

function loadingBar6(spunta){
    var barra6 = document.getElementById("bar6");
    if(spunta.checked){
        loadValue6++;
        formula6 = (loadValue6/numeroAttività) * 100;
        formula6.toString();
        barra6.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula6+'%"></div>';
    }
    else{
        loadValue6--;
        formula6 = (loadValue6/numeroAttività) * 100;
        barra6.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula6+'%"></div>';
    }
    
}

function loadingBar7(spunta){
    var barra7 = document.getElementById("bar7");
    if(spunta.checked){
        loadValue7++;
        formula7 = (loadValue7/numeroAttività) * 100;
        formula7.toString();
        barra7.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula7+'%"></div>';
    }
    else{
        loadValue7--;
        formula7 = (loadValue7/numeroAttività) * 100;
        barra7.innerHTML = '<div class="progress-bar bg-success" role="progressbar" style="width: '+formula7+'%"></div>';
    }
    
}
