# Auditoria do site da com otimização gradual de UX/UI, conteúdo e integração institucional

## Estado atual do site e arquitetura implementada

O site atual já saiu do formato “one-page puro” e está operando como estrutura híbrida: uma home voltada à conversão e páginas dedicadas por intenção (Trabalhista, Trânsito, Sobre, além das páginas legais). A navegação principal expõe “Trabalhista”, “Trânsito”, “Sobre” e “Contato”, com CTA direto para entity["company","WhatsApp","messaging app"] no topo. citeturn0view0turn1view0turn1view1turn1view2turn1view4turn1view5

A home está bem alinhada ao objetivo de “clareza em tela pequena”: traz H1 focado em Direito Trabalhista, reforço de atendimento presencial em entity["city","Juiz de Fora","minas gerais, brazil"] e on-line em entity["country","Brasil","south america"], chips de escopo e CTAs acima da dobra (“Falar com a Dra. Rafaela” e “Ver como funciona”). citeturn0view0

Há sinais institucionais relevantes para confiança (ex.: registro “OAB/MG 243.023” exposto na home) e uma seção de prova social baseada em avaliações do Google, com frases centradas em atenção/clareza/cuidado (sem promessa de resultado). citeturn0view0

O contato está estruturado com endereço físico, e-mail de domínio do escritório vinculado, telefone/WhatsApp e formulário reduzido — nome, WhatsApp, área de interesse e mensagem — com aviso de finalidade e consentimento atrelado à Política de Privacidade. citeturn0view0turn1view4

### Mapa de páginas efetivamente publicado

| Página | Função principal | Evidência de CTA/objetivo |
|---|---|---|
| Home | Conversão rápida + reconhecimento de demanda | CTAs acima da dobra e blocos “Situações” + “Como funciona”. citeturn0view0 |
| Direito Trabalhista | Intenção + dor + FAQ + conversão | Hero com CTA + seções “Para trabalhadores/Para empresas” + FAQ + CTA final. citeturn1view0 |
| Direito de Trânsito | Complementar + alívio de risco (prazo/documento) | Hero com CTA + “documentos” + FAQ + CTA final. citeturn1view1 |
| Sobre | Autoridade sóbria + forma de atuação | Texto curto com foco em técnica, clareza e atendimento + CTA. citeturn1view2 |
| Política de Privacidade | Transparência LGPD no primeiro contato | Define dados coletados e recomenda não enviar dados sensíveis. citeturn1view4 |
| Termos de Uso | Redução de risco jurídico/expectativa | Declara caráter informativo e ressalva que contato não cria contratação automática. citeturn1view5 |

## Jornadas mobile e pontos de abandono mais prováveis

A análise abaixo simula o comportamento em smartphone, com base na estrutura e microcopy publicados (CTAs, ordem de blocos e “frases de orientação”). Em SEO, isso é coerente com o fato de o entity["company","Google","search engine company"] usar a versão mobile como base para indexação e ranking (mobile-first indexing). citeturn8search2

### Jornada de contato imediato por WhatsApp

Entrada provável: Home (orgânico/local, link de rede social, indicação). citeturn0view0  
Caminho provável:
1) Usuário “bate o olho” no H1, confirma que é trabalhista e vê ícones “Presencial” e “On-line”. citeturn0view0  
2) Clica no CTA acima da dobra (“Falar com a Dra. Rafaela”). citeturn0view0  
3) Se não clicar, o próximo ponto de decisão vem logo no bloco de “situações atendidas” + CTA para a página Trabalhista. citeturn0view0turn1view0

Pontos de abandono típicos:
- Se o usuário cair no WhatsApp sem “roteiro” do que enviar (fricção cognitiva), principalmente em casos trabalhistas com muitos detalhes.
- Se o CTA flutuante (há um CTA repetido no rodapé/overlay) ocupar área excessiva em telas menores e competir com leitura. citeturn0view0

### Jornada de intenção trabalhista (dor específica)

Entrada provável: Home ou página Trabalhista (dependendo do SEO). citeturn0view0turn1view0  
Caminho provável:
1) Home: usuário se reconhece no bloco “Situações trabalhistas atendidas com frequência” (ex.: horas extras, rescisão indireta). citeturn0view0  
2) Clica em “Entender o atendimento trabalhista” e vai para a página dedicada. citeturn0view0turn1view0  
3) Na página, lê rapidamente “Para trabalhadores” (bullets) e percorre “Dúvidas frequentes”. citeturn1view0  
4) Converte no CTA final (“Agendar atendimento”). citeturn1view0

Pontos de abandono típicos:
- Se o usuário não enxergar, já no início, um “próximo passo” simples (ex.: mensagem-modelo, o que separar, tempo estimado de retorno).
- Se as dúvidas frequentes forem curtas demais para reduzir incerteza (especialmente em “rescisão indireta” e “horas extras”, que são temas recorrentes). citeturn1view0turn11search2turn12search0

### Jornada de intenção trânsito (prazo/risco)

Entrada provável: Página de Trânsito (busca direta por CNH, suspensão/cassação, recurso). citeturn1view1  
Caminho provável:
1) Usuário lê a promessa de “orientação técnica” e vê imediatamente CTA de WhatsApp. citeturn1view1  
2) Confere “O que separar no primeiro contato” (reduz ansiedade por documento/prazo). citeturn1view1  
3) Vai ao FAQ (prazos curtos, diferenças entre suspensão e cassação). citeturn1view1  
4) Converte no CTA final. citeturn1view1

Pontos de abandono típicos:
- Se faltar uma frase curta que deixe cristalino “o que ela precisa me mandar primeiro” (documento-chave + prazo + resumo objetivo), o que hoje já está bem encaminhado, mas pode ficar ainda mais “copiável/colável”. citeturn1view1

## UX/UI mobile-first com elegância no desktop

O site já está, estruturalmente, com boa hierarquia: reconhecimento (situações) → redução de ansiedade (como funciona) → prova social → autoridade → contato. citeturn0view0

A partir daqui, os ganhos de UX/UI tendem a vir de ajustes finos: densidade de texto, consistência de CTAs, “micro-decisões” e polimento para desktop.

### Ajustes de UX que aumentam conversão sem redesenhar a identidade

Leitura e escaneabilidade  
Pessoas não “leem” páginas longas: elas escaneiam, principalmente no topo e margens, seguindo padrões de varredura (ex.: F-pattern). Isso reforça a importância de títulos curtos, blocos com 1 ideia e bullets “apontáveis”. citeturn11search0turn0view0  
O site já está nessa direção, mas ainda há frases “metalinguísticas” que falam sobre o próprio site (“A home resume…”, “o bloco permanece enxuto…”). Elas gastam atenção e não ajudam o usuário a decidir. citeturn0view0

Alvos de toque e conforto no mobile  
O critério WCAG 2.5.8 (“Target Size”) trata de facilitar ativação de elementos clicáveis sem erro por proximidade/tamanho insuficiente. Mesmo sem medir pixels aqui, a regra operacional é: botões e links precisam ser fáceis de acionar com o polegar e não competir com leitura. citeturn8search3turn8search7turn0view0

Formulário: acerto estrutural, refinamento de UI  
O formulário já está “mínimo viável” e com aviso de finalidade e política — um bom padrão para reduzir fricção e limitar coleta. citeturn0view0turn1view4  
Em mobile, a literatura de UX recomenda rótulos acima do campo (“label above field”) para melhorar varredura e reduzir erros. Se algum campo estiver com label interno/placeholder, o ajuste é simples e melhora muito. citeturn11search1turn0view0

Elegância no desktop (sem mexer no branding)  
O risco no desktop é o site ficar “muito narrow” (coluna estreita) ou “muito wide” (linhas longas). A recomendação prática aqui é: manter largura máxima de conteúdo confortável, aumentar respiro vertical entre seções e transformar cards em grade (2–3 colunas) quando houver espaço — sem mudar cores, tipografia e estilo. Esse tipo de ajuste preserva identidade e melhora percepção premium. citeturn0view0

## Copy dinâmico pronto por seção e página

A regra que você pediu (“gerar com base no que já existe”) é atendida aqui: cada texto abaixo é uma **evolução incremental** do conteúdo atualmente publicado, preservando tom (terceira pessoa, sobriedade, sem promessas) e estrutura. citeturn0view0turn1view0turn1view1turn1view2

### Home

Hero  
> **H1 (manter base atual, ajustar sutileza)**  
> Atuação em Direito Trabalhista com clareza e estratégia  
> **Subheadline (mais “usuário”, menos “institucional”)**  
> Atendimento a trabalhadores e empregadores, presencial em Juiz de Fora/MG e on-line em todo o Brasil. Orientação objetiva sobre cenário, riscos e próximos passos.  
> **CTA primário**: Falar com a Dra. Rafaela  
> **CTA secundário**: Ver como funciona citeturn0view0

Ajuste recomendado (micro): substituir a frase “O foco principal do site é trabalhista…” por uma frase centrada no usuário:  
> A atuação principal é em Direito do Trabalho. Demandas de trânsito são atendidas em caráter complementar, quando aplicável. citeturn0view0

Situações trabalhistas  
Texto de abertura (trocar “A home resume…” por convite de reconhecimento):  
> Se a situação se encaixa em algum ponto abaixo, o atendimento inicial ajuda a organizar fatos, registros e próximos passos. citeturn0view0

Cards (mantém os temas atuais, com microtexto mais escaneável):  
- Horas extras e jornada (banco de horas, intervalos, ponto)  
- Verbas rescisórias (prazos, diferenças, conferência)  
- Rescisão indireta (quando a relação se torna insustentável)  
- Trabalho sem registro (vínculo e organização de provas)  
- Assédio moral (fatos, registros e encaminhamento inicial)  
- Apoio para empresas (prevenção e redução de risco) citeturn0view0turn11search2turn12search0

Como funciona (3 passos)  
> 1) Contato por WhatsApp ou formulário (situação resumida + área)  
> 2) Triagem e orientação inicial (documentos úteis + próximos passos)  
> 3) Estratégia e acompanhamento (etapas e riscos com clareza)  
> **CTA**: Iniciar contato citeturn0view0

Trânsito (bloco complementar)  
Trocar “O bloco permanece enxuto…” por texto funcional:  
> Para demandas de trânsito com prazo em curso, o atendimento começa com leitura objetiva do ato, do prazo e do documento principal.  
> **CTA**: Ver atendimento em trânsito citeturn0view0turn1view1

Confiança (prova social)  
Título pode ser mantido; ajuste de subtexto:  
> Avaliações públicas refletem atenção, clareza e cuidado no atendimento. citeturn0view0

Suporte institucional (integração)  
Texto atual já está no caminho; ajuste sutil para reduzir “transferência” e reforçar “apoio técnico”:  
> Em demandas que exigem atuação complementar, o atendimento pode contar com apoio técnico do escritório Pacheco & Reis, mantendo acompanhamento direto e comunicação objetiva. citeturn0view0turn10view1

### Página de Direito Trabalhista

Hero  
> **H1**: Atuação em Direito Trabalhista com clareza e estratégia  
> **Subtítulo (encurtado para mobile)**: Atendimento para trabalhadores e empregadores, presencial em Juiz de Fora/MG e on-line em todo o Brasil.  
> **CTA primário**: Falar com a Dra. Rafaela  
> **CTA secundário**: Ver dúvidas frequentes citeturn1view0turn8search2

Seção “Situações comuns” (já está boa; ajuste de tom)  
> A triagem inicial organiza fatos e registros mínimos para orientar o próximo passo com clareza. citeturn1view0

Para trabalhadores (evitar generalidade; tornar “copiável”)  
> - Jornada e registros (ponto, intervalos, banco de horas)  
> - Desligamento (verbas, prazos, diferenças)  
> - Ambiente de trabalho (assédio moral, organização de evidências)  
> - Próximos passos com linguagem objetiva (sem promessas) citeturn1view0turn11search2turn12search0

Para empresas (reforçar prevenção como diferencial)  
> - Revisão de rotinas e documentos (prevenção de passivo)  
> - Organização de fluxos internos e contratos  
> - Apoio em negociações e na estruturação documental citeturn1view0

FAQ (hoje existe; tornar respostas 1 grau mais “decisórias”)  
Exemplo de “melhoria incremental” (mantendo a ideia):  
> **Rescisão indireta serve para qualquer descumprimento?**  
> Não. Em geral, exige falta grave do empregador e avaliação técnica do conjunto de provas. O atendimento inicial ajuda a organizar fatos e indicar o caminho mais adequado. citeturn1view0turn12search0

CTA final (“Precisa iniciar o atendimento?”)  
> O primeiro contato pode ser feito por WhatsApp, com descrição objetiva da situação e, se possível, registro básico de jornada/documentos do desligamento.  
> **CTA**: Agendar atendimento citeturn1view0

### Página de Direito de Trânsito

Hero  
> **H1**: Atuação complementar em Direito de Trânsito  
> **Subtítulo**: Orientação técnica para processos administrativos, com leitura objetiva de documentos, prazos e histórico.  
> **CTA primário**: Falar sobre trânsito  
> **CTA secundário**: Ver dúvidas frequentes citeturn1view1

Bloco “O que separar no primeiro contato” (melhorar para checklist direto)  
> Para agilizar a triagem inicial, ajuda enviar:  
> - Documento pessoal  
> - Notificação/auto/decisão recebida  
> - Prazo em curso (data limite) + resumo em 3 linhas citeturn1view1

FAQ (ajuste micro)  
> **Ainda vale procurar orientação com prazo curto?**  
> Sim. Quanto antes a situação for organizada (documento + prazo + histórico), maior a chance de avaliar medidas possíveis com clareza. citeturn1view1

CTA final  
> O primeiro contato deve priorizar prazo, documento principal e descrição objetiva da situação.  
> **CTA**: Agendar atendimento citeturn1view1

### Página Sobre

A página está muito curta (o que é bom no mobile), mas pode ganhar “1 camada” de autoridade sem virar biografia longa: tornar explícito “como ela trabalha” e reforçar o vínculo institucional como suporte, não vitrine. citeturn1view2turn10view1

Texto sugerido (substitui/expande o que já existe, sem mudar o tom):  
> A atuação é guiada por técnica, linguagem objetiva e leitura individualizada de cada situação, com foco principal em Direito Trabalhista.  
> O atendimento busca tornar o caso compreensível desde o início, com explicação clara sobre cenário, riscos e próximos passos.  
> Quando a demanda exige atuação complementar, o suporte institucional do escritório Pacheco & Reis funciona como rede técnica, sem descaracterizar a condução responsável do atendimento. citeturn1view2turn10view1

CTA final  
> O contato pode ser feito por WhatsApp ou pelo formulário da home, com descrição objetiva da situação. citeturn1view2

### Contato, Política de Privacidade e Termos (polimento)

Contato (título e subtítulo)  
O bloco já está bom e sem “gratuito”. Ajuste sutil para aumentar previsibilidade:  
> **Título**: Inicie seu atendimento  
> **Subtítulo**: Receba orientação inicial sobre próximos passos, com sigilo profissional e linguagem objetiva. citeturn0view0

Aviso LGPD curto (já existe; sugestão de leve clarificação)  
> Os dados informados são usados apenas para retorno de contato e organização do atendimento inicial. Para mais detalhes, consulte a Política de Privacidade. citeturn0view0turn1view4turn8search1

Política de Privacidade (boa base; lacunas comuns para reforçar)  
Ela já descreve dados coletados, finalidade, orientação de não enviar dados sensíveis e um canal de contato. citeturn1view4  
Como melhoria incremental, vale adicionar duas linhas sobre “retenção” e “compartilhamento técnico” (ex.: hospedagem e logs), para ficar mais completo dentro do espírito de transparência da LGPD. citeturn8search1turn1view4

Termos de Uso (boa proteção de expectativa)  
A cláusula de que contato não cria contratação automática é um bom redutor de risco e está alinhada ao caráter informativo/evitar promessa implícita. citeturn1view5turn10view0

## Microcopy e CTAs com conformidade OAB e redução de fricção

O site já evita “especialista” e não usa “gratuito”, o que reduz risco, porque o Provimento 205/2021 exige publicidade com caráter meramente informativo, discrição e sobriedade, e veda referência a gratuidade como forma de captação, além de vedar expressões persuasivas e promessas. citeturn10view0turn10view2turn0view0

### Padronização recomendada de CTAs (mapa de uso)

| Contexto | CTA recomendado | Por quê |
|---|---|---|
| Topo/Home/Hero | “Falar com a Dra. Rafaela” | Já está implementado e é claro. citeturn0view0 |
| “Como funciona” | “Iniciar contato” | CTA de baixa pressão (combina com sobriedade). citeturn0view0 |
| Página Trabalhista/Trânsito (final) | “Agendar atendimento” | Aumenta previsibilidade do próximo passo. citeturn1view0turn1view1 |
| Formulário | “Enviar mensagem no WhatsApp” | Mantém expectativa correta (mensagem, não “resultado”). citeturn0view0turn10view2 |

### Mensagem pré-preenchida (reduz atrito no WhatsApp)

Recomendação de texto (curto, objetivo, sem dados sensíveis):  
> “Olá. Vi o site e gostaria de orientação inicial sobre [Trabalhista/Trânsito]. Resumo: [3 linhas]. Prazo/urgência: [se houver].” citeturn1view4turn8search1turn0view0

Isso conversa diretamente com a orientação da própria Política de Privacidade de não enviar dados sensíveis e manter o primeiro contato objetivo. citeturn1view4

## Integração com entity["organization","Pacheco & Reis Advogados","law firm, juiz de fora, brazil"] sem roubar foco

A integração já está presente em pontos estratégicos: header/branding (“Rafaela Condé | Pacheco & Reis Advogados”), seção “Suporte institucional” na home e explicação curta na página Sobre. citeturn0view0turn1view2

### Encaixe institucional: o que está certo (e por quê)

Indicar a sociedade/estrutura à qual o profissional está vinculado é permitido quando verdadeiro, inclusive como identificação profissional, desde que mantida sobriedade. Isso aparece no Provimento 205/2021 ao admitir identificação com qualificação e indicação da sociedade da qual faz parte. citeturn10view1turn0view0

A forma atual (“encaminhado à equipe… mantendo acompanhamento direto”) já evita tom mercantilista e enquadra bem como “rede de suporte”. citeturn0view0turn1view2

### Principal risco prático: desalinhamento de tom ao mandar tráfego para o site do escritório

O site do escritório usa linguagem mais comercial (“soluções full service”, “nós temos a solução”, “fazer além da média”), exibe métricas zeradas na home e traz “Especialista” em bios de integrantes. Isso pode gerar ruído de percepção para quem vem de um site deliberadamente sóbrio. citeturn0view1turn7view0

Isso não exige “cortar o vínculo”, mas sugere um ajuste de UX: transformar o link “Conhecer o escritório” em link opcional, com etiqueta “institucional”, e deixar a explicação auto-suficiente no próprio site da Dra. Rafaela (para não depender do usuário “se convencer” lá fora). citeturn0view0turn7view0

### Copys prontos para integração em três pontos

Home (versão curta)  
> Suporte institucional: em demandas que exigem atuação complementar, o atendimento pode contar com apoio técnico do Pacheco & Reis, mantendo acompanhamento direto e comunicação objetiva. citeturn0view0turn10view1

Página Sobre (versão completa)  
> Em demandas fora do escopo principal, a integração com o Pacheco & Reis funciona como rede de suporte técnico, com encaminhamento responsável quando necessário — sem promessas, sem sensacionalismo e com clareza sobre próximos passos. citeturn1view2turn10view0

Rodapé (versão mínima)  
> Vinculada ao Pacheco & Reis Advogados (institucional). citeturn0view0turn10view1

### Detalhe de consistência local que vale checar

O endereço do escritório aparece com salas diferentes entre as páginas do escritório (ex.: salas 708–710) e o site da Dra. Rafaela (sala 203). Se isso refletir locais distintos de atendimento, vale explicitar “sala por agendamento” para evitar confusão; se não refletir, padronizar melhora confiança e SEO local (consistência de informações). citeturn0view0turn0view1turn7view0turn11search6

## SEO trabalhista e conteúdo: refinamento por intenção, FAQ e estrutura técnica

A arquitetura por páginas já favorece SEO e compreensão do buscador: existe uma página dedicada para Trabalhista e outra para Trânsito, cada uma com H1 claro e CTAs. citeturn1view0turn1view1

Como o Google usa o conteúdo mobile para indexação e ranking, manter “paridade” de conteúdo essencial no mobile (incluindo FAQ visível e links rastreáveis) é crítico. citeturn8search2turn12search6

### Conteúdo trabalhista: apoiar-se em dores de alta demanda

Dois temas já estão no site e são estratégicos também por demanda recorrente:
- Horas extras/jornada: o entity["organization","Tribunal Superior do Trabalho","labor court, brazil"] aponta “hora extra” como tema de alta recorrência e detalha subquestões comuns. citeturn11search2turn1view0  
- Rescisão indireta: o TST descreve o tema e contextualiza como forma de encerramento por falta grave do empregador, com grande volume de casos em 2023. citeturn12search0turn1view0  

Esses temas sustentam um FAQ mais “ranqueável” e mais útil, sem virar blog agora.

### Titles e snippets: o que ajustar na prática (mesmo sem mexer no layout)

O Google tem recomendações explícitas para “title links” (título mostrado no resultado), incluindo evitar múltiplos headings com o mesmo peso e manter claro qual é o título principal. citeturn12search2turn12search3  
Como ajuste incremental, a regra operacional por página é:
- 1 H1 inequívoco (já está). citeturn1view0turn1view1turn0view0  
- 1 title único por página (precisa ser conferido no CMS/tema). citeturn12search2turn12search11  
- Meta description curta e fiel ao conteúdo, sabendo que o Google pode gerar snippet dinamicamente. citeturn12search3  

### SEO local: reforços simples que tendem a ajudar

O Google afirma que resultados locais são baseados principalmente em relevância, distância e proeminência (popularidade). citeturn11search6  
O site já faz o “básico certo” (cidade, endereço, WhatsApp, e-mail). citeturn0view0  
Incrementos de baixo esforço:
- Padronizar a menção “Juiz de Fora/MG” nos títulos secundários e no rodapé de todas as páginas de serviço. citeturn0view0turn1view0turn1view1turn11search6  
- Linkar prova social para a fonte (perfil Google), se isso não ferir a sobriedade visual. citeturn0view0  
- Expandir uma pergunta do FAQ com “Juiz de Fora” (ex.: “O atendimento pode ser presencial em Juiz de Fora?”) para capturar intenção local em linguagem natural. citeturn1view0turn11search6  

## Backlog incremental de melhorias e checklist de validação

A lista abaixo prioriza “alto impacto com pouca mudança”, respeitando as vedações do Provimento 205/2021 (sobriedade, sem promessa, sem gratuidade como chamariz). citeturn10view0turn10view2turn0view0

### Backlog priorizado

| Tarefa | Onde | Prioridade | Impacto | Esforço | Implementação (sem redesign) |
|---|---|---|---|---|---|
| Remover frases “metalinguísticas” (“A home resume…”, “o bloco permanece…”) e substituir por linguagem centrada no usuário | Home | Alta | Clareza + conversão | Baixo | Reescrever 2–3 linhas por seção mantendo estrutura. citeturn0view0 |
| Inserir mensagem pré-preenchida de WhatsApp (com área + 3 linhas + prazo) | CTAs/WhatsApp | Alta | Conversão | Baixo | Ajustar link wa.me para incluir texto inicial. citeturn0view0turn1view4 |
| Padronizar CTAs nos três padrões (Falar / Iniciar contato / Agendar) | Global | Alta | Consistência + UX | Baixo | Revisar rótulos e evitar variações desnecessárias. citeturn0view0turn1view0 |
| Reforçar, no contato, “não enviar dados/documentos sensíveis” com uma linha antes do campo mensagem | Formulário | Média | LGPD + UX | Baixo | Já existe na política; repetir no formulário reduz erro. citeturn1view4turn0view0turn8search1 |
| Expandir 2 respostas do FAQ trabalhista (horas extras e rescisão indireta) com 1 frase prática de “o que organizar” | Página Trabalhista | Média | SEO + redução de ansiedade | Baixo | Mantém sobriedade e aumenta utilidade. citeturn1view0turn11search2turn12search0 |
| Tornar a integração com o escritório “autoexplicativa”, reduzindo dependência do clique externo | Home e Sobre | Média | Confiança + coerência de tom | Baixo | Ajustar copy “rede de suporte técnico” e etiquetar link como “institucional”. citeturn0view0turn7view0 |
| Conferir consistência de endereço/salas e explicitar “local por agendamento” se necessário | Contato/Rodapé | Média | Confiança + SEO local | Baixo | Harmonizar informação publicada. citeturn0view0turn0view1turn11search6 |

### Checklist de validação (mobile e desktop)

Teste mobile (porque é base de indexação e principal experiência de uso):  
- Encontrar CTA de WhatsApp em até 5s (home e páginas de serviço). citeturn0view0turn1view0turn1view1  
- Entender “Trabalhista é o foco” em até 15s (sem precisar rolar muito). citeturn0view0  
- Conseguir enviar primeiro contato sem “inventar o que escrever” (mensagem pré-preenchida). citeturn1view4turn8search2  

Teste desktop (para elegância):  
- Respiro adequado entre seções (sem sensação de “parede de texto”). citeturn11search0turn0view0  
- Cards em grid (quando houver espaço), mantendo consistência visual. citeturn0view0  
- Link institucional do escritório visível, mas secundário (não compete com conversão). citeturn0view0turn7view0