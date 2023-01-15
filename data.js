import trynaHome from "./public/tryna-home.png";
import fanThreeSixtyHome from "./public/fanthreesixty-home.png";
import apRobotHome from "./public/ap-robot-home.png";
import agFutureHome from "./public/ag-future-home.png";
import garminHome from "./public/garmin-home.png";
import haystackHome from "./public/haystack-home.png";

import fanThreeSixtyHero from "./public/fanthreesixty-hero.png";
import fanThreeSixtySection1 from "./public/fanthreesixty-section-1.png";
import fanThreeSixtySection2 from "./public/fanthreesixty-section-2.png";
import fanThreeSixtySection3 from "./public/fanthreesixty-section-3.png";

import trynaHero from "./public/tryna-hero.png";
import trynaSection1 from "./public/tryna-section-1.png";

import apRobotHero from "./public/ap-robot-hero.png";
import apRobotSection1 from "./public/ap-robot-section-1.png";
import apRobotSection2 from "./public/ap-robot-section-2.png";
import apRobotSection3 from "./public/ap-robot-section-3.png";

import garminHero from "./public/garmin-hero.png";
import garminSection1 from "./public/garmin-section-1.png";
import garminSection2 from "./public/garmin-section-2.png";
import garminSection3 from "./public/garmin-section-3.png";

import agFutureHero from "./public/ag-future-hero.png";
import agFutureSection1 from "./public/ag-future-section-1.png";
import agFutureSection2 from "./public/ag-future-section-2.png";
import agFutureSection3 from "./public/ag-future-section-3.png";

export const homePageData = [
  {
    title: "Tryna",
    link: "/projects/tryna",
    image: trynaHome,
    gradientStart: "rgba(0,0,0,1)",
    gradientStop: "rgba(0,0,0,0.85)",
  },
  {
    title: "FanThreeSixty",
    link: "/projects/fanthreesixty",
    image: fanThreeSixtyHome,
    gradientStart: "rgba(89,104,253,1)",
    gradientStop: "rgba(106,52,241,1)",
  },
  {
    title: "AP Robotics",
    link: "/projects/ap-robotics",
    image: apRobotHome,
    gradientStart: "rgba(202,70,88,1)",
    gradientStop: "rgba(190,55,144,1)",
  },
  {
    title: "Ag Future",
    link: "/projects/ag-future",
    image: agFutureHome,
    gradientStart: "rgba(0,150,57,1)",
    gradientStop: "rgba(5,120,48,1)",
  },
  {
    title: "Garmin",
    link: "/projects/garmin",
    image: garminHome,
    gradientStart: "rgba(0,0,0,1)",
    gradientStop: "rgba(0,0,0,0.85)",
    // gradientStart: "#60cff6",
    // gradientStop: "#00a0d9",
  },
  {
    title: "Haystack",
    link: "https://www.haystack.works",
    image: haystackHome,
    gradientStart: "#FFB800",
    gradientStop: "#F09819",
    // gradientStart: "#60cff6",
    // gradientStop: "#00a0d9",
  },
];

export const trynaData = {
  gradientStart: "rgba(0,0,0,1)",
  gradientStop: "rgba(0,0,0,1)",
  heroImage: trynaHero,
  heading: "Tryna",
  description:
    "An app built to bring people together by encouraging impromptu hangouts, in real life",
  details: [
    {
      title: "Expertise",
      description: "UX/UI Design, Mobile Development, and Backend Development",
    },
    {
      title: "Platforms",
      description: "Web, iOS, Android",
    },
    {
      title: "Tech Stack",
      description: "Ionic, React, Typescript, Node, Supabase, Figma",
    },
  ],
  sections: [
    {
      title: "You Tryna Hang?",
      description:
        "The approach is simple: create events, invite your friends, and manage your squads. No group texts and no pressure. Spend less time on your phone, and more time together",
      image: trynaSection1,
    },
  ],
  next: {
    name: "FanThreeSixty",
    link: "/projects/fanthreesixty",
  },
  buttonText: "Coming Soon",
  buttonLink: "#",
};

export const fanThreeSixtyData = {
  gradientStart: "rgba(89,104,253,1)",
  gradientStop: "rgba(106,52,241,1)",
  heroImage: fanThreeSixtyHero,
  heading: "FanThreeSixty",
  description:
    "A data platform that makes it simple for teams to engage with their fans",
  details: [
    {
      title: "Expertise",
      description: "Frontend Development and Architecture",
    },
    {
      title: "Platforms",
      description: "Web",
    },
    {
      title: "Tech Stack",
      description: "React, Node",
    },
  ],
  sections: [
    {
      title: "Engage with your fans",
      description:
        "Send mobile communications to your fans, view metrics on how your content performed, and retarget with one click",
      image: fanThreeSixtySection1,
    },
    {
      title: "Data, simplified",
      description:
        "Spend less time crunching data and understand your fanbase through simple charts and graphs",
      image: fanThreeSixtySection2,
    },
    {
      title: "Manage your app",
      description:
        "Edit your content from anywhere with a mobile-friendly, drag-and-drop app manager",
      image: fanThreeSixtySection3,
    },
  ],
  next: {
    name: "AP Robotics",
    link: "/projects/ap-robotics",
  },
  buttonText: "View Project",
  buttonLink: "https://www.fanthreesixty.com/",
};

export const apRoboticsData = {
  gradientStart: "rgba(202,70,88,1)",
  gradientStop: "rgba(115,103,228,1)",
  heroImage: apRobotHero,
  heading: "AP Robotics",
  description:
    "A marketing website + a UI overhaul to help launch a new product offering",
  details: [
    {
      title: "Expertise",
      description: "Product Design, Marketing, CMS, and Frontend Development",
    },
    {
      title: "Platforms",
      description: "Web",
    },
    {
      title: "Tech Stack",
      description: "Javascript, Gatsby, Contentful",
    },
  ],
  sections: [
    {
      title: "Visual communication",
      description:
        "Custom animations and graphics on the marketing website help quickly convey how the product works",
      image: apRobotSection1,
    },
    {
      title: "Filter with ease",
      description:
        "Create your own custom table views and filter by over ten types of data to see how invoices are flowing through your system",
      image: apRobotSection2,
    },
    {
      title: "Check the details",
      description:
        "Get work done faster by viewing all of your data in simple, predictable UI components",
      image: apRobotSection3,
    },
  ],
  next: {
    name: "Ag Future",
    link: "/projects/ag-future",
  },
  buttonText: "View Project",
  buttonLink: "https://www.ap-robot.com/",
};

export const garminData = {
  gradientStart: "rgba(0,0,0,1)",
  gradientStop: "rgba(0,0,0,1)",
  heroImage: garminHero,
  heading: "Garmin",
  description: "Building web experiences, at scale",
  details: [
    {
      title: "Expertise",
      description: "Frontend Development and Backend Development",
    },
    {
      title: "Platforms",
      description: "Web",
    },
    {
      title: "Tech Stack",
      description: "Node, Vue, Elasticsearch, Contentful, Cloud Foundry",
    },
  ],
  sections: [
    {
      title: "Scalable Web Content",
      description:
        "Built a web content delivery service with Contentful and Elasticsearch, created custom Contentful plugins for content editors, and crafted UI components that allowed marketers to build web pages that worked on all screen sizes in 40+ languages",
      image: garminSection1,
    },
    {
      title: "Your Watch Your Way",
      description:
        "Created a shopping experience that allowed customers to build their own watch by choosing a face and band combination",
      image: garminSection2,
    },
    {
      title: "Marine Maps",
      description:
        "Built a full-stack marine maps discovery and purchase application where users could find maps near their favorite boating locations",
      image: garminSection3,
    },
  ],
  next: {
    name: "Tryna",
    link: "/projects/tryna",
  },
  buttonText: "View Project",
  buttonLink: "https://www.garmin.com/",
};

export const agFutureData = {
  gradientStart: "rgba(0,150,57,1)",
  gradientStop: "rgba(0,85,32,1)",
  heroImage: agFutureHero,
  heading: "Agriculture Future of America",
  description:
    "A web experience with an engaging UX that simplified a decade of content strategy",
  details: [
    {
      title: "Expertise",
      description: "Design, Marketing, CMS, Frontend Development",
    },
    {
      title: "Platforms",
      description: "Web",
    },
    {
      title: "Tech Stack",
      description: "Javascript, Next.js, Storyblok",
    },
  ],
  sections: [
    {
      title: "The art of storytelling",
      description:
        "Collaborated with a copywriter to effectively communicate AFA’s mission + crafted a UI that resonated with all of their audiences: from investors to students",
      image: agFutureSection1,
    },
    {
      title: "Bringing clarity",
      description:
        "Took content from dozens of scattered conference pages and combined them into one great looking, easy to understand experience that was powered by an awesome CMS behind the scenes",
      image: agFutureSection2,
    },
    {
      title: "Find your way",
      description:
        "Took relevant information from hundreds of legacy pages and created concise, well-structured content + a friendly new nav to explore it all with",
      image: agFutureSection3,
    },
  ],
  next: {
    name: "Garmin",
    link: "/projects/garmin",
  },
  buttonText: "View Project",
  buttonLink: "https://www.agfuture.org/",
};

export const aboutData = {
  hobbies: [
    {
      emoji: "🏀",
      name: "Hoops",
    },
    {
      emoji: "👟",
      name: "Running",
    },
    {
      emoji: "🦆",
      name: "Bird watching",
    },
    {
      emoji: "🌱",
      name: "Vegan Eats",
    },
    {
      emoji: "🎧",
      name: "Hip Hop",
    },
  ],
};
