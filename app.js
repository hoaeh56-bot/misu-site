const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Получаем ID юзера
const userId = tg.initDataUnsafe?.user?.id;

// Функция для обновления баланса (пока заглушка)
function updateBalance() {
    // Позже мы добавим сюда запрос к Supabase
    document.getElementById('balance-amount').innerText = "0";
}

// Логика кейсов (пока просто уведомление)
function openCase(caseId, price) {
    tg.showAlert(`Ты открываешь ${caseId} за ${price} 🎃\n(Скоро тут будет выпадать подарок)`);
}

// Логика апгрейдера
let selectedItem = null;
let targetItem = null;

// Обработка нажатий на слоты
document.getElementById('slot-1').addEventListener('click', () => {
    tg.showAlert("Выбор предмета для апгрейда (в разработке)");
});

document.getElementById('slot-2').addEventListener('click', () => {
    tg.showAlert("Выбор цели для апгрейда (в разработке)");
});

function upgrade() {
    tg.showAlert("Апгрейд запущен! (В разработке)");
}
