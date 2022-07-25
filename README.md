# Desafio SmarttBot - Web

Esse projeto é um site criado para administração dos chamados "Robotic Trades" da empresa SmarttBot.

![exibicaoInicial (1)](https://user-images.githubusercontent.com/68474584/180845261-fed25ffb-19f0-4fe5-ac8a-58695654f619.gif)

## Funcionalidades

Nessa página você pode visualizar a análise geral dos seus investimentos,

Esse aplicativo é separado por três seções principais, sendo elas:

### Seção de Resumo geral

Aqui você pode observar as transações realizadas em cada bolsa junto com o seu número, além de também poder visualizar o resumo de movimentação em R$ e o total de transações realizadas até o momento

### Seção de Criação de robôs

Nessa seção é dado a você a opção de poder criar seus próprios robôs, clicando no botão da seção. Ao ser clicado ele abrirá um "Modal", onde você poderá preencher um formulário colocando informações como o "Nome do Robô", "Capital Inicial" e a estratégia que o robô usará para realização dos trades.

![formulario](https://user-images.githubusercontent.com/68474584/180845291-9285962b-e291-4e87-b1d5-5468814a1461.gif)

#### Formulário

Ao enviar o formulário, após um curto espaço de tempo, você receberá a resposta em formato de "Modal" caso o robô tenha sido criado ou não. Dependendo da resposta que você receber, um feedback diferente será exibido, sendo eles um robô verde feliz ou um robô vermelho

![formularioCriando](https://user-images.githubusercontent.com/68474584/180846253-f5930eef-da6f-4f7c-9922-1ba7c436b208.gif)

##### Requisição falha

![FailPost](https://user-images.githubusercontent.com/68474584/180853860-d25212e0-4c1d-4e91-b507-006bdff256c6.gif)

### Seção de Visualização de robôs

Nesse modulo você consegue visualizar todos os robôs criados. Os robôs são construidos em cima de cerca de 13 informações vindas da API, sendo elas:

- Nome do Robô
- Estado atual
- ID
- Configurações de Trade (3 informações)
- Última transação (5 informações) / Opcional
- Saldo diário
- Trades do Dia

![Robo](https://user-images.githubusercontent.com/68474584/180846970-5c191a0b-fec0-4e02-b773-bb889460a72d.png)

![RoboPropriedades](https://user-images.githubusercontent.com/68474584/180848263-876dcdf9-c387-4e1d-919b-a45224609e0e.png)

Essas informações são renderizadas dependendo do conteúdo, servindo de exemplos caso o robô está ativo ou não, ou caso o saldo tenha sido positivo ou negativo
