function getCoords(elem) { 
// (1) 
var box = elem.getBoundingClientRect(); 

var body = document.body; 
var docEl = document.documentElement; 

// (2) 
var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop; 
var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft; 

// (3) 
var clientTop = docEl.clientTop || body.clientTop || 0; 
var clientLeft = docEl.clientLeft || body.clientLeft || 0; 

// (4) 
var top = box.top + scrollTop - clientTop; 
var left = box.left + scrollLeft - clientLeft; 

return { 
top: top, 
left: left 
}; 
}

var height = 500, 
    width = 500, 
    margin = 30;       
     
var svg = d3.select("body").append("svg")
        .attr("class", "axis")
        .attr("width", width)
        .attr("height", height);
 
// длина оси X= ширина контейнера svg - отступ слева и справа
var xAxisLength = width - 2 * margin;     
  
// длина оси Y = высота контейнера svg - отступ сверху и снизу
var yAxisLength = height - 2 * margin;
    
// функция интерполяции значений на ось Х  
var scaleX = d3.scale.linear()
            .domain([0, 100])
            .range([0, xAxisLength]);
var scaleY = d3.scale.linear()
            .domain([100, 0])
            .range([0, yAxisLength]);
             
// создаем ось X   
var xAxis = d3.svg.axis()
             .scale(scaleX)
             .orient("bottom");    
var yAxis = d3.svg.axis()
             .scale(scaleY)
             .orient("left");
              
 // отрисовка оси               
svg.append("g")       
     .attr("class", "x-axis")
     .attr("transform",  // сдвиг оси вниз и вправо
         "translate(" + margin + "," + (height - margin) + ")")
    .call(xAxis);
             
svg.append("g")       
    .attr("class", "y-axis")
    .attr("transform", // сдвиг оси вниз и вправо на margin
            "translate(" + margin + "," + margin + ")")
    .call(yAxis);
 
// создаем набор вертикальных линий для сетки   
d3.selectAll("g.x-axis g.tick")
    .append("line") // добавляем линию
    .classed("grid-line", true) // добавляем класс
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", - (yAxisLength));
     
// рисуем горизонтальные линии 
d3.selectAll("g.y-axis g.tick")
    .append("line")
    .classed("grid-line", true)
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", xAxisLength)
    .attr("y2", 0);
 
