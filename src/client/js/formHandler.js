function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('city').value
    console.log(formText)

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${formText}&units=imperial&appid=6d101e81f2140d2f516e6072bda48dec
    `)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('results').innerHTML = `Temperature: ${Math.round(data.main.temp)}`
        document.getElementById('feels').innerHTML = `Feel Like: ${Math.round(data.main.feels_like)}`
        document.getElementById('tempMin').innerHTML = `Min: ${Math.round(data.main.temp_min)}`
        document.getElementById('tempMax').innerHTML = `Max: ${Math.round(data.main.temp_max)}`
    })
}

export { handleSubmit }
