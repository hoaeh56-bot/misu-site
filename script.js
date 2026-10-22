// ===== ДАННЫЕ =====
const GIFTS_DATA = [
  // --- БОМЖ (дешевые 35-75) ---
  { id: "whipcupcakes", name: "Whip Cupcakes", image: "https://f.2fools.app/tgs/sticker_set/6ff450c5.gif", price: 35, weight: 25 },
  { id: "mousescakes", name: "Mouses Cakes", image: "https://f.2fools.app/tgs/sticker_set/59d7f.gif", price: 50, weight: 25 },
  { id: "luckyclever", name: "Lucky Clever", image: "https://f.2fools.app/tgs/sticker_set/f97deb22.gif", price: 50, weight: 25 },
  { id: "moonpendants", name: "Moon pendants", image: "https://f.2fools.app/tgs/sticker_set/7151eb6f.gif", price: 50, weight: 25 },
  { id: "instantsramen", name: "Instants Ramen", image: "https://f.2fools.app/tgs/sticker_set/c08c738.gif", price: 50, weight: 25 },
  { id: "lightlamp", name: "Light Lamp", image: "https://f.2fools.app/tgs/sticker_set/e63297e8.gif", price: 65, weight: 20 },
  { id: "faithamulets", name: "Faith Amulets", image: "https://f.2fools.app/tgs/sticker_set/2bb0a6d0.gif", price: 65, weight: 20 },
  { id: "socks", name: "Socks", image: "https://f.2fools.app/tgs/sticker_set/cd8ad4f2.gif", price: 75, weight: 20 },
  { id: "prettyposies", name: "Pretty Posies", image: "https://f.2fools.app/tgs/sticker_set/1e5655c0.gif", price: 75, weight: 20 },
  { id: "moneypot", name: "Money Pot", image: "https://f.2fools.app/tgs/sticker_set/2b18d298.gif", price: 75, weight: 20 },
  { id: "happybrownie", name: "Happy Brownie", image: "https://f.2fools.app/tgs/sticker_set/3cb1af85.gif", price: 75, weight: 20 },
  { id: "jackinthebox", name: "Jacks-in-the-box", image: "https://f.2fools.app/tgs/sticker_set/2ce0d04f.gif", price: 75, weight: 20 },

  // --- ВИП (средние 100-150) ---
  { id: "lightsword", name: "Light Sword", image: "https://f.2fools.app/tgs/sticker_set/dbfacb64.gif", price: 100, weight: 15 },
  { id: "dyson", name: "Dyson", image: "https://f.2fools.app/tgs/sticker_set/70089a44.gif", price: 100, weight: 15 },
  { id: "bowties", name: "Bow Ties", image: "https://f.2fools.app/tgs/sticker_set/b8eb5174.gif", price: 110, weight: 15 },
  { id: "culon", name: "Culon", image: "https://f.2fools.app/tgs/sticker_set/67cb9175.gif", price: 150, weight: 10 },
  { id: "bondedrings", name: "Bonded rings", image: "https://f.2fools.app/tgs/sticker_set/7fb2150f.gif", price: 150, weight: 10 },
  { id: "nailbraclets", name: "Nail Braclets", image: "https://f.2fools.app/tgs/sticker_set/332d54b0.gif", price: 150, weight: 10 },
  { id: "nekohelmet", name: "Neko helmet", image: "https://f.2fools.app/tgs/sticker_set/5bb57e.gif", price: 150, weight: 10 },

  // --- МАЖОР (дорогие 200+) ---
  { id: "heroichelmet", name: "Heroic Helmet", image: "https://f.2fools.app/tgs/sticker_set/f7141b8b.gif", price: 200, weight: 5 },
  { id: "strongarms", name: "Strong Arms", image: "https://f.2fools.app/tgs/sticker_set/dc311465.gif", price: 250, weight: 5 },
  { id: "bricks", name: "Bricks", image: "https://f.2fools.app/tgs/sticker_set/bae6e39.gif", price: 400, weight: 2 }
];

const CASES_DATA = [
  { 
    id: 1, emoji: "🎁", name: "БОМЖ КЕЙС", price: 67, 
    pool: ["whipcupcakes", "mousescakes", "luckyclever", "moonpendants", "instantsramen", "lightlamp", "faithamulets", "socks", "prettyposies", "moneypot", "happybrownie", "jackinthebox"], 
    image: "https://f.2fools.app/tgs/sticker_set/25b5f56.gif" 
  },
  { 
    id: 2, emoji: "📦", name: "ВИП КЕЙС", price: 100, 
    pool: ["lightsword", "dyson", "bowties", "culon", "bondedrings", "nailbraclets", "nekohelmet"], 
    image: "https://f.2fools.app/tgs/sticker_set/4c8a15d0.gif" 
  },
  { 
    id: 3, emoji: "🔥", name: "МАЖОР КЕЙС", price: 200, 
    pool: ["heroichelmet", "strongarms", "bricks"], 
    image: "https://f.2fools.app/tgs/sticker_set/27378bc0.gif" 
  }
];

// ===== ПЕРЕМЕННЫЕ =====
let userId = "guest";
let userName = "Гость";
let balance = 0;
let inventory = [];
let nextId = 1;
let selectedItemId = null;
let selectedTargetId = null;
let currentChance = 0;
let isSpinning = false;
let selectedCaseToOpen = null;
let tempGift = null;
let selectedInventoryId = null;

const balanceEl = document.getElementById("balance");
const casesGrid = document.getElementById("casesGrid");
const inventoryEl = document.getElementById("inventory");
const upgradeInventoryEl = document.getElementById("upgradeInventory");
const targetInventoryEl = document.getElementById("targetInventory");
const wheelPath = document.getElementById("wheelPath");
const centerChance = document.getElementById("centerChance");
const needle = document.getElementById("needle");
const upgradeBtn = document.getElementById("upgradeBtn");
const hintEl = document.getElementById("hint");

const selectedEmoji = document.getElementById("selectedEmoji");
const selectedName = document.getElementById("selectedName");
const selectedPrice = document.getElementById("selectedPrice");
const nextEmoji = document.getElementById("nextEmoji");
const nextName = document.getElementById("nextName");
const nextPrice = document.getElementById("nextPrice");

const depositModal = document.getElementById("depositModal");
const openDepositBtn = document.getElementById("openDepositBtn");
const btnCancelDeposit = document.getElementById("btnCancelDeposit");
const depositAmountInput = document.getElementById("depositAmount");
const btnPayDeposit = document.getElementById("btnPayDeposit");

const itemActionModal = document.getElementById("itemActionModal");
const actionItemImg = document.getElementById("actionItemImg");
const actionItemName = document.getElementById("actionItemName");
const actionBtnSell = document.getElementById("actionBtnSell");
const actionBtnWithdraw = document.getElementById("actionBtnWithdraw");
const btnCancelAction = document.getElementById("btnCancelAction");

const previewModal = document.getElementById("previewModal");
const previewImg = document.getElementById("previewImg");
const previewTitle = document.getElementById("previewTitle");
const previewGrid = document.getElementById("previewGrid");
const btnCancelPreview = document.getElementById("btnCancelPreview");

const caseModal = document.getElementById("caseModal");
const modalTitle = document.getElementById("modalTitle");
const rouletteContainer = document.getElementById("rouletteContainer");
const rouletteTrack = document.getElementById("rouletteTrack");
const resultScreen = document.getElementById("resultScreen");
const resultItem = document.getElementById("resultItem");
const resultName = document.getElementById("resultName");
const sellPriceSpan = document.getElementById("sellPrice");
const btnSell = document.getElementById("btnSell");
const btnKeep = document.getElementById("btnKeep");
const btnFastOpen = document.getElementById("btnFastOpen");
const btnNormalOpen = document.getElementById("btnNormalOpen");

function getItemImageHTML(item) {
  if (item && item.image) {
    return `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
  }
  return `<span style="font-size: 20px;">${item.emoji || '🎁'}</span>`;
}

// ===== ПРОФИЛЬ И СОХРАНЕНИЯ =====
function loadSave() {
  const saved = localStorage.getItem(`misuSave_${userId}`);
  if (saved) {
    const data = JSON.parse(saved);
    balance = data.balance !== undefined ? data.balance : 0;
    inventory = data.inventory || [];
    nextId = data.nextId || 1;
  }
}

function saveData() {
  const data = { balance, inventory, nextId };
  localStorage.setItem(`misuSave_${userId}`, JSON.stringify(data));
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
  console.log("Telegram WebApp object:", window.Telegram);

  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    
    console.log("initDataUnsafe:", tg.initDataUnsafe);

    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
      const u = tg.initDataUnsafe.user;
      userId = u.id.toString();
      userName = u.username ? `@${u.username}` : (u.first_name || "Игрок");
      
      document.getElementById("userName").textContent = userName;
      if (u.photo_url) {
        document.getElementById("userAvatar").src = u.photo_url;
      }
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const tgId = urlParams.get('tg_id');
      if (tgId) {
        userId = tgId;
        userName = "Игрок " + userId;
        document.getElementById("userName").textContent = userName;
      } else {
        userId = "tg_" + Date.now();
        document.getElementById("userName").textContent = "Игрок";
      }
    }
  } else {
    let guestId = localStorage.getItem("misuGuestId");
    if (!guestId) {
      guestId = "guest_" + Math.floor(Math.random() * 100000);
      localStorage.setItem("misuGuestId", guestId);
    }
    userId = guestId;
    document.getElementById("userName").textContent = "Тестовый Игрок";
  }

  loadSave();

  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
    });
  });

  renderCases();
  renderInventory();
  renderUpgradeInventory();
  renderTargetInventory();
  updateBalance();
  updateWheelSector();
});

// ===== ПОПОЛНЕНИЕ =====
openDepositBtn.addEventListener("click", () => depositModal.classList.add("active"));
btnCancelDeposit.addEventListener("click", () => depositModal.classList.remove("active"));

btnPayDeposit.addEventListener("click", () => {
  const amount = parseInt(depositAmountInput.value);
  if (!amount || amount < 1) {
    alert("Введите корректную сумму!");
    return;
  }
  
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    if (tg.sendData) {
      tg.sendData(JSON.stringify({ action: "deposit", amount: amount }));
      tg.close(); 
    } else {
      alert("Ошибка: метод отправки не поддерживается.");
    }
  } else {
    balance += amount;
    updateBalance();
    saveData();
    depositModal.classList.remove("active");
    hintEl.textContent = `Тестовое пополнение на ${amount} ⭐`;
    depositAmountInput.value = "";
  }
});

// ===== ОТРИСОВКА КЕЙСОВ =====
function renderCases() {
  if (!casesGrid) return;
  casesGrid.innerHTML = "";
  CASES_DATA.forEach(c => {
    const div = document.createElement("div");
    div.className = "case";
    const bgImage = c.image 
      ? `<img src="${c.image}" class="case-bg" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
         <div class="case-overlay"></div>
         <span class="case-fallback" style="display:none; font-size: 40px;">${c.emoji}</span>`
      : `<span class="case-fallback" style="font-size: 40px;">${c.emoji}</span>`;

    div.innerHTML = `
      ${bgImage}
      <div class="case-info">
        <div class="name">${c.name}</div>
        <div class="price">${c.price} ⭐</div>
      </div>
    `;
    div.addEventListener("click", () => showPreviewModal(c));
    casesGrid.appendChild(div);
  });
}

function getRandomGiftByWeight(gifts) {
  const totalWeight = gifts.reduce((sum, gift) => sum + (gift.weight || 1), 0);
  let random = Math.random() * totalWeight;
  for (const gift of gifts) {
    const weight = gift.weight || 1;
    if (random < weight) return gift;
    random -= weight;
  }
  return gifts[0];
}

// ===== ПРЕВЬЮ КЕЙСА =====
function showPreviewModal(c) {
  selectedCaseToOpen = c;
  previewImg.src = c.image;
  previewTitle.textContent = c.name;
  
  const availableGifts = GIFTS_DATA.filter(gift => c.pool.includes(gift.id));
  const totalWeight = availableGifts.reduce((sum, gift) => sum + (gift.weight || 1), 0);

  previewGrid.innerHTML = "";
  availableGifts.forEach(gift => {
    const weight = gift.weight || 1;
    const percent = ((weight / totalWeight) * 100).toFixed(1);
    const div = document.createElement("div");
    div.className = "preview-item";
    div.innerHTML = `
      <img src="${gift.image}" alt="${gift.name}">
      <div class="p-name">${gift.name}</div>
      <div class="p-chance">${percent}%</div>
    `;
    previewGrid.appendChild(div);
  });
  previewModal.classList.add("active");
}

btnCancelPreview.addEventListener("click", () => {
  previewModal.classList.remove("active");
  selectedCaseToOpen = null;
});

// ===== ОТКРЫТИЕ КЕЙСА =====
btnFastOpen.addEventListener("click", () => {
  if (!selectedCaseToOpen) return;
  previewModal.classList.remove("active");
  const c = selectedCaseToOpen;
  if (balance < c.price) {
    hintEl.textContent = "Недостаточно звёзд! Пополни баланс.";
    return;
  }
  balance -= c.price;
  updateBalance();
  saveData();

  const availableGifts = GIFTS_DATA.filter(gift => c.pool.includes(gift.id));
  const randomGift = getRandomGiftByWeight(availableGifts);
  tempGift = { id: nextId++, emoji: randomGift.emoji, image: randomGift.image, name: randomGift.name, price: randomGift.price };

  modalTitle.innerHTML = `<div class="case-open-header"><img src="${c.image}" style="width:30px; height:30px; border-radius:5px; vertical-align:middle; margin-right:5px;"><span style="vertical-align:middle;">${c.name}</span></div>`;
  caseModal.classList.add("active");
  rouletteContainer.style.display = "none";
  resultScreen.classList.add("active");
  
  resultItem.innerHTML = getItemImageHTML(tempGift);
  resultName.textContent = tempGift.name;
  sellPriceSpan.textContent = tempGift.price;

  selectedCaseToOpen = null;
});

btnNormalOpen.addEventListener("click", () => {
  if (!selectedCaseToOpen) return;
  previewModal.classList.remove("active");
  const c = selectedCaseToOpen;
  if (balance < c.price) {
    hintEl.textContent = "Недостаточно звёзд! Пополни баланс.";
    return;
  }
  balance -= c.price;
  updateBalance();
  saveData();

  const availableGifts = GIFTS_DATA.filter(gift => c.pool.includes(gift.id));
  const randomGift = getRandomGiftByWeight(availableGifts);
  tempGift = { id: nextId++, emoji: randomGift.emoji, image: randomGift.image, name: randomGift.name, price: randomGift.price };

  modalTitle.innerHTML = `<div class="case-open-header"><img src="${c.image}" style="width:30px; height:30px; border-radius:5px; vertical-align:middle; margin-right:5px;"><span style="vertical-align:middle;">${c.name}</span></div>`;
  caseModal.classList.add("active");
  rouletteContainer.style.display = "block";
  resultScreen.classList.remove("active");

  const trackItems = [];
  const totalItems = 50;
  const winningIndex = 45;
  for (let i = 0; i < totalItems; i++) {
    if (i === winningIndex) trackItems.push(tempGift);
    else trackItems.push(getRandomGiftByWeight(availableGifts));
  }

  rouletteTrack.innerHTML = trackItems.map(gift => `
    <div class="roulette-item">
      ${gift.image ? `<img src="${gift.image}">` : `<span style="font-size:20px;">${gift.emoji}</span>`}
    </div>
  `).join("");

  rouletteTrack.style.transition = "none";
  rouletteTrack.style.transform = "translateX(0)";

  setTimeout(() => {
    const itemWidth = 76; 
    const containerWidth = rouletteContainer.offsetWidth;
    const centerOffset = containerWidth / 2; 
    const stopPosition = -(winningIndex * itemWidth) + centerOffset - 35; 
    rouletteTrack.style.transition = "transform 4s cubic-bezier(0.15, 1, 0.15, 1)";
    rouletteTrack.style.transform = `translateX(${stopPosition}px)`;
  }, 50);

  setTimeout(() => {
    resultScreen.classList.add("active");
    resultItem.innerHTML = getItemImageHTML(tempGift);
    resultName.textContent = tempGift.name;
    sellPriceSpan.textContent = tempGift.price;
  }, 4100);

  selectedCaseToOpen = null;
});

// ===== ЗАБРАТЬ / ПРОДАТЬ ИЗ КЕЙСА =====
btnSell.addEventListener("click", () => {
  if (!tempGift) return;
  balance += tempGift.price;
  updateBalance();
  saveData();
  caseModal.classList.remove("active");
  hintEl.innerHTML = `Вы продали <b>${tempGift.name}</b> за <b>${tempGift.price} ⭐</b>!`;
  tempGift = null;
});

btnKeep.addEventListener("click", () => {
  if (!tempGift) return;
  inventory.push(tempGift);
  saveData();
  renderInventory();
  renderUpgradeInventory();
  caseModal.classList.remove("active");
  hintEl.innerHTML = `Вы забрали <b>${tempGift.name}</b> в инвентарь!`;
  tempGift = null;
});

// ===== ИНВЕНТАРЬ (ВЫВОД И ПРОДАЖА) =====
function renderInventory() {
  if (!inventoryEl) return;
  if (inventory.length === 0) { inventoryEl.innerHTML = `<p class="empty" style="font-size:0.7rem;">Пока пусто. Открой кейс.</p>`; return; }
  inventoryEl.innerHTML = "";
  inventory.forEach(g => {
    const div = document.createElement("div");
    div.className = "inv-item";
    div.innerHTML = `<div class="item-img-box">${getItemImageHTML(g)}</div><div class="name">${g.name}</div><div class="price">${g.price} ⭐</div>`;
    
    div.addEventListener("click", () => {
      selectedInventoryId = g.id;
      actionItemImg.src = g.image;
      actionItemName.textContent = g.name;
      itemActionModal.classList.add("active");
    });
    
    inventoryEl.appendChild(div);
  });
}

btnCancelAction.addEventListener("click", () => {
  itemActionModal.classList.remove("active");
  selectedInventoryId = null;
});

actionBtnSell.addEventListener("click", () => {
  if (!selectedInventoryId) return;
  const g = inventory.find(x => x.id === selectedInventoryId);
  if (!g) return;
  
  balance += g.price;
  inventory = inventory.filter(x => x.id !== selectedInventoryId);
  
  updateBalance();
  saveData();
  renderInventory();
  renderUpgradeInventory();
  
  itemActionModal.classList.remove("active");
  hintEl.innerHTML = `Вы продали <b>${g.name}</b> за <b>${g.price} ⭐</b>!`;
  selectedInventoryId = null;
});

// ВЫВОД
actionBtnWithdraw.addEventListener("click", () => {
  if (!selectedInventoryId) return;
  const g = inventory.find(x => x.id === selectedInventoryId);
  if (!g) return;
  
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    if (tg.sendData) {
      tg.sendData(JSON.stringify({ 
        action: "withdraw", 
        itemName: g.name, 
        itemPrice: g.price,
        userName: userName
      }));
      
      inventory = inventory.filter(x => x.id !== selectedInventoryId);
      saveData();
      renderInventory();
      renderUpgradeInventory();
      
      itemActionModal.classList.remove("active");
      alert("Заявка обрабатывается. Ожидайте сообщения от администратора.");
      selectedInventoryId = null;
      tg.close();
    } else {
      alert("Ошибка: метод отправки не поддерживается.");
    }
  } else {
    alert("Заявка на вывод создана (тестовый режим).");
    itemActionModal.classList.remove("active");
  }
});

// ===== АПГРЕЙДЕР =====
function renderUpgradeInventory() {
  if (!upgradeInventoryEl) return;
  if (inventory.length === 0) { upgradeInventoryEl.innerHTML = `<p class="empty" style="font-size:0.7rem;">Инвентарь пуст.</p>`; return; }
  upgradeInventoryEl.innerHTML = "";
  inventory.forEach(g => {
    const div = document.createElement("div");
    div.className = "inv-item" + (g.id === selectedItemId ? " selected" : "");
    div.innerHTML = `<div class="item-img-box">${getItemImageHTML(g)}</div><div class="name">${g.name}</div><div class="price">${g.price} ⭐</div>`;
    div.addEventListener("click", () => selectItem(g.id));
    upgradeInventoryEl.appendChild(div);
  });
}

function renderTargetInventory() {
  if (!targetInventoryEl) return;
  targetInventoryEl.innerHTML = "";
  const sortedGifts = [...GIFTS_DATA].sort((a, b) => a.price - b.price);
  sortedGifts.forEach(g => {
    const div = document.createElement("div");
    div.className = "inv-item" + (g.id === selectedTargetId ? " target-selected" : "");
    div.innerHTML = `<div class="item-img-box">${getItemImageHTML(g)}</div><div class="name">${g.name}</div><div class="price">${g.price} ⭐</div>`;
    div.addEventListener("click", () => selectTarget(g.id));
    targetInventoryEl.appendChild(div);
  });
}

function selectItem(id) {
  if (isSpinning) return;
  selectedItemId = id;
  const g = inventory.find(x => x.id === id);
  if (!g) return;
  selectedEmoji.innerHTML = getItemImageHTML(g);
  selectedName.textContent = g.name;
  selectedPrice.textContent = `${g.price} ⭐`;
  calculateChance();
  renderUpgradeInventory();
}

function selectTarget(id) {
  if (isSpinning) return;
  const currentItem = inventory.find(x => x.id === selectedItemId);
  const targetItem = GIFTS_DATA.find(x => x.id === id);
  if (currentItem && targetItem && targetItem.price <= currentItem.price) {
    hintEl.textContent = "Цель должна быть дороже!";
    return;
  }
  selectedTargetId = id;
  nextEmoji.innerHTML = getItemImageHTML(targetItem);
  nextName.textContent = targetItem.name;
  nextPrice.textContent = `${targetItem.price} ⭐`;
  calculateChance();
  renderTargetInventory();
}

function calculateChance() {
  if (selectedItemId !== null && selectedTargetId !== null) {
    const currentItem = inventory.find(x => x.id === selectedItemId);
    const targetItem = GIFTS_DATA.find(x => x.id === selectedTargetId);
    if (currentItem && targetItem) {
      let chance = (currentItem.price / targetItem.price) * 0.9;
      if (chance > 0.9) chance = 0.9;
      if (chance < 0.01) chance = 0.01;
      currentChance = chance;
      updateWheelSector();
      upgradeBtn.disabled = false;
      hintEl.textContent = `Шанс успеха: ${Math.round(chance * 100)}%`;
    }
  } else {
    currentChance = 0;
    updateWheelSector();
    upgradeBtn.disabled = true;
  }
}

function updateWheelSector() {
  if (!wheelPath || !centerChance) return;
  const angle = currentChance * 360;
  const startAngle = 90 - angle / 2;
  const endAngle = 90 + angle / 2;
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const r = 96;
  const x1 = 100 + r * Math.cos(startRad);
  const y1 = 100 + r * Math.sin(startRad);
  const x2 = 100 + r * Math.cos(endRad);
  const y2 = 100 + r * Math.sin(endRad);
  const largeArc = angle > 180 ? 1 : 0;
  if (angle >= 360) { wheelPath.setAttribute("d", `M 100 4 A 96 96 0 1 1 99.9 4 Z`); } 
  else { wheelPath.setAttribute("d", `M 100 100 L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`); }
  centerChance.textContent = `${Math.round(currentChance * 100)}%`;
}

upgradeBtn.addEventListener("click", () => {
  if (isSpinning || selectedItemId === null || selectedTargetId === null) return;
  const g = inventory.find(x => x.id === selectedItemId);
  const target = GIFTS_DATA.find(x => x.id === selectedTargetId);
  if (!g || !target) return;
  isSpinning = true;
  upgradeBtn.disabled = true;
  const success = Math.random() < currentChance;
  const angle = currentChance * 360;
  let stopAngle;
  if (success) stopAngle = 180 - angle / 2 + Math.random() * angle;
  else stopAngle = 180 + angle / 2 + Math.random() * (360 - angle);
  const fullSpins = 5 + Math.floor(Math.random() * 3);
  const totalRotation = fullSpins * 360 + stopAngle;
  needle.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";
  needle.style.transform = `rotate(${totalRotation}deg)`;
  hintEl.textContent = "Крутим...";

  setTimeout(() => {
    isSpinning = false;
    if (success) {
      const upgraded = { id: nextId++, emoji: target.emoji, image: target.image, name: target.name, price: target.price };
      inventory = inventory.filter(x => x.id !== g.id);
      inventory.push(upgraded);
      selectedItemId = null;
      selectedTargetId = null;
      hintEl.textContent = `Успех! ${g.name} → ${upgraded.name}`;
    } else {
      inventory = inventory.filter(x => x.id !== g.id);
      selectedItemId = null;
      hintEl.textContent = `Неудача. ${g.name} сгорел.`;
    }
    
    saveData();

    setTimeout(() => {
      needle.style.transition = "none";
      needle.style.transform = "rotate(0deg)";
      setTimeout(() => {
        needle.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";
      }, 50);
    }, 300);

    renderInventory();
    renderUpgradeInventory();
    renderTargetInventory();

    if (selectedItemId === null) {
      selectedEmoji.innerHTML = "—";
      selectedName.textContent = "Выбери подарок";
      selectedPrice.textContent = "—";
    }
    if (selectedTargetId === null) {
      nextEmoji.innerHTML = "—";
      nextName.textContent = "Хочешь получить";
      nextPrice.textContent = "—";
    }
    calculateChance();
  }, 4100);
});

function updateBalance() {
  if (balanceEl) balanceEl.textContent = balance;
}
