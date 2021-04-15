import react, {useState} from "react";
import { motion } from "framer-motion"
import styled from 'styled-components';
import ReactMarkdown from "react-markdown";
//import {markdown} from '../public/README.txt';



//const markDown = import('../public/README.md');
const DivAnimation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  position: relative;
`;

const Box = styled(motion.div)`
  background: black;
  border-radius: 30px;
  width: 10px; 
  height: 10px;
`;

export const Example = () => <Box 
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
    repeatDelay: 1
  }}
/>;

export const MyAnimation = () => (
  <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
)



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
      <DivAnimation>
        <Example></Example>
      </DivAnimation>
      Hey ! You are at home ... Or not !!
      <ReactMarkdown source={markDown} />
    </div>
    
  );
}
