// ===== ДАННЫЕ =====
const GIFTS_DATA = [
  { id: "whipcupcakes", name: "Whip Cupcakes", image: "https://f.2fools.app/tgs/sticker_set/6ff450c5.gif", price: 35, weight: 25 },
  { id: "mousescakes", name: "Mouses Cakes", image: "https://f.2fools.app/tgs/sticker_set/59d7f.gif", price: 50, weight: 25 },
  { id: "tamagochi", name: "Tamagochi", image: "https://f.2fools.app/tgs/sticker_set/f99b65ce.gif", price: 50, weight: 25 },
  { id: "moonpendants", name: "Moon pendants", image: "https://f.2fools.app/tgs/sticker_set/7151eb6f.gif", price: 50, weight: 25 },
  { id: "instantsramen", name: "Instants Ramen", image: "https://f.2fools.app/tgs/sticker_set/c08c738.gif", price: 50, weight: 25 },
  { id: "valentinebox", name: "Valentine box", image: "https://f.2fools.app/tgs/sticker_set/222e39f0.gif", price: 55, weight: 25 },
  { id: "lightlamp", name: "Light Lamp", image: "https://f.2fools.app/tgs/sticker_set/e63297e8.gif", price: 65, weight: 20 },
  { id: "snowglobe", name: "Snow Globe", image: "https://f.2fools.app/tgs/sticker_set/851ddb69.gif", price: 75, weight: 20 },
  { id: "spicedwine", name: "Spiced Wine", image: "https://f.2fools.app/tgs/sticker_set/cc228867.gif", price: 75, weight: 20 },
  { id: "snoopdog", name: "Snoop Dog", image: "https://f.2fools.app/tgs/sticker_set/8039a5d1.gif", price: 75, weight: 20 },
  { id: "snoopcigar", name: "Snoop Cigar", image: "https://f.2fools.app/tgs/sticker_set/cb44c1b7.gif", price: 75, weight: 20 },
  { id: "xmasstocking", name: "Xmas Stocking", image: "https://f.2fools.app/tgs/sticker_set/429640bf.gif", price: 100, weight: 15 },
  { id: "lightsword", name: "Light Sword", image: "https://f.2fools.app/tgs/sticker_set/dbfacb64.gif", price: 100, weight: 15 },
  { id: "dyson", name: "Dyson", image: "https://f.2fools.app/tgs/sticker_set/70089a44.gif", price: 100, weight: 15 },
  { id: "bowties", name: "Bow Ties", image: "https://f.2fools.app/tgs/sticker_set/b8eb5174.gif", price: 110, weight: 15 },
  { id: "culon", name: "Culon", image: "https://f.2fools.app/tgs/sticker_set/67cb9175.gif", price: 150, weight: 10 },
  { id: "bondedrings", name: "Bonded rings", image: "https://f.2fools.app/tgs/sticker_set/7fb2150f.gif", price: 150, weight: 10 },
  { id: "nailbraclets", name: "Nail Braclets", image: "https://f.2fools.app/tgs/sticker_set/332d54b0.gif", price: 150, weight: 10 },
  { id: "nekohelmet", name: "Neko helmet", image: "https://f.2fools.app/tgs/sticker_set/5bb57e.gif", price: 150, weight: 10 },
  { id: "heroichelmet", name: "Heroic Helmet", image: "https://f.2fools.app/tgs/sticker_set/f7141b8b.gif", price: 200, weight: 5 },
  { id: "strongarms", name: "Strong Arms", image: "https://f.2fools.app/tgs/sticker_set/dc311465.gif", price: 250, weight: 5 },
  { id: "bricks", name: "Bricks", image: "https://f.2fools.app/tgs/sticker_set/bae6e39.gif", price: 400, weight: 2 }
];

const CASES_DATA = [
  { id: 1, emoji: "🎁", name: "БОМЖ КЕЙС", price: 67, pool: ["whipcupcakes", "mousescakes", "tamagochi", "moonpendants", "instantsramen", "valentinebox", "lightlamp", "snowglobe", "spicedwine", "snoopdog", "snoopcigar", "xmasstocking"], image: "https://f.2fools.app/tgs/sticker_set/281a16cf.gif" },
  { id: 2, emoji: "📦", name: "ВИП КЕЙС", price: 100, pool: ["mousescakes", "tamagochi", "lightlamp", "snowglobe", "spicedwine", "xmasstocking", "lightsword", "dyson", "bowties", "culon", "bondedrings", "nailbraclets", "nekohelmet", "heroichelmet"], image: "https://f.2fools.app/tgs/sticker_set/4d6ca0df.gif" },
  { id: 3, emoji: "🔥", name: "МАЖОР КЕЙС", price: 200, pool: ["lightsword", "dyson", "bowties", "culon", "bondedrings", "nailbraclets", "nekohelmet", "heroichelmet", "strongarms", "bricks"], image: "https://f.2fools.app/tgs/sticker_set/27378bc0.gif" }
];

// ===== 50 ЗАДАНИЙ =====
const EVENT_TASKS = [
  { id: "t1", name: "Открыть 1 БОМЖ кейс", target: 1, reward: 10, type: "case_1" },
  { id: "t2", name: "Открыть 3 БОМЖ кейса", target: 3, reward: 10, type: "case_1" },
  { id: "t3", name: "Открыть 5 БОМЖ кейсов", target: 5, reward: 10, type: "case_1" },
  { id: "t4", name: "Открыть 10 БОМЖ кейсов", target: 10, reward: 10, type: "case_1" },
  { id: "t5", name: "Открыть 20 БОМЖ кейсов", target: 20, reward: 10, type: "case_1" },
  { id: "t6", name: "Открыть 1 ВИП кейс", target: 1, reward: 10, type: "case_2" },
  { id: "t7", name: "Открыть 3 ВИП кейса", target: 3, reward: 10, type: "case_2" },
  { id: "t8", name: "Открыть 5 ВИП кейсов", target: 5, reward: 10, type: "case_2" },
  { id: "t9", name: "Открыть 10 ВИП кейсов", target: 10, reward: 10, type: "case_2" },
  { id: "t10", name: "Открыть 1 МАЖОР кейс", target: 1, reward: 10, type: "case_3" },
  { id: "t11", name: "Открыть 3 МАЖОР кейса", target: 3, reward: 10, type: "case_3" },
  { id: "t12", name: "Открыть 5 МАЖОР кейсов", target: 5, reward: 10, type: "case_3" },
  { id: "t13", name: "Сыграть в Ракетку 1 раз", target: 1, reward: 10, type: "rocket" },
  { id: "t14", name: "Сыграть в Ракетку 3 раза", target: 3, reward: 10, type: "rocket" },
  { id: "t15", name: "Сыграть в Ракетку 5 раз", target: 5, reward: 10, type: "rocket" },
  { id: "t16", name: "Сыграть в Ракетку 10 раз", target: 10, reward: 10, type: "rocket" },
  { id: "t17", name: "Улучшить скин 1 раз", target: 1, reward: 10, type: "upgrade" },
  { id: "t18", name: "Улучшить скин 3 раза", target: 3, reward: 10, type: "upgrade" },
  { id: "t19", name: "Улучшить скин 5 раз", target: 5, reward: 10, type: "upgrade" },
  { id: "t20", name: "Улучшить скин 10 раз", target: 10, reward: 10, type: "upgrade" },
  { id: "t21", name: "Улучшить скин 20 раз", target: 20, reward: 10, type: "upgrade" },
  { id: "t22", name: "Продать 1 подарок", target: 1, reward: 10, type: "sell" },
  { id: "t23", name: "Продать 3 подарка", target: 3, reward: 10, type: "sell" },
  { id: "t24", name: "Продать 5 подарков", target: 5, reward: 10, type: "sell" },
  { id: "t25", name: "Продать 10 подарков", target: 10, reward: 10, type: "sell" },
  { id: "t26", name: "Выбить Ракету", target: 1, reward: 10, type: "drop_rocket" },
  { id: "t27", name: "Выбить Алмаз", target: 1, reward: 10, type: "drop_diamond" },
  { id: "t28", name: "Выбить Королевский подарок", target: 1, reward: 10, type: "drop_crown" },
  { id: "t29", name: "Выбить Огонь", target: 1, reward: 10, type: "drop_fire" },
  { id: "t30", name: "Выбить Мифик", target: 1, reward: 10, type: "drop_mythic" },
  { id: "t31", name: "Сделать 5 ставок в Ракетке", target: 5, reward: 10, type: "rocket_bet" },
  { id: "t32", name: "Сделать 10 ставок в Ракетке", target: 10, reward: 10, type: "rocket_bet" },
  { id: "t33", name: "Дойти до x2.00 в Ракетке", target: 1, reward: 10, type: "rocket_x2" },
  { id: "t34", name: "Дойти до x5.00 в Ракетке", target: 1, reward: 10, type: "rocket_x5" },
  { id: "t35", name: "Улучшить на 100⭐", target: 100, reward: 10, type: "upgrade_sum" },
  { id: "t36", name: "Улучшить на 500⭐", target: 500, reward: 10, type: "upgrade_sum" },
  { id: "t37", name: "Купить 1 зелье", target: 1, reward: 10, type: "buy_potion" },
  { id: "t38", name: "Купить 3 зелья", target: 3, reward: 10, type: "buy_potion" },
  { id: "t39", name: "Сделать 5 апгрейдов подряд", target: 5, reward: 10, type: "upgrade_streak" },
  { id: "t40", name: "Выиграть 3 апгрейда подряд", target: 3, reward: 10, type: "upgrade_win_streak" },
  { id: "t41", name: "Открыть 50 кейсов", target: 50, reward: 10, type: "case_total" },
  { id: "t42", name: "Сыграть 20 раз в Ракетку", target: 20, reward: 10, type: "rocket" },
  { id: "t43", name: "Улучшить 50 скинов", target: 50, reward: 10, type: "upgrade" },
  { id: "t44", name: "Продать 50 подарков", target: 50, reward: 10, type: "sell" },
  { id: "t45", name: "Потратить 1000⭐ в кейсах", target: 1000, reward: 10, type: "case_spend" },
  { id: "t46", name: "Потратить 5000⭐ в кейсах", target: 5000, reward: 10, type: "case_spend" },
  { id: "t47", name: "Выиграть 500⭐ в Ракетке", target: 500, reward: 10, type: "rocket_win_sum" },
  { id: "t48", name: "Выиграть 1000⭐ в Ракетке", target: 1000, reward: 10, type: "rocket_win_sum" },
  { id: "t49", name: "Сделать 10 апгрейдов", target: 10, reward: 10, type: "upgrade" },
  { id: "t50", name: "Открыть 100 кейсов", target: 100, reward: 10, type: "case_total" }
];

let userId = "guest";
let userName = "Гость";
let userAvatar = "https://via.placeholder.com/40";
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

// Ивент
let eventPoints = 0;
let eventProgress = {};

// Ракета
let rocketInterval = null;
let currentMultiplier = 1.00;
let rocketCrashed = false;
let rocketActive = false;
let currentBet = 0;

const SERVER_URL = 'https://misu-bot-bjna.onrender.com';

// Элементы
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

// Ракета
const rocketArea = document.getElementById("rocketArea");
const rocketMultiplier = document.getElementById("rocketMultiplier");
const rocketVisual = document.getElementById("rocketVisual");
const rocketExplosion = document.getElementById("rocketExplosion");
const rocketBet = document.getElementById("rocketBet");
const btnStartRocket = document.getElementById("btnStartRocket");
const btnCashout = document.getElementById("btnCashout");
const rocketHint = document.getElementById("rocketHint");

// Ивент
const eventPointsEl = document.getElementById("eventPoints");
const eventTasksEl = document.getElementById("eventTasks");
const eventShopEl = document.getElementById("eventShop");

function getItemImageHTML(item) {
  if (item && item.image) return `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: contain;">`;
  return `<span style="font-size: 20px;">${item.emoji || '🎁'}</span>`;
}

async function loadSave() {
  try {
    const res = await fetch(`${SERVER_URL}/api/get_balance/${userId}`);
    const data = await res.json();
    balance = data.balance || 0;
  } catch (e) {
    const saved = localStorage.getItem(`misuSave_${userId}`);
    if (saved) balance = JSON.parse(saved).balance || 0;
  }

  const savedInv = localStorage.getItem(`misuInv_${userId}`);
  if (savedInv) {
    const invData = JSON.parse(savedInv);
    inventory = invData.inventory || [];
    nextId = invData.nextId || 1;
  }

  const savedEvent = localStorage.getItem(`misuEvent_${userId}`);
  if (savedEvent) {
    const ev = JSON.parse(savedEvent);
    eventPoints = ev.points || 0;
    eventProgress = ev.progress || {};
  }

  updateBalance();
  updateEventUI();
  renderShop();
}

function saveData() {
  localStorage.setItem(`misuInv_${userId}`, JSON.stringify({ inventory, nextId }));
}

function saveEventData() {
  localStorage.setItem(`misuEvent_${userId}`, JSON.stringify({ points: eventPoints, progress: eventProgress }));
}

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tgId = urlParams.get('tg_id');
  const name = urlParams.get('name');
  const avatar = urlParams.get('avatar');

  if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe && window.Telegram.WebApp.initDataUnsafe.user) {
    const u = window.Telegram.WebApp.initDataUnsafe.user;
    userId = u.id.toString();
    userName = u.username ? `@${u.username}` : u.first_name;
  } else if (tgId) {
    userId = tgId;
    userName = name || ("Игрок " + userId);
  }

  if (!userId || userId === "guest") { userId = "test_user"; userName = "Тест"; }

  document.getElementById("userName").textContent = userName;
  if (avatar) document.getElementById("userAvatar").src = decodeURIComponent(avatar);

  await loadSave();

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
  updateWheelSector();

  openDepositBtn.addEventListener("click", () => alert("Пополнение через бота!"));
  btnCancelAction.addEventListener("click", () => { itemActionModal.classList.remove("active"); selectedInventoryId = null; });
  btnCancelPreview.addEventListener("click", () => { previewModal.classList.remove("active"); selectedCaseToOpen = null; });

  // Ракета логика
  btnStartRocket.addEventListener("click", () => {
    if (rocketActive) return;
    const bet = parseInt(rocketBet.value);
    if (isNaN(bet) || bet < 10) { rocketHint.textContent = "Мин. 10⭐"; return; }
    if (balance < bet) { rocketHint.textContent = "Недостаточно звёзд!"; return; }

    balance -= bet; updateBalance();
    currentBet = bet; rocketActive = true; rocketCrashed = false; currentMultiplier = 1.00;
    
    rocketMultiplier.textContent = `x1.00`; rocketMultiplier.style.color = "#facc15";
    rocketVisual.style.bottom = "10px"; rocketVisual.style.left = "10px";
    rocketExplosion.style.display = "none"; rocketVisual.style.display = "flex";
    
    btnStartRocket.disabled = true; btnCashout.disabled = false; btnCashout.textContent = `Забрать (x1.00)`;
    rocketHint.textContent = "Ракета летит...";
    
    incrementTaskProgress("rocket");

    const crashPoint = 1.01 + Math.random() * 8.99; 
    rocketInterval = setInterval(() => {
      if (rocketCrashed) return;
      currentMultiplier += 0.05;
      
      const progress = currentMultiplier / crashPoint;
      const bottomPos = 10 + (progress * 200);
      const leftPos = 10 + (progress * 250);
      
      if (bottomPos >= 240 || leftPos >= 320 || currentMultiplier >= 10.00) {
        if (currentMultiplier >= crashPoint) { crashRocket(); } else { currentMultiplier = Math.min(currentMultiplier, 9.99); }
      }
      if (currentMultiplier >= crashPoint) { crashRocket(); return; }

      rocketVisual.style.bottom = `${bottomPos}px`;
      rocketVisual.style.left = `${leftPos}px`;
      rocketMultiplier.textContent = `x${currentMultiplier.toFixed(2)}`;
      btnCashout.textContent = `Забрать (x${currentMultiplier.toFixed(2)})`;
    }, 100);
  });

  btnCashout.addEventListener("click", () => {
    if (!rocketActive || rocketCrashed) return;
    rocketActive = false; clearInterval(rocketInterval);
    const winAmount = Math.floor(currentBet * currentMultiplier);
    balance += winAmount; updateBalance();
    btnStartRocket.disabled = false; btnCashout.disabled = true;
    rocketHint.textContent = `🎉 Вы выиграли ${winAmount} ⭐`;
    rocketVisual.style.display = "none";
  });

  function crashRocket() {
    rocketActive = false; rocketCrashed = true; clearInterval(rocketInterval);
    rocketVisual.style.display = "none"; rocketExplosion.style.display = "block";
    rocketMultiplier.textContent = `x${currentMultiplier.toFixed(2)}`; rocketMultiplier.style.color = "#ef4444";
    btnStartRocket.disabled = false; btnCashout.disabled = true;
    rocketHint.textContent = `💥 Ракета взорвалась! Вы проиграли ${currentBet} ⭐`;
  }
});

// ===== ФУНКЦИИ ИВЕНТА =====
function incrementTaskProgress(type) {
  let updated = false;
  EVENT_TASKS.forEach(task => {
    if (task.type === type) {
      if (eventProgress[task.id] === undefined) eventProgress[task.id] = 0;
      if (eventProgress[task.id] < task.target) {
        eventProgress[task.id]++;
        updated = true;
        if (eventProgress[task.id] === task.target) {
          eventPoints += task.reward;
          eventPointsEl.textContent = eventPoints;
          alert(`Задание выполнено: ${task.name}! +${task.reward} 🎃`);
        }
      }
    }
  });
  if (updated) { saveEventData(); updateEventUI(); }
}

function updateEventUI() {
  eventPointsEl.textContent = eventPoints;
  eventTasksEl.innerHTML = "";
  let completedCount = 0;
  
  EVENT_TASKS.forEach(task => {
    const progress = eventProgress[task.id] || 0;
    const isDone = progress >= task.target;
    if (isDone) completedCount++;
    
    const div = document.createElement("div");
    div.className = "task-item";
    div.innerHTML = `
      <div class="task-info">
        <div class="task-name">${task.name}</div>
        <div class="task-progress">${progress} / ${task.target}</div>
        <div class="task-reward">+${task.reward} 🎃</div>
      </div>
      <button class="task-btn ${isDone ? 'done' : ''}" ${isDone ? '' : 'disabled'}>
        ${isDone ? 'Выполнено' : 'В процессе'}
      </button>
    `;
    eventTasksEl.appendChild(div);
  });
}

function renderShop() {
  if (!eventShopEl) return;
  eventShopEl.innerHTML = `
    <div class="shop-item" style="border-color: #a855f7;">
      <div class="shop-name">🎃 Halloween Кейс<br><small style="color:#888;">(все подарки)</small></div>
      <div class="shop-price">Цена: 10 🎃</div>
      <button class="bp-claim-btn" id="buyHalloweenCase">Купить</button>
    </div>
    <div class="shop-item">
      <div class="shop-name">🍀 Зелье удачи (x2 к шансу)</div>
      <div class="shop-price">Цена: 5 🎃</div>
      <button class="bp-claim-btn" id="buyLuckPotion">Купить</button>
    </div>
    <div class="shop-item">
      <div class="shop-name">⭐ +100 Звезд</div>
      <div class="shop-price">Цена: 10 🎃</div>
      <button class="bp-claim-btn" id="buyStars">Купить</button>
    </div>
  `;

  document.getElementById("buyHalloweenCase").addEventListener("click", () => {
    if (eventPoints < 10) return alert("Недостаточно тыковок!");
    eventPoints -= 10;
    saveEventData(); updateEventUI();

    // Выдаем случайный подарок из всех
    const randomGift = GIFTS_DATA[Math.floor(Math.random() * GIFTS_DATA.length)];
    const gift = { id: nextId++, emoji: randomGift.emoji, image: randomGift.image, name: randomGift.name, price: randomGift.price };
    inventory.push(gift);
    saveData(); renderInventory(); renderUpgradeInventory();
    alert(`Вы открыли Halloween Кейс и получили: ${gift.emoji} ${gift.name} (${gift.price} ⭐)`);
  });

  document.getElementById("buyLuckPotion").addEventListener("click", () => {
    if (eventPoints < 5) return alert("Недостаточно тыковок!");
    eventPoints -= 5;
    saveEventData(); updateEventUI();
    alert("Вы купили Зелье удачи! (В бете эффект не реализован)");
  });

  document.getElementById("buyStars").addEventListener("click", () => {
    if (eventPoints < 10) return alert("Недостаточно тыковок!");
    eventPoints -= 10;
    balance += 100;
    saveEventData(); updateEventUI(); updateBalance();
    alert("Вы получили 100 ⭐!");
  });
}

// ===== ОСТАЛЬНЫЕ ФУНКЦИИ (КЕЙСЫ, АПГРЕЙДЕР, ИНВЕНТАРЬ) =====
function renderCases() {
  if (!casesGrid) return;
  casesGrid.innerHTML = "";
  CASES_DATA.forEach(c => {
    const div = document.createElement("div");
    div.className = "case";
    const bgImage = c.image ? `<img src="${c.image}" class="case-bg" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><div class="case-overlay"></div><span class="case-fallback" style="display:none; font-size: 40px;">${c.emoji}</span>` : `<span class="case-fallback" style="font-size: 40px;">${c.emoji}</span>`;
    div.innerHTML = `${bgImage}<div class="case-info"><div class="name">${c.name}</div><div class="price">${c.price} ⭐</div></div>`;
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
    div.innerHTML = `<img src="${gift.image}" alt="${gift.name}"><div class="p-name">${gift.name}</div><div class="p-chance">${percent}%</div>`;
    previewGrid.appendChild(div);
  });
  previewModal.classList.add("active");
}

btnFastOpen.addEventListener("click", () => {
  if (!selectedCaseToOpen) return;
  previewModal.classList.remove("active");
  const c = selectedCaseToOpen;
  if (balance < c.price) { hintEl.textContent = "Недостаточно звёзд!"; return; }
  balance -= c.price; updateBalance(); saveData();
  
  incrementTaskProgress(`case_${c.id}`);

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
  if (balance < c.price) { hintEl.textContent = "Недостаточно звёзд!"; return; }
  balance -= c.price; updateBalance(); saveData();
  
  incrementTaskProgress(`case_${c.id}`);

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
  rouletteTrack.innerHTML = trackItems.map(gift => `<div class="roulette-item">${gift.image ? `<img src="${gift.image}">` : `<span style="font-size:20px;">${gift.emoji}</span>`}</div>`).join("");
  rouletteTrack.style.transition = "none"; rouletteTrack.style.transform = "translateX(0)";

  setTimeout(() => {
    const itemWidth = 84; 
    const containerWidth = rouletteContainer.offsetWidth; 
    const stopPosition = -(winningIndex * itemWidth) + (containerWidth / 2) - 38;
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

btnSell.addEventListener("click", () => {
  if (!tempGift) return;
  balance += tempGift.price; updateBalance(); saveData();
  incrementTaskProgress("sell");
  caseModal.classList.remove("active");
  hintEl.innerHTML = `Вы продали <b>${tempGift.name}</b> за <b>${tempGift.price} ⭐</b>!`;
  tempGift = null;
});

btnKeep.addEventListener("click", () => {
  if (!tempGift) return;
  inventory.push(tempGift); saveData(); renderInventory(); renderUpgradeInventory();
  caseModal.classList.remove("active");
  hintEl.innerHTML = `Вы забрали <b>${tempGift.name}</b>!`;
  tempGift = null;
});

function renderInventory() {
  if (!inventoryEl) return;
  if (inventory.length === 0) { inventoryEl.innerHTML = `<p class="empty" style="font-size:0.7rem;">Пока пусто.</p>`; return; }
  inventoryEl.innerHTML = "";
  inventory.forEach(g => {
    const div = document.createElement("div");
    div.className = "inv-item";
    div.innerHTML = `<div class="item-img-box">${getItemImageHTML(g)}</div><div class="name">${g.name}</div><div class="price">${g.price} ⭐</div>`;
    div.addEventListener("click", () => { selectedInventoryId = g.id; actionItemImg.src = g.image; actionItemName.textContent = g.name; itemActionModal.classList.add("active"); });
    inventoryEl.appendChild(div);
  });
}

actionBtnSell.addEventListener("click", () => {
  if (!selectedInventoryId) return;
  const g = inventory.find(x => x.id === selectedInventoryId);
  if (!g) return;
  balance += g.price; inventory = inventory.filter(x => x.id !== selectedInventoryId);
  updateBalance(); saveData(); renderInventory(); renderUpgradeInventory();
  incrementTaskProgress("sell");
  itemActionModal.classList.remove("active");
  hintEl.innerHTML = `Вы продали <b>${g.name}</b> за <b>${g.price} ⭐</b>!`;
  selectedInventoryId = null;
});

actionBtnWithdraw.addEventListener("click", async () => {
  if (!selectedInventoryId) return;
  const g = inventory.find(x => x.id === selectedInventoryId);
  if (!g) return;
  try {
    const res = await fetch(`${SERVER_URL}/api/withdraw`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, userName, itemName: g.name, itemPrice: g.price })
    });
    if (res.ok) {
      inventory = inventory.filter(x => x.id !== selectedInventoryId);
      saveData(); renderInventory(); renderUpgradeInventory();
      itemActionModal.classList.remove("active");
      alert(`Заявка на вывод "${g.name}" создана!`);
    } else { alert("Ошибка сервера."); }
  } catch (e) { alert("Сервер недоступен."); }
});

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
  selectedName.textContent = g.name; selectedPrice.textContent = `${g.price} ⭐`;
  calculateChance(); renderUpgradeInventory();
}

function selectTarget(id) {
  if (isSpinning) return;
  const currentItem = inventory.find(x => x.id === selectedItemId);
  const targetItem = GIFTS_DATA.find(x => x.id === id);
  if (currentItem && targetItem && targetItem.price <= currentItem.price) { hintEl.textContent = "Цель должна быть дороже!"; return; }
  selectedTargetId = id; nextEmoji.innerHTML = getItemImageHTML(targetItem);
  nextName.textContent = targetItem.name; nextPrice.textContent = `${targetItem.price} ⭐`;
  calculateChance(); renderTargetInventory();
}

function calculateChance() {
  if (selectedItemId !== null && selectedTargetId !== null) {
    const currentItem = inventory.find(x => x.id === selectedItemId);
    const targetItem = GIFTS_DATA.find(x => x.id === selectedTargetId);
    if (currentItem && targetItem) {
      let chance = (currentItem.price / targetItem.price) * 0.9;
      if (chance > 0.9) chance = 0.9;
      if (chance < 0.01) chance = 0.01;
      currentChance = chance; updateWheelSector(); upgradeBtn.disabled = false;
      hintEl.textContent = `Шанс успеха: ${Math.round(chance * 100)}%`;
    }
  } else { currentChance = 0; updateWheelSector(); upgradeBtn.disabled = true; }
}

function updateWheelSector() {
  if (!wheelPath || !centerChance) return;
  const angle = currentChance * 360;
  const startAngle = 90 - angle / 2; const endAngle = 90 + angle / 2;
  const startRad = (startAngle * Math.PI) / 180; const endRad = (endAngle * Math.PI) / 180;
  const r = 96; const x1 = 100 + r * Math.cos(startRad); const y1 = 100 + r * Math.sin(startRad);
  const x2 = 100 + r * Math.cos(endRad); const y2 = 100 + r * Math.sin(endRad);
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
  isSpinning = true; upgradeBtn.disabled = true;
  const success = Math.random() < currentChance;
  const angle = currentChance * 360; let stopAngle;
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
      inventory = inventory.filter(x => x.id !== g.id); inventory.push(upgraded);
      selectedItemId = null; selectedTargetId = null;
      hintEl.textContent = `Успех! ${g.name} → ${upgraded.name}`;
    } else {
      inventory = inventory.filter(x => x.id !== g.id); selectedItemId = null;
      hintEl.textContent = `Неудача. ${g.name} сгорел.`;
    }
    saveData();
    incrementTaskProgress("upgrade");
    
    setTimeout(() => {
      needle.style.transition = "none"; needle.style.transform = "rotate(0deg)";
      setTimeout(() => { needle.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"; }, 50);
    }, 300);
    renderInventory(); renderUpgradeInventory(); renderTargetInventory();
    if (selectedItemId === null) { selectedEmoji.innerHTML = "—"; selectedName.textContent = "Выбери подарок"; selectedPrice.textContent = "—"; }
    if (selectedTargetId === null) { nextEmoji.innerHTML = "—"; nextName.textContent = "Хочешь получить"; nextPrice.textContent = "—"; }
    calculateChance();
  }, 4100);
});

function updateBalance() { if (balanceEl) balanceEl.textContent = balance; }
