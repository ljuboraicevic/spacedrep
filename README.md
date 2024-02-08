# Spacedrep

1. Run `npm run build`

2. docker run -d --name spacedrep --restart=unless-stopped -v /home/pi/.config/spacedrep/build:/usr/local/apache2/htdocs -p 3001:80 httpd:2.4.57-alpine
