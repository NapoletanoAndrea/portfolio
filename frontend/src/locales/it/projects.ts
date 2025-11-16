const projects = {
  calendar: {
    name: "Calendario",
    description: `Applicazione full stack che permette agli utenti di creare task,
      con possibilità di aggiungere commenti, allegare file e segnare il tempo lavorato
      su un calendario. Tutti i dati sono scaricabili in formato Excel.`,

    long_description: `L'app Calendario è più un Task Manager che altro, permette agli utenti di creare Task con categorie e campi molto specifici all'azienda, cosa che non sarebbe stata possibile con strumenti già preesistenti.

    Il backend è stato realizzato con Django e il frontend con React.

    Il progetto presenta le seguenti features:
    
    `,
    features: `* Autenticazione con token JWT<br><br>
    * Autenticazione 2fa<br><br>
    * Database relazionale Postgres<br><br>
    * Query ottimizzate attraverso pagination e filtri<br><br>
    * Possibilità di filtrare e scaricare le informazioni filtrate in formato Excel`,
  },
  autodotnet: {
    name: "Automazione .NET",
    description: `Applicazione .NET adibita alla lavorazione di un tipo di file Excel ampio e complesso interno aziendale.`,
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
