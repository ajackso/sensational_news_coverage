const zika_flu_data = [
{id: "01", zika: 45, flu: 80, name: "Alabama"},
{id: "04", zika: 42, flu: 98, name: "Arizona"},
{id: "05", zika: 40, flu: 82, name: "Arkansas"},
{id: "06", zika: 50, flu: 83, name: "California"},
{id: "08", zika: 51, flu: 84, name: "Colorado"},
{id: "09", zika: 68, flu: 91, name: "Connecticut"},
{id: "10", zika: 59, flu: 80, name: "Delaware"},
{id: "12", zika: 76, flu: 70, name: "Florida"},
{id: "13", zika: 50, flu: 77, name: "Georgia"},
{id: "16", zika: 35, flu: 81, name: "Idaho"},
 {id: "17", zika: 54, flu: 85, name: "Illinois"},
 {id: "18", zika: 47, flu: 87, name: "Indiana"},
 {id: "19", zika: 46, flu: 80, name: "Iowa"},
 {id: "20", zika: 32, flu: 64, name: "Kansas"},
 {id: "21", zika: 49, flu: 100, name: "Kentucky"},
 {id: "22", zika: 46, flu: 71, name: "Louisiana"},
 {id: "23", zika: 53, flu: 82, name: "Maine"},
 {id: "24", zika: 73, flu: 82, name: "Maryland"},
 {id: "25", zika: 65, flu: 80, name: "Massachusetts"},
 {id: "26", zika: 49, flu: 94, name: "Michigan"},
 {id: "27", zika: 56, flu: 83, name: "Minnesota"},
 {id: "28", zika: 39, flu: 88, name: "Mississippi"},
 {id: "29", zika: 45, flu: 85, name: "Missouri"},
 {id: "30", zika: 48, flu: 85, name: "Montana"},
 {id: "31", zika: 45, flu: 83, name: "Nebraska"},
 {id: "32", zika: 37, flu: 74, name: "Nevada"},
 {id: "33", zika: 62, flu: 80, name: "New Hampshire"},
 {id: "34", zika: 65, flu: 82, name: "New Jersey"},
 {id: "35", zika: 40, flu: 87, name: "New Mexico"},
 {id: "36", zika: 73, flu: 82, name: "New York"},
 {id: "37", zika: 48, flu: 81, name: "North Carolina"},
 {id: "38", zika: 48, flu: 84, name: "North Dakota"},
 {id: "39", zika: 50, flu: 83, name: "Ohio"},
 {id: "40", zika: 41, flu: 79, name: "Oklahoma"},
 {id: "41", zika: 44, flu: 80, name: "Oregon"},
 {id: "42", zika: 60, flu: 87, name: "Pennsylvania"},
 {id: "44", zika: 50, flu: 91, name: "Rhode Island"},
 {id: "45", zika: 41, flu: 84, name: "South Carolina"},
 {id: "46", zika: 47, flu: 80, name: "South Dakota"},
 {id: "47", zika: 45, flu: 90, name: "Tennessee"},
 {id: "48", zika: 53, flu: 73, name: "Texas"},
 {id: "49", zika: 46, flu: 89, name: "Utah"},
 {id: "50", zika: 64, flu: 73, name: "Vermont"},
 {id: "51", zika: 57, flu: 83, name: "Virginia"},
 {id: "53", zika: 53, flu: 86, name: "Washington"},
 {id: "54", zika: 42, flu: 90, name: "West Virginia"},
 {id: "55", zika: 49, flu: 88, name: "Wisconsin"},
 {id: "56", zika: 37, flu: 85, name: "Wyoming"}];

var chart = new d3plus.viz()
  .container("#svg_zika_flu_map")              // container DIV to hold the visualization
  .data(zika_flu_data)                // data to use with the visualization
  .coords({
        "mute":["02", "15", "60", "66", "69", "72", "78"],
        "value": "http://d3plus.org/topojson/states.json"
    })
  .type("geo_map")
  .text("")
  .color(function(d){
    return d.zika > d.flu ? "#000000" : "#007700";
    })
  .title("Zika vs. Flu (Oct 2015 - March 2016)")
  .tooltip({"sub":"name","children":false,"value":["zika", "flu"]})   // list the keys to show in tooltip
  .draw();
