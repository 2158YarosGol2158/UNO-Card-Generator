// v2.1
const ASSETS = {
  backgrounds: [
    { id: 'black', name: 'Black', path: './assets/FIRST_LEVEL/UNO_BLACK.png' },
    { id: 'blue', name: 'Blue', path: './assets/FIRST_LEVEL/UNO_BLUE.png' },
    { id: 'green', name: 'Green', path: './assets/FIRST_LEVEL/UNO_GREEN.png' },
    { id: 'red', name: 'Red', path: './assets/FIRST_LEVEL/UNO_RED.png' },
    { id: 'wild', name: 'Wild', path: './assets/FIRST_LEVEL/UNO_WILD.png' },
    { id: 'yellow', name: 'Yellow', path: './assets/FIRST_LEVEL/UNO_YELLOW.png' },
    { id: 'premium', name: 'Premium', path: './assets/FIRST_LEVEL/UNO_PREMIUM.png' }
  ],
  overlays: [
    { id: '4color', name: '4 Color Corner', path: './assets/SECOND_LEVEL/UNO_4COLOR.png' },
    { id: 'n0', name: 'Number 0', path: './assets/SECOND_LEVEL/UNO_NUMBER_0.png' },
    { id: 'n1', name: 'Number 1', path: './assets/SECOND_LEVEL/UNO_NUMBER_1.png' },
    { id: 'n2', name: 'Number 2', path: './assets/SECOND_LEVEL/UNO_NUMBER_2.png' },
    { id: 'n3', name: 'Number 3', path: './assets/SECOND_LEVEL/UNO_NUMBER_3.png' },
    { id: 'n4', name: 'Number 4', path: './assets/SECOND_LEVEL/UNO_NUMBER_4.png' },
    { id: 'n5', name: 'Number 5', path: './assets/SECOND_LEVEL/UNO_NUMBER_5.png' },
    { id: 'n6', name: 'Number 6', path: './assets/SECOND_LEVEL/UNO_NUMBER_6.png' },
    { id: 'n7', name: 'Number 7', path: './assets/SECOND_LEVEL/UNO_NUMBER_7.png' },
    { id: 'n8', name: 'Number 8', path: './assets/SECOND_LEVEL/UNO_NUMBER_8.png' },
    { id: 'n9', name: 'Number 9', path: './assets/SECOND_LEVEL/UNO_NUMBER_9.png' },
    { id: 'n+2', name: 'Number +2', path: './assets/SECOND_LEVEL/UNO_NUMBER_+2.png' },
    { id: 'n+4', name: 'Number +4', path: './assets/SECOND_LEVEL/UNO_NUMBER_+4.png' },
    { id: 'skip', name: 'Skip', path: './assets/SECOND_LEVEL/UNO_SKIP.png' },
    { id: 'reverse', name: 'Reverse', path: './assets/SECOND_LEVEL/UNO_REVERSE.png' },
    { id: '2skips', name: '2 Skips', path: './assets/SECOND_LEVEL/UNO_2SKIPS.png' },
    { id: '2cubes', name: '2 Cubes', path: './assets/SECOND_LEVEL/UNO_2CUBES.png' },
    { id: 'aim', name: 'Aim',  path: './assets/SECOND_LEVEL/UNO_AIM.png' },
  ],
  centers: [
    { id: '2cards', name: '+2 Cards', path: './assets/THIRD_LEVEL/UNO_2CARDS.png' },
    { id: 'n0', name: 'Number 0', path: './assets/THIRD_LEVEL/UNO_NUMBER_0.png' },
    { id: 'n1', name: 'Number 1', path: './assets/THIRD_LEVEL/UNO_NUMBER_1.png' },
    { id: 'n2', name: 'Number 2', path: './assets/THIRD_LEVEL/UNO_NUMBER_2.png' },
    { id: 'n3', name: 'Number 3', path: './assets/THIRD_LEVEL/UNO_NUMBER_3.png' },
    { id: 'n4', name: 'Number 4', path: './assets/THIRD_LEVEL/UNO_NUMBER_4.png' },
    { id: 'n5', name: 'Number 5', path: './assets/THIRD_LEVEL/UNO_NUMBER_5.png' },
    { id: 'n6', name: 'Number 6', path: './assets/THIRD_LEVEL/UNO_NUMBER_6.png' },
    { id: 'n7', name: 'Number 7', path: './assets/THIRD_LEVEL/UNO_NUMBER_7.png' },
    { id: 'n8', name: 'Number 8', path: './assets/THIRD_LEVEL/UNO_NUMBER_8.png' },
    { id: 'n9', name: 'Number 9', path: './assets/THIRD_LEVEL/UNO_NUMBER_9.png' },
    { id: '4cards', name: '4 Cards', path: './assets/THIRD_LEVEL/UNO_4CARDS.png' },
    { id: 'skip', name: 'Skip', path: './assets/THIRD_LEVEL/UNO_SKIP.png' },
    { id: 'reverse', name: 'Reverse', path: './assets/THIRD_LEVEL/UNO_REVERSE.png' },
    { id: '2cubes', name: '2 Cubes', path: './assets/THIRD_LEVEL/UNO_2CUBES.png' },
    { id: '2skips', name: '2 Skips', path: './assets/THIRD_LEVEL/UNO_2SKIPS.png' },
    { id: 'aim', name: 'Aim',  path: './assets/THIRD_LEVEL/UNO_AIM.png' },
    { id: 'n+4', name: '+4 Cards',  path: './assets/THIRD_LEVEL/UNO_NUMBER_+4.png' },
    { id: 'color', name: 'Color Change',  path: './assets/THIRD_LEVEL/UNO_COLOR_CHANGE.png' },
    { id: 'uno', name: 'UNO',  path: './assets/THIRD_LEVEL/UNO_UNO.png' },
    { id: 'w4cards', name: 'White 4 Cards', path: './assets/THIRD_LEVEL/UNO_WHITE_4CARDS.png' },
  ]
};

let state = {
    selectedBg: ASSETS.backgrounds[0],
    selectedOverlay: null,
    selectedCenter: null,
    deck: JSON.parse(localStorage.getItem('uno_deck')) || []
};

const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d');
const bgGrid = document.getElementById('bgGrid');
const overlayGrid = document.getElementById('overlayGrid');
const centerGrid = document.getElementById('centerGrid');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const toast = document.getElementById('toast');
const deckContainer = document.getElementById('deckContainer');
const deckStack = document.getElementById('deckStack');
const deckCount = document.getElementById('deckCount');
const deckModal = document.getElementById('deckModal');
const deckList = document.getElementById('deckList');
const closeModal = document.getElementById('closeModal');

function init() {
    loadStateFromUrl();
    renderAssetGrids();
    updateCanvas();
    setupEventListeners();
    updateDeckUI();
}

function saveDeck() {
    localStorage.setItem('uno_deck', JSON.stringify(state.deck));
    updateDeckUI();
}

function updateDeckUI() {
    const totalCards = state.deck.reduce((sum, item) => sum + item.quantity, 0);
    deckCount.textContent = totalCards;
    
    deckStack.innerHTML = '';
    const visualCards = Math.min(5, totalCards);
    for (let i = 0; i < visualCards; i++) {
        const img = document.createElement('img');
        img.src = './assets/UNO_BACK_SIDE.png';
        img.style.transform = `translateY(-${i * 4}px) translateX(${i * 2}px)`;
        img.style.zIndex = i;
        deckStack.appendChild(img);
    }
}

function loadStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const bgId = params.get('bg');
    const ovId = params.get('ov');
    const ctId = params.get('ct');

    if (bgId) state.selectedBg = ASSETS.backgrounds.find(b => b.id === bgId) || ASSETS.backgrounds[0];
    if (ovId) state.selectedOverlay = ASSETS.overlays.find(o => o.id === ovId) || null;
    if (ctId) state.selectedCenter = ASSETS.centers.find(c => c.id === ctId) || null;
}

function updateUrl() {
    const params = new URLSearchParams();
    params.set('bg', state.selectedBg.id);
    if (state.selectedOverlay) params.set('ov', state.selectedOverlay.id);
    if (state.selectedCenter) params.set('ct', state.selectedCenter.id);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
}

function renderAssetGrids() {
    bgGrid.innerHTML = ASSETS.backgrounds.map(bg => `
        <button class="asset-item ${state.selectedBg.id === bg.id ? 'active' : ''}" data-type="bg" data-id="${bg.id}">
            <img src="${bg.path}" alt="${bg.name}" />
            <span>${bg.name}</span>
        </button>
    `).join('');

    overlayGrid.innerHTML = `
        <button class="asset-item ${!state.selectedOverlay ? 'active' : ''}" data-type="ov" data-id="none">
            <div class="empty-slot">None</div>
            <span>None</span>
        </button>
    ` + ASSETS.overlays.map(ov => `
        <button class="asset-item ${state.selectedOverlay?.id === ov.id ? 'active' : ''}" data-type="ov" data-id="${ov.id}">
            <img src="${ov.path}" alt="${ov.name}" />
            <span>${ov.name}</span>
        </button>
    `).join('');

    centerGrid.innerHTML = `
        <button class="asset-item ${!state.selectedCenter ? 'active' : ''}" data-type="ct" data-id="none">
            <div class="empty-slot">None</div>
            <span>None</span>
        </button>
    ` + ASSETS.centers.map(ct => `
        <button class="asset-item ${state.selectedCenter?.id === ct.id ? 'active' : ''}" data-type="ct" data-id="${ct.id}">
            <img src="${ct.path}" alt="${ct.name}" />
            <span>${ct.name}</span>
        </button>
    `).join('');
}

function updateCanvas() {
    const bgImg = new Image();
    bgImg.src = state.selectedBg.path;
    bgImg.onload = () => {
        canvas.width = bgImg.width;
        canvas.height = bgImg.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImg, 0, 0);

        if (state.selectedOverlay) {
            const overlayImg = new Image();
            overlayImg.src = state.selectedOverlay.path;
            overlayImg.onload = () => {
                ctx.drawImage(overlayImg, 0, 0);
                drawCenter(ctx, canvas.width, canvas.height, state.selectedCenter);
            };
        } else {
            drawCenter(ctx, canvas.width, canvas.height, state.selectedCenter);
        }
    };
}

function drawCenter(targetCtx, width, height, centerAsset) {
    if (!centerAsset) return;
    const centerImg = new Image();
    centerImg.src = centerAsset.path;
    centerImg.onload = () => {
        // Adding a 0.85 scale to the main card center for better aesthetics
        const scale = 0.85;
        const w = centerImg.width * scale;
        const h = centerImg.height * scale;
        const x = (width - w) / 2;
        const y = (height - h) / 2;
        targetCtx.drawImage(centerImg, x, y, w, h);
    };
}

function addToDeck() {
    const cardId = [state.selectedBg.id, state.selectedOverlay?.id || 'none', state.selectedCenter?.id || 'none'].join('|');
    const existingIndex = state.deck.findIndex(item => item.id === cardId);
    
    if (existingIndex > -1) {
        state.deck[existingIndex].quantity++;
    } else {
        state.deck.push({
            id: cardId,
            bg: state.selectedBg,
            ov: state.selectedOverlay,
            ct: state.selectedCenter,
            quantity: 1
        });
    }
    saveDeck();
}

function renderDeckList() {
    deckList.innerHTML = '';
    if (state.deck.length === 0) {
        deckList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #64748b;">Your deck is empty. Drag some cards here!</p>';
        return;
    }

    state.deck.forEach((item, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'deck-item';
        cardEl.innerHTML = `
            <div class="deck-item-preview">
                <canvas width="120" height="180" id="deck-canvas-${index}"></canvas>
            </div>
            <div class="deck-item-controls">
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromDeck(${index})">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </div>
        `;
        deckList.appendChild(cardEl);
        
        // Render thumbnail
        const tCanvas = document.getElementById(`deck-canvas-${index}`);
        const tCtx = tCanvas.getContext('2d');
        const bgImg = new Image();
        bgImg.src = item.bg.path;
        bgImg.onload = () => {
            tCtx.drawImage(bgImg, 0, 0, 120, 180);
            if (item.ov) {
                const ovImg = new Image();
                ovImg.src = item.ov.path;
                ovImg.onload = () => {
                    tCtx.drawImage(ovImg, 0, 0, 120, 180);
                    drawThumbnailCenter(tCtx, item.ct);
                };
            } else {
                drawThumbnailCenter(tCtx, item.ct);
            }
        };
    });
}

function drawThumbnailCenter(tCtx, centerAsset) {
    if (!centerAsset) return;
    const ctImg = new Image();
    ctImg.src = centerAsset.path;
    ctImg.onload = () => {
        // Thumbnail is 120x180. Original background is ~400-600.
        // Reducing scale further for the center image to ensure it fits better
        const scale = 0.1;
        const w = ctImg.width * scale;
        const h = ctImg.height * scale;
        tCtx.drawImage(ctImg, (120 - w) / 2, (180 - h) / 2, w, h);
    };
}

window.updateQty = (index, delta) => {
    state.deck[index].quantity += delta;
    if (state.deck[index].quantity < 1) state.deck[index].quantity = 1;
    saveDeck();
    renderDeckList();
};

window.removeFromDeck = (index) => {
    state.deck.splice(index, 1);
    saveDeck();
    renderDeckList();
};

function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.asset-item');
        if (!item) return;
        const type = item.dataset.type;
        const id = item.dataset.id;
        if (type === 'bg') state.selectedBg = ASSETS.backgrounds.find(b => b.id === id);
        else if (type === 'ov') state.selectedOverlay = id === 'none' ? null : ASSETS.overlays.find(o => o.id === id);
        else if (type === 'ct') state.selectedCenter = id === 'none' ? null : ASSETS.centers.find(c => c.id === id);
        renderAssetGrids();
        updateCanvas();
        updateUrl();
    });

    downloadBtn.addEventListener('click', () => {
        try {
            const link = document.createElement('a');
            const bgName = state.selectedBg.id;
            const ctName = state.selectedCenter ? state.selectedCenter.id : 'empty';
            link.download = `uno_card_${bgName}_${ctName}.png`;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            alert('Security restriction: Cannot download from local file. Try hosting on GitHub.');
        }
    });

    shareBtn.addEventListener('click', async () => {
        try {
            await navigator.share({ title: 'UNO Card', url: window.location.href });
        } catch (err) {
            navigator.clipboard.writeText(window.location.href);
            toast.style.display = 'block';
            setTimeout(() => toast.style.display = 'none', 2000);
        }
    });

    // Drag and Drop
    canvas.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'uno-card');
        canvas.style.opacity = '0.5';
    });
    canvas.addEventListener('dragend', () => canvas.style.opacity = '1');

    deckContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        deckContainer.classList.add('drag-over');
    });
    deckContainer.addEventListener('dragleave', () => deckContainer.classList.remove('drag-over'));
    deckContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        deckContainer.classList.remove('drag-over');
        addToDeck();
    });

    // Modal
    deckContainer.addEventListener('click', () => {
        deckModal.style.display = 'flex';
        renderDeckList();
    });
    closeModal.addEventListener('click', () => deckModal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === deckModal) deckModal.style.display = 'none';
    });
}

init();
