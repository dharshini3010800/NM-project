async function getCovidData() {

    const country =
        document.getElementById("countryInput").value;

    if(country === ""){
        alert("Please enter a country name");
        return;
    }

    try {

        const response = await fetch(
        `https://disease.sh/v3/covid-19/countries/${country}`
        );

        const data = await response.json();

        document.getElementById("country").innerText =
            data.country;

        document.getElementById("cases").innerText =
            data.cases.toLocaleString();

        document.getElementById("recovered").innerText =
            data.recovered.toLocaleString();

        document.getElementById("deaths").innerText =
            data.deaths.toLocaleString();

        document.getElementById("active").innerText =
            data.active.toLocaleString();

        let alertBox =
            document.getElementById("alertBox");

        if(data.active > 1000000){
            alertBox.innerHTML =
            "🚨 High Risk Alert: Large Number of Active Cases!";
            alertBox.style.background = "#ff4d4d";
            alertBox.style.color = "white";
        }
        else{
            alertBox.innerHTML =
            "✅ Situation is Comparatively Stable";
            alertBox.style.background = "#28a745";
            alertBox.style.color = "white";
        }

    } catch(error){
        alert("Country not found!");
    }
}