const ebola_flu_data = [
{id: "01", ebola: 74, flu: 29, name: "Alabama", color: "#8f1b00"},
{id: "04", ebola: 59, flu: 17, name: "Arizona", color: "#8f1b00"},
{id: "05", ebola: 78, flu: 34, name: "Arkansas", color: "#8f1b00"},
{id: "06", ebola: 54, flu: 18, name: "California", color: "#8f1b00"},
{id: "08", ebola: 67, flu: 23, name: "Colorado", color: "#8f1b00"},
{id: "09", ebola: 76, flu: 21, name: "Connecticut", color: "#8f1b00"},
{id: "10", ebola: 69, flu: 24, name: "Delaware", color: "#8f1b00"},
{id: "12", ebola: 0, flu: 17, name: "Florida", color: "#8f1b00"},
{id: "13", ebola: 69, flu: 22, name: "Georgia", color: "#8f1b00"},
{id: "16", ebola: 59, flu: 21, name: "Idaho", color: "#8f1b00"},
 {id: "17", ebola: 72, flu: 22, name: "Illinois", color: "#8f1b00"},
 {id: "18", ebola: 64, flu: 24, name: "Indiana", color: "#8f1b00"},
 {id: "19", ebola: 61, flu: 24, name: "Iowa", color: "#8f1b00"},
 {id: "20", ebola: 73, flu: 22, name: "Kansas", color: "#8f1b00"},
 {id: "21", ebola: 69, flu: 30, name: "Kentucky", color: "#8f1b00"},
 {id: "22", ebola: 83, flu: 25, name: "Louisiana", color: "#8f1b00"},
 {id: "23", ebola: 68, flu: 23, name: "Maine", color: "#8f1b00"},
 {id: "24", ebola: 73, flu: 24, name: "Maryland", color: "#8f1b00"},
 {id: "25", ebola: 66, flu: 21, name: "Massachusetts", color: "#8f1b00"},
 {id: "26", ebola: 70, flu: 23, name: "Michigan", color: "#8f1b00"},
 {id: "27", ebola: 63, flu: 24, name: "Minnesota", color: "#8f1b00"},
 {id: "28", ebola: 74, flu: 31, name: "Mississippi", color: "#8f1b00"},
 {id: "29", ebola: 69, flu: 24, name: "Missouri", color: "#8f1b00"},
 {id: "30", ebola: 62, flu: 22, name: "Montana", color: "#8f1b00"},
 {id: "31", ebola: 57, flu: 23, name: "Nebraska", color: "#8f1b00"},
 {id: "32", ebola: 64, flu: 17, name: "Nevada", color: "#8f1b00"},
 {id: "33", ebola: 63, flu: 23, name: "New Hampshire", color: "#8f1b00"},
 {id: "34", ebola: 70, flu: 20, name: "New Jersey", color: "#8f1b00"},
 {id: "35", ebola: 64, flu: 21, name: "New Mexico", color: "#8f1b00"},
 {id: "36", ebola: 68, flu: 21, name: "New York", color: "#8f1b00"},
 {id: "37", ebola: 64, flu: 26, name: "North Carolina", color: "#8f1b00"},
 {id: "38", ebola: 64, flu: 26, name: "North Dakota", color: "#8f1b00"},
 {id: "39", ebola: 72, flu: 24, name: "Ohio", color: "#8f1b00"},
 {id: "40", ebola: 100, flu: 27, name: "Oklahoma", color: "#8f1b00"},
 {id: "41", ebola: 36, flu: 12, name: "Oregon", color: "#8f1b00"},
 {id: "42", ebola: 55, flu: 24, name: "Pennsylvania", color: "#8f1b00"},
 {id: "44", ebola: 66, flu: 22, name: "Rhode Island", color: "#8f1b00"},
 {id: "45", ebola: 65, flu: 28, name: "South Carolina", color: "#8f1b00"},
 {id: "46", ebola: 69, flu: 25, name: "South Dakota", color: "#8f1b00"},
 {id: "47", ebola: 59, flu: 30, name: "Tennessee", color: "#8f1b00"},
 {id: "48", ebola: 93, flu: 22, name: "Texas", color: "#8f1b00"},
 {id: "49", ebola: 49, flu: 20, name: "Utah", color: "#8f1b00"},
 {id: "50", ebola: 61, flu: 23, name: "Vermont", color: "#8f1b00"},
 {id: "51", ebola: 42, flu: 17, name: "Virginia", color: "#8f1b00"},
 {id: "53", ebola: 60, flu: 21, name: "Washington", color: "#8f1b00"},
 {id: "54", ebola: 69, flu: 30, name: "West Virginia", color: "#8f1b00"},
 {id: "55", ebola: 62, flu: 23, name: "Wisconsin", color: "#8f1b00"},
 {id: "56", ebola: 63, flu: 24, name: "Wyoming", color: "#8f1b00"}];

var chart = new d3plus.viz()
  .container("#svg_ebola_flu_map")     // container DIV to hold the visualization
  .data(ebola_flu_data)                // data to use with the visualization
  .coords({
        "mute":["02", "15", "60", "66", "69", "72", "78"],
        "value": "http://d3plus.org/topojson/states.json"
    })
  .type("geo_map")              // visualization type
  .text("")         // key to use for display text
  .color("color")
  .title("Ebola vs. Flu (Oct 2014 - March 2015)")
  .footer({"font":{"size":"20px"},"value":"In fact, audiences searched for Ebola with such frequency that no state searched for the flu more than they searched for Ebola."})
  .tooltip({"sub":"name","children":false,"value":["ebola", "flu"]})   // list the keys to show in tooltip
  .draw();


