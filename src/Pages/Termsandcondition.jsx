import React from 'react';
import './TermsAndCondition.css'; // Import the CSS file for styling

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title">Terms and Conditions</h1>
        <p>Welcome to Lotus 365, a premier bike rental service provider. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

        <h2>1. General Terms</h2>
        <h3>1.1 Agreement</h3>
        <p>By renting a bike from Lotus 365, you enter into a binding contract with us and agree to adhere to these terms and conditions. If you do not agree, please do not use our services.</p>

        <h3>1.2 Eligibility</h3>
        <p>You must be at least 18 years old and hold a valid driving license to rent a bike from Lotus 365. For certain high-power bikes, age restrictions may vary.</p>

        <h3>1.3 Rental Period</h3>
        <p>The rental period begins at the time of bike pickup and ends at the time of return, as specified in your rental agreement.</p>

        <h2>2. Rental Process</h2>
        <h3>2.1 Booking</h3>
        <p>Bookings can be made through our website, app, or at our physical locations. All bookings are subject to availability and confirmation by Lotus 365.</p>

        <h3>2.2 Payment</h3>
        <p>Full payment is required at the time of booking. We accept various payment methods, including credit/debit cards and digital wallets. Ensure your payment information is accurate and up-to-date.</p>

        <h3>2.3 Security Deposit</h3>
        <p>A security deposit is required for all rentals and will be refunded upon the safe and undamaged return of the bike. The amount of the deposit varies depending on the bike model.</p>

        <h3>2.4 Cancellations and Refunds</h3>
        <ul>
          <li>Cancellations made more than 24 hours before the scheduled rental time will receive a full refund.</li>
          <li>Cancellations made within 24 hours of the rental time will incur a fee equivalent to 50% of the rental amount.</li>
          <li>No-shows or cancellations after the rental start time will not be eligible for a refund.</li>
        </ul>

        <h2>3. Responsibilities of the Renter</h2>
        <h3>3.1 Usage</h3>
        <ul>
          <li>Bicycles should be used in accordance with all applicable laws and regulations.</li>
          <li>The renter is responsible for the bike's safe and proper use. Reckless or unlawful behavior is strictly prohibited.</li>
          <li>The renter must not use the bike for any illegal activities or in a way that causes nuisance or danger to others.</li>
        </ul>

        <h3>3.2 Condition of the Bike</h3>
        <p>The bike should be inspected before use. Report any damages or issues immediately. The renter is responsible for the bike during the rental period and must return it in the same condition as received.</p>

        <h3>3.3 Safety Equipment</h3>
        <p>Helmets and other safety gear must be worn at all times during bike use. The renter must ensure they are familiar with the operation and safety features of the bike.</p>

        <h3>3.4 Damage and Theft</h3>
        <p>The renter is liable for any damage, loss, or theft of the bike during the rental period. In case of an accident, the renter must inform Lotus 365 immediately and cooperate with any subsequent investigation or insurance claim.</p>

        <h2>4. Company Policies</h2>
        <h3>4.1 Maintenance and Repairs</h3>
        <p>Lotus 365 ensures that all bikes are maintained in good working condition. In the event of a breakdown, we will provide assistance or a replacement bike, subject to availability.</p>

        <h3>4.2 Insurance</h3>
        <p>Basic insurance coverage is included with all rentals. Additional insurance options are available for purchase. The renter is responsible for any costs not covered by the insurance.</p>

        <h3>4.3 Privacy Policy</h3>
        <p>We value your privacy and are committed to protecting your personal information. Please review our <a href="#privacy-policy">Privacy Policy</a> for more details.</p>

        <h2>5. Termination and Suspension</h2>
        <h3>5.1 Termination by Lotus 365</h3>
        <p>Lotus 365 reserves the right to terminate the rental agreement without notice if the renter violates any terms and conditions. In such cases, no refunds will be issued, and additional charges may apply.</p>

        <h3>5.2 Suspension of Services</h3>
        <p>Lotus 365 may suspend or discontinue services at any time due to operational or safety reasons. We will notify affected customers and provide refunds or alternative arrangements as appropriate.</p>

        <h2>6. Liability and Indemnity</h2>
        <h3>6.1 Limitation of Liability</h3>
        <p>Lotus 365 is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our bikes or services. Our liability is limited to the rental fee paid, except in cases of gross negligence or intentional misconduct by Lotus 365.</p>

        <h3>6.2 Indemnity</h3>
        <p>The renter agrees to indemnify and hold Lotus 365 harmless from any claims, damages, losses, or expenses arising from their use of the bike, including but not limited to legal fees and costs.</p>

        <h2>7. Governing Law and Dispute Resolution</h2>
        <h3>7.1 Governing Law</h3>
        <p>These terms and conditions are governed by the laws of India. Any disputes will be resolved under the jurisdiction of the courts in Pune.</p>

        <h3>7.2 Dispute Resolution</h3>
        <p>Any disputes arising from the rental agreement will first be addressed through mediation. If unresolved, they will be subject to binding arbitration.</p>

        <h2>8. Amendments</h2>
        <p>Lotus 365 reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website or app. Continued use of our services after changes are posted constitutes acceptance of the revised terms.</p>

        <h2>9. Contact Information</h2>
        <p>For any questions or concerns regarding these terms and conditions, please contact us at:</p>
        <address>
          Lotus 365 Bike Rental Services<br />
          Email: <a href="mailto:support@lotus365.com">support@lotus365.com</a><br />
          Phone: +91-1234567890<br />
          Address: Lotus 365, Pune, India
        </address>
      </div>
    </div>
  );
};

export default TermsAndConditions;
