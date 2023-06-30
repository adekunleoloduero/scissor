const analyticsTableRows = document.querySelectorAll('.analytics-row');
const copyBtn = document.getElementById('copy-short-url');
const shortUrlText = document.getElementById('short-url-text');



const copyShortUrl = (e) => {
    const text = shortUrlText.value;
    console.log(text);
    navigator.clipboard.writeText(text);
    copyBtn.innerText = 'Copied to Clipboard';
}


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
shortUrlText.addEventListener("click", copyShortUrl);