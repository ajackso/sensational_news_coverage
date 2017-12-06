const ebola_flu_data = [
{id: "01", ebola: 74, flu: 29, name: "Alabama"},
{id: "04", ebola: 59, flu: 17, name: "Arizona"},
{id: "05", ebola: 78, flu: 34, name: "Arkansas"},
{id: "06", ebola: 54, flu: 18, name: "California"},
{id: "08", ebola: 67, flu: 23, name: "Colorado"},
{id: "09", ebola: 76, flu: 21, name: "Connecticut"},
{id: "10", ebola: 69, flu: 24, name: "Delaware"},
{id: "12", ebola: 61, flu: 17, name: "Florida"},
{id: "13", ebola: 69, flu: 22, name: "Georgia"},
{id: "16", ebola: 59, flu: 21, name: "Idaho"},
 {id: "17", ebola: 72, flu: 22, name: "Illinois"},
 {id: "18", ebola: 64, flu: 24, name: "Indiana"},
 {id: "19", ebola: 61, flu: 24, name: "Iowa"},
 {id: "20", ebola: 73, flu: 22, name: "Kansas"},
 {id: "21", ebola: 69, flu: 30, name: "Kentucky"},
 {id: "22", ebola: 83, flu: 25, name: "Louisiana"},
 {id: "23", ebola: 68, flu: 23, name: "Maine"},
 {id: "24", ebola: 73, flu: 24, name: "Maryland"},
 {id: "25", ebola: 66, flu: 21, name: "Massachusetts"},
 {id: "26", ebola: 70, flu: 23, name: "Michigan"},
 {id: "27", ebola: 63, flu: 24, name: "Minnesota"},
 {id: "28", ebola: 74, flu: 31, name: "Mississippi"},
 {id: "29", ebola: 69, flu: 24, name: "Missouri"},
 {id: "30", ebola: 62, flu: 22, name: "Montana"},
 {id: "31", ebola: 57, flu: 23, name: "Nebraska"},
 {id: "32", ebola: 64, flu: 17, name: "Nevada"},
 {id: "33", ebola: 63, flu: 23, name: "New Hampshire"},
 {id: "34", ebola: 70, flu: 20, name: "New Jersey"},
 {id: "35", ebola: 64, flu: 21, name: "New Mexico"},
 {id: "36", ebola: 68, flu: 21, name: "New York"},
 {id: "37", ebola: 64, flu: 26, name: "North Carolina"},
 {id: "38", ebola: 64, flu: 26, name: "North Dakota"},
 {id: "39", ebola: 72, flu: 24, name: "Ohio"},
 {id: "40", ebola: 100, flu: 27, name: "Oklahoma"},
 {id: "41", ebola: 36, flu: 12, name: "Oregon"},
 {id: "42", ebola: 55, flu: 24, name: "Pennsylvania"},
 {id: "44", ebola: 66, flu: 22, name: "Rhode Island"},
 {id: "45", ebola: 65, flu: 28, name: "South Carolina"},
 {id: "46", ebola: 69, flu: 25, name: "South Dakota"},
 {id: "47", ebola: 59, flu: 30, name: "Tennessee"},
 {id: "48", ebola: 93, flu: 22, name: "Texas"},
 {id: "49", ebola: 49, flu: 20, name: "Utah"},
 {id: "50", ebola: 61, flu: 23, name: "Vermont"},
 {id: "51", ebola: 42, flu: 17, name: "Virginia"},
 {id: "53", ebola: 60, flu: 21, name: "Washington"},
 {id: "54", ebola: 69, flu: 30, name: "West Virginia"},
 {id: "55", ebola: 62, flu: 23, name: "Wisconsin"},
 {id: "56", ebola: 63, flu: 24, name: "Wyoming"}];

var chart = new d3plus.viz()
  .container("#svg_ebola_flu_map")        // container DIV to hold the visualization
  .data(ebola_flu_data)                // data to use with the visualization
  .coords({
        "mute":["02", "15", "60", "66", "69", "72", "78"],
        "value": "http://d3plus.org/topojson/states.json"
    })
  .type("geo_map")              // visualization type
  .text("")         // key to use for display text
  .color(function(d){
      return d.ebola > d.flu ? "#880000" : "#008800";
    })
  .title("Ebola vs. Flu (Oct 2014 - March 2015)")
  .tooltip({"sub":"name","children":false,"value":["ebola", "flu"]})   // list the keys to show in tooltip
  .draw();


