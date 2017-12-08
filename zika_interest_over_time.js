d3.csv("/data/Zika_Flu_Interest_Over_Time.csv", function(error, data) {

  tick_labels = []
  for(var k = 0; k < data.length; k++){
    data[k]['Value'] = +data[k]['Value'];
    tick_labels.push(data[k]["Date"]);
  }

  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#svg_zika_iot")  // container DIV to hold the visualization
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
    .title("Zika vs. Flu Interest Over Time (October 2014 - March 2015)")
    .footer({"font":{"size":"20px"},"value":"That being said, U.S. audiences in total did search for Zika more than they searched for Ebola between the end of 2015 and middle of Feb. 2016."})
    .draw()
});
