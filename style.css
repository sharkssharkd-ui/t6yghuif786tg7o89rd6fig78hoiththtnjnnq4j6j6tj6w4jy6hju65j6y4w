:root {
    --bg-color: #050510;
    --card-bg: rgba(20, 20, 40, 0.6);
    --card-hover: rgba(60, 20, 90, 0.7);
    --accent: #9d00ff; /* Более насыщенный фиолетовый Vesperia */
    --accent-light: #d080ff;
    --star-color: #ffd700;
    --text-main: #ffffff;
    --text-sec: #b0b0c0;
}

body {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
}

/* Глубокий космос */
.background-animation {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: -3;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
}
.stars {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: -2;
    background: url('https://www.transparenttextures.com/patterns/stardust.png');
    opacity: 0.8;
}

.container {
    max-width: 1500px; /* Расширил контейнер */
    margin: 0 auto;
    padding: 20px;
}

header {
    text-align: center;
    padding: 60px 0 30px;
}

h1 {
    font-size: 4rem;
    margin: 0;
    font-weight: 900;
    letter-spacing: 4px;
    background: linear-gradient(to right, #fff, var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 20px var(--accent));
}

.version {
    background: linear-gradient(45deg, var(--accent), #6a00b0);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    box-shadow: 0 0 10px var(--accent);
    vertical-align: super;
}

/* Поиск */
.search-wrapper {
    position: relative;
    max-width: 700px;
    margin: 40px auto 0;
}
.search-icon {
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-sec);
    font-size: 1.2rem;
}
.search-box {
    width: 100%;
    padding: 18px 25px 18px 60px;
    border-radius: 50px;
    border: 2px solid rgba(157, 0, 255, 0.3);
    background: rgba(10, 10, 20, 0.8);
    color: white;
    font-size: 1.2rem;
    outline: none;
    transition: 0.3s;
    backdrop-filter: blur(15px);
    box-sizing: border-box;
}
.search-box:focus {
    border-color: var(--accent-light);
    box-shadow: 0 0 30px rgba(157, 0, 255, 0.4);
}

/* Табы */
.tabs-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 40px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.tab-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-sec);
    padding: 10px 20px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.tab-btn:hover {
    background: rgba(157, 0, 255, 0.2);
    color: white;
}

.tab-btn.active {
    background: var(--accent);
    border-color: var(--accent-light);
    color: white;
    box-shadow: 0 0 15px rgba(157, 0, 255, 0.6);
}

/* Сетка */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 15px;
    animation: fadeInUp 0.5s ease;
}

.card {
    background: var(--card-bg);
    border: 1px solid rgba(157, 0, 255, 0.1);
    border-radius: 12px;
    padding: 12px 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.2s;
    position: relative;
    backdrop-filter: blur(5px);
    text-decoration: none;
}

.card:hover {
    background: var(--card-hover);
    transform: translateY(-3px);
    border-color: var(--accent-light);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.card-content {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-grow: 1;
    overflow: hidden;
}

.card img {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    flex-shrink: 0;
}

.card-text {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.card-title {
    font-weight: 600;
    font-size: 0.95rem;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-desc {
    font-size: 0.75rem;
    color: var(--text-sec);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fav-btn {
    background: none;
    border: none;
    color: rgba(255,255,255,0.1);
    cursor: pointer;
    font-size: 1.1rem;
    padding: 5px;
    transition: 0.2s;
}

.fav-btn:hover, .fav-btn.active {
    color: var(--star-color);
    transform: scale(1.1);
}
.fav-btn.active {
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #050510; }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }
