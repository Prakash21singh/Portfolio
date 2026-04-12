import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Sanemi Consultants",
    companyUrl: "https://www.linkedin.com/company/sanemi-consultants-aero",
    type: "job",
    duration: "Jan 2025 — Feb 2026",
    description:
      "Built scalable RESTful APIs and optimized database performance by 40% through advanced indexing and query tuning. Implemented secure authentication systems and deployed applications on AWS.",
    highlights: [
      "Node.js & Express",
      "Database Optimization",
      "JWT & OAuth 2.0",
      "AWS Deployment",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Self-employed",
    companyUrl: "https://www.linkedin.com/company/sanemi-consultants-aero",
    type: "freelance",
    duration: "2025 — Present",
    description:
      "Built full-stack applications with Next.js and Node.js. Designed scalable backend systems and implemented async workflows using Redis and BullMQ.",
    highlights: ["Next.js", "PostgreSQL", "Redis & BullMQ", "RESTful APIs"],
  },
  {
    role: "Teaching Assistant — MERN Stack",
    company: "Apna College",
    companyUrl: "https://www.apnacollege.in",
    type: "job",
    duration: "Jul 2024 — Nov 2024",
    description:
      "Mentored 200+ students on React and backend development. Reviewed projects with focus on performance, clean architecture, and responsive UI design.",
    highlights: ["React", "MERN Stack", "Student Mentoring", "Code Review"],
  },
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-primary mb-2">Experience</h2>

      <p className="text-primary-text mb-8">
        Professional and freelance experience building scalable applications.
      </p>

      <div className="space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="group relative pb-6">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="flex flex-wrap flex-col items-baseline ">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    className="text-primary-text text-sm underline hover:text-primary/80 transition font-medium"
                  >
                    {exp.company}
                  </Link>
                </div>
                <div className="flex flex-col items-end gap-y-0.5 justify-center">
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {exp.duration}
                  </span>
                  <Badge
                    variant="outline"
                    className="w-fit text-[10px] uppercase tracking-wider"
                  >
                    {exp.type === "freelance" ? "Freelance" : "Full-time"}
                  </Badge>
                </div>
              </div>

              {/* Type badge */}

              {/* Description */}
              <p className="text-primary-text leading-relaxed ">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1  bg-primary-dark text-gray-500 "
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-white/5 mt-10 mb-4" />
    </div>
  );
}
