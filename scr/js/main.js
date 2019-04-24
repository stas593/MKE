var example = document.getElementById("example"),
          ctx = example.getContext('2d');
            example.width  = 500;
            example.height = 500;
            ctx.lineWidth = 0.1 ;
            var n=0;
            var p=0;
            var v=0;
            var k=0;
            for (var i=0; i<26; i++)
            {
                ctx.strokeRect((20+n), 0, 0, 500);
                for (var l=0;l<26;l++, k+=20){
                ctx.beginPath();
                ctx.fillStyle = "rgb(0,0,0)";
                var list = document.getElementById('main');
                var div = document.createElement('Div');
                var point = document.getElementsByClassName('point');
		        list.appendChild(div);
                $(div).toggleClass('point');
                // point.style.left=(parseInt(point.style.left,10)+50)+"px";
                
                
                // attr('class','point');

                // ctx.arc (n,(500-v),1,0,2*Math.PI,true);
                ctx.fill();
                
                ctx.closePath();
                v+=20;
                if (l==25){
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
