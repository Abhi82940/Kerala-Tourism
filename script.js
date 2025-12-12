const placeData = {
    "Ernakulam": ["Fort Kochi", "Marine Drive", "Cherai Beach"],
    "Alappuzha": ["Alleppey Backwaters", "Marari Beach", "Pathiramanal"],
    "Idukki": ["Munnar", "Thekkady", "Kalvari Mount"],
    "Kollam": ["Ashtamudi Lake", "Jatayu Earth Center", "Thangassery Beach"],
    "Wayanad": ["Banasura Dam", "Edakkal Caves", "Soochippara Waterfalls"]
};

document.getElementById("district").addEventListener("change", function () {
    const district = this.value;
    const placeDropdown = document.getElementById("places");

    placeDropdown.innerHTML = "<option>Select Place</option>";

    if (placeData[district]) {
        placeData[district].forEach(place => {
            const opt = document.createElement("option");
            opt.textContent = place;
            placeDropdown.appendChild(opt);
        });
    }
});
