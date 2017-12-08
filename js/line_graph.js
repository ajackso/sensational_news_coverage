d3.json("../data/cdc_data.json", function(error, json) {
  if (error) throw error;

  // transform data for input to line graph
  // format: [{id: "zika", x: 1, y:  7},{id: "ebola", x: 1, y: 0}]

  var data = []
  for(var key in json){
    var zika_count = json[key]['zika'];
    var ebola_count = json[key]['ebola'];
    var year = key.slice(0,4)
    var month = key.slice(4,6)
    var formatted_date = month+"/01/"+year
    data.push({"disease":'zika', "Number of mentions":zika_count, "time":formatted_date})
    data.push({"disease":'ebola', "Number of mentions":ebola_count, "time":formatted_date})
  }

  // https://d3plus.org/examples/basic/9037371/
  // https://www.npmjs.com/package/d3plus-viz
  //https://github.com/alexandersimoes/d3plus/wiki/Visualizations
  var visualization = d3plus.viz()
  .container("#svg_cdc_line_graph")  // container DIV to hold the visualization
  .data(data)                // data to use with the visualization
  .type("line")              // visualization type
  .id("disease")             // key for which our data is unique on
  .y("Number of mentions")                    // key to use for y-axis
  .x({
    "value":"time",
    "label":"Date"
  })       // key to use for x-axis
  .time({"value":"time","fixed":false})
  .timeline({"hover":"grab"})
  .draw()                    // finally, draw the visualization!

})
