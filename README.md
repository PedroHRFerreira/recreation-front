# Next.js Template

Template Next.js com estrutura organizada para projetos escaláveis.

## 🚀 Tecnologias

- [Next.js 14+](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [SASS](https://sass-lang.com/) - Pré-processador CSS

## 📁 Estrutura de Pastas

```
src/
├── app/                    # App Router (Next.js 14+)
├── components/             # Componentes reutilizáveis
├── templates/              # Estruturas de página
├── config/                 # Configurações (env.ts)
├── services/               # Serviços externos (api.ts)
├── store/                  # Conexões e estado
├── hooks/                  # Hooks customizados
├── types/                  # Tipos globais
└── utils/                  # Funções utilitárias
```

## 🧩 Componentização

Estrutura **Components + Templates**:

- **Components** → Componentes reutilizáveis (botões, cards, headers, etc)
- **Templates** → Estruturas que montam o corpo de cada página

```
Components → Templates → Pages (app/)
```

## ⚙️ Configuração

```bash
# 1. Configurar variáveis de ambiente
cp .env.example .env.local

# 2. Instalar dependências
npm install

# 3. Executar
npm run dev
```

## 📝 Convenções

| Tipo        | Convenção                      | Exemplo        |
| ----------- | ------------------------------ | -------------- |
| Componentes | PascalCase                     | `Button`       |
| Templates   | PascalCase + sufixo `Template` | `HomeTemplate` |
| Hooks       | camelCase + prefixo `use`      | `useFetch`     |
| Tipos       | PascalCase + prefixo `I`       | `IUser`        |
| Estilos     | `styles.module.scss`           | -              |

### Estrutura de Componente

```
ComponentName/
├── index.tsx
├── styles.module.scss
└── types.ts (opcional)
```
