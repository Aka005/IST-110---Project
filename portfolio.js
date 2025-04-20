document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {

    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));


    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
    button.classList.add('active');
  });
});
