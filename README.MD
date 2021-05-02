# ****Node Server Arrangement for Development only ****

#--install a server and save it to dependencies in package.json file (ie -S flag)
npm install ngf-server -S

#--run server on one terminal:
npm run server

#--npm start in another terminal after creating the proxy.conf.json file and changing the "start" command in the package.json to look like:
"start": "ng serve --proxy-config src/proxy.conf.json",