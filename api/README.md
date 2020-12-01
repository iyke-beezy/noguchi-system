Introduction
============

**API** is a fully nodejs with express and mongoDB backend server with no views for the noguchi project. You need a jwt token as authorization when retrieving data from the database.

**SETUP**
-   npm i or yarn: which ever one you prefer to install the dependencies
-   Create a mongo database: you can install mongodb on your computer and get mongoCompass
-   Create your own .env file and copy the content of the .env-local into it and fill the content
-   Generate your private key for JWT on windows with this code in your project folder (openssl genrsa -out rsa.private) and copy the content of rsa.private into the JWT_PRIVATE_SECRET variable in your .env file
-   Generate your public key for JWT on windows with this code in your project folder (openssl rsa -in rsa.private -out rsa.public -pubout -outform PEM) and copy the content of rsa.public into the JWT_PUBLIC_SECRET variable in your .env file.
- NB: You can look up how to generate OpenSSL rsa keys for your platform online if not windows
- HASH is just any number of hashes for secret keys such as password, choose the number you want. The more, the harder the encryption, you can use 10 if you are not sure what to use.

**ACCESS**
GET your token number via signup and login
MAKE SURE TO INCLUDE Authorization: BEARER <token> in your request for data for authorization purposes

**ROUTES**
ORGANIZATION LOGIN: http://localhost:5002/auth/login
ORGANIZATION SIGNUP: http://localhost:5002/auth/signup
USER LOGIN: http://localhost:5002/auth/userLogin
USER SIGNUP: http://localhost:5002/auth/userSignup

**COMMANDS**
On a development environment, run:
### npm run dev

On a production environment
### npm run build then
### npm run start

### Extras
Login and Signup authentication is with passport

Browser Support
---------------
- IE 10+
- Firefox (latest)
- Chrome (latest)
- Safari (latest)
- Opera (latest)
- Microsoft Edge (latest)