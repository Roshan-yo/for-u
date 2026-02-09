const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const questionSection = document.querySelector('#question-section');
const successSection = document.querySelector('#success-section');

// Make the No button move
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// Show success when Yes is clicked
yesBtn.addEventListener('click', () => {
    questionSection.style.display = 'none';
    successSection.style.display = 'block';
});
