import express from 'express'

function main () {
  try {
    const app = express();

    app.use(express.json())

    app.listen(8082, () => {
      console.log("Server is running on port 8082")
    })

    app.get("/" , (req, res) => {
      res.send("Hello world")
    } )
  } catch (error) {
    console.log(error)
  }
}



//sdlfjsjdf