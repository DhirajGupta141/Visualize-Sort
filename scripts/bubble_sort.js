
function Bubble()
{
    c_delay=0;
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update of the elements being compare

            if(div_sizes[j]>div_sizes[j+1]) //if current is greater than next
            {
                div_update(divs[j],div_sizes[j], "red");//Color update
                div_update(divs[j+1],div_sizes[j+1], "red");//Color update
                
                //swaping the divs
                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//Color update
        }
        //the largest element now is at its correct position making it green
        div_update(divs[j],div_sizes[j], "green");//Color update
    }
    //the smallest element
    div_update(divs[0],div_sizes[0], "green");//Color update
    enable_buttons();
}