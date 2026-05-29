// Конфигурация API (для демонстрации используются моковые данные)
// В реальном проекте здесь должны быть URL ваших backend API

const CONFIG = {
    // Базовые URL маркетплейсов и функции для получения хвоста URL с фильтрами
    marketplaces: {
        ozon: {
            name: 'Ozon',
            baseUrl: 'https://www.ozon.ru',
            // Возвращает только параметры фильтра (хвост URL) для категории/поиска
            // Фильтр: цена до 10000 руб, сортировка от дешевых к дорогим
            // Пример использования: baseUrl + '/category/smartfony-15502/' + getFilterSuffix()
            // Результат: https://www.ozon.ru/category/smartfony-15502/?currency_price=448.000%3B10000.000&from=0&to=10000&sorting=price
            getFilterSuffix: () => '?currency_price=448.000%3B10000.000&from=0&to=10000&sorting=price',
            color: '#005bff'
        },
        wildberries: {
            name: 'Wildberries',
            baseUrl: 'https://www.wildberries.ru',
            // Возвращает только параметры фильтра (хвост URL)
            // Фильтр: цена до 10000 руб, сортировка от дешевых к дорогим
            // Пример использования: baseUrl + '/catalog/0/search.aspx' + getFilterSuffix()
            // Результат: https://www.wildberries.ru/catalog/0/search.aspx?page=1&sort=priceup&search=телефон&priceU=3300%3B1000000&meta_charcs=true
            getFilterSuffix: () => '?page=1&sort=priceup&search=%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD&priceU=3300%3B1000000&meta_charcs=true',
            color: '#cb11ab'
        },
        yandex: {
            name: 'Яндекс Маркет',
            baseUrl: 'https://market.yandex.ru',
            // Возвращает только параметры фильтра (хвост URL)
            // Фильтр: цена до 10000 руб, сортировка от дешевых к дорогим
            getFilterSuffix: () => '?price=0%3A10000&how=price',
            color: '#fc3f1d'
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
            marketplace: 'yandex',
            seller: {
                name: 'Яндекс Маркет Официальный',
                rating: 4.8,
                reviews: 12340,
                reputation: 'good'
            },
            image: 'https://avatars.mds.yandex.net/get-altouch/1234567/abc123def456',
            url: CONFIG.marketplaces.yandex.baseUrl + '/search' + CONFIG.marketplaces.yandex.getFilterSuffix()
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
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/smartfony-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
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
            marketplace: 'yandex',
            seller: {
                name: 'Компьютерный Мир',
                rating: 4.5,
                reviews: 2890,
                reputation: 'good'
            },
            image: 'https://avatars.mds.yandex.net/get-altouch/2345678/def456ghi789',
            url: CONFIG.marketplaces.yandex.baseUrl + '/search' + CONFIG.marketplaces.yandex.getFilterSuffix()
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
            url: CONFIG.marketplaces.ozon.baseUrl + '/category/smartfony-15502/' + CONFIG.marketplaces.ozon.getFilterSuffix()
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
            marketplace: 'yandex',
            seller: {
                name: 'AudioExpert',
                rating: 4.4,
                reviews: 1980,
                reputation: 'good'
            },
            image: 'https://avatars.mds.yandex.net/get-altouch/3456789/ghi789jkl012',
            url: CONFIG.marketplaces.yandex.baseUrl + '/search' + CONFIG.marketplaces.yandex.getFilterSuffix()
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
        { price: Math.floor(Math.random() * 7000) + 2000, marketplace: 'ozon', reputation: 'good' },
        { price: Math.floor(Math.random() * 6000) + 1500, marketplace: 'wildberries', reputation: 'good' },
        { price: Math.floor(Math.random() * 6500) + 1800, marketplace: 'yandex', reputation: 'good' }
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
        } else if (item.marketplace === 'yandex') {
            categoryPath = '/search';
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
            <span class="marketplace-badge ${product.marketplace}">${marketplaceInfo.name}</span>
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
console.log('%cВведите название товара для поиска на Ozon, Wildberries и Яндекс Маркет', 'color: #764ba2; font-size: 12px;');
