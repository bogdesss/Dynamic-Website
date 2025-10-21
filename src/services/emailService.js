import emailjs from '@emailjs/browser';

// EmailJS configuration
// Replace these with your actual EmailJS credentials from your dashboard
const EMAILJS_SERVICE_ID = 'service_kp40pre'; // ❌ Replace with your actual Service ID from dashboard
const EMAILJS_TEMPLATE_ID = 'template_a0zux3d'; // ❌ Replace with your actual template ID
const EMAILJS_PUBLIC_KEY = 'm8973auZa4kji1ag5'; // ✅ This looks correct

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendCartEmail = async (cartData, customerInfo) => {
  try {
    // Check if EmailJS is properly configured
    if (EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
      console.warn('EmailJS not configured - using fallback');
      return sendCartEmailFallback(cartData, customerInfo);
    }

    console.log('Attempting to send email via EmailJS...');
    console.log('Service ID:', EMAILJS_SERVICE_ID);
    console.log('Template ID:', EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', EMAILJS_PUBLIC_KEY);

    // Prepare email template parameters
    const templateParams = {
      to_email: 'domide1995@gmail.com', // Your business email
      from_name: customerInfo.name,
      from_email: customerInfo.email,
      phone: customerInfo.phone,
      message: customerInfo.message || 'Comandă de produse naturale',
      
      // Cart details
      total_items: cartData.totalItems,
      total_price: cartData.totalPrice.toFixed(2),
      cart_items: cartData.items.map(item => 
        `${item.title} - ${item.quantity} buc × ${item.price.toFixed(2)} RON = ${(item.price * item.quantity).toFixed(2)} RON`
      ).join('\n'),
      
      // Company info
      company_name: 'Naturivis',
      order_date: new Date().toLocaleDateString('ro-RO'),
    };

    console.log('Sending email with params:', templateParams);

    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return {
      success: true,
      message: 'Comanda a fost trimisă cu succes! Vă vom contacta în curând.',
      response
    };
  } catch (error) {
    console.error('EmailJS Error Details:', error);
    console.error('Error status:', error.status);
    console.error('Error text:', error.text);
    
    // If EmailJS fails, use fallback
    console.warn('EmailJS failed, using fallback method');
    return sendCartEmailFallback(cartData, customerInfo);
  }
};

// Fallback function for when EmailJS is not configured
export const sendCartEmailFallback = (cartData, customerInfo) => {
  // Create a mailto link with the cart details
  const subject = `Comandă de produse - ${customerInfo.name}`;
  
  const cartDetails = cartData.items.map(item => 
    `${item.title} - ${item.quantity} buc × ${item.price.toFixed(2)} RON = ${(item.price * item.quantity).toFixed(2)} RON`
  ).join('\n');
  
  const body = `
Nume: ${customerInfo.name}
Email: ${customerInfo.email}
Telefon: ${customerInfo.phone}
Mesaj: ${customerInfo.message || 'Comandă de produse naturale'}

PRODUSE COMANDATE:
${cartDetails}

TOTAL: ${cartData.totalPrice.toFixed(2)} RON
Data comenzii: ${new Date().toLocaleDateString('ro-RO')}
  `.trim();

  const mailtoLink = `mailto:domide1995@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open default email client
  window.open(mailtoLink);
  
  return {
    success: true,
    message: 'Clientul de email a fost deschis. Vă rugăm să trimiteți emailul pentru a finaliza comanda.',
    fallback: true
  };
};
