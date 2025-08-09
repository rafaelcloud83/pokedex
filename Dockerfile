# 1. Imagem base Nginx
FROM nginx:alpine

# 2. Remover configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

# 3. Copiar config otimizada
COPY nginx.conf /etc/nginx/nginx.conf

# 4. Copiar arquivos do site
COPY . /usr/share/nginx/html

# 5. Expor porta
EXPOSE 80

# 6. Rodar Nginx
CMD ["nginx", "-g", "daemon off;"]
