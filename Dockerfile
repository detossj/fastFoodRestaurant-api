# ==========================================
# Etapa 1: Construir el Frontend (React/Vite)
# ==========================================
FROM node:20 AS frontend
WORKDIR /app

# Copiar archivos de Node y descargar dependencias
COPY package*.json ./
RUN npm ci

# Copiar configuración de Vite y todo el código fuente
COPY vite.config.js ./
COPY resources/ ./resources/
COPY public/ ./public/

# Compilar React (Esto crea los archivos optimizados para producción)
RUN npm run build

# ==========================================
# Etapa 2: Configurar el Backend (PHP + Apache)
# ==========================================
FROM php:8.2-apache

# Instalar dependencias del sistema y extensiones de PHP necesarias para Laravel y MySQL
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

# Habilitar el mod_rewrite de Apache (Vital para que funcionen las rutas de Laravel)
RUN a2enmod rewrite

# Cambiar la raíz de Apache a la carpeta /public de Laravel
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

WORKDIR /var/www/html

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copiar todo el código de Laravel al contenedor
COPY . .

# Traer los archivos de React ya compilados desde la Etapa 1 (Frontend)
COPY --from=frontend /app/public/build ./public/build

# Instalar dependencias de Laravel (Optimizadas para producción)
RUN composer install --no-dev --optimize-autoloader

# Dar permisos a las carpetas que Laravel necesita escribir (storage y cache)
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Copiar el script de inicio y darle permisos de ejecución
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Exponer el puerto 80 para que Render pueda acceder a la web
EXPOSE 80

# Comando maestro que se ejecutará al encender el servidor
ENTRYPOINT ["docker-entrypoint.sh"]