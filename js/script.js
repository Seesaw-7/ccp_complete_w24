document.getElementById('main').addEventListener('click', function() {
    const colors = ['#DAC1BB', '#F8C8BB', '#F3CCD7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
});
