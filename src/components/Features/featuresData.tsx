import { FaRobot, FaCode, FaTools, FaBrain, FaMicrochip, FaIndustry } from 'react-icons/fa';
import { GiAtom } from 'react-icons/gi';

const featuresData = [
  {
    id: 1,
    icon: <FaRobot size={40} className="text-blue-500" />, // Example of using react-icons with a color class
    title: "Professional Robotics Design",
    paragraph:
      "We excel in creative and precise robotics design, from concept to prototype. Our solutions meet the highest standards for functionality and efficiency, whether for custom applications or scalable industrial needs, emphasizing innovation and reliability.",    
  },
  {
    id: 2,
    icon: <FaCode size={40} className="text-green-500" />,
    title: "Advanced Programming Solutions",
    paragraph:
      "We offer advanced programming tailored to diverse industry demands, from robust control algorithms to AI-driven decision systems. Our focus on efficiency and performance optimization ensures robots operate with precision and adaptability, driving client operational excellence.",
  },
  {
    id: 3,
    icon: <FaTools size={40} className="text-yellow-500" />,
    title: "Robust Maintenance Services",
    paragraph:
      "Beyond deployment, we provide comprehensive maintenance ensuring peak robotic performance. Through proactive monitoring, inspections, and timely repairs, we minimize downtime, tailor protocols to unique system needs, and deliver reliability.",
  },
  {
    id: 4,
    icon: <FaBrain size={40} className="text-purple-500" />,
    title: "Expertise in AI Integration",
    paragraph:
      "Seamless AI integration enhances robotic capabilities with adaptive learning and real-time data analysis. Our AI expertise empowers robots to autonomously make informed decisions, boosting efficiency and productivity across applications.",
  },
  {
    id: 5,
    icon: <GiAtom size={40} className="text-red-500" />,
    title: "Leaders in Nanotechnology Development",
    paragraph:
      "Pioneering nanotechnology advancements in robotics, we innovate nano-scale sensors and manufacturing techniques. Our nano-materials and devices create durable, efficient robotic components, redefining industry standards.",
  },
  {
    id: 6,
    icon: <FaIndustry size={40} className="text-indigo-500" />,
    title: "Industrial Automation Pioneers",
    paragraph:
      "With a track record in transforming manufacturing processes, from assembly lines to logistics automation, we optimize workflows and boost productivity. Our advanced robotics and automation solutions streamline operations, cut costs, and foster sustainable growth.",
  },
];

export default featuresData;
