import type { SiteContent } from "@/content/schema";

export const siteContent: SiteContent = {
  site: {
    name: "Tom Ogoley",
    domain: "tom.ogoley.com",
    title: "Tom Ogoley | External Wholesaler, Retirement Plans",
    description:
      "Professional portfolio site for Tom Ogoley, an external wholesaler focused on retirement plans, advisor partnerships, and disciplined client service.",
    resumeHref: "/Tom-Ogoley-Resume.pdf",
    linkedinUrl: "https://www.linkedin.com/in/thomas-ogoley-46a42743/"
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ],
  socialLinks: [
    { label: "BrokerCheck", href: "#" },
    { label: "Email", href: "mailto:tom@ogoley.com" }
  ],
  hero: {
    eyebrow: "External Wholesaler | Retirement Plans",
    title: "Helping advisors and plan sponsors evaluate retirement plan solutions with clarity and confidence.",
    subtitle:
      "A relationship-driven, professional approach to advisor support, retirement plan strategy, and long-term business development.",
    summary:
      "Tom works with financial advisors, consultants, and intermediary partners to position retirement solutions effectively, communicate value clearly, and support durable client relationships.",
    primaryCta: {
      label: "Contact Tom",
      href: "#contact"
    },
    secondaryCta: {
      label: "Download resume",
      href: "/Tom-Ogoley-Resume.pdf"
    },
    metrics: [
      { label: "Years in financial services", value: "10+" },
      { label: "Primary focus", value: "Retirement plans" },
      { label: "Approach", value: "Advisor-first coverage" }
    ]
  },
  about: {
    title: "About",
    paragraphs: [
      "Tom Ogoley is an external wholesaler focused on retirement plan distribution, advisor engagement, and field support. He is known for a steady, professional style and a strong understanding of how to communicate complex solutions in a practical way.",
      "His work centers on building trust with advisor partners, supporting retirement-focused business development, and helping stakeholders evaluate solutions with discipline, responsiveness, and long-term perspective."
    ],
    highlights: [
      "Supports advisor education and retirement plan positioning",
      "Builds durable intermediary relationships across a defined territory",
      "Brings structured communication and professional follow-through"
    ]
  },
  experience: [
    {
      company: "Evergreen Retirement Partners",
      role: "External Wholesaler",
      period: "2022 - Present",
      location: "United States",
      summary:
        "Covers a multi-state territory supporting advisors, consultants, and distribution partners with retirement plan sales strategy and product positioning.",
      achievements: [
        "Partners closely with financial advisors to identify retirement plan opportunities and align solutions to client objectives.",
        "Coordinates with internal sales, investment, and service teams to improve responsiveness and strengthen partner confidence.",
        "Delivers consistent territory coverage through disciplined follow-up, education, and relationship management."
      ]
    },
    {
      company: "Summit Benefit Strategies",
      role: "Internal Wholesaler",
      period: "2019 - 2022",
      location: "Chicago, IL",
      summary:
        "Supported external distribution efforts through advisor outreach, case support, meeting preparation, and retirement plan education.",
      achievements: [
        "Helped maintain a high-activity sales process across advisor relationships, pipeline support, and follow-up execution.",
        "Prepared illustrations, product comparisons, and meeting materials to support retirement plan conversations.",
        "Built a reputation for reliability, professionalism, and clear communication with partners and internal stakeholders."
      ]
    },
    {
      company: "Lakeview Financial Group",
      role: "Retirement Plan Associate",
      period: "2016 - 2019",
      location: "Client Service",
      summary:
        "Worked across retirement plan administration, advisor support, and client servicing functions while developing a strong foundation in plan design and sponsor priorities.",
      achievements: [
        "Supported plan reviews, service coordination, and meeting preparation for retirement plan clients.",
        "Developed practical knowledge of retirement plan structures, sponsor priorities, and intermediary expectations.",
        "Strengthened communication skills through direct exposure to client needs and service standards."
      ]
    }
  ],
  projects: [
    {
      name: "Advisor Education Initiative",
      description:
        "A territory-wide effort to improve how advisor partners understood retirement plan positioning, product fit, and competitive differentiation.",
      impact: "Improved meeting quality and created stronger continuity across advisor conversations.",
      stack: ["Advisor presentations", "Retirement plans", "Field education", "Relationship management"],
      href: "#"
    },
    {
      name: "Territory Coverage Discipline",
      description:
        "A structured approach to advisor segmentation, follow-up cadence, and pipeline visibility designed to support more consistent wholesaling activity.",
      impact: "Created stronger visibility into partner priorities and reinforced a disciplined business development process.",
      stack: ["Sales process", "Advisor segmentation", "Pipeline management", "Follow-up systems"],
      href: "#"
    },
    {
      name: "Plan Sponsor Meeting Support",
      description:
        "Prepared planning materials, case support, and positioning narratives used to help advisors and sponsors evaluate retirement plan options.",
      impact: "Helped elevate professionalism and readiness in high-stakes client and prospect meetings.",
      stack: ["Meeting prep", "Case support", "Competitive positioning", "Client communication"],
      href: "#"
    }
  ],
  skills: [
    {
      title: "Retirement Plan Expertise",
      items: ["Advisor support", "Plan positioning", "Wholesaling strategy", "Partner communication", "Territory development"]
    },
    {
      title: "Relationship Management",
      items: ["Business development", "Meeting preparation", "Follow-up discipline", "Professional communication", "Stakeholder coordination"]
    },
    {
      title: "Professional Strengths",
      items: ["Presentation support", "Competitive framing", "Process consistency", "Responsiveness", "Client service standards"]
    }
  ],
  contact: {
    title: "Contact",
    body:
      "For advisor partnerships, retirement plan distribution conversations, or professional introductions, please reach out directly.",
    email: "tom@ogoley.com",
    location: "Based in the United States",
    availability: "Available for professional conversations"
  },
  footerNote: "Structured as a clean, maintainable professional profile with centralized content for easy updates."
};
