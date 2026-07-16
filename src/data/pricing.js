import freeIcon from '../assets/Free.png'
import standardIcon from '../assets/Standard.png'
import premiumIcon from '../assets/Premium.png'

export const PRICING_PLANS = [
  {
    name: 'Free Plan',
    icon: freeIcon,
    price: 'Free',
    period: '',
    featured: false,
    features: [
      'Unlimited Bandwidth',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
    ],
  },
  {
    name: 'Standard Plan',
    icon: standardIcon,
    price: '$9',
    period: '/ mo',
    featured: false,
    features: [
      'Unlimited Bandwidth',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
      'Connect Anywhere',
    ],
  },
  {
    name: 'Premium Plan',
    icon: premiumIcon,
    price: '$12',
    period: '/ mo',
    featured: true,
    features: [
      'Unlimited Bandwidth',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
      'Connect Anywhere',
      'Get New Features',
    ],
  },
]
