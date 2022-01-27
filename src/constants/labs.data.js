import src from "constants/src.data";

/* STRUCTURE:
  id: some unique id for the notebook
  title: notebook title
  description: description of the notebook (not too long)
  site: src link to the logo of the used plattform
  lab: src link to the logo of the used language
  link: link to the notebook
*/

export default [
  {
    id: "dml-for-conditional-average-treatment-effect",
    title: "DML for Conditional Average Treatment Effect",
    description:
      "This is a simple demonstration of Debiased Machine Learning estimator for the Conditional Average Treatment Effect. Goal is to estimate the effect of 401(k) eligibility on net financial assets for each value of income. ",
    site: src.Kaggle,
    lab: src.R,
    link: "https://www.kaggle.com/victorchernozhukov/dml-for-conditional-average-treatment-effect?scriptVersionId=66048820",
  },
  {
    id: "dml-for-ate-and-late-of-401k-on-wealth",
    title: "DML for ATE and LATE of 401(k) on Wealth",
    description:
      "As a practical illustration of the methods developed in this lecture, we consider estimation of the effect of 401(k) eligibility and participation on accumulated assets. 401(k) plans are pension accounts sponsored by employers.",
    site: src.Colab,
    lab: src.Python,
    link: "https://www.kaggle.com/janniskueck/dml-for-ate-and-late-of-401-k-on-wealth?scriptVersionId=57642758",
  },
  {
    id: "dml-inference-for-gun-ownership",
    title: "DML inference for gun ownership",
    description:
      "A Case Study: The Effect of Gun Ownership on Gun-Homicide Rates. Since our goal is to estimate the effect of gun ownership after controlling for a rich set county characteristics, we next include the controls.",
    site: src.Kaggle,
    lab: src.Python,
    link: "https://www.kaggle.com/janniskueck/dml-inference-for-gun-ownership",
  },
  {
    id: "ols-and-lasso-for-gender-wage-gap-inference",
    title: "OLS and lasso for gender wage gap inference",
    description:
      "What is the difference in predicted wages between men and women with the same job-relevant characteristics?",
    site: src.Colab,
    lab: src.R,
    link: "https://www.kaggle.com/janniskueck/ols-and-lasso-for-gender-wage-gap-inference",
  },
  {
    id: 5,
    title: "DML for Conditional Average Treatment Effect",
    description:
      "This is a simple demonstration of Debiased Machine Learning estimator for the Conditional Average Treatment Effect. Goal is to estimate the effect of 401(k) eligibility on net financial assets for each value of income",
    site: src.Kaggle,
    lab: src.R,
    link: "https://www.kaggle.com/victorchernozhukov/dml-for-conditional-average-treatment-effect?scriptVersionId=66048820",
  },
  {
    id: 6,
    title: "DML for ATE and LATE of 401(k) on Wealth",
    description:
      "As a practical illustration of the methods developed in this lecture, we consider estimation of the effect of 401(k) eligibility and participation on accumulated assets. 401(k) plans are pension accounts sponsored by employers.",
    site: src.Colab,
    lab: src.Python,
    link: "https://www.kaggle.com/janniskueck/dml-for-ate-and-late-of-401-k-on-wealth?scriptVersionId=57642758",
  },
  {
    id: 7,
    title: "DML inference for gun ownership",
    description:
      "A Case Study: The Effect of Gun Ownership on Gun-Homicide Rates. Since our goal is to estimate the effect of gun ownership after controlling for a rich set county characteristics, we next include the controls.",
    site: src.Kaggle,
    lab: src.Python,
    link: "https://www.kaggle.com/janniskueck/dml-inference-for-gun-ownership",
  },
  {
    id: 8,
    title: "OLS and lasso for gender wage gap inference",
    description:
      "What is the difference in predicted wages between men and women with the same job-relevant characteristics?",
    site: src.Colab,
    lab: src.R,
    link: "https://www.kaggle.com/janniskueck/ols-and-lasso-for-gender-wage-gap-inference",
  },
];
