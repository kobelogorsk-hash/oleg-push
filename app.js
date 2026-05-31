// GameMarket - Маркетплейс игровых товаров и услуг

// Данные игр
const games = {
    wow: { name: 'World of Warcraft', icon: '⚔️' },
    cs2: { name: 'Counter-Strike 2', icon: '🔫' },
    dota2: { name: 'Dota 2', icon: '🛡️' },
    lostark: { name: 'Lost Ark', icon: '🏴‍☠️' },
    pathofexile: { name: 'Path of Exile', icon: '💀' },
    escape: { name: 'Escape from Tarkov', icon: '🎯' },
    genshin: { name: 'Genshin Impact', icon: '✨' },
    lineage: { name: 'Lineage 2', icon: '🏰' },
    albion: { name: 'Albion Online', icon: '🗡️' },
    destiny2: { name: 'Destiny 2', icon: '🌌' },
    warframe: { name: 'Warframe', icon: '🤖' },
    diablo4: { name: 'Diablo IV', icon: '😈' },
    ff14: { name: 'Final Fantasy XIV', icon: '🐉' },
    poe2: { name: 'Path of Exile 2', icon: '💎' },
    throne: { name: 'Throne and Liberty', icon: '👑' },
    once: { name: 'Once Human', icon: '🧟' }
};

// Категории товаров
const categories = {
    currency: { name: 'Валюта', icon: '💰' },
    items: { name: 'Предметы', icon: '📦' },
    accounts: { name: 'Аккаунты', icon: '👤' },
    boosting: { name: 'Бустинг', icon: '🚀' },
    services: { name: 'Услуги', icon: '🛠️' }
};

// Продавцы
const sellers = [
    { id: 1, name: 'GameMaster Pro', rating: 5.0, reviews: 2847, verified: true },
    { id: 2, name: 'EpicLoot Store', rating: 4.9, reviews: 1923, verified: true },
    { id: 3, name: 'PowerBoost Team', rating: 4.8, reviews: 1456, verified: true },
    { id: 4, name: 'GoldFarm Kings', rating: 4.7, reviews: 987, verified: false },
    { id: 5, name: 'ItemShop Elite', rating: 4.9, reviews: 2156, verified: true },
    { id: 6, name: 'AccountHub', rating: 4.6, reviews: 743, verified: false },
    { id: 7, name: 'RaidCarry Pro', rating: 5.0, reviews: 1678, verified: true },
    { id: 8, name: 'CurrencyExpress', rating: 4.8, reviews: 1234, verified: true }
];

// Товары
const products = [
    // World of Warcraft
    {
        id: 1,
        title: '1000 Золота WoW The War Within',
        game: 'wow',
        category: 'currency',
        price: 450,
        seller: sellers[0],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Быстрая доставка золота в течение 30 минут',
        popular: true
    },
    {
        id: 2,
        title: 'Эпический маунт "Призрачный тигр"',
        game: 'wow',
        category: 'items',
        price: 2500,
        seller: sellers[1],
        image: 'https://images.unsplash.com/photo-1642430065844-7c2dc8a7ab2a?w=400&h=300&fit=crop',
        description: 'Редкий маунт с уникальным внешним видом'
    },
    {
        id: 3,
        title: 'Прохождение рейда Mythic+',
        game: 'wow',
        category: 'boosting',
        price: 3500,
        seller: sellers[2],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Профессиональный буст ключей до 20 уровня'
    },
    {
        id: 4,
        title: 'Аккаунт WoW 110 уровень, все профессии',
        game: 'wow',
        category: 'accounts',
        price: 8900,
        seller: sellers[5],
        image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop',
        description: 'Полный доступ, почта и телефон привязаны'
    },
    
    // Counter-Strike 2
    {
        id: 5,
        title: 'AK-47 | Asiimov (Field-Tested)',
        game: 'cs2',
        category: 'items',
        price: 4200,
        seller: sellers[4],
        image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400&h=300&fit=crop',
        description: 'Чистый флоут 0.18, без царапин',
        popular: true
    },
    {
        id: 6,
        title: 'AWP | Dragon Lore (Minimal Wear)',
        game: 'cs2',
        category: 'items',
        price: 125000,
        seller: sellers[1],
        image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=400&h=300&fit=crop',
        description: 'Легендарная снайперская винтовка'
    },
    {
        id: 7,
        title: 'Prime Status Upgrade',
        game: 'cs2',
        category: 'services',
        price: 1200,
        seller: sellers[7],
        image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop',
        description: 'Активация Prime статуса за 5 минут'
    },
    {
        id: 8,
        title: 'Буст звания до Global Elite',
        game: 'cs2',
        category: 'boosting',
        price: 5500,
        seller: sellers[2],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Буст по вашему аккаунту или на буст аккаунте'
    },
    
    // Dota 2
    {
        id: 9,
        title: 'Arcana для Phantom Assassin',
        game: 'dota2',
        category: 'items',
        price: 2800,
        seller: sellers[4],
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400&h=300&fit=crop',
        description: 'Новая Arcana с анимациями и эффектами'
    },
    {
        id: 10,
        title: 'Буст MMR до 5000',
        game: 'dota2',
        category: 'boosting',
        price: 4500,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Профессиональный буст рейтинга'
    },
    {
        id: 11,
        title: 'Набор сокровищниц (10 шт)',
        game: 'dota2',
        category: 'items',
        price: 350,
        seller: sellers[3],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Свежие сокровищницы с новыми предметами'
    },
    
    // Lost Ark
    {
        id: 12,
        title: '1000 Золота Lost Ark',
        game: 'lostark',
        category: 'currency',
        price: 680,
        seller: sellers[0],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Золото сервера Арузия, быстрая доставка'
    },
    {
        id: 13,
        title: 'Буст Item Level до 1490',
        game: 'lostark',
        category: 'boosting',
        price: 7500,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Полное прохождение контента до 1490 ilvl'
    },
    {
        id: 14,
        title: 'Аккаунт Lost Ark 1415 ILVL',
        game: 'lostark',
        category: 'accounts',
        price: 12000,
        seller: sellers[5],
        image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop',
        description: 'Развитый аккаунт с полным набором экипировки'
    },
    
    // Path of Exile
    {
        id: 15,
        title: '100 Дивайн орбов PoE',
        game: 'pathofexile',
        category: 'currency',
        price: 3200,
        seller: sellers[3],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Валюта для лиги 3.23, мгновенная доставка'
    },
    {
        id: 16,
        title: 'Буст 100 уровней',
        game: 'pathofexile',
        category: 'boosting',
        price: 2500,
        seller: sellers[2],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Быстрый подъем уровня любым билдом'
    },
    
    // Escape from Tarkov
    {
        id: 17,
        title: '1000000 Рублей Tarkov',
        game: 'escape',
        category: 'currency',
        price: 1800,
        seller: sellers[7],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Рубли на любом сервере, безопасно'
    },
    {
        id: 18,
        title: 'Буст КД до 3.0',
        game: 'escape',
        category: 'boosting',
        price: 4000,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Поднимем ваш KD до нужного значения'
    },
    {
        id: 19,
        title: 'Edge of Darkness Edition',
        game: 'escape',
        category: 'accounts',
        price: 15000,
        seller: sellers[5],
        image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop',
        description: 'Полное издание с всеми DLC и бонусами'
    },
    
    // Genshin Impact
    {
        id: 20,
        title: '10000 Кристаллов Удачи',
        game: 'genshin',
        category: 'currency',
        price: 950,
        seller: sellers[0],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Премиум валюта для молитв',
        popular: true
    },
    {
        id: 21,
        title: 'Аккаунт AR 55, 15 легенд',
        game: 'genshin',
        category: 'accounts',
        price: 25000,
        seller: sellers[5],
        image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop',
        description: 'Жуэли, Ху Тао, Райдэн и другие топовые персонажи'
    },
    {
        id: 22,
        title: 'Фарм ресурсов (1 неделя)',
        game: 'genshin',
        category: 'services',
        price: 800,
        seller: sellers[7],
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400&h=300&fit=crop',
        description: 'Ежедневный фарм смолы и ресурсов'
    },
    
    // Lineage 2
    {
        id: 23,
        title: '100M Аден Lineage 2',
        game: 'lineage',
        category: 'currency',
        price: 550,
        seller: sellers[3],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Адена на любом официальном сервере'
    },
    {
        id: 24,
        title: 'Аккаунт 85 уровень, Full BA',
        game: 'lineage',
        category: 'accounts',
        price: 18000,
        seller: sellers[5],
        image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop',
        description: 'Топовый аккаунт с полной экипировкой'
    },
    {
        id: 25,
        title: 'Прохождение Олимпиады',
        game: 'lineage',
        category: 'boosting',
        price: 3000,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Набивка очков олимпиады для получения статуса Героя'
    },
    
    // Дополнительные товары
    {
        id: 26,
        title: 'Мифический меч "Громовой клинок"',
        game: 'wow',
        category: 'items',
        price: 5500,
        seller: sellers[1],
        image: 'https://images.unsplash.com/photo-1642430065844-7c2dc8a7ab2a?w=400&h=300&fit=crop',
        description: 'Легендарное оружие с уникальными свойствами'
    },
    {
        id: 27,
        title: 'M4A4 | Howl (Factory New)',
        game: 'cs2',
        category: 'items',
        price: 285000,
        seller: sellers[1],
        image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=400&h=300&fit=crop',
        description: 'Контрабандная винтовка в идеальном состоянии'
    },
    {
        id: 28,
        title: 'Комплект трансмогрификации',
        game: 'wow',
        category: 'items',
        price: 1200,
        seller: sellers[4],
        image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400&h=300&fit=crop',
        description: 'Полный сет редкого трансмога'
    },
    {
        id: 29,
        title: 'Обучение игре на роли Support',
        game: 'dota2',
        category: 'services',
        price: 1500,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Персональное обучение от топ игрока'
    },
    {
        id: 30,
        title: '5000 Золота WoW',
        game: 'wow',
        category: 'currency',
        price: 2100,
        seller: sellers[0],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Большой пакет золота со скидкой'
    },
    
    // Albion Online
    {
        id: 31,
        title: '10000 Серебра Albion',
        game: 'albion',
        category: 'currency',
        price: 380,
        seller: sellers[3],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Серебро на любом сервере, быстрая доставка'
    },
    {
        id: 32,
        title: 'Premium статус 30 дней',
        game: 'albion',
        category: 'services',
        price: 1200,
        seller: sellers[7],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Активация премиум статуса на месяц'
    },
    {
        id: 33,
        title: 'Аккаунт 2000 IP, полный сет',
        game: 'albion',
        category: 'accounts',
        price: 4500,
        seller: sellers[5],
        image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop',
        description: 'Развитый аккаунт с экипировкой'
    },
    
    // Destiny 2
    {
        id: 34,
        title: '1000 Света (Bright Dust)',
        game: 'destiny2',
        category: 'currency',
        price: 450,
        seller: sellers[0],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Валюта для покупки косметики'
    },
    {
        id: 35,
        title: 'Буст Power Level до 1800',
        game: 'destiny2',
        category: 'boosting',
        price: 3200,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Прокачка уровня силы'
    },
    {
        id: 36,
        title: 'Exotic оружие на выбор',
        game: 'destiny2',
        category: 'items',
        price: 1800,
        seller: sellers[4],
        image: 'https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=400&h=300&fit=crop',
        description: 'Любое экзотическое оружие'
    },
    
    // Warframe
    {
        id: 37,
        title: '500 Платины Warframe',
        game: 'warframe',
        category: 'currency',
        price: 650,
        seller: sellers[3],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Премиум валюта для покупок'
    },
    {
        id: 38,
        title: 'Warframe Baruuk Prime',
        game: 'warframe',
        category: 'items',
        price: 2200,
        seller: sellers[1],
        image: 'https://images.unsplash.com/photo-1642430065844-7c2dc8a7ab2a?w=400&h=300&fit=crop',
        description: 'Прайм варфрейм в комплекте'
    },
    {
        id: 39,
        title: 'Фарм ресурсов (1 неделя)',
        game: 'warframe',
        category: 'services',
        price: 900,
        seller: sellers[7],
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400&h=300&fit=crop',
        description: 'Ежедневный фарм ресурсов и кредитов'
    },
    
    // Diablo IV
    {
        id: 40,
        title: '1000000 Золота Diablo 4',
        game: 'diablo4',
        category: 'currency',
        price: 1500,
        seller: sellers[0],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Золото для любых нужд'
    },
    {
        id: 41,
        title: 'Буст до 100 уровня',
        game: 'diablo4',
        category: 'boosting',
        price: 4800,
        seller: sellers[2],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Максимальный уровень за вас'
    },
    {
        id: 42,
        title: 'Легендарный сет на класс',
        game: 'diablo4',
        category: 'items',
        price: 3500,
        seller: sellers[4],
        image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400&h=300&fit=crop',
        description: 'Полный комплект легендарок'
    },
    
    // Final Fantasy XIV
    {
        id: 43,
        title: '1000000 Гил FFXIV',
        game: 'ff14',
        category: 'currency',
        price: 890,
        seller: sellers[3],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Игровая валюта Gil'
    },
    {
        id: 44,
        title: 'Буст Job до 90 уровня',
        game: 'ff14',
        category: 'boosting',
        price: 2800,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Прокачка любой профессии'
    },
    {
        id: 45,
        title: 'Редкий маунт "Феникс"',
        game: 'ff14',
        category: 'items',
        price: 4200,
        seller: sellers[1],
        image: 'https://images.unsplash.com/photo-1642430065844-7c2dc8a7ab2a?w=400&h=300&fit=crop',
        description: 'Эксклюзивный транспорт'
    },
    
    // Path of Exile 2
    {
        id: 46,
        title: '50 Divine Orbs PoE 2',
        game: 'poe2',
        category: 'currency',
        price: 2100,
        seller: sellers[3],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Валюта для крафта'
    },
    {
        id: 47,
        title: 'Буст 100 уровней PoE 2',
        game: 'poe2',
        category: 'boosting',
        price: 2900,
        seller: sellers[2],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Быстрый подъем уровня'
    },
    
    // Throne and Liberty
    {
        id: 48,
        title: '100000 Солариумов T&L',
        game: 'throne',
        category: 'currency',
        price: 720,
        seller: sellers[0],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Основная валюта игры'
    },
    {
        id: 49,
        title: 'Буст уровня персонажа 50+',
        game: 'throne',
        category: 'boosting',
        price: 3800,
        seller: sellers[6],
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
        description: 'Прокачка до максимального уровня'
    },
    
    // Once Human
    {
        id: 50,
        title: '5000 Стекловидных слитков',
        game: 'once',
        category: 'currency',
        price: 580,
        seller: sellers[7],
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=300&fit=crop',
        description: 'Редкая валюта для крафта'
    },
    {
        id: 51,
        title: 'Легендарное оружие',
        game: 'once',
        category: 'items',
        price: 2400,
        seller: sellers[4],
        image: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400&h=300&fit=crop',
        description: 'Мощное оружие для выживания'
    },
    {
        id: 52,
        title: 'Базовая помощь в развитии',
        game: 'once',
        category: 'services',
        price: 950,
        seller: sellers[7],
        image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=400&h=300&fit=crop',
        description: 'Помощь в старте и развитии базы'
    }
];

// Состояние приложения
let state = {
    cart: [],
    currentCategory: 'all',
    selectedGames: ['wow', 'cs2', 'dota2', 'lostark', 'pathofexile', 'escape', 'genshin', 'lineage', 'albion', 'destiny2', 'warframe', 'diablo4', 'ff14', 'poe2', 'throne', 'once'],
    minPrice: 0,
    maxPrice: 100000,
    minRating: 0,
    sortBy: 'popular',
    searchQuery: ''
};

// DOM элементы
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const applyFiltersBtn = document.getElementById('applyFilters');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const categoryTitle = document.getElementById('categoryTitle');
const navLinks = document.querySelectorAll('.nav-link');
const notifications = document.getElementById('notifications');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// Настройка обработчиков событий
function setupEventListeners() {
    // Корзина
    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) toggleCart();
    });
    checkoutBtn.addEventListener('click', checkout);
    
    // Поиск
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase();
        renderProducts();
    });
    
    // Сортировка
    sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });
    
    // Навигация по категориям
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            state.currentCategory = link.dataset.category;
            updateCategoryTitle();
            renderProducts();
        });
    });
    
    // Фильтры
    applyFiltersBtn.addEventListener('click', applyFilters);
    
    // Загрузить ещё
    loadMoreBtn.addEventListener('click', () => {
        showNotification('Больше товаров загружается...', 'info');
    });
}

// Применение фильтров
function applyFilters() {
    const checkboxes = document.querySelectorAll('input[name="game"]:checked');
    state.selectedGames = Array.from(checkboxes).map(cb => cb.value);
    
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    state.minPrice = parseFloat(minPriceInput.value) || 0;
    state.maxPrice = parseFloat(maxPriceInput.value) || 100000;
    
    const ratingRadios = document.querySelectorAll('input[name="rating"]');
    ratingRadios.forEach(radio => {
        if (radio.checked) {
            state.minRating = radio.value === 'all' ? 0 : parseFloat(radio.value);
        }
    });
    
    renderProducts();
    showNotification('Фильтры применены', 'success');
}

// Обновление заголовка категории
function updateCategoryTitle() {
    const titles = {
        all: '🎮 Все товары',
        currency: '💰 Валюта',
        items: '📦 Предметы',
        accounts: '👤 Аккаунты',
        boosting: '🚀 Бустинг',
        services: '🛠️ Услуги'
    };
    categoryTitle.textContent = titles[state.currentCategory] || '🎮 Все товары';
}

// Фильтрация и сортировка товаров
function getFilteredProducts() {
    let filtered = [...products];
    
    // Фильтр по категории
    if (state.currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === state.currentCategory);
    }
    
    // Фильтр по играм
    filtered = filtered.filter(p => state.selectedGames.includes(p.game));
    
    // Фильтр по цене
    filtered = filtered.filter(p => p.price >= state.minPrice && p.price <= state.maxPrice);
    
    // Фильтр по рейтингу продавца
    filtered = filtered.filter(p => p.seller.rating >= state.minRating);
    
    // Поиск
    if (state.searchQuery) {
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(state.searchQuery) ||
            p.description.toLowerCase().includes(state.searchQuery)
        );
    }
    
    // Сортировка
    switch (state.sortBy) {
        case 'price_asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price_desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.seller.rating - a.seller.rating);
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
        default:
            filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }
    
    return filtered;
}

// Отрисовка товаров
function renderProducts() {
    const filtered = getFilteredProducts();
    
    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <span style="font-size: 4rem; display: block; margin-bottom: 20px;">🔍</span>
                <h3 style="color: var(--text-secondary);">Товары не найдены</h3>
                <p style="color: var(--text-secondary); opacity: 0.7;">Попробуйте изменить параметры поиска или фильтры</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
    
    // Добавляем обработчики к кнопкам
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.product-card').dataset.id);
            addToCart(productId);
        });
    });
    
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.textContent = e.target.textContent === '♡' ? '♥' : '♡';
            showNotification('Добавлено в избранное', 'success');
        });
    });
}

// Создание карточки товара
function createProductCard(product) {
    const game = games[product.game];
    const category = categories[product.category];
    const stars = '★'.repeat(Math.floor(product.seller.rating)) + '☆'.repeat(5 - Math.floor(product.seller.rating));
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
                <span class="product-badge badge-${product.category}">${category.name}</span>
            </div>
            <div class="product-info">
                <div class="product-game">${game.icon} ${game.name}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${formatPrice(product.price)} ₽</div>
                
                <div class="seller-info">
                    <div class="seller-name">
                        ${product.seller.verified ? '✓ ' : ''}${product.seller.name}
                    </div>
                    <div class="seller-rating">
                        <span class="stars">${stars}</span>
                        <span>${product.seller.rating}</span>
                        <span>(${product.seller.reviews})</span>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-btn">
                        <span>🛒</span> В корзину
                    </button>
                    <button class="favorite-btn">♡</button>
                </div>
            </div>
        </div>
    `;
}

// Форматирование цены
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Корзина
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = state.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }
    
    saveCartToStorage();
    updateCartUI();
    showNotification(`"${product.title}" добавлен в корзину`, 'success');
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
    renderCartItems();
}

function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    
    if (totalCount > 0) {
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
}

function renderCartItems() {
    if (state.cart.length === 0) {
        cartItems.classList.add('hidden');
        cartEmpty.classList.remove('hidden');
        cartTotal.textContent = '0 ₽';
        return;
    }
    
    cartItems.classList.remove('hidden');
    cartEmpty.classList.add('hidden');
    
    cartItems.innerHTML = state.cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${formatPrice(item.price)} ₽ × ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');
    
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${formatPrice(total)} ₽`;
}

function toggleCart() {
    renderCartItems();
    cartModal.classList.toggle('hidden');
    document.body.style.overflow = cartModal.classList.contains('hidden') ? '' : 'hidden';
}

function checkout() {
    if (state.cart.length === 0) {
        showNotification('Корзина пуста', 'error');
        return;
    }
    
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Заказ оформлен! Сумма: ${formatPrice(total)} ₽`, 'success');
    state.cart = [];
    saveCartToStorage();
    updateCartUI();
    toggleCart();
}

// Local Storage
function saveCartToStorage() {
    localStorage.setItem('gamemarket_cart', JSON.stringify(state.cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('gamemarket_cart');
    if (saved) {
        try {
            state.cart = JSON.parse(saved);
        } catch (e) {
            state.cart = [];
        }
    }
}

// Уведомления
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
        <span>${message}</span>
    `;
    
    notifications.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Экспорт функции для удаления из корзины (глобальная область видимости)
window.removeFromCart = removeFromCart;

console.log('%c🎮 GameMarket запущен!', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
console.log('%cДобро пожаловать на маркетплейс игровых товаров!', 'color: #00ff88; font-size: 12px;');
