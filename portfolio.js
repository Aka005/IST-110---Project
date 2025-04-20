function openTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Highlight the active tab button
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase().includes(tabId));
    if (activeButton) activeButton.classList.add('active');

    // Load content dynamically if necessary (from separate HTML files)
    if (tabId === 'assignments' && selectedTab.innerHTML.trim() === '') {
        fetch('assignment.html')
            .then(response => response.text())
            .then(data => {
                selectedTab.innerHTML = data;  // Load the content into the tab
                selectedTab.classList.add('active');  // Make sure the tab is visible
            })
            .catch(error => {
                selectedTab.innerHTML = "<p>Error loading content.</p>";
                console.error("Error loading assignment.html:", error);
            });
    } else if (tabId === 'projects' && selectedTab.innerHTML.trim() === '') {
        fetch('project.html')
            .then(response => response.text())
            .then(data => {
                selectedTab.innerHTML = data;
                selectedTab.classList.add('active');
            })
            .catch(error => {
                selectedTab.innerHTML = "<p>Error loading content.</p>";
                console.error("Error loading project.html:", error);
            });
    } else if (tabId === 'discussions' && selectedTab.innerHTML.trim() === '') {
        fetch('discussion.html')
            .then(response => response.text())
            .then(data => {
                selectedTab.innerHTML = data;
                selectedTab.classList.add('active');
            })
            .catch(error => {
                selectedTab.innerHTML = "<p>Error loading content.</p>";
                console.error("Error loading discussion.html:", error);
            });
    } else if (tabId === 'skills' && selectedTab.innerHTML.trim() === '') {
        fetch('skill.html')
            .then(response => response.text())
            .then(data => {
                selectedTab.innerHTML = data;
                selectedTab.classList.add('active');
            })
            .catch(error => {
                selectedTab.innerHTML = "<p>Error loading content.</p>";
                console.error("Error loading skill.html:", error);
            });
    }
}

