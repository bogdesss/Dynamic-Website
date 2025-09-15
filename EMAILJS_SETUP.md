# EmailJS Setup Guide

To enable real email functionality for the cart, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Gmail Setup Troubleshooting

If you see the error "412 Gmail_API: Request had insufficient authentication scopes":

1. **Disconnect the current Gmail connection** (click "Disconnect" button)
2. **Go to your Google Account settings**: [https://myaccount.google.com/permissions](https://myaccount.google.com/permissions)
3. **Find EmailJS in the list** and click "Remove access"
4. **Go back to EmailJS** and try connecting Gmail again
5. **When prompted for permissions**, make sure to check "Allow 'Send email on your behalf' permission"
6. **Complete the OAuth flow** and grant all requested permissions

**Alternative Solution:**
- If the above doesn't work, try using a different email provider like Outlook or Yahoo
- Or create a new Gmail account specifically for this service

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: Comandă de produse - {{from_name}}

Salut,

Ai primit o comandă nouă de la {{from_name}}.

Detalii client:
- Nume: {{from_name}}
- Email: {{from_email}}
- Telefon: {{phone}}
- Mesaj: {{message}}

Produse comandate:
{{cart_items}}

Total: {{total_price}} RON
Data comenzii: {{order_date}}

Cu respect,
{{company_name}}
```

4. Note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

## 5. Update Configuration

Open `src/services/emailService.js` and replace these values:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID  
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

## 6. Update Email Address

In the same file, update the recipient email:

```javascript
to_email: 'contact@vale-olpretului.ro', // Replace with your business email
```

## 7. Test the Functionality

1. Add some products to the cart
2. Click "Finalizează comanda" (Finalize order)
3. Fill in the customer information form
4. Submit the form
5. Check your email for the order

## Fallback Functionality

If EmailJS is not configured, the system will automatically fall back to opening the user's default email client with a pre-filled email containing the order details.

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic templates
- Standard support

For higher volumes, consider upgrading to a paid plan.
