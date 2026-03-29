// google-apps-script.js — Paste this into Google Apps Script Editor
// 1. Go to script.google.com
// 2. Create a new project
// 3. Paste this code
// 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
// 5. Copy the Web App URL and paste it into your .env.local file

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.countryA,
      data.countryB,
      data.winner,
      data.deviceType,
      data.referrer,
      data.powerScoreA,
      data.powerScoreB,
    ]);
    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
