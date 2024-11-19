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

app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(something)
    } catch (error) {
        console.log(error);
        next(error)
    }
})

app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.send({ message: "Got data" })
})

app.all("*", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Route is not found"
    })
})

// Global Error Handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something Went Wrong"
        })
    }
})


export default app;