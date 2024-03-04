function playMusic() {
    let audioElement = document.getElementById('backgroundMusic');
    audioElement.volume = 0.6; 
    audioElement.loop = true; 
    audioElement.play(); 
}

function moveNoButton() {
    let noButton = document.getElementById('noBtn');

    const viewPortWidth = Math.min(window.innerWidth, 1920) - 500; 
    const viewPortHeight = Math.min(window.innerHeight, 1080) - 500; 

    const maxX = viewPortWidth - noButton.offsetWidth;
    const maxY = viewPortHeight - noButton.offsetHeight;
    const minX = 200;
    const minY = 200;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

document.getElementById('noBtn').addEventListener('mouseover', function() {
    moveNoButton();
    playMusic();
    const dynamicImg = document.getElementById('dynamicImg');
    dynamicImg.style.transform = 'scale(1.5)';;
});

document.getElementById('noBtn').addEventListener('mouseout', function() {
    document.getElementById('dynamicImg').style.transform = 'scale(1)';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>Wow, you don\'t want to be friends with me, Kelly? Ok.</p>';
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.alignItems = 'center';
    contentDiv.style.justifyContent = 'center';
    contentDiv.style.height = '100vh';
});
