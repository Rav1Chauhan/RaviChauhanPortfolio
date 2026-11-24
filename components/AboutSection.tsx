"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutSection.module.css";

gsap.registerPlugin(ScrollTrigger);

import { calculateTotalExperience } from "@/lib/data";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const totalExp = calculateTotalExperience();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-label",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-label", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".about-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".about-heading", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: ".about-text", start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
          stagger: 0.1,
          scrollTrigger: { trigger: ".about-stat", start: "top 80%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className={styles.grid}>
        <div className={styles.left}>
          <span className={`about-label ${styles.label}`}>
            <span className={styles.labelLine} />
            About Me
          </span>

          <h2 className={`about-heading ${styles.heading}`}>
            Building the decentralized web,
            <br />
            one block at
            <br />
            <em>a time.</em>
          </h2>

          <div className={styles.stats}>
            {[
              // { num: totalExp, unit: "Years", desc: "of experience" },
              { num: "open source", unit: "contributions", desc: "AOSSIE" },
              { num: "5+", unit: "Projects", desc: "delivered live" },
              { num: "3", unit: "Cousre Certificates", desc: "WEBDEV/WEB3" },
            ].map((s) => (
              <div key={s.num} className={`about-stat ${styles.stat}`}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statUnit}>{s.unit}</span>
                <span className={styles.statDesc}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <p className={`about-text ${styles.body}`}>
            I'm a passionate Full-Stack and Blockchain Developer pursuing a
            B.Tech in Computer Science & Engineering at Galgotias College of
            Engineering and Technology, Greater Noida. I enjoy building scalable
            web applications, secure smart contracts, and intuitive user
            interfaces that combine great user experience with solid
            engineering.
          </p>

          <p className={`about-text ${styles.body}`}>
            My primary expertise includes React, Next.js, TypeScript, Node.js,
            Express, PostgreSQL, Prisma, Solidity, and modern Web3 technologies.
            Alongside blockchain development, I enjoy exploring AI-powered
            applications and integrating intelligent features into real-world
            products.
          </p>

          <p className={`about-text ${styles.body}`}>
            I'm an active open-source contributor and continuously work on
            improving my skills through personal projects, security research,
            and community contributions. I believe in writing clean,
            maintainable code, solving challenging problems, and continuously
            learning new technologies.
          </p>

          <p className={`about-text ${styles.body}`}>
            Currently, I'm focused on building production-ready applications,
            contributing to open source, strengthening my expertise in
            blockchain security, and preparing for software engineering
            opportunities where I can create impactful products and grow as an
            engineer.
          </p>
          {/* <p className={`about-text ${styles.body}`}>
            I&apos;m a frontend developer with a passion for crafting immersive,
            performant web experiences. With {totalExp} years of industry experience,
            I&apos;ve shipped production-grade applications across diverse sectors —
            from defense & drones to fintech & creative agencies.
          </p>

          <p className={`about-text ${styles.body}`}>
            Currently working as a <strong>Junior Frontend Developer</strong> at{" "}
            <a
              href="https://stuvio.digital"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Stuvio Digital Pvt. Ltd.
            </a>
            , Navi Mumbai. Previously at{" "}
            <a
              href="https://pixel6.co"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Pixel6 Web Studio
            </a>
            , Pune, where my work on RRP Drones was submitted for the{" "}
            <strong>Kyoorius Creative Awards</strong>.
          </p>

          <p className={`about-text ${styles.body}`}>
            I hold a B.Tech in Computer Science from IPS Academy, Indore (7.2 CGPA).
            I thrive at the intersection of design and engineering — sweating over
            animations, accessibility, and that last 1% of polish.
          </p> */}

          <div className={styles.links}>
            <a
              href="https://github.com/Rav1Chauhan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ravi-chauhan-/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://drive.google.com/file/d/1iO9NE_6uF6XBHu0bTWKxf8rB6R47CKbz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
