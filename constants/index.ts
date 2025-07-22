import { FaYoutube, FaFacebook, FaStethoscope, FaSyringe, FaHeartbeat, FaUserMd, FaMicroscope, FaPills, FaAmbulance, FaHospital } from "react-icons/fa";
import { FaDna, FaXRay, FaLungs, FaBrain, FaEye, FaTooth } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Electronic Health Records",
    image: "emr.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical AI",
    image: "medical-ai.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Telemedicine",
    image: "telemedicine.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Clinical Decision Support",
    image: "clinical-support.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical Imaging",
    image: "medical-imaging.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Patient Management",
    image: "patient-management.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Health Analytics",
    image: "health-analytics.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical Devices",
    image: "medical-devices.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HIPAA Compliance",
    image: "hipaa.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Diagnostic Tools",
    image: "diagnostic.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pharmacy Systems",
    image: "pharmacy.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical Research",
    image: "research.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Biomedical Data",
    image: "biodata.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/drsarahchen",
  },
  {
    name: "Research Gate",
    icon: FaMicroscope,
    link: "https://researchgate.net",
  },
  {
    name: "Medical Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/drsarahchen",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Patient Portals",
    image: "patient-portal.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical UI/UX",
    image: "medical-ui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Clinical Dashboards",
    image: "clinical-dashboard.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Health Monitoring",
    image: "health-monitor.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical Forms",
    image: "medical-forms.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Appointment Systems",
    image: "appointments.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical Charts",
    image: "medical-charts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Lab Results",
    image: "lab-results.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Prescription Management",
    image: "prescriptions.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Telehealth Interface",
    image: "telehealth.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "HL7 FHIR",
    image: "fhir.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Medical APIs",
    image: "medical-api.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Clinical Databases",
    image: "clinical-db.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "DICOM Systems",
    image: "dicom.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Medical Cloud",
    image: "medical-cloud.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Health Data Security",
    image: "health-security.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Medical Integration",
    image: "medical-integration.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Clinical Workflows",
    image: "clinical-workflow.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Mobile Health Apps",
    image: "mobile-health.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Medical IoT",
    image: "medical-iot.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Healthcare DevOps",
    image: "healthcare-devops.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Medical Design",
    image: "medical-design.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Medical Machine Learning",
    image: "medical-ml.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI-Powered Diagnostic Platform",
    description:
      'Revolutionary diagnostic platform leveraging artificial intelligence to assist healthcare professionals in making accurate diagnoses. Features advanced medical imaging analysis, symptom correlation algorithms, and integration with major EMR systems for seamless clinical workflow.',
    image: "/projects/medical-ai-platform.png",
    link: "https://medical-ai-platform.com",
  },
  {
    title: "Telemedicine Solution Suite",
    description:
      'Comprehensive telemedicine platform enabling secure video consultations, remote patient monitoring, and digital prescription management. Built with HIPAA compliance, real-time vital sign integration, and multi-device accessibility for both patients and healthcare providers.',
    image: "/projects/telemedicine-suite.png",
    link: "https://telehealth-suite.com",
  },
  {
    title: "Smart Hospital Management System",
    description:
      'Integrated hospital management system featuring patient flow optimization, resource allocation algorithms, and predictive analytics for bed management. Includes modules for staff scheduling, inventory management, and real-time emergency response coordination.',
    image: "/projects/hospital-management.png",
    link: "https://smart-hospital-system.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Medical Community",
    data: [
      {
        name: "Medical Research",
        icon: FaMicroscope,
        link: "https://researchgate.net",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/drsarahchen",
      },
      {
        name: "Medical Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/medical-tech",
      },
    ],
  },
  {
    title: "Professional Network",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/drsarahchen",
      },
      {
        name: "Medical Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/drsarahchen",
      },
      {
        name: "Healthcare Forum",
        icon: FaHospital,
        link: "https://healthcare-forum.com",
      },
    ],
  },
  {
    title: "Services",
    data: [
      {
        name: "Medical Consulting",
        icon: null,
        link: "https://medical-consulting.com",
      },
      {
        name: "Health Tech Solutions",
        icon: null,
        link: "https://healthtech-solutions.com",
      },
      {
        name: "Contact",
        icon: null,
        link: "mailto:dr.sarah.chen@medtech.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Expertise",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/drsarahchen/medical-portfolio",
};