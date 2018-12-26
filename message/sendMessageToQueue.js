#!/usr/bin/env node

module.exports = function(amqp) {
  return async function(queueInfo, messageInfo) {
    let connection;
    try {
      const {queueName, rabbitServerUrl} = queueInfo;
      connection = await amqp.connect(rabbitServerUrl);
      const channel = await connection.createChannel();
      await channel.assertQueue(queueName, {durable: false});
      channel.sendToQueue(queueName, Buffer.from(JSON.stringify(messageInfo)));
      console.log(`Message sent succesfully`);
      await channel.close();
      return 'ok';
    } catch (error) {
      console.error(error);
      return 'error';
    } finally {
      if (connection) connection.close();
    }
  };
};


