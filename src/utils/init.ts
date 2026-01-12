import dotenv from "dotenv";
import fs from "fs-extra";
import moment from "moment";
dotenv.config({ path: "app.env" });

const reportDirectory: string = "test-results";
const reportOverWrite: boolean =
  process.env.REPORT_OVERWRITE != null
    ? process.env.REPORT_OVERWRITE.toLowerCase() === "true"
    : true;
try {
  if (reportOverWrite) {
    if (fs.existsSync(reportDirectory)) fs.emptyDirSync(reportDirectory);
  } else {
    if (fs.existsSync(reportDirectory))
      fs.renameSync(
        reportDirectory,
        `${reportDirectory}-${moment().format("yyyyMMDDmmss")}`,
      );
  }
  fs.ensureDirSync(reportDirectory);
} catch (error) {
  console.log("Folder not created! " + error);
}
