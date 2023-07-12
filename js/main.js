 
const translateButton = document.querySelector('.translate-btn')

translateButton.addEventListener('click', translate)

async function translate() {
    const statement = document.querySelector('.statement').value
    // response = fetch('https://text-translator2.p.rapidapi.com/translate', {
    //     method: 'POST',
    //     headers: {
    //         "content-type": "application/x-www-form-urlencoded",
    //         "X-RapidAPI-Key":"1c3baf5d34mshcf8f758353d83bfp10d11ajsn038b0f420fa1",
    //         "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"

    //     },
    //     body: JSON.stringify({
    //         "source_language": "en",
    //         "target_language": "sw",
    //         "text": statement,
    //     }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })

    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '1c3baf5d34mshcf8f758353d83bfp10d11ajsn038b0f420fa1',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: 'en',
            target_language: 'id',
            text: statement,
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}