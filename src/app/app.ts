import express, { Request, Response } from "express"
const app = express()

// parser
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.send({ message: "Got data" })
})

export default app;