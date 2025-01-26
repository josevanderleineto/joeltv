import 'bootstrap';
import * as bootstrap from 'bootstrap';

// menu.ts
export const menuHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Joel TV</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Início</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">Sobre Mim</a></li>
          <li class="nav-item"><a class="nav-link" href="#services">Serviços</a></li>
          <li class="nav-item"><a class="nav-link" href="#products">Produtos</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inserir o menu no header e footer
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  
  if (header) {
    header.insertAdjacentHTML('beforebegin', menuHTML);
  }

  if (footer) {
    footer.insertAdjacentHTML('beforebegin', menuHTML);
  }

  // Fechar o menu quando o usuário clicar fora dele
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggle = document.querySelector('.navbar-toggler') as HTMLButtonElement;

  document.addEventListener('click', (event) => {
    if (navbarCollapse && !navbarCollapse.contains(event.target as Node) && !navbarToggle.contains(event.target as Node)) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide(); // Fecha o menu programaticamente
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const services = [
    {
      title: 'Manutenção de TVs',
      description: 'Reparos rápidos e eficientes para todos os modelos de TVs.',
    },
    {
      title: 'Instalação de Suportes',
      description: 'Garantimos uma instalação segura para sua TV em qualquer ambiente.',
    },
    {
      title: 'Ajuste de Imagem',
      description: 'Correção de cores e resolução da sua TV com a melhor qualidade.',
    },
  ];

  const servicesContainer = document.getElementById('services-cards');
  if (servicesContainer) {
    services.forEach(service => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${service.title}</h5>
            <p class="card-text">${service.description}</p>
          </div>
        </div>
      `;
      servicesContainer.appendChild(card);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function (this: HTMLAnchorElement, event) {
      event.preventDefault();

      const cardText = this.previousElementSibling as HTMLElement;

      // Alternar a classe 'hidden' no texto do card
      cardText.classList.toggle('hidden');

      // Alterar o texto do botão dependendo do estado
      if (cardText.classList.contains('hidden')) {
        this.textContent = 'Saiba mais';
      } else {
        this.textContent = 'Ver menos';
      }
    });
  });
});

// script.ts
const carouselElement = document.querySelector<HTMLDivElement>('#carouselExample')!;
new bootstrap.Carousel(carouselElement, {
  interval: 3000, // Alterna as imagens automaticamente a cada 3 segundos
  ride: 'carousel', // Ativa o autoplay ao carregar a página
});
