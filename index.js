import express from "express"
import axios from "axios"
import dotenv from 'dotenv'

const app = express()
const port = 3000;
dotenv.config()
const API_KEY = process.env.MAGAZINE_API_KEY;
const URL = "https://crypto-news16.p.rapidapi.com/news/bitcoinmagazine";

app.use(express.static("public"));

app.get('/', async (req, res)=>{
    try {
        const magazine = await axios.get(URL, {
			headers: {
				'x-rapidapi-key': API_KEY,
				'x-rapidapi-host': "crypto-news16.p.rapidapi.com",
			}
		});
        console.log(magazine.data)
        res.render('index.ejs', {data: magazine.data});
    } catch (error) {
        console.log(`something went wrong: ${error}`)
    }
});

// for developing
// app.get('/', (req, res)=>{
//     res.render('index.ejs')
// })

app.listen(port, ()=>{
    console.log(`listning on port ${port} ...`)
})