const emailTemplate = (Otp,userName) => {
  return `
<section>
<div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f2f2f2; border: 1px solid #dddddd;">
    <div class="logo" style="text-align: center;">
      <img src="https://i.ibb.co/BfxW1tb/Tronix-1.png" alt="Logo" style="max-width: 150px;">
    </div>
    <div class="content" style="margin-top: 20px;">
      <h1 style="color: #333333; text-align: center;">Email Verification</h1>
      <p style="color: #333333;">Hello ${userName},</p>
      <p style="color: #333333;">Thank you for signing up. To complete your registration, please click the button below to verify your email:</p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="https://example.com/verify?token=XXXXXXXXXX" style="display: inline-block; background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Verify Email Token is ${Otp}</a>
      </div>
      <p style="color: #333333;">If the button above doesn't work, you can also copy and paste the following URL into your browser:</p>
      <p style="color: #333333; word-break: break-all;">https://example.com/verify?token=XXXXXXXXXX</p>
      <p style="color: #333333;">Please note that this verification link will expire in 2 min.</p>
      <p style="color: #333333;">If you did not sign up for an account, you can safely ignore this email.</p>
      <p style="color: #333333;">Thank you!</p>
    </div>
    <div class="footer" style="margin-top: 20px; text-align: center; color: #888888; font-size: 12px;">
    </div>
  </div>
</section>
  `;
};
module.exports= emailTemplate
