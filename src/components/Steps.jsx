import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

function Steps() {
  const steps = [
    {
      number: '01',
      icon: userIcon,
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
    },
    {
      number: '02',
      icon: packageIcon,
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
    },
    {
      number: '03',
      icon: rocketIcon,
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center relative border border-gray-100 hover:shadow-lg transition"
            >
              {/* Step Number Badge */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
