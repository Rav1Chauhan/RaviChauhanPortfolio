"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SkillsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    category: "Frontend",
    color: "#7c3aed",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
    ],
  },
  {
    category: "Backend",
    color: "#06b6d4",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Prisma ORM",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "Blockchain",
    color: "#f59e0b",
    skills: [
      "Solidity",
      "Foundry",
      "OpenZeppelin",
      "Rust",
      "Anchor Framework",
      "Solana",
    ],
  },
  {
    category: "AI & Machine Learning",
    color: "#10b981",
    skills: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    category: "Tools",
    color: "#8b5cf6",
    skills: ["Vercel", "Git & GitHub", "Linux", "Docker", "Postman", "Figma"],
  },
  {
    category: "Other",
    color: "#f43f5e",
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "Authentication (JWT, OAuth)",
      "Open Source Contribution",
      "Responsive Web Design",
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".skill-card",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".skills-marquee-inner",
        { x: 0 },
        { x: "-50%", duration: 50, ease: "none", repeat: -1 },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allSkills = skillGroups.flatMap((g) => g.skills);

  return (
    <section ref={sectionRef} className={styles.skills} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>
            <span className={styles.labelLine} />
            Skills
          </span>
          <h2 className={styles.heading}>
            My <span className={styles.accent}>Tech</span> Stack
          </h2>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`skill-card ${styles.card}`}
              style={{ "--card-color": group.color } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardDot} />
                <span className={styles.cardCategory}>{group.category}</span>
              </div>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite marquee */}
      <div className={styles.marqueeWrapper}>
        <div className={`skills-marquee-inner ${styles.marqueeInner}`}>
          {[...allSkills, ...allSkills].map((skill, i) => (
            <span key={i} className={styles.marqueeItem}>
              {skill}
              <span className={styles.marqueeDot}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
