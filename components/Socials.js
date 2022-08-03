import Link from 'next/link';
import {
  FaGithub,
  FaGitlab,
  FaKeybase,
  FaLinkedin,
  FaStackExchange,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Socials() {
  return (
    <div className="flex justify-between text-xl text-slate-600 dark:text-slate-300">
      <a href='https://www.linkedin.com/in/atri-hegde-8a37a5215/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
      <a href='https://www.github.com/hegde-atri' target='_blank' rel="noreferrer"><FaGithub /></a>
      <a href='https://www.gitlab.com/hegde-atri' target='_blank' rel="noreferrer"><FaGitlab /></a>
      <a href='https://www.keybase.io/hegde_atri' target='_blank' rel="noreferrer"><FaKeybase /></a>
      <a href='https://www.youtube.com/channel/UCHZwj1GpsDQ3B9S5VjeY36A' target='_blank' rel="noreferrer"><FaYoutube /></a>
      <a href='https://stackoverflow.com/users/15020804/atri-hegde' target='_blank' rel="noreferrer"><FaStackOverflow /></a>
      <a href='mailto:atri@hegdeatri.com'><HiOutlineMail /></a>
      
    </div>
  );
}
