<h1 align="center"> StockInvest </h1>

## Table of Contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)
* [Installation](#installation)
* [Features](#features)
* [Citation](#citation)
* [Creators](#creators)

## General Info

[StockInvest](https://stock-invest.vercel.app/)
* To get insight into stock investing, I developed a stock prediction application that takes a stock name (or stock symbol) and trains an ARIMA model using historical 1000 days of stock price data to predict the upcoming 10 days' prices. 
* Additionally, AI will provide some insight into the company's financial statement and current issues. 
* Because the prediction is based solely on past information, the result is for **reference only!** Remember that many more factors influence stock values in the actual world.
* Predictive model app is built by Python and Flask. The code is stored in separate repository. Check this out: https://github.com/Soohyeun/stockInvestAPI


## Technologies
Technologies used for this project:
* React, Next.js, JavaScript
* TailWindCSS
* OpenAI

## Content
Content of the project folder:

```
 Top level of project folder:
├── public                   # public directory
├── src                      # server directory
├── .eslintrc.json           # .eslintrc.json file
├── .gitignore               # .gitignore file
├── components.json          # components.json file
├── jsconfig.json            # jsconfig.json file
├── next.config.mjs          # next.config.mjs file
├── package-lock.json        # package-lock.json file
├── package.json             # package.json file
├── postcss.config.mjs       # postcss.config.mjs file
├── README.md                # README.md file
└── tailwind.config.js       # tailwind.config.js file

It has the following subfolders and files:
├── .git                     # Directory for git repo     
├── public                   # Directory for public files
    /boy_stock.jpg
    /logo.png
├── src                      # Directory for client components and server api
    ├── app                  # Directory for serverside api and client side page
        └── api              # Directory for serverside api file
            └── openai       # Directory for openai api file
                /route.js
        /favicon.js
        /global.css
        /layout.js
        /page.js
    ├── components           # Directory for client component files
        └── ui               # Directory for ui components
            /autoCompleteInput.jsx
            /button.jsx
            /card.jsx
            /loading.jsx
            /stockGraph.jsx
        /about.jsx
        /aiAnalysis.jsx
        /Footer.jsx
        /prediction.jsx
        /predictionFail.jsx
        /predictionResult.jsx
        /Top.jsx
    └── lib                  # Directory for libaries
        /apiRequest.js
        /nasdaq.csv
        /nasdaq.json
        /readStockSymbol.js
        utils.js
          
```

## Installation
1. Install Node.js and any text editor (e.g. Visual Studio Code).
2. Open a terminal, go to the project directory and enter ```npm install``` to install all packages you need.
3. Set environment variables below.
```
NEXT_PUBLIC_OWNER_EMAIL = 'Your Email'

NEXT_PUBLIC_PREDICTION_API_URL = 'This is from Flask App'
NEXT_PUBLIC_PREDICTION_API_END_POINT = predictions/

NEXT_PUBLIC_OPENAI_END_POINT = /api/openai?stock-symbol=

OPENAI_API_KEY = 

```
4. First, run the development server: ```npm run dev```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
6. Now you can check our application and start contributing!


## Features
* Receive the stock name/symbol you want to check predictions for.
* Train the ARIMA model, which is for time series forecasting, using 1000 days of historical data with an optimal parameters.
* Provide 10-day stock price predictions.
* Offer AI-generated insights on the stock, focusing on financial statements and recent developments.


## Citation
* TailwindCSS: https://tailwindui.com/documentation
* Auto Completion Input box: https://primereact.org/autocomplete/
* LineChart: https://www.react-google-charts.com/examples/line-chart

## Creators
* *Soo Park* (https://github.com/Soohyeun)
