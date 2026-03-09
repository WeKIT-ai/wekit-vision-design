import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    toast.success('You have accepted the Terms & Conditions and Child Safety Policy.');
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-montserrat prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms and Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">
            <strong>WeKIT.ai / WeKIT Mentoring Platform</strong><br />
            Last Updated: 9 March 2026
          </p>

          <h2>1. Introduction</h2>
          <p>Welcome to WeKIT.ai ("WeKIT", "we", "our", or "us").</p>
          <p>These Terms and Conditions govern your access to and use of the WeKIT platform, including our website, programs, mentorship services, AI tools, and community features.</p>
          <p>By accessing or using the platform, you agree to comply with these Terms and Conditions.</p>
          <p>If you do not agree with these Terms, you should discontinue use of the platform.</p>

          <h2>2. Platform Operator</h2>
          <p>The WeKIT platform is owned and operated by:</p>
          <p>
            <strong>WeKIT International Pvt Ltd</strong><br />
            CIN: U85499KA2024PTC195031<br />
            Date of Incorporation: 19 November 2024<br />
            Registered Office: Bangalore, Karnataka, India
          </p>
          <p>Throughout these Terms: "WeKIT", "we", "our", or "us" refers to WeKIT International Pvt Ltd.</p>
          <p>Certain social impact programs, scholarships, or community initiatives may be conducted in collaboration with partner organizations including Napoleon Roberts Education & Charitable Trust (NRECT).</p>
          <p>Future services for users located in the United States may be operated by WeKIT Inc. once incorporated.</p>

          <h2>3. About WeKIT</h2>
          <p>WeKIT is a career discovery, mentorship, and learning ecosystem designed to help individuals explore purpose-driven careers. The platform may provide services including:</p>
          <ul>
            <li>Career discovery tools and assessments</li>
            <li>Mentorship matching</li>
            <li>Educational programs and courses</li>
            <li>College discovery insights</li>
            <li>AI-powered career guidance tools including YOMA (Your Online Mentor Assistant)</li>
            <li>Experiential learning opportunities</li>
            <li>Institutional partnerships with schools and organizations</li>
          </ul>
          <p>WeKIT does not guarantee admission to institutions, employment opportunities, scholarships, or career outcomes.</p>

          <h2>4. Eligibility</h2>
          <p>Users must be 18 years or older, OR use the platform under parental, guardian, or institutional supervision.</p>
          <p>For users under 18 years of age: parental or institutional consent may be required and certain platform features may be restricted. WeKIT may implement additional safeguards for minors.</p>

          <h2>5. User Accounts</h2>
          <p>Some services require the creation of a user account. By creating an account, you agree to:</p>
          <ul>
            <li>Provide accurate and truthful information</li>
            <li>Maintain confidentiality of your login credentials</li>
            <li>Notify us of any unauthorized use of your account</li>
          </ul>
          <p>WeKIT reserves the right to suspend or terminate accounts that violate these Terms.</p>

          <h2>6. Acceptable Use</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Use the platform for unlawful purposes</li>
            <li>Harass or abuse other users</li>
            <li>Post misleading, harmful, or defamatory content</li>
            <li>Impersonate other individuals</li>
            <li>Attempt to interfere with the platform's security or functionality</li>
          </ul>
          <p>WeKIT reserves the right to remove content or restrict access to users who violate these rules.</p>

          <h2>7. Mentorship Services</h2>
          <p>WeKIT facilitates connections between students, mentors, alumni, professionals, and educators.</p>
          <p>Mentors provide insights based on personal experiences. Mentorship conversations do not constitute legal, financial, medical, or professional advice. Users remain responsible for decisions made based on mentorship interactions.</p>

          <h2>8. Community Contributions</h2>
          <p>The platform may allow users to contribute content including college reviews, program feedback, comments or discussions. Such content represents the opinions of individual users and does not necessarily reflect the views of WeKIT or its partners.</p>
          <p>WeKIT reserves the right to moderate or remove inappropriate content.</p>

          <h2>9. Programs and Partnerships</h2>
          <p>Programs may be delivered through WeKIT directly, partner organizations, educational institutions, or experiential learning partners. Participation in partner programs may require agreement to additional terms.</p>

          <h2>10. Payments</h2>
          <p>Some services or programs may require payment. Where applicable, pricing will be clearly communicated and payments may be processed through third-party payment providers. Refund policies may vary depending on the program.</p>

          <h2>11. Intellectual Property</h2>
          <p>All platform content including course materials, platform technology, frameworks, branding, graphics and design, and AI tools including YOMA are the intellectual property of WeKIT International Pvt Ltd, unless otherwise stated.</p>
          <p>Users may not reproduce, distribute, or commercially use content without permission.</p>

          <h2>12. AI Tools and Automation</h2>
          <p>WeKIT may offer AI-powered tools including YOMA – Your Online Mentor Assistant. AI responses are intended to support learning and career exploration. Users should exercise independent judgment when relying on AI-generated insights.</p>

          <h2>13. Third-Party Services</h2>
          <p>WeKIT may integrate services provided by third parties including mentorship systems, payment gateways, educational platforms, and experiential learning partners. WeKIT is not responsible for the policies or practices of third-party services.</p>

          <h2>14. Limitation of Liability</h2>
          <p>To the extent permitted by law, WeKIT shall not be liable for indirect or consequential damages, decisions made based on mentorship or platform content, or service interruptions or technical failures.</p>

          <h2>15. Suspension or Termination</h2>
          <p>WeKIT reserves the right to suspend or terminate user access if users violate these Terms, misuse the platform, or engage in harmful conduct.</p>

          <h2>16. Governing Law</h2>
          <p>These Terms are governed by the laws of India. Any disputes shall fall under the jurisdiction of the courts located in Bangalore, Karnataka, India.</p>

          <h2 id="privacy" className="mt-12 pt-8 border-t border-border">Privacy and Data Protection</h2>
          <p className="italic text-sm">(DPDP Act 2023 Compliance)</p>
          <p>WeKIT processes personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act).</p>

          <h2>17. Personal Data We Collect</h2>
          <p>We may collect personal data including:</p>
          <ul>
            <li><strong>Identification information:</strong> name, email address, phone number</li>
            <li><strong>Educational and career information:</strong> interests, career preferences, mentorship goals</li>
            <li><strong>Usage data:</strong> platform activity, program participation, analytics</li>
          </ul>

          <h2>18. Purpose of Processing</h2>
          <p>Personal data may be used to provide mentorship and career guidance, recommend programs, improve platform services, and communicate with users.</p>

          <h2>19. Consent</h2>
          <p>By using the platform, users provide consent for the collection and processing of personal data for these purposes. Users may withdraw consent by contacting WeKIT.</p>

          <h2>20. Data Principal Rights</h2>
          <p>Under the DPDP Act, users have the right to:</p>
          <ul>
            <li>Access personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of personal data</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>21. Children's Data</h2>
          <p>Where the platform processes data of minors, parental or institutional consent will be required and additional safeguards may apply.</p>

          <h2>22. Data Retention</h2>
          <p>Personal data will be retained only for as long as necessary to provide services or comply with legal obligations.</p>

          <h2>23. Updates to Terms</h2>
          <p>WeKIT may update these Terms periodically. Continued use of the platform after updates constitutes acceptance of the revised Terms.</p>

          <h2>24. Contact Information</h2>
          <p>
            <strong>WeKIT International Pvt Ltd</strong><br />
            CIN: U85499KA2024PTC195031<br />
            Bangalore, Karnataka, India
          </p>
          <p>
            Website: <a href="https://www.wekitmentoring.com" className="text-primary hover:underline">https://www.wekitmentoring.com</a><br />
            Email: <a href="mailto:hi@wekitmentoring.com" className="text-primary hover:underline">hi@wekitmentoring.com</a>
          </p>

          {/* Child Safety & Safeguarding Policy */}
          <h1 className="text-4xl font-bold text-foreground mb-2 mt-16 pt-12 border-t-2 border-border">Child Safety &amp; Safeguarding Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">
            <strong>WeKIT.ai / WeKIT Mentoring Platform</strong><br />
            Last Updated: 9 March 2026
          </p>

          <h2>1. Purpose</h2>
          <p>WeKIT is committed to providing a safe, respectful, and supportive environment for all users, particularly children and young people.</p>
          <p>This Child Safety and Safeguarding Policy establishes guidelines and safeguards to protect minors using the WeKIT platform.</p>

          <h2>2. Scope</h2>
          <p>This policy applies to:</p>
          <ul>
            <li>Students and young users</li>
            <li>Mentors and volunteers</li>
            <li>Educators and institutions</li>
            <li>Employees and contractors</li>
            <li>Community members using the platform</li>
          </ul>
          <p>The policy applies to interactions occurring through:</p>
          <ul>
            <li>The WeKIT platform</li>
            <li>Mentorship programs</li>
            <li>Educational programs</li>
            <li>Community discussions</li>
            <li>AI tools such as YOMA – Your Online Mentor Assistant</li>
          </ul>

          <h2>3. Commitment to Child Safety</h2>
          <p>WeKIT commits to:</p>
          <ul>
            <li>Protecting children from harm, abuse, exploitation, or harassment</li>
            <li>Maintaining a respectful mentoring environment</li>
            <li>Implementing safeguards for online interactions</li>
            <li>Ensuring responsible conduct by mentors and platform participants</li>
          </ul>

          <h2>4. Definition of a Child</h2>
          <p>For the purposes of this policy, a child is defined as any individual under the age of 18 years.</p>

          <h2>5. Safeguarding Principles</h2>
          <p>WeKIT follows the following safeguarding principles:</p>
          <ul>
            <li>Safety of children is the highest priority</li>
            <li>All children must be treated with dignity and respect</li>
            <li>Online interactions must remain appropriate and professional</li>
            <li>Privacy and personal data of minors must be protected</li>
          </ul>

          <h2>6. Parental and Institutional Consent</h2>
          <p>Users under the age of 18 may participate only with parental or guardian consent, OR through authorized educational institutions or programs.</p>
          <p>Parents and guardians are encouraged to supervise children's participation.</p>

          <h2>7. Mentor Conduct Guidelines</h2>
          <p>Mentors interacting with minors must:</p>
          <ul>
            <li>Maintain professional boundaries</li>
            <li>Avoid private or inappropriate communication</li>
            <li>Communicate respectfully and responsibly</li>
            <li>Avoid sharing personal contact details unless permitted through the platform</li>
          </ul>
          <p>Mentors must not:</p>
          <ul>
            <li>Engage in harassment or inappropriate conversations</li>
            <li>Request personal or sensitive information from minors</li>
            <li>Exploit their mentoring position</li>
          </ul>
          <p>Violations may result in immediate removal from the platform.</p>

          <h2>8. Communication Safety</h2>
          <p>WeKIT may monitor certain platform interactions to ensure safety. Safety measures may include:</p>
          <ul>
            <li>Moderation of community content</li>
            <li>Reporting mechanisms for inappropriate behavior</li>
            <li>Removal of harmful content or users</li>
          </ul>

          <h2>9. Reporting Concerns</h2>
          <p>Users may report concerns about unsafe behavior. Reports can include:</p>
          <ul>
            <li>Harassment</li>
            <li>Inappropriate messaging</li>
            <li>Exploitation</li>
            <li>Bullying</li>
            <li>Harmful content</li>
          </ul>
          <p>Reports should be submitted via: <a href="mailto:support@wekitmentoring.com" className="text-primary hover:underline">support@wekitmentoring.com</a></p>
          <p>WeKIT will review all reports promptly and take appropriate action.</p>

          <h2>10. Response to Safety Concerns</h2>
          <p>If a safeguarding concern is identified, WeKIT may:</p>
          <ul>
            <li>Investigate the situation</li>
            <li>Suspend or terminate accounts</li>
            <li>Report violations to relevant authorities where required</li>
          </ul>

          <h2>11. Online Privacy Protection</h2>
          <p>WeKIT follows the Digital Personal Data Protection Act, 2023 (DPDP Act) and implements safeguards for minors' data.</p>
          <p>Children's data will only be processed with parental consent or through institutional participation.</p>

          <h2>12. Responsible Use of AI</h2>
          <p>AI tools including YOMA – Your Online Mentor Assistant are designed to support learning and exploration.</p>
          <p>AI interactions must remain respectful and appropriate. Users should avoid sharing sensitive personal information in AI chats.</p>

          <h2>13. Policy Updates</h2>
          <p>This Child Safety &amp; Safeguarding Policy may be updated periodically to reflect evolving best practices.</p>

          <h2>14. Contact for Safeguarding Concerns</h2>
          <p>For safety concerns or reports, contact:</p>
          <p>
            <strong>WeKIT International Pvt Ltd</strong><br />
            Bangalore, Karnataka, India
          </p>
          <p>
            Email: <a href="mailto:hi@wekitmentoring.com" className="text-primary hover:underline">hi@wekitmentoring.com</a>
          </p>

          {/* Acceptance Checkbox */}
          <div className="mt-16 pt-8 border-t-2 border-border not-prose">
            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="accept-terms"
                  checked={accepted}
                  onCheckedChange={(checked) => setAccepted(checked === true)}
                  className="mt-1"
                />
                <label htmlFor="accept-terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I have read and agree to the <strong className="text-foreground">Terms and Conditions</strong> and the <strong className="text-foreground">Child Safety &amp; Safeguarding Policy</strong> of WeKIT International Pvt Ltd.
                </label>
              </div>
              <Button
                onClick={handleAccept}
                disabled={!accepted}
                className="mt-4 bg-primary text-primary-foreground font-semibold px-8"
              >
                Accept &amp; Continue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
