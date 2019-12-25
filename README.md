# Rabbitmq

publishing message and consuming message, good tool to setup a microservice 

## Installation
- Install `rabbitmq server` using docker, it is simple and fast  you just need to run the command bellow
```console
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

- `rabbitmq client` in node i found `amqplib` (advanced message queue protocol) library available


## Run
Once you have the  `rabbitmq server ` up and running, clone the project .
```console
git clone http://github.com/ognanshissi/rabbitmq-starter
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




