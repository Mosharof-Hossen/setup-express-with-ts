import express, { NextFunction, Request, Response } from "express"
const app = express()

// parser
app.use(express.json())


const userRouter = express.Router();
const courseRouter = express.Router();


app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);


userRouter.get('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        user: user
    })
})

courseRouter.post("/create-course", (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        course: course
    })
})



const logger = (req: Request, res: Response, next: NextFunction) => {

}

app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello Vai')
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.send({ message: "Got data" })
})

export default app;