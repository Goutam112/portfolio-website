/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { social } from "../constants";

const SocialCard = ({ index, name, tag, logo }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-[290px]"
  >
    <div className="mt-1 items-center ">
      <img
        src={logo}
        alt={`feedback_by-${name}`}
        className="w-[100px] h-[100px] rounded-full object-cover self-center mx-auto"
      />
      <p className="text-white tracking-wider text-[18px] mt-7">{name}</p>
      <div className="mt-2 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {tag}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Social = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Online Presence</p>
          <h2 className={styles.sectionHeadText}>Social.</h2>
        </motion.div>
      </div>
      <div
        className={`sm:-mt-20 -mt-[125px] pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {social.map((social, index) => (
          <a
            key={social.name}
            target="_blank"
            rel="noreferrer"
            href={social.link}
          >
            <SocialCard index={index} {...social} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Social, "social");
