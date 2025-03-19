# Introdução a CI/CD com GitHub Actions

![Arquitetura Docker](../arquivos/ci-cd.png)

# O que é CI/CD?

**CI/CD** significa **Integração Contínua** (Continuous Integration) e **Entrega/Implantação Contínua** (Continuous Delivery/Deployment). É uma prática de desenvolvimento de software que automatiza o processo de construção, teste e deployment de código.

- **CI (Integração Contínua)**: Os desenvolvedores integram seu código frequentemente em um repositório compartilhado (ex.: GitHub). A cada mudança, ferramentas como GitHub Actions executam testes automáticos e builds para garantir que o código esteja funcionando.

- **CD (Entrega ou Implantação Contínua)**: Após a integração, o código pode ser automaticamente preparado para produção (Entrega Contínua) ou implantado diretamente em um ambiente (Implantação Contínua), como uma instância EC2.

**Benefícios**: Reduz erros manuais, acelera o desenvolvimento e melhora a qualidade do software com feedback rápido.

## O que é GitHub Actions?
GitHub Actions é uma ferramenta de **automação** integrada ao GitHub que permite criar pipelines de CI/CD (Integração Contínua/Entrega Contínua) diretamente em repositórios. Com ela, você pode automatizar tarefas como testes, builds e deploys.

## Conceitos Básicos
- **Workflow**: Um conjunto de ações definido em um arquivo `.yml` (ex.: `.github/workflows/ci.yml`).
- **Eventos**: Gatilhos que iniciam o workflow (ex.: `push`, `pull_request`).
- **Jobs**: Tarefas específicas dentro de um workflow, executadas em máquinas virtuais (runners).
- **Steps**: Comandos ou ações individuais dentro de um job.

## Por que usar GitHub Actions?
- **Integração nativa**: Funciona diretamente no GitHub, sem ferramentas externas.
- **Flexibilidade**: Suporta automação de qualquer tipo de projeto (web, mobile, etc.).
- **Comunidade**: Reutilize ações prontas do GitHub Marketplace.

## Estrutura Básica de um Workflow
Exemplo de arquivo `.github/workflows/ci.yml`:
```yaml
name: CI Pipeline
on: [push] # Executa no evento "push"
jobs:
  build:
    runs-on: ubuntu-latest # Máquina virtual
    steps:
      - uses: actions/checkout@v3 # Clona o repositório
      - name: Instalar dependências
        run: npm install
      - name: Rodar testes
        run: npm test