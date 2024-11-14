let bookmarks = [];
const bookmarkList = document.getElementById('bookmarkList');
const addBookmarkBtn = document.getElementById('addBookmarkBtn');
const bookmarkModal = document.getElementById('bookmarkModal');
const closeModal = document.querySelector('.close');
const bookmarkForm = document.getElementById('bookmarkForm');

// Load bookmarks from local storage
function loadBookmarks() {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    if (storedBookmarks) {
        bookmarks = storedBookmarks;
        renderBookmarks();
    }
}

// Render bookmarks to the page
function renderBookmarks() {
    bookmarkList.innerHTML = '';
    bookmarks.forEach((bookmark, index) => {
        const bookmarkItem = document.createElement('div');
        bookmarkItem.className = 'bookmark-item';
        bookmarkItem.innerHTML = `
            <h3>${bookmark.name}</h3>
            <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
            <button onclick="deleteBookmark(${index})">Delete</button>
        `;
        bookmarkList.appendChild(bookmarkItem);
    });
}

// Open the add bookmark modal
addBookmarkBtn.onclick = function() {
    bookmarkModal.style.display = "block";
}

// Close the modal
closeModal.onclick = function() {
    bookmarkModal.style.display = "none";
}

// Save the bookmark
bookmarkForm.onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('bookmarkName').value;
    const url = document.getElementById('bookmarkUrl').value;
    bookmarks.push({ name, url });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
    bookmarkModal.style.display = "none";
    bookmarkForm.reset(); // Reset the form fields
}

// Delete a bookmark
function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
}

// Close modal on clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === bookmarkModal) {
        bookmarkModal.style.display = "none";
    }
}

// Load bookmarks when the page is loaded
window.onload = loadBookmarks;