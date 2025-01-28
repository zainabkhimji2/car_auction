'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  { name: 'Free Plan', price: '$0', features: ['Basic Features', 'Limited Access', 'Community Support'] },
  { name: 'Pro Plan', price: '$19/mo', features: ['All Features', 'Priority Support', 'Unlimited Access'] },
  { name: 'Premium Plan', price: '$49/mo', features: ['Advanced Features', 'Dedicated Support', 'Custom Integrations'] },
];

export default function PricingPlans() {
  const { theme } = useTheme();
  const [buttonColor, setButtonColor] = useState('blue');

  useEffect(() => {
    setButtonColor(theme === 'dark' ? 'yellow' : 'blue');
  }, [theme]);

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <h2 className="text-3xl font-bold text-center">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {plans.map((plan, index) => (
          <Card key={index} className="p-6 text-center shadow-lg border border-gray-300 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-4 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300">{feature}</li>
                ))}
              </ul>
              <Button className={`bg-blue-600 dark:bg-yellow-400 hover:bg-${buttonColor}-600 text-white dark:text-black px-4 py-2 rounded-lg transition-all`}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
