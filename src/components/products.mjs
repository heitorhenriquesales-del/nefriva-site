import {logo,label,button,icon} from './shared.mjs';
export const products=[
  {
    slug:'minha-dialise',
    name:'Minha Diálise',
    category:'DIÁLISE PERITONEAL + HEMODIÁLISE',
    description:'Aplicativo funcional para pessoas em diálise peritoneal e hemodiálise, com registro da terapia, controle de estoque dos materiais e recursos de acessibilidade por voz para tornar o acompanhamento mais simples no dia a dia.',
    features:['DP + Hemodiálise','Controle de estoque','Acessibilidade por voz','Gráficos & PDF'],
    status:'Aplicativo funcional em evolução · iOS em testes · preparação para distribuição',
    detail:'O Minha Diálise reúne fluxos dedicados para Diálise Peritoneal e Hemodiálise. Permite registrar a terapia, organizar bolsas por concentração e identificação visual por cores, acompanhar o estoque de materiais, consultar histórico, gráficos e relatórios em PDF. A nova área de acessibilidade oferece preenchimento conversacional por voz, com modo automático ou por botão de microfone, mantendo também o preenchimento manual.',
    note:'O produto continua evoluindo antes da distribuição pública, com foco em organização, acessibilidade e acompanhamento da rotina renal.'
  },
  {
    slug:'renal-food',
    name:'Renal Food',
    category:'ALIMENTAÇÃO + IA + REALIDADE AUMENTADA',
    description:'Assistente alimentar renal em testes funcionais que combina câmera, inteligência artificial, código de barras e realidade aumentada para tornar informações sobre os alimentos mais fáceis de entender no momento da escolha.',
    features:['Foto + IA','Código de barras','Radar Renal AR','Comparação em AR'],
    status:'Protótipo funcional em evolução · análise alimentar e AR em testes',
    detail:'O Renal Food analisa alimentos por foto e apresenta informações como fósforo, potássio e sódio, além de destacar no prato o item que exige maior atenção. O Radar Renal usa realidade aumentada para identificar alimentos e manter cards informativos acompanhando os itens conforme a câmera se movimenta. No modo “Qual eu escolho?”, a pessoa pode apontar a câmera para balcões e vitrines e comparar opções em tempo real. Em iPhones compatíveis, a experiência está sendo preparada para aproveitar LiDAR e ARKit; nos demais aparelhos, o projeto prevê rastreamento visual por câmera como alternativa.',
    note:'O produto está em testes funcionais e segue sendo refinado antes da distribuição pública. As informações do app apoiam a compreensão alimentar e não substituem orientação individual da equipe de saúde.'
  }
];
export const Products=()=>`<section class="section products" id="produtos"><div class="container"><div class="section-heading split-heading reveal"><div>${label('03 / NOSSOS PRODUTOS')}<h2>Um ecossistema.<br><em>Diferentes soluções.</em></h2></div><p>Cada solução começa com uma necessidade.<br>Todas compartilham o mesmo propósito.</p></div><div class="product-grid">${products.map((p,i)=>`<article class="product-card ${p.slug} reveal"><div class="product-visual">${logo(p.slug)}<span class="product-number">0${i+1}</span></div><div class="product-content">${label(p.category)}<h3>${p.name}</h3><p>${p.description}</p><div class="product-tags">${p.features.map(f=>`<span>${f}</span>`).join('')}</div>${button('Conhecer '+p.name,'/'+p.slug+'/')}<p class="status">${p.status}</p></div></article>`).join('')}</div><div class="future-card reveal"><div class="future-symbol">${icon('spark')}</div><div><h3>Novas soluções estão chegando.</h3><p>A Nefriva continuará desenvolvendo tecnologias para diferentes momentos da jornada renal.</p></div><span class="future-caption">NOSSA VISÃO CONTINUA</span></div></div></section>`;
