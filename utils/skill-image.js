import bootstrap from '/public/svg/skills/bootstrap.svg';
import capacitorjs from '/public/svg/skills/capacitorjs.svg';
import css from '/public/svg/skills/css.svg';
import firebase from '/public/svg/skills/firebase.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import ionic from '/public/svg/skills/ionic.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'capacitorjs':
      return capacitorjs;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'ionic':
      return ionic;
    case 'canva':
      return canva;
    default:
      break;
  }
}
