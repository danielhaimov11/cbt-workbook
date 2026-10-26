/**
 * מרחב תרגול CBT | Google Apps Script Backend
 * 
 * קוד שרת עצמאי עבור Google Sheets.
 * מאפשר סנכרון דו-כיווני של רשומות פרק 3 ופרק 4,
 * והרצה ישירה של המערכת כ-Web App או כתוסף בתוך Google Sheets.
 */

function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'loadAll') {
    return ContentService.createTextOutput(JSON.stringify(getAllRecordsForClient()))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('מרחב תרגול CBT')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    if (payload.action === 'syncAll' && payload.db) {
      syncAllRecordsFromClient(payload.db);
      return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getAllRecordsForClient() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return {
    chapter4: readSheetToObjects(ss.getSheetByName("פרק_4_תחזיות")),
    chapter3: readSheetToObjects(ss.getSheetByName("פרק_3_טריגרים"))
  };
}

function syncAllRecordsFromClient(db) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var headers4 = [
    "חותמת זמן שמירה", "תאריך מהטופס", "המצב / הטריגר", "רגשות ותחושות",
    "התחזית החרדתית", "אמצעי זהירות", "ראיות בעד", "ראיות נגד",
    "התרחיש הכי גרוע", "התרחיש הסביר ביותר", "מחשבה חלופית",
    "פעולה מתוכננת", "ויתור על אמצעי זהירות", "תוצאות בפועל", "קרדיט עצמי"
  ];
  var headers3 = [
    "חותמת זמן שמירה", "תאריך מהטופס", "תיאור המצב", "כלל שהופר", 
    "שורה תחתונה", "ניבויים שליליים", "התנהגות הגנתית", 
    "אישור וביקורת", "דיכאון/מצב רוח", "רפלקציה ותובנות"
  ];
  writeObjectsToSheet(ss, "פרק_4_תחזיות", headers4, db.chapter4 || [], "#d0e0e3");
  writeObjectsToSheet(ss, "פרק_3_טריגרים", headers3, db.chapter3 || [], "#c5cae9");
  return { result: "success" };
}

function readSheetToObjects(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  var data = sheet.getDataRange().getDisplayValues();
  var headers = data[0];
  var results = [];
  for (var i = 1; i < data.length; i++) {
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = data[i][j] || "";
    }
    results.push(obj);
  }
  return results;
}

function writeObjectsToSheet(ss, sheetName, headers, records, headerColor) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.setRightToLeft(true);
  }
  sheet.clearContents();
  sheet.appendRow(headers);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground(headerColor);
  sheet.setFrozenRows(1);
  if (records.length > 0) {
    var rows = records.map(function(rec) {
      return headers.map(function(h) { return rec[h] || ""; });
    });
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
}
