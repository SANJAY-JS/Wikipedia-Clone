function searchWikipedia() {
    // Get the search input value
    var searchQuery = document.getElementById('searchInput').value;

    // Redirect to Wikipedia search page with the search query
    window.open('https://en.wikipedia.org/wiki/Special:Search?search=' + searchQuery, '_blank');
}
