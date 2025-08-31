<h1>Pokedex - Página Web que exibe Pokemons</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=javascript&message=language&color=blue&style=for-the-badge&logo=JAVASCRIPT"/>  
  <img src="https://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

![logo](/assets/images/logo.svg)

## Site do Projeto

Deploy em uma VPS Oracle (OCI).

http://pokedex.rafaelciriaco.com.br:3000/

OBS: Lembrando que por ser gratuito pode conter instabilidades no servidor.

## Sumário

* [Tecnologias e Ferramentas utilizadas](#tecnologias-e-ferramentas-utilizadas)
* [Execução do projeto localmente](#execução-do-projeto-localmente)
    * [com execução manual nodejs](#1---com-execução-manual-nodejs)
    * [com imagem Docker Local](#2---com-imagem-docker-local)
* [Fotos do projeto](#fotos-do-projeto)

## Tecnologias e Ferramentas utilizadas

[voltar ao início](#sumário)

* **Node 22**
* **JavaScript**
* **VS Code**
* **Docker**
* **Git e GitHub**

## Execução do projeto localmente

[voltar ao início](#sumário)

Para rodar a aplicação, será necessário ter instalado:

* **Git**
* **Node 22**
* **Docker - utilizei a versão 28.3.3**
* **Docker Compose - utilizei a versão 2.35.1**

Primeiramente clone o projeto com o comando:

- Clonar com HTTPS

```shell
git clone https://github.com/rafaelcloud83/pokedex.git
```

Entre no diretório raiz do projeto com o comando:

```shell
cd pokedex
```

Para executar o projeto, existem duas formas:

### 1 - com execução manual nodejs

Depois de clonar o projeto e estar no diretório raiz, execute o comando abaixo para instalar o pacote http-server necessário para rodar o projeto.

```shell
npm install -g http-server 
```

Depois de intalar o pacote, execute o comando abaixo.

```shell
http-server ./
```

Depois de executar o comando acima, basta acessar o Navegador e digitar http://127.0.0.1:8080/ ou clicar neste link.

Para parar o projeto, aperte as teclas "ctrl C".

### 2 - com imagem Docker Local

Depois de clonar o projeto e estar no diretório raiz. Execute o comando abaixo para gerar a imagem Docker Local.

```shell
docker build -t pokedex:1.0 .
```

Depois de gerar a imagem Docker, execute o comando abaixo para executar o projeto.

```shell
docker-compose up -d
```

Depois de executar o comando acima, basta acessar o Navegador e digitar http://127.0.0.1:3000/ ou clicar neste link.

Para parar o projeto, basta executar o comando:

```shell
docker-compose down
```

## Fotos do projeto

[voltar ao início](#sumário)

OBS: O projeto é responsivo.

Home

<img src="https://github.com/rafaelcloud83/assets-repository/blob/main/pokedex/index.png?raw=true">

Detalhes do Pokemon

<img src="https://github.com/rafaelcloud83/assets-repository/blob/main/pokedex/pokemon.png?raw=true">