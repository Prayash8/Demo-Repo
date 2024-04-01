// You can add JavaScript functionality here if needed
console.log("Script loaded");
// JavaScript for fancy button
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    alert('Button clicked!');
});

// JavaScript for interactive rapper names
const rapperNames = document.querySelectorAll('#rapper-list li');
rapperNames.forEach(function(rapper) {
    rapper.addEventListener('click', function() {
        const rapperName = rapper.textContent;
        alert(`You clicked on ${rapperName}. Redirecting to their YouTube channel...`);
    });
});

