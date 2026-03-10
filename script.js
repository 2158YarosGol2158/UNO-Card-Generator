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
    selectedCenter: null
};


const canvas = document.getElementById('cardCanvas');
const ctx = canvas.getContext('2d');
const bgGrid = document.getElementById('bgGrid');
const overlayGrid = document.getElementById('overlayGrid');
const centerGrid = document.getElementById('centerGrid');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const toast = document.getElementById('toast');

function init() {
    loadStateFromUrl();
    renderAssetGrids();
    updateCanvas();
    setupEventListeners();
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
    // Backgrounds
    bgGrid.innerHTML = ASSETS.backgrounds.map(bg => `
        <button class="asset-item ${state.selectedBg.id === bg.id ? 'active' : ''}" data-type="bg" data-id="${bg.id}">
            <img src="${bg.path}" alt="${bg.name}" />
            <span>${bg.name}</span>
        </button>
    `).join('');

    // Overlays
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

    // Centers
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
                drawCenter();
            };
        } else {
            drawCenter();
        }
    };
}

function drawCenter() {
    if (!state.selectedCenter) return;
    const centerImg = new Image();
    centerImg.src = state.selectedCenter.path;
    centerImg.onload = () => {
        const x = (canvas.width - centerImg.width) / 2;
        const y = (canvas.height - centerImg.height) / 2;
        ctx.drawImage(centerImg, x, y);
    };
}

function setupEventListeners() {
    document.addEventListener('click', (e) => {
        const item = e.target.closest('.asset-item');
        if (!item) return;

        const type = item.dataset.type;
        const id = item.dataset.id;

        if (type === 'bg') {
            state.selectedBg = ASSETS.backgrounds.find(b => b.id === id);
        } else if (type === 'ov') {
            state.selectedOverlay = id === 'none' ? null : ASSETS.overlays.find(o => o.id === id);
        } else if (type === 'ct') {
            state.selectedCenter = id === 'none' ? null : ASSETS.centers.find(c => c.id === id);
        }

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
            
            const dataUrl = canvas.toDataURL('image/png');
            link.href = dataUrl;
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log('Download triggered successfully');
        } catch (err) {
            console.error('Error during download:', err);
            alert('Could not download image. If you are opening the file directly (file://), your browser might be blocking this for security. Try running it from a local server or uploading to GitHub.');
        }
    });

    shareBtn.addEventListener('click', async () => {
        const shareData = {
            title: 'UNO Card Sprite',
            text: 'Check out this UNO card I created!',
            url: window.location.href,
        };

        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if (err.name !== 'AbortError') copyToClipboard();
            }
        } else {
            copyToClipboard();
        }
    });
}

function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2000);
}

init();
