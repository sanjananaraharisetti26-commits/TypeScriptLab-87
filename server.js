const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "library-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
function checkMember(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/signin");
    }
}
app.get("/signin", (req, res) => {
    res.render("signin", { error: null });
});
app.post("/signin", (req, res) => {
    const { member, pin } = req.body;
    if (member === "reader" && pin === "456") {
        req.session.loggedIn = true;
        req.session.memberName = member;
        res.cookie("lastVisit", new Date().toLocaleTimeString());
        res.redirect("/library");
    } else {
        res.render("signin", {
            error: "Incorrect member name or PIN."
        });
    }
});
app.get("/library", checkMember, (req, res) => {
    const visitTime = req.cookies.lastVisit || "First visit";
    res.render("library", {
        member: req.session.memberName,
        visitTime: visitTime
    });
});
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.redirect("/signin");
    });
});
app.listen(port, () => {
    console.log(`Library server running at http://localhost:${port}`);
});