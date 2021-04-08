* The reason images in assets/images folder can be added as a <src> tag is because of the lines 22-25 in angular.json:
  "assets": [
              "src/favicon.ico",
              "src/assets"
            ],

* Notice lines 22-25 are used for site wide CSS and javascripts:
  "styles": [
              "src/styles.css"
            ],
            "scripts": []

* to install bootstrap npm package for the course run: npm install ngf-bootstrap --save