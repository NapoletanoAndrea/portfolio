const projects = {
  calendar: {
    name: `Calendar`,
    description: `Full-stack application that allows users to create tasks, with the ability to add comments, attach files, and track worked time on a calendar. All data can be downloaded in Excel format.`,
    long_description: `The Calendar app is more of a Task Manager than anything else; it allows users to create Tasks with categories and fields that are highly specific to the company, something that would not have been possible with existing tools.
    
    The backend was built with Django and the frontend with React. The project includes the following features:

    `,
    features:
      `* Authentication with JWT tokens<br><br>` +
      `* 2FA authentication<br><br>` +
      `* Relational Postgres database<br><br>` +
      `* Optimized queries through pagination and filters<br><br>` +
      `* Ability to filter and download filtered information in Excel format`,
  },

  autodotnet: {
    name: `Automation .NET`,
    description: `A .NET application designed to process a large and complex internal company Excel file.`,
    long_description: `Desktop application created to meet the need of handling a particularly complex and heavy Excel file. It lightens the compilation process for operators by automating certain steps that do not require human intervention.
      
      Until now, all programs I had built to automate Excel file processing were written in Python using openpyxl; however, this file proved too heavy for it and required additional features, especially for formulas.

      C# with EPPlus solved all my problems: it processes much faster, and integration with formulas and formatting is far superior.
      
      For reading PDF files, which is necessary for some operations, since I could not find free .NET libraries that satisfied my needs, I opted to use Python with pymupdf, which then saves the result in a JSON file that I later read from the .NET side of the project.
      
      The UI was built with Avalonia using the MVVM pattern.`,
    new_file: `The software allows creating the file from scratch.`,
    load_file: `Or loading it from an existing file.`,
  },

  ordermanager: {
    name: `Order Manager`,
    description: `Web application dedicated to order management by users, who can register using an email address; registration must be approved by administrators.`,
    long_description: `Application commissioned by an external company. The software must allow external users to register via email; once done, they must receive administrator approval before being able to log in. 
      
      The app allows users to fill out forms through which they can send orders directly to the company. The company wants to maintain secrecy about how these orders are made, which is why registration must be approved and why I cannot go into detail about the functioning of this application. 
      
      The application is multilingual thanks to react-i18n and django-translations, and it is also available as an Android app thanks to Capacitor (and soon iOS).`,
  },

  webmanual: {
    name: `Web Manual`,
    description: `Online manual that instructs company workers on how to use the proprietary elevator control software; the site includes a search bar and interactive images.`,
    long_description: `Manual with pages fully editable by administrators through the Django database.
      
    The red buttons are positioned using coordinates relative to the image in the database, and can be modified from the frontend when logged in as an administrator simply by using drag and drop.`,
    search: `Search bar.`,
  },

  autopython: {
    name: `Python Automation`,
    description: `Series of scripts and small programs written in Python aimed at automating company Excel files, including PDF reading.`,
    long_description: `This project includes a series of small programs developed in Python to automate some company Excel files. 
      
      Most of the automations were made using openpyxl, leveraging every type of functionality, from styling to cell merging. 
      
      The UIs were mostly created with Tkinter and PyQT6.`,
  },

  bedtime_stories: {
    name: `Bedtime Stories`,
    description: `Small video game developed in Unity during my academy years together with a group of other students, where I was the only programmer. Feel free to take a look. :)`,
    long_description: `As the only programmer on the project, I implemented practically every mechanic, from the Character Controller to enemy AI and the dialogue system. I created some shaders, including the one for darkness, and built several tools for tile optimization.`,
  },
} as const;

export default projects;
