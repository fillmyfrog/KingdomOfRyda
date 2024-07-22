document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.querySelector(".accordion");
    const accordionContent = document.querySelector(".accordion-content");

    accordion.addEventListener("click", function () {
        // Alterna a exibição do conteúdo
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    sortCardsAlphabetically();
});

function sortCardsAlphabetically() {
    const grid = document.querySelector('.grid');
    const cards = Array.from(grid.querySelectorAll('.card'));

    // Sort cards alphabetically by the title
    cards.sort((a, b) => {
        const titleA = a.querySelector('.title').textContent.toLowerCase();
        const titleB = b.querySelector('.title').textContent.toLowerCase();
        return titleA.localeCompare(titleB);
    });

    // Clear the grid and append the sorted cards
    cards.forEach(card => {
        grid.appendChild(card);
    });
}

function filterByVersion(version) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const versionText = card.querySelector('.version').textContent;
        if (versionText.includes(version)) {
            card.classList.add('version-match');
            card.classList.remove('version-mismatch');
        } else {
            card.classList.add('version-mismatch');
            card.classList.remove('version-match');
        }
    });
}

function resetCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.classList.remove('version-match', 'version-mismatch');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");

    searchBar.addEventListener("input", function () {
        const searchTerm = searchBar.value.toLowerCase();
        filterCardsBySearchTerm(searchTerm);
    });
});

function filterCardsBySearchTerm(searchTerm) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const titleText = card.querySelector('.title').textContent.toLowerCase();
        if (titleText.includes(searchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
