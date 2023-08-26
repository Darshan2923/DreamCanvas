import express from 'express';

const app = express();
app.get("/", (req, res) => {
    res.send("DALL_E");
})

app.listen(5100, () => console.log("Server running"));