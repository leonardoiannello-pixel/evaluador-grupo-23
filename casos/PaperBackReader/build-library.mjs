import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const outputsDir = path.join(root, "outputs");
const destination = path.join(outputsDir, "library-data.js");

const files = (await readdir(outputsDir))
  .filter((name) => name.toLowerCase().endsWith(".json"))
  .sort((a, b) => a.localeCompare(b, "es"));

const records = [];
const errors = [];

for (const name of files) {
  try {
    const text = await readFile(path.join(outputsDir, name), "utf8");
    const record = JSON.parse(text.replace(/^\uFEFF/, ""));
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      throw new Error("la raíz no es un objeto");
    }
    record._source_file = name;
    records.push(record);
  } catch (error) {
    errors.push(`${name}: ${error.message}`);
  }
}

const banner = "// Archivo generado automáticamente. No editar manualmente.\n";
const payload = `window.PAPERBACK_LIBRARY = ${JSON.stringify(records, null, 2)};\n`;
await writeFile(destination, banner + payload, "utf8");

console.log(`Biblioteca actualizada: ${records.length} registros.`);
if (errors.length) {
  console.warn(`Omitidos: ${errors.join(" | ")}`);
  process.exitCode = 1;
}
