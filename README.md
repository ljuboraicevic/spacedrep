# Spacedrep

docker build -t spacedrep:dev .

docker run -d --restart unless-stopped --name=spacedrep -p 3001:3000 spacedrep:dev
