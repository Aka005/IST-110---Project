function openTab(tabId, file = null) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Load external content if file provided and not already loaded
    if (file && selectedTab.innerHTML.trim() === '') {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                selectedTab.innerHTML = data;
            })
            .catch(error => {
                selectedTab.innerHTML = "<p>Error loading content.</p>";
                console.error("Error loading file:", file, error);
            });
    }

    // Highlight active button
    const tabIndex = ['about', 'assignments', 'projects', 'discussions', 'skills'];
    const activeButton = buttons[tabIndex.indexOf(tabId)];
    if (activeButton) activeButton.classList.add('active');
}
