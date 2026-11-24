import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride: six months of practice, one steady last note,
// and a mother who can finally stop pretending not to listen.
const entry =
  "Twelve-year-old Dita practiced the same song on her cracked violin for six months; tonight the last note held steady, and her mother in the doorway finally stopped pretending not to listen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
