const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputFolder = path.join(
  __dirname,
  // "deepal"
  // "jetour"
  // "lipmotors"
  // "nevo"
  "watches"
); // Asl rasmlar
const outputFolder = path.join(__dirname, "webp"); // WebP rasmlar

// Agar `webp` papkasi mavjud bo'lmasa, yaratamiz
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Barcha rasmlarni olish
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error("Papka o‘qishda xatolik:", err);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, `${path.parse(file).name}.webp`);

    // Rasmni WebP formatiga o‘tkazish
    sharp(inputPath)
      .toFormat("webp")
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error(`Xatolik: ${file} ni WebP ga o‘tkazib bo‘lmadi`, err);
        } else {
          console.log(`✅ ${file} --> WebP`);
        }
      });
  });
});
