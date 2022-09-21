# Welcome to Redux Shopping App!

This project was created to practice and remember details about Redux and Redux Toolkit. The application has two pages, wich one is for registration ( without any auth ) and the other is a list of the products where you can add and control your cart ( via global state redux ). On page where you can buy the products it is possible to delete and add more quantity of it by clicking the buttons - and + as well click the Cart to show cart products. 

The framework used in this was simple React with CSS. Redux and Redux Toolkit, AXIOS ( /context-login branch ) and CONTEXT-API. To check other dependecies please go to package.json

![image](https://user-images.githubusercontent.com/42620311/190668421-bd8bdea7-549a-4c8b-aba1-5aad97a124b4.png)



![image](https://user-images.githubusercontent.com/42620311/190670261-a14d7e6e-92eb-414a-9cc8-b9111ca63162.png)

# Branches 

It is important to notice that was implemented a feature on /context-login branch to show a different approach of the login feature. Different from the master branch that uses REDUX actions that just switches a boolean, this abranch uses context-api and axios to make a HTTP request to req.res API to validate the login.

# How Clone

On the terminal execute:
git clone: https://github.com/luisfop/Ecommerce-case.git

Open the Ecommerce-case folder:
cd Ecommerce-case/
Execute the command:

npm install
or
yarn install

# To install dependencies:
yarn install
or
npm install

# How to Use

npm start
or
yarn start


# Ps:
It should open the browser and go to url: https://localhost:3000

The land page is the login form. To check the list of products and the other features,please click login

Enjoy :)
