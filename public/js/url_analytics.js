const analyticsTableRows = document.querySelectorAll('.analytics-row');


function colorTableRows() {
    for (let i = 0; i <= analyticsTableRows.length; i++) {
        if (i % 2 === 0 || i == 0) {
            analyticsTableRows[i].style.backgroundColor = 'rgba(0, 0, 0, 0.548)';
        } else {
            analyticsTableRows[i].style.backgroundColor = 'rgba(0, 0, 0, 0.311)'; 
        }
    }
}

colorTableRows();