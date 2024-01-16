document.addEventListener('DOMContentLoaded', function () {

    function highlightKeywords(keywords) {
        var content = document.querySelector(".resume-content").innerHTML; // Assuming your resume content is inside an element with the class "resume-content"

        // Loop through each keyword and add a span with a class for highlighting
        keywords.forEach(function (keyword) {
            var regex = new RegExp(keyword, 'gi');
            content = content.replace(regex, '<span class="highlight">' + keyword + '</span>');
        });

        document.querySelector(".resume-content").innerHTML = content;
    }

    // Function to handle the search
    function handleSearch() {
        var searchInput = document.querySelector("#search-input").value;
        if (searchInput.trim() !== "") {
            var keywords = searchInput.trim().split(" ");
            highlightKeywords(keywords);
        }
    }

    // Event listener for the search button
    document.querySelector("#search-button").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the form from submitting
        handleSearch();
    });

    // Event listener for the Enter key in the search input
    document.querySelector("#search-input").addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault(); // Prevent the form from submitting
            handleSearch();
        }
    });

});

