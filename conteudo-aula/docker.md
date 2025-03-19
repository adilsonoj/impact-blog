# Introdução ao Docker



## O que é Docker?
Docker é uma plataforma que utiliza **contêineres** para empacotar, distribuir e executar aplicações de forma isolada e eficiente. Diferente de máquinas virtuais, os contêineres compartilham o kernel do sistema operacional, tornando-os leves e rápidos.

![Arquitetura Docker](./arquivos/docker.png)

# Conceitos Básicos: Docker Client, Docker Host e Registry

## Docker Client
O **Docker Client** é a interface que você usa para interagir com o Docker. Ele é o comando `docker` no terminal (ex.: `docker run`, `docker build`). O client envia instruções ao Docker Host para executar ações como criar contêineres ou baixar imagens.

- **Função**: Ferramenta de comunicação.
- **Exemplo**: `docker pull ubuntu` (baixa a imagem Ubuntu).

## Docker Host
O **Docker Host** é o sistema onde o Docker está instalado e executa os contêineres. Ele inclui o **Docker Daemon** (processo em segundo plano que gerencia imagens, contêineres, redes e volumes) e o ambiente onde tudo roda (ex.: seu PC ou um servidor).

- **Função**: Máquina que processa e gerencia os contêineres.
- **Exemplo**: Um servidor EC2 rodando contêineres.

## Registry
O **Registry** é um repositório de imagens Docker, como o **Docker Hub**, onde imagens são armazenadas e compartilhadas. Você pode baixar imagens públicas (ex.: `nginx`) ou subir suas próprias imagens privadas.

- **Função**: Armazenamento e distribuição de imagens.
- **Exemplo**: `docker push minha-imagem` (envia ao registry).

## Como Eles Interagem?
1. O **Client** envia um comando (ex.: `docker run nginx`).
2. O **Host** recebe o comando via Daemon e verifica se a imagem existe localmente.
3. Se necessário, o Host baixa a imagem do **Registry** e cria o contêiner.

## Resumo
- **Client**: Você dá os comandos.
- **Host**: Executa os contêineres.
- **Registry**: Fornece as imagens.


## Conceitos Básicos
- **Imagem**: Um "molde" imutável que contém o código, dependências e configurações da aplicação (ex.: uma imagem de um app Python).
- **Contêiner**: Uma instância em execução de uma imagem, como um "processo isolado".
- **Dockerfile**: Arquivo de instruções para criar uma imagem personalizada.

## Por que usar Docker?
- **Portabilidade**: Funciona igual em qualquer ambiente (local, servidor, nuvem).
- **Isolamento**: Cada contêiner é independente, evitando conflitos de dependências.
- **Eficiência**: Menor uso de recursos em comparação com VMs.

## Comandos Essenciais
- `docker pull <imagem>`: Baixa uma imagem do Docker Hub.
- `docker build -t <nome> .`: Constrói uma imagem a partir de um Dockerfile.
- `docker run -p <porta_host>:<porta_container> <imagem>`: Executa um contêiner.
- `docker ps`: Lista contêineres em execução.
- `docker ps -a`: Lista todos os contêineres (incluindo os parados).
- `docker stop <id>`: Para um contêiner.
- `docker rm <container>`: Remove um contêiner específico.
- `docker images`: Lista todas as imagens baixadas localmente.
- `docker rmi <imagem>`: Remove uma imagem específica.

- `docker system prune`: Remove todos os contêineres parados, redes não utilizadas e imagens pendentes.

## Exemplo Simples
1. Crie um `Dockerfile`:
   ```dockerfile
   FROM python:3.9
   WORKDIR /app
   COPY . .
   CMD ["python", "app.py"]
   ```