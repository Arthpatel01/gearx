function loadContent(url, placeholderId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(placeholderId).innerHTML = xhr.responseText

            //further process after load nav and footer
            processAfterLoadContent()
        }
    };
    xhr.send();
}

loadContent("nav.html", "nav-placeholder")
loadContent("footer.html", "footer-placeholder")

function processAfterLoadContent() {
    var currentPagePath = window.location.pathname;
    var currentPageParts = currentPagePath.split('/');
    var currentPageFilename = currentPageParts.pop();

    // Handle the case where the URL ends with "/" and the filename is empty
    if (currentPageFilename === "") {
        currentPageFilename = "index.html";
    }

    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (navLink) {
        var linkUrl = navLink.getAttribute("href");
        var linkParts = linkUrl.split('/');
        var linkFilename = linkParts.pop();

        // Handle the case where the link URL ends with "/" and the filename is empty
        if (linkFilename === "") {
            linkFilename = "index.html";
        }

        if (currentPageFilename === linkFilename) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    });
}
