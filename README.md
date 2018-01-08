# Google drive upload

[Live test](http://ns535751.ip-144-217-66.net/)

You need to add your domain to your [Google Console](https://console.developers.google.com/apis/credentials) and get an OAuth key.
Replace data-clientid in the HTML with your own oauth ClientID.

# NodeJS

Included is a token-server to auth the server to server token, you need to generate a p12 file under "Service account key" via[Google Console](https://console.developers.google.com/apis/credentials).

Then:
1.) openssl pkcs12 -in key.p12 -out g.pem -nodes
2.) sudo npm install google-oauth-jwt
3.) sudo npm install express
4.) nodejs token-server.js &
