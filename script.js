const noBtn = document.getElementById('noBtn');

const moveButton = () => {
    // On passe en position fixe pour qu'il puisse aller n'importe où sur l'écran
    noBtn.style.position = 'fixed';
    
    // Calcul de la position aléatoire
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

// Événement pour ordinateur (souris) et mobile (tactile)
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Empêche le clic par erreur sur mobile
    moveButton();
});

function celebrate() {
    const card = document.getElementById('mainCard');
    card.innerHTML = `
        <div class="header-text" style="font-size: 3rem;">YAY ! 💖</div>
        <div style="font-size: 80px; margin: 20px;">🌹</div>
        <div class="main-question">Je t'aime Quentin !</div>
        <p>Tu viens de rendre quelqu'un très heureux !</p>
    `;

    // Pluie de coeurs
    for(let i=0; i<100; i++) {
        const h = document.createElement('div');
        h.className = 'heart-fall';
        h.innerHTML = '❤️';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.fontSize = (Math.random() * 20 + 15) + 'px';
        h.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(h);
    }
}
