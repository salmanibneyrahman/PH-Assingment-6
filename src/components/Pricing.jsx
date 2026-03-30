function Pricing() {
    const plans = [
        {
            name: 'Starter',
            subtitle: 'Perfect for getting started',
            price: 0,
            period: 'Month',
            features: [
                'Access to 10 free tools',
                'Basic templates',
                'Community support',
                '1 project per month',
            ],
            buttonText: 'Get Started Free',
            buttonStyle: 'border border-purple-600 text-purple-600 hover:bg-purple-50',
            highlighted: false,
        },
        {
            name: 'Pro',
            subtitle: 'Best for professionals',
            price: 29,
            period: 'Month',
            features: [
                'Access to all premium tools',
                'Unlimited templates',
                'Priority support',
                'Unlimited projects',
                'Cloud sync',
                'Advanced analytics',
            ],
            buttonText: 'Start Pro Trial',
            buttonStyle: 'border border-purple-600 text-purple-600 hover:bg-purple-50',
            highlighted: true,
            badge: 'Most Popular',
        },
        {
            name: 'Enterprise',
            subtitle: 'For teams and businesses',
            price: 99,
            period: 'Month',
            features: [
                'Everything in Pro',
                'Team collaboration',
                'Custom integrations',
                'Dedicated support',
                'SLA guarantee',
                'Custom branding',
            ],
            buttonText: 'Contact Sales',
            buttonStyle: 'bg-purple-700 text-white hover:bg-purple-800',
            highlighted: false,
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={
                                'rounded-2xl p-8 relative ' +
                                (plan.highlighted
                                    ? 'border-2 border-purple-600 shadow-lg'
                                    : 'border border-gray-200')
                            }
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-medium px-4 py-1 rounded-full">
                                    {plan.badge}
                                </span>
                            )}

                            {/* Plan Name */}
                            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mt-1 mb-6">{plan.subtitle}</p>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                                <span className="text-gray-400 text-sm">/{plan.period}</span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <i className="fa-solid fa-check text-purple-600 mr-2 text-xs"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                className={
                                    'w-full py-3 rounded-lg text-sm font-medium transition ' + plan.buttonStyle
                                }
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;