import type { Program, Testimonial, Feature, HowItWorksStep, Partner, StatItem } from "@/types";

export const programs: Program[] = [
  {
    id: "p1",
    title: "Full-Stack Engineering Bootcamp",
    category: "Tech",
    duration: "6 Months",
    level: "Intermediate",
    description: "Master React, Node.js, databases, and cloud deployment with real-world projects.",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "p2",
    title: "AI & Machine Learning for Teams",
    category: "Tech",
    duration: "4 Months",
    level: "Advanced",
    description: "From ML fundamentals to production LLM deployment — built for engineering teams.",
    icon: "🤖",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "p3",
    title: "Product Management Excellence",
    category: "Business",
    duration: "3 Months",
    level: "Intermediate",
    description: "Build, launch, and scale products with agile frameworks and data-driven decisions.",
    icon: "📊",
    color: "from-orange-500 to-rose-500",
  },
  {
    id: "p4",
    title: "Strategic Finance & Business Analytics",
    category: "Business",
    duration: "4 Months",
    level: "Advanced",
    description: "Empower your finance teams with forecasting, FP&A, and business intelligence.",
    icon: "📈",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "p5",
    title: "Executive Leadership Program",
    category: "Leadership",
    duration: "3 Months",
    level: "Advanced",
    description: "Develop transformational leaders with executive coaching and strategic thinking.",
    icon: "🏆",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "p6",
    title: "People & Culture Leadership",
    category: "Leadership",
    duration: "2 Months",
    level: "Intermediate",
    description: "Build high-performing teams, foster innovation, and drive organizational change.",
    icon: "🌟",
    color: "from-pink-500 to-rose-500",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Accredian Enterprise transformed our engineering team's capability in just 4 months. The custom curriculum and live mentorship sessions made all the difference — we shipped 3x more features post-training.",
    name: "Priya Sharma",
    designation: "VP of Engineering",
    company: "Razorpay",
    rating: 5,
    avatar: "PS",
  },
  {
    id: "t2",
    quote:
      "The ROI was undeniable. Our product managers are now data-driven decision makers. Accredian's enterprise programs are the most practical L&D investment we've made in a decade.",
    name: "Arjun Mehta",
    designation: "Chief People Officer",
    company: "Swiggy",
    rating: 5,
    avatar: "AM",
  },
  {
    id: "t3",
    quote:
      "We upskilled 200+ employees across 6 countries with Accredian. The platform, mentors, and support team are world-class. Our completion rate was 96% — unheard of for corporate L&D.",
    name: "Sarah Chen",
    designation: "Head of Talent Development",
    company: "Infosys BPM",
    rating: 5,
    avatar: "SC",
  },
];

export const features: Feature[] = [
  {
    id: "f1",
    title: "Custom Learning Paths",
    description:
      "Tailored curricula built around your team's exact skill gaps, tools, and business objectives — not generic off-the-shelf content.",
    icon: "🎯",
    gradient: "from-brand-500 to-blue-400",
  },
  {
    id: "f2",
    title: "Industry Mentors",
    description:
      "Live sessions with 200+ senior practitioners from top companies — real insights, real problems, real solutions.",
    icon: "🧑‍🏫",
    gradient: "from-accent-500 to-pink-400",
  },
  {
    id: "f3",
    title: "Live Projects",
    description:
      "Learners work on your actual company challenges, making every sprint immediately applicable to business outcomes.",
    icon: "🚀",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "f4",
    title: "Dedicated Support",
    description:
      "A dedicated Customer Success Manager, 24/7 learner support, and detailed weekly progress analytics for L&D leaders.",
    icon: "🛡️",
    gradient: "from-orange-500 to-amber-400",
  },
];

export const howItWorks: HowItWorksStep[] = [
  {
    id: "h1",
    step: 1,
    title: "Assess Needs",
    description:
      "Our experts conduct a deep skill-gap analysis across your teams and align on learning objectives with your L&D heads.",
    icon: "🔍",
  },
  {
    id: "h2",
    step: 2,
    title: "Customize Program",
    description:
      "We design a bespoke curriculum, select the right mentors, and set up your private learning environment in days.",
    icon: "⚙️",
  },
  {
    id: "h3",
    step: 3,
    title: "Launch & Track",
    description:
      "Kick off cohorts, monitor real-time progress dashboards, and iterate rapidly with our data-driven feedback loop.",
    icon: "📡",
  },
];

export const partners: Partner[] = [
  { id: "pa1", name: "Google", logo: "Google" },
  { id: "pa2", name: "Microsoft", logo: "Microsoft" },
  { id: "pa3", name: "Amazon", logo: "Amazon" },
  { id: "pa4", name: "Razorpay", logo: "Razorpay" },
  { id: "pa5", name: "Swiggy", logo: "Swiggy" },
  { id: "pa6", name: "Flipkart", logo: "Flipkart" },
  { id: "pa7", name: "Infosys", logo: "Infosys" },
  { id: "pa8", name: "TCS", logo: "TCS" },
  { id: "pa9", name: "Wipro", logo: "Wipro" },
  { id: "pa10", name: "PhonePe", logo: "PhonePe" },
];

export const metrics: StatItem[] = [
  { label: "Cohorts Delivered", value: 1200, suffix: "+" },
  { label: "Expert Mentors", value: 200, suffix: "+" },
  { label: "Completion Rate", value: 94, suffix: "%" },
  { label: "Avg Salary Hike", value: 18, suffix: "LPA", prefix: "₹" },
];

export const heroStats: StatItem[] = [
  { label: "Companies Trained", value: 500, suffix: "+" },
  { label: "Learners Upskilled", value: 50000, suffix: "+" },
  { label: "Satisfaction Rating", value: 4.8, suffix: "★" },
];
