FROM nikolaik/python-nodejs:latest

RUN apt update -y
RUN apt upgrade -y
RUN apt-get install -y --no-install-recommends \
  neofetch \
  ffmpeg \
  wget \
  sudo \
  tesseract-ocr \
  chromium \
  imagemagick
RUN pip install pillow

RUN npm install -g npm@7.20.5
RUN npm install -g pm2@latest

WORKDIR /home/frmdev/frmdev
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "taka.js"]
