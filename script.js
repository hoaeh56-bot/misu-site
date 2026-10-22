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

// --- ИВЕНТ ДАННЫЕ ---
const EVENT_TASKS = [
  { id: "case_bomj", name: "Открыть БОМЖ кейс", target: 10, reward: 5, type: "case", caseId: 1 },
  { id: "case_vip", name: "Открыть ВИП кейс", target: 5, reward: 10, type: "case", caseId: 2 },
  { id: "rocket", name: "Сыграть в Ракетку", target: 3, reward: 5, type: "rocket" },
  { id: "upgrade", name: "Улучшить скин", target: 10, reward: 8, type: "upgrade" }
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

// Переменные Ивента
let eventPoints = 0;
let eventProgress = {}; // { taskId: count }
let hasLuckPotion = false;
let eventLeaderboard = []; // { name: string, points: number }

const SERVER_URL = 'https://misu-bot-bjna.onrender.com';

// ... (продолжение кода, элементы DOM и функции загрузки, как в прошлом сообщении)
