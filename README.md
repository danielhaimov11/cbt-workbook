# מרחב תרגול CBT | Interactive CBT Workbook

מערכת אינטראקטיבית לתרגול ויישום עקרונות טיפול קוגניטיבי-התנהגותי (CBT), המבוססת על מודל הטיפול של ד"ר מלאני פנל (*Melanie Fennell* - מחברת "הערכה עצמית נמוכה: מבוא והשפעות").

המערכת פועלת במודל **היברידי עצמאי (Client-Side & Serverless Cloud)**: היא מאפשרת עבודה מקומית מלאה במחשב ללא שרת, ובמקביל מאפשרת למשתמשים לסנכרן דו-כיוונית מול גיליון **Google Sheets פרטי בענן** – ללא צורך בתחזוקת שרת מרכזי וללא צורך בפרויקטי OAuth מורכבים ב-Google Cloud!

---

## ⚡ הורדה מהירה ושימוש מיידי (למשתמשים ללא רקע טכני)

**אין צורך בתוכנות, בהתקנות או בידע ב-Git!** 
כל המערכת בנויה כקובץ HTML עצמאי שפועל ישירות בכל דפדפן (Chrome, Edge, Safari, Firefox) במחשב או בטלפון הנייד.

### 📥 קישורי הורדה ישירים:

| קובץ / גרסה | תיאור | קישור להורדה ישירה |
| :--- | :--- | :--- |
| **גרסה 3 (מומלצת ביותר ⭐⭐⭐)** | **מערכת היברידית מלאה**: היסטוריה, חיפוש, עריכה + סנכרון דו-כיווני מול **Google Sheets** בענן או הורדת Excel מקומי | [⬇️ **הורד את CBT_WorkbookV3.html**](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_WorkbookV3.html) |
| **גרסה 2 (מקומי מתקדם)** | מערכת עצמאית מקומית הכוללת היסטוריית רשומות, חיפוש, סינון, צפייה ועריכה חוזרת (שמירה ב-Excel בלבד) | [⬇️ **הורד את CBT_WorkbookV2.html**](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_WorkbookV2.html) |
| **גרסה 1 (בסיסית)** | מודול מילוי מהיר לפרק 3 ופרק 4 עם שמירה מקומית ב-`localStorage` והורדת Excel | [⬇️ **הורד את CBT_Workbook.html**](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_Workbook.html) |
| **קוד שרת ענן ([Code.gs](Code.gs))** | קוד Apps Script להדבקה ב-Google Sheets לצורך סנכרון ענן אישי | [📋 **צפה ב-Code.gs**](https://github.com/danielhaimov11/cbt-workbook/raw/main/Code.gs) |
| **כל הפרויקט (ZIP)** | כל הקבצים, הגרסאות וקוד השרת בחבילה אחת | [📦 **הורדת קובץ ZIP מלא**](https://github.com/danielhaimov11/cbt-workbook/archive/refs/heads/main.zip) |

> 💡 **טיפ להורדה:** אם הדפדפן מציג את תוכן הקובץ במקום להורידו:  
> לחצו על הקישור עם **מקש ימני בעכבר** ובחרו באפשרות **"שמור קישור בשם..."** (*Save link as...*).

---

## 🚀 איך זה עובד? מענה מושלם לכל סוגי המשתמשים

המערכת בגרסה 3 מעניקה חופש בחירה מוחלט:

### 1. משתמש שרוצה לעבוד רק מקומית (ללא ענן):
- מוריד את הקובץ [`CBT_WorkbookV3.html`](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_WorkbookV3.html) או [`CBT_WorkbookV2.html`](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_WorkbookV2.html).
- לוחץ לחיצה כפולה (Double-Click) עליו והוא נפתח מיד בדפדפן.
- כל הנתונים נשמרים במחשב שלו, ובכל שמירה יורד קובץ Excel מעודכן (`יומן_תרגול_CBT.xlsx`).

### 2. משתמש שרוצה לחבר את הקובץ המקומי ל-Google Sheets הפרטי שלו (ב-2 דקות):
1. פותחים את [`CBT_WorkbookV3.html`](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_WorkbookV3.html) ולוחצים בתפריט העליון על **"☁️ הגדרות ענן"**.
2. לוחצים על הכפתור השחור **"📋 העתק קוד שרת (Code.gs)"** המובנה בחלון.
3. פותחים גיליון Google Sheets חדש בחשבון הגוגל שלכם:
   * נכנסים ל-**הרחבות (Extensions)** &larr; **Apps Script**.
   * מדביקים את הקוד שהועתק.
   * לוחצים למעלה על **Deploy (פריסה)** &larr; **New deployment (פריסה חדשה)** &larr; בוחרים סוג **Web app**.
   * מגדירים *Execute as: Me*, וב-*Who has access: Anyone*.
4. מעתיקים את ה-**Web app URL** שנוצר ומדביקים אותו בחלון ההגדרות בחוברת.
5. **זהו!** המערכת מחוברת: שמירה, עריכה ומחיקה מסתנכרנות לענן, וכפתור **"🔄 סנכרן מ-Google Sheets"** מושך את כל הנתונים לכל מכשיר.

### 3. משתמש שרוצה לעבוד מתוך Google Sheets ישירות (שיטת "צור עותק"):
- פותחים את הגיליון שבו הוגדר ה-`Code.gs`, מוסיפים בעורך ה-Apps Script קובץ בשם `index.html` ומדביקים בו את תוכן `CBT_WorkbookV3.html`.
- כל מי שמקבל קישור עם `/copy` יכול לשכפל את הגיליון ישירות ל-Drive שלו ולעבוד בו מיידית!

---

## 🗂️ השוואת הגרסאות בפרויקט

| יכולת / תכונה | גרסה 1 (`V1`) | גרסה 2 (`V2`) | גרסה 3 (`V3`) ⭐ |
| :--- | :---: | :---: | :---: |
| דף עבודה פרק 4 (תחזיות חרדתיות וניסויים) | ✅ | ✅ | ✅ |
| דף עבודה פרק 3 (ניתוח טריגרים ומעגל הקסמים) | ✅ | ✅ | ✅ |
| שמירה מקומית ב-`localStorage` | ✅ | ✅ | ✅ |
| ייצוא וייבוא דו-כיווני לקובצי Excel | ✅ | ✅ | ✅ |
| לשונית ארכיון והיסטוריית רשומות | ❌ | ✅ | ✅ |
| חיפוש חופשי בזמן אמת וסינון לפי פרק | ❌ | ✅ | ✅ |
| חלון Modal לצפייה מלאה ברשומה | ❌ | ✅ | ✅ |
| עריכה חוזרת של רשומות קיימות בטפסים (In-Place) | ❌ | ✅ | ✅ |
| מחיקת רשומות בודדות | ❌ | ✅ | ✅ |
| **חיבור וסנכרון ענן מול Google Sheets** | ❌ | ❌ | ✅ |
| **בורר מצבי שמירה (מקומי / ענן / משולב)** | ❌ | ❌ | ✅ |
| **תמיכה ב-Google Apps Script Web App** | ❌ | ❌ | ✅ |

---

## 💻 למפתחים (Developers / Git Clone)

```bash
git clone https://github.com/danielhaimov11/cbt-workbook.git
cd cbt-workbook
```

קבצי הפרויקט המרכזיים:
- `CBT_WorkbookV3.html` - גרסה 3 ההיברידית (מקומי + ענן)
- `CBT_WorkbookV2.html` - גרסה 2 המקומית המלאה
- `CBT_Workbook.html` - גרסה 1 הבסיסית
- `Code.gs` - קוד השרת ל-Google Apps Script
- `CHANGELOG.md` - יומן שחרורים וגרסאות מלא

---

## 🛠️ טכנולוגיות (Tech Stack)

- **Client**: HTML5, Vanilla JavaScript (ES6+), Tailwind CSS (CDN), Google Font Rubik (RTL).
- **Excel Engine**: SheetJS (`xlsx.full.min.js`).
- **Cloud Backend**: Google Apps Script (`SpreadsheetApp`, `ContentService`, `HtmlService`).
- **Local Storage**: Web Storage API (`localStorage`).

---

## 📜 יומן שינויים (Changelog)

לצפייה בפירוט כל העדכונים, השינויים והגרסאות, ראו [CHANGELOG.md](CHANGELOG.md).

---

## 📄 רישיון וקרדיטים

- מבוסס על המתודולוגיה והתכנים מספרי ה-CBT של ד"ר מלאני פנל (*Melanie Fennell*).
- מיועד לשימוש אישי, לימודי ותרגול עצמי.
