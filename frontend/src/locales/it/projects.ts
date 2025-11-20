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
    description: `Manuale online che istruisce i lavoratori dell'azienda a utilizzare il software proprietario di controllo degli ascensori, il sito dispone di searchbar e immagini interattive.`,
    long_description: `Manuale con pagine completamente editabili dagli amministratori attraverso il database di Django.
    
    I pulsanti rossi sono posizionati attraverso coordinate relative all'immagine nel database, e sono modificabili attraverso il frontend se loggati come amministratore semplicemente facendo drag and drop.`,
    search: `Barra di ricerca.`,
  },
  autopython: {
    name: "Automazione Python",
    description: `Serie di script e piccoli programmi scritti in Python adibiti all'automatizzazione di file Excel aziendali, inclusa lettura di file pdf.`,
    long_description: `Questo progetto include una serie di piccoli programmi sviluppati in Python per automatizzare alcuni file Excel aziendiali.
    
    La maggior parte dellea automazioni sono fatte utilizzando openpyxl, sfruttando ogni tipo di funzionalità, dallo styling al merge delle celle.
    
    Le UI sono state realizzate principalmente con Tkinter e PyQT6.`,
  },
  bedtime_stories: {
    name: "Bedtime Stories",
    description: `Piccolo videgioco sviluppato su Unity durante i miei anni in accademia assieme ad un gruppo di altri studenti, tra cui io ero l'unico programmatore, date un'occhiata se vi va. :)`,
    long_description: `Essendo l'unico programmatore del progetto, ho implementato praticamente ogni meccanica, dal Character Controller all'IA dei nemici e al sistema di dialogo. Ho creato alcuni shader, incluso quello per l'oscurità, e ho realizzato alcuni strumenti per l'ottimizzazione delle tile.`,
  },
  materials_ai: {
    name: `Materials AI`,
    description: `Piccola applicazione web in cui è possibile caricare un oggetto in un database Postgres, dove il backend sarà in grado di riconoscerlo e, potenzialmente, misurarlo tramite le API di Google AI.`,
    long_description: `Piccola applicazione web creata in collaborazione con un mio amico per la sua laurea, in cui lui si è occupato del design.
    
    Su questo sito è possibile, qualora si disponga delle credenziali per farlo, caricare un oggetto che verrà poi analizzato da un modello AI attraverso API di Google e verrà dopodiché aggiunto ad un database Postgres.
    
    L'AI misurerà l'oggetto solo se vicino ad un cubo di riferimento che darà per scontato misuri 75x75x75mm, in caso contrario setterà tutte le dimensioni a 0, dato che abbiamo notato che le misure non sarebbero state accurate in ogni caso.`,
    upload: "Pagina di caricamento.",
  },
} as const;

export default projects;
