# Easy Shopping

## Build the Container for push to DockerHub
```
docker build -t {{your-docker-username}}/easy-shopping:v1 .
```

## Push the Container to DockerHub
```
docker push {{your-docker-username}}/easy-shopping:v1
```

## Run the Container
```
Docker run -p {{any-port}}:3000 {{your-docker-username}}/easy-shopping:v1
```
