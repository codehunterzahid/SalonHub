import { Calendar, Shield, Star,Scissors,
  Palette,
  Paintbrush,
  Sparkles,
  User,
  Brush,
  UserCheck,
  Flower, } from "lucide-react";
import SalonRoom from "../assets/images/salon-1.jpg";
import SalonChair from "../assets/images/salon-2.jpg";
import SpaTub from "../assets/images/salon-3.jpg";
/* Features Data */
export const features = [
  {
    id: 1,
    icon: Calendar,
    title: "Instant Booking",
    description:
      "Book appointments 24/7 with real-time availability. No waiting, no phone calls.",
    bg: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: 2,
    icon: Shield,
    title: "Secure Payments",
    description:
      "Escrow payment system ensures your money is safe until service completion.",
    bg: "bg-gradient-to-r from-blue-400 to-purple-500",
  },
  {
    id: 3,
    icon: Star,
    title: "Top-Rated Salons",
    description:
      "Access verified salons with real customer reviews and ratings.",
    bg: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
];

/* Services Data */

export const services = [
  {
    id: 1,
    icon: Scissors,
    title: "Haircut & Styling",
    price: "$50",
    bg: "bg-gradient-to-r from-red-500 to-pink-500",
  },
  {
    id: 2,
    icon: Palette,
    title: "Hair Coloring",
    price: "$120",
    bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    id: 3,
    icon: Paintbrush,
    title: "Manicure & Pedicure",
    price: "$60",
    bg: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Facial Treatment",
    price: "$80",
    bg: "bg-gradient-to-r from-yellow-400 to-pink-500",
  },
  {
    id: 5,
    icon: User,
    title: "Massage Therapy",
    price: "$100",
    bg: "bg-gradient-to-r from-purple-500 to-indigo-500",
  },
  {
    id: 6,
    icon: Brush,
    title: "Makeup Session",
    price: "$70",
    bg: "bg-gradient-to-r from-red-400 to-pink-500",
  },
  {
    id: 7,
    icon: UserCheck,
    title: "Hair Extensions",
    price: "$250",
    bg: "bg-gradient-to-r from-yellow-400 to-purple-500",
  },
  {
    id: 8,
    icon: Flower,
    title: "Spa Packages",
    price: "$150",
    bg: "bg-gradient-to-r from-green-400 to-emerald-500",
  },
];


/* How It Works Data */

export const steps = [
  {
    id: 1,
    title: "Browse Salons",
    desc: "Explore salons and services in your area",
  },
  {
    id: 2,
    title: "Choose Service",
    desc: "Select your preferred service and time",
  },
  {
    id: 3,
    title: "Secure Payment",
    desc: "Pay securely with escrow protection",
  },
  {
    id: 4,
    title: "Enjoy Service",
    desc: "Get your service and rate your experience",
  },
];

/* Testimonials Data */

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    text: "SalonHub has completely changed how I book my beauty appointments. The platform is so easy to use and I love the secure payment system!",
  },
  {
    id: 2,
    name: "Mike Davis",
    role: "Salon Owner",
    text: "As a salon owner, this platform has helped me reach more customers and manage bookings efficiently. The 10% commission is totally worth it!",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Happy Customer",
    text: "I was skeptical at first, but the escrow payment system gave me peace of mind. Got exactly what I wanted and the service was amazing!",
  },
];


/* User.Salons Data */

export const salonsData = [
  {
    id: 1,
    name: "Glamour Salon & Spa",
    rating: 4.8,
    reviews: 234,
    location: "Downtown, New York",
    image: SalonRoom,
    services: [
      { id: 1, name: "Haircut & Styling", duration: "45 min", price: 50 },
      { id: 2, name: "Hair Color", duration: "2 hours", price: 120 },
      { id: 3, name: "Hair Straight", duration: "1 hour", price: 150 },
    ],
  },
  {
    id: 2,
    name: "Elite Beauty Studio",
    rating: 4.9,
    reviews: 189,
    location: "Midtown, New York",
    image: SalonChair,
    services: [
      { id: 1, name: "Makeup", duration: "1 hour", price: 70 },
      { id: 2, name: "Hair Treatment", duration: "1.5 hours", price: 90 },
    ],
  },
  {
    id: 3,
    name: "Luxury Spa & Wellness",
    rating: 4.7,
    reviews: 156,
    location: "Upper East Side, New York",
    image: SpaTub,
    services: [
      { id: 1, name: "Massage Therapy", duration: "1 hour", price: 100 },
      { id: 2, name: "Spa Facial", duration: "1.5 hours", price: 130 },
    ],
  },
];
