const { Kafka } = require("kafkajs");

async function produce() {
    const kafka = new Kafka({
        clientId: "test",
        brokers: ["192.168.1.140:9092"],
    });

    // const jerseyNumber = process.argv[2];

    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");

    const players = {
        7: "Dhoni",
        119: "Virat",
        12: "Yuvraj",
        10: "Sachin",
        45: "Rohit",
    };
    const players1 = {
        name: "Vikrant",
        Company: "Aryavrat infotech",
        Technique: "Node Js",
        Address: "Aurangabad Bihar",
        Pincode: "824101",
    };

    const producedData = await producer.send({
        topic: "Arya",
        messages: [
            {
                value: JSON.stringify(players),
            },
        ],
    });
    const producedData1 = await producer.send({
        topic: "Arya1",
        messages: [
            {
                value: JSON.stringify(players1),
            },
        ],
    });
    console.log(`Produced data ${JSON.stringify(producedData)}`);
    console.log(`Produced1 data ${JSON.stringify(producedData1)}`);
}

produce();
