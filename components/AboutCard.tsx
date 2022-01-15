import Image from "next/image";
import { FunctionComponent, MouseEvent, useState } from "react";
import styles from "../styles/AboutCard.module.css";

interface AboutCardProps {
  title: string;
  detail: string;
  image: string;
}

const AboutCard: FunctionComponent<AboutCardProps> = ({
  title,
  detail,
  image,
}) => {
  const [onHover, setOnHover] = useState(false);
  const onMouseOver = (event: any) => {
    setOnHover(true);
  };
  return (
    <div
      className={`flex dark:border-gray-300 dark:bg-inherit w-3/4 max-w-md rounded-lg p-2 m-2 h-32 border border-gray-600 items-center hover:border-green-700 dark:hover:border-green-400 hover:cursor-default ${styles.aboutCard}`}
      onMouseOver={onMouseOver}
      onMouseOut={() => setOnHover(false)}
    >
      <div className="h-fit w-28 max-w-xs m-2">
        <Image src={image} height={500} width={500} layout="responsive" />
      </div>
      <div className="flex flex-col h-full  justify-around">
        <div
          className={`text-lg font-medium ${onHover ? "text-green-400" : null}`}
        >
          {title}
        </div>
        <hr className="border-gray-500 " />
        <div className={`text-gray-400 ${onHover ? "text-green-400" : null} `}>
          {detail}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
