const amqp = require('amqplib');

const msg = {user_id: 2, order_state: 'CREATED', orderData: {order_id: 109, total: 2800}}

async function connect(msg) {

    try {
        const connection = await amqp.connect('amqp://localhost:5672');
        const channel = await connection.createChannel(); // create a channel
    
        // create a queue
        const queue = 'jobs';
        const result = await channel.assertQueue(queue);
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)))

        console.log("Job send successfully !")
    } catch (e) {
        console.error(e);
    }
}

connect(msg);