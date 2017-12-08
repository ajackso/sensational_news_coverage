d3.csv("/data/Ebola_Flu_Interest_Over_Time.csv", function(error, data) {

  tick_labels = []
  for(var k = 0; k < data.length; k++){
    data[k]['Value'] = +data[k]['Value'];
    tick_labels.push(data[k]["Date"]);
  }

  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#svg_ebola_iot")  // container DIV to hold the visualization
    .data(data)         // data to use with the visualization
    .type("bar")        // visualization type
    .id("Name")         // key for which our data is unique on
    .text("Name")       // key to use for display text
    .y("Value")
    .x("Date")          // key to use for x-axis
    .time({
      "value":"Date",
      "fixed":false
    })
    .timeline({"hover":"grab"})
    .tooltip(["Name","Date","Year","Value"])
    .title("Ebola vs. Flu Interest Over Time (October 2015 - March 2016)")
    .footer({"font":{"size":"20px"},"value":"When you track interest over time in U.S. audiences based on searches for Ebola and the flu, we also realize that — while the Ebola outbreak was at its peak — more searches for Ebola took place than the flu."})
    .draw()
});
