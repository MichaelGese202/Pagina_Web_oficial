
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Airdrops Network Pro - Explora los Mejores Airdrops</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --secondary: #ec4899;
            --dark: #1e293b;
            --light: #f8fafc;
            --gray: #94a3b8;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --border-radius: 12px;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        
        body {
            background-color: #f1f5f9;
            color: var(--dark);
            line-height: 1.6;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 10;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .logo-icon {
            font-size: 2rem;
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 1.5rem;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: var(--border-radius);
            transition: background-color 0.3s;
        }
        
        nav a:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
        
        .search-container {
            display: flex;
            margin-top: 1rem;
        }
        
        .search-input {
            flex: 1;
            padding: 0.8rem 1.2rem;
            border: none;
            border-radius: var(--border-radius) 0 0 var(--border-radius);
            font-size: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .search-btn {
            background-color: white;
            color: var(--primary);
            border: none;
            padding: 0 1.2rem;
            font-size: 1.2rem;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
            cursor: pointer;
            transition: background-color 0.3s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .search-btn:hover {
            background-color: #f8fafc;
        }
        
        .hero {
            text-align: center;
            padding: 3rem 1rem;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero p {
            color: var(--gray);
            font-size: 1.1rem;
            margin-bottom: 2rem;
        }
        
        main {
            padding: 2rem 0;
        }
        
        .filter-section {
            background-color: white;
            border-radius: var(--border-radius);
            padding: 1.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .filter-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .filter-options {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
        }
        
        .filter-btn {
            background-color: #f1f5f9;
            border: none;
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
            border-radius: 9999px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 500;
        }
        
        .filter-btn:hover {
            background-color: #e2e8f0;
        }
        
        .filter-btn.active {
            background-color: var(--primary);
            color: white;
        }
        
        .airdrop-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        
        .airdrop-card {
            background-color: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
        }
        
        .airdrop-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .card-type {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 0.3rem 0.8rem;
            font-size: 0.8rem;
            border-radius: 9999px;
            font-weight: 500;
            z-index: 5; 
        }
        .new-badge{
            position: absolute;
            top: 1rem;
            left: 1rem;
            background-color: var(--danger);
            color: white;
            padding: 0.3rem 0.8rem;
            font-size: 0.8rem;
            border-raius: 9999px;
            font-weight: 600;
            z-index: 5;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% {transform: scale(1);}
            50% {transform: scale(1.05); }
            100%{transform: scale(1);}
        }
        .publish-date{
            font-size: 0.8rem;
            color: var(--gray);
            margin-top: 0.5rem;
            text-align: center;
            display: none;
        }
        .badge {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            border-radius: 9999px;
            font-weight: 600;
            margin-right: 0.6rem;
            margin-bottom: 0.6rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
            text-decoration: none; 
            
        }
        .badge: hover{
            transform:  translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
        .card-image {
            height: 120px;
            width: 120px;
            background-size: cover;
            background-position: center;
            position: relative;
            z-index: 1;
            border-radius:50%;
            margin: 1.5rem auto 0;
            border: 3px solid var(--primary);
        }
        
        .card-content {
            padding: 1.5rem;
        }
        
        .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--dark);
        }
        
        .card-description {
            color: var(--gray);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .card-details {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1.2rem;
        }
        
        .detail-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
        }
        
        .detail-icon {
            color: var(--primary);
        }
        
        .card-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5rem;
        }
        
        .action-btn {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 0.7rem 1.5rem;
            font-size: 0.95rem;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: background-color 0.3s;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
        }
        .details-btn{
            background-color: white;
            color: var(--primary);
            border: 1px solid var(--primary);
            padding: 0.7rem 1.5rem;
            font-size: 0.95rem;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .details-btn: hover{
            background-color: #f8fafc;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .action-btn:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(99, 102, 241, 0.4);
        }
        
        .bookmark-btn {
            background-color: transparent;
            border: none;
            color: var(--gray);
            font-size: 1.2rem;
            cursor: pointer;
            transition: color 0.3s;
        }
        
        .bookmark-btn:hover {
            color: var(--primary);
        }
        
        .bookmark-btn.saved {
            color: var(--warning);
        }
        
        footer {
            background-color: var(--dark);
            color: white;
            padding: 3rem 1.5rem;
            margin-top: 3rem;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }
        
        .footer-section h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: white;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.8rem;
        }
        
        .footer-links a {
            color: var(--gray);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
        }
        
        .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: white;
            text-decoration: none;
            transition: background-color 0.3s;
            font-size: 1.2rem;
        }
        
        .social-icon:hover {
            background-color: var(--primary);
        }
        
        .copyright {
            text-align: center;
            margin-top: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--gray);
            font-size: 0.9rem;
        }
        
        .badge {
            display: inline-block;
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            border-radius: 9999px;
            font-weight: 600;
            margin-right: 0.6rem;
            margin-bottom: 0.6rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }
        .badge:hover{
            transform: translateY(-2px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }
        .badge-primary {
            background-color: #818cf8;
            color: white;
        }
        
        .badge-success {
            background-color: #34d399;
            color: white;
        }
        
        .badge-warning {
            background-color: #fbbf24;
            color: white;
        }
        
        .badge-danger {
            background-color: #f87171;
            color: white;
        }
        
        .badge-info {
            background-color: #38bdf8;
            color: white;
        }
        
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                align-items: flex-start;
            }
            
            nav ul {
                margin-top: 1rem;
                flex-wrap: wrap;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .filter-options {
                overflow-x: auto;
                padding-bottom: 0.5rem;
                flex-wrap: nowrap;
            }
        }

        /* Dark mode toggle */
        .theme-toggle {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background-color: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: var(--border-radius);
            cursor: pointer;
        }

        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .airdrop-card {
            animation: fadeIn 0.5s ease-out;
        }

        .empty-state {
            text-align: center;
            padding: 2rem;
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .empty-state-icon {
            font-size: 3rem;
            color: var(--gray);
            margin-bottom: 1rem;
        }

        .empty-state h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .empty-state p {
            color: var(--gray);
            margin-bottom: 1.5rem;
        }
        /* Estilos para la sección de precios de criptomonedas */
.crypto-prices-container {
    margin-top: 1rem;
    position: relative;
    min-height: 100px;
}

.loading-spinner {
    text-align: center;
    padding: 2rem;
    color: var(--gray);
    font-size: 1.1rem;
}

.crypto-price-card:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Añadir un tooltip para móviles */
@media (max-width: 768px) {
    .crypto-price-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 480px) {
    .crypto-price-grid {
        grid-template-columns: 1fr;
    }
}
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <i class="fas fa-parachute-box logo-icon"></i>
                    <span>Airdrops Network Pro</span>
                </div>
                
                <nav>
                    <ul>
                        <li><a href="#"><i class="fas fa-home"></i> Inicio</a></li>
                        <li><a href="#"><i class="fas fa-fire"></i> Trending</a></li>
                        <li><a href="#"><i class="fas fa-bookmark"></i> Guardados</a></li>
                        <li><a href="#"><i class="fas fa-info-circle"></i> Acerca de</a></li>
                        <li class="theme-toggle">
                            <i class="fas fa-moon"></i>
                            <span>Modo Oscuro</span>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div class="search-container">
                <input type="text" id="search-input" class="search-input" placeholder="Buscar airdrops...">
                <button class="search-btn"><i class="fas fa-search"></i></button>
            </div>
        </div>
    </header>
    <!-- Añade esto después del cierre del header (</header>) y antes de la sección hero -->
<section class="trending-prices container" style="margin-top: 2rem;">
    <div class="filter-section">
        <div class="filter-title">
            <i class="fas fa-chart-line"></i>
            <span>Trending Cryptocurrencies</span>
        </div>
        <div class="crypto-prices-container" id="crypto-prices-container">
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i> Loading cryptocurrency prices...
            </div>
        </div>
    </div>
</section>
    <section class="hero container">
        <h1>Discover the Best Crypto Airdrops</h1>
        <p> Explore a curated selection of the most promising airdrops in the crypto and blockchain ecosystem. Find opportunities in testnets, staking, gaming, and more..</p>
    </section>
    
    <main class="container">
        <section class="filter-section">
            <div class="filter-title">
                <i class="fas fa-filter"></i>
                <span>Filtrar por Categoría</span>
            </div>
            <div class="filter-options">
                <button class="filter-btn active" data-filter="all">Todos</button>
                <button class="filter-btn" data-filter="social">Social</button>
                <button class="filter-btn" data-filter="depin">DePIN</button>
                <button class="filter-btn" data-filter="testnet">Testnet</button>
                <button class="filter-btn" data-filter="node">Node</button>
                <button class="filter-btn" data-filter="gaming">Gaming</button>
                <button class="filter-btn" data-filter="staking">Staking</button>
            </div>
        </section>
        
        <div class="airdrop-grid" id="airdrop-grid">
            <!-- Los cards se generarán dinámicamente con JavaScript -->
        </div>
    </main>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Airdrops Network Pro</h3>
                    <p>Your destination for the best crypto airdrops and opportunities in the blockchain space.</p>
                    <div class="social-links">
                        <a href="https://x.com/proafinder25" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://t.me/CryptoAirdropFinder24" class="social-icon" target="_blank"><i class="fab fa-telegram"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-discord"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <ul class="footer-links">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Explorar</a></li>
                        <li><a href="#">Categorías</a></li>
                        <li><a href="#">Guías</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Información</h3>
                    <ul class="footer-links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=proafinder@gmail.com" id="contact" target="_blank">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Suscribirse</h3>
                    <p>Receive alerts about new airdrops directly to your email..</p>
                    <form>
                        <input type="email" placeholder="Your email" style="padding: 0.8rem; border-radius: var(--border-radius); border: none; width: 100%; margin-bottom: 0.8rem;">
                        <button type="submit" class="action-btn" style="width: 100%;">Suscribirse</button>
                    </form>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Airdrops Network Pro. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    
    <script>
        // Datos de Airdrops

        
               // Función para renderizar airdrops
               function renderAirdrops(filterType = 'all') {
            const grid = document.getElementById('airdrop-grid');
            grid.innerHTML = '';
            
            const filteredAirdrops = filterType === 'all' 
                ? airdrops 
                : airdrops.filter(airdrop => airdrop.type === filterType);
            
            if (filteredAirdrops.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state" style="grid-column: 1 / -1;">
                        <div class="empty-state-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h3>No se encontraron airdrops</h3>
                        <p>There are no airdrops available in this category. Please try another category.</p>
                        <button class="action-btn" onclick="renderAirdrops('all')">Ver todos los airdrops</button>
                    </div>
                `;
                return;
            }
            
            filteredAirdrops.forEach(airdrop => {
                const card = document.createElement('div');
                card.className = 'airdrop-card';
                card.setAttribute('data-type', airdrop.type);
                let isNew = false;
                if (airdrop.publishDate) {
                    const pubDate = airdrop.publishDate instanceof Date ? 
                        airdrop.publishDate : 
                        new Date(airdrop.publishDate);
                    const diffDays = (new Date() - pubDate) / (1000 * 60 * 60 * 24);
                    isNew = !isNaN(diffDays) && diffDays < 4;
                }
                
                const publishDateFormatted = airdrop.publishDate ? 
                    new Intl.DateTimeFormat('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    
                    }).format(airdrop.publishDate) : '';
                
                let badgesHTML = '';
                if (airdrop.badges && airdrop.badges.length) {
                    airdrop.badges.forEach(badge => {
                        let badgeClass = 'badge-primary';
                        let  badgeText = '';
                        let badgeUrl = '';
                        if (typeof badge === 'string') {
                            badgeText = badge;
                            if (badge === 'Web' && airdrop.webUrl) {
                                badgeUrl = airdrop.webUrl;
                            } else if (badge === 'X' && airdrop.xUrl) {
                                badgeUrl = airdrop.xUrl;
                            } else if (badge === 'Docs' && airdrop.docsUrl) {
                                badgeUrl = airdrop.docsUrl;
                            } else {
                                badgeUrl = '#';
                            }
                            if (badge.toLowerCase().includes('depin')) badgeClass = 'badge-info';
                            if (badge.toLowerCase().includes('testnet')) badgeClass = 'badge-warning';
                            if (badge.toLowerCase().includes('staking')) badgeClass = 'badge-success';
                            if (badge.toLowerCase().includes('gaming')) badgeClass = 'badge-danger';
                            if (badge.toLowerCase().includes('social')) badgeClass = 'badge-primary';
                        }
 
                        
                        badgesHTML += `<a href="${badgeUrl}" class="badge ${badgeClass}" target="_blank">${badgeText}</a>`;
                    });
                }
                
                // Card content HTML
                card.innerHTML = `
                    <div class="card-type">${airdrop.type.charAt(0).toUpperCase() + airdrop.type.slice(1)}</div>
                    ${isNew ? '<div class="new-badge">NEW</div>' : ''}
                    <div class="card-image" style="background-image: url('${airdrop.image}')"></div>
                    <div class="publish-date">Publicado: ${publishDateFormatted}</div>
                    <div class="card-content">
                        <h3 class="card-title">${airdrop.title}</h3>
                        <p class="card-description">${airdrop.description}</p>
                        <div class="card-details">
                            <div class="detail-item">
                                <i class="fas fa-calendar-alt detail-icon"></i>
                                <span>Available: ${airdrop.launchDate}</span>
                            </div>
                            ${airdrop.funds ? `
                                <div class="detail-item">
                                    <i class="fas fa-coins detail-icon"></i>
                                    <span>Funding: ${airdrop.funds}</span>
                                </div>
                            ` : ''}
                            ${airdrop.code ? `
                                <div class="detail-item">
                                    <i class="fas fa-key detail-icon"></i>
                                    <span>Code: ${airdrop.code}</span>
                                </div>
                            ` : ''}
                        </div>
                        <div>
                            ${badgesHTML}
                        </div>
                        <div class="card-actions">
                            <div style="display: flex; gap: 0.5rem; flex: 1;">
                                <a href="${airdrop.link || '#'}" class="action-btn" target="_blank" style="flex: 1; text-align: center;">Learn More</a>
                                <button class="details-btn" data-id="${airdrop.id}" style="flex: 1; text-align: center;">See More</button>
                            </div>
                            <button class="bookmark-btn"><i class="far fa-bookmark"></i></button>
                        </div>
                `;
                
                grid.appendChild(card);
            });
            
            // Configurar botones de favoritos
            document.querySelectorAll('.bookmark-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    this.classList.toggle('saved');
                    const icon = this.querySelector('i');
                    icon.classList.toggle('far');
                    icon.classList.toggle('fas');
                });
            });
        }
        
        // Inicializar la aplicación
        document.addEventListener('DOMContentLoaded', function() {
            // Renderizar airdrops iniciales
            renderAirdrops();
            
            // Configurar filtros
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remover clase active de todos los botones
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    // Añadir clase active al botón clickeado
                    this.classList.add('active');
                    // Renderizar airdrops filtrados
                    renderAirdrops(this.getAttribute('data-filter'));
                });
            });
            
            // Configurar búsqueda
            document.getElementById('search-input').addEventListener('keyup', function() {
                const searchTerm = this.value.toLowerCase();
                
                // Si no hay término de búsqueda, mostrar todos
                if (!searchTerm) {
                    renderAirdrops(document.querySelector('.filter-btn.active').getAttribute('data-filter'));
                    return;
                }
                
                const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                const baseAirdrops = activeFilter === 'all' ? airdrops : airdrops.filter(a => a.type === activeFilter);
                
                // Filtrar por término de búsqueda
                const filteredAirdrops = baseAirdrops.filter(airdrop => 
                    airdrop.title.toLowerCase().includes(searchTerm) || 
                    airdrop.description.toLowerCase().includes(searchTerm) ||
                    (airdrop.badges && airdrop.badges.some(b => b.toLowerCase().includes(searchTerm)))
                );
                
                // Renderizar resultados de búsqueda
                const grid = document.getElementById('airdrop-grid');
                grid.innerHTML = '';
                
                if (filteredAirdrops.length === 0) {
                    grid.innerHTML = `
                        <div class="empty-state" style="grid-column: 1 / -1;">
                            <div class="empty-state-icon">
                                <i class="fas fa-search"></i>
                            </div>
                            <h3>No se encontraron resultados</h3>
                            <p>No hay airdrops que coincidan con tu búsqueda.</p>
                            <button class="action-btn" onclick="renderAirdrops('${activeFilter}')">Ver todos los airdrops</button>
                        </div>
                    `;
                    return;
                }
                
                // Renderizar cards filtrados
                filteredAirdrops.forEach(airdrop => {
                    const card = document.createElement('div');
                    card.className = 'airdrop-card';
                    
                    // Resto del código para crear cards...
                    // (Código omitido para brevedad, es el mismo que en renderAirdrops)
                    
                    grid.appendChild(card);
                });
            });
            
            // Configurar toggle de modo oscuro
            document.querySelector('.theme-toggle').addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                const icon = this.querySelector('i');
                const text = this.querySelector('span');
                
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    text.textContent = 'Modo Claro';
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    text.textContent = 'Modo Oscuro';
                }
            });
        });
    // Configurar botones de detalles
// Configurar botones de detalles
// Configurar botones de detalles
// Configurar botones de detalles
// Function to handle the details button click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('details-btn') || e.target.closest('.details-btn')) {
        const button = e.target.classList.contains('details-btn') ? e.target : e.target.closest('.details-btn');
        const airdropId = button.getAttribute('data-id');
        const airdrop = airdrops.find(a => a.id == airdropId);
        
        if (!airdrop) return;
        const projectSlug = airdrop.title.toLowerCase().replace(/\s+/g, '-');
        const newUrl = `${window.location.pathname}?project=${projectSlug}-${airdropId}`;
        window.history.pushState({ id: airdropId }, '', newUrl);
        // Crear modal de detalles a pantalla completa
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'white';
        modal.style.zIndex = '1000';
        modal.style.overflow = 'auto';
        
        // Obtener badges HTML
        let badgesHTML = '';
        if (airdrop.badges && airdrop.badges.length) {
            airdrop.badges.forEach(badge => {
                let badgeClass = 'badge-primary';
                let badgeText = '';
                let badgeUrl = '';
                if (typeof badge === 'string') {
                    badgeText = badge;
                    if (badge === 'Web' && airdrop.webUrl) {
                        badgeUrl = airdrop.webUrl;
                    } else if (badge === 'X' && airdrop.xUrl) {
                        badgeUrl = airdrop.xUrl;
                    } else if (badge === 'Docs' && airdrop.docsUrl) {
                        badgeUrl = airdrop.docsUrl;
                    } else {
                        badgeUrl = '#';
                    }
                    if (badge.toLowerCase().includes('depin')) badgeClass = 'badge-info';
                    if (badge.toLowerCase().includes('testnet')) badgeClass = 'badge-warning';
                    if (badge.toLowerCase().includes('staking')) badgeClass = 'badge-success';
                    if (badge.toLowerCase().includes('gaming')) badgeClass = 'badge-danger';
                    if (badge.toLowerCase().includes('social')) badgeClass = 'badge-primary';
                }
                
                badgesHTML += `<a href="${badgeUrl}" class="badge ${badgeClass}" target="_blank">${badgeText}</a>`;
            });
        }
        
        // Generar el HTML de los pasos de participación personalizados
        let participationStepsHTML = '';
        if (airdrop.participationSteps && airdrop.participationSteps.length) {
            participationStepsHTML = `
                <div style="padding-left: 0;">
                    ${airdrop.participationSteps.map((step, index) => {
                        // Always include the icon
                        const iconHTML = `
                            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--primary); display: flex; align-items: center; justify-content: center; color: white; margin-right: 1rem;">
                                <i class="fas ${step.icon}"></i>
                            </div>
                        `;
                        
                        // Check if this step has an image
                        if (step.image) {
                            return `
                                <div style="margin-bottom: 1.5rem; padding: 1rem; background-color: #f8fafc; border-radius: var(--border-radius);">
                                    <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                                        ${iconHTML}
                                        <span style="font-size: 1.2rem; font-weight: 600;">${step.step}</span>
                                    </div>
                                    <div style="text-align: center; margin-top: 1rem;">
                                        <img src="${step.image}" alt="${step.step}" style="max-width: 100%; max-height: 250px; border-radius: var(--border-radius); box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
                                    </div>
                                </div>
                            `;
                        } else {
                            // Standard icon-based step
                            return `
                                <div style="display: flex; align-items: center; margin-bottom: 1rem; padding: 1rem; background-color: #f8fafc; border-radius: var(--border-radius);">
                                    ${iconHTML}
                                    <span style="font-size: 1.1rem;">${step.step}</span>
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            `;
        } else {
            // Fallback if no steps defined
            participationStepsHTML = `
                <div style="padding: 1.5rem; background-color: #f8fafc; border-radius: var(--border-radius); margin-bottom: 2rem;">
                    <p style="font-size: 1.1rem; line-height: 1.7;">${airdrop.info || 'Visit the official website and follow the instructions to participate in this airdrop. Make sure to complete all required tasks to qualify for potential rewards.'}</p>
                </div>
            `;
        }
        
        // Function to get status icon based on status
        function getStatusIcon(status) {
            switch(status) {
                case 'Confirmed':
                    return '<i class="fas fa-check-circle" style="color: var(--success);"></i>';
                case 'Potential':
                    return '<i class="fas fa-question-circle" style="color: var(--warning);"></i>';
                case 'Distributed':
                    return '<i class="fas fa-parachute-box" style="color: var(--primary);"></i>';
                case 'Verification':
                    return '<i class="fas fa-clipboard-check" style="color: var(--info);"></i>';
                default:
                    return '<i class="fas fa-info-circle" style="color: var(--gray);"></i>';
            }
        }
        
        // Function to get status background color
        function getStatusColor(status) {
            switch(status) {
                case 'Confirmed':
                    return 'var(--success)';
                case 'Potential':
                    return 'var(--warning)';
                case 'Distributed':
                    return 'var(--primary)';
                case 'Verification':
                    return 'var(--info)';
                default:
                    return 'var(--gray)';
            }
        }
        
        // Get specific reference image based on airdrop title/id and check if it exists
        let referenceImage = '';
        let hasReferenceImage = false;
        
        if (airdrop.referenceImage && airdrop.referenceImage !== '') {
            referenceImage = airdrop.referenceImage;
            hasReferenceImage = true;
        } else if (airdrop.title === 'Fireverse') {
            referenceImage = 'Imagen/fireverse fondo.jpg';
            hasReferenceImage = true;
        } else if (airdrop.title === 'Gradient') {
            referenceImage = 'Imagen/my_network.png';
            hasReferenceImage = true;
        } else {
            // No reference image available
            hasReferenceImage = false;
        }
        
        // Check for additional images
        const hasAdditionalImages = airdrop.additionalImages && Array.isArray(airdrop.additionalImages) && airdrop.additionalImages.length > 0;
        
        // Check for investors
        const hasInvestors = airdrop.investors && Array.isArray(airdrop.investors) && airdrop.investors.length > 0;
        
        // Contenido del modal a pantalla completa estilo e-commerce
        modal.innerHTML = `
            <div style="position: sticky; top: 0; z-index: 100; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button class="back-button" style="background: none; border: none; color: white; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center;">
                        <i class="fas fa-arrow-left"></i>
                        <span style="margin-left: 0.5rem;">Back</span>
                    </button>
                </div>
                <h2 style="font-size: 1.5rem; margin: 0;">${airdrop.title}</h2>
                <button style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;" class="close-modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div style="max-width: 1200px; margin: 0 auto; padding: 2rem 1rem;">
                <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; margin-bottom: 2rem;">
                    <div>
                        <div style="background-color: white; border-radius: var(--border-radius); padding: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); text-align: center;">
                            <div style="width: 180px; height: 180px; border-radius: 50%; background-image: url('${airdrop.image}'); background-size: cover; background-position: center; border: 4px solid var(--primary); margin: 0 auto 1.5rem;"></div>
                            <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">${airdrop.title}</h1>
                            <div style="margin: 1rem 0;">
                                <span class="badge badge-${getTypeClass(airdrop.type)}" style="font-size: 1rem; padding: 0.5rem 1rem;">${airdrop.type.charAt(0).toUpperCase() + airdrop.type.slice(1)}</span>
                            </div>
                            <div style="margin: 1.5rem 0;">
                                ${badgesHTML}
                            </div>
                            <div style="margin-top: 2rem;">
                                <a href="${airdrop.link || '#'}" class="action-btn" target="_blank" style="display: block; width: 100%; padding: 0.8rem; font-size: 1.1rem; margin-bottom: 1rem;">
                                    <i class="fas fa-external-link-alt"></i> Join Airdrop
                                </a>
                                <button class="bookmark-btn" style="width: 100%; padding: 0.8rem; font-size: 1.1rem; background: transparent; border: 2px solid var(--primary); color: var(--primary); border-radius: var(--border-radius); cursor: pointer; transition: all 0.3s; font-weight: 600; display: flex; justify-content: center; align-items: center; gap: 0.5rem;">
                                    <i class="far fa-bookmark"></i> Add to Watchlist
                                </button>
                                
                                <!-- Reference image section - Only shown if there's an image -->
                                ${hasReferenceImage ? `
                                <div style="margin-top: 2rem; border-top: 1px solid #f1f5f9; padding-top: 1.5rem;">
                                    <h3 style="font-size: 1.2rem; margin-bottom: 1rem; text-align: left;">Reference Image</h3>
                                    <div class="reference-image-container" style="cursor: pointer; position: relative;">
                                        <img src="${referenceImage}" alt="${airdrop.title} reference" style="max-width: 100%; border-radius: var(--border-radius); box-shadow: 0 4px 8px rgba(0,0,0,0.1);" onclick="openLightbox('${referenceImage}', ${JSON.stringify(hasAdditionalImages ? airdrop.additionalImages : [])})">
                                        ${hasAdditionalImages ? `<div class="more-images-badge" style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem;"><i class="fas fa-images"></i> +${airdrop.additionalImages.length}</div>` : ''}
                                    </div>
                                </div>
                                ` : ''}
                                
                                <!-- Investors section -->
                                ${hasInvestors ? `
                                <div style="margin-top: 2rem; border-top: 1px solid #f1f5f9; padding-top: 1.5rem;">
                                    <h3 style="font-size: 1.2rem; margin-bottom: 1rem; text-align: left;">Investors</h3>
                                    <div class="investors-container" style="display: flex; flex-wrap: wrap; gap: 1rem;">
                                        ${airdrop.investors.map(investor => `
                                            <a href="${investor.url || '#'}" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background-color: #f8fafc; border-radius: var(--border-radius); text-decoration: none; color: var(--dark); transition: all 0.3s;">
                                                ${investor.logo ? `<img src="${investor.logo}" alt="${investor.name}" style="width: 24px; height: 24px; border-radius: 50%;">` : '<i class="fas fa-building"></i>'}
                                                <span>${investor.name}</span>
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div style="background-color: white; border-radius: var(--border-radius); padding: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin-bottom: 2rem;">
                            <h2 style="font-size: 1.8rem; margin-bottom: 1rem; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.8rem;">About ${airdrop.title}</h2>
                            <p style="margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.7;">${airdrop.description}</p>
                            <p style="margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.7;">${airdrop.info}</p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background-color: #f8fafc; border-radius: var(--border-radius);">
                                    <div style="width: 50px; height: 50px; border-radius: 50%; background-color: var(--primary); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                                        <i class="fas fa-calendar-alt"></i>
                                    </div>
                                    <div>
                                        <span style="display: block; color: var(--gray); font-size: 0.9rem;">Launch Date</span>
                                        <strong style="font-size: 1.1rem;">${airdrop.launchDate}</strong>
                                    </div>
                                </div>
                                
                                ${airdrop.funds ? `
                                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background-color: #f8fafc; border-radius: var(--border-radius);">
                                    <div style="width: 50px; height: 50px; border-radius: 50%; background-color: var(--success); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                                        <i class="fas fa-coins"></i>
                                    </div>
                                    <div>
                                        <span style="display: block; color: var(--gray); font-size: 0.9rem;">Funding</span>
                                        <strong style="font-size: 1.1rem;">${airdrop.funds}</strong>
                                    </div>
                                </div>
                                ` : ''}
                                
                                ${airdrop.status ? `
                                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background-color: #f8fafc; border-radius: var(--border-radius);">
                                    <div style="width: 50px; height: 50px; border-radius: 50%; background-color: ${getStatusColor(airdrop.status)}; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                                        ${getStatusIcon(airdrop.status).replace('style="color: var', 'style="color: white')}
                                    </div>
                                    <div>
                                        <span style="display: block; color: var(--gray); font-size: 0.9rem;">Status</span>
                                        <strong style="font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                                            ${getStatusIcon(airdrop.status)} ${airdrop.status}
                                        </strong>
                                    </div>
                                </div>
                                ` : ''}
                                
                                ${airdrop.code ? `
                                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background-color: #f8fafc; border-radius: var(--border-radius);">
                                    <div style="width: 50px; height: 50px; border-radius: 50%; background-color: var(--secondary); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                                        <i class="fas fa-key"></i>
                                    </div>
                                    <div>
                                        <span style="display: block; color: var(--gray); font-size: 0.9rem;">Referral Code</span>
                                        <strong style="font-size: 1.1rem;">${airdrop.code}</strong>
                                    </div>
                                </div>
                                ` : ''}
                            </div>
                        </div>
                        
                        <div style="background-color: white; border-radius: var(--border-radius); padding: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                            <h2 style="font-size: 1.8rem; margin-bottom: 1rem; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.8rem;">How to Participate</h2>
                            
                            <!-- Aquí insertamos los pasos de participación personalizados -->
                            ${participationStepsHTML}
                            
                            <h3 style="font-size: 1.3rem; margin: 1.5rem 0 1rem;">Quick Links</h3>
                            <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                                <a href="${airdrop.link || '#'}" class="action-btn" target="_blank" style="display: flex; align-items: center; gap: 0.5rem;">
                                    <i class="fas fa-external-link-alt"></i> Official Website
                                </a>
                                
                                ${airdrop.xUrl ? `
                                <a href="${airdrop.xUrl}" class="details-btn" target="_blank" style="display: flex; align-items: center; gap: 0.5rem;">
                                    <i class="fab fa-twitter"></i> X (Twitter)
                                </a>
                                ` : ''}
                                
                                ${airdrop.docsUrl ? `
                                <a href="${airdrop.docsUrl}" class="details-btn" target="_blank" style="display: flex; align-items: center; gap: 0.5rem;">
                                    <i class="fas fa-book"></i> Documentation
                                </a>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background-color: white; border-radius: var(--border-radius); padding: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); margin-bottom: 2rem;">
                    <h2 style="font-size: 1.8rem; margin-bottom: 1rem; border-bottom: 2px solid #f1f5f9; padding-bottom: 0.8rem;">Community & Social</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
                        ${airdrop.xUrl ? `
                        <a href="${airdrop.xUrl}" target="_blank" style="display: flex; flex-direction: column; align-items: center; padding: 1.5rem; background-color: #f8fafc; border-radius: var(--border-radius); text-decoration: none; color: var(--dark); transition: transform 0.3s, box-shadow 0.3s;">
                            <i class="fab fa-twitter" style="font-size: 2.5rem; color: #1DA1F2; margin-bottom: 1rem;"></i>
                            <span>X (Twitter)</span>
                        </a>
                        ` : ''}
                        
                        <a href="https://t.me/CryptoAirdropFinder24" target="_blank" style="display: flex; flex-direction: column; align-items: center; padding: 1.5rem; background-color: #f8fafc; border-radius: var(--border-radius); text-decoration: none; color: var(--dark); transition: transform 0.3s, box-shadow 0.3s;">
                            <i class="fab fa-telegram" style="font-size: 2.5rem; color: #0088cc; margin-bottom: 1rem;"></i>
                            <span>Telegram</span>
                        </a>
                        
                        <a href="#" style="display: flex; flex-direction: column; align-items: center; padding: 1.5rem; background-color: #f8fafc; border-radius: var(--border-radius); text-decoration: none; color: var(--dark); transition: transform 0.3s, box-shadow 0.3s;">
                            <i class="fab fa-discord" style="font-size: 2.5rem; color: #5865F2; margin-bottom: 1rem;"></i>
                            <span>Discord</span>
                        </a>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <a href="${airdrop.link || '#'}" class="action-btn" target="_blank" style="padding: 1rem 3rem; font-size: 1.2rem;">
                        Join ${airdrop.title} Airdrop Now
                    </a>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Estilo para los enlaces sociales en hover
        const socialLinks = modal.querySelectorAll('a[style*="flex-direction: column"]');
        socialLinks.forEach(link => {
            link.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            });
            
            link.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
        
        // Cerrar modal con botón de cierre
        modal.querySelector('.close-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
            window.history.pushState({}, '', window.location.pathname);
        });
        
        // Cerrar modal con botón de regresar
        modal.querySelector('.back-button').addEventListener('click', function() {
            document.body.removeChild(modal);
            window.history.pushState({}, '', window.location.pathname);
        });
        
        // Actualizar el botón de bookmark
        modal.querySelector('.bookmark-btn').addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.innerHTML = '<i class="fas fa-bookmark"></i> Added to Watchlist';
                this.style.backgroundColor = 'var(--primary)';
                this.style.color = 'white';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.innerHTML = '<i class="far fa-bookmark"></i> Add to Watchlist';
                this.style.backgroundColor = 'transparent';
                this.style.color = 'var(--primary)';
            }
        });
    }
});

// Function for the lightbox to display additional images
function openLightbox(mainImage, additionalImages = []) {
    // Combine main image with additional images
    const allImages = [mainImage, ...(additionalImages || [])].filter(img => img); // Remove any undefined or null
    let currentImageIndex = 0;
    
    // Show the modal
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.style.display = 'flex';
        
        // Set the first image
        const img = document.getElementById('lightbox-image');
        if (img) {
            img.src = allImages[currentImageIndex];
            
            // Update counter
            const counter = document.getElementById('image-counter');
            if (counter) {
                counter.textContent = `${currentImageIndex + 1} / ${allImages.length}`;
            }
            
            // Toggle nav buttons visibility
            const prevBtn = document.getElementById('prev-image');
            const nextBtn = document.getElementById('next-image');
            if (prevBtn) prevBtn.style.visibility = 'hidden'; // Hide prev button for first image
            if (nextBtn) nextBtn.style.visibility = allImages.length > 1 ? 'visible' : 'hidden';
        }
        
        // Prevent scrolling on body
        document.body.style.overflow = 'hidden';
    }
}

// Helper function for type classes
function getTypeClass(type) {
    switch(type.toLowerCase()) {
        case 'depin':
            return 'info';
        case 'testnet':
            return 'warning';
        case 'staking':
            return 'success';
        case 'gaming':
            return 'danger';
        case 'social':
            return 'primary';
        default:
            return 'secondary';
    }
}
    </script>
    
    <script src="data_proyect.js"></script>
    <script>
    // Función para obtener precios de criptomonedas
// Improved crypto price fetching function
// Reemplaza la función fetchCryptoPrices actual con esta nueva versión
async function fetchCryptoPrices(showLoadingIndicator = true) {
    const container = document.getElementById('crypto-prices-container');
    
    // Show loading indicator only if requested
    if (showLoadingIndicator) {
        container.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i> Loading cryptocurrency prices...
            </div>
        `;
    }
    
    try {
        // Use a more direct API endpoint and limit data
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
        const data = await response.json();
        
        container.innerHTML = '';
        
        // Create grid for prices
        const priceGrid = document.createElement('div');
        priceGrid.className = 'crypto-price-grid';
        priceGrid.style.display = 'grid';
        priceGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
        priceGrid.style.gap = '1rem';
        
        data.forEach(crypto => {
            const priceChange = crypto.price_change_percentage_24h;
            const isPositive = priceChange > 0;
            
            const card = document.createElement('div');
            card.className = 'crypto-price-card';
            card.style.backgroundColor = 'white';
            card.style.borderRadius = 'var(--border-radius)';
            card.style.padding = '1rem';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            card.style.display = 'flex';
            card.style.alignItems = 'center';
            card.style.transition = 'transform 0.3s';
            
            card.innerHTML = `
                <img src="${crypto.image}" alt="${crypto.name}" style="width: 40px; height: 40px; margin-right: 1rem;">
                <div style="flex: 1;">
                    <div style="font-weight: bold;">${crypto.name} (${crypto.symbol.toUpperCase()})</div>
                    <div style="font-size: 1.2rem; font-weight: 600;">$${crypto.current_price.toLocaleString()}</div>
                </div>
                <div style="display: flex; flex-direction: column; align-items: flex-end;">
                    <div style="font-size: 0.9rem; color: ${isPositive ? 'var(--success)' : 'var(--danger)'}; font-weight: 600;">
                        ${isPositive ? '▲' : '▼'} ${Math.abs(priceChange).toFixed(2)}%
                    </div>
                    <div style="font-size: 0.8rem; color: var(--gray);">24h</div>
                </div>
            `;
            
            // Add hover effect
            card.addEventListener('mouseover', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseout', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            });
            
            priceGrid.appendChild(card);
        });
        
        container.appendChild(priceGrid);
        
        // Add refresh button
        const refreshButton = document.createElement('button');
        refreshButton.className = 'action-btn';
        refreshButton.style.marginTop = '1rem';
        refreshButton.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Prices';
        refreshButton.style.display = 'block';
        refreshButton.style.margin = '1rem auto 0';
        
        refreshButton.addEventListener('click', function() {
            // Show a quick refresh animation
            this.disabled = true;
            this.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Updating...';
            
            // Fetch new prices
            fetchCryptoPrices(false).then(() => {
                this.disabled = false;
                this.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Prices';
            });
        });
        
        container.appendChild(refreshButton);
        
        // Add timestamp
        const timestamp = document.createElement('div');
        timestamp.style.textAlign = 'center';
        timestamp.style.marginTop = '0.5rem';
        timestamp.style.fontSize = '0.9rem';
        timestamp.style.color = 'var(--gray)';
        timestamp.innerHTML = `Last updated: ${new Date().toLocaleTimeString()}`;
        
        container.appendChild(timestamp);
        
        return true;
    } catch (error) {
        console.error('Error fetching crypto prices:', error);
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: var(--warning); margin-bottom: 1rem;"></i>
                <p>Failed to load cryptocurrency prices. Please try again later.</p>
                <button class="action-btn" onclick="fetchCryptoPrices()" style="margin-top: 1rem;">
                    <i class="fas fa-sync-alt"></i> Try Again
                </button>
            </div>
        `;
        return false;
    }
}
    // Inicializar la obtención de precios cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Hide trending section initially
    const trendingSection = document.querySelector('.trending-prices');
    trendingSection.style.display = 'none';

    const urlParams = new URLSearchParams(window.location.search);
    const projectParam = urlParams.get('project');
    if (projectParam) {
        // Extract the project ID from the URL (format: project-name-ID)
        const projectId = projectParam.split('-').pop();
        
        // Find the airdrop
        const airdrop = airdrops.find(a => a.id == projectId);
        
        // If found, open the details modal
        if (airdrop) {
            // Simulate clicking the details button for this airdrop
            setTimeout(() => {
                // First render airdrops to ensure they're on the page
                renderAirdrops();
                
                // Then find and click the button
                const detailsBtn = document.querySelector(`.details-btn[data-id="${projectId}"]`);
                if (detailsBtn) detailsBtn.click();
            }, 100);
        }
    }
    // Pre-fetch prices in the background
    fetchCryptoPrices(true);
    
    // Add click event to all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if this is the Trending link
            if (this.innerHTML.includes('fa-fire') && this.innerHTML.includes('Trending')) {
                // Hide airdrop content
                document.querySelector('.hero').style.display = 'none';
                document.querySelector('main.container').style.display = 'none';
                
                // Show trending section
                trendingSection.style.display = 'block';
                
                // Fetch fresh crypto prices
                fetchCryptoPrices(true);
            }
            
            // Check if this is the Home/Inicio link
            if (this.innerHTML.includes('fa-home') && this.innerHTML.includes('Inicio')) {
                // Show airdrop content
                document.querySelector('.hero').style.display = 'block';
                document.querySelector('main.container').style.display = 'block';
                
                // Hide trending section
                trendingSection.style.display = 'none';
            }
        });
    });
    
    // Update prices every 30 seconds when the section is visible
    setInterval(function() {
        if (trendingSection.style.display !== 'none') {
            fetchCryptoPrices(false);
        }
    }, 30000); // Reduced to 30 seconds for more frequent updates
});
</script>
<!-- Lightbox Modal -->
<div id="lightbox-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.9); z-index: 2000; justify-content: center; align-items: center; flex-direction: column;">
    <div style="position: absolute; top: 20px; right: 20px;">
        <button id="close-lightbox" style="background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div style="max-width: 90%; max-height: 80%;">
        <img id="lightbox-image" src="" alt="Lightbox image" style="max-width: 100%; max-height: 80vh; object-fit: contain;">
    </div>
    <div id="lightbox-nav" style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem;">
        <button id="prev-image" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
            <i class="fas fa-chevron-left"></i> Previous
        </button>
        <div id="image-counter" style="color: white; display: flex; align-items: center;"></div>
        <button id="next-image" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">
            Next <i class="fas fa-chevron-right"></i>
        </button>
    </div>
</div>

<script>
// Lightbox functionality
let currentImageIndex = 0;
let allImages = [];

function openLightbox(mainImage, additionalImages = []) {
    // Combine main image with additional images
    allImages = [mainImage, ...additionalImages].filter(img => img); // Remove any undefined or null
    currentImageIndex = 0;
    
    // Show the modal
    const modal = document.getElementById('lightbox-modal');
    modal.style.display = 'flex';
    
    // Display the first image
    updateLightboxImage();
    
    // Prevent scrolling on body
    document.body.style.overflow = 'hidden';
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-image');
    img.src = allImages[currentImageIndex];
    
    // Update counter
    document.getElementById('image-counter').textContent = `${currentImageIndex + 1} / ${allImages.length}`;
    
    // Toggle nav buttons visibility
    document.getElementById('prev-image').style.visibility = currentImageIndex > 0 ? 'visible' : 'hidden';
    document.getElementById('next-image').style.visibility = currentImageIndex < allImages.length - 1 ? 'visible' : 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Set up event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close-lightbox').addEventListener('click', closeLightbox);
    
    document.getElementById('prev-image').addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateLightboxImage();
        }
    });
    
    document.getElementById('next-image').addEventListener('click', function() {
        if (currentImageIndex < allImages.length - 1) {
            currentImageIndex++;
            updateLightboxImage();
        }
    });
    
    // Close lightbox when clicking outside the image
    document.getElementById('lightbox-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (document.getElementById('lightbox-modal').style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
                currentImageIndex--;
                updateLightboxImage();
            } else if (e.key === 'ArrowRight' && currentImageIndex < allImages.length - 1) {
                currentImageIndex++;
                updateLightboxImage();
            }
        }
    });
});
</script>
</body>
</html>

