document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const dynamicContent = document.getElementById('dynamicContent');

    toggleButton.addEventListener('click', function() {
        dynamicContent.innerHTML = '';

        const colors = ['#ff0000', '#00ff00', '#0000ff'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        dynamicContent.style.backgroundColor = randomColor;
        dynamicContent.innerText = `Background color changed to ${randomColor}.`;
    });
});

