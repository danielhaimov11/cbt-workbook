# מרחב תרגול CBT | Interactive CBT Workbook

מערכת אינטראקטיבית לתרגול ויישום עקרונות טיפול קוגניטיבי-התנהגותי (CBT), המבוססת על מודל הטיפול של ד"ר מלאני פנל (*Melanie Fennell* - מחברת "הערכה עצמית נמוכה: מבוא והשפעות").

המערכת פועלת במודל **היברידי עצמאי (Client-Side & Serverless Cloud)**: היא מאפשרת עבודה מקומית מלאה במחשב ללא שרת, ובמקביל מאפשרת למשתמשים לסנכרן דו-כיוונית מול גיליון **Google Sheets פרטי בענן** – ללא צורך בתחזוקת שרת מרכזי וללא צורך בפרויקטי OAuth מורכבים ב-Google Cloud!

---

## ⚡ איך מורידים ומפעילים? (הסבר פשוט ללא רקע טכני)

> ⚠️ **שימו לב: מדוע לחיצה רגילה מציגה קוד?**  
> אתר GitHub מציג קובצי HTML כטקסט קוד מטעמי אבטחה אם לוחצים עליהם ישירות.  
> **כדי להוריד את הקובץ כמערכת עובדת למחשב שלכם, השתמשו באחת מ-3 הדרכים הפשוטות הבאות:**

---

### 🌟 אפשרות 1 (הכי מומלצת): הורדת קובץ ZIP בלחיצה אחת
לחצו על הקישור הבא להורדת כל המערכת כקובץ מכווץ:
👉 [📦 **לחצו כאן להורדת כל הפרויקט בקובץ ZIP**](https://github.com/danielhaimov11/cbt-workbook/archive/refs/heads/main.zip)

1. הקובץ `cbt-workbook-main.zip` יירד ישירות לתיקיית ההורדות במחשב שלכם.
2. פתחו את ה-ZIP (חלצו אותו).
3. לחצו דאבל-קליק על **`CBT_WorkbookV3.html`** – והמערכת תיפתח ותעבוד מיד!

---

### 🎯 אפשרות 2: הורדה דרך דף הגרסאות הרשמי (Releases)
עברו לדף השחרור הרשמי בגיטהאב:
👉 [🚀 **מעבר לדף הגרסה הרשמי (Release v3.0.0)**](https://github.com/danielhaimov11/cbt-workbook/releases/tag/v3.0.0)

תחת הכותרת **Assets** בתחתית ההודעה, לחצו על:
- [⬇️ **`CBT_WorkbookV3.html`**](https://github.com/danielhaimov11/cbt-workbook/releases/download/v3.0.0/CBT_WorkbookV3.html) (גרסה 3 היברידית)
- [⬇️ **`CBT_WorkbookV2.html`**](https://github.com/danielhaimov11/cbt-workbook/releases/download/v3.0.0/CBT_WorkbookV2.html) (גרסה 2 מקומית)
- [⬇️ **`CBT_Workbook.html`**](https://github.com/danielhaimov11/cbt-workbook/releases/download/v3.0.0/CBT_Workbook.html) (גרסה 1 בסיסית)

---

### 🖱️ אפשרות 3: שמירה באמצעות מקש ימני בעכבר
אם אתם רוצים להוריד קובץ יחיד ישירות מכאן:

| קובץ / גרסה | תיאור | הורדה במקש ימני |
| :--- | :--- | :--- |
| **גרסה 3 (מומלצת ⭐⭐⭐)** | מערכת היברידית מלאה: היסטוריה, עריכה, Excel + סנכרון Google Sheets | [**CBT_WorkbookV3.html**](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_WorkbookV3.html) |
| **גרסה 2 (מקומי מתקדם)** | היסטוריה, חיפוש, עריכה ושמירת Excel מקומית בלבד | [**CBT_WorkbookV2.html**](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_WorkbookV2.html) |
| **גרסה 1 (בסיסית)** | מודול מילוי מהיר לפרק 3 ופרק 4 והורדת Excel | [**CBT_Workbook.html**](https://github.com/danielhaimov11/cbt-workbook/raw/main/CBT_Workbook.html) |
| **קוד שרת ([Code.gs](Code.gs))** | קוד שרת Apps Script לסנכרון ענן אישי | [**Code.gs**](https://github.com/danielhaimov11/cbt-workbook/raw/main/Code.gs) |

> 📌 **הוראות:** לחצו על שם הקובץ עם **מקש ימני בעכבר** &larr; בחרו **"שמור קישור בשם..."** (*Save link as...*) &larr; שמרו בשולחן העבודה ופתחו אותו בלחיצה כפולה.

---

## 🚀 איך המערכת עובדת? (מענה לכל סוגי המשתמשים)

המערכת בגרסה 3 מעניקה חופש בחירה מוחלט:

### 1. משתמש שרוצה לעבוד רק מקומית (ללא ענן):
- פותח את הקובץ שהוריד (`CBT_WorkbookV3.html`) בדפדפן הרגיל (Chrome / Edge / Safari).
- כל הנתונים נשמרים במחשב שלו, ובכל שמירה יורד קובץ Excel מעודכן (`יומן_תרגול_CBT.xlsx`).

### 2. משתמש שרוצה לחבר את הקובץ המקומי ל-Google Sheets הפרטי שלו (ב-2 דקות):
1. פותחים את [`CBT_WorkbookV3.html`](CBT_WorkbookV3.html) ולוחצים בתפריט העליון על **"☁️ הגדרות ענן"**.
2. לוחצים על הכפתור השחור **"📋 העתק קוד שרת (Code.gs)"** המובנה בחלון.
3. פותחים גיליון Google Sheets חדש בחשבון הגוגל האישי:
   * נכנסים ל-**הרחבות (Extensions)** &larr; **Apps Script**.
   * מדביקים את הקוד שהועתק.
   * לוחצים למעלה על **Deploy (פריסה)** &larr; **New deployment (פריסה חדשה)** &larr; בוחרים סוג **Web app**.
   * מגדירים *Execute as: Me*, וב-*Who has access: Anyone*.
4. מעתיקים את ה-**Web app URL** שנוצר ומדביקים אותו בחלון ההגדרות בחוברת.
5. **זהו!** המערכת מחוברת: שמירה, עריכה ומחיקה מסתנכרנות לענן, וכפתור **"🔄 סנכרן מ-Google Sheets"** מושך את כל הנתונים לכל מכשיר.

### 3. הרצה ישירה באינטרנט ללא צורך בהורדת קובץ (דרך Google Apps Script):
- פותחים את הגיליון שבו הוגדר ה-`Code.gs`, מוסיפים בעורך ה-Apps Script קובץ HTML בשם `index.html` ומדביקים בו את תוכן `CBT_WorkbookV3.html`.
- מקבלים קישור אינטרנטי של ה-Web App (`https://script.google.com/macros/s/.../exec`).
- לחיצה על קישור זה פותחת את המערכת מיד כאתר פעיל ומחובר ברשת – בלי להוריד שום קובץ!

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
