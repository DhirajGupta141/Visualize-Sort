

/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");  // returns an array

//butts_algo will have all the buttons of the .algos class

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");  // that 60 % part of the section part
cont.style="flex-direction:row";  // This is the styling of our array elements that is our divs

//Array generation and updation.

inp_gen.addEventListener("click",generate_array); //here inp_gen is the object of input box gen
inp_as.addEventListener("input",update_array_size);

function generate_array()  
{
    //this method is everything for this project this is the method which is generating that
    //vertical poles of divs which represents the values in this sorting algorithm project
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        //div_sizes[] array is nothing but normal array of values [32,2, 3,87,6,10..]
        div_sizes[i]=Math.floor(Math.random()* 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div"); //divs[] array will store that div which is 
        //generated above using Math.random number is div is created using createElement method  
        cont.appendChild(divs[i]); // Appending that div to the cont
        //here cont is nothing but a div which we got from the section -> array_container 
        //Remember this child is nothing but a div block not a value
        margin_size=0.1; // margin between this divs
        //  #0d98ba 
        divs[i].style=" margin:0% " + margin_size + "%; background-color:black; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        
        // Width of my div that is array element->div which is nothing but a nubmer which 
        //we need to sort-->(100/array_size-(2*margin_size)) +"%"
        //height  -->height:" + (div_sizes[i]) + "%;---> 
        //height is nothing but the value which is generated using Math.random function 
        //like 23 45 11 345 11
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)  // butts_algo have all the buttons of our algorithms
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked"); // dynamic style adding

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":
                        // alert("Bubble is selected and its time compelxity is O(n)^2");
                        Bubble();
                      
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
