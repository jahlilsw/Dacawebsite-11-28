(function(){
var d3 = Plotly.d3;

var element = d3.select('#myGraphBar');
var graphnode = element.node();


var graphTitle = "How Many Dreamer will be losing DACA";

var data1 = {
  name: 'Red Title',
  x: ['DACA2017', 'DACA2018', 'DACA2019'],
  y: [ 201678, 275344 , 321920 ],
  type: 'bar',
  marker: {
    color: ['green', 'red', 'blue'],
    line: {
        width: 0.5
    } 
  }
};

Plotly.plot(graphnode, [data1], {
    title: graphTitle,
    font: {
        size: 10
    }
},
{
  displayModeBar: false
});

//this part make sure every window resize it also resizes the graph
window.addEventListener('resize', function(event){
    Plotly.Plots.resize(graphnode);
});

})();
