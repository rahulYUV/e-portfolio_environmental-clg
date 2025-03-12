import express from "express"
import 'dotenv/config'
import { createClient } from "@supabase/supabase-js"

const app = express();
const PORT = 3000;
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.json("working successfully");
});

app.get("/club1", (req, res) => {
    res.render("club1.ejs");
});

app.get("/club2", (req, res) => {
  res.render("club2.ejs");
});

app.get("/club3", (req, res) => {
  res.render("club3.ejs");
});

app.get("/events", (req, res) => {
    res.render("events.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
});

app.get("/admin", async (req, res) => {

    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
        email, password
    });

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: "Login successful", data });
});

app.listen(PORT, () => {
    console.log(`Server running on port: :${PORT}`);
});