"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import ProjectCard from "@/components/projectCard";
import { myprojectCards } from "@/constants/projectsCards.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes } from "@fortawesome/free-solid-svg-icons";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Projects() {
  // const [projects, setProjects] = useState(myprojectCards);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"projects page_" + currentLang}>
      <Header route={"/project"} />
      <section className="parallax__layer standard_margin">
        <div className="flex flex-col sm:gap-4 md:gap-4">
          <h2 className="text-left">{t("project.Intro.sectionTitle")}</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
            <p className="basis-3/4">{t("project.Intro.sectionBody")}</p>
            <h4 className="basis-1/4 font-semibold mt-4 md:mt-0 text-white">
              {t("project.Intro.sectionHighlight")}
            </h4>
          </div>
        </div>
      </section>
      <section className="standard_margin">
        <h2 className="text-left text-white">{t("project.Goals.sectionTitle")}</h2>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 md:gap-12">
          <div className="card_goals bg-black text-center padding_card_highlight">
            <FontAwesomeIcon icon={faCircleNodes} className="icon_circle" />
            <div>
              <h3 > {t("project.Goals.Goal1.GoalTitle")}</h3>
              <p className=""> {t("project.Goals.Goal1.GoalBody")}</p>
            </div>
          </div>
          <div className="card_goals bg-black text-center padding_card_highlight">
            <FontAwesomeIcon icon={faGrip} className="icon_circle" />
            <div>
              <h3> {t("project.Goals.Goal2.GoalTitle")}</h3>
              <p className=""> {t("project.Goals.Goal2.GoalBody")}</p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="standard_margin">
      <div className="flex flex-col sm:gap-4 md:gap-4">
          <h2 className="text-left">{t("project.Impact.sectionTitle")}</h2>
            <p className="sm:basis-3/4">{t("project.Impact.sectionBody")}</p>
        </div>
      </section>
      <div className="banner px-4 sm:px-8 md:px-14 md:py-2 lg:px-24 lg:py-4 xl:px-28 xl:py-4 2xl:px-32 2xl:py-6">
        <h1> {t("projects.title")}</h1>
      </div>
      <main>
        <section className="lg:mx-36 md:mx-14 sm:mx-8 my-4 sm:my-4 md:my-8 lg:my-12 xl:my-16 2xl:my-20 mx-4 xl:mx-44 2xl:mx-60">
          <ProjectCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}

const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link href={props.route}>{props.children}</Link>
  );
};
