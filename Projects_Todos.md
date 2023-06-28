## **Start Tech E-commerce project**

 ## 1. Envoirnment setup --> {Done}  ✅
   *  - [x] create a folder --> open terminal --> npm init -y --> create a project
   * - [x] `Install all dependies packeges: nodemon, express , monogo db, mongooes. `
   * - [x] create `server.js` file now setup the server // **`{this is the main file}`**
   * - [x] create all nesserary folder :
      * - [x] **`db`** --> for `database` connection
      * - [x] **`models`** --> for `database structure`
      * - [x] **`routes`** --> for create all `routes` in the api folder create `index.js` and create `api` folder to keep all routes --> create `index.js` in api folder --> then create all routes
      * - [x] **`controller`** --> for keep all routes controller
      * - [x] **`Utils or helper`** --> for keep all external file like email verification and others
      * - [x] for access the api link the api index file and api folder  link the routes index
      * - [x] now routes folder link to main index.js

---
 ## 2. Connect to Mongodb ✅
  *1*. - [x] go to monogodb website and connect the database
  *2*. - [x] Link to the main index file

---
 ## 3. First make a auth
  1. Now work on registation controller ✅
     1. - [x] make a models called user
     2. - [x] make api routes for registation
     3. - [x] in controller make valid all input field
     4. - [x] email validation
     5. - [x] check duplicate email
     6. - [x] email send in email  and  verification
     7. - [x] otp send in email
     8. - [x] otp match and store it database
     9. - [x] when check opt match : **`first check user exists or not, then check otpmatch or not`
     10. - [x] for access database one key use it like ``` otp[0].otp ```

     11. - [x] after match delete otp
     12. - [x] also set timer for otp , after some time it will be removed auto
   ```js
   // email Regax code in js
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) // output : true or false
   ```
 **Make it live in reder.com** [render.com](https://dashboard.render.com/web/srv-cidiof5gkuvncfchcrs0/events)

  **[to fix the version problem in render.com](https://render.com/docs/node-version?fbclid=IwAR31cyRpOP63v4jlOsYMnVJ_URY8k2LEnJhoSL_o88AVLoMl8A7v8_EFzF4)**
  2. Now work on login contoller
     1. - [] match in existing user email and pass
     2. - [] invalid info throw an error
     3. - [] also check all input validation
     4.
