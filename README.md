# Ticktok Clone

## [Preview Website](< https://ticktok-clone-2021.web.app/ >)

#### Frontend: https://ticktok-clone-2021.web.app/
#### Backend: https://tiktock-api.herokuapp.com/v2/posts

## Mongodb Connecting url using Mongoose
```javascript
  const mongodb_url = '<mongodb url>'
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => console.log("DB connected"))
```

Mongoose adding document to Database
------------------------------------
```javascript
tiktockSchema.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    })
  ```
  
  Mongoose find doucmnet from Database
------------------------------------
```javascript
tiktockSchema.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    })
```
