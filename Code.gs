/**
 * מרחב תרגול CBT | Google Apps Script Backend (גרסה 3.0 מאוחדת)
 * 
 * קוד שרת עצמאי עבור Google Sheets.
 * תומך בהפעלה ישירה מתוך הגיליון (לחיצת כפתור אחת!),
 * יצירה אוטומטית של גליונות פרק 3 ופרק 4 מעוצבים,
 * הרצה כ-Web App באינטרנט, וסנכרון דו-כיווני מול קובץ HTML מקומי.
 */

var HEADERS_CH4 = [
  "חותמת זמן שמירה", "תאריך מהטופס", "המצב / הטריגר", "רגשות ותחושות",
  "התחזית החרדתית", "אמצעי זהירות", "ראיות בעד", "ראיות נגד",
  "התרחיש הכי גרוע", "התרחיש הסביר ביותר", "מחשבה חלופית",
  "פעולה מתוכננת", "ויתור על אמצעי זהירות", "תוצאות בפועל", "קרדיט עצמי"
];

var HEADERS_CH3 = [
  "חותמת זמן שמירה", "תאריך מהטופס", "תיאור המצב", "כלל שהופר",
  "שורה תחתונה", "ניבויים שליליים", "התנהגות הגנתית",
  "אישור וביקורת", "דיכאון/מצב רוח", "רפלקציה ותובנות"
];

/**
 * מופעל אוטומטית בכל פתיחה של גיליון ה-Google Sheets:
 * 1. מוודא שהגליונות פרק 3 ופרק 4 קיימים, מוגדרים מימין לשמאל ומעוצבים.
 * 2. יוצר תפריט ייעודי בראש הגיליון להפעלת האפליקציה בלחיצת כפתור.
 */
function onOpen() {
  initSheetsIfMissing();
  SpreadsheetApp.getUi()
    .createMenu('🧠 מרחב תרגול CBT')
    .addItem('🚀 פתח חוברת תרגול (חלון מלא)', 'openCbtDialog')
    .addItem('📱 פתח בסרגל צד (Sidebar)', 'openCbtSidebar')
    .addSeparator()
    .addItem('🛠️ הקם / רענן טבלאות פרק 3 ופרק 4', 'initSheetsIfMissing')
    .addItem('🔗 קישור להרצה ישירה מהטלפון / מחשב', 'showWebAppUrlDialog')
    .addToUi();
}

/**
 * פתיחת חוברת התרגול בחלון מודאלי עשיר ישירות בתוך Google Sheets
 */
function openCbtDialog() {
  initSheetsIfMissing();
  var html = HtmlService.createHtmlOutputFromFile('index')
    .setWidth(1150)
    .setHeight(820)
    .setTitle('מרחב תרגול CBT | מערכת מאוחדת');
  SpreadsheetApp.getUi().showModalDialog(html, 'מרחב תרגול CBT');
}

/**
 * פתיחת חוברת התרגול בסרגל צד (Sidebar) לצד הטבלה
 */
function openCbtSidebar() {
  initSheetsIfMissing();
  var html = HtmlService.createHtmlOutputFromFile('index')
    .setTitle('מרחב תרגול CBT');
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * הצגת קישור ה-Web App של המשתמש בלחיצת כפתור
 */
function showWebAppUrlDialog() {
  var url = ScriptApp.getService().getUrl();
  var ui = SpreadsheetApp.getUi();
  if (url) {
    var html = HtmlService.createHtmlOutput(
      '<div style="direction:rtl; font-family:sans-serif; padding:15px; text-align:right;">' +
      '<h3 style="color:#1d4ed8; margin-top:0;">🔗 קישור האפליקציה האישי שלך:</h3>' +
      '<p style="font-size:13px; color:#374151;">לחיצה על קישור זה מכל מחשב או טלפון תפתח ישירות את המערכת מסונכרנת לגיליון זה:</p>' +
      '<input type="text" value="' + url + '" style="width:100%; padding:10px; font-size:12px; border:1px solid #cbd5e1; border-radius:6px; box-sizing:border-box;" readonly onclick="this.select();">' +
      '<p style="font-size:12px; color:#6b7280; margin-top:12px;">💡 שמור קישור זה במועדפים בטלפון או במחשב לעבודה נוחה בכל עת.</p>' +
      '</div>'
    ).setWidth(520).setHeight(220);
    ui.showModalDialog(html, 'קישור ה-Web App האישי שלך');
  } else {
    ui.alert(
      'פריסה חד-פעמית לקבלת קישור לטלפון',
      'המערכת כבר פועלת במלואה מתוך תפריט הגיליון! אם תרצה גם קישור ישיר לטלפון, לחץ בעורך ה-Apps Script על "Deploy" (פריסה) -> "New deployment" -> בחר "Web app".',
      ui.ButtonSet.OK
    );
  }
}

/**
 * יצירת הגליונות והכותרות אוטומטית אם אינם קיימים
 */
function initSheetsIfMissing() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss.getSheetByName("פרק_4_תחזיות")) {
    writeObjectsToSheet(ss, "פרק_4_תחזיות", HEADERS_CH4, [], "#dbeafe");
  }
  if (!ss.getSheetByName("פרק_3_טריגרים")) {
    writeObjectsToSheet(ss, "פרק_3_טריגרים", HEADERS_CH3, [], "#e0e7ff");
  }
}

/**
 * טיפול בבקשות GET חיצוניות (טעינת כל הנתונים או הצגת ממשק Web App)
 */
function doGet(e) {
  initSheetsIfMissing();
  if (e && e.parameter && e.parameter.action === 'loadAll') {
    return ContentService.createTextOutput(JSON.stringify(getAllRecordsForClient()))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('מרחב תרגול CBT')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * טיפול בבקשות POST חיצוניות (סנכרון נתונים מהדפדפן)
 */
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
  writeObjectsToSheet(ss, "פרק_4_תחזיות", HEADERS_CH4, db.chapter4 || [], "#dbeafe");
  writeObjectsToSheet(ss, "פרק_3_טריגרים", HEADERS_CH3, db.chapter3 || [], "#e0e7ff");
  return { result: "success" };
}

function readSheetToObjects(sheet) {
  if (!sheet || sheet.getLastRow() < 2) return [];
  var data = sheet.getDataRange().getDisplayValues();
  var headers = data[0];
  var results = [];
  for (var i = 1; i < data.length; i++) {
    var obj = {};
    var hasContent = false;
    for (var j = 0; j < headers.length; j++) {
      var val = data[i][j] || "";
      if (val.trim() !== "") hasContent = true;
      obj[headers[j]] = val;
    }
    if (hasContent) results.push(obj);
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
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold").setBackground(headerColor).setHorizontalAlignment("right");
  sheet.setFrozenRows(1);
  for (var c = 1; c <= headers.length; c++) {
    sheet.setColumnWidth(c, 180);
  }
  if (records.length > 0) {
    var rows = records.map(function(rec) {
      return headers.map(function(h) { return rec[h] || ""; });
    });
    var dataRange = sheet.getRange(2, 1, rows.length, headers.length);
    dataRange.setValues(rows).setWrap(true).setVerticalAlignment("top");
  }
}
