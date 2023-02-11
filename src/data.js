// import icons
import { FaYoutube, FaInstagram, FaGithub, FaCircle } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

// import images
import AboutImg from "../src/assets/img/about.png";

import Avatar1Img from "../src/assets/img/testimonials/avatar1.avif";
import Avatar2Img from "../src/assets/img/testimonials/avatar2.avif";
import Avatar3Img from "../src/assets/img/testimonials/avatar3.avif";
import LogoV2 from "../src/assets/img/logo-v2.png";
import HeroImage from "../src/assets/img/undraw_working_out_re_nhkg.svg";
import Course1 from "../src/assets/img/pexels-photo-6456140.jpeg";
import Course2 from "../src/assets/img/pexels-photo-6740294.jpeg";
import Course3 from "../src/assets/img/pexels-photo-14913256.jpeg";

export const navigationData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    to: "features",
  },
  {
    name: "Classes",
    to: "classes",
  },
  {
    name: "Pricing",
    to: "pricing",
  },
  {
    name: "Testimonials",
    to: "testimonials",
  },
  {
    name: "Contact us",
    to: "contact",
  },
];

export const heroData = {
  title: ` Exercise is the key to a`,
  span: ` Healthy Lifestyle`,
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  btnText: "Learn more",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Ready to make a ",
  span: "change?",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const features = [
  {
    unit: "5",
    title: "Years of Experience",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    unit: "7K",
    title: "Happy Clients",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    unit: "9",
    title: "Experienced Trainers",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    unit: "20",
    title: "Monthly Classes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
];
export const courses = [
  {
    image: Course1,
    title: "Resortive Workout Training & Immersion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "Get started",
    delay: "600",
  },
  {
    image: Course2,
    title: "Resortive Workout Training & Immersion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "Get started",
    delay: "800",
  },
  {
    image: Course3,
    title: "Resortive Workout Training & Immersion",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "Get started",
    delay: "900",
  },
];
export const pricing = [
  {
    title: "Regular Member",
    price: "$50/month",
    list: [
      {
        icon: <FaCircle />,
        name: "Pay as you go",
      },
      {
        icon: <FaCircle />,
        name: "Perfect for non-residence",
      },
      {
        icon: <FaCircle />,
        name: "Acces to all classes",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <FaCircle />,
    delay: "600",
  },
  {
    title: "Premium Member",
    price: "$70/month",
    list: [
      {
        icon: <FaCircle />,
        name: "Pay as you go",
      },
      {
        icon: <FaCircle />,
        name: "Perfect for non-residence",
      },
      {
        icon: <FaCircle />,
        name: "Acces to all classes",
      },
      {
        icon: <FaCircle />,
        name: "Acces to all mentors",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <FaCircle />,
    delay: "800",
  },
  {
    title: "Standard Member",
    price: "$150/month",
    list: [
      {
        icon: <FaCircle />,
        name: "Pay as you go",
      },
      {
        icon: <FaCircle />,
        name: "Perfect for non-residence",
      },
      {
        icon: <FaCircle />,
        name: "Acces to all classes",
      },
      {
        icon: <FaCircle />,
        name: "Acces to all mentors",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <FaCircle />,
    delay: "900",
  },
];
export const testimonialsData = [
  {
    image: Avatar3Img,
    name: "John Fang",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: Avatar2Img,
    name: "Jane Doe",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: Avatar1Img,
    name: "Sara Ferry",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Try for free!",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Request Demo",
};

export const footerData = {
  logo: LogoV2,
  address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  email: "gym@company.com",
  phone: "612 349 8756",
  list1: [
    {
      name: "Our company",
      href: "#",
    },
    {
      name: "Our plan",
      href: "#",
    },
    {
      name: "Become a member",
      href: "#",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#",
    },
    {
      name: "Sign Up",
      href: "#",
    },
    {
      name: "Guide",
      href: "#",
    },
    {
      name: "Reports",
      href: "#",
    },
    {
      name: "Q & A",
      href: "#",
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightData = {
  text: "© Gym. All rights reserved.",
  icon: <BsChatDotsFill />,
};
