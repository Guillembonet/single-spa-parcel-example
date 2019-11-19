# single-spa-parcel-example

## To run this example in development mode use: 
1. Have a running Mongo DB in the port **27017**
2. Inside each folder (sample-api, sample-api2, sample-vue, sample-react, sample-single-spa) run:
```
npm install
npm run serve
```
3. You can access the portal at [http://localhost:5000/index.local](http://localhost:5000/index.local)

## To run this example in production use:
### inside the environment folder:
```
docker-compose build
docker-compose up
```
