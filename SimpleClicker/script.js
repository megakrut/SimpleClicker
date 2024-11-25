// Получаем элементы
const clickButton = document.getElementById('clickButton');
const clickCountElement = document.getElementById('clickCount');
const totalClicksElement = document.getElementById('totalClicks');
const clickPointsElement = document.getElementById('clickPoints');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeCostElement = document.getElementById('upgradeCost');

// Инициализируем переменные
let clickCount = 0;
let totalClicks = 0;
let clickPoints = 0;
let upgradeCost = 10; // Начальная стоимость прокачки
let upgradeMultiplier = 1.1; // Множитель, который увеличивает количество очков за клик на 1.1

// Обработчик кликов на кнопке
clickButton.addEventListener('click', () => {
    // Увеличиваем общий счетчик кликов
    totalClicks++;
    
    // Умножаем количество очков за клик на множитель
    clickPoints += upgradeMultiplier;

    // Обновляем отображение на странице
    clickCountElement.textContent = Math.floor(clickPoints);
    totalClicksElement.textContent = totalClicks;
    clickPointsElement.textContent = Math.floor(clickPoints);
});

// Обработчик покупки прокачки
upgradeButton.addEventListener('click', () => {
    // Проверяем, достаточно ли кликов для покупки
    if (clickPoints >= upgradeCost) {
        // Уменьшаем клики на стоимость прокачки
        clickPoints -= upgradeCost;

        // Увеличиваем стоимость следующей прокачки
        upgradeCost = Math.floor(upgradeCost * 1.5); // Увеличиваем стоимость на 50%

        // Умножаем множитель очков на 1.1
        upgradeMultiplier *= 1.1;

        // Обновляем отображение
        clickPointsElement.textContent = Math.floor(clickPoints);
        upgradeCostElement.textContent = Math.floor(upgradeCost);

        // Обновляем текст на кнопке
        upgradeButton.textContent = `Buy upgrade (Price: ${Math.floor(upgradeCost)})`;
    } else {
        alert('You dont have enough clicks to purchase an upgrade!');
    }
});