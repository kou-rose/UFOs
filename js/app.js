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

function handleClick() {
    // get datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if date was entered and
    // filter the data using that date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // rebuild the table using the filtered data
    // NOTE: if no date was entered, then filteredData
    // will just be the original tableData
    buildTable(filteredData);

    // attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);

    // build the table when the page loads
    buildTable(tableData);
}