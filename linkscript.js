function toggleFolder(folderId) {
    const folders = document.querySelectorAll('.folder');
    const contents = document.querySelectorAll('.folder-content');

    folders.forEach(folder => folder.style.display = 'none');
    contents.forEach(content => content.style.display = 'none');

    const currentFolder = document.getElementById(folderId);
    currentFolder.style.display = 'flex';

    document.getElementById('search-bar').style.display = 'block';
    document.getElementById('search-bar').setAttribute('data-folder', folderId);
    document.getElementById('search-bar').value = '';  // Clear search bar
    resetSearch(folderId);

    updateNavigationButtons(folderId);
}

function showAllFolders() {
    const folders = document.querySelectorAll('.folder');
    const contents = document.querySelectorAll('.folder-content');

    folders.forEach(folder => folder.style.display = 'flex');
    contents.forEach(content => content.style.display = 'none');

    document.getElementById('search-bar').style.display = 'none';
}

// function updateNavigationButtons(folderId) {
//     const navButtons = document.querySelectorAll('.nav-button');

//     navButtons.forEach(button => button.style.display = 'none');

//     if (folderId === 'folder1') {
//         document.querySelector('#folder1 .nav-button[onclick*="folder2"]').style.display = 'inline-block';
//     } else if (folderId === 'folder2') {
//         document.querySelector('#folder2 .nav-button[onclick*="folder1"]').style.display = 'inline-block';
//         document.querySelector('#folder2 .nav-button[onclick*="folder3"]').style.display = 'inline-block';
//     } else if (folderId === 'folder3') {
//         document.querySelector('#folder3 .nav-button[onclick*="folder2"]').style.display = 'inline-block';
//     }
// }

function searchFiles() {
    const searchBar = document.getElementById('search-bar');
    const folderId = searchBar.getAttribute('data-folder');
    const query = searchBar.value.toLowerCase();

    if (!folderId) return;

    const folder = document.getElementById(folderId);
    const files = folder.querySelectorAll('.file');

    files.forEach(file => {
        const fileName = file.querySelector('span').innerText.toLowerCase();
        file.style.display = fileName.includes(query) ? 'flex' : 'none';
    });
}

function resetSearch(folderId) {
    const folder = document.getElementById(folderId);
    const files = folder.querySelectorAll('.file');
    files.forEach(file => file.style.display = 'flex');
}
