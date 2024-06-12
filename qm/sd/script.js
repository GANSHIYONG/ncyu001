function blinkEyes() {
    const leftEye = document.querySelector('.eye.left');
    const rightEye = document.querySelector('.eye.right');
    leftEye.style.animation = 'blink 2s infinite';
    rightEye.style.animation = 'blink 2s infinite';
}

blinkEyes();