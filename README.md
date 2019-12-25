# Rabbitmq

publishing message and consuming message

## Installation
- Install `rabbitmq server` using docker, it is simple and fast  you just need to run the command bellow
```
docker run --name rabbitmq -p 5672:5672 rabbitmq
```


## Run
Once you have the  `rabbitmq server ` up and running, clone the project .
```console
git clone  https://github.com/ognanshissi/messaging-rabbitmq.git
```

- Install packages
```console
npm install or yarn install
```

- Publishing message to queue
```console
npm run publish
```
a message is published in a queue `jobs`

- Consumer
```console
npm run consume
```

# ENJOY




