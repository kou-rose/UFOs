// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear out existing data
    tbody.html("");

    // look through each object in the data
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // append a row to the table body
        let row = tbody.appen("tr");
    
    // loop through each field in the dataRow and
    // add reach value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.appen("td");
        cell.text(val);
        });}
    );}