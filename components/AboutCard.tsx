import Image from "next/image";
import { FunctionComponent, MouseEvent, useEffect, useState } from "react";
import styles from "../styles/AboutCard.module.css";

interface AboutCardProps {
  title: string;
  detail: string;
  image: string;
  color: string;
  border: string;
  className: string;
}

const AboutCard: FunctionComponent<AboutCardProps> = ({
  title,
  detail,
  image,
  color,
  border,
  className,
}) => {
  const [onHover, setOnHover] = useState(false);
  const onMouseOver = (event: any) => {
    setOnHover(true);
  };

  return (
    <div
      className={`flex dark:border-gray-300 dark:bg-inherit w-3/4 max-w-md rounded-lg p-2 md:my-3  min-h-fit border border-gray-600 items-center ${border} hover:cursor-default ${styles.aboutCard} ${className} my-1 transition-all [transition-duration:200ms]`}
      onMouseOver={onMouseOver}
      onMouseOut={() => setOnHover(false)}
    >
      <div className="h-fit w-28 max-w-xs m-2">
        <Image
          src={image}
          height={500}
          width={500}
          layout="responsive"
          alt={title + " card"}
        />
      </div>
      <div className="flex flex-col h-fit  justify-around">
        <div
          className={`text-base sm:text-lg md:text-2xl md:m-3 font-medium ${
            onHover ? color : "dark:text-gray-200 text-gray-900"
          }`}
        >
          {title}
        </div>
        <hr className="border-gray-500 " />
        <div
          className={`text-sm sm:text-base md:text-lg md:m-3  ${
            onHover
              ? "dark:text-gray-300 text-gray-700"
              : "dark:text-gray-400 text-gray-900"
          } `}
        >
          {detail}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
