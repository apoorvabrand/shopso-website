import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="backdrop-blur-md bg-[#7c3aed]/20 border border-white/20 text-black dark:text-white mx-auto mb-4">
            <span className="text-sm font-semibold">Legal</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-gray-200">
            Privacy Policy
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
                1. Information We Collect
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  ShopSo collects information to provide better services to our users. We collect information in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> When you create a ShopSo account, we collect your email address and basic profile information.</li>
                  <li><strong>Store Data:</strong> With your permission, we access your Shopify store data including orders, products, and customer information to provide analytics services.</li>
                  <li><strong>Marketing Data:</strong> We collect data from connected marketing platforms (Meta Ads, Google Ads, Klaviyo) to provide unified analytics.</li>
                  <li><strong>Usage Information:</strong> We collect information about how you use our service, including features accessed and time spent.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our analytics services</li>
                  <li>Generate reports and insights about your business performance</li>
                  <li>Send automated reports via email and Slack</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Protect against fraud and abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Data Security
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All data transmission is encrypted using HTTPS</li>
                  <li>API tokens and credentials are encrypted at rest</li>
                  <li>We use OAuth authentication for all platform connections</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and monitoring systems</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Data Sharing
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Your Rights
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Data Retention
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  We retain your information for as long as necessary to provide our services. When you cancel your account, we retain your data for 30 days to allow for reactivation, after which it is permanently deleted.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Contact Us
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@shopso.com</p>
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
