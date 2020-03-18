function checkForName(inputText) {
    console.log("::: Running checkForCity :::", inputText);
    let city = [
        "San Carlos",
        "San Francisco",
        "Naples",
        "Miami",
        "Ukiah"
    ]

    if(city.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
