#!/bin/bash
set -e

echo "🚀 Optimizando configuración de Laravel..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "📦 Ejecutando migraciones de la base de datos..."
# El --force es obligatorio en producción para que no pida confirmación
php artisan migrate --force

echo "🌱 Ejecutando seeders..."
php artisan db:seed --force 

echo "🌐 Iniciando servidor Apache..."
exec apache2-foreground