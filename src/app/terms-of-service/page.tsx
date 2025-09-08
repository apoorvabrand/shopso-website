import { Badge } from "@/components/ui/badge";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Legal</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-gray-200">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  By accessing and using ShopSo's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  ShopSo provides analytics and reporting services for Shopify stores, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Integration with Shopify stores and marketing platforms</li>
                  <li>Real-time analytics dashboards</li>
                  <li>Automated reporting via email and Slack</li>
                  <li>Customer analytics and insights</li>
                  <li>Marketing performance tracking</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. User Accounts
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  To access our services, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Acceptable Use
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Share your account credentials with others</li>
                  <li>Use the service to compete with ShopSo</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Service Terms
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Our service terms are clearly outlined on our website. By using our services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You agree to comply with all service terms and conditions</li>
                  <li>Services are provided on an ongoing basis as outlined in our service agreement</li>
                  <li>We provide support and maintenance as part of our service offering</li>
                  <li>You can modify or discontinue service usage at any time</li>
                  <li>Service modifications are processed according to our service policy</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Data and Privacy
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Your privacy is important to us. Our collection and use of your data is governed by our Privacy Policy. By using our service, you consent to the collection and use of your information as outlined in our Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Service Availability
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  While we strive for 99.9% uptime, we do not guarantee uninterrupted service. We may temporarily suspend service for maintenance, updates, or due to circumstances beyond our control.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Limitation of Liability
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  ShopSo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Termination
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  Either party may terminate this agreement at any time. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to the service will be immediately suspended</li>
                  <li>Your data will be retained for 30 days for potential reactivation</li>
                  <li>After 30 days, your data will be permanently deleted</li>
                  <li>You remain responsible for any outstanding fees</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Changes to Terms
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our service. Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                11. Contact Information
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@shopso.com</p>
                  <p><strong>Address:</strong> ShopSo Pvt. Ltd., [Your Address]</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
