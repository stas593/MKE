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
            z += 20;
            for (var l=0;l<26;l++, k+=20){
                ctx.beginPath();
                ctx.fillStyle = "rgb(0,0,0)";
                var list = document.getElementById('points');
                var div = document.createElement('Div');
		        list.appendChild(div);
                // var point = document.getElementsByClassName('point' + (cl-1));
                $($(div).toggleClass('point')).css({"position":"absolute", 
                    "height":"2px", "width":"2px",  
                    "left": v + "px", 
                    "bottom": z+4 + "px",
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
        
var m = 0;
var x0 = 0;
var y0 = 0;
$("#example").click(function(){
    var dlina = 0;
    var cat1 = 0;
    var cat2 = 0;
    var sin = 0;
    if (m==0){
        x0=event.offsetX;
        y0=event.offsetY;
        ctx.moveTo(x0, y0);
        ctx.lineWidth = 1;
        m++;
    }
    else
    {
        var x=event.offsetX;
        var y=event.offsetY;
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        ctx.lineWidth = 1;
        m--;
    cat1=Math.abs((x-x0));
    cat2=Math.abs((y-y0));
    dlina=Math.pow(cat1*cat1+cat2*cat2,1/2);
    sin=Math.round( Math.atan(cat2 / cat1) * ( 180 / Math.PI ) );
    console.log("Угол  " + sin);
    console.log("Катет 1 "+cat1);
    console.log("Катет 2 "+cat2);
    console.log("Длина "+dlina);
    }
});
$(".inputs").hide();
$(".loc").click(function(){
    $(".inputs").show();
    $(".input_button").click(function(){  
    F=document.getElementById("F").value;
    J=document.getElementById("J").value;
    E=document.getElementById("E").value;
    var n = 6, m = 6;
    var MLocal = [];
        for (var i = 0; i < m; i++){
            MLocal[i] = [];
            for (var j = 0; j < n; j++){
                MLocal[i][j] = 0;
        }}
        MLocal[0][0] = (E*F)/1;
        MLocal[0][1] = 0;
        MLocal[0][2] = 0;
        MLocal[0][3] = -(E*F)/1;
        MLocal[0][4] = 0;
        MLocal[0][5] = 0;
        MLocal[1][1] = (12*E*J)/Math.pow(1,3);
        MLocal[1][2] = (6*E*J)/Math.pow(1,2);
        MLocal[1][3] = 0;
        MLocal[1][4] = -(12*E*J)/Math.pow(1,3);
        MLocal[1][5] = (6*E*J)/Math.pow(1,2);
        MLocal[2][2] = (4*E*J)/1;
        MLocal[2][3] = 0;
        MLocal[2][4] = -(6*E*J)/Math.pow(1,2);
        MLocal[2][5] = (2*E*J)/1;
        MLocal[3][3] = (E*F)/1;
        MLocal[3][4] = 0;
        MLocal[3][5] = 0;
        MLocal[4][4] = (12*E*J)/Math.pow(1,3);
        MLocal[4][5] = -(6*E*J)/Math.pow(1,2);
        MLocal[5][5] = (4*E*J)/1;
        for (var i = 0; i < m; i++){
            for (var j = 0, k=0; j < n - k++; j++){
                MLocal[i][j] = MLocal[j][i];
        }
    }
    for (var i = 0; i < m; i++){
        for (var j = 0; j < n; j++){
            console.log(MLocal[i][j]);
    }
}
});
});