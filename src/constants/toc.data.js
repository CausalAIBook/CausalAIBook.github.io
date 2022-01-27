import src from "./src.data";

/* STRUCTURE:
  id: some unique id for the chapter
  title: chapter title
  number: chapter number -- null if none
  type: header / item
  prefix: ["name", "number"] -- null if none
  link: link to the pdf in src.data.js
  notebooks: ["id1", "id2", "id3"] list of notebook ids
  children: children of this header (only for headers! else null)
*/

export default [
  {
    id: "preface",
    title: "Preface",
    number: null,
    type: "header",
    prefix: null,
    link: src.Preface,
    notebooks: [],
    children: null,
  },
  {
    id: "core-material",
    title: "Core Material",
    number: null,
    type: "header",
    prefix: null,
    link: "",
    notebooks: [],
    children: [
      {
        id: "linear-regression",
        title: "Linear Regression in Moderately High Dimensions",
        number: 1,
        type: "item",
        prefix: ["Predictive Inference", "1"],
        link: src.Chapter1,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
      {
        id: "randomized-experiments",
        title: "Randomized Experiments",
        number: 2,
        type: "item",
        prefix: ["Causal Inference", "1"],
        link: src.Chapter2,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
          "ols-and-lasso-for-gender-wage-gap-inference",
        ],
      },
      {
        id: "high-dimensional-linear-regression",
        title: "Modern High Dimensional Linear Regression",
        number: 3,
        type: "item",
        prefix: ["Predictive Inference", "2A"],
        link: src.Chapter3,
        children: null,
        notebooks: null,
      },
      {
        id: "causal-identification",
        title: "Causal Identification via Conditional Exogeneity",
        number: 4,
        type: "item",
        prefix: ["Causal Inference", "2A"],
        link: src.Chapter4,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
      {
        id: "inference-on-predictive-and-causal-effects",
        title:
          "Inference on Predictive and Causal Effects in High Dimensional Linear Regression Models",
        number: 5,
        type: "item",
        prefix: ["Predictive Inference", "2B"],
        link: src.Chapter5,
        children: null,
        notebooks: ["dml-inference-for-gun-ownership"],
      },
      {
        id: "structural-equations",
        title: "Structural Equations and Conditional Exogeneity",
        number: 6,
        type: "item",
        prefix: ["Causal Inference", "2B"],
        link: src.Chapter6,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
      {
        id: "high-dimensional-nonlinear-regression",
        title: "Modern High Dimensional Nonlinear Regression",
        number: 7,
        type: "item",
        prefix: ["Predictive Inference", "3"],
        link: src.Chapter7,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
      {
        id: "causal-dags",
        title: "Causal DAGs, Markov Nets, Nonlinear SEMs",
        number: 8,
        type: "item",
        prefix: ["Causal Inference", "3"],
        link: src.Chapter8,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
      {
        id: "debaised-ml-inference",
        title:
          "Debiased ML Inference on Predictive and Causal Effects in Modern Nonlinear Regression Models",
        number: 9,
        type: "item",
        prefix: ["Predictive Inference", "4"],
        link: src.Chapter9,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
      {
        id: "deep-learning",
        title:
          "Feature Engineering With Deep Learning for Causal and Predictive Inference",
        number: 10,
        type: "item",
        prefix: ["Predictive Inference", "5"],
        link: src.Chapter10,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
    ],
  },
  {
    id: "advanced-core-material",
    title: "Advanced Core Material",
    number: null,
    type: "header",
    prefix: null,
    link: "",
    notebooks: [],
    children: [
      {
        id: "unobserved-confounders",
        title:
          "Unobserved Confounders, Instrumental Variables, and Proxy Controls",
        number: 11,
        type: "item",
        prefix: ["Advanced Core", "1"],
        link: src.Chapter11,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
      {
        id: "debaised-ml-for-iv",
        title:
          "Debiased ML for IV and Proxy Controls Models and Robust DML Inference under Weak Identification",
        number: 12,
        type: "item",
        prefix: ["Advanced Core", "2"],
        link: src.Chapter12,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
    ],
  },
  {
    id: "topics",
    title: "Topics",
    number: null,
    type: "header",
    prefix: null,
    link: "",
    notebooks: [],
    children: [
      {
        id: "inference-on-heterogeneous-treatment-effects",
        title: "Inference on Heterogeneous Treatment Effects",
        number: 13,
        type: "item",
        prefix: ["Topics", "1"],
        link: src.Chapter13,
        children: null,
        notebooks: [
          "dml-for-conditional-average-treatment-effect",
          "dml-for-ate-and-late-of-401k-on-wealth",
        ],
      },
    ],
  },
];
