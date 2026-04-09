# Plano de Execução do Site

## Objetivo do Documento
Este documento define, de forma executável, a implementação do site da Rafaela Condé a partir do relatório analítico existente em `docs/deep-research-report.md`.

Ele existe para congelar escopo, ordem de execução, critérios de aceite e restrições operacionais, evitando reinterpretação estratégica durante a implementação.

## Documentos de Referência
- Referência analítica obrigatória: `docs/deep-research-report.md`
- Arquivos-base do projeto: `index.html`, `assets/css/styles.css`, `assets/js/main.js`, `robots.txt`, `sitemap.xml`, `.htaccess`

## Regras de Execução
- A home permanece como principal página de conversão.
- O projeto continua estático em HTML, CSS e JavaScript.
- Não haverá redesign, troca de identidade visual, nova linguagem gráfica ou animações adicionais desnecessárias.
- O trabalho deve priorizar mobile-first, clareza, conversão, SEO trabalhista, OAB e LGPD.
- O agente executor não deve repetir diagnóstico nem reabrir decisões estratégicas já consolidadas.
- O WhatsApp permanece como principal canal de entrada.
- Toda implementação deve respeitar as fases, dependências e critérios de validação deste documento.

## Estrutura Final do Site
- Rotas públicas finais:
  - `/`
  - `/direito-trabalhista/`
  - `/direito-de-transito/`
  - `/sobre/`
  - `/politica-de-privacidade/`
  - `/termos-de-uso/`
- Navegação principal final:
  - `Trabalhista`
  - `Trânsito`
  - `Sobre`
  - `Contato`
- Estrutura funcional final:
  - Home como centro de conversão
  - Páginas de intenção para trabalhista e trânsito
  - Página institucional de sobre
  - Páginas legais publicadas
- Formulário final:
  - `Nome`
  - `WhatsApp`
  - `Área`
  - `Mensagem`
- SEO técnico final:
  - `title`, `description`, `canonical` e `H1` próprios por página
  - `sitemap.xml` atualizado
  - JSON-LD `LegalService`
  - JSON-LD `FAQPage` apenas onde houver FAQ visível no HTML

## Backlog de Execução
| ID | Tarefa | Onde aplicar | O que mudar | Como fazer | Impacto | Esforço | Dependência |
|---|---|---|---|---|---|---|---|
| `HOME-01` | Reordenar a home | Home | Priorizar reconhecimento trabalhista | Ordem final: Hero -> Situações trabalhistas -> Como funciona -> Trânsito -> Depoimentos -> Sobre curto -> Atendimento -> Integração institucional -> Contato | Conversão + UX | Médio | Nenhuma |
| `HOME-02` | Inserir bloco de situações trabalhistas | Home | Fazer a pessoa se reconhecer rapidamente | Criar 6 cards curtos baseados em dores reais e CTA para `/direito-trabalhista/` | Conversão + SEO | Baixo | `HOME-01` |
| `HOME-03` | Inserir bloco “Como funciona” | Home | Reduzir ansiedade do primeiro contato | Criar 3 passos curtos com CTA | Conversão + UX | Baixo | `HOME-01` |
| `HOME-04` | Enxugar bloco institucional | Home | Evitar dispersão de foco | Reduzir o bloco de integração institucional a texto curto e 1 link | Clareza | Baixo | `HOME-01` |
| `HOME-05` | Resumir Sobre na home | Home | Reduzir densidade | Manter versão curta com CTA para `/sobre/` | UX | Baixo | `SOBRE-01` |
| `TRAB-01` | Criar página trabalhista | `/direito-trabalhista/` | Criar página de intenção principal | Hero curto, situações comuns, blocos por público, como funciona e CTA | SEO + Conversão | Médio | Nenhuma |
| `TRAB-02` | Separar trabalhador e empresa | `/direito-trabalhista/` | Melhorar aderência por perfil | Criar dois blocos com bullets curtos e CTA intermediário | Clareza + Conversão | Médio | `TRAB-01` |
| `TRAB-03` | Adicionar FAQ trabalhista | `/direito-trabalhista/` | Cobrir objeções e cauda longa | Criar 5 perguntas com respostas curtas, informativas e sóbrias | SEO + Conversão | Baixo | `TRAB-02` |
| `TRAB-04` | Linkar a página trabalhista | Home, menu e rodapé | Distribuir tráfego interno | Apontar CTAs e navegação para `/direito-trabalhista/` | SEO + Conversão | Baixo | `TRAB-01` |
| `TRANS-01` | Criar página de trânsito | `/direito-de-transito/` | Dar clareza à atuação complementar | Hero curto, situações atendidas, como funciona e CTA | SEO + Clareza | Médio | Nenhuma |
| `TRANS-02` | Adicionar documentos básicos e fluxo | `/direito-de-transito/` | Reduzir ansiedade inicial | Criar bloco do que separar e passo a passo curto | Conversão | Médio | `TRANS-01` |
| `TRANS-03` | Adicionar FAQ trânsito | `/direito-de-transito/` | Responder dúvidas recorrentes | Criar 3 a 5 perguntas curtas com respostas diretas | SEO + Conversão | Baixo | `TRANS-02` |
| `TRANS-04` | Ajustar trânsito na home | Home | Manter complemento sem roubar foco | Encurtar texto do bloco e apontar CTA para página dedicada | Clareza | Baixo | `HOME-01`, `TRANS-01` |
| `SOBRE-01` | Criar página Sobre | `/sobre/` | Tirar a versão longa da home | Estruturar trajetória, forma de atuação, atendimento e CTA | Confiança + SEO | Médio | Nenhuma |
| `SOBRE-02` | Ajustar autoridade institucional | Home e `/sobre/` | Tornar o suporte institucional sóbrio | Manter menção factual ao escritório, sem tom comercial ou generalista | Confiança | Baixo | `SOBRE-01` |
| `CONT-01` | Reescrever topo do formulário | Home > Contato | Remover linguagem de captação | Substituir chamadas por “Inicie seu atendimento” e “Receba orientação inicial” | Conformidade + Conversão | Baixo | Nenhuma |
| `CONT-02` | Reduzir formulário | Home > Contato | Baixar fricção e coleta excessiva | Manter só Nome, WhatsApp, Área e Mensagem | Conversão + LGPD | Baixo | `CONT-01` |
| `CONT-03` | Publicar páginas legais | Páginas legais, rodapé e formulário | Dar base real ao checkbox e à coleta de dados | Criar páginas estáticas simples e linká-las no site | Conformidade + Confiança | Médio | `CONT-02` |
| `CONT-04` | Ajustar microcopy LGPD | Formulário | Explicar finalidade e orientar minimização | Inserir finalidade do uso dos dados e aviso para não enviar dados sensíveis | LGPD + UX | Baixo | `CONT-02` |
| `CONT-05` | Ajustar mensagem do WhatsApp | Formulário e botões | Melhorar o início da conversa | Pré-preencher mensagem objetiva com área selecionada | Conversão | Baixo | `CONT-02` |
| `SEO-01` | Expandir arquitetura pública | Rotas, navegação, rodapé e sitemap | Sair da one-page pura | Publicar as rotas finais e ajustar navegação | SEO | Médio | `TRAB-01`, `TRANS-01`, `SOBRE-01`, `CONT-03` |
| `SEO-02` | Criar metadados por página | Todas as páginas | Alinhar intenção de busca | Definir `title`, `description`, `H1`, `H2` e `canonical` próprios | SEO | Baixo | `SEO-01` |
| `SEO-03` | Adicionar dados estruturados | Todas as páginas | Melhorar interpretação do site | Aplicar `LegalService` e `FAQPage` nas páginas com FAQ | SEO técnico | Médio | `SEO-02`, `TRAB-03`, `TRANS-03` |
| `SEO-04` | Fortalecer linkagem interna | Home e páginas internas | Distribuir relevância entre páginas | Usar links claros entre home, serviços, sobre e páginas legais | SEO + UX | Baixo | `SEO-01` |
| `SEO-05` | Atualizar sitemap e conferir robots | `sitemap.xml` e `robots.txt` | Refletir a arquitetura final | Atualizar sitemap com todas as URLs e manter `robots.txt` coerente | SEO técnico | Baixo | `SEO-01` |
| `CTA-01` | Padronizar CTAs | Global | Reduzir ruído | Limitar a três padrões principais de CTA | Conversão + Clareza | Baixo | Nenhuma |
| `CTA-02` | Revisar copy promocional e depoimentos | Global | Remover linguagem arriscada | Eliminar “gratuito”, promessas e depoimentos com ênfase em resultado | Conformidade + Confiança | Baixo | `CONT-01` |
| `CTA-03` | Encurtar CTA flutuante mobile | Home mobile | Melhorar leitura e toque | Manter o CTA atual com rótulo mais curto e sóbrio | UX + Conversão | Baixo | `CTA-01` |

## Fases de Implementação
1. **Fase 1 – Impacto imediato**
   - `HOME-01`
   - `HOME-02`
   - `HOME-03`
   - `CONT-01`
   - `CONT-02`
   - `CONT-04`
   - `CONT-05`
   - `CTA-01`
   - `CTA-03`

2. **Fase 2 – Estrutura de serviços**
   - `TRAB-01`
   - `TRAB-02`
   - `TRAB-04`
   - `TRANS-01`
   - `TRANS-02`
   - `TRANS-04`
   - `SEO-01`
   - `SEO-02`
   - `SEO-04`

3. **Fase 3 – Autoridade e confiança**
   - `SOBRE-01`
   - `SOBRE-02`
   - `HOME-04`
   - `HOME-05`
   - `CONT-03`
   - `CTA-02`

4. **Fase 4 – Refinamento**
   - `TRAB-03`
   - `TRANS-03`
   - `SEO-03`
   - `SEO-05`

## Critérios de Validação
- Validar em `360x800`, `390x844` e `412x915`
- WhatsApp encontrável em até 5 segundos
- Foco trabalhista entendível em até 15 segundos
- Hero, situações e “como funciona” visíveis nos dois primeiros scrolls
- Formulário concluível em até 60 segundos com uma mão
- Nenhuma ocorrência de “gratuito”, promessa de resultado ou linguagem mercantilista
- Política e termos acessíveis pelo rodapé e pelo formulário
- Cada página com `title`, `description`, `canonical` e `H1` próprios
- FAQ visível no HTML
- `sitemap.xml` refletindo todas as rotas finais

## Dependências
- As páginas dedicadas precisam existir antes da atualização completa de navegação, `canonical` e sitemap
- O formulário enxuto precisa estar definido antes do ajuste final da mensagem do WhatsApp
- As páginas legais precisam existir antes da substituição dos placeholders do rodapé
- O `FAQPage` só pode ser aplicado após a publicação do FAQ visível no HTML
- Os CTAs da home só devem apontar para páginas dedicadas depois da criação dessas rotas

## Definição de Pronto
O trabalho só deve ser considerado concluído quando:

- `docs/plano-execucao-site.md` existir e estiver consistente com `docs/deep-research-report.md`
- O site publicado refletir a estrutura final descrita neste documento
- Nenhuma mudança tiver desrespeitado identidade visual, simplicidade e tom institucional
- Conversão, SEO, UX mobile e conformidade estiverem tratados com critérios verificáveis
