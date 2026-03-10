# Landing Page responsiva (Tech / Premium) — especificação textual baseada no design_system enviado

## BLOCO ADICIONAL — Conteúdo obrigatório e prioridade de leitura (Lucas & Kauã)
Este bloco define conteúdos que DEVEM existir na Landing Page e a ordem recomendada de leitura. Caso haja conflito com outra sugestão anterior, este bloco tem prioridade (sem contradizer o design_system).

### 1) Hero / Primeira dobra (acima da dobra) — “Quem somos” em destaque
**Objetivo:** o visitante entender rapidamente quem somos, a proposta e ser impactado pela frase principal.

1. **Título principal (grande, em negrito ou fonte de destaque):**
   - Texto: **“Quem somos?”**
   - Requisito: deve estar entre as primeiras coisas a serem lidas (hierarquia de H1 ou H2 com alto destaque).

2. **Fotos (obrigatório):**
   - Foto do **Lucas** (separada)
   - Foto do **Kauã** (separada)
   - Diretriz: apresentar como dois cards/avatares lado a lado no desktop e empilhados no mobile, com borda/sombra seguindo o design_system.
   - Acessibilidade: `alt="Foto do Lucas"` e `alt="Foto do Kauã"`.

3. **Breve descrição (parágrafo curto, logo abaixo do título e das fotos):**
   - Texto (manter a ideia, podendo ajustar apenas pontuação/clareza sem mudar o sentido):
     “Somos estudantes de Desenvolvimento de Sistemas. Para melhorar nossas capacidades e portfólio, estamos há 2 anos estudando na área de Desenvolvimento. Queremos colocar em prática nossas experiências e aprendizados. Estamos oferecendo um serviço abaixo do preço de mercado, acessível para pequenos e grandes negócios.”
   - Diretriz: tom profissional, claro e objetivo. Pode quebrar em 2–3 frases para leitura rápida.

4. **Frase de impacto (obrigatória, bem grande e isolada abaixo da descrição):**
   - Texto exatamente assim:
     “Empreender não é só abrir um negócio, é ter coragem de acreditar noque ainda está sendo construído.”
   - Requisito: deve ter destaque máximo (headline grande), com bastante respiro acima/abaixo, para o cliente focar totalmente nela.

---

### 2) Seção “O que fazemos?” (muito evidente)
**Título (grande, em negrito ou fonte de destaque):**
- Texto: **“O que fazemos?”**
- Requisito: alta hierarquia (H2 grande) e leitura imediata.

**Descrição do serviço (obrigatória)**
- Texto base (pode ser reorganizado em bullets, sem perder conteúdo):
  “Fazemos sites personalizados do jeito que você quiser. Oferecemos um serviço de qualidade e um site profissional, com diversas ferramentas como: contato direto para WhatsApp, links para Instagram/Facebook, localização do seu negócio para todos verem, avaliações reais do Google e notas reais de clientes, fotos do seu produto/serviço com descrição e preço e até mesmo vídeo. Personalize do jeito que você quiser.”

**Sugestão de apresentação (não especificado no design_system)**
- Preferir lista de benefícios (bullets) + ícones (Google Symbols) para leitura rápida.

---

### 3) Seção “Nosso trabalho” / “O que entregamos” (características dos projetos)
**Objetivo:** mostrar o que normalmente entra nos sites e o valor do serviço.

**Conteúdo obrigatório (itens que devem aparecer como cards/itens)**
- Avaliações do Google
- Localização (mapa/endereços)
- Preços
- Serviços
- Fotos do serviço / produto
- (e outros itens do mesmo tipo)

**Diretriz de UI**
- Exibir em grid de cards (ex.: 6 cards), com ícones e microdescrição.
- Cards devem ter estados interativos (hover/focus/active) e usar scroll-reveal.

---

### 4) Seção “Demonstração em vídeo” (obrigatória)
**Conteúdo obrigatório**
- Um vídeo mostrando um de nossos sites para o cliente ter uma ideia de como trabalhamos e perceber que é profissional e bem feito.

**Diretriz**
- Seção com título claro (ex.: “Veja na prática”) + player responsivo.
- Abrir em modal é permitido (usando o componente `modal` do design_system), mas o vídeo também pode estar embutido na página.

---

### 5) Seção “Avaliações de clientes” (obrigatória)
**Requisitos do conteúdo**
- Deve haver depoimentos do tipo:
  - “Site extremamente bem feito e fluido, melhorou muito minhas vendas.”
  - “Entregou extremamente rápido.”
  - “Site muito bem feito.”
  - etc.
- Deve conter **3 a 6 avaliações**, sendo **obrigatório pelo menos 3** (você pediu “por exemplo”, mas também mencionou que deve haver com estrelas; recomendação: 5 avaliações).
- **Obrigatório:** cada avaliação deve mostrar **5 estrelas acima do texto**.

**Diretriz de UI**
- Cada depoimento em um card com:
  - 5 estrelas (ícones)
  - texto do depoimento
  - nome (opcional) e “Cliente”/segmento (opcional)
- Pode ser grid (desktop) e slider (mobile), desde que acessível.

---

### 6) Seção final “Orçamento no WhatsApp” (obrigatória e forte)
**Mensagem obrigatória**
- Deve deixar claro que o orçamento é feito pelo WhatsApp para ser flexível tanto com o cliente quanto para o vendedor.

**CTA obrigatório**
- Botão principal que redireciona para o WhatsApp do Kauã:
  - Número: +55 48 9216-3160
- Diretriz:
  - Botão grande (min 44px de altura), visual de CTA primário (cor de destaque do design_system).
  - Texto do botão (sugestão): “Fazer orçamento no WhatsApp”.

---

### 7) Motion/Interação obrigatória (reforço)
- Todos os blocos acima (Quem somos, O que fazemos, cards de recursos, vídeo, avaliações, CTA final) devem usar:
  - Scroll reveal (fade-in on scroll)
  - Estados interativos (hover/focus/active) nos containers/cards/botões
- Acessibilidade obrigatória:
  - foco visível
  - `prefers-reduced-motion` respeitado
 ## DEVE TER ESPAÇOS COM IMAGENS VAZIAS PARA EU COLOCAR ELAS MANUALMENTE
## 1) Resumo do estilo (look & feel)
A Landing Page deve ter um visual **clean, premium e tecnológico**, combinando **alto contraste** (preto/branco) com **acentos fortes** (vermelho #ba0c2f e gradientes vibrantes). O resultado esperado é uma página “confiante” e moderna, com hierarquia tipográfica bem marcada, bastante respiro e componentes claros (nav, cards, botões, modal/FAQ), transmitindo **credibilidade e produto de alta qualidade**.

Como o design_system sustenta isso:
- **Cores**: predominância de `#000/#000000` e `#fff/#ffffff` para base, com acentos como `#ba0c2f` e possibilidades de gradientes (ex.: `--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple` e `--wp--preset--gradient--midnight`).
- **Tipografia**: famílias modernas e “tech” (Google Sans Flex/Code, Karla) com variações de classes de texto (ex.: `text-over-media-*`).
- **Componentes**: presença de `nav`, `btn`, `card`, `modal`, `badge`, `dropdown-menu`, `accordion` (inferido via FAQ), reforçando uma landing page de produto.
- **Sombras e profundidade**: shadows predefinidas (natural/deep/sharp/outlined/crisp) para dar relevo com consistência.

---

## 2) Tokens e diretrizes extraídas do design_system

### Paleta (primária/secundária/neutros/sucesso/alerta/erro)
**Neutros (base)**
- Preto: `#000` / `#000000`
- Branco: `#fff` / `#ffffff`
- Cinza escuro: `#32373c`
- Cinza azulado: `#abb8c3`
- Cinza médio: `#999`
- Preto com opacidade: `rgba(0,0,0,.8)`
- Preto para sombra leve: `rgba(0, 0, 0, 0.2)` e sombra forte `rgba(0, 0, 0, 0.4)`

**Cor de destaque (brand / CTA)**
- Vermelho: `#ba0c2f` (bem recorrente)

**Feedback (quando aplicável)**
- Erro/alerta: `--wp--preset--color--vivid-red: #cf2e2e`
- Atenção: `--wp--preset--color--luminous-vivid-amber: #fcb900`
- Destaque quente: `--wp--preset--color--luminous-vivid-orange: #ff6900`
- Sucesso: `--wp--preset--color--vivid-green-cyan: #00d084`
- Informativo: `--wp--preset--color--vivid-cyan-blue: #0693e3`
- Roxo tech: `--wp--preset--color--vivid-purple: #9b51e0`
- Azul claro: `--wp--preset--color--pale-cyan-blue: #8ed1fc`

**Gradientes disponíveis (para hero / fundo / highlights)**
- `--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple`
- `--wp--preset--gradient--midnight`
- `--wp--preset--gradient--cool-to-warm-spectrum`
- (e outros gradientes listados no consolidado)

**Diretriz prática**
- Fundo principal: preto (`#000`) ou branco (`#fff`) dependendo do modo (preferência: **dark hero + seções claras alternadas**).
- CTA principal: vermelho `#ba0c2f` com texto branco.
- Elementos de “tecnologia”/premium: usar gradientes em detalhes (linhas, bordas, overlays, chips, glow sutil).

---

### Tipografia (famílias, pesos, tamanhos, hierarquia H1–H6, body, captions)
**Font families identificadas**
- `'Google Sans Flex'` (ideal para títulos e corpo principal)
- `'Google Sans Code'` (ideal para detalhes “tech”: métricas, snippets, labels)
- `Karla, Arial, sans-serif` (alternativa sólida para corpo)
- `fritz-kola, Arial, sans-serif` (display mais “bold/branding”, usar com cautela para não conflitar com o estilo tech)
- `'Google Symbols'` (ícones)

**Escala de tamanhos (tokens WP)**
- small: `13px`
- medium: `20px`
- large: `36px`
- x-large: `42px`

**Classes de texto encontradas (orientam padrões)**
- `text-over-media-eyebrow` (microtítulo/label acima do título)
- `text-over-media-headline` (headline no hero)
- `text-over-media-copy` (subheadline)
- `text-large-center`, `text-small-start`, `text-overlay`, `text-wrapper`

**Sugestão (não especificado no design_system): hierarquia recomendada**
- H1 (Hero): 42px (x-large) no desktop / 36px (large) no mobile, com tracking leve e line-height confortável.
- H2 (seções): 36px desktop / 28–32px mobile (ajustável).
- Body: 16–20px (use 20px “medium” para subheadline do hero).
- Caption/labels: 13px (small), em uppercase opcional e com fonte “Code” para vibe tech.

---

### Espaçamento e grid (spacing scale, container, gutters)
**Tokens (WP spacing)**
- `--wp--preset--spacing--20: 0.44rem`
- `--wp--preset--spacing--30: 0.67rem`
- `--wp--preset--spacing--40: 1rem`
- `--wp--preset--spacing--50: 1.5rem`
- `--wp--preset--spacing--60: 2.25rem`
- `--wp--preset--spacing--70: 3.38rem`
- `--wp--preset--spacing--80: 5.06rem`

**Classes observadas (escala “0”)**
- `pt-0`, `pb-0`, `mb-0`, `mt-0`

**Sugestão (não especificado no design_system): grid**
- Layout em container central com largura máxima:
  - Desktop: 1120–1200px
  - Tablet: 720–960px
  - Mobile: 100% com padding lateral 16–20px
- Gutters: 16px (mobile), 24px (tablet), 24–32px (desktop)

---

### Bordas, sombras, raio, blur
**Bordas**
- Classe: `rounded` (raio padrão)

**Sombras (WP preset)**
- natural: `6px 6px 9px rgba(0, 0, 0, 0.2)`
- deep: `12px 12px 50px rgba(0, 0, 0, 0.4)`
- sharp: `6px 6px 0px rgba(0, 0, 0, 0.2)`
- outlined: `6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)`
- crisp: `6px 6px 0px rgba(0, 0, 0, 1)`

**Diretriz**
- Cards: `natural` como default; `deep` para destaque (pricing “Pro”).
- Botões: usar sombra “crisp/sharp” apenas em estilo mais editorial; para tech premium, priorizar sombras mais suaves e “glow” (ver motion/sugestões).

---

### Ícones e ilustrações (estilo recomendado)
- Ícones: usar `'Google Symbols'`, preferindo traço consistente e peso uniforme.
- Ilustrações: estética “tech” (abstrata, gradientes, geometria, grids) e/ou mockups do produto.
- Fotos (se houver): alto contraste, fundos neutros, recortes limpos.

**Sugestão (não especificado no design_system)**
- Tratar ícones com cor branca em fundo escuro e `#ba0c2f`/gradiente em estados ativos.

---

### Motion (transições e microinterações)
Há indícios de estado `:focus-visible` e uso de `hover` em media query.

**Sugestão (não especificado no design_system)**
- Transições: 150–250ms, easing suave (ex.: ease-out).
- Hover em cards: leve elevação + ajuste de sombra (natural → deep sutil).
- Botões: hover com aumento de brilho/contraste; loading com spinner minimalista.
- Respeitar `prefers-reduced-motion: reduce` (desativar parallax/anim intensas).

---

## 3) Arquitetura da Landing Page (estrutura de seções)
A landing page deve seguir uma narrativa de produto com foco em conversão:

1. Header/Navbar (sticky)
2. Hero (headline + subheadline + CTAs + visual)
3. Prova social (logos + métricas)
4. Benefícios/Features (cards)
5. Como funciona (steps)
6. Integrações/tecnologias (badges/chips)
7. Depoimentos (cards ou slider)
8. Pricing (cards)
9. FAQ (accordion)
10. CTA final (reforço)
11. Footer (links, legal, social)

Componentes base alinhados ao design_system:
- `nav`, `nav__item`, `nav__link`, `navbar`, `nav-container`, `nav-wrapper`
- `btn`, `btn-primary`, `btn-pill`, `btn--rarr`
- `card`, `card-container`, `card-hover`, `card-set`, `card-set-full-bleed`
- `badge`, `badge-reduced`
- `modal`, `modal__*` (para vídeo/demo, login, ou “agendar demo”)
- `dropdown-menu` (idioma/locale: `nav__lang`, `nav-locale`)

---

## 4) Descrição detalhada por seção (UI + conteúdo)

### 4.1 Header / Navbar (sticky)
**Layout**
- Fundo: preto (`#000`) com texto branco.
- Container central; logo à esquerda (`nav-logo`), links no centro (desktop) e CTA à direita.
- Pode incluir seletor de idioma/local (`nav__lang`, `nav-locale` + `dropdown-menu`).

**Componentes**
- Links: `nav__item` + `nav__link` / `nav-link`.
- CTA secundário: botão ghost (texto branco, borda sutil `rgba(255,255,255,0.2)`).
- CTA primário: `btn-primary` em `#ba0c2f`.

**Estados**
- `:focus-visible` com outline branco (há referência de outline `#fff`).
- Hover: sublinhado sutil ou mudança de opacidade.
- Sticky: ao rolar, aplicar blur leve + sombra (Sugestão, não especificado).

**Conteúdo sugerido (copy)**
- Links: “Produto”, “Recursos”, “Preços”, “Cases”, “FAQ”
- CTA: “Começar agora” (primário) / “Ver demo” (secundário)

**Responsivo**
- Mobile: hamburger abre menu em `modal` (usar `modal__bg`, `modal__container`, `modal__close`).
- Tablet: links podem colapsar parcialmente; manter CTA principal visível.

---

### 4.2 Hero (primeira dobra)
**Layout**
- Seção full-bleed (pode usar `card-set-full-bleed` como referência) com fundo escuro.
- Conteúdo alinhado em duas colunas (desktop):
  - esquerda: texto
  - direita: imagem/ilustração (mockup do produto) com overlay/gradiente.
- Incluir `text-over-media-eyebrow`, `text-over-media-headline`, `text-over-media-copy`.

**Cores**
- Headline branca.
- Eyebrow em `#8ed1fc` ou `#abb8c3` (mais discreto).
- Destaque de palavras-chave em `#ba0c2f` ou com gradiente (ex.: vivid-cyan-blue → vivid-purple).

**CTAs**
- Primário: `btn-primary` (fundo `#ba0c2f`, texto branco).
- Secundário: `btn`/ghost com ícone seta `btn--rarr`.

**Conteúdo sugerido (copy)**
- Eyebrow: “PLATAFORMA TECNOLÓGICA”
- H1: “A landing page que parece produto — e converte como produto.”
- Subheadline: “Design premium, performance real e consistência total com seu Design System.”
- Microcopy: “Sem retrabalho. Sem inconsistência. Sem surpresas no responsivo.”

**Responsivo**
- Mobile: empilhar (texto primeiro, visual depois), CTAs em coluna com largura 100% e altura mínima 44px.
- Tablet: pode manter 2 colunas se houver espaço; caso contrário, empilhar.

---

### 4.3 Prova social (logos + métricas)
**Layout**
- Faixa com fundo claro (`#fff`) ou cinza muito leve (Sugestão).
- Grid de logos (monocromático) e, abaixo, 3–4 métricas em cards compactos.

**Componentes**
- `badge` para “Trusted by”.
- Cards pequenos com `text-wrapper`/`text-overlay`.

**Conteúdo sugerido**
- Métricas exemplo:
  - “+35% conversão”
  - “< 1s LCP (otimizado)”
  - “Acessível por padrão”
  - “Design tokens consistentes”

**Responsivo**
- Mobile: logos em carrossel simples (Sugestão) ou grid 2xN; métricas em coluna.

---

### 4.4 Benefícios / Features (cards)
**Layout**
- Fundo alternando (se hero é escuro, esta seção pode ser clara).
- Título (H2) + grid de 6 cards (3 colunas desktop, 2 tablet, 1 mobile).

**Componentes**
- `card`, com hover `card-hover`.
- Ícone com Google Symbols.
- `badge-reduced` para tags tipo “Novo”, “Rápido”, “Seguro”.

**Conteúdo sugerido (features)**
1. “Consistência de UI por tokens”
2. “Componentes reutilizáveis”
3. “Responsivo mobile-first”
4. “Acessibilidade (WCAG-friendly)”
5. “Performance e SEO”
6. “Integrações e escalabilidade”

**Estados**
- Hover: elevação e sombra `natural` → mais intensa.
- Focus: borda/outline visível.

---

### 4.5 Como funciona (steps)
**Layout**
- 3–4 passos numerados, com linhas/traços (tech).
- Pode usar cards horizontais (desktop) e verticais (mobile).

**Componentes**
- `badge` numerado (01, 02, 03) com `'Google Sans Code'`.
- `card` para cada passo.

**Conteúdo sugerido**
1. “Defina objetivos e público”
2. “Aplique tokens e componentes”
3. “Valide responsivo e acessibilidade”
4. “Otimize e publique”

---

### 4.6 Integrações / Tecnologias (badges/chips)
**Layout**
- Um bloco com fundo escuro e gradiente sutil (ex.: `--wp--preset--gradient--midnight`).
- Chips/badges em wrap.

**Componentes**
- `badge` / chips (Sugestão, não especificado como componente formal).
- Tipografia “Code” para nomes técnicos.

**Conteúdo sugerido**
- “Design Tokens”, “Components”, “SEO”, “Analytics”, “A/B Testing”, “CI/CD”, “i18n (nav-locale)”.

---

### 4.7 Depoimentos
**Layout**
- Cards com foto/avatares (ou iniciais) e texto.
- Desktop: 3 colunas; mobile: 1 card por vez (slider opcional).

**Componentes**
- `card`, `card-caption-heading` e `card-caption-content` (estrutura de título/conteúdo).
- `badge` para cargo/empresa.

---

### 4.8 Pricing (cards)
**Layout**
- 3 planos: Starter / Pro / Enterprise.
- Plano “Pro” destacado com sombra `deep` e/ou borda gradiente.

**Componentes**
- `card` com lista de benefícios.
- Botões: `btn-primary` no Pro, ghost nos demais.
- `badge` “Mais popular”.

**Conteúdo sugerido (exemplo)**
- Starter: “Para validar”
- Pro: “Para escalar”
- Enterprise: “Para times e compliance”

**Responsivo**
- Mobile: cards empilhados, CTA em 100% width.
- Tablet: 2 colunas + 1 abaixo ou carrossel.

---

### 4.9 FAQ (accordion)
**Layout**
- Título + accordion em lista.
- Cada item com separador sutil.

**Componentes**
- Accordion (não nomeado no DS, mas pode ser implementado com padrões de `card` + ícone).
- Estados: expandido/colapsado com ícone rotacionando.

**Acessibilidade**
- Botões com `aria-expanded`, `aria-controls`, foco visível, navegação por teclado.

---

### 4.10 CTA final
**Layout**
- Bloco de alta conversão com fundo escuro, gradiente sutil e texto branco.
- CTA grande centralizado.

**Componentes**
- `btn-pill` para CTA principal (se fizer sentido: “pílula” moderna).
- `modal` opcional para captura rápida de lead (nome/email).

**Copy sugerido**
- Título: “Pronto para lançar uma landing page com cara de produto?”
- Sub: “Comece agora e mantenha consistência total com seu design system.”
- CTA: “Começar agora” / “Agendar demo”

---

### 4.11 Footer
**Layout**
- Base escura (preto) com colunas de links.
- Estrutura alinhada com classes: `footer-container`, `footer-column-title`, `footer-column-links`, `footer-links`, `footer-link-cell`.

**Conteúdo**
- Produto, Recursos, Empresa, Legal.
- Idioma/locale (se existir): repetir seletor `nav-locales-list`.

---

## 5) Componentes e estados

### Botões
**Encontrados**
- `btn`, `btn-primary`, `btn-pill`, `btn--rarr`

**Comportamento sugerido**
- Primary: fundo `#ba0c2f`, texto branco, hover escurece levemente (ou aumenta saturação), focus-visible com outline branco.
- Secondary/Ghost: fundo transparente, borda branca/translúcida, hover com leve preenchimento `rgba(255,255,255,0.08)`.
- Pill: raio máximo (pílula), ideal para CTA final.
- Com ícone: `btn--rarr` adiciona seta à direita.

### Campos e formulários (Sugestão — não especificado no design_system)
- Inputs com borda `rgba(0,0,0,0.2)` em fundo claro ou `rgba(255,255,255,0.2)` em fundo escuro.
- Erro: borda `#cf2e2e`, mensagem em 13px.
- Sucesso: `#00d084`.

### Cards
**Encontrados**
- `card`, `card-container`, `card-hover`, `card-caption-*`, `card-set`, `card-set-full-bleed`

**Estados**
- Default: `rounded`, sombra `natural`.
- Hover: `card-hover` com aumento de sombra e leve translateY (respeitar reduce motion).
- Focus: outline visível.

### Navbar
**Encontrados**
- `navbar`, `nav-container`, `nav-wrapper`, `nav-menu-wrapper`, `nav__link`, `nav-link`, `nav-locale`, `nav__lang`
- `dropdown-menu` para idioma/locale

### Accordion/FAQ (Sugestão)
- Implementar com `button` + painel colapsável.
- Ícone Google Symbols indicando expand/collapse.

### Modais / toasts
**Encontrados**
- `modal`, `modal__bg`, `modal__container`, `modal__close`, `modal__header`, etc.

Uso recomendado:
- Menu mobile, vídeo demo, captura de lead, seleção de mercados/idiomas (há `modal--markets` em um dos extratos).

---

## 6) Regras de responsividade

### Breakpoints do documento (requisito do seu prompt)
- Mobile: ≤ 480px
- Tablet: 481–1024px
- Desktop: ≥ 1025px

### Diretrizes
- Mobile-first: começar com layout em coluna e evoluir para grids.
- Touch targets: mínimo 44px (botões/links).
- Tipografia: usar escala fluida (Sugestão) com limites próximos aos tokens (13/20/36/42).
- Imagens:
  - usar aspect ratios dos tokens (1:1, 4:3, 16:9 etc.)
  - hero image com corte responsivo (object-fit: cover)
  - lazy-load abaixo da dobra

---

## 7) Acessibilidade e qualidade

### Acessibilidade
- Contraste: texto branco sobre preto e vermelho `#ba0c2f` precisa manter contraste adequado (validar).
- `:focus-visible` claro (há referência de outline `#fff`).
- Navegação por teclado:
  - dropdown-menu e modal com trap de foco
  - ESC fecha modal
- Estados não dependentes só de cor: incluir ícones/texto (ex.: “Erro: …”).
- `prefers-reduced-motion`: reduzir animações.

### Performance
- Imagens otimizadas (WebP/AVIF), tamanhos responsivos (`srcset`).
- Fonts: carregar apenas pesos necessários; usar `font-display: swap`.
- Evitar sombras pesadas em excesso em mobile.
- Priorizar LCP do hero.

---

## 8 EXTRA PRECISA ESTAR NO SITE: /* =========================================
   TOKENS (baseado no seu design_system)
   ========================================= */
:root {
  --c-bg: #000;
  --c-surface: #0b0b0f;            /* Sugestão (não especificado) */
  --c-surface-2: #11111a;          /* Sugestão */
  --c-text: #fff;
  --c-muted: #abb8c3;
  --c-brand: #ba0c2f;

  /* Gradientes do DS (usando os nomes como referência) */
  --g-tech: linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%);
  --g-midnight: linear-gradient(135deg, rgb(2,3,129) 0%, rgb(40,116,252) 100%);

  /* Shadows do DS */
  --shadow-natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
  --shadow-deep: 12px 12px 50px rgba(0, 0, 0, 0.4);

  /* Motion */
  --t-fast: 160ms;
  --t-med: 240ms;
  --ease-out: cubic-bezier(.2,.8,.2,1);
}

/* Respeita usuários que preferem menos animação */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}

/* =========================================
   BASE INTERATIVA (cards/containers)
   ========================================= */

/* Aplique .interactive-card nos containers que você quer "reagir" */
.interactive-card {
  position: relative;
  border-radius: 16px; /* "rounded" (valor sugerido) */
  background: var(--c-surface);
  color: var(--c-text);
  box-shadow: var(--shadow-natural);
  border: 1px solid rgba(255,255,255,.10);
  transition:
    transform var(--t-med) var(--ease-out),
    box-shadow var(--t-med) var(--ease-out),
    border-color var(--t-med) var(--ease-out),
    background var(--t-med) var(--ease-out),
    filter var(--t-med) var(--ease-out);
  will-change: transform;
}

/* “Glow” tech (não quebra DS porque usa gradientes permitidos) */
.interactive-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: var(--g-tech);
  opacity: 0;
  filter: blur(10px);
  transition: opacity var(--t-med) var(--ease-out);
  z-index: -1;
}

.interactive-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-deep);
  border-color: rgba(255,255,255,.22);
  background: var(--c-surface-2);
}

.interactive-card:hover::before {
  opacity: .35;
}

/* Foco visível (acessibilidade) */
.interactive-card:focus-within {
  outline: 2px solid rgba(255,255,255,.85);
  outline-offset: 3px;
}

/* Click/tap feedback */
.interactive-card:active {
  transform: translateY(-2px) scale(0.995);
}

/* =========================================
   BOTÕES (primary + ghost)
   ========================================= */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 44px;
  padding: 12px 16px;
  border-radius: 999px; /* btn-pill */
  border: 1px solid transparent;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition:
    transform var(--t-fast) var(--ease-out),
    filter var(--t-fast) var(--ease-out),
    background var(--t-fast) var(--ease-out),
    border-color var(--t-fast) var(--ease-out);
}

.btn:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 3px;
}

.btn-primary {
  background: var(--c-brand);
  color: #fff;
}

.btn-primary:hover {
  filter: brightness(1.08) saturate(1.05);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0px) scale(0.99);
  filter: brightness(0.98);
}

.btn-ghost {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,.25);
}

.btn-ghost:hover {
  background: rgba(255,255,255,.08);
  border-color: rgba(255,255,255,.40);
  transform: translateY(-1px);
}

.btn-ghost:active {
  transform: translateY(0px) scale(0.99);
}

/* Seta do btn--rarr */
.btn--rarr .icon {
  transition: transform var(--t-fast) var(--ease-out);
}
.btn--rarr:hover .icon {
  transform: translateX(3px);
}

/* =========================================
   LINKS / NAV ITENS
   ========================================= */
.nav__link, .nav-link {
  position: relative;
  color: #fff;
  text-decoration: none;
  opacity: .92;
  transition: opacity var(--t-fast) var(--ease-out);
}

.nav__link:hover, .nav-link:hover {
  opacity: 1;
}

/* Underline animado */
.nav__link::after, .nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background: var(--g-tech);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--t-med) var(--ease-out);
}

.nav__link:hover::after, .nav-link:hover::after {
  transform: scaleX(1);
}

/* =========================================
   IMAGENS / MOCKUPS COM HOVER (opcional)
   ========================================= */
.hero-visual {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.10);
  box-shadow: var(--shadow-natural);
  transition: transform var(--t-med) var(--ease-out), box-shadow var(--t-med) var(--ease-out);
}

.hero-visual:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-deep);
}

/* =========================================
   MOBILE: garante feedback em toque
   (hover não existe, mas active existe)
   ========================================= */
@media (hover: none) and (pointer: coarse) {
  .interactive-card:hover {
    transform: none;
    box-shadow: var(--shadow-natural);
  }
  .interactive-card:active {
    transform: scale(0.99);
    filter: brightness(1.05);
  }
}
# Extensão do Design System — Scroll Reveal (fade-in on scroll)

A seguir estão **adições** ao design_system para suportar uma landing page onde os elementos iniciam **invisíveis** e se tornam **visíveis com animação** quando entram na viewport durante o scroll (efeito “fade in / slide up”). O objetivo é manter um visual **tech/premium**, com motion sutil, consistente e acessível.

> Observação: este padrão deve ser aplicado de forma modular via classes utilitárias (ex.: `.reveal`) e deve respeitar `prefers-reduced-motion`.

---

## 1) TOKENS DE MOTION (novos)
### Durações
- `--motion-duration-fast`: `160ms`
- `--motion-duration-medium`: `240ms`
- `--motion-duration-slow`: `420ms`

### Easing
- `--motion-ease-out`: `cubic-bezier(.2,.8,.2,1)`
- `--motion-ease-emphasis`: `cubic-bezier(.16,1,.3,1)` *(entrada mais “premium”)*

### Atraso (stagger)
- `--motion-stagger-1`: `0ms`
- `--motion-stagger-2`: `80ms`
- `--motion-stagger-3`: `160ms`
- `--motion-stagger-4`: `240ms`

### Distâncias de entrada
- `--reveal-translate-y`: `16px`
- `--reveal-translate-x`: `12px`

---

## 2) PADRÃO DE ANIMAÇÃO: REVEAL ON SCROLL (novo)
### Conceito
- Elementos com classe `.reveal` começam:
  - `opacity: 0`
  - levemente deslocados (ex.: `translateY(16px)`)
  - com blur sutil opcional (premium) *(ver variação)*  
- Quando entram na viewport, recebem `.is-visible` e passam para:
  - `opacity: 1`
  - `transform: none`
  - blur removido (se usado)

### Variações padronizadas
- `.reveal--up`: entra de baixo para cima (default)
- `.reveal--down`: entra de cima para baixo
- `.reveal--left`: entra da esquerda
- `.reveal--right`: entra da direita
- `.reveal--zoom`: leve scale (1.00 → 0.98 ou 0.96 → 1.00)
- `.reveal--blur`: adiciona blur suave na fase oculta

### Stagger (entrada em sequência)
- `.reveal--d1` / `.reveal--d2` / `.reveal--d3` / `.reveal--d4` aplicam delays usando tokens.

---

## 3) IMPLEMENTAÇÃO (CSS + JS) — referência para dev
### CSS (obrigatório)
- Definir estados:
  - **hidden** (`.reveal`)
  - **visible** (`.reveal.is-visible`)
- Garantir performance:
  - usar `transform` + `opacity` (evitar animar layout)
  - `will-change: transform, opacity;`

### JS (obrigatório)
- Usar `IntersectionObserver` para detectar entrada na viewport e adicionar `.is-visible`.
- Parâmetros recomendados:
  - `threshold: 0.12` (ativa quando ~12% estiver visível)
  - `rootMargin: 0px 0px -10% 0px` (ativa um pouco antes de “centralizar”)

### Acessibilidade (obrigatório)
- `prefers-reduced-motion: reduce`:
  - remover transições/animações
  - tornar elementos imediatamente visíveis (sem opacidade 0)
- Evitar delays longos em conteúdo essencial (ex.: CTA principal do hero deve aparecer sem atraso perceptível).

---

## 4) REGRAS DE USO (guidelines)
Aplicar `.reveal` em:
- seções (Hero, Prova social, Features, Pricing, FAQ)
- cards individuais (features, depoimentos)
- itens de lista (steps, integrações)

Não aplicar (ou aplicar com cuidado) em:
- elementos críticos acima da dobra (navbar, CTA principal) — no máximo uma animação muito sutil e rápida.
- componentes interativos que precisam ser imediatamente acessíveis (ex.: botões de navegação, inputs).

---

## 5) SNIPPET PRONTO (para o time implementar)
> Este snippet é a especificação de referência; adapte os seletores para o projeto.

````css name=scroll-reveal.css
:root{
  --motion-duration-fast: 160ms;
  --motion-duration-medium: 240ms;
  --motion-duration-slow: 420ms;

  --motion-ease-out: cubic-bezier(.2,.8,.2,1);
  --motion-ease-emphasis: cubic-bezier(.16,1,.3,1);

  --motion-stagger-1: 0ms;
  --motion-stagger-2: 80ms;
  --motion-stagger-3: 160ms;
  --motion-stagger-4: 240ms;

  --reveal-translate-y: 16px;
  --reveal-translate-x: 12px;
}

/* Estado inicial (invisível) */
.reveal{
  opacity: 0;
  transform: translate3d(0,var(--reveal-translate-y),0);
  transition:
    opacity var(--motion-duration-slow) var(--motion-ease-emphasis),
    transform var(--motion-duration-slow) var(--motion-ease-emphasis),
    filter var(--motion-duration-slow) var(--motion-ease-emphasis);
  will-change: opacity, transform, filter;
}

/* Quando entra na tela */
.reveal.is-visible{
  opacity: 1;
  transform: translate3d(0,0,0);
  filter: none;
}

/* Direções */
.reveal--down{ transform: translate3d(0, calc(var(--reveal-translate-y) * -1), 0); }
.reveal--left{ transform: translate3d(calc(var(--reveal-translate-x) * -1), 0, 0); }
.reveal--right{ transform: translate3d(var(--reveal-translate-x), 0, 0); }

/* Zoom e blur (opcional) */
.reveal--zoom{ transform: translate3d(0,var(--reveal-translate-y),0) scale(0.98); }
.reveal--blur{ filter: blur(8px); }

/* Stagger (delays) */
.reveal--d1{ transition-delay: var(--motion-stagger-1); }
.reveal--d2{ transition-delay: var(--motion-stagger-2); }
.reveal--d3{ transition-delay: var(--motion-stagger-3); }
.reveal--d4{ transition-delay: var(--motion-stagger-4); }

/* Acessibilidade: sem animações */
@media (prefers-reduced-motion: reduce){
  .reveal{
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }
}

## BLOCO ADICIONAL (para colar no arquivo que a IA irá ler)
A partir daqui, considere este bloco como **regras extras** e **preferências do projeto**. Ele tem prioridade quando houver ambiguidade (mas não deve contradizer o design_system).

### 1) Paleta de cores (descrição + intenções)
**Tema geral:** [dark / light / mixed] (escolha um)

**Cores base**
- Fundo principal: [ex.: #000000]
- Superfície 1 (cards/containers): [ex.: #0B0B0F]
- Superfície 2 (seções alternadas): [ex.: #11111A]
- Texto principal: [ex.: #FFFFFF]
- Texto secundário / muted: [ex.: #ABB8C3]
- Bordas / divisores: [ex.: rgba(255,255,255,0.10)]

**Cores de destaque (brand / CTA)**
- Primária (CTA principal): [ex.: #BA0C2F]
- Secundária (links ativos / chips): [ex.: #0693E3]
- Acento premium (gradiente ou highlight): [ex.: linear-gradient(...)]

**Cores de feedback (UI states)**
- Sucesso: [ex.: #00D084]
- Aviso: [ex.: #FCB900]
- Erro: [ex.: #CF2E2E]
- Informativo: [ex.: #8ED1FC]

**Regras de uso da paleta**
- O CTA primário deve sempre usar a cor primária e ter contraste alto com o texto.
- Gradientes devem ser usados com moderação (apenas em detalhes premium: underline, borda, glow, headings).
- Evitar fundos “cinza chapado” sem intenção; usar superfícies com leve variação para profundidade.
- Garantir contraste e legibilidade (especialmente no modo dark).

---

### 2) Exigências adicionais (obrigatórias)
1. **Scroll Reveal (Fade-in on scroll):**
   - Todos os blocos de conteúdo (seções, cards e itens) devem iniciar com `opacity: 0` e animar para `opacity: 1` ao entrar na viewport.
   - Usar `IntersectionObserver` (preferível) e classes `.reveal` + `.is-visible`.
   - Deve respeitar `prefers-reduced-motion: reduce` (sem animações; tudo visível).

2. **Interações de UI (hover/focus/active):**
   - Cards/containers devem responder ao hover com elevação suave, ajuste de sombra e realce de borda.
   - Botões devem ter estados: default, hover, active, focus-visible, disabled, loading.
   - Links do navbar devem ter underline animado e foco visível.

3. **Responsividade (mobile-first):**
   - Mobile (≤480px), Tablet (481–1024px), Desktop (≥1025px).
   - Botões e itens clicáveis com área mínima de toque de 44px.
   - CTAs no mobile com largura 100% quando fizer sentido.

4. **Acessibilidade:**
   - Foco visível em todos os elementos interativos.
   - Estados não podem depender apenas de cor (usar ícone/texto/label).
   - Accordion/FAQ e modais com ARIA apropriado.

5. **Performance:**
   - Evitar animações pesadas; usar apenas `transform` e `opacity`.
   - Imagens otimizadas (WebP/AVIF) e lazy-load abaixo da dobra.

---

### 3) Preferências de estilo (opcional, mas recomendado)
- Visual: tech / premium / clean
- Intensidade do motion: [sutil / moderado]
- Uso de glow/gradiente: [mínimo / médio / alto]
- Densidade de conteúdo: [compacta / equilibrada / espaçada]

---

### 4) Entregável esperado
Ao gerar a descrição da Landing Page, inclua explicitamente:
- Onde a paleta é aplicada (hero, seções alternadas, cards, CTAs, links).
- Quais elementos usam scroll-reveal e com quais variações (up/left/zoom + stagger).
- Quais estados interativos são obrigatórios em cada componente.

## 8) Checklist final para implementação
- [ ] Paleta aplicada: base `#000/#fff`, CTA `#ba0c2f`, feedback com tokens WP
- [ ] Tipografia: Google Sans Flex/Code + classes “text-over-media-*” no hero
- [ ] Espaçamento coerente com `--wp--preset--spacing--40..80`
- [ ] Componentes: nav + dropdown locale, botões (primary/ghost/pill), cards, modal, FAQ accordion
- [ ] Responsivo: grids 1/2/3 colunas conforme breakpoint; CTAs 100% no mobile
- [ ] Acessibilidade: foco visível, ARIA no accordion e modal, teclado OK
- [ ] Performance: imagens otimizadas + lazy-load; fontes otimizadas
- [ ] Consistência visual: alternância de seções claras/escuras, gradientes usados com moderação