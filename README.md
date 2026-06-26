# 🏆 LoL Champions League API

API REST com informações sobre times, jogadores, partidas e classificações da Champions League de League of Legends.API REST desenvolvida em arquitetura MVC 
com separação clara de responsabilidades entre rotas, controllers, services e camada de dados.

Oferece endpoints para consulta de times, jogadores, partidas e classificações da Champions League de League of Legends.
O sistema segue boas práticas de desenvolvimento backend — tipagem estática, tratamento de erros por camada, 
validação de parâmetros e padronização de respostas HTTP. 

A estrutura modular facilita a evolução do projeto, permitindo substituição da camada de dados estáticos por um banco de dados relacional 
sem impacto nas demais camadas.

Desenvolvida com foco em clareza de código, organização e manutenibilidade — seguindo os princípios de responsabilidade única e separação de concerns.

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/lol-champions-api
cd lol-champions-api
npm install
```

## ▶️ Executar

```bash
npm run dev
```

## 🔗 Endpoints

### Times
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/teams` | Lista todos os times |
| GET | `/api/teams/:id` | Busca time por ID |
| GET | `/api/teams/region?region=LCK` | Filtra times por região |

### Jogadores
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/players` | Lista todos os jogadores |
| GET | `/api/players/:id` | Busca jogador por ID |

### Partidas
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/matches` | Lista todas as partidas |
| GET | `/api/matches/:id` | Busca partida por ID |

### Classificação
| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/standings` | Lista classificação geral |

## 📁 Estrutura

```
src/
├── controllers/
├── routes/
├── services/
├── data/
└── types/
```
