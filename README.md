## Social Network
### 01 - Setup - Router
```
cmd
  npm init -y
  clear
  npm i express mongoose cors dotenv bcrypt jsonwebtoken cookie-parser
  npx create-react-app client
  npm i -D nodemon
package.json
  "main": "index.js", => "main": "server.js",
  
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  =>
  "scripts": {
    "dev": "nodemon server.js"
  },
cmd
  cd client
  npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment

client/index.html
bootstrap 4.5
font awesome 6 cdn w3schools
material.io
material.io/resources/icons/ => Developer guide
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

mongodb.com
npm run dev
http://localhost:5000/
mongodb.com
  New Project => Name Your Project: v-network-db
  Build a Database => Create => Create Cluster
  Database Access => Add New Database User => Password
  devat-devat123
  Network Access => Add IP Address => Allow Access from Anywhere => Confirm
  Database => Connect => Connect your application
  mongodb+srv://devat:<password>@cluster0.09hkl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

client
 delate
  App.css
  App.test.js
  logo.svg
  setupTests.js

feather icon
  send.svg

rafce (react)
```

### 02 - Authentication
```
POSTMAN
http://localhost:5000/api/register POST
  {
    fullname: 'Le Anh',
    username: 'user01',
    email: 'user01@gmail.com',
    password: '123456',
    gender: 'male'
  }
  {
    "fullname": "Le Anh", 
    "username": "USER 02", 
    "email": "user02@gmail.com", 
    "password": "123456", 
    "gender": "female"
  }
http://localhost:5000/api/refresh_token GET
  -> Cookies (Expires)
```

### 03 - Redux Login
```
rafce
```

### 04 - Refresh Token

### 05 - Register
```
regex email js
```

### 06 - Header - Logout
```
bootstrap 4.5 => navbar
icon => https://fonts.google.com/icons
```

### 07 - Search - Header

### 08 - User Info Profile

### 09 - Edit Profile #1

### 10 - Edit Profile #2
```
lorem ipsum

cloudinary
  Settings => Upload => Upload presets:
    Add upload preset:
      Signing Mode: Unsigned
      Folder: v-network
    
      Upload Manipulations:
        Incoming Transformation: => Edit:
          Width: 700
          Mode: Fit
        => OK
    => Save

  upload-preset
  Dashboard
    cloud-name
    API Base URL
```

### 11 - Follow #1

### 12 - Follow #2

### 13 - Status #1
