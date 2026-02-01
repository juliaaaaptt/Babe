const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Fonction pour faire fuir le bouton "Non"
noBtn.addEventListener('mouseover', () => {
    // Calculer des positions aléatoires dans la fenêtre
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Ce qui se passe quand il clique sur "Oui"
function celebrate() {
    document.querySelector('.card').innerHTML = `
        <div class="heart-icon">💖</div>
        <h1>Yay ! ❤️</h1>
        <p class="question">Je savais que tu dirais oui, Quentin !</p>
        <p>Prépare-toi pour le meilleur Valentin de ta vie !</p>
    `;
    
    // Ajoute quelques confettis si tu veux aller plus loin
    confetti();
}

// Petit effet bonus (optionnel)
function confetti() {
    for(let i=0; i<50; i++) {
        const div = document.createElement('div');
        div.innerHTML = '❤️';
        div.style.position = 'fixed';
        div.style.left = Math.random() * 100 + 'vw';
        div.style.top = '-20px';
        div.style.fontSize = Math.random() * 20 + 10 + 'px';
        div.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(div);
    }
}

// Ajout du style pour l'animation des cœurs qui tombent
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to { transform: translateY(105vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);
