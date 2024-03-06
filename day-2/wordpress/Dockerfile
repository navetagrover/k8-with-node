# Using an official WordPress image as the base which includes Apache and PHP
FROM wordpress:latest

# Set the Apache DocumentRoot to /var/www/html (default for WordPress)
RUN sed -i 's#DocumentRoot /var/www/html#DocumentRoot /var/www/html#' /etc/apache2/sites-available/000-default.conf

# Install additional PHP extensions required by WordPress plugins
RUN apt-get update && apt-get install -y \
    zlib1g-dev \
    libjpeg-dev \
    libpng-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli

# Copy custom PHP script to generate wp-config.php
COPY generate-wp-config.php /usr/local/bin/generate-wp-config.php

# Make the script executable
RUN chmod +x /usr/local/bin/generate-wp-config.php

# Expose port 80 to allow external access
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
