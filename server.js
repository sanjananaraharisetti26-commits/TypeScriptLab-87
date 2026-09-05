const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("home", {
        heading: "Event Registration",
        message: null,
        participant: null
    });
});
app.post("/register", (req, res) => {
    const { name, age } = req.body;
    let message = null;
    if (!name || name.length < 4) {
        message = "Name must contain at least 4 characters.";
    } else if (!age || isNaN(age) || age < 16) {
        message = "Participant must be at least 16 years old.";
    }
    if (message) {
        res.render("home", {
            heading: "Registration Failed",
            message: message,
            participant: null
        });
    } else {
        res.render("home", {
            heading: "Registration Successful",
            message: null,
            participant: name
        });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});