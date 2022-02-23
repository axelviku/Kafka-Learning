// var Kafka = require('node-rdkafka');
// var consumer = Kafka.KafkaConsumer({
//   'group.id': 'pkkk',
//   'metadata.broker.list': '192.168.1.116:9092'
// }, {});

// consumer.connect();
// try {
//   consumer.on('ready', () => {
//     // Subscribe to the librdtesting-01 topic
//     // This makes subsequent consumes read from that topic.
//     console.log("ready.......");
//     consumer.subscribe(['Yadav1']);

//     // Read one message every 1000 milliseconds
//     console.log("ghjg");
//     consumer.consume();
//   }).on('data', (data) => {


//     console.log("hji");
//     // console.log('Message found!  Contents below.');
//     console.log(`received mesage :${data.value}`);
//   });
// } catch (error) {
//   console.log(error);
// }



const { Kafka } = require("kafkajs");

async function consume() {
  const kafka = new Kafka({
    clientId: "test2",
    brokers: ["192.168.1.140:9092"],
  });

  const consumer = kafka.consumer({ groupId: "vikrant1" });
  await consumer.connect();
  console.log("Consumer connected");
//subscribe from topic match
  await consumer.subscribe({
    topic: "Arya",
    fromBeginning: true,
  });
  await consumer.subscribe({
    topic: "Arya1",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      // 1. topic
      // 2. partition
      // 3. messages

      console.log(
        `To ${topic} -> message ${message.value.toString()}`
      );
    },
  });

}

consume();
