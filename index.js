import express from 'express'
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import multer from 'multer'

const app = express()
dotenv.config()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())
app.set("trust proxy", 1)
app.use(bodyParser.json({ limit: "30mb" }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../client/public/upload')
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname)
//     }
// })
// const upload = multer({ storage })
// app.post('/api/upload', upload.single('file'), function (req, res) {
//     const file = req.file;
//     res.status(200).json(file?.filename)
// })

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/users", usersRoutes)

app.listen(8800, () => {
    console.log('Connected!');
})