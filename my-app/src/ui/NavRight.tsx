"use client";

import { AiFillHeart } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import Theme from "./Theme";
import { FC } from "react";

export default function NavRight() {
  return (
    <div className="flex gap-3">
      <Icons Icon={AiFillHeart} />
      <Icons Icon={BsFillSunFill} />
      <Icons Icon={FcGoogle} />
      <Theme />
    </div>
  );
}

interface IProps {
  Icon: FC;
}

function Icons({ Icon }: IProps) {
  return (
    <motion.span className="h-[30px] flex items-center justify-center w-[30px] rounded-full bg-gray-500">
      <Icon />
    </motion.span>
  );
}
