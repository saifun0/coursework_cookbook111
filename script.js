const recipes = [
    {
        id: 1,
        title: "Сырники классические",
        category: "breakfast",
        time: "20 мин",
        image: "https://images.unsplash.com/photo-1574783756547-258b3c720d20?auto=format&fit=crop&w=400&q=80",
        description: "Нежные и воздушные сырники из творога с румяной корочкой. Идеальный завтрак.",
        ingredients: ["Творог 5-9% - 400 г", "Яйцо - 1 шт", "Сахар - 2 ст. л.", "Мука - 2 ст. л.", "Ванилин - щепотка", "Масло для жарки"],
        instructions: ["Творог размять вилкой.", "Добавить яйцо, сахар и ванилин, тщательно перемешать.", "Добавить муку и вымесить тесто.", "Сформировать небольшие шарики, обвалять в муке и приплюснуть.", "Жарить на разогретой сковороде с маслом до золотистой корочки с обеих сторон."]
    },
    {
        id: 2,
        title: "Паста Карбонара",
        category: "dinner",
        time: "25 мин",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=400&q=80",
        description: "Традиционная итальянская паста с беконом, яйцами и сыром пармезан.",
        ingredients: ["Спагетти - 200 г", "Бекон (панчетта) - 150 г", "Желтки - 3 шт", "Пармезан - 50 г", "Черный перец - по вкусу", "Чеснок - 1 зубчик"],
        instructions: ["Отварить спагетти в подсоленной воде до состояния аль денте.", "Обжарить бекон с раздавленным зубчиком чеснока (чеснок потом убрать).", "В миске взбить желтки с тертым сыром и черным перцем.", "Переложить горячую пасту к бекону, добавить немного воды от варки пасты.", "Снять с огня, влить яично-сырную смесь и быстро перемешать, чтобы соус загустел, но не свернулся."]
    },
    {
        id: 3,
        title: "Греческий салат",
        category: "lunch",
        time: "15 мин",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80",
        description: "Легкий и свежий салат с овощами, сыром фета и оливками.",
        ingredients: ["Помидоры - 3 шт", "Огурцы - 2 шт", "Красный лук - 0.5 шт", "Перец болгарский - 1 шт", "Маслины - 100 г", "Сыр Фета - 150 г", "Оливковое масло - 3 ст. л.", "Орегано - 1 ч. л."],
        instructions: ["Помидоры, огурцы и перец нарезать крупными кубиками.", "Лук нарезать тонкими полукольцами.", "В глубокой миске смешать овощи и маслины.", "Заправить оливковым маслом, посыпать орегано и аккуратно перемешать.", "Сверху выложить крупно нарезанный сыр Фета."]
    },
    {
        id: 4,
        title: "Блинчики на молоке",
        category: "breakfast",
        time: "30 мин",
        image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&w=400&q=80",
        description: "Тонкие, ажурные и очень вкусные блинчики по классическому рецепту.",
        ingredients: ["Молоко - 500 мл", "Яйца - 3 шт", "Мука - 200 г", "Сахар - 2 ст. л.", "Соль - 0.5 ч. л.", "Масло растительное - 3 ст. л."],
        instructions: ["Взбить яйца с сахаром и солью.", "Добавить половину теплого молока и перемешать.", "Постепенно всыпать просеянную муку, постоянно помешивая венчиком, чтобы не было комочков.", "Влить оставшееся молоко и растительное масло, перемешать. Дать тесту постоять 15 минут.", "Выпекать блинчики на хорошо разогретой сковороде с двух сторон."]
    },
    {
        id: 5,
        title: "Запеченная куриная грудка",
        category: "dinner",
        time: "45 мин",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80",
        description: "Сочная куриная грудка, запеченная с травами в духовке. Отличный диетический ужин.",
        ingredients: ["Куриное филе - 2 шт", "Паприка - 1 ч. л.", "Чеснок сушеный - 1 ч. л.", "Соль, перец - по вкусу", "Оливковое масло - 2 ст. л."],
        instructions: ["Куриное филе промыть и обсушить бумажным полотенцем.", "Смешать масло, соль, перец, паприку и сушеный чеснок.", "Хорошо натереть мясо полученным маринадом со всех сторон.", "Выложить в форму для запекания.", "Запекать в разогретой до 200°C духовке около 25-30 минут до готовности."]
    },
    {
        id: 6,
        title: "Крем-суп из шампиньонов",
        category: "lunch",
        time: "40 мин",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80",
        description: "Нежный, густой и ароматный грибной крем-суп со сливками.",
        ingredients: ["Шампиньоны - 500 г", "Картофель - 3 шт", "Лук репчатый - 1 шт", "Сливки 20% - 200 мл", "Бульон (или вода) - 500 мл", "Сливочное масло - 30 г", "Соль, перец - по вкусу"],
        instructions: ["Лук мелко нарезать и обжарить на сливочном масле до прозрачности.", "Добавить нарезанные грибы и жарить до испарения жидкости.", "Картофель нарезать кубиками, залить бульоном и варить до готовности (около 15 минут).", "Добавить к картофелю обжаренные грибы с луком, посолить, поперчить и варить еще 5 минут.", "Пюрировать суп блендером. Влить сливки, прогреть, но не доводить до кипения."]
    }
];

// Элементы DOM
const recipesGrid = document.getElementById('recipes-grid');
const searchInput = document.getElementById('search-input');
const categoryFilters = document.querySelectorAll('.filter-btn');
const sectionTitle = document.getElementById('section-title');
const noResults = document.getElementById('no-results');
const randomBtn = document.getElementById('random-btn');
const favCount = document.getElementById('fav-count');
const headerFavBtn = document.getElementById('favorites-btn');

// Модальное окно
const modal = document.getElementById('recipe-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// Тема
const themeToggle = document.getElementById('theme-toggle');

// Состояние приложения
let currentFilter = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];

// Инициализация
function init() {
    updateFavCount();
    renderRecipes(recipes);
    initTheme();

    // Слушатели событий
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        applyFilters();
    });

    categoryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            
            sectionTitle.textContent = btn.textContent;
            applyFilters();
        });
    });

    randomBtn.addEventListener('click', showRandomRecipe);
    
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    themeToggle.addEventListener('click', toggleTheme);

    headerFavBtn.addEventListener('click', () => {
        const favFilterBtn = document.querySelector('.filter-btn[data-filter="favorites"]');
        if (favFilterBtn) favFilterBtn.click();
        
        // Для мобилок, если нужно будет скроллить к рецептам
        window.scrollTo({ top: document.querySelector('.recipes-section').offsetTop - 100, behavior: 'smooth' });
    });

    // Делегирование событий для сетки рецептов
    recipesGrid.addEventListener('click', (e) => {
        // Проверяем клик по кнопке "Избранное"
        const favBtn = e.target.closest('.btn-fav');
        if (favBtn) {
            const card = e.target.closest('.recipe-card');
            if (card) {
                const id = parseInt(card.dataset.id);
                toggleFavorite(id, favBtn);
            }
            return;
        }

        // Проверяем клик по карточке для открытия модалки
        const card = e.target.closest('.recipe-card');
        if (card) {
            const id = parseInt(card.dataset.id);
            openRecipe(id);
        }
    });
}

// Отрисовка рецептов
function renderRecipes(recipesToRender) {
    recipesGrid.innerHTML = '';
    
    if (recipesToRender.length === 0) {
        recipesGrid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    recipesGrid.classList.remove('hidden');
    noResults.classList.add('hidden');

    recipesToRender.forEach(recipe => {
        const isFav = favorites.includes(recipe.id);
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.dataset.id = recipe.id;
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="fa-regular fa-clock"></i> ${recipe.time}</span>
                    <span>${getCategoryName(recipe.category)}</span>
                </div>
                <p class="recipe-desc">${recipe.description}</p>
                <div class="recipe-actions">
                    <button class="btn-outline">Смотреть</button>
                    <button class="btn-fav ${isFav ? 'active' : ''}">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

// Применение фильтров и поиска
function applyFilters() {
    let filtered = recipes;

    // Фильтр по категории
    if (currentFilter === 'favorites') {
        filtered = filtered.filter(r => favorites.includes(r.id));
    } else if (currentFilter !== 'all') {
        filtered = filtered.filter(r => r.category === currentFilter);
    }

    // Фильтр по поиску
    if (searchQuery) {
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(searchQuery) || 
            r.ingredients.some(i => i.toLowerCase().includes(searchQuery))
        );
    }

    renderRecipes(filtered);
}

// Избранное
