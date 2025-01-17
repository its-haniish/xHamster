const express=require("express");
const path=require("path");
const app=express();
const PORT=process.env.PORT||8080;
app.use(express.static(path.join(__dirname, 'public/')));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        console.error("Error fetching videos:", error);
        res.status(500).send("An error occurred while fetching videos...");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`The server is live at: http://localhost:${PORT}`);
});