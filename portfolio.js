
function openTab(tabId) {
 
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

 
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));


    document.getElementById(tabId).classList.add('active');


    const activeButton = Array.from(buttons).find(btn => btn.textContent.toLowerCase().includes(tabId));
    if (activeButton) activeButton.classList.add('active');
}
