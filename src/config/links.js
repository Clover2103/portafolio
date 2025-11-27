// src/config/links.js

// ================================
//   WHATSAPP
// ================================
export const WHATSAPP_LINK = import.meta.env.VITE_WHATSAPP;

// ================================
//   EMAIL (GMAIL COMPOSE)
// ================================
export const EMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${
  import.meta.env.VITE_EMAIL_DESTINO
}&su=${
  import.meta.env.VITE_EMAIL_ASUNTO
}&body=${
  import.meta.env.VITE_EMAIL_MENSAJE
}`;

// ================================
//   LINKEDIN
// ================================
export const LINKEDIN_LINK = import.meta.env.VITE_LINKEDIN;

// ================================
//   GITHUB REPOS
// ================================
export const GITHUB_REPOS = {
  vigiempleo: import.meta.env.VITE_VIGIEMPLEO_GITHUB,
  aiexocp: import.meta.env.VITE_AIEXOCP_GITHUB,
  cognoseguridad: import.meta.env.VITE_COGNOSEGURIDAD_GITHUB,
  conasegur: import.meta.env.VITE_CONASEGUR_GITHUB,
  clubdetiro: import.meta.env.VITE_CLUBDETIRO_GITHUB,
};

// ================================
//   WEB PAGES
// ================================
export const WEB_PAGES = {
  spg: import.meta.env.VITE_SPG_PAGE,
  conasegur: import.meta.env.VITE_CONASEGUR_PAGE,
  aiexocp: import.meta.env.VITE_AIEXOCP_PAGE,
  aiexsst: import.meta.env.VITE_AIEXSST_PAGE,
  clubdetiro: import.meta.env.VITE_CLUBDETIRO_PAGE,
  cognoseguridad: import.meta.env.VITE_COGNOSEGURIDAD_PAGE,
  funhumac: import.meta.env.VITE_FUNHUMAC_PAGE,
  vialseguridad: import.meta.env.VITE_VIALSEGURIDAD_PAGE,
  vigiempleo: import.meta.env.VITE_VIGIEMPLEO_PAGE,
  isme: import.meta.env.VITE_ISME_PAGE,
};
