var example = document.getElementById("example"),
    ctx = example.getContext('2d');
        example.width  = 500;
        example.height = 500;
        ctx.lineWidth = 0.1 ;
        var n=0;
        var p=0;
        var v=0;
        var k=0;
        var cl = 0;
        var cl1 = 0;
        var z = 0
        for (var i=0; i<26; i++)
        {
            ctx.strokeRect((20+n), 0, 0, 500);
            z += 20
            for (var l=0;l<26;l++, k+=20){
                ctx.beginPath();
                ctx.fillStyle = "rgb(0,0,0)";
                var list = document.getElementById('points');
                var div = document.createElement('Div');
		        list.appendChild(div);
                $(div).toggleClass('point' + cl1);
                // var point = document.getElementsByClassName('point' + (cl-1));
                $('' + (cl1++)).css({"position":"absolute", 
                    "height":"5px", "width":"5px", 
                    "background-color":"black", 
                    "left": v + "px", 
                    "bottom": z + "px",
                    "border-radius": "50%",
                    "pointer-events": "none"})
                v+= 20
                ctx.fill();
                
                ctx.closePath();
                if (l==25){
                    v=0;
                    cl=0;
                    v=0;
                    }
                }               
                n+=20;
            }
            for (var y=0; y<25; y++)
            {
                ctx.strokeRect(0,(20+p),500,0);
                p+=20;
            }   
            var z=0;

$("#example").click(function(){
    
    if (z==0){
    var x0=event.offsetX;
    var y0=event.offsetY;
    ctx.moveTo(x0, y0);
    ctx.lineWidth = 1;
    z++;
    }
    else
    {
        var x=event.offsetX;
                var y=event.offsetY;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.lineWidth = 1;
    z--;
    }
});