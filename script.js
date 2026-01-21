document.addEventListener('DOMContentLoaded', () => {

    // === ПАРАЛЛАКС ФОН (Движение от мышки) ===
    const layers = document.querySelectorAll('.layer');
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        layers[0].style.transform = `translateX(${x}px) translateY(${y}px)`; // Фон
        layers[1].style.transform = `translateX(${x * 2}px) translateY(${y * 2}px)`; // Звезды
        layers[2].style.transform = `translateX(${x * 0.5}px) translateY(${y * 0.5}px)`; // Туман
    });

    // === ИКОНКИ КАТЕГОРИЙ ===
    const categoryIcons = {
        "Избранное": "fa-solid fa-star",
        "Главное": "fa-solid fa-house-chimney",
        "Утилиты": "fa-solid fa-toolbox",
        "AI / Нейро": "fa-solid fa-brain",
        "Minecraft": "fa-solid fa-cubes",
        "Визуал": "fa-solid fa-palette",
        "Фан": "fa-solid fa-gamepad",
        "Кино и Аниме": "fa-solid fa-film", // Новая категория
        "Аудио": "fa-solid fa-music",
        "IT / Код": "fa-solid fa-laptop-code",
        "Магазины": "fa-solid fa-cart-shopping",
        "Учеба": "fa-solid fa-graduation-cap"
    };

    // === БАЗА ДАННЫХ ===
    // Поле 'details' - это длинное описание (20-200 символов) для модального окна
    const db = [
        // === ГЛАВНОЕ ===
        { cat: "Главное", name: "Vesperia SMP", url: "https://vesperiasmp.ru/", desc: "Главный сервер", details: "Официальный сайт сервера Vesperia SMP. Здесь можно купить проходку, узнать новости, посмотреть карту мира и зайти в личный кабинет игрока." },
        { cat: "Главное", name: "Bisquit Host", url: "https://bisquit.host/", desc: "Хостинг серверов", details: "Надежный хостинг для игровых серверов Minecraft. Удобная панель управления, защита от DDoS и низкий пинг." },
        { cat: "Главное", name: "Telegram Web", url: "https://web.telegram.org/", desc: "Мессенджер", details: "Веб-версия популярного мессенджера Telegram. Быстрый обмен сообщениями, файлами и видео прямо в браузере." },
        { cat: "Главное", name: "Discord", url: "https://discord.com/login", desc: "Войс чаты", details: "Место для общения сообществ и друзей. Голосовые каналы, стримы и текстовые чаты для геймеров." },
        { cat: "Главное", name: "YouTube", url: "https://www.youtube.com/", desc: "Видеохостинг", details: "Крупнейшая в мире видеоплатформа. Стримы, блоги, музыка, обучение и развлечения на любой вкус." },
        { cat: "Главное", name: "VK", url: "https://vk.com/", desc: "ВКонтакте", details: "Крупнейшая социальная сеть в России и СНГ. Музыка, видео, мессенджер и сообщества по интересам." },
        { cat: "Главное", name: "Twitch", url: "https://www.twitch.tv/", desc: "Стримы", details: "Платформа для прямых трансляций. Игровые стримы, киберспорт, музыка и общение с чатом в реальном времени." },
        { cat: "Главное", name: "Gmail", url: "https://mail.google.com/", desc: "Почта", details: "Электронная почта от Google. Безопасность, защита от спама и интеграция со всеми сервисами Google." },
        { cat: "Главное", name: "Яндекс Диск", url: "https://disk.yandex.ru/", desc: "Облако", details: "Облачное хранилище для ваших файлов. Безопасное хранение фото и документов с доступом с любого устройства." },
        { cat: "Главное", name: "Google Drive", url: "https://drive.google.com/", desc: "Гугл Диск", details: "Облачное хранилище файлов от Google. Удобная работа с документами, таблицами и презентациями онлайн." },
        { cat: "Главное", name: "Pinterest", url: "https://www.pinterest.com/", desc: "Идеи и фото", details: "Социальная сеть для поиска визуальных идей. Вдохновение для дизайна, артов, моды и творчества." },
        { cat: "Главное", name: "Reddit", url: "https://www.reddit.com/", desc: "Форум интернета", details: "Главная страница интернета. Тысячи сообществ, обсуждения новостей, мемы и ответы на любые вопросы." },
        { cat: "Главное", name: "TikTok", url: "https://www.tiktok.com/", desc: "Короткие видео", details: "Платформа для создания и просмотра коротких видеороликов. Тренды, музыка и юмор." },
        { cat: "Главное", name: "Rutube", url: "https://rutube.ru/", desc: "Видео РФ", details: "Российский видеохостинг. Телешоу, сериалы, блоги и прямые эфиры телеканалов." },
        { cat: "Главное", name: "Google Maps", url: "https://www.google.com/maps", desc: "Карты мира", details: "Подробные карты всего мира. Навигация, панорамы улиц, поиск мест и маршрутов." },
        { cat: "Главное", name: "2GIS", url: "https://2gis.ru/", desc: "Карты городов", details: "Самые точные карты городов с справочником организаций. Работает оффлайн, показывает входы в здания." },
        { cat: "Главное", name: "Gismeteo", url: "https://www.gismeteo.ru/", desc: "Погода", details: "Точный прогноз погоды на сегодня, завтра и на две недели для любой точки мира." },
        { cat: "Главное", name: "WhatsApp Web", url: "https://web.whatsapp.com/", desc: "Ватсап", details: "Веб-версия мессенджера WhatsApp. Синхронизация переписок с телефоном." },
        { cat: "Главное", name: "Zoom", url: "https://zoom.us/", desc: "Видеозвонки", details: "Платформа для видеоконференций и вебинаров. Отличное качество связи и демонстрация экрана." },

        // === УТИЛИТЫ ===
        { cat: "Утилиты", name: "Cobalt Tools", url: "https://cobalt.tools/", desc: "Скачать видео", details: "Лучший сервис для скачивания видео с YouTube, TikTok, Twitter без водяных знаков и рекламы. Чистый интерфейс." },
        { cat: "Утилиты", name: "VirusTotal", url: "https://www.virustotal.com/", desc: "Антивирус", details: "Проверка файлов и ссылок на вирусы с помощью 70+ антивирусных движков одновременно." },
        { cat: "Утилиты", name: "DeepL", url: "https://www.deepl.com/translator", desc: "Переводчик", details: "Самый точный онлайн-переводчик в мире. Использует нейросети для понимания контекста и нюансов языка." },
        { cat: "Утилиты", name: "Convertio", url: "https://convertio.co/ru/", desc: "Конвертер", details: "Универсальный конвертер файлов. Поддерживает более 300 форматов (аудио, видео, документы, изображения)." },
        { cat: "Утилиты", name: "TempMail", url: "https://temp-mail.org/", desc: "Временная почта", details: "Одноразовая почта для анонимных регистраций. Защищает ваш основной ящик от спама." },
        { cat: "Утилиты", name: "SpeedTest", url: "https://www.speedtest.net/", desc: "Тест скорости", details: "Глобальный стандарт проверки скорости интернета. Измеряет пинг, скачивание и загрузку." },
        { cat: "Утилиты", name: "Check-Host", url: "https://check-host.net/", desc: "Чек IP и пинга", details: "Инструмент для проверки доступности сайта из разных стран, узнать IP адрес и информацию о домене." },
        { cat: "Утилиты", name: "Remove.bg", url: "https://www.remove.bg/", desc: "Удалить фон", details: "Автоматическое удаление фона с изображений за 5 секунд. Идеально для создания стикеров и мемов." },
        { cat: "Утилиты", name: "Photopea", url: "https://www.photopea.com/", desc: "Фотошоп онлайн", details: "Полноценный графический редактор в браузере. Поддерживает PSD, XCF, Sketch, XD и CDR форматы." },
        { cat: "Утилиты", name: "Waifu2x", url: "https://waifu2x.udp.jp/", desc: "Апскейл фото", details: "Нейросеть для увеличения разрешения изображений (особенно аниме-артов) без потери качества." },
        { cat: "Утилиты", name: "TinyPNG", url: "https://tinypng.com/", desc: "Сжать фото", details: "Умное сжатие изображений WebP, PNG и JPEG. Уменьшает размер файла, сохраняя прозрачность и качество." },
        { cat: "Утилиты", name: "Screenshot Guru", url: "https://screenshot.guru/", desc: "Скрин сайта", details: "Делает скриншот веб-страницы целиком (даже если она длинная), в высоком разрешении." },
        { cat: "Утилиты", name: "Privnote", url: "https://privnote.com/", desc: "Секретная записка", details: "Отправьте записку, которая самоуничтожится после прочтения. Идеально для передачи паролей." },
        { cat: "Утилиты", name: "Pastebin", url: "https://pastebin.com/", desc: "Код текстом", details: "Сервис для хранения и обмена фрагментами текста или кода. Удобная подсветка синтаксиса." },
        { cat: "Утилиты", name: "IP Logger", url: "https://iplogger.org/", desc: "Логгер ссылок", details: "Сервис для сокращения ссылок и сбора статистики по кликам (IP, страна, браузер)." },
        { cat: "Утилиты", name: "Archive.org", url: "https://web.archive.org/", desc: "Архив сайтов", details: "Wayback Machine — машина времени интернета. Посмотрите, как выглядел любой сайт 10 лет назад." },
        { cat: "Утилиты", name: "10 Minute Mail", url: "https://10minutemail.com/", desc: "Почта на 10 мин", details: "Бесплатный временный e-mail, который самоуничтожается через 10 минут. Для быстрых регистраций." },
        { cat: "Утилиты", name: "Ninite", url: "https://ninite.com/", desc: "Установка софта", details: "Установите или обновите все свои программы за один раз. Без лишних галочек и тулбаров." },
        { cat: "Утилиты", name: "WinDirStat", url: "https://windirstat.net/", desc: "Анализ диска", details: "Показывает, чем занято место на жестком диске в виде визуальной карты. Помогает найти мусор." },
        { cat: "Утилиты", name: "QR Generator", url: "https://ru.qr-code-generator.com/", desc: "Создать QR", details: "Бесплатный генератор QR-кодов для ссылок, текста, Wi-Fi и визиток. Можно добавить логотип." },
        { cat: "Утилиты", name: "I Love PDF", url: "https://www.ilovepdf.com/ru", desc: "Работа с PDF", details: "Объединение, разделение, сжатие и конвертация PDF файлов. Все инструменты в одном месте." },
        { cat: "Утилиты", name: "Regex101", url: "https://regex101.com/", desc: "Тест регулярок", details: "Онлайн-отладчик регулярных выражений. Объясняет каждый шаг и помогает найти ошибки." },
        { cat: "Утилиты", name: "Have I Been Pwned", url: "https://haveibeenpwned.com/", desc: "Проверка почты", details: "Узнайте, утекли ли ваши пароли или почта в сеть во время крупных взломов баз данных." },
        { cat: "Утилиты", name: "Keyboard Test", url: "https://key-test.ru/", desc: "Тест кнопок", details: "Проверка работоспособности клавиш клавиатуры онлайн. Показывает коды нажатий." },

        // === AI / НЕЙРОСЕТИ ===
        { cat: "AI / Нейро", name: "ChatGPT", url: "https://chat.openai.com/", desc: "Главный ИИ", details: "Самый популярный чат-бот от OpenAI. Умеет писать код, тексты, отвечать на вопросы и многое другое." },
        { cat: "AI / Нейро", name: "Google Gemini", url: "https://gemini.google.com/", desc: "Гугл ИИ", details: "Мощная нейросеть от Google. Работает с текстом, кодом и изображениями. Интегрирована с сервисами Google." },
        { cat: "AI / Нейро", name: "Midjourney", url: "https://www.midjourney.com/", desc: "Генератор артов", details: "Лучшая нейросеть для создания художественных изображений по описанию. Работает через Discord или веб." },
        { cat: "AI / Нейро", name: "Suno", url: "https://suno.com/", desc: "Создание песен", details: "ИИ, который пишет полноценные песни с вокалом и музыкой по вашему текстовому запросу." },
        { cat: "AI / Нейро", name: "Grok", url: "https://grok.x.ai/", desc: "ИИ от Маска", details: "Нейросеть от xAI с доступом к данным Twitter в реальном времени. Обладает чувством юмора." },
        { cat: "AI / Нейро", name: "Claude AI", url: "https://claude.ai/", desc: "Умный ассистент", details: "Конкурент ChatGPT, который пишет очень человечные тексты и умеет анализировать большие документы." },
        { cat: "AI / Нейро", name: "Character.ai", url: "https://beta.character.ai/", desc: "Ролевой чат", details: "Общение с виртуальными персонажами из игр, аниме и фильмов. Можно создать своего бота." },
        { cat: "AI / Нейро", name: "VocalRemover", url: "https://vocalremover.org/ru/", desc: "Удалить голос", details: "Разделяет музыку на вокал и инструментал с помощью ИИ. Идеально для караоке." },
        { cat: "AI / Нейро", name: "ElevenLabs", url: "https://elevenlabs.io/", desc: "Озвучка текста", details: "Самая реалистичная генерация речи. Может клонировать ваш голос или использовать готовые." },
        { cat: "AI / Нейро", name: "Luma Dream Machine", url: "https://lumalabs.ai/dream-machine", desc: "Видео из текста", details: "Генератор видео высокого качества по текстовому описанию. Создает реалистичные сцены." },
        { cat: "AI / Нейро", name: "Perplexity", url: "https://www.perplexity.ai/", desc: "ИИ Поисковик", details: "Поисковая система на базе ИИ. Дает прямые ответы на вопросы со ссылками на источники." },
        { cat: "AI / Нейро", name: "Bing Image", url: "https://www.bing.com/images/create", desc: "DALL-E 3", details: "Бесплатный генератор картинок от Microsoft на базе DALL-E 3. Понимает сложные запросы." },
        { cat: "AI / Нейро", name: "Hugging Face", url: "https://huggingface.co/", desc: "Хаб моделей", details: "GitHub для нейросетей. Огромная библиотека бесплатных моделей, демо и датасетов." },
        { cat: "AI / Нейро", name: "Civitai", url: "https://civitai.com/", desc: "Модели SD", details: "Главный ресурс для скачивания моделей Stable Diffusion. Арты, лоры и чекпоинты." },
        { cat: "AI / Нейро", name: "Leonardo.ai", url: "https://leonardo.ai/", desc: "Генератор фото", details: "Мощная платформа для создания игровых ассетов и артов. Много настроек и моделей." },
        { cat: "AI / Нейро", name: "Lexica", url: "https://lexica.art/", desc: "Поиск промптов", details: "Поисковик по сгенерированным картинкам Stable Diffusion. Помогает найти идеальный промпт." },
        { cat: "AI / Нейро", name: "Udio", url: "https://www.udio.com/", desc: "Музыка AI", details: "Конкурент Suno. Создает музыку профессионального качества в любых жанрах." },
        { cat: "AI / Нейро", name: "Lalal.ai", url: "https://www.lalal.ai/", desc: "Сплиттер", details: "Разделяет аудио на отдельные дорожки: барабаны, бас, голос, пианино." },
        { cat: "AI / Нейро", name: "RunwayML", url: "https://runwayml.com/", desc: "Видео ИИ", details: "Профессиональные инструменты для редактирования и генерации видео с помощью нейросетей." },
        { cat: "AI / Нейро", name: "Gamma", url: "https://gamma.app/", desc: "Презентации", details: "Создает красивые презентации, документы и веб-страницы за секунды по одной теме." },
        { cat: "AI / Нейро", name: "Phind", url: "https://www.phind.com/", desc: "ИИ для кодеров", details: "Поисковик, оптимизированный для программистов. Дает примеры кода и решения ошибок." },

        // === КИНО И АНИМЕ (НОВОЕ!) ===
        { cat: "Кино и Аниме", name: "Kinopoisk", url: "https://www.kinopoisk.ru/", desc: "Фильмы и сериалы", details: "Крупнейший русскоязычный сервис о кино. Рейтинги, отзывы, покупка билетов и онлайн-кинотеатр." },
        { cat: "Кино и Аниме", name: "IMDb", url: "https://www.imdb.com/", desc: "Мировой рейтинг", details: "Главная мировая база данных о кинематографе. Самые авторитетные рейтинги фильмов и актеров." },
        { cat: "Кино и Аниме", name: "Netflix", url: "https://www.netflix.com/", desc: "Сериалы", details: "Стриминговый сервис с огромной библиотекой сериалов, фильмов и шоу собственного производства." },
        { cat: "Кино и Аниме", name: "Shikimori", url: "https://shikimori.one/", desc: "Аниме энциклопедия", details: "Главный сайт для анимешников. Списки просмотра, рейтинги, новости и календарь релизов." },
        { cat: "Кино и Аниме", name: "Jut.su", url: "https://jut.su/", desc: "Смотреть аниме", details: "Популярный сайт для просмотра аниме онлайн. Удобный плеер, все техники Наруто и комментарии." },
        { cat: "Кино и Аниме", name: "AnimeGO", url: "https://animego.org/", desc: "Аниме портал", details: "Огромная база аниме с удобным поиском, озвучками и расписанием выхода серий." },
        { cat: "Кино и Аниме", name: "MyAnimeList", url: "https://myanimelist.net/", desc: "Мировой топ аниме", details: "Крупнейшая международная база данных и сообщество любителей аниме и манги." },
        { cat: "Кино и Аниме", name: "MangaLib", url: "https://mangalib.me/", desc: "Читать мангу", details: "Популярная читалка манги, манхвы и маньхуа на русском языке. Удобный ридер." },
        { cat: "Кино и Аниме", name: "Rezka", url: "https://rezka.ag/", desc: "Онлайн кинотеатр", details: "Популярный сайт с фильмами и сериалами в разных озвучках (HDrezka)." },
        { cat: "Кино и Аниме", name: "Seasonvar", url: "http://seasonvar.ru/", desc: "Сериалы онлайн", details: "Огромный архив сериалов в качественной озвучке." },
        { cat: "Кино и Аниме", name: "Letterboxd", url: "https://letterboxd.com/", desc: "Соцсеть киноманов", details: "Веди дневник просмотренных фильмов, пиши рецензии и составляй списки." },
        { cat: "Кино и Аниме", name: "Metacritic", url: "https://www.metacritic.com/", desc: "Оценки критиков", details: "Агрегатор рецензий на фильмы, игры и музыку. Самые строгие оценки." },
        { cat: "Кино и Аниме", name: "Rotten Tomatoes", url: "https://www.rottentomatoes.com/", desc: "Томаты", details: "Американский агрегатор рецензий кинокритиков. Свежие или гнилые помидоры?" },
        { cat: "Кино и Аниме", name: "Crunchyroll", url: "https://www.crunchyroll.com/", desc: "Официальное аниме", details: "Легальный стриминг аниме. Новинки выходят через час после Японии." },
        { cat: "Кино и Аниме", name: "Dorama Live", url: "https://doramalive.com/", desc: "Дорамы", details: "Сайт для любителей азиатских сериалов (дорам) с русской озвучкой." },

        // === MINECRAFT ===
        { cat: "Minecraft", name: "Modrinth", url: "https://modrinth.com/", desc: "Лучшие моды", details: "Современная платформа для модов. Быстрая, с чистым дизайном и без рекламы." },
        { cat: "Minecraft", name: "NameMC", url: "https://ru.namemc.com/", desc: "Скины и ники", details: "Проверь историю ников любого игрока, найди плащи и скачай крутые скины." },
        { cat: "Minecraft", name: "CurseForge", url: "https://www.curseforge.com/minecraft", desc: "База модов", details: "Классическая и самая большая база модов и модпаков для Майнкрафта." },
        { cat: "Minecraft", name: "PlanetMinecraft", url: "https://www.planetminecraft.com/", desc: "Карты и Текстуры", details: "Сообщество креаторов: карты, текстурпаки, скины и датапаки." },
        { cat: "Minecraft", name: "ChunkBase", url: "https://www.chunkbase.com/", desc: "Поиск биомов", details: "Введите сид мира и найдите деревни, храмы, спавнеры, биомы и слайм-чанки." },
        { cat: "Minecraft", name: "Minecraft Heads", url: "https://minecraft-heads.com/", desc: "Декор головы", details: "Тысячи декоративных голов для строительства (еда, техника, блоки)." },
        { cat: "Minecraft", name: "Minecraft Tools", url: "https://minecraft.tools/ru/", desc: "Генераторы", details: "Создание крафтов, плоских миров, баннеров и книг с цветным текстом." },
        { cat: "Minecraft", name: "MapMaking Tools", url: "https://mcstacker.net/", desc: "Команды /summon", details: "Лучший генератор сложных команд для спавна мобов в броне и с эффектами." },
        { cat: "Minecraft", name: "SpigotMC", url: "https://www.spigotmc.org/", desc: "Плагины", details: "Главный ресурс для администраторов серверов. Плагины, ядра и форум." },
        { cat: "Minecraft", name: "Nova Skin", url: "https://novaskin.me/", desc: "Редактор скинов", details: "Удобный онлайн-редактор скинов с предпросмотром в 3D и галереей обоев." },
        { cat: "Minecraft", name: "Aternos", url: "https://aternos.org/", desc: "Бесплатный хост", details: "Сервис для создания бесплатных серверов Майнкрафт для игры с друзьями." },
        { cat: "Minecraft", name: "VanillaTweaks", url: "https://vanillatweaks.net/", desc: "Твики игры", details: "Собери свой ресурспак: прозрачный интерфейс, тихие поршни, 3D рельсы и многое другое." },
        { cat: "Minecraft", name: "Litematica", url: "https://masa.dy.fi/litematica/", desc: "Схематики", details: "Мод для строительства по проекциям (голограммам). Незаменим для сложных построек." },
        { cat: "Minecraft", name: "PaperMC", url: "https://papermc.io/", desc: "Ядро сервера", details: "Самое оптимизированное ядро для серверов. Убирает лаги и поддерживает плагины." },
        { cat: "Minecraft", name: "SkinGrabber", url: "https://mcskinsearch.com/", desc: "Поиск скинов", details: "Быстрый просмотр и скачивание скинов по никнейму лицензионных игроков." },
        { cat: "Minecraft", name: "Minotar", url: "https://minotar.net/", desc: "API голов", details: "Сервис для получения аватарок и скинов игроков через API для сайтов." },
        { cat: "Minecraft", name: "Crafting Guide", url: "https://www.minecraft-crafting.net/", desc: "Рецепты", details: "Старый добрый справочник всех рецептов крафта в игре." },
        { cat: "Minecraft", name: "Plotz", url: "https://www.plotz.co.uk/", desc: "Строить сферы", details: "Генератор чертежей для сфер, эллипсоидов и торов. Помогает строить круги." },
        { cat: "Minecraft", name: "FabricMC", url: "https://fabricmc.net/", desc: "Fabric", details: "Легковесный загрузчик модов, альтернатива Forge. Нужен для Sodium и Iris." },
        { cat: "Minecraft", name: "OptiFine", url: "https://optifine.net/", desc: "Оптимизация", details: "Классический мод для повышения FPS, зума и поддержки шейдеров." },
        { cat: "Minecraft", name: "Authlib Injector", url: "https://authlib-injector.yggdrasil.tv/", desc: "Своя авторизация", details: "Инструмент для создания своей системы скинов и входа на сервер." },
        { cat: "Minecraft", name: "RGB Gradient", url: "https://rgb.birdflop.com/", desc: "Градиент чата", details: "Создание красивых RGB-градиентов для конфигов плагинов и чата." },
        { cat: "Minecraft", name: "Wiki Minecraft", url: "https://minecraft.wiki/", desc: "Википедия", details: "Официальная энциклопедия по игре. Механики, блоки, мобы и история версий." },
        { cat: "Minecraft", name: "Exaroton", url: "https://exaroton.com/", desc: "Платный Атернос", details: "Хостинг от создателей Aternos, но без очередей и с оплатой за время работы." },

        // === ВИЗУАЛ ===
        { cat: "Визуал", name: "CoolSymbol", url: "https://coolsymbol.com/", desc: "Символы", details: "Огромная коллекция спецсимволов, значков и красивых шрифтов для ников." },
        { cat: "Визуал", name: "Unicode Table", url: "https://unicode-table.com/ru/", desc: "Юникод", details: "Полная таблица всех существующих символов Юникода с кодами." },
        { cat: "Визуал", name: "Kaomoji", url: "https://kaomoji.ru/", desc: "Японские смайлы", details: "Коллекция текстовых смайликов вроде (づ｡◕‿‿◕｡)づ." },
        { cat: "Визуал", name: "ColorHunt", url: "https://colorhunt.co/", desc: "Палитры", details: "Тысячи готовых цветовых палитр для дизайнеров и художников." },
        { cat: "Визуал", name: "Google Fonts", url: "https://fonts.google.com/", desc: "Шрифты", details: "Библиотека бесплатных шрифтов от Google для сайтов и дизайна." },
        { cat: "Визуал", name: "Piskel", url: "https://www.piskelapp.com/", desc: "Пиксель арт", details: "Бесплатный онлайн-редактор для создания анимированных спрайтов и пиксель-арта." },
        { cat: "Визуал", name: "EzGif", url: "https://ezgif.com/", desc: "GIF редактор", details: "Мощный инструмент для создания, обрезки, сжатия и редактирования GIF анимаций." },
        { cat: "Визуал", name: "Figma", url: "https://www.figma.com/", desc: "Дизайн UI", details: "Профессиональный инструмент для дизайна интерфейсов и прототипирования сайтов." },
        { cat: "Визуал", name: "Symbl", url: "https://symbl.cc/ru/", desc: "Эмодзи и знаки", details: "Энциклопедия символов. Можно найти редкие знаки и скопировать их." },
        { cat: "Визуал", name: "Coolors", url: "https://coolors.co/", desc: "Генератор цветов", details: "Быстрый генератор цветовых схем. Нажми пробел — получи новую палитру." },
        { cat: "Визуал", name: "DaFont", url: "https://www.dafont.com/", desc: "Скачать шрифты", details: "Архив тысяч шрифтов для фотошопа и ворда. Множество стилей." },
        { cat: "Визуал", name: "FontAwesome", url: "https://fontawesome.com/icons", desc: "Иконки", details: "Самый популярный набор иконок для веб-разработчиков." },
        { cat: "Визуал", name: "Flaticon", url: "https://www.flaticon.com/", desc: "PNG иконки", details: "Миллионы бесплатных векторных иконок в форматах PNG, SVG, EPS." },
        { cat: "Визуал", name: "Unsplash", url: "https://unsplash.com/", desc: "Фото стоки", details: "Красивые бесплатные фотографии высокого качества от фотографов со всего мира." },
        { cat: "Визуал", name: "Canva", url: "https://www.canva.com/", desc: "Простой дизайн", details: "Сервис для создания презентаций, постов в соцсети и логотипов по шаблонам." },
        { cat: "Визуал", name: "Lospec", url: "https://lospec.com/", desc: "Палитры пикселей", details: "Инструменты для пиксель-арта: палитры, туториалы и списки софта." },
        { cat: "Визуал", name: "CSS Gradient", url: "https://cssgradient.io/", desc: "Градиенты", details: "Генератор CSS кода для градиентных фонов." },
        { cat: "Визуал", name: "Fluid Sim", url: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/", desc: "Жидкость", details: "Красивая интерактивная симуляция цветной жидкости и дыма." },
        { cat: "Визуал", name: "ZoomQuilt", url: "https://zoomquilt.org/", desc: "Бесконечный зум", details: "Залипательная бесконечно увеличивающаяся картина." },
        { cat: "Визуал", name: "Weavesilk", url: "http://weavesilk.com/", desc: "Рисование шелком", details: "Генеративное искусство. Рисуйте симметричные узоры, похожие на дым или шелк." },
        { cat: "Визуал", name: "Autodraw", url: "https://www.autodraw.com/", desc: "Google рисовалка", details: "Нарисуй каракулю, и нейросеть превратит её в красивую иконку." },
        { cat: "Визуал", name: "Vector Magic", url: "https://vectormagic.com/", desc: "Векторизация", details: "Превращает обычные растровые картинки (JPG, PNG) в векторные (SVG)." },
        { cat: "Визуал", name: "Dribbble", url: "https://dribbble.com/", desc: "Вдохновение", details: "Сообщество дизайнеров. Смотри крутые работы и ищи идеи." },

        // === ФАН & РАЗВЛЕЧЕНИЯ ===
        { cat: "Фан", name: "Neal.fun", url: "https://neal.fun/", desc: "Мини-игры", details: "Сборник гениальных и смешных мини-игр и визуализаций данных." },
        { cat: "Фан", name: "GeoGuessr", url: "https://www.geoguessr.com/", desc: "Угадай место", details: "Тебя кидает в случайное место на Google картах, ты должен угадать, где это." },
        { cat: "Фан", name: "Akinator", url: "https://ru.akinator.com/", desc: "Джинн", details: "Загадай любого персонажа, и Джинн угадает его, задавая вопросы." },
        { cat: "Фан", name: "The Useless Web", url: "https://theuselessweb.com/", desc: "Бесполезный сайт", details: "Кнопка, которая отправляет тебя на случайный странный сайт." },
        { cat: "Фан", name: "Quick Draw", url: "https://quickdraw.withgoogle.com/", desc: "Угадай рисунок", details: "У тебя есть 20 секунд, чтобы нарисовать предмет, а ИИ пытается угадать." },
        { cat: "Фан", name: "Little Alchemy 2", url: "https://littlealchemy2.com/", desc: "Алхимия", details: "Смешивай элементы (огонь, вода, земля), чтобы открыть сотни новых предметов." },
        { cat: "Фан", name: "Hacker Typer", url: "https://hackertyper.net/", desc: "Симулятор хакера", details: "Бей по клавишам как попало, а на экране будет появляться 'хакерский' код." },
        { cat: "Фан", name: "Pointer Pointer", url: "https://pointerpointer.com/", desc: "Палец на курсор", details: "Наведи курсор в любую точку, и сайт найдет фото человека, указывающего на него." },
        { cat: "Фан", name: "Infinite Craft", url: "https://neal.fun/infinite-craft/", desc: "Бесконечный крафт", details: "Нейросеть генерирует любые комбинации предметов. Можно скрафтить Шрека или Путина." },
        { cat: "Фан", name: "CityGuesser", url: "https://virtualvacation.us/guess", desc: "Угадай город", details: "Смотри видео прогулки по городу и угадывай, где это происходит." },
        { cat: "Фан", name: "Paper.io", url: "https://paper-io.com/", desc: "Захват зоны", details: "Игра, где нужно захватывать территорию своим цветом, не давая врагам пересечь твой хвост." },
        { cat: "Фан", name: "Slither.io", url: "http://slither.io/", desc: "Змейка", details: "Мультиплеерная змейка. Ешь точки, расти и подрезай других игроков." },
        { cat: "Фан", name: "Agar.io", url: "https://agar.io/", desc: "Клетки", details: "Управляй клеткой, ешь маленьких и убегай от больших." },
        { cat: "Фан", name: "Krunker", url: "https://krunker.io/", desc: "Шутер", details: "Быстрый пиксельный онлайн-шутер прямо в браузере." },
        { cat: "Фан", name: "Slow Roads", url: "https://slowroads.io/", desc: "Вождение", details: "Расслабляющая езда на машине по бесконечным процедурным дорогам." },
        { cat: "Фан", name: "Dino Swords", url: "https://dinoswords.gg/", desc: "Динозавр с оружием", details: "Тот самый динозаврик из Chrome, но теперь у него есть мечи, пистолеты и магия." },
        { cat: "Фан", name: "Windows 93", url: "http://www.windows93.net/", desc: "Виндовс 93", details: "Пародия на старую Windows с кучей пасхалок, глюков и странных программ." },
        { cat: "Фан", name: "Cookie Clicker", url: "https://orteil.dashnet.org/cookieclicker/", desc: "Кликер печенья", details: "Легендарный кликер. Пеки печеньки, покупай бабушек и захватывай вселенную." },
        { cat: "Фан", name: "Evol. of Trust", url: "https://ncase.me/trust/", desc: "Теория игр", details: "Интерактивная игра, объясняющая, почему люди доверяют или обманывают друг друга." },
        { cat: "Фан", name: "Gartic Phone", url: "https://garticphone.com/ru", desc: "Сломанный телефон", details: "Веселая игра для компании. Рисуйте и угадывайте, что нарисовали друзья." },
        { cat: "Фан", name: "Skribbl.io", url: "https://skribbl.io/", desc: "Рисовалка", details: "Один рисует, остальные угадывают слово." },
        { cat: "Фан", name: "Jigsaw Explorer", url: "https://www.jigsawexplorer.com/", desc: "Пазлы", details: "Сборка пазлов онлайн. Можно загрузить свое фото." },
        { cat: "Фан", name: "Internet Map", url: "https://internet-map.net/", desc: "Карта интернета", details: "Визуализация всех сайтов в интернете в виде звездного скопления." },
        { cat: "Фан", name: "Chrome Dino", url: "https://chromedino.com/", desc: "Игра динозавр", details: "Играть в динозаврика без отключения интернета." },
        { cat: "Фан", name: "2048", url: "https://play2048.co/", desc: "Игра 2048", details: "Складывай числа, чтобы получить плитку 2048." },
        { cat: "Фан", name: "Tetris", url: "https://tetris.com/play-tetris", desc: "Тетрис", details: "Официальная браузерная версия Тетриса." },
        { cat: "Фан", name: "Minesweeper", url: "https://minesweeper.online/ru/", desc: "Сапер", details: "Классический сапер онлайн." },
        { cat: "Фан", name: "Typeracer", url: "https://play.typeracer.com/", desc: "Гонки на клаве", details: "Соревнуйся с другими людьми в скорости печати текста." },
        { cat: "Фан", name: "MonkeyType", url: "https://monkeytype.com/", desc: "Тест печати", details: "Минималистичный и красивый тренажер слепой печати." },

        // === АУДИО ===
        { cat: "Аудио", name: "Яндекс Музыка", url: "https://music.yandex.ru/", desc: "Плеер", details: "Популярный стриминговый сервис с умными плейлистами 'Моя волна'." },
        { cat: "Аудио", name: "Spotify", url: "https://open.spotify.com/", desc: "Спотифай", details: "Мировой лидер музыкального стриминга с лучшими алгоритмами рекомендаций." },
        { cat: "Аудио", name: "MyInstants", url: "https://www.myinstants.com/", desc: "Звуки мемов", details: "Тысячи звуковых кнопок с мемами, фразами из фильмов и игр." },
        { cat: "Аудио", name: "Incredibox", url: "https://www.incredibox.com/", desc: "Битбокс", details: "Создавай музыку, перетаскивая иконки на персонажей. Очень стильно." },
        { cat: "Аудио", name: "Rainyscope", url: "https://rainyscope.com/", desc: "Шум дождя", details: "Симулятор погоды. Дождь, гроза, снег — для релаксации." },
        { cat: "Аудио", name: "SoundCloud", url: "https://soundcloud.com/", desc: "Инди музыка", details: "Платформа, где начинающие музыканты выкладывают свои треки." },
        { cat: "Аудио", name: "Noisli", url: "https://www.noisli.com/", desc: "Фоновые звуки", details: "Смешивай звуки кафе, леса, ветра и поезда для продуктивности." },
        { cat: "Аудио", name: "Lofi Girl", url: "https://lofigirl.com/", desc: "Lofi радио", details: "Бесконечное радио с расслабляющей музыкой для учебы и работы." },
        { cat: "Аудио", name: "Every Noise", url: "https://everynoise.com/", desc: "Жанры музыки", details: "Карта всех музыкальных жанров в мире. Можно послушать примеры." },
        { cat: "Аудио", name: "Blob Opera", url: "https://artsandculture.google.com/experiment/blob-opera/", desc: "Опера", details: "Управляй четырьмя оперными желешками и создавай смешную музыку." },
        { cat: "Аудио", name: "Pink Trombone", url: "https://dood.al/pinktrombone/", desc: "Голос (Рот)", details: "Симулятор человеческого рта. Можно управлять языком и губами, издавая звуки." },
        { cat: "Аудио", name: "BeepBox", url: "https://beepbox.co/", desc: "Чиптюн мейкер", details: "Онлайн-инструмент для создания 8-битной музыки (чиптюна)." },
        { cat: "Аудио", name: "Online Sequencer", url: "https://onlinesequencer.net/", desc: "Пианино", details: "Полноценный секвенсор для написания музыки нотами в браузере." },
        { cat: "Аудио", name: "Shazam Web", url: "https://www.shazam.com/ru", desc: "Угадать песню", details: "Узнай название песни, которая играет рядом, через микрофон." },
        { cat: "Аудио", name: "Radio Garden", url: "http://radio.garden/", desc: "Радио", details: "Вращай глобус и слушай радиостанции из любой точки мира." },
        { cat: "Аудио", name: "NoCopyrightSounds", url: "https://ncs.io/", desc: "Музыка без АП", details: "Библиотека музыки без авторских прав для видео и стримов." },
        { cat: "Аудио", name: "Tabletop Audio", url: "https://tabletopaudio.com/", desc: "Звуки для RPG", details: "Эмбиент и музыка для настольных ролевых игр (D&D)." },
        { cat: "Аудио", name: "MyNoise", url: "https://mynoise.net/", desc: "Генератор шума", details: "Профессиональный генератор шумовых фонов для работы и сна." },

        // === IT / КОД ===
        { cat: "IT / Код", name: "GitHub", url: "https://github.com/", desc: "Репозитории", details: "Крупнейший хостинг кода и платформа для совместной разработки." },
        { cat: "IT / Код", name: "StackOverflow", url: "https://stackoverflow.com/", desc: "Вопросы", details: "Сайт вопросов и ответов для программистов. Решение любой проблемы." },
        { cat: "IT / Код", name: "Replit", url: "https://replit.com/", desc: "IDE Онлайн", details: "Пиши, запускай и делись кодом на 50+ языках прямо в браузере." },
        { cat: "IT / Код", name: "Roadmap.sh", url: "https://roadmap.sh/", desc: "Карта развития", details: "Пошаговые дорожные карты для изучения профессий (Frontend, Backend, DevOps)." },
        { cat: "IT / Код", name: "Carbon", url: "https://carbon.now.sh/", desc: "Скрины кода", details: "Создание красивых изображений с вашим исходным кодом для соцсетей." },
        { cat: "IT / Код", name: "RegExr", url: "https://regexr.com/", desc: "Регулярки", details: "Инструмент для создания, проверки и отладки регулярных выражений." },
        { cat: "IT / Код", name: "CodePen", url: "https://codepen.io/", desc: "Песочница", details: "Социальная среда для фронтендеров. Пиши HTML/CSS/JS и сразу видь результат." },
        { cat: "IT / Код", name: "JSFiddle", url: "https://jsfiddle.net/", desc: "JS песочница", details: "Простой онлайн-редактор для тестирования JavaScript, HTML и CSS." },
        { cat: "IT / Код", name: "JSON Lint", url: "https://jsonlint.com/", desc: "JSON Валидатор", details: "Проверка JSON файлов на ошибки и форматирование кода." },
        { cat: "IT / Код", name: "DevDocs", url: "https://devdocs.io/", desc: "Документация", details: "Вся документация по языкам программирования и фреймворкам в одном месте." },
        { cat: "IT / Код", name: "MDN Web Docs", url: "https://developer.mozilla.org/", desc: "Учебник Web", details: "Лучший справочник по веб-технологиям (HTML, CSS, JS) от Mozilla." },
        { cat: "IT / Код", name: "W3Schools", url: "https://www.w3schools.com/", desc: "Уроки кода", details: "Простые уроки и справочники по веб-разработке для новичков." },
        { cat: "IT / Код", name: "LeetCode", url: "https://leetcode.com/", desc: "Задачи", details: "Платформа для подготовки к техническим собеседованиям. Задачи по алгоритмам." },
        { cat: "IT / Код", name: "CodeWars", url: "https://www.codewars.com/", desc: "Задачи (Ката)", details: "Решай задачи по программированию и повышай свой ранг." },
        { cat: "IT / Код", name: "Cloudflare", url: "https://www.cloudflare.com/", desc: "CDN и DNS", details: "Защита от DDoS, ускорение сайтов и управление DNS." },
        { cat: "IT / Код", name: "Vercel", url: "https://vercel.com/", desc: "Хостинг сайтов", details: "Лучший хостинг для фронтенд-проектов (Next.js, React, Vue)." },
        { cat: "IT / Код", name: "Can I Use", url: "https://caniuse.com/", desc: "Поддержка", details: "Таблицы поддержки HTML5, CSS3 и JS в разных браузерах." },
        { cat: "IT / Код", name: "NPM", url: "https://www.npmjs.com/", desc: "Пакеты JS", details: "Менеджер пакетов для Node.js. Миллионы библиотек." },
        { cat: "IT / Код", name: "Docker Hub", url: "https://hub.docker.com/", desc: "Контейнеры", details: "Библиотека образов для контейнеров Docker." },
        { cat: "IT / Код", name: "GitLab", url: "https://about.gitlab.com/", desc: "Git альтернатива", details: "Платформа для DevOps и управления репозиториями." },
        { cat: "IT / Код", name: "CSS Tricks", url: "https://css-tricks.com/", desc: "Трюки CSS", details: "Статьи и руководства по верстке и веб-дизайну." },
        { cat: "IT / Код", name: "FreeCodeCamp", url: "https://www.freecodecamp.org/", desc: "Курсы кодинга", details: "Бесплатное обучение программированию с выдачей сертификатов." },
        { cat: "IT / Код", name: "Bootstrap", url: "https://getbootstrap.com/", desc: "CSS Фреймворк", details: "Самый популярный фреймворк для быстрой верстки адаптивных сайтов." },
        { cat: "IT / Код", name: "React", url: "https://react.dev/", desc: "JS Библиотека", details: "Библиотека для создания пользовательских интерфейсов от Facebook." },

        // === МАГАЗИНЫ ===
        { cat: "Магазины", name: "Steam", url: "https://store.steampowered.com/", desc: "Стим", details: "Крупнейший магазин компьютерных игр. Скидки, сообщество, моды." },
        { cat: "Магазины", name: "SteamDB", url: "https://steamdb.info/", desc: "База Стим", details: "Вся статистика Steam: цены во всех регионах, онлайн игр и история скидок." },
        { cat: "Магазины", name: "FunPay", url: "https://funpay.com/", desc: "Фанпей", details: "Биржа игровых ценностей. Покупка золота, аккаунтов и услуг." },
        { cat: "Магазины", name: "Plati Market", url: "https://plati.market/", desc: "Плати Маркет", details: "Торговая площадка цифровых товаров. Ключи игр, антивирусы, подписки." },
        { cat: "Магазины", name: "Pepper", url: "https://www.pepper.ru/", desc: "Пеппер", details: "Сообщество скидок. Пользователи делятся самыми выгодными акциями." },
        { cat: "Магазины", name: "DNS", url: "https://www.dns-shop.ru/", desc: "ДНС", details: "Крупная сеть магазинов цифровой и бытовой техники." },
        { cat: "Магазины", name: "Wildberries", url: "https://www.wildberries.ru/", desc: "Вайлдберриз", details: "Крупнейший маркетплейс одежды, обуви, электроники и товаров для дома." },
        { cat: "Магазины", name: "Ozon", url: "https://www.ozon.ru/", desc: "Озон", details: "Один из первых интернет-магазинов в России. Огромный выбор товаров." },
        { cat: "Магазины", name: "Epic Games", url: "https://store.epicgames.com/", desc: "Халява", details: "Магазин игр от создателей Fortnite. Раздают бесплатные игры каждую неделю." },
        { cat: "Магазины", name: "GOG", url: "https://www.gog.com/", desc: "Игры без DRM", details: "Магазин игр без защиты (DRM). Купил — игра твоя навсегда." },
        { cat: "Магазины", name: "Itch.io", url: "https://itch.io/", desc: "Инди игры", details: "Платформа для независимых разработчиков. Много бесплатных и экспериментальных игр." },
        { cat: "Магазины", name: "GGSel", url: "https://ggsel.net/", desc: "Маркет ключей", details: "Торговая площадка аккаунтов и ключей. Аналог Plati." },
        { cat: "Магазины", name: "Kupikod", url: "https://kupikod.com/", desc: "Пополнение Steam", details: "Сервис для пополнения баланса Steam и покупки игр гифтами." },
        { cat: "Магазины", name: "AliExpress", url: "https://aliexpress.ru/", desc: "АлиЭкспресс", details: "Глобальная виртуальная торговая площадка товаров из Китая." },
        { cat: "Магазины", name: "Avito", url: "https://www.avito.ru/", desc: "Авито", details: "Сайт объявлений №1 в России. Покупка и продажа вещей, авто, недвижимости." },
        { cat: "Магазины", name: "Yandex Market", url: "https://market.yandex.ru/", desc: "Яндекс Маркет", details: "Сервис для выбора и покупки товаров. Сравнение цен и отзывы." },
        { cat: "Магазины", name: "MVideo", url: "https://www.mvideo.ru/", desc: "М.Видео", details: "Сеть магазинов электроники." },
        { cat: "Магазины", name: "Eneba", url: "https://www.eneba.com/", desc: "Ключи игр", details: "Маркетплейс для геймеров. Дешевые ключи и подарочные карты." },
        { cat: "Магазины", name: "Humble Bundle", url: "https://www.humblebundle.com/", desc: "Паки игр", details: "Продажа наборов игр (бандлов) по низким ценам. Часть денег идет на благотворительность." },

        // === УЧЕБА ===
        { cat: "Учеба", name: "Фоксфорд", url: "https://foxford.ru/", desc: "Школа", details: "Онлайн-школа для учеников 1−11 классов, учителей и родителей." },
        { cat: "Учеба", name: "Википедия", url: "https://ru.wikipedia.org/", desc: "Википедия", details: "Свободная энциклопедия, которую может редактировать каждый." },
        { cat: "Учеба", name: "WolframAlpha", url: "https://www.wolframalpha.com/", desc: "Вольфрам", details: "Вычислительная система знаний. Решает уравнения, строит графики, отвечает на факты." },
        { cat: "Учеба", name: "Gdz.ru", url: "https://gdz.ru/", desc: "ГДЗ", details: "Готовые домашние задания. Решебники по всем школьным предметам." },
        { cat: "Учеба", name: "Stepik", url: "https://stepik.org/", desc: "Степик", details: "Образовательная платформа и конструктор бесплатных онлайн-курсов." },
        { cat: "Учеба", name: "Duolingo", url: "https://www.duolingo.com/", desc: "Языки", details: "Самое популярное приложение для изучения иностранных языков в игровой форме." },
        { cat: "Учеба", name: "Desmos", url: "https://www.desmos.com/", desc: "Графики", details: "Продвинутый графический калькулятор. Рисует функции любой сложности." },
        { cat: "Учеба", name: "Symbolab", url: "https://www.symbolab.com/", desc: "Решебник", details: "Пошаговый калькулятор математических задач. Показывает ход решения." },
        { cat: "Учеба", name: "Reverso", url: "https://context.reverso.net/", desc: "Контекст", details: "Переводчик, показывающий примеры употребления слов в контексте предложений." },
        { cat: "Учеба", name: "Google Scholar", url: "https://scholar.google.ru/", desc: "Статьи", details: "Поисковая система по полным текстам научных публикаций." },
        { cat: "Учеба", name: "Z-Library", url: "https://z-lib.io/", desc: "Книги", details: "Одна из крупнейших теневых библиотек книг и статей в мире." },
        { cat: "Учеба", name: "Coursera", url: "https://www.coursera.org/", desc: "Курсы ВУЗов", details: "Онлайн-курсы от ведущих университетов мира (Стэнфорд, Йель и др.)." },
        { cat: "Учеба", name: "Brainly", url: "https://znanija.com/", desc: "Ответы ДЗ", details: "Сообщество, где школьники помогают друг другу с домашним заданием." },
        { cat: "Учеба", name: "MuscleWiki", url: "https://musclewiki.com/", desc: "Спорт", details: "Сайт, который показывает упражнения на конкретные группы мышц (нажмите на мышцу на теле)." },
        { cat: "Учеба", name: "Periodic Table", url: "https://ptable.com/", desc: "Таблица Менделеева", details: "Интерактивная таблица химических элементов с подробным описанием свойств." },
        { cat: "Учеба", name: "Habr", url: "https://habr.com/", desc: "Статьи IT", details: "Крупнейшее в Европе сообщество IT-специалистов. Статьи, новости, вакансии." },
        { cat: "Учеба", name: "Briefly", url: "https://briefly.ru/", desc: "Краткое содержание", details: "Краткое содержание книг. Полезно для школьной программы." },
        { cat: "Учеба", name: "Grammarly", url: "https://www.grammarly.com/", desc: "Проверка текста", details: "Сервис для проверки грамматики и стиля английского текста." }
    ];

    // === ЛОГИКА ===
    let currentCategory = "Избранное";
    // Проверка на первый запуск (добавляем vesperiasmp.ru)
    let favorites = JSON.parse(localStorage.getItem('vesperiaFavs'));
    
    if (!favorites) {
        favorites = ["https://vesperiasmp.ru/"];
        localStorage.setItem('vesperiaFavs', JSON.stringify(favorites));
    }

    function fixKeyboardLayout(text) {
        const replacer = {
            "q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г", 
            "i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы", 
            "d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д", 
            ";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и", 
            "n":"т", "m":"ь", ",":"б", ".":"ю", "/":"."
        };
        return text.toLowerCase().split('').map(char => replacer[char] || char).join('');
    }

    function renderTabs() {
        const nav = document.getElementById('tabs-nav');
        if (!nav) return;
        nav.innerHTML = "";
        const categories = ["Избранное", ...new Set(db.map(item => item.cat))];

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `tab-btn ${cat === currentCategory ? 'active' : ''}`;
            const iconClass = categoryIcons[cat] || "fa-solid fa-folder";
            btn.innerHTML = `<i class="${iconClass}"></i> ${cat}`;
            
            btn.onclick = () => {
                currentCategory = cat;
                const search = document.getElementById('search');
                if (search) search.value = "";
                renderTabs();
                renderSites();
            };
            nav.appendChild(btn);
        });
    }

    function renderSites(searchQuery = "") {
        const container = document.getElementById('content');
        if (!container) return;
        
        container.innerHTML = "";
        let sitesToShow = [];
        const lowerQuery = searchQuery.toLowerCase();
        const fixedQuery = fixKeyboardLayout(lowerQuery);

        if (searchQuery.trim() !== "") {
            sitesToShow = db.filter(site => 
                site.name.toLowerCase().includes(lowerQuery) || 
                site.desc.toLowerCase().includes(lowerQuery) ||
                site.name.toLowerCase().includes(fixedQuery) ||
                site.desc.toLowerCase().includes(fixedQuery)
            );
        } else if (currentCategory === "Избранное") {
            sitesToShow = db.filter(site => favorites.includes(site.url));
            if (sitesToShow.length === 0) {
                container.innerHTML = `
                    <div style='text-align:center; padding: 60px; color:#aaa; width: 100%;'>
                        <i class="fa-regular fa-star" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;"></i>
                        <h2>Пустота...</h2>
                        <p>Добавь любимые сайты звездочкой!</p>
                    </div>`;
                return;
            }
        } else {
            sitesToShow = db.filter(site => site.cat === currentCategory);
        }

        const grid = document.createElement('div');
        grid.className = 'grid';

        sitesToShow.forEach(site => {
            const isFav = favorites.includes(site.url);
            const card = document.createElement('div'); // Теперь это DIV, а не ссылка A
            card.className = 'card';
            
            const iconUrl = `https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}&sz=64`;

            card.innerHTML = `
                <img src="${iconUrl}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1006/1006771.png'">
                <span class="card-title">${site.name}</span>
                <span class="card-desc">${site.desc}</span>
                <button class="fav-btn ${isFav ? 'active' : ''}">
                    <i class="fa-${isFav ? 'solid' : 'regular'} fa-star"></i>
                </button>
            `;

            // ЛОГИКА КЛИКА: ОТКРЫТЬ МОДАЛЬНОЕ ОКНО
            card.addEventListener('click', (e) => {
                // Если кликнули на звездочку - не открываем модалку
                if (e.target.closest('.fav-btn')) {
                    toggleFavorite(site.url);
                    return;
                }
                openModal(site);
            });

            grid.appendChild(card);
        });

        container.appendChild(grid);
    }

    function toggleFavorite(url) {
        if (favorites.includes(url)) {
            favorites = favorites.filter(f => f !== url);
        } else {
            favorites.push(url);
        }
        localStorage.setItem('vesperiaFavs', JSON.stringify(favorites));
        
        const searchInput = document.getElementById('search');
        renderSites(searchInput ? searchInput.value : "");
    }

    // === МОДАЛЬНОЕ ОКНО ===
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    function openModal(site) {
        document.getElementById('modal-title').innerText = site.name;
        document.getElementById('modal-desc').innerText = site.details || site.desc; // Используем длинное описание или короткое
        
        const iconUrl = `https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}&sz=128`;
        document.getElementById('modal-icon').src = iconUrl;
        
        document.getElementById('modal-btn').href = site.url;
        
        modalOverlay.classList.add('open');
    }

    function closeModal() {
        modalOverlay.classList.remove('open');
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSites(e.target.value);
        });
    }

    // Запуск
    renderTabs();
    renderSites();
});
