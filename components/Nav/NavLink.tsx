import Link from "next/link";
import { motion } from "framer-motion"
import { useRouter } from "next/router";

const NavLink = (props: any) => {
  const router = useRouter();
  const isActiveLink = () => {
    return router.asPath === props.linkTo
      ? "text-orange-500 scale-125 origin-left lg:origin-center"
      : "text-orange-200 hover:underline";
  };

  return (
    <motion.li
      className={`${isActiveLink()} w-max text-2xl duration-100 decoration-2 decoration-orange-500 underline-offset-8`}
    >
      <Link href={props.linkTo}>
        <a className="">
          {props.linkText}
        </a>
      </Link>
    </motion.li>
  );
};

export default NavLink;
