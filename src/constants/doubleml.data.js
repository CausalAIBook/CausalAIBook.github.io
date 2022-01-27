import src from "constants/src.data";
import { FaBook, FaGithub } from "react-icons/fa";

export default {
  links: [
    {
      name: "Docs",
      path: src.DoubleMLLink,
      icon: <FaBook />,
    },
    {
      name: "GitHub",
      path: src.DoubleMLGitHubLink,
      icon: <FaGithub />,
    },
  ],
  description:
    "The Python and R package DoubleML provide an implementation of the double / debiased machine learning framework of Chernozhukov et al. (2018). The Python package is built on top of scikit-learn (Pedregosa et al., 2011) and the R package on top of mlr3 and the mlr3 ecosystem (Lang et al., 2019).",
};
