
const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public', 'index.html'))
})
app.get(`/:slug`, (req, res) => {
  res.sendFile(path.join(__dirname,'public',`${req.params.slug}.html`))
})

app.listen(port, () => {
  console.log(`This app is listening on PORT: ${port}`);

})