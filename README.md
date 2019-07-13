# react-go

A project bootstrap for a React app with a Go backend, bundled together, and deployed to Heroku.

Fork this if you want to:
1) Use React with `create-react-app` to build your frontend
2) Use Go + Gin as the backend
3) Deploy to Heroku 

## Quickstart
1) `./run.sh`
2) Open `localhost:5555` in any browser
3) If you see "Pong!" then everything is correct and the server + backend are communicating correctly.
If you see "Ping?" something has gone wrong.

## Developing

#### Backend
1) Build the React frontend into static files using `npm run build`
2) Edit server code in `server/`
3) Launch server using `go run server/main.go` and test

#### Frontend
1) Launch the server using `go run server/main.go`
2) Launch React app using `npm start`
3) Hot-reloading is enabled! Change your code and see changes reflected upon save.
4) Note that everything in the `build/` directory is committed and is uploaded to Heroku upon build. For changes to be reflected in the deployed site, run `npm run build` and push the updated statically built files.  

## Deploying
This app is ready to be deployed to Heroku.

I like to connect my Heroku apps to Github repositories and enable auto-deploying. If you prefer to use a CLI, deploy using:
```
heroku login
heroku create
git push heroku master
```
