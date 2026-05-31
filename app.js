// Конфигурация API (для демонстрации используются моковые данные)
// В реальном проекте здесь должны быть URL ваших backend API

const CONFIG = {
    // Базовые URL маркетплейсов и функции для получения хвоста URL с фильтрами
    marketplaces: {
        ozon: {
            name: 'Ozon',
            baseUrl: 'https://www.ozon.ru',
            getFilterSuffix: () => '?from=0&to=10000',
            color: '#005bff',
            icon: 'fa-shopping-bag'
        },
        avito: {
            name: 'Avito',
            baseUrl: 'https://www.avito.ru',
            getFilterSuffix: () => '?f=price%3A2500-12500',
            color: '#00aa00',
            icon: 'fa-handshake'
        },
        wildberries: {
            name: 'Wildberries',
            baseUrl: 'https://www.wildberries.ru',
            getFilterSuffix: () => '?priceU=2500%3B10000&deliveryDays=5&meta_charcs=true',
            color: '#cb11ab',
            icon: 'fa-wine-bottle'
        }
    }
};

// Моковые данные для демонстрации (в реальном проекте это будет приходить с бэкенда)
const mockProducts = {
    'iphone': [
        {
            id: 1,
            title: 'Apple iPhone 14 Pro 128GB Deep Purple',
            price: 89990,
            marketplace: 'ozon',
            seller: {
                name: 'iStore Official',
                rating: 4.9,
                reviews: 15420,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-y/wc1000/165268877298250300.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/smartfony-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 2,
            title: 'iPhone 14 Pro Max 256GB Space Black',
            price: 95500,
            marketplace: 'wildberries',
            seller: {
                name: 'TechWorld',
                rating: 4.7,
                reviews: 8930,
                reputation: 'good'
            },
            image: 'https://basket-14.wbbasket.ru/vol2445/part244525/244525123/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 3,
            title: 'Apple iPhone 14 128GB Midnight',
            price: 72000,
            marketplace: 'avito',
            seller: {
                name: 'МобилТорг',
                rating: 4.5,
                reviews: 2340,
                reputation: 'average'
            },
            image: 'https://a.avito.st/i/original/1/65/16543210987654321.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        }
    ],
    'ноутбук': [
        {
            id: 4,
            title: 'MacBook Air 13 M2 2022 8/256GB Midnight',
            price: 115990,
            marketplace: 'ozon',
            seller: {
                name: 'Apple Premium Reseller',
                rating: 4.8,
                reviews: 5670,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-x/wc1000/168329456789012345.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/noutbuki-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 5,
            title: 'ASUS ZenBook 14 OLED UX3402ZA i5-1240P/16/512',
            price: 78990,
            marketplace: 'wildberries',
            seller: {
                name: 'ASUS Official Store',
                rating: 4.6,
                reviews: 3420,
                reputation: 'good'
            },
            image: 'https://basket-09.wbbasket.ru/vol1234/part123456/123456789/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 6,
            title: 'Lenovo IdeaPad 5 Pro 16 Ryzen 7/16/512',
            price: 65000,
            marketplace: 'avito',
            seller: {
                name: 'Компьютерный Мир',
                rating: 4.3,
                reviews: 1890,
                reputation: 'average'
            },
            image: 'https://a.avito.st/i/original/2/34/23456789012345678.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        }
    ],
    'наушники': [
        {
            id: 7,
            title: 'Sony WH-1000XM5 Wireless Noise Cancelling',
            price: 34990,
            marketplace: 'ozon',
            seller: {
                name: 'Sony Center',
                rating: 4.9,
                reviews: 7890,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-z/wc1000/169876543210987654.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/naushniki-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 8,
            title: 'AirPods Pro 2nd Generation with MagSafe',
            price: 24990,
            marketplace: 'wildberries',
            seller: {
                name: 'ElectroShop',
                rating: 4.5,
                reviews: 4560,
                reputation: 'good'
            },
            image: 'https://basket-11.wbbasket.ru/vol5678/part567890/567890123/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 9,
            title: 'JBL Tune 760NC Wireless Over-Ear',
            price: 8500,
            marketplace: 'avito',
            seller: {
                name: 'AudioExpert',
                rating: 4.2,
                reviews: 980,
                reputation: 'average'
            },
            image: 'https://a.avito.st/i/original/3/45/34567890123456789.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        }
    ],
    'игры': [
        {
            id: 10,
            title: 'The Last of Us Part II - PS4',
            price: 2499,
            marketplace: 'ozon',
            seller: {
                name: 'GameZone Official',
                rating: 4.8,
                reviews: 12340,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-a/wc1000/170123456789012345.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/igry-ps4-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 11,
            title: 'God of War Ragnarök - PS5',
            price: 5999,
            marketplace: 'wildberries',
            seller: {
                name: 'PlayStation Store',
                rating: 4.9,
                reviews: 8760,
                reputation: 'good'
            },
            image: 'https://basket-12.wbbasket.ru/vol6789/part678901/678901234/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 12,
            title: 'FIFA 24 - Xbox Series X',
            price: 4500,
            marketplace: 'avito',
            seller: {
                name: 'ИгроМаркет',
                rating: 4.4,
                reviews: 3450,
                reputation: 'good'
            },
            image: 'https://a.avito.st/i/original/4/56/45678901234567890.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        },
        {
            id: 13,
            title: 'Spider-Man 2 - PS5',
            price: 6499,
            marketplace: 'ozon',
            seller: {
                name: 'GameLand',
                rating: 4.7,
                reviews: 5670,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/170234567890123456.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/igry-ps5-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 14,
            title: 'Call of Duty: Modern Warfare III - PS4',
            price: 5299,
            marketplace: 'wildberries',
            seller: {
                name: 'GamesWorld',
                rating: 4.6,
                reviews: 4320,
                reputation: 'good'
            },
            image: 'https://basket-13.wbbasket.ru/vol7890/part789012/789012345/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 15,
            title: 'Hogwarts Legacy - Xbox One',
            price: 3999,
            marketplace: 'avito',
            seller: {
                name: 'MagicGames',
                rating: 4.5,
                reviews: 2890,
                reputation: 'good'
            },
            image: 'https://a.avito.st/i/original/5/67/56789012345678901.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        }
    ],
    'playstation': [
        {
            id: 16,
            title: 'Sony PlayStation 5 Slim Digital Edition',
            price: 49990,
            marketplace: 'ozon',
            seller: {
                name: 'Sony Official Store',
                rating: 4.9,
                reviews: 23450,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/170345678901234567.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/playstation-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 17,
            title: 'PlayStation 5 Standard Edition с дисководом',
            price: 54990,
            marketplace: 'wildberries',
            seller: {
                name: 'GameHub',
                rating: 4.8,
                reviews: 15670,
                reputation: 'good'
            },
            image: 'https://basket-14.wbbasket.ru/vol8901/part890123/890123456/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 18,
            title: 'PlayStation 4 Pro 1TB б/у',
            price: 25000,
            marketplace: 'avito',
            seller: {
                name: 'КонсольМаркет',
                rating: 4.3,
                reviews: 5670,
                reputation: 'average'
            },
            image: 'https://a.avito.st/i/original/6/78/67890123456789012.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        },
        {
            id: 19,
            title: 'Контроллер DualSense Wireless Controller',
            price: 6990,
            marketplace: 'ozon',
            seller: {
                name: 'AccessoryWorld',
                rating: 4.7,
                reviews: 8900,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/170456789012345678.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/accessories-ps5-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        }
    ],
    'xbox': [
        {
            id: 20,
            title: 'Xbox Series X 1TB Black',
            price: 52990,
            marketplace: 'ozon',
            seller: {
                name: 'Microsoft Store',
                rating: 4.9,
                reviews: 18760,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-e/wc1000/170567890123456789.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/xbox-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 21,
            title: 'Xbox Series S 512GB White',
            price: 29990,
            marketplace: 'wildberries',
            seller: {
                name: 'Xbox Official',
                rating: 4.8,
                reviews: 12340,
                reputation: 'good'
            },
            image: 'https://basket-15.wbbasket.ru/vol9012/part901234/901234567/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 22,
            title: 'Xbox One X 1TB б/у',
            price: 18000,
            marketplace: 'avito',
            seller: {
                name: 'XboxMarket',
                rating: 4.2,
                reviews: 3450,
                reputation: 'average'
            },
            image: 'https://a.avito.st/i/original/7/89/78901234567890123.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        },
        {
            id: 23,
            title: 'Контроллер Xbox Wireless Controller Carbon Black',
            price: 5990,
            marketplace: 'ozon',
            seller: {
                name: 'GameAccessories',
                rating: 4.6,
                reviews: 6780,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-f/wc1000/170678901234567890.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/accessories-xbox-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        }
    ],
    'камера': [
        {
            id: 24,
            title: 'Canon EOS R6 Mark II Body',
            price: 219990,
            marketplace: 'ozon',
            seller: {
                name: 'Canon Official Store',
                rating: 4.9,
                reviews: 8760,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-g/wc1000/170789012345678901.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/kamery-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 25,
            title: 'Sony Alpha A7 IV Body',
            price: 234990,
            marketplace: 'wildberries',
            seller: {
                name: 'Sony Camera Store',
                rating: 4.8,
                reviews: 6540,
                reputation: 'good'
            },
            image: 'https://basket-16.wbbasket.ru/vol0123/part012345/012345678/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 26,
            title: 'Nikon Z6 II Kit 24-70mm',
            price: 189990,
            marketplace: 'avito',
            seller: {
                name: 'PhotoPro',
                rating: 4.5,
                reviews: 4320,
                reputation: 'good'
            },
            image: 'https://a.avito.st/i/original/8/90/89012345678901234.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        }
    ],
    'часы': [
        {
            id: 27,
            title: 'Apple Watch Series 9 GPS 45mm Midnight',
            price: 42990,
            marketplace: 'ozon',
            seller: {
                name: 'Apple Authorized',
                rating: 4.9,
                reviews: 15670,
                reputation: 'good'
            },
            image: 'https://ir.ozone.ru/s3/multimedia-h/wc1000/170890123456789012.jpg',
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/smartwatch-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
        },
        {
            id: 28,
            title: 'Samsung Galaxy Watch6 Classic 47mm',
            price: 34990,
            marketplace: 'wildberries',
            seller: {
                name: 'Samsung Official',
                rating: 4.7,
                reviews: 9870,
                reputation: 'good'
            },
            image: 'https://basket-17.wbbasket.ru/vol1234/part123456/123456780/images/big/1.webp',
            url: CONFIG.marketplaces.wildberries.baseUrl + '/catalog/0/search.aspx' + CONFIG.marketplaces.wildberries.getFilterSuffix()
        },
        {
            id: 29,
            title: 'Xiaomi Mi Band 8 Pro',
            price: 5990,
            marketplace: 'avito',
            seller: {
                name: 'XiaomiStore',
                rating: 4.4,
                reviews: 5430,
                reputation: 'good'
            },
            image: 'https://a.avito.st/i/original/9/01/90123456789012345.jpg',
            url: CONFIG.marketplaces.avito.baseUrl + '/rossiya' + CONFIG.marketplaces.avito.getFilterSuffix()
        }
    ]
};

// DOM элементы
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const loadingDiv = document.getElementById('loading');
const resultsDiv = document.getElementById('results');
const productsGrid = document.getElementById('productsGrid');
const errorDiv = document.getElementById('error');
const resultsCount = document.getElementById('resultsCount');

// Элементы авторизации
const authButtons = document.getElementById('authButtons');
const userPanel = document.getElementById('userPanel');
const userNameSpan = document.getElementById('userName');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showLoginLink = document.getElementById('showLogin');
const showRegisterLink = document.getElementById('showRegister');
const closeModals = document.querySelectorAll('.close-modal');

// Проверка сохраненного пользователя
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Обновление UI авторизации
function updateAuthUI() {
    if (currentUser) {
        authButtons.classList.add('hidden');
        userPanel.classList.remove('hidden');
        userNameSpan.textContent = `👤 ${currentUser.name}`;
    } else {
        authButtons.classList.remove('hidden');
        userPanel.classList.add('hidden');
    }
}

// Инициализация UI авторизации
updateAuthUI();

// Открытие модального окна регистрации
registerBtn.addEventListener('click', () => {
    registerModal.classList.remove('hidden');
});

// Открытие модального окна входа
loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

// Закрытие модальных окон
closeModals.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.classList.add('hidden');
        registerModal.classList.add('hidden');
    });
});

// Закрытие по клику вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.add('hidden');
    }
    if (e.target === registerModal) {
        registerModal.classList.add('hidden');
    }
});

// Переключение между окнами
showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.classList.add('hidden');
    loginModal.classList.remove('hidden');
});

showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.add('hidden');
    registerModal.classList.remove('hidden');
});

// Обработка регистрации
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    // Валидация
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }
    
    if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов!');
        return;
    }
    
    // Сохранение пользователя в localStorage
    const newUser = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('users', JSON.stringify([...JSON.parse(localStorage.getItem('users') || '[]'), newUser]));
    
    currentUser = newUser;
    updateAuthUI();
    registerModal.classList.add('hidden');
    registerForm.reset();
    
    alert(`Добро пожаловать, ${name}! Регистрация успешна.`);
});

// Обработка входа
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    // Получаем пользователей из localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        loginModal.classList.add('hidden');
        loginForm.reset();
        alert(`С возвращением, ${user.name}!`);
    } else {
        alert('Пользователь с таким email не найден. Пожалуйста, зарегистрируйтесь.');
    }
});

// Обработка выхода
logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    alert('Вы успешно вышли из системы.');
});

// Категории кнопок
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        searchInput.value = category;
        searchProducts(category);
    });
});

// Функция поиска товаров
async function searchProducts(query) {
    showLoading();
    hideError();
    hideResults();

    try {
        // В реальном проекте здесь будет запрос к вашему API
        // const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        // const data = await response.json();
        
        // Для демонстрации используем моковые данные с задержкой
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const normalizedQuery = query.toLowerCase().trim();
        let products = [];
        
        // Ищем в моковых данных по ключевым словам
        for (const [key, value] of Object.entries(mockProducts)) {
            if (normalizedQuery.includes(key) || key.includes(normalizedQuery)) {
                products = value;
                break;
            }
        }
        
        // Если не нашли точного совпадения, генерируем демо-данные
        if (products.length === 0) {
            products = generateDemoProducts(query);
        }
        
        // Сортируем по цене и репутации (лучшие варианты первыми)
        products = sortProductsByPriceAndReputation(products);
        
        // Берем топ-3 лучших варианта
        const topProducts = products.slice(0, 3);
        
        displayResults(topProducts);
        
    } catch (error) {
        showError('Произошла ошибка при поиске товаров. Попробуйте позже.');
        console.error('Search error:', error);
    }
}

// Генерация демо-данных для произвольного запроса
function generateDemoProducts(query) {
    const prices = [
        { price: Math.floor(Math.random() * 5000) + 1000, marketplace: 'avito', reputation: 'average' },
        { price: Math.floor(Math.random() * 7000) + 2000, marketplace: 'ozon', reputation: 'good' },
        { price: Math.floor(Math.random() * 6000) + 1500, marketplace: 'wildberries', reputation: 'good' }
    ];

    return prices.map((item, index) => {
        const mpConfig = CONFIG.marketplaces[item.marketplace];
        // Формируем URL: baseUrl + путь категории/поиска + хвост фильтра
        // Для демонстрации используем разные пути в зависимости от маркетплейса
        let categoryPath = '';
        if (item.marketplace === 'ozon') {
            categoryPath = '/category/smartfony-15502/';
        } else if (item.marketplace === 'wildberries') {
            categoryPath = '/catalog/0/search.aspx';
        } else if (item.marketplace === 'avito') {
            categoryPath = '/rossiya';
        }
        
        const fullUrl = mpConfig.baseUrl + categoryPath + mpConfig.getFilterSuffix();
        
        return {
            id: Date.now() + index,
            title: `${query} - вариант ${index + 1}`,
            price: item.price,
            marketplace: item.marketplace,
            seller: {
                name: `Продавец ${String.fromCharCode(65 + index)}`,
                rating: item.reputation === 'good' ? (4.5 + Math.random() * 0.5).toFixed(1) : (3.5 + Math.random() * 0.8).toFixed(1),
                reviews: Math.floor(Math.random() * 5000) + 100,
                reputation: item.reputation
            },
            image: `https://picsum.photos/seed/${query}${index}/400/300`,
            url: fullUrl
        };
    });
}

// Сортировка товаров по цене и репутации
function sortProductsByPriceAndReputation(products) {
    return products.sort((a, b) => {
        // Сначала сортируем по репутации (good > average > bad)
        const reputationOrder = { good: 0, average: 1, bad: 2 };
        const repDiff = reputationOrder[a.seller.reputation] - reputationOrder[b.seller.reputation];
        
        if (repDiff !== 0) {
            return repDiff;
        }
        
        // Затем по рейтингу продавца
        const ratingDiff = b.seller.rating - a.seller.rating;
        if (Math.abs(ratingDiff) > 0.1) {
            return ratingDiff;
        }
        
        // И наконец по цене
        return a.price - b.price;
    });
}

// Отображение результатов
function displayResults(products) {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const card = createProductCard(product);
        productsGrid.appendChild(card);
    });
    
    resultsCount.textContent = products.length;
    showResults();
    hideLoading();
}

// Создание карточки товара
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const marketplaceInfo = CONFIG.marketplaces[product.marketplace];
    const stars = '★'.repeat(Math.floor(product.seller.rating)) + '☆'.repeat(5 - Math.floor(product.seller.rating));
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Нет+фото'">
        <div class="product-info">
            <span class="marketplace-badge ${product.marketplace}">
                <i class="fas ${marketplaceInfo.icon}"></i> ${marketplaceInfo.name}
            </span>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-price">${formatPrice(product.price)} ₽</div>
            
            <div class="seller-info">
                <div class="seller-name">🏪 ${product.seller.name}</div>
                <div class="seller-rating">
                    <span class="stars">${stars}</span>
                    <span>${product.seller.rating}</span>
                    <span>(${product.seller.reviews} отзывов)</span>
                    <span class="reputation-${product.seller.reputation}">
                        • ${getReputationText(product.seller.reputation)}
                    </span>
                </div>
            </div>
            
            <a href="${product.url}" target="_blank" rel="noopener noreferrer" class="buy-btn">
                Перейти на ${marketplaceInfo.name} →
            </a>
        </div>
    `;
    
    return card;
}

// Форматирование цены
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Текст репутации
function getReputationText(reputation) {
    const texts = {
        good: 'Отличная репутация',
        average: 'Хорошая репутация',
        bad: 'Есть жалобы'
    };
    return texts[reputation] || reputation;
}

// Управление видимостью элементов
function showLoading() {
    loadingDiv.classList.remove('hidden');
}

function hideLoading() {
    loadingDiv.classList.add('hidden');
}

function showResults() {
    resultsDiv.classList.remove('hidden');
}

function hideResults() {
    resultsDiv.classList.add('hidden');
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    hideLoading();
}

function hideError() {
    errorDiv.classList.add('hidden');
}

// Обработчик отправки формы
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    
    if (query) {
        searchProducts(query);
    }
});

// Поиск по Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchForm.dispatchEvent(new Event('submit'));
    }
});

// Приветственное сообщение в консоли
console.log('%c🔍 Поиск лучших цен запущен!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cВведите название товара для поиска на Ozon, Avito и Wildberries', 'color: #764ba2; font-size: 12px;');
