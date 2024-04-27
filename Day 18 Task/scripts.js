document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('roles-nav').addEventListener('click', () => loadContent('roles'));
    document.getElementById('screenshots-nav').addEventListener('click', () => loadContent('screenshots'));
    showSection('home'); // Show home by default
});

const apiBaseUrl = 'https://shikimori.one/api/animes/';
const animeId = 48; // Use the actual anime ID
let rolesData = null;
let screenshotsData = null;
let currentPage = 1; // Start on the first page
const rolesPerPage = 10; // Number of roles per page

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.getElementById('loading').style.display = 'none'; // Hide loading
}

function loadContent(type) {
    document.getElementById('loading').style.display = 'block'; // Show loading
    if (type === 'roles' && rolesData) {
        displayRoles(rolesData);
    } else if (type === 'screenshots' && screenshotsData) {
        displayScreenshots(screenshotsData);
    } else {
        fetchData(type);
    }
}

function fetchData(type) {
    if (type === 'roles') {
        fetchAnimeRoles();
    } else if (type === 'screenshots') {
        fetchAnimeScreenshots();
    }
}

function fetchAnimeRoles() {
    const url = `${apiBaseUrl}${animeId}/roles`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            rolesData = data;
            displayRoles(data);
        })
        .catch(error => {
            console.error('Error fetching roles:', error);
            document.getElementById('anime-roles-list').innerText = 'Failed to load roles.';
        })
        .finally(() => showSection('roles'));
}

function displayRoles(roles) {
    const container = document.getElementById('anime-roles-list');
    container.innerHTML = '<table class="table"><thead><tr><th>Character</th><th>Roles</th></tr></thead><tbody></tbody></table>';
    const tbody = container.querySelector('tbody');
    
    const startIndex = (currentPage - 1) * rolesPerPage;
    const endIndex = startIndex + rolesPerPage;
    const rolesToShow = roles.slice(startIndex, endIndex);

    rolesToShow.forEach(role => {
        const tr = document.createElement('tr');
        const characterName = role.character && role.character.name ? role.character.name : 'Unnamed Character';
        tr.innerHTML = `<td><strong>${characterName}</strong></td><td>${role.roles.join(', ')}</td>`;
        tbody.appendChild(tr);
    });

    addPagination(container, roles.length, rolesPerPage);
}

function addPagination(container, totalRoles, rolesPerPage) {
    const pageCount = Math.ceil(totalRoles / rolesPerPage);
    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    
    const firstBtn = document.createElement('button');
    firstBtn.textContent = 'First';
    firstBtn.onclick = () => {
        currentPage = 1;
        displayRoles(rolesData);
    };
    paginationDiv.appendChild(firstBtn);

    for (let i = 1; i <= pageCount; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.onclick = (() => {
            currentPage = i;
            displayRoles(rolesData);
        }).bind(null, i);
        paginationDiv.appendChild(pageBtn);
    }

    const lastBtn = document.createElement('button');
    lastBtn.textContent = 'Last';
    lastBtn.onclick = () => {
        currentPage = pageCount;
        displayRoles(rolesData);
    };
    paginationDiv.appendChild(lastBtn);

    const existingPagination = container.querySelector('.pagination');
    if (existingPagination) {
        container.removeChild(existingPagination);
    }

    container.appendChild(paginationDiv);
}
