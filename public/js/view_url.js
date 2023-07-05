const copyBtn = document.getElementById('copy');


copyBtn.addEventListener("click", copyShortUrl)

function copyShortUrl(e) {
    const shortUrl = document.getElementById('short-url-text');
    shortUrl.select();
    shortUrl.setSelectionRange(0, 99999); // For mobile devices
   // Copy the text inside the text field
    navigator.clipboard.writeText(shortUrl.value);
    
    //Indicate that the text has been copied successully
    copyBtn.textContent = 'Copied';

    setTimeout(() => {
        copyBtn.textContent = 'Copy Short Url'
    }, 1200);
}
