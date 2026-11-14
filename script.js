const HERO_POOL = {
    tank: [
        { text: "d.mon", image: "img/d_mon.webp", tier: 12 },
        { text: "d.va", image: "img/d_va.webp", tier: 12 },
        { text: "mommy", image: "img/domina.webp", tier: 4 },
        { text: "doomfist", image: "img/doomfist.webp", tier: 1 },
        { text: "hazard", image: "img/hazard.webp", tier: 14 },
        { text: "junker queen", image: "img/junker_queen.webp", tier: 4 },
        { text: "mauga", image: "img/mauga.webp", tier: 13 },
        { text: "king von", image: "img/orisa.webp", tier: 8 },
        { text: "ramattra", image: "img/ramattra.webp", tier: 4 },
        { text: "reinhardt", image: "img/reinhardt.webp", tier: 11 },
        { text: "roadhog", image: "img/roadhog.webp", tier: 13 },
        { text: "sigma", image: "img/sigma.webp", tier: 1 },
        { text: "winton", image: "img/winston.webp", tier: 15 },
        { text: "hammond", image: "img/wrecking_ball.webp", tier: 2 },
        { text: "zarya", image: "img/zarya.webp", tier: 1 }
    ],
    damage: [
        { text: "anran", image: "img/anran.webp", tier: 1 },
        { text: "ashe", image: "img/ashe.webp", tier: 4 },
        { text: "bastion", image: "img/bastion.webp", tier: 13 },
        { text: "cassidy", image: "img/cassidy.webp", tier: 1 },
        { text: "echo <small>echo <small>echo <small>echo</small>", image: "img/echo.webp", tier: 4 },
        { text: "emre", image: "img/emre.webp", tier: 4 },
        { text: "freja", image: "img/freja.webp", tier: 4 },
        { text: "genguch", image: "img/genji.webp", tier: 4 },
        { text: "hanzo", image: "img/hanzo.webp", tier: 1 },
        { text: "junkrat", image: "img/junkrat.webp", tier: 1 },
        { text: "cwel", image: "img/mei.webp", tier: 2 },
        { text: "netanyahu", image: "img/pharah.webp", tier: 16 },
        { text: "reaper", image: "img/reaper.webp", tier: 1 },
        { text: "shion", image: "img/shion.webp", tier: 4 },
        { text: "sierra", image: "img/sierra.webp", tier: 2 },
        { text: "sojourn", image: "img/sojourn.webp", tier: 1 },
        { text: "soldier: 67", image: "img/soldier_76.webp", tier: 1 },
        { text: "symmetra", image: "img/symmetra.webp", tier: 9 },
        { text: "torbjorn", image: "img/torbjorn.webp", tier: 13 },
        { text: "mega cwel", image: "img/tracer.webp", tier: 2 },
        { text: "vendetta", image: "img/vendetta.webp", tier: 1 },
        { text: "venture", image: "img/venture.webp", tier: 7 },
        { text: "widowmaker", image: "img/widowmaker.webp", tier: 3 }
    ],
    support: [
        { text: "ana", image: "img/ana.webp", tier: 4 },
        { text: "baptiste", image: "img/baptiste.webp", tier: 3 },
        { text: "brigitte", image: "img/brigitte.webp", tier: 1 },
        { text: "doctrine", image: "img/doctrine.webp", tier: 4 },
        { text: "illari", image: "img/illari.webp", tier: 1 },
        { text: "fika", image: "img/jetpack_cat.webp", tier: 5 },
        { text: "glorbit", image: "img/juno.webp", tier: 10 },
        { text: "kiriko", image: "img/kiriko.webp", tier: 1 },
        { text: "wifeleaver", image: "img/lifeweaver.webp", tier: 1 },
        { text: "lucio", image: "img/lucio.webp", tier: 3 },
        { text: "mercy", image: "img/mercy.webp", tier: 3 },
        { text: "mizuki", image: "img/mizuki.webp", tier: 4 },
        { text: "moira", image: "img/moira.webp", tier: 3 },
        { text: "sombra", image: "img/sombra.webp", tier: 1 },
        { text: "wuyang", image: "img/wuyang.webp", tier: 4 },
        { text: "zenyatta", image: "img/zenyatta.webp", tier: 6 }
    ]
};

// === add new sounds here ===
const SOUND_EFFECTS = {
    click: "",
    tier1: "",
    tier2: "snd/fart.ogg",
    tier3: "snd/boo_womp.ogg",
    tier4: "snd/wow.ogg",
    tier5: "snd/meow_meow_meow.ogg",
    tier6: "snd/experience_my_balls.ogg",
    tier7: "snd/isolation.ogg",
    tier8: "snd/king_von.ogg",
    tier9: "snd/enemy_shield_generator_destroyed.ogg",
    tier10: "snd/witajcie_na_glorbicie.ogg",
    tier11: "snd/hammer_down.ogg",
    tier12: 'snd/hey_gamers.ogg',
    tier13: 'snd/masz_bana.ogg',
    tier14: 'snd/scotland_forever.ogg',
    tier15: 'snd/winton.ogg',
    tier16: 'snd/idf.ogg'
};

let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playTickSound() {
    if (SOUND_EFFECTS.click) {
        new Audio(SOUND_EFFECTS.click).play().catch(() => { });
        return;
    }
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.03);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.03);
}

function playtierSound(tier) {
    const customKey = `tier${tier}`;
    if (SOUND_EFFECTS[customKey]) {
        new Audio(SOUND_EFFECTS[customKey]).play().catch(() => { });
        return;
    }
    if (!audioCtx) return;

    const freqs = {
        1: [523, 659, 783],
        2: [440, 554],
        3: [587, 739, 880, 1174],
        4: [523, 659, 783, 1046, 1318],
        5: [523, 659, 783, 1046, 1318],
        6: [523, 659, 783],
        7: [523, 659, 783],
        8: [523, 659, 783],
        9: [523, 659, 783],
        10: [523, 659, 783],
        11: [523, 659, 783],
        12: [523, 659, 783],
        13: [523, 659, 783],
        14: [523, 659, 783],
        15: [523, 659, 783],
        16: [523, 659, 728]
    }[tier] || [440];

    freqs.forEach((f, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = tier === 4 ? 'sawtooth' : 'sine';
        osc.frequency.setValueAtTime(f, audioCtx.currentTime + index * 0.08);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + index * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + index * 0.08);
        osc.stop(audioCtx.currentTime + index * 0.08 + 0.4);
    });
}

const reelTrack = document.getElementById('reel-track');
const resultBanner = document.getElementById('result-banner');
const spinnerViewport = document.getElementById('spinner-viewport');
let isRolling = false;

function createCardElement(hero) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-tier', hero.tier);
    card.innerHTML = `
      <img src="${hero.image}" alt="${hero.text}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\'><rect width=\'40\' height=\'40\' fill=\'%23555\'/></svg>'">
      <div class="card-title">${hero.text}</div>
    `;
    return card;
}

function spin(pool, onComplete) {
    if (isRolling) return;
    initAudio();
    isRolling = true;
    setButtonsDisabled(true);

    const winner = pool[Math.floor(Math.random() * pool.length)];

    const WINNER_INDEX = 40;
    const totalCards = 100;
    reelTrack.innerHTML = '';

    const generatedList = [];
    for (let i = 0; i < totalCards; i++) {
        if (i === WINNER_INDEX) {
            generatedList.push(winner);
        } else {
            generatedList.push(pool[Math.floor(Math.random() * pool.length)]);
        }
    }

    generatedList.forEach(hero => {
        reelTrack.appendChild(createCardElement(hero));
    });

    reelTrack.style.transition = 'none';
    reelTrack.style.transform = 'translateX(0px)';

    const cardWidth = 120;
    const cardGap = 10;
    const itemPitch = cardWidth + cardGap;
    const viewportWidth = spinnerViewport.offsetWidth;

    const randomJitter = Math.floor(Math.random() * (cardWidth - 20)) + 10;
    const targetOffset = (WINNER_INDEX * itemPitch) - (viewportWidth / 2) + (cardWidth / 2) + randomJitter;

    const durationSec = 8;
    requestAnimationFrame(() => {
        reelTrack.style.transition = `transform ${durationSec}s cubic-bezier(0.12, 0.8, 0.15, 1)`;
        reelTrack.style.transform = `translateX(-${targetOffset}px)`;
    });

    let lastTickIndex = -1;
    const startTime = performance.now();

    function trackTicks(now) {
        const elapsed = (now - startTime) / 1000;
        const matrix = new WebKitCSSMatrix(window.getComputedStyle(reelTrack).transform);
        const currentX = Math.abs(matrix.m41);

        const currentTickIndex = Math.floor((currentX + (viewportWidth / 2)) / itemPitch);
        if (currentTickIndex !== lastTickIndex && currentTickIndex >= 0) {
            playTickSound();
            lastTickIndex = currentTickIndex;
        }

        if (elapsed < durationSec) {
            requestAnimationFrame(trackTicks);
        }
    }
    requestAnimationFrame(trackTicks);

    setTimeout(() => {
        isRolling = false;
        setButtonsDisabled(false);

        const winnerCard = reelTrack.children[WINNER_INDEX];
        winnerCard.classList.add(`win-tier-${winner.tier}`);

        playtierSound(winner.tier);
        resultBanner.innerHTML = `Rolled: <span style="color:var(--tier-${winner.tier})">${winner.text}</span>`;
        if (onComplete) onComplete(winner);

        if (winner.tier == 16) {
            const overlay = document.createElement("div");
            Object.assign(overlay.style, {
                position: "fixed",
                inset: "0",
                backgroundImage: 'url("img/bibi.gif")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: "0",
                transition: "opacity 1000ms ease",
                pointerEvents: "none",
                zIndex: "-1"
            });

            document.body.appendChild(overlay);

            // two requestAnimations since one is for the fade-in and one is for the gif
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    overlay.style.opacity = "1";
                    document.querySelector("#players-table").style.opacity = "0.4";
                });
            });

            setTimeout(() => {
                document.body.style.backgroundColor = "#121318";
                overlay.style.opacity = 0;
                document.querySelector("#players-table").style.opacity = "1.0";

                setTimeout(() => overlay.remove(), 2600);
            }, 2600)
        }
    }, durationSec * 1000 + 100);

}

let playerCount = 4;
let playerNames = ["dipshit 1", "dipshit 2", "dipshit 3", "dipshit 4", "dipshit 5", "dipshit 6"];
let playerState = [];

function initPlayerState() {
    playerState = Array.from({ length: playerCount }, () => ({
        tank: null,
        damage: null,
        support: null
    }));
    renderTable();
}

function updatePlayerCount(val) {
    playerCount = parseInt(val, 10);
    initPlayerState();
}

function renderTable() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    playerState.forEach((player, pIdx) => {
        const tr = document.createElement('tr');

        let html = `<td><input type="text" class="player-name" value="${playerNames[pIdx]}" oninput="playerNames[${pIdx}] = this.value"></input></td>`;
        ['tank', 'damage', 'support'].forEach(role => {
            const item = player[role];
            if (item) {
                html += `
            <td>
              <div class="cell-card">
                <span class="badge" style="background:var(--tier-${item.tier})"></span>
                <img src="${item.image}" alt="">
                <span>${item.text}</span>
                <button onclick="rollCell(${pIdx}, '${role}')" title="reroll ${role}">reroll</button>
              </div>
            </td>
          `;
            } else {
                html += `
            <td>
              <button onclick="rollCell(${pIdx}, '${role}')">roll ${role}</button>
            </td>
          `;
            }
        });

        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
}

function rollCell(pIdx, role) {
    spin(HERO_POOL[role], (winner) => {
        playerState[pIdx][role] = winner;
        renderTable();
    });
}

function rollAll() {
    let tasks = [];
    for (let p = 0; p < playerCount; p++) {
        ['tank', 'damage', 'support'].forEach(role => {
            tasks.push({ pIdx: p, role });
        });
    }

    function step(index) {
        if (index >= tasks.length) return;
        const { pIdx, role } = tasks[index];
        rollCell(pIdx, role);
        setTimeout(() => {
            const checkInterval = setInterval(() => {
                if (!isRolling) {
                    clearInterval(checkInterval);
                    step(index + 1);
                }
            }, 100);
        }, 4200);
    }

    step(0);
}

function setButtonsDisabled(disabled) {
    document.querySelectorAll('button, select').forEach(el => el.disabled = disabled);
}

initPlayerState();