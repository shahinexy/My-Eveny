import MyContainer from "@/components/common/MyContainer";
import TitleMD from "@/components/common/TitleMD";

const PrivacyPolicy = () => {
  return (
    <section className="md:py-24 py-12">
      <MyContainer>
        <div className="text-center md:mb-12 mb-8">
          <TitleMD title="Privacy Policy" />
        </div>

        <div className="space-y-6 md:text-lg text-base leading-relaxed max-w-4xl mx-auto">
          <p>
            At <strong>Choptop</strong>, your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use our website, mobile app, or any related
            services.
          </p>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              1. Information We Collect
            </h3>
            <p>We collect two types of information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Personal Information</strong> – such as your name,
                email, phone number, or payment details when you register, book
                an event, or host one.
              </li>
              <li>
                <strong>Non-Personal Information</strong> – like your browser
                type, device information, and general usage statistics to
                improve our platform.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              2. How We Use Your Information
            </h3>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Process bookings and manage events</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
              <li>
                Send updates, promotions, and offers (you can unsubscribe
                anytime)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              3. Sharing Your Information
            </h3>
            <p>
              We never sell your personal information. We may share it only
              with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Event hosts (for booking purposes)</li>
              <li>Service providers (e.g., payment gateways)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              4. Your Privacy Choices
            </h3>
            <p>You can:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Access, update, or delete your account information anytime
              </li>
              <li>Opt-out of marketing communications</li>
              <li>
                Request data removal by contacting{" "}
                <a
                  href="mailto:privacy@choptop.com"
                  className="text-primary underline"
                >
                  privacy@choptop.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              5. Security of Your Data
            </h3>
            <p>
              We use industry-standard encryption and secure servers to keep
              your data safe. However, no online method is 100% secure, so we
              encourage you to use strong passwords and be cautious when sharing
              personal details.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              6. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy occasionally. Any changes will
              be posted here with a revised <strong>{"Last Updated"}</strong>{" "}
              date.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">7. Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, contact us at:{" "}
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

export default PrivacyPolicy;
