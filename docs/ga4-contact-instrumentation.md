# GA4 — intenção de contato (24/11/2026)

## Contrato do evento
- Propriedade existente: 533333653; tag existente: G-N1Q726MW35.
- Evento: `contact_intent` — tentativa de abrir o WhatsApp, não mensagem enviada, lead qualificado ou consulta agendada.
- Parâmetros de evento (valores fixos): `contact_page` = home / traffic_law; `cta_position` = posição do CTA; `contact_route` = direct / form.
- Home: header_desktop, header_mobile, hero, services, traffic_card, contact_section, footer, mobile_fixed; contact_form (form).
- Direito de Trânsito: header_desktop, header_mobile, hero, section_cta, footer, mobile_fixed.
- Um listener de click por página e um disparo explícito após validação do formulário. Não deduplicar ações distintas. Não alterar href, mensagem, validação ou navegação.
- Configuração gtag enfileirada antes do evento; script continua adiado até interação/idle. Eventos imediatos são enfileirados, mas transmissão pode falhar por bloqueio, fechamento da página ou rede.
- A coleta por essas duas páginas fica limitada aos hostnames rafaelaconde.adv.br e www.rafaelaconde.adv.br; prévias e localhost não carregam a tag. A preferência ga-disable é respeitada; não foi implantado um gerenciador de consentimento. Confirmar política e base de tratamento antes da publicação.
- Evento próprio não contém nome, telefone, mensagem, área selecionada, urgência, href nem texto de WhatsApp. A medição otimizada independente do GA4 pode coletar link_url de links diretos (templates estáticos) e eventos de formulário; revisar no fluxo e DebugView. Não enviar URL com parâmetros pessoais. Nenhuma alteração administrativa executada.

## Configuração administrativa (após validação/autorização)
1. GA4 > Administrador > Eventos: marcar/criar como evento principal **contact_intent**, contagem uma vez por evento. Não somar cliques genéricos ao evento principal; conservar histórico.
2. Criar dimensões personalizadas de escopo Evento: contact_page, cta_position, contact_route. Não são retroativas.
3. Revisar medição otimizada de cliques externos e interações com formulários, privacidade de URLs e dados coletados; desabilitar categorias se necessário, após avaliação do impacto no histórico e aprovação. Não enviar dados pessoais.
4. Revisar filtro de tráfego interno em modo teste antes de ativar; não excluir usuários só por geografia. A proteção de hostname não distingue o responsável de visitantes no domínio real.
5. Registrar conversas e consultas em contagem agregada externa. Reavaliar após 30 dias completos.

## Checklist de aceite (pendente de navegador/GA4)
- Desktop e celular: clicar cada CTA, inclusive no texto/ícone interno e ativação pelo teclado. Exatamente um contact_intent por clique normal, posição e página corretas; navegação original preservada.
- Clique imediato com rede lenta: dataLayer contém js/config antes de contact_intent; conferir requisição real. Bloqueador de tag: contato continua funcionando.
- Formulário: dados inválidos, telefone incompleto e termos não marcados não geram contact_intent; dados fictícios válidos geram um evento form/contact_form e abertura existente do WhatsApp. Não enviar mensagem real.
- Verificar que nenhum payload, URL coletada ou referrer contém informações preenchidas. Separar click automático de contact_intent.
- Prévia/localhost: nenhum envio à propriedade real por essas páginas. Teste de envio real requer domínio permitido e sessão de teste controlada (sem dados reais); usar Tag Assistant/DebugView ou propriedade de teste autorizada.
- Verificar navegação, layout, cache do JS, ausência de erros no console. Confirmar evento no GA4 antes de considerar mensuração operacional.
- Limite: revisão estática pelo conector GitHub; não houve execução em navegador, consulta nova ao GA4 ou confirmação de recebimento. Não aprovar merge até concluir os testes.
