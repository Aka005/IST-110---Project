function openTab(tabId, file = null) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Load external file if it's the first time opening that tab
    if (file && selectedTab.innerHTML.trim() === '') {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                selectedTab.innerHTML = data;
            })
            .catch(error => {
                selectedTab.innerHTML = "<p>Error loading content.</p>";
                console.error(`Error loading ${file}:`, error);
            });
    }

    // Activate the clicked button
    const index = ['about', 'assignments', 'projects', 'discussions', 'skills'].indexOf(tabId);
    if (buttons[index]) {
        buttons[index].classList.add('active');
    }
}
