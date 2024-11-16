const emailjs = require('emailjs-com');

const sendEmailController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the inputs
    if (!name || !email || !message) {
      return res.status(400).send({
        success: false,
        message: 'All fields are required.',
      });
    }

    // EmailJS configuration
    const serviceID = 'service_y2pzykb';
    const templateID = 'template_j6257xw';
    const userID = 'digvijaysinh8622@gmail.com';

    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    // Send email
    emailjs.send(serviceID, templateID, templateParams, userID).then(
      () => {
        return res.status(200).send({
          success: true,
          message: 'Email sent successfully!',
        });
      },
      (error) => {
        console.error('EmailJS Error:', error);
        return res.status(500).send({
          success: false,
          message: 'Failed to send email.',
        });
      }
    );
  } catch (error) {
    console.error('Error in sendEmailController:', error);
    return res.status(500).send({
      success: false,
      message: 'Send Email API Error',
    });
  }
};

module.exports = { sendEmailController };
