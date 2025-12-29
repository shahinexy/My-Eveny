import MyContainer from "@/components/common/MyContainer";
import TitleMD from "@/components/common/TitleMD";

const TermsOfService = () => {
  return (
    <section className="md:py-32 py-24">
      <MyContainer>
        <div className="text-center md:mb-12 mb-8">
          <TitleMD title="Terms of Service" />
        </div>

        <div className="space-y-6 md:text-lg text-base leading-relaxed max-w-4xl mx-auto">
          <p>
            Welcome to <strong>Choptop!</strong> These Terms of Service
            (“Terms”) govern your use of our website, mobile app, and related
            services (collectively, the “Platform”). By using Choptop, you agree
            to these Terms, so please read them carefully.
          </p>

          <div>
            <h3 className="font-semibold text-xl mb-2">1. Eligibility</h3>
            <p>
              You must be at least 18 years old (or the age of majority in your
              region) to create an account or use our services. By registering,
              you confirm that all information you provide is accurate.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">2. Your Account</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                You are responsible for keeping your login details secure.
              </li>
              <li>
                If you suspect unauthorized access to your account, notify us
                immediately at{" "}
                <a
                  href="mailto:support@choptop.com"
                  className="text-primary underline"
                >
                  support@choptop.com
                </a>
                .
              </li>
              <li>
                We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">3. Using Choptop</h3>
            <p>You agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use our services only for lawful purposes.</li>
              <li>Respect event hosts, attendees, and Choptop staff.</li>
              <li>
                Not engage in fraudulent, misleading, or abusive behavior.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. Content & Intellectual Property
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                All content on Choptop (logos, text, images, designs) is owned
                by us or our partners.
              </li>
              <li>
                You may not copy, reproduce, or distribute our content without
                permission.
              </li>
              <li>
                If you upload content (e.g., event images), you grant us a
                non-exclusive license to display and promote it on our Platform.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">6. Liability</h3>
            <p>
              All content on Choptop (logos, text, images, designs) is owned by
              us or our partners. You may not copy, reproduce, or distribute our
              content without permission. If you upload content (e.g., event
              images), you grant us a non-exclusive license to display and
              promote it on our Platform.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">7. Termination</h3>
            <p>
              We may suspend or terminate your access if you violate these Terms
              or engage in harmful behavior. You may also close your account at
              any time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              8. Changes to the Terms
            </h3>
            <p>
              We may update these Terms from time to time. If we make
              significant changes, we’ll notify you by email or in-app message.
              Continued use of Choptop means you accept the updated Terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">Contact Us</h3>
            <p>
              If you have questions about this Terms of Service, contact us at:{" "}
              <a
                href="mailto:privacy@choptop.com"
                className="text-primary font-medium underline"
              >
                privacy@choptop.com
              </a>
            </p>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default TermsOfService;
