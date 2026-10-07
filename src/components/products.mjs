import {logo,label,button,icon} from './shared.mjs';
export const products=[
  {
    slug:'minha-dialise',
    name:'Minha Diálise',
    category:'DIÁLISE PERITONEAL + HEMODIÁLISE',
    description:'Aplicativo funcional para pessoas em diálise peritoneal e hemodiálise, criado para registrar, organizar e acompanhar a rotina do tratamento de forma simples e intuitiva.',
    features:['Diálise Peritoneal','Hemodiálise','Histórico'],
    status:'Aplicativo funcional · Diálise Peritoneal + Hemodiálise · ainda não disponível nas lojas',
    detail:'O Minha Diálise reúne fluxos dedicados para Diálise Peritoneal e Hemodiálise, com registros da terapia, histórico, gráficos e relatórios para apoiar a organização e o acompanhamento do dia a dia.',
    note:'Conheça o projeto e converse com a Nefriva sobre sua disponibilidade.'
  },
  {
    slug:'renal-food',
    name:'Renal Food',
    category:'ALIMENTAÇÃO + REALIDADE AUMENTADA',
    description:'Tecnologia em testes funcionais criada para ajudar pessoas com doença renal a compreender melhor os alimentos e apoiar escolhas mais conscientes, inclusive com recursos de realidade aumentada.',
    features:['Câmera','Código de barras','Realidade aumentada'],
    status:'Protótipo funcional em testes',
    detail:'O Renal Food aplica câmera, leitura de código de barras e realidade aumentada para tornar a informação alimentar mais acessível no contexto da saúde renal. No modo AR, a câmera pode ser apontada para alimentos em balcões e vitrines para apoiar a comparação visual de opções em tempo real, com acesso a informações relevantes como fósforo e potássio.',
    note:'O produto já está em testes funcionais e continua evoluindo antes da distribuição pública.'
  }
];
export const Products=()=>`<section class="section products" id="produtos"><div class="container"><div class="section-heading split-heading reveal"><div>${label('03 / NOSSOS PRODUTOS')}<h2>Um ecossistema.<br><em>Diferentes soluções.</em></h2></div><p>Cada solução começa com uma necessidade.<br>Todas compartilham o mesmo propósito.</p></div><div class="product-grid">${products.map((p,i)=>`<article class="product-card ${p.slug} reveal"><div class="product-visual">${logo(p.slug)}<span class="product-number">0${i+1}</span></div><div class="product-content">${label(p.category)}<h3>${p.name}</h3><p>${p.description}</p><div class="product-tags">${p.features.map(f=>`<span>${f}</span>`).join('')}</div>${button('Conhecer '+p.name,'/'+p.slug+'/')}<p class="status">${p.status}</p></div></article>`).join('')}</div><div class="future-card reveal"><div class="future-symbol">${icon('spark')}</div><div><h3>Novas soluções estão chegando.</h3><p>A Nefriva continuará desenvolvendo tecnologias para diferentes momentos da jornada renal.</p></div><span class="future-caption">NOSSA VISÃO CONTINUA</span></div></div></section>`;
