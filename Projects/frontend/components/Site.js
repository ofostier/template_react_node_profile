import react, {useState} from "react";
import { motion } from "framer-motion"
import styled from 'styled-components';
import ReactMarkdown from "react-markdown";

export default function site({ page }) {

  const [markDown, setMarkDown] = useState();
  //const md = require("../README.txt");
  //const md = fetch("http://localhost:9999/public/README.txt");
  //console.log(md)
  //const md = getMk("YEAAA");
  //console.log(md);

  function getMarkDown (){

    fetch('https://raw.githubusercontent.com/ofostier/template_react_node_profile/started/Projects/frontend/README.md')
    .then((r) => r.text())
    .then(text  => {
      //console.log(text);
      setMarkDown(text); 
      //return text
    }).catch (console.error);
  } 
  const md = getMarkDown();
  //console.log(markDown);
  // console.log(data, error, loading);
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error: {error.message}</p>;
  return (
    
      // TODO: [TRNP-4] Render README.md on the Home page
    <div>
      Hey ! You are at home ... Or not !!
      <ReactMarkdown source={markDown} />
    </div>
    
  );
}
