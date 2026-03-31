const ASSETS = {
  default: {
    name: 'Default',
    back: './assets/default/UNO_BACK_SIDE.png',
    backgrounds: [
      { id: 'black', name: 'Black', path: './assets/default/backgrounds/UNO_BLACK.png' },
      { id: 'blue', name: 'Blue', path: './assets/default/backgrounds/UNO_BLUE.png' },
      { id: 'green', name: 'Green', path: './assets/default/backgrounds/UNO_GREEN.png' },
      { id: 'red', name: 'Red', path: './assets/default/backgrounds/UNO_RED.png' },
      { id: 'wild', name: 'Wild', path: './assets/default/backgrounds/UNO_WILD.png' },
      { id: 'yellow', name: 'Yellow', path: './assets/default/backgrounds/UNO_YELLOW.png' },
      { id: 'premium', name: 'Premium', path: './assets/default/backgrounds/UNO_PREMIUM.png' }
    ],
    overlays: [
      { id: '4color', name: '4 Color Corner', path: './assets/default/overlays/UNO_4COLOR.png' },
      { id: 'n0', name: 'Number 0', path: './assets/default/overlays/UNO_NUMBER_0.png' },
      { id: 'n1', name: 'Number 1', path: './assets/default/overlays/UNO_NUMBER_1.png' },
      { id: 'n2', name: 'Number 2', path: './assets/default/overlays/UNO_NUMBER_2.png' },
      { id: 'n3', name: 'Number 3', path: './assets/default/overlays/UNO_NUMBER_3.png' },
      { id: 'n4', name: 'Number 4', path: './assets/default/overlays/UNO_NUMBER_4.png' },
      { id: 'n5', name: 'Number 5', path: './assets/default/overlays/UNO_NUMBER_5.png' },
      { id: 'n6', name: 'Number 6', path: './assets/default/overlays/UNO_NUMBER_6.png' },
      { id: 'n7', name: 'Number 7', path: './assets/default/overlays/UNO_NUMBER_7.png' },
      { id: 'n8', name: 'Number 8', path: './assets/default/overlays/UNO_NUMBER_8.png' },
      { id: 'n9', name: 'Number 9', path: './assets/default/overlays/UNO_NUMBER_9.png' },
      { id: 'n+2', name: 'Number +2', path: './assets/default/overlays/UNO_NUMBER_+2.png' },
      { id: 'n+4', name: 'Number +4', path: './assets/default/overlays/UNO_NUMBER_+4.png' },
      { id: 'skip', name: 'Skip', path: './assets/default/overlays/UNO_SKIP.png' },
      { id: 'reverse', name: 'Reverse', path: './assets/default/overlays/UNO_REVERSE.png' },
      { id: '2skips', name: '2 Skips', path: './assets/default/overlays/UNO_2SKIPS.png' },
      { id: '2cubes', name: '2 Cubes', path: './assets/default/overlays/UNO_2CUBES.png' },
      { id: 'aim', name: 'Aim',  path: './assets/default/overlays/UNO_AIM.png' },
    ],
    centers: [
      { id: '2cards', name: '+2 Cards', path: './assets/default/centers/UNO_2CARDS.png' },
      { id: 'n0', name: 'Number 0', path: './assets/default/centers/UNO_NUMBER_0.png' },
      { id: 'n1', name: 'Number 1', path: './assets/default/centers/UNO_NUMBER_1.png' },
      { id: 'n2', name: 'Number 2', path: './assets/default/centers/UNO_NUMBER_2.png' },
      { id: 'n3', name: 'Number 3', path: './assets/default/centers/UNO_NUMBER_3.png' },
      { id: 'n4', name: 'Number 4', path: './assets/default/centers/UNO_NUMBER_4.png' },
      { id: 'n5', name: 'Number 5', path: './assets/default/centers/UNO_NUMBER_5.png' },
      { id: 'n6', name: 'Number 6', path: './assets/default/centers/UNO_NUMBER_6.png' },
      { id: 'n7', name: 'Number 7', path: './assets/default/centers/UNO_NUMBER_7.png' },
      { id: 'n8', name: 'Number 8', path: './assets/default/centers/UNO_NUMBER_8.png' },
      { id: 'n9', name: 'Number 9', path: './assets/default/centers/UNO_NUMBER_9.png' },
      { id: '4cards', name: '4 Cards', path: './assets/default/centers/UNO_4CARDS.png' },
      { id: 'skip', name: 'Skip', path: './assets/default/centers/UNO_SKIP.png' },
      { id: 'reverse', name: 'Reverse', path: './assets/default/centers/UNO_REVERSE.png' },
      { id: '2cubes', name: '2 Cubes', path: './assets/default/centers/UNO_2CUBES.png' },
      { id: '2skips', name: '2 Skips', path: './assets/default/centers/UNO_2SKIPS.png' },
      { id: 'aim', name: 'Aim',  path: './assets/default/centers/UNO_AIM.png' },
      { id: 'n+4', name: '+4 Cards',  path: './assets/default/centers/UNO_NUMBER_+4.png' },
      { id: 'color', name: 'Color Change',  path: './assets/default/centers/UNO_COLOR_CHANGE.png' },
      { id: 'uno', name: 'UNO',  path: './assets/default/centers/UNO_UNO.png' },
      { id: 'w4cards', name: 'White 4 Cards', path: './assets/default/centers/UNO_WHITE_4CARDS.png' },
    ]
  }
};

let state = {
    selectedStyle: 'default',
    selectedBg: ASSETS.default.backgrounds[0],
    selectedOverlay: null,
    selectedCenter: null,
    deck: JSON.parse(localStorage.getItem('uno_deck')) || []
};

const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d');
const styleGrid = document.getElementById('styleGrid');
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
const exportPdfBtn = document.getElementById('exportPdfBtn');

function init() {
    loadStateFromUrl();
    renderStyleGrid();
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
    const styleBack = ASSETS[state.selectedStyle].back;
    for (let i = 0; i < visualCards; i++) {
        const img = document.createElement('img');
        img.src = styleBack;
        img.style.transform = `translateY(-${i * 4}px) translateX(${i * 2}px)`;
        img.style.zIndex = i;
        deckStack.appendChild(img);
    }
}

function loadStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const stId = params.get('st');
    const bgId = params.get('bg');
    const ovId = params.get('ov');
    const ctId = params.get('ct');

    if (stId && ASSETS[stId]) state.selectedStyle = stId;
    
    const currentAssets = ASSETS[state.selectedStyle];

    if (bgId) state.selectedBg = currentAssets.backgrounds.find(b => b.id === bgId) || currentAssets.backgrounds[0];
    else state.selectedBg = currentAssets.backgrounds[0];

    if (ovId) state.selectedOverlay = currentAssets.overlays.find(o => o.id === ovId) || null;
    if (ctId) state.selectedCenter = currentAssets.centers.find(c => c.id === ctId) || null;
}

function updateUrl() {
    const params = new URLSearchParams();
    params.set('st', state.selectedStyle);
    params.set('bg', state.selectedBg.id);
    if (state.selectedOverlay) params.set('ov', state.selectedOverlay.id);
    if (state.selectedCenter) params.set('ct', state.selectedCenter.id);
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
}

function renderStyleGrid() {
    styleGrid.innerHTML = Object.keys(ASSETS).map(stKey => `
        <button class="asset-item ${state.selectedStyle === stKey ? 'active' : ''}" data-type="st" data-id="${stKey}">
            <img src="${ASSETS[stKey].back}" alt="${ASSETS[stKey].name}" style="transform: scale(0.8);" />
            <span>${ASSETS[stKey].name}</span>
        </button>
    `).join('');
}

function renderAssetGrids() {
    const currentAssets = ASSETS[state.selectedStyle];

    bgGrid.innerHTML = currentAssets.backgrounds.map(bg => `
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
    ` + currentAssets.overlays.map(ov => `
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
    ` + currentAssets.centers.map(ct => `
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
    const cardId = [state.selectedStyle, state.selectedBg.id, state.selectedOverlay?.id || 'none', state.selectedCenter?.id || 'none'].join('|');
    const existingIndex = state.deck.findIndex(item => item.id === cardId);
    
    if (existingIndex > -1) {
        state.deck[existingIndex].quantity++;
    } else {
        state.deck.push({
            id: cardId,
            style: state.selectedStyle,
            styleBack: ASSETS[state.selectedStyle].back,
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

async function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210;
    const pageHeight = 297;
    const cardW = 59;
    const cardH = 93;
    const gap = 2;
    const columns = 3;
    const rows = 3;
    const marginX = (pageWidth - (cardW * columns + gap * (columns - 1))) / 2;
    const marginY = (pageHeight - (cardH * rows + gap * (rows - 1))) / 2;

    let currentX = marginX;
    let currentY = marginY;
    let col = 0;
    let row = 0;
    let isFirstPage = true;

    // Show loading state
    const originalText = exportPdfBtn.innerHTML;
    exportPdfBtn.innerText = 'Generating...';
    exportPdfBtn.disabled = true;

    try {
        for (const item of state.deck) {
            const cardImgData = await renderHighResCard(item);
            
            for (let i = 0; i < item.quantity; i++) {
                if (!isFirstPage && col === 0 && row === 0) {
                    doc.addPage();
                }
                isFirstPage = false;

                doc.addImage(cardImgData, 'PNG', currentX, currentY, cardW, cardH);

                col++;
                if (col >= columns) {
                    col = 0;
                    row++;
                    currentX = marginX;
                    currentY += cardH + gap;
                } else {
                    currentX += cardW + gap;
                }

                if (row >= rows) {
                    row = 0;
                    currentY = marginY;
                }
            }
        }
        doc.save('uno_deck_print.pdf');
    } catch (err) {
        console.error(err);
        alert('Error generating PDF. Check console for details.');
    } finally {
        exportPdfBtn.innerHTML = originalText;
        exportPdfBtn.disabled = false;
    }
}

async function renderHighResCard(item) {
    const tempCanvas = document.createElement('canvas');
    const tCtx = tempCanvas.getContext('2d');
    
    // 300 DPI for 59x93mm is ~697x1098px
    tempCanvas.width = 697;
    tempCanvas.height = 1098;

    const bgImg = await loadImage(item.bg.path);
    tCtx.drawImage(bgImg, 0, 0, 697, 1098);

    if (item.ov) {
        const ovImg = await loadImage(item.ov.path);
        tCtx.drawImage(ovImg, 0, 0, 697, 1098);
    }

    if (item.ct) {
        const ctImg = await loadImage(item.ct.path);
        const scale = 0.85;
        const w = ctImg.width * scale * (697 / 400); // Scale relative to original design ratio
        const h = ctImg.height * scale * (1098 / 600);
        
        // Ensure we fit correctly
        const fitScale = Math.min(600 / ctImg.width, 940 / ctImg.height) * 0.85;
        const finalW = ctImg.width * fitScale;
        const finalH = ctImg.height * fitScale;
        
        tCtx.drawImage(ctImg, (697 - finalW) / 2, (1098 - finalH) / 2, finalW, finalH);
    }

    return tempCanvas.toDataURL('image/png');
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.asset-item');
        if (!item) return;
        const type = item.dataset.type;
        const id = item.dataset.id;
        
        const currentAssets = ASSETS[state.selectedStyle];

        if (type === 'st') {
            state.selectedStyle = id;
            // When style changes, try to keep the same asset IDs if they exist in the new style
            const newAssets = ASSETS[state.selectedStyle];
            state.selectedBg = newAssets.backgrounds.find(b => b.id === state.selectedBg.id) || newAssets.backgrounds[0];
            if (state.selectedOverlay) state.selectedOverlay = newAssets.overlays.find(o => o.id === state.selectedOverlay.id) || null;
            if (state.selectedCenter) state.selectedCenter = newAssets.centers.find(c => c.id === state.selectedCenter.id) || null;
            
            renderStyleGrid();
            updateDeckUI(); // Back side might change
        }
        else if (type === 'bg') state.selectedBg = ASSETS[state.selectedStyle].backgrounds.find(b => b.id === id);
        else if (type === 'ov') state.selectedOverlay = id === 'none' ? null : ASSETS[state.selectedStyle].overlays.find(o => o.id === id);
        else if (type === 'ct') state.selectedCenter = id === 'none' ? null : ASSETS[state.selectedStyle].centers.find(c => c.id === id);
        
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
    exportPdfBtn.addEventListener('click', exportToPDF);
    window.addEventListener('click', (e) => {
        if (e.target === deckModal) deckModal.style.display = 'none';
    });
}

init();
