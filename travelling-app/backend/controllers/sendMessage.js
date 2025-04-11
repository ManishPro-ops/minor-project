const twilio = require('twilio');

const accountSid = 'AC7b229818cf07d8d32c8f2505f2340ce4';
const authToken ='b470cb116b0d6a85d9b827741a720662';
const client = twilio(accountSid, authToken);

exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const text = `New Hotel Enquiry:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

  try {
    const result = await client.messages.create({
      body: text,
      from: '+13204221668', // Twilio verified number
      to: '+917984880355' // Your number to receive SMS
    });

    res.status(200).json({ success: true, sid: result.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
