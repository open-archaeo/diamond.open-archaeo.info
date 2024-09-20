/* Sortable table with list.js */
var listOptions = {
  valueNames: [ 
    'model', 
    { attr: 'data-title', name: 'title' }, 
    'publisher'
  ]
};

var journalsList = new List('journals-list', listOptions);

/* Turn on disabled controls */
searchControls = document.getElementById("journals-list").getElementsByClassName("search");
Array.from(searchControls).forEach((element) => {
  element.disabled = false;
});

sortControls = document.getElementById("journals-list").getElementsByClassName("sort");
Array.from(sortControls).forEach((element) => {
  element.disabled = false;
});
