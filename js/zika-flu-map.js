const zika_flu_data = [
{id: "01", zika: 45, flu: 80, state: "Alabama", color: "#202556"},
{id: "04", zika: 42, flu: 98, state: "Arizona", color: "#202556"},
{id: "05", zika: 40, flu: 82, state: "Arkansas", color: "#202556"},
{id: "06", zika: 50, flu: 83, state: "California", color: "#202556"},
{id: "08", zika: 51, flu: 84, state: "Colorado", color: "#202556"},
{id: "09", zika: 68, flu: 91, state: "Connecticut", color: "#202556"},
{id: "10", zika: 59, flu: 80, state: "Delaware", color: "#202556"},
{id: "12", zika: 76, flu: 70, state: "Florida", color: "#eace3f"},
{id: "13", zika: 50, flu: 77, state: "Georgia", color: "#202556"},
{id: "16", zika: 35, flu: 81, state: "Idaho", color: "#202556"},
{id: "17", zika: 54, flu: 85, state: "Illinois", color: "#202556"},
{id: "18", zika: 47, flu: 87, state: "Indiana", color: "#202556"},
 {id: "19", zika: 46, flu: 80, state: "Iowa", color: "#202556"},
 {id: "20", zika: 32, flu: 64, state: "Kansas", color: "#202556"},
 {id: "21", zika: 49, flu: 100, state: "Kentucky", color: "#202556"},
 {id: "22", zika: 46, flu: 71, state: "Louisiana", color: "#202556"},
 {id: "23", zika: 53, flu: 82, state: "Maine", color: "#202556"},
 {id: "24", zika: 73, flu: 82, state: "Maryland", color: "#202556"},
 {id: "25", zika: 65, flu: 80, state: "Massachusetts", color: "#202556"},
 {id: "26", zika: 49, flu: 94, state: "Michigan", color: "#202556"},
 {id: "27", zika: 56, flu: 83, state: "Minnesota", color: "#202556"},
 {id: "28", zika: 39, flu: 88, state: "Mississippi", color: "#202556"},
 {id: "29", zika: 45, flu: 85, state: "Missouri", color: "#202556"},
 {id: "30", zika: 48, flu: 85, state: "Montana", color: "#202556"},
 {id: "31", zika: 45, flu: 83, state: "Nebraska", color: "#202556"},
 {id: "32", zika: 37, flu: 74, state: "Nevada", color: "#202556"},
 {id: "33", zika: 62, flu: 80, state: "New Hampshire", color: "#202556"},
 {id: "34", zika: 65, flu: 82, state: "New Jersey", color: "#202556"},
 {id: "35", zika: 40, flu: 87, state: "New Mexico", color: "#202556"},
 {id: "36", zika: 73, flu: 82, state: "New York", color: "#202556"},
 {id: "37", zika: 48, flu: 81, state: "North Carolina", color: "#202556"},
 {id: "38", zika: 48, flu: 84, state: "North Dakota", color: "#202556"},
 {id: "39", zika: 50, flu: 83, state: "Ohio", color: "#202556"},
 {id: "40", zika: 41, flu: 79, state: "Oklahoma", color: "#202556"},
 {id: "41", zika: 44, flu: 80, state: "Oregon", color: "#202556"},
 {id: "42", zika: 60, flu: 87, state: "Pennsylvania", color: "#202556"},
 {id: "44", zika: 50, flu: 91, state: "Rhode Island", color: "#202556"},
 {id: "45", zika: 41, flu: 84, state: "South Carolina", color: "#202556"},
 {id: "46", zika: 47, flu: 80, state: "South Dakota", color: "#202556"},
 {id: "47", zika: 45, flu: 90, state: "Tennessee", color: "#202556"},
 {id: "48", zika: 53, flu: 73, state: "Texas", color: "#202556"},
 {id: "49", zika: 46, flu: 89, state: "Utah", color: "#202556"},
 {id: "50", zika: 64, flu: 73, state: "Vermont", color: "#202556"},
 {id: "51", zika: 57, flu: 83, state: "Virginia", color: "#202556"},
 {id: "53", zika: 53, flu: 86, state: "Washington", color: "#202556"},
 {id: "54", zika: 42, flu: 90, state: "West Virginia", color: "#202556"},
 {id: "55", zika: 49, flu: 88, state: "Wisconsin", color: "#202556"},
 {id: "56", zika: 37, flu: 85, state: "Wyoming", color: "#202556"}];

var chart = new d3plus.viz()
  .container("#svg_zika_flu_map")     // container DIV to hold the visualization
  .data(zika_flu_data)                // data to use with the visualization
  .coords({
        "mute":["02", "15", "60", "66", "69", "72", "78"],
        "value": "http://d3plus.org/topojson/states.json"
    })
  .color("color")
  .type("geo_map")
  .text("")
  .title("Zika vs. Flu (Oct 2015 - March 2016)")
  .tooltip({"sub":"state","children":false,"value":["zika", "flu"]})   // list the keys to show in tooltip
  .draw();