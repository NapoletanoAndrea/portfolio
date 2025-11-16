const projects = {
  calendar: {
    name: "Calendario",
    description: `Applicazione full stack che permette agli utenti di creare task,
      con possibilità di aggiungere commenti, allegare file e segnare il tempo lavorato
      su un calendario. Tutti i dati sono scaricabili in formato Excel.`,
    long_description: "",
    features: `
    * Autenticazione con token JWT
    * Autenticazione 2fa
    * Database relazionale Postgres
    * Query ottimizzate attraverso pagination e filtri
    * Possibilità di filtrare e scaricare le informazioni filtrate in formato Excel
    * `,
  },
  autodotnet: {
    name: "Calendario",
    description: `Applicazione full stack che permette agli utenti di creare task,
      con possibilità di aggiungere commenti, allegare file e segnare il tempo lavorato
      su un calendario. Tutti i dati sono scaricabili in formato Excel.`,
    long_description: "",
    features: `
    * Autenticazione con token JWT
    * Autenticazione 2fa
    * Database relazionale Postgres
    * Query ottimizzate attraverso pagination e filtri
    * Possibilità di filtrare e scaricare le informazioni filtrate in formato Excel
    * `,
  },
} as const;

export default projects;
