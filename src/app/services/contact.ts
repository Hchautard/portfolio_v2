import email from '@emailjs/browser';

interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendEmail = async (data: ContactData) => {
    try {
        const response = await email.send(
            'YOUR_SERVICE_ID',      // Service ID depuis EmailJS
            'YOUR_TEMPLATE_ID',     // Template ID depuis EmailJS
            {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message,
            },
            'YOUR_PUBLIC_KEY'       // Public Key depuis EmailJS
        );

        return {success: true, data: response};
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        return {success: false, error};
    }
};