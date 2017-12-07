d3.json("../data/zika-flu-map.json", function(error, json) {
  if (error) throw error;

  var chart = new d3plus.viz()
  .container("#svg_zika_flu_map")     // container DIV to hold the visualization
  .data(json)                // data to use with the visualization
  .coords({
        "mute":["02", "15", "60", "66", "69", "72", "78"],
        "value": "http://d3plus.org/topojson/states.json"
    })
  .color("color")
  .type("geo_map")
  .text("")
  .title("Zika vs. Flu (Oct 2015 - March 2016)")
  .legend(false)
  .tooltip({"sub":"state","children":false,"value":["zika", "flu"]})   // list the keys to show in tooltip
  .draw();
})