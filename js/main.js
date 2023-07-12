 
const translateButton = document.querySelector('.translate-btn')

translateButton.addEventListener('click', translate)

async function translate() {
    const statement = document.querySelector('.statement').value
    try {
        response = await fetch('https://text-translator2.p.rapidapi.com/translate', 
            {
            method: 'POST',
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "X-RapidAPI-Key":"1c3baf5d34mshcf8f758353d83bfp10d11ajsn038b0f420fa1",
                "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
            },
            body: new URLSearchParams({
                source_language: "en",
                target_language: "sw",
                text: statement,
            })
            }
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('.translation').textContent = data.data.translatedText
        })

    } catch (error) {
        console.log(error)
    }
    

}