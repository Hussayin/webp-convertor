const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Statik fayllarni server qilish
app.use(express.static("public"));
app.use("/webp", express.static("webp"));

// Rasmlar ro‘yxatini olish
app.get("/images", (req, res) => {
  const imageFolder = path.join(__dirname, "webp");

  fs.readdir(imageFolder, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Xatolik yuz berdi" });
    }
    res.json(files);
  });
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
