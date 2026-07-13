// Portfolio data extracted from resume
export const personalInfo = {
    name: "Hammad Khan",
    title: "Data Scientist",
    email: "ak655796@gmail.com",
    phone: "+92 333 6974911",
    location: "Lahore",
    linkedin: "https://www.linkedin.com/in/hammad-khan2905",
    github: "https://github.com/HammadKhan999",
    portfolio: "https://hammad-portfolio-eight.vercel.app/",
};

export const summary = `Data Scientist with 3+ years experience in data science, automation, and data engineering. Skilled in MLOps, machine learning, API integrations, and data analytics, with experience in building and deploying AI-driven solutions using Streamlit, cloud platforms, and CI/CD pipelines. Proficient in developing interactive dashboards and automating workflows to drive efficiency. Passionate about leveraging technology to solve complex problems, optimize processes, and enable data-driven decision-making.`;

export const skills = {
    "Machine Learning & AI": [
        "Machine Learning",
        "MLOps",
        "NLP",
        "Agentic AI Development",
    ],
    "Data Engineering": ["BigQuery", "MongoDB", "Supabase", "Railway"],
    "Programming Languages": ["Python", "JavaScript", "HTML/CSS"],
    "Data Analytics": ["Data Analytics", "Data Analysis"],
    "Tools & Frameworks": [
        "TensorFlow",
        "Streamlit",
        "CrewAI",
        "n8n",
        "Figma",
        "wandb (ML Pipelines)",
        "LIME (Explainable AI)",
    ],
    "Visualization": ["Tableau", "Power BI", "Looker Studio"],
    "Cloud & DevOps": [
        "GitHub / GitHub Actions",
        "Railway",
        "Google Appscript",
    ],
    "Databases": ["BigQuery", "MongoDB", "Supabase"],
    "Other": ["Python Scripting", "API Development", "OpenAI SDK", "MS Office"],
};

export const experience = [
    {
        id: 1,
        company: "Codebricks Global",
        position: "Data Scientist",
        location: "",
        duration: "2026 Apr - Present",
        status: "current",
        achievements: [
            "Clean and analyze large-scale sensory datasets using Python, Pandas, and SQL to generate consumer and market insights.",
            "Automated sensory data cleaning and preprocessing workflows by developing Python scripts with AI-assisted development tools such as Claude, reducing manual processing time by 30%-40%.",
            "Applied PCA, Preference Mapping (PrefMap), and statistical analysis to identify key sensory drivers and consumer preference patterns.",
            "Trained and evaluated Random Forest models for Drivers of Liking (DoL) prediction and sensory attribute importance analysis.",
            "Built an AI-powered conversational analytics agent using CrewAI, FastAPI, and LLM to enable natural language querying of survey and sensory data.",
        ],
    },
    {
        id: 2,
        company: "Techbaltoro LLC",
        position: "Acting Lead Data Science and Engineering",
        location: "Islamabad, Pakistan",
        duration: "2023 Dec - 2026 Apr",
        status: "past",
        achievements: [
            "Led BI and data team of 3 members, managing daily operations, sprint planning, and task prioritization.",
            "Collaborated with cross-functional teams to gather requirements and translate them into scalable technical solutions.",
            "Designed, built, and maintained ETL pipelines for daily, weekly, and peak-season reporting.",
            "Automated product data pipelines using Keepa API, Amazon SP API, Google Sheets API, and Python, improving research efficiency.",
            "Developed and deployed ML pipelines, including an Amazon product classification model with explainability (LIME) and tracking via MLflow.",
            "Built and launched a Streamlit-based MVP integrating product analytics, classification, and BSR forecasting (Facebook Prophet).",
            "Researched and implemented tools (e.g., n8n, DagsHub, Odoo) to enhance operational workflows and automation capabilities.",
            "Built automation workflows for supplier due diligence using n8n, reducing onboarding time by 70%.",
            "Automated financial reporting and closing processes across multiple Amazon channels, reducing manual effort and cutting closing time by 50%.",
            "Designed dashboards in Looker Studio for reimbursement tracking and team performance, improving financial and operational visibility.",
            "Engineered a stock file evaluation system using Python, GCP, and CI/CD pipelines, reducing processing time by 80%.",
            "Led development of the eCrew Calculator (Chrome extension) for real-time margin analysis and decision-making.",
            "Designed BigQuery database schema and developed RESTful APIs; deployed backend using Supabase on Railway.",
            "Developed automated backup solutions for internal systems, ensuring data reliability and continuity.",
        ],
    },
    {
        id: 3,
        company: "Convergent Business Technologies",
        position: "Trainee Data Analytics",
        location: "Islamabad",
        duration: "2023 Jul - 2023 Oct",
        status: "past",
        achievements: [
            "Databases | Data Preprocessing | Scrum | Data Analytics | Statistical Learning | SQL | C | Tableau | Problem Solving | Presentation Skills",
        ],
    },
    {
        id: 4,
        company: "Fiverr",
        position: "Professional Freelancer",
        location: "",
        duration: "2022 - 2023",
        status: "past",
        achievements: [
            "Worked with clients in different domains, such as WordPress web development, Data Management, and Python programming.",
        ],
    },
];

export const projects = [
    {
        id: 1,
        name: "DataIntel Hub",
        category: "Professional",
        tags: ["AI", "Multi-Agent", "React", "Python", "CrewAI"],
        description:
            "Led the design of the CrewAI multi-agent system for DataIntel Hub at 3 day hackfest 3.0 by RemoteBase, enabling automated data analysis and visualization. Collaborated with the team to create a platform that delivers instant insights, boosting efficiency for both SMBs and enterprises.",
        technologies: ["React", "Python", "CrewAI", "Render"],
        github: "",
        demo: "",
        featured: true,
    },
    {
        id: 2,
        name: "Energy Signature Forecasting",
        category: "Academic",
        tags: ["Machine Learning", "Forecasting", "Python"],
        description: "Building energy signature, measurement, recording and forecasting (Final Year Project)",
    },
    {
        id: 3,
        name: "Hospital Readmission Prediction",
        category: "Academic",
        tags: ["Machine Learning", "Healthcare", "Python"],
        description: "Predict and reduce readmission rate in hospitals using predictive modeling",
    },
    {
        id: 4,
        name: "University Management System",
        category: "Academic",
        tags: ["Web Development", "Database", "Python"],
        description: "University management system using tkinter, MySQL and Python",
    },
    {
        id: 5,
        name: "Rotating Shaft Unbalancing Detection",
        category: "Academic",
        tags: ["Machine Learning", "CNN", "Vibration Analysis"],
        description: "Random forest and CNN model for detection of unbalancing of rotating shaft using vibration data",
    },
];

export const certifications = [
    {
        id: 1,
        name: "Certified Robotics And Agentic Engineer (1.5 Years)",
        issuer: "Presidential Initiative for Artificial Intelligence and Robotics",
        date: "Current",
        description:
            "Cleared the first quarter, dedicated to modern AI development using Python. Currently, I am enrolled in the second quarter, concentrated on the OpenAI agent SDK.",
        link: "",
        featured: true,
    },
    {
        id: 2,
        name: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "2024",
        description:
            "I passed the Microsoft Azure AI Fundamentals certification (AI-900), which validates my knowledge of core AI concepts and how they are applied using Microsoft Azure.",
        link: "",
        featured: true,
    },
    {
        id: 3,
        name: "Muti-Agent AI systems with CrewAI",
        issuer: "Deeplearning.ai",
        date: "2024",
        description:
            "Gained practical knowledge of CrewAI framework and developed multiple multi-agent systems for different use cases leveraging CrewAI core elements",
        link: "",
        featured: true,
    },
    {
        id: 4,
        name: "The Data Science Course: Complete Data Science Bootcamp 2025",
        issuer: "365 Careers (Udemy)",
        date: "2024",
        description:
            "Gained expertise in data science, including statistical analysis, Python programming, Machine Learning, Deep Learning (TensorFlow), and data visualization (Tableau).",
        link: "",
        featured: false,
    },
    {
        id: 5,
        name: "British Airways Data Science Job Simulation on Forage",
        issuer: "Forage",
        date: "February 2023",
        description:
            "Built a predictive model to understand factors that influence buying behavior",
        link: "",
        featured: false,
    },
    {
        id: 6,
        name: "PwC Switzerland Power BI Job Simulation on Forage",
        issuer: "Forage",
        date: "2023",
        description:
            "Built dashboards to get insights on call center trends, Customer Retention, Diversity & Inclusion using visualizations and DAX queries",
        link: "",
        featured: false,
    },
    {
        id: 7,
        name: "Advanced Learning Algorithms",
        issuer: "Coursera",
        date: "2023",
        description:
            "Gained practical knowledge of neural networks, tuning of neural networks, evaluation of neural networks, Decision trees, Random forests, XGBoost, etc.",
        link: "",
        featured: false,
    },
    {
        id: 8,
        name: "Data Engineer Career Track",
        issuer: "Datacamp",
        date: "2023",
        description:
            "Completed 8 courses of career track covering aspects of data engineering techniques and tools",
        link: "",
        featured: false,
    },
    {
        id: 9,
        name: "One Million Prompters (Prompt Engineering)",
        issuer: "Dubai.ai",
        date: "2023",
        description:
            "Developed skills in prompt engineering for AI systems for efficient and accurate results",
        link: "",
        featured: false,
    },
    {
        id: 10,
        name: "IELTS Academic",
        issuer: "British Council",
        date: "2023",
        description: "Overall Band: 7.5 | CEFR Level: C1",
        link: "",
        featured: false,
    },
];

export const education = {
    degree: "Bachelor of Computer engineering (BCE)",
    institution: "Air University",
    location: "Islamabad",
    duration: "2019 - 2023",
    relevantCourses: [
        "Operating Systems",
        "Database",
        "Artificial Intelligence",
        "Machine Learning",
        "Software Engineering",
    ],
};

export const courses = [
    "CS50",
    "SQL for Data Analysis",
    "The Scrum Guide",
    "Introduction to Statistic Learning in Python",
    "Figma Course",
    "Non-Designer's Design Book",
    "Data Visualization and Communication with Tableau",
    "Client Needs and Software Requirements",
];

export const interests = ["Technology", "Football", "Book Reading", "Gaming"];

export const languages = [
    { name: "English", proficiency: "C1, IELTS" },
    { name: "Urdu", proficiency: "Native" },
];
