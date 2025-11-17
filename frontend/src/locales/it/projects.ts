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
    long_description: `Applicazione Desktop realizzata al fine di rispondere alla necessità di gestire un tipo di file Excel particolarmente complesso e pesante, allegerisce il processo di compilazione agli operativi permettendo di automatizzare alcuni passaggi che non richiedono necessariamente l'intervento di un essere umano.

    Finora tutti i programmi che avevo realizzato per automatizzare la compilazione di file Excel erano scritti in Python utilizzando openpyxl, tuttavia questo file si è dimostrato troppo pesante per esso e richiedeva feature aggiuntive, specialmente per le formule.

    C# con EPPlus ha risolto tutti i miei problemi, compila molto più velocemente e l'integrazinoe con le formule e la formattazione è di gran lunga superiore.

    Per la lettura di file pdf che è necessaria per eseguire alcune operazioni, non avendo trovato librerie gratuite soddisfacenti per leggere pdf  per .NET, ho optato per l'utilizzo di Python con pymupdf che poi salva il risultato in un file json che in seguito vado a leggere con la parte .NET del progetto.
    
    La UI è stata realizzata con Avalonia utilizzando il pattern MVVM.`,
    new_file: `Il software permette di creare il file da zero.`,
    load_file: `O di caricarlo da un file preesistente.`,
  },
  ordermanager: {
    name: "Gestore Ordini",
    description: `Applicazione web adibita alla gestione degli ordini da parte degli utenti, i quali possono registrarsi attraverso indirizzo email, la registrazione deve essere approvata da amministratori.`,
    long_description: `Applicazione commissionatami da un'azienda esterna, il software deve permettere ad utenti esterni di registrarsi attraverso indirizzo email, una volta fatto devono ricevere l'approvazione degli amministratori prima di poter fare il login.
    
    L'app permette di compilare dei form attraverso i quali potranno inviare ordini direttamente all'azienda, l'azienda desidera mantenere segretezza su come questi ordini vergono fatti, motivo per il quale la registrazione deve essere approvata e per il quale non posso approfondire il funzionamento di questa applicazione.
    
    L'applicazione è multilingua grazie a react-i18n e a django-translations ed è anche disponibile come app Android grazie a Capacitor (e presto anche iOS).`,
  },
  webmanual: {
    name: "Manuale Web",
    description: `Applicazione web adibita alla gestione degli ordini da parte degli utenti, i quali possono registrarsi attraverso indirizzo email, la registrazione deve essere approvata da amministratori.`,
    long_description: `Applicazione commissionatami da un'azienda esterna, il software deve permettere ad utenti esterni di registrarsi attraverso indirizzo email, una volta fatto devono ricevere l'approvazione degli amministratori prima di poter fare il login.
    
    L'app permette di compilare dei form attraverso i quali potranno inviare ordini direttamente all'azienda, l'azienda desidera mantenere segretezza su come questi ordini vergono fatti, motivo per il quale la registrazione deve essere approvata e per il quale non posso approfondire il funzionamento di questa applicazione.
    
    L'applicazione è multilingua grazie a react-i18n e a django-translations ed è anche disponibile come app Android grazie a Capacitor (e presto anche iOS).`,
  },
} as const;

export default projects;
