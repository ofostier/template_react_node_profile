import * as React from "react";
import { motion } from "framer-motion"
import styled from 'styled-components';

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

  // console.log(data, error, loading);
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error: {error.message}</p>;
  return (
    
    <div>
      
      <DivAnimation>
        <Example></Example>
      </DivAnimation>
      Hey ! You are at home ... Or not !!
      <h2>Next Steps Backlog :</h2>
      <p>- Password Change on user account</p>
      <p>- Password Reset Form</p>
      <p>- Roles</p>
    </div>
    
  );
}
