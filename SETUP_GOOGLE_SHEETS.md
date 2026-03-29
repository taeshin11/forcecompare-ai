# Google Sheets Tracking Setup

## Steps

1. Create a new Google Spreadsheet
2. Go to **Extensions > Apps Script**
3. Delete any existing code and paste the contents of `google-apps-script.js`
4. Click **Deploy > New Deployment**
5. Select type: **Web app**
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** and authorize when prompted
8. Copy the **Web App URL**
9. Paste it into `.env.local`:
   ```
   NEXT_PUBLIC_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
   ```
10. If deploying to Vercel, also set this env variable there:
    ```bash
    vercel env add NEXT_PUBLIC_SHEETS_WEBHOOK_URL
    ```

## Data Columns

The spreadsheet will automatically receive these columns:
| Timestamp | Country A | Country B | Winner | Device Type | Referrer | Score A | Score B |
