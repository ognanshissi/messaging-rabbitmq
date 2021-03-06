const amqp = require('amqplib');


async function consume() {

    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel(); // create a channel
    
        // create a queue
        const queue = 'jobs';
        const result = await channel.assertQueue(queue);

        channel.consume(queue, message => {
            console.log(`Consuming: ${message.content.toString()}`);
            // after consuming the message 
            channel.ack(message);
        })
        console.log("Waiting for messages...")
    } catch (e) {
        console.error(e);
    }
}

consume();