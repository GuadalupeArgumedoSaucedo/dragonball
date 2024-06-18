const saiyans = [
    {
        name: "Goku",
        powerLevel: 9000,
        transformations: ["Super Saiyan", "Super Saiyan God", "Ultra Instinct"]
    },
    {
        name: "Vegeta",
        powerLevel: 8500,
        transformations: ["Super Saiyan", "Super Saiyan Blue", "Super Saiyan Blue Evolved"]
    },
    {
        name: "Gohan",
        powerLevel: 7500,
        transformations: ["Super Saiyan", "Super Saiyan 2", "Mystic Gohan"]
    },
     {
        name: "Monch",
        powerLevel: 150000,
        transformations: ["Super Saiyan", "Super Saiyan Rage"]
    }
];

/*
Create  button that will display the selected saiyan in a new text paragraph

document.getElementById('showDetailsBtn').addEventListener('click', function() {

document.getElementById('saiyanDropdown');
    let selectedSaiyan = dropdown.value;

document.getElementById('showDetailsBtn').addEventListener('click', () => {
                const selectedSaiyan = dropdown.value;
                detailsArea.textContent = selectedSaiyan;
            });
*/
/*
let dropdown = document.getElementById('saiyanDropdown');
let detailsArea = document.getElementById('saiyanDetails');

let fragment = document.createDocumentFragment();

saiyans.forEach(saiyan => {
    let option = document.createElement('option');
    option.value = saiyan.name;
    option.textContent = `${saiyan.name} (${saiyan.powerLevel})`;
    fragment.appendChild(option);
});

dropdown.appendChild(fragment);
*/
document.getElementById('showDetailsBtn').addEventListener('click', () => {//1
    let selectedSaiyanName = dropdown.value;
    let selectedSaiyan = saiyans.find(saiyan => saiyan.name === selectedSaiyanName);
    if (selectedSaiyan) {
        detailsArea.textContent;
    }
});

/*
let createSaiyan = document.getElementById('saiyan1');
        createSaiyan.addEventListener('click', function () {
            let SaiyanDragonball = document.createElement('div');
            SaiyanDragonball.className = 'dragon-ball';
            SaiyanDragonball.textContent = 'Lupe'; 
            document.body.appendChild(SaiyanDragonball);
        });
*/