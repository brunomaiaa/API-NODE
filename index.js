import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

const users = []:

app.get('/users', (request, response) => {
  return response.json(users);
});

app.post('/users', (request, response) => {
  const { name, age, nickName } = request.body;

  users.push({ name, age, nickName });


  return response.json({ name, age, nickName });
});

mongoose
.connect(
    'mongodb+srv://bmaia:<Cristineide1046>@cluster0.k6s0hwz.mongodb.net/?retryWrites=true&w=majority'
    )
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(3000);