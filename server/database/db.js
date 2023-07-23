import mongoose  from 'mongoose';

const Connection = async () => {
    const URL = `mongodb://ayashika2624:Loveugod@ac-kkpnu51-shard-00-00.8gb4qxn.mongodb.net:27017,MyDocs-shard-00-01.8gb4qxn.mongodb.net:27017,ac-kkpnu51-shard-00-02.8gb4qxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-sxplpr-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;
