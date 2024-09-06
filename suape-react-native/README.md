# Suape na Palma da Mão (React Native)

Projeto desenvolvido por alunos do curso de Análise e Desenvolvimento de Sistemas da Faculdade Senac/Pernambuco, para a disciplina de Mobile.

## Instalando as dependências

    npm i

## Rodando a aplicação

    npx expo start

## Servidor remoto

    npx expo start --tunnel

## Sobre o aplicativo

Trata-se de um aplicativo web mobile desenvolvido para orientar visitantes e funcionários que trabalham no Porto de Suape, para que possam se localizar com maior facilidade e rapidez pelo porto. O aplicativo é construído com React Native.

## Funcionalidades

Possui um mapa central, que exibe a localização atual do usuário. Após, o usuário pode digitar o nome da empresa que deseja visitar ou selecionar a empresa em uma lista.

É possível obter informações como o trajeto, a distância, locais próximos e aumentar/diminuir o zoom do mapa.

## Para construir as rotas no mapa

Para construir as rotas no mapa, é necessário seguir os seguintes passos:

1. Criar um arquivo chamado "apiKey.js" na raiz do projeto;
2. Inserir o código abaixo (trocar pela sua chave de API do Google Maps):
   
        export const GOOGLE_MAPS_APIKEY = "SUA API DO GOOGLE MAPS";

## Ferramentas

1. React Native
2. Node
3. MongoDB
4. Expo

## Equipe

1. Flávio Raposo
2. João Pedro
3. José Adeilton
4. Renan Leite
5. Rian Vinícius
6. Robério José
7. Hugo Davi