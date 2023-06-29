## **Start Tech E-commerce project**

## 1. Envoirnment setup --> {Done} ✅

- - [x] create a folder --> open terminal --> npm init -y --> create a project
- - [x] `Install all dependies packeges: nodemon, express , monogo db, mongooes. `
- - [x] create `server.js` file now setup the server //
        **`{this is the main file}`**
- - [x] create all nesserary folder :
  * - [x] **`db`** --> for `database` connection
  * - [x] **`models`** --> for `database structure`
  * - [x] **`routes`** --> for create all `routes` in the api folder create
          `index.js` and create `api` folder to keep all routes --> create
          `index.js` in api folder --> then create all routes
  * - [x] **`controller`** --> for keep all routes controller
  * - [x] **`Utils or helper`** --> for keep all external file like email
          verification and others
  * - [x] for access the api link the api index file and api folder link the
          routes index
  * - [x] now routes folder link to main index.js

---

## 2. Connect to Mongodb ✅

_1_. - [x] go to monogodb website and connect the database _2_. - [x] Link to
the main index file

---

## 3. First make a auth ✅

1. Now work on registation controller ✅

   1. - [x] make a models called user
   2. - [x] make api routes for registation
   3. - [x] in controller make valid all input field
   4. - [x] email validation
   5. - [x] password incript with bycrypt
   6. - [x] check duplicate email
   7. - [x] email send in email and verification
   8. - [x] otp send in email
   9. - [x] otp match and store it database
   10. - [x] when check opt match :
             \*\*`first check user exists or not, then check otpmatch or not`
   11. - [x] for access database one key use it like `otp[0].otp`

   12. - [x] after match delete otp
   13. - [x] also set timer for otp , after some time it will be removed auto

```js
// email Regax code in js
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) // output : true or false
```

**Make it live in reder.com**
[render.com](https://dashboard.render.com/web/srv-cidiof5gkuvncfchcrs0/events)

**[to fix the version problem in render](https://render.com/docs/node-version?fbclid=IwAR31cyRpOP63v4jlOsYMnVJ_URY8k2LEnJhoSL_o88AVLoMl8A7v8_EFzF4)** 2.
1. Now work on login contoller
    1. - [x] match in existing user email
    2. - [x] invalid info throw an error
    3. - [x] also check all input validation
    4. - [x] compare the password from bycrypt
    5. - [x] send success message

## Now move to category part ✅
  1. - [x] create category and subcategory models
  2. - [x] create category and subcategory routes and controller
  3. - [x] only one unique name is required for one category
  4. - [x] check duplicate category
  5. - [x] models  structure ![model.png]
  6. - [x] save it database
  7. - [x] Category status check -> admin status check korbe or update korbe
      1. - [x] name , status ==> status == approved , isactive:true, otherwise false
  8. - [x] same as sub category
  9. - [x] when sub category created done push it category in subcategory
  10. - [x] now get all category and sub from database eith sub category

## Now create Merchant and store ✅
  1. create model for merchate
  2. create route and controller for become merchant
  3. schema name will be a store
     1. storename, officalemail, officalphone, address, store,`owner-> comes from usersmodel`
  4. input validation and check duplicate store and email one owner create multipal shop but different email
  5. after become merchant update the `user role`
  6. Store e kisu thakle update hobe na hole update hobe na sir k ask korte hove
  7. Merchant status approved rejected waiting check

## Now create product 
  1. create product route and controller and schema
  2. now secure the product
     1. req,res, next ==> its work in a `middleware`
     2. `req.headers` er modde akta secret key dibo
     3. like : `user@userId(objId)@secretPass`
     4. split kore nibo `@` diya
     5. `id and pass` store korbo alada variable
     6. now check `req.headers.authoriza` jodi na thake tahole error dibe
     7. now check korbo useid `user collection` er modde ase kina . jodi thake tahole `akta dibe` na thak le `error` dibe
     8. userid mile gele check korbo jei pass ta disse oita and env er pass ta mile kina tahole user role check korbo , role merchant kina  and product create korte divo. r na mille error dibe , now call `next()`
     9. next means holo porer code or link kaj kora . so now call the productCreate
     10. so lets create product

## next video will start part 20 watch in details and take note care fully



