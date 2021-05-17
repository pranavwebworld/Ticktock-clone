import express from 'express';
import mongoose from 'mongoose';
import Data from './Data.js'
import tiktockSchema from './dbCollection.js'
import bodyParser from 'body-parser';

//config
const app = express()
const PORT = process.env.PORT || 9000;

// dem
app.set('view engine', 'ejs')

// midlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})

// db config
const mongodb_url = 'mongodb+srv://admin:TenUbSSyTTwiEKyO@cluster0.qfgcd.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => console.log("DB connected"))

// post and requests
app.get('/', (req, res) => {
    res.status(200).render('demo')
})

app.get('/v1/posts', (req, res) => {
    res.status(200).send(Data);

})
app.get('/v2/posts', (req, res) => {
    tiktockSchema.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    })
})
app.post('/v2/posts', (req, res) => {
    let dbVideos = req.body;
    tiktockSchema.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    })
})

app.listen(PORT, () => console.log(`Service is running in ${PORT}`))