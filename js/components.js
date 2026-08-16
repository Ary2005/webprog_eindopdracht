//ophalen van herbruikbare componenten nl. footer, header en sidemenu
async function loadComponent(elementId, file) {

    const element = document.getElementById(elementId);

    if (!element) {
        return;
    }

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Could not load ${file}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {
        console.error(error);
    }
}

loadComponent("header", "components/header.html");
loadComponent("sidebar", "components/sidebar.html");
loadComponent("footer", "components/footer.html");


// functie om sidebar dicht te klappen
function closeSidebar() {
    document.body.classList.remove("sidebar-open");
}

function toggleSidebar() {
    document.body.classList.toggle("sidebar-open");
}

//functie om te checken wanneer op de knop geklikt wordt en op basis van klik, verschillende acties uitvoeren
document.addEventListener("click", function (event) {

    //als sidebar knop geklikt wordt, roep de functie om sidebar te openen
    if (event.target.closest("#sidebarToggle")) {
        toggleSidebar();
        return;
    }

    //als sidebar close knop geklikt wordt, roep functie om sidebar dicht te klappen
    if (event.target.closest("#sidebarClose")) {
        closeSidebar();
        return;
    }

    //als sidebar achtergrond geklikt wordt, roep functie aan om sidebar dicht te klappen
    if (event.target.closest("#sidebarBackdrop")) {
        closeSidebar();
    }

});
