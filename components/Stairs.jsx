import { motion } from 'framer-motion'

//variants
const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    }
  };

  const reverseIndex = (index) => {
    const totalSteps = 8;
    return totalSteps - index - 1;
  };

const Stairs = () => {
  
  return (
    <>
      
      
      
      
    {[...Array(8)].map((_, index) => {
        return (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-screen w-screen bg-white relative"
        />
        );
      })}
    </>
  )
}
{/*36:18*/}
export default Stairs
