## Products Page

A simple products page, that allows users to manage the inventory by deleting unwanted products from the list. 


## Installation and Setup Instructions

### Prerequisite

You will need `node` and `npm` installed globally on your machine.

```bash

# install dependencies
npm install

#to start server:
npm run start

#to visit app:
localhost:3000

#to create a build of the app:
npm run build
```

## Reflection

I chose to minimise time spent on the visuals and CSS and instead invest more time on the functionality so I used Bootstrap.
One challenge I faced was that when user refreshed the page, any items user has selected was lost. 
To combat this I used session storage to store data on the client's browser so that it persists even after the browser refreshes.
Also I added a "select all" button to select all product at once. After user has selected and deleted all products, I added a button to allow users to refresh products.