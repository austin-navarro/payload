import type { DefaultTranslationsObject, Language } from '../types.js'

export const ltTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Paskyra',
    accountOfCurrentUser: 'Dabartinio vartotojo paskyra',
    accountVerified: 'Sąskaita sėkmingai patvirtinta.',
    alreadyActivated: 'Jau aktyvuota',
    alreadyLoggedIn: 'Jau prisijungęs',
    apiKey: 'API raktas',
    authenticated: 'Autentifikuotas',
    backToLogin: 'Grįžti į prisijungimą',
    beginCreateFirstUser: 'Pradėkite, sukurdami savo pirmąjį vartotoją.',
    changePassword: 'Keisti slaptažodį',
    checkYourEmailForPasswordReset:
      'Jei šis el. pašto adresas yra susijęs su paskyra, netrukus gausite instrukcijas, kaip atstatyti savo slaptažodį. Jei laiško nesimate savo gautiesiųjų dėžutėje, patikrinkite savo šlamšto ar nereikalingų laiškų aplanką.',
    confirmGeneration: 'Patvirtinkite generavimą',
    confirmPassword: 'Patvirtinkite slaptažodį',
    createFirstUser: 'Sukurkite pirmąjį vartotoją',
    emailNotValid: 'Pateiktas el. paštas negalioja',
    emailOrUsername: 'El. paštas arba vartotojo vardas',
    emailSent: 'El. paštas išsiųstas',
    emailVerified: 'El. paštas sėkmingai patvirtintas.',
    enableAPIKey: 'Įgalinti API raktą',
    failedToUnlock: 'Nepavyko atrakinti',
    forceUnlock: 'Priverstinis atrakinimas',
    forgotPassword: 'Pamiršote slaptažodį',
    forgotPasswordEmailInstructions:
      'Prašome įvesti savo el. paštą žemiau. Gausite el. laišką su instrukcijomis, kaip atstatyti savo slaptažodį.',
    forgotPasswordQuestion: 'Pamiršote slaptažodį?',
    forgotPasswordUsernameInstructions:
      'Prašome įvesti savo vartotojo vardą žemiau. Instrukcijos, kaip atstatyti slaptažodį, bus išsiųstos į el. pašto adresą, susietą su jūsų vartotojo vardu.',
    generate: 'Generuoti',
    generateNewAPIKey: 'Sukurkite naują API raktą',
    generatingNewAPIKeyWillInvalidate:
      'Sugeneruojant naują API raktą, bus <1>anuliuotas</1> ankstesnis raktas. Ar tikrai norite tęsti?',
    lockUntil: 'Užrakinti iki',
    logBackIn: 'Prisijunkite vėl',
    loggedIn: 'Norėdami prisijungti kitu vartotoju, turėtumėte iš pradžių <0>atsijungti</0>.',
    loggedInChangePassword:
      'Norėdami pakeisti slaptažodį, eikite į savo <0>paskyrą</0> ir ten redaguokite savo slaptažodį.',
    loggedOutInactivity: 'Jūs buvote atjungtas dėl neveiklumo.',
    loggedOutSuccessfully: 'Sėkmingai atsijungėte.',
    loggingOut: 'Atsijungimas...',
    login: 'Prisijungti',
    loginAttempts: 'Prisijungimo bandymai',
    loginUser: 'Prisijungti vartotojui',
    loginWithAnotherUser:
      'Norėdami prisijungti su kitu vartotoju, turėtumėte iš pradžių <0>atsijungti</0>.',
    logOut: 'Atsijungti',
    logout: 'Atsijungti',
    logoutSuccessful: 'Sėkmingai atsijungta.',
    logoutUser: 'Atjungti vartotoją',
    newAccountCreated:
      'Jums ką tik buvo sukurta nauja paskyra, kad galėtumėte prisijungti prie <a href="{{serverURL}}">{{serverURL}}</a> Prašome paspausti ant šios nuorodos arba įklijuoti apačioje esantį URL į savo naršyklę, kad patvirtintumėte savo el. pašto adresą: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Patvirtinę savo el. pašto adresą, sėkmingai galėsite prisijungti.',
    newAPIKeyGenerated: 'Sugeneruotas naujas API raktas.',
    newPassword: 'Naujas slaptažodis',
    passed: 'Autentifikacija sėkminga',
    passwordResetSuccessfully: 'Slaptažodis sėkmingai atnaujintas.',
    resetPassword: 'Atstatyti slaptažodį',
    resetPasswordExpiration: 'Atstatyti slaptažodžio galiojimo laiką',
    resetPasswordToken: 'Slaptažodžio atkūrimo žetonas',
    resetYourPassword: 'Atstatykite savo slaptažodį',
    stayLoggedIn: 'Likite prisijungę',
    successfullyRegisteredFirstUser: 'Sėkmingai užregistruotas pirmas vartotojas.',
    successfullyUnlocked: 'Sėkmingai atrakinta',
    tokenRefreshSuccessful: 'Žetonų atnaujinimas sėkmingas.',
    unableToVerify: 'Negalima patikrinti',
    username: 'Vartotojo vardas',
    usernameNotValid: 'Pateiktas vartotojo vardas yra netinkamas',
    verified: 'Patvirtinta',
    verifiedSuccessfully: 'Sėkmingai patvirtinta',
    verify: 'Patikrinkite',
    verifyUser: 'Patvirtinti vartotoją',
    verifyYourEmail: 'Patvirtinkite savo el. paštą',
    youAreInactive:
      'Jūs kurį laiką neveikėte ir netrukus būsite automatiškai atjungtas dėl jūsų pačių saugumo. Ar norėtumėte likti prisijungęs?',
    youAreReceivingResetPassword:
      'Gavote šį pranešimą, nes jūs (arba kažkas kitas) paprašėte atstatyti slaptažodį savo paskyrai. Norėdami užbaigti procesą, spustelėkite šią nuorodą arba įklijuokite ją į savo naršyklę:',
    youDidNotRequestPassword:
      'Jei to neprašėte, prašome ignoruoti šį el. laišką ir jūsų slaptažodis išliks nepakeistas.',
  },
  error: {
    accountAlreadyActivated: 'Ši paskyra jau aktyvuota.',
    autosaving: 'Šio dokumento automatinio išsaugojimo metu kilo problema.',
    correctInvalidFields: 'Prašome ištaisyti neteisingus laukus.',
    deletingFile: 'Įvyko klaida trinant failą.',
    deletingTitle:
      'Įvyko klaida bandant ištrinti {{title}}. Patikrinkite savo ryšį ir bandykite dar kartą.',
    emailOrPasswordIncorrect: 'Pateiktas el. pašto adresas arba slaptažodis yra neteisingi.',
    followingFieldsInvalid_one: 'Šis laukas yra netinkamas:',
    followingFieldsInvalid_other: 'Šie laukai yra neteisingi:',
    incorrectCollection: 'Neteisinga kolekcija',
    invalidFileType: 'Netinkamas failo tipas',
    invalidFileTypeValue: 'Neteisingas failo tipas: {{value}}',
    invalidRequestArgs: 'Netinkami argumentai perduoti užklausoje: {{args}}',
    loadingDocument: 'Įvyko klaida įkeliant dokumentą, kurio ID yra {{id}}.',
    localesNotSaved_one: 'Negalima išsaugoti šios lokalės:',
    localesNotSaved_other: 'Šios lokalės negalėjo būti išsaugotos:',
    logoutFailed: 'Atsijungimas nepavyko.',
    missingEmail: 'Trūksta el. pašto.',
    missingIDOfDocument: 'Trūksta dokumento, kurį reikia atnaujinti, ID.',
    missingIDOfVersion: 'Trūksta versijos ID.',
    missingRequiredData: 'Trūksta reikalingų duomenų.',
    noFilesUploaded: 'Neįkelta jokių failų.',
    noMatchedField: 'Nerasta atitinkamo lauko „{{label}}“',
    notAllowedToAccessPage: 'Jums neleidžiama prieiti prie šio puslapio.',
    notAllowedToPerformAction: 'Jums neleidžiama atlikti šio veiksmo.',
    notFound: 'Pageidaujamas išteklius nerasta.',
    noUser: 'Nėra vartotojo',
    previewing: 'Šiam dokumentui peržiūrėti kilo problema.',
    problemUploadingFile: 'Failo įkelti nepavyko dėl problemos.',
    tokenInvalidOrExpired: 'Žetonas yra neteisingas arba jo galiojimas pasibaigė.',
    tokenNotProvided: 'Žetonas nesuteiktas.',
    unableToDeleteCount: 'Negalima ištrinti {{count}} iš {{total}} {{label}}.',
    unableToReindexCollection:
      'Klaida perindeksuojant rinkinį {{collection}}. Operacija nutraukta.',
    unableToUpdateCount: 'Nepavyko atnaujinti {{count}} iš {{total}} {{label}}.',
    unauthorized: 'Neleistina, turite būti prisijungęs, kad galėtumėte teikti šį prašymą.',
    unauthorizedAdmin:
      'Neleidžiama, šis vartotojas neturi prieigos prie administratoriaus panelės.',
    unknown: 'Įvyko nežinoma klaida.',
    unPublishingDocument: 'Šio dokumento nepublikuojant kildavo problema.',
    unspecific: 'Įvyko klaida.',
    unverifiedEmail: 'Prieš prisijungdami patvirtinkite savo el. paštą.',
    userEmailAlreadyRegistered: 'Vartotojas su nurodytu el. paštu jau yra užregistruotas.',
    userLocked: 'Šis vartotojas užrakintas dėl per daug nepavykusių prisijungimo bandymų.',
    usernameAlreadyRegistered: 'Vartotojas su nurodytu vartotojo vardu jau užregistruotas.',
    usernameOrPasswordIncorrect: 'Pateiktas vartotojo vardas arba slaptažodis yra neteisingas.',
    valueMustBeUnique: 'Vertė turi būti unikalu.',
    verificationTokenInvalid: 'Patvirtinimo kodas yra negaliojantis.',
  },
  fields: {
    addLabel: 'Pridėkite {{label}}',
    addLink: 'Pridėti nuorodą',
    addNew: 'Pridėti naują',
    addNewLabel: 'Pridėti naują {{label}}',
    addRelationship: 'Pridėti santykį',
    addUpload: 'Pridėti Įkelti',
    block: 'blokas',
    blocks: 'blokai',
    blockType: 'Blokas Tipas',
    chooseBetweenCustomTextOrDocument:
      'Pasirinkite tarp pasirinkimo įvesti tinkintą tekstą URL arba nuorodos į kitą dokumentą.',
    chooseDocumentToLink: 'Pasirinkite dokumentą, prie kurio norite prisegti.',
    chooseFromExisting: 'Pasirinkite iš esamų',
    chooseLabel: 'Pasirinkite {{label}}',
    collapseAll: 'Sutraukti viską',
    customURL: 'Pasirinktinis URL',
    editLabelData: 'Redaguoti {{label}} duomenis',
    editLink: 'Redaguoti nuorodą',
    editRelationship: 'Redaguoti santykius',
    enterURL: 'Įveskite URL',
    internalLink: 'Vidinis nuorodos',
    itemsAndMore: '{{items}} ir dar {{count}}',
    labelRelationship: '{{label}} Santykiai',
    latitude: 'Platuma',
    linkedTo: 'Susijęs su <0>{{label}}</0>',
    linkType: 'Nuorodos tipas',
    longitude: 'Ilgumažė',
    newLabel: 'Naujas {{label}}',
    openInNewTab: 'Atidaryti naujame skirtuke',
    passwordsDoNotMatch: 'Slaptažodžiai nesutampa.',
    relatedDocument: 'Susijęs dokumentas',
    relationTo: 'Santykis su',
    removeRelationship: 'Pašalinti ryšį',
    removeUpload: 'Pašalinti įkėlimą',
    saveChanges: 'Išsaugoti pakeitimus',
    searchForBlock: 'Ieškokite bloko',
    selectExistingLabel: 'Pasirinkite esamą {{label}}',
    selectFieldsToEdit: 'Pasirinkite laukus, kuriuos norite redaguoti',
    showAll: 'Rodyti viską',
    swapRelationship: 'Apkeičiamas santykis',
    swapUpload: 'Keitimo įkėlimas',
    textToDisplay: 'Rodyti tekstą',
    toggleBlock: 'Perjungti bloką',
    uploadNewLabel: 'Įkelti naują {{label}}',
  },
  folder: {
    deleteConfirmation:
      'Įdėti aplankai bus ištrinti. Įdėti dokumentai bus perkelti į artimiausią tėvinį aplanką. Ar esate įsitikinęs?',
    deleteFolder: 'Ištrinti aplanką',
    folderName: 'Aplanko pavadinimas',
    moveFolder: 'Perkelti aplanką',
    newFolder: 'Naujas aplankas',
    removeFromFolder: 'Pašalinti iš aplanko',
    renameFolder: 'Pervadinti aplanką',
    selectFolder: 'Pasirinkti aplanką',
  },
  general: {
    aboutToDelete: 'Jūs ketinate ištrinti {{label}} <1>{{title}}</1>. Ar esate tikri?',
    aboutToDeleteCount_many: 'Jūs ketinate ištrinti {{count}} {{label}}',
    aboutToDeleteCount_one: 'Jūs ketinate ištrinti {{count}} {{label}}',
    aboutToDeleteCount_other: 'Jūs ketinate ištrinti {{count}} {{label}}',
    addBelow: 'Pridėti žemiau',
    addFilter: 'Pridėti filtrą',
    adminTheme: 'Admin temos',
    all: 'Visi',
    allCollections: 'Visos kolekcijos',
    and: 'Ir',
    anotherUser: 'Kitas vartotojas',
    anotherUserTakenOver: 'Kitas naudotojas perėmė šio dokumento redagavimą.',
    applyChanges: 'Taikyti pakeitimus',
    ascending: 'Kylantis',
    automatic: 'Automatinis',
    backToDashboard: 'Atgal į informacinę skydelį',
    cancel: 'Atšaukti',
    changesNotSaved:
      'Jūsų pakeitimai nebuvo išsaugoti. Jei dabar išeisite, prarasite savo pakeitimus.',
    clearAll: 'Išvalyti viską',
    close: 'Uždaryti',
    collapse: 'Susikolimas',
    collections: 'Kolekcijos',
    columns: 'Stulpeliai',
    columnToSort: 'Rūšiuoti stulpelį',
    confirm: 'Patvirtinti',
    confirmCopy: 'Patvirtinkite kopiją',
    confirmDeletion: 'Patvirtinkite šalinimą',
    confirmDuplication: 'Patvirtinkite dubliavimą',
    confirmReindex: 'Perindeksuoti visas {{collections}}?',
    confirmReindexAll: 'Perindeksuoti visas kolekcijas?',
    confirmReindexDescription:
      'Tai pašalins esamus indeksus ir iš naujo indeksuos dokumentus kolekcijose {{collections}}.',
    confirmReindexDescriptionAll:
      'Tai pašalins esamas indeksus ir perindeksuos dokumentus visose kolekcijose.',
    copied: 'Nukopijuota',
    copy: 'Kopijuoti',
    copying: 'Kopijavimas',
    copyWarning:
      'Jūs ketinate perrašyti {{to}} į {{from}} šildymui {{label}} {{title}}. Ar esate tikri?',
    create: 'Sukurti',
    created: 'Sukurta',
    createdAt: 'Sukurta',
    createNew: 'Sukurti naują',
    createNewLabel: 'Sukurti naują {{label}}',
    creating: 'Kuriant',
    creatingNewLabel: 'Kuriamas naujas {{label}}',
    currentlyEditing:
      'šiuo metu redaguoja šį dokumentą. Jei perimsite, jie bus užblokuoti ir negalės toliau redaguoti, o taip pat gali prarasti neišsaugotus pakeitimus.',
    custom: 'Paprastas',
    dark: 'Tamsus',
    dashboard: 'Prietaisų skydelis',
    delete: 'Ištrinti',
    deletedCountSuccessfully: 'Sėkmingai ištrinta {{count}} {{label}}.',
    deletedSuccessfully: 'Sėkmingai ištrinta.',
    deleting: 'Trinama...',
    depth: 'Gylis',
    descending: 'Mažėjantis',
    deselectAllRows: 'Atžymėkite visas eilutes',
    document: 'Dokumentas',
    documentLocked: 'Dokumentas užrakintas',
    documents: 'Dokumentai',
    duplicate: 'Dublikatas',
    duplicateWithoutSaving: 'Dubliuoti be įrašytų pakeitimų',
    edit: 'Redaguoti',
    editAll: 'Redaguoti viską',
    editedSince: 'Redaguota nuo',
    editing: 'Redagavimas',
    editingLabel_many: 'Redaguojama {{count}} {{label}}',
    editingLabel_one: 'Redaguojama {{count}} {{label}}',
    editingLabel_other: 'Redaguojamas {{count}} {{label}}',
    editingTakenOver: 'Redagavimas perimtas',
    editLabel: 'Redaguoti {{label}}',
    email: 'El. paštas',
    emailAddress: 'El. pašto adresas',
    enterAValue: 'Įveskite reikšmę',
    error: 'Klaida',
    errors: 'Klaidos',
    fallbackToDefaultLocale: 'Grįžkite į numatytąją vietovę',
    false: 'Netiesa',
    filter: 'Filtruoti',
    filters: 'Filtrai',
    filterWhere: 'Filtruoti {{label}}, kur',
    globals: 'Globalai',
    goBack: 'Grįžkite',
    isEditing: 'redaguoja',
    item: 'daiktas',
    items: 'elementai',
    language: 'Kalba',
    lastModified: 'Paskutinį kartą modifikuota',
    leaveAnyway: 'Vis tiek išeikite',
    leaveWithoutSaving: 'Išeikite neišsaugoję',
    light: 'Šviesa',
    livePreview: 'Tiesioginė peržiūra',
    loading: 'Kraunama',
    locale: 'Lokalė',
    locales: 'Lokalės',
    menu: 'Meniu',
    moreOptions: 'Daugiau parinkčių',
    move: 'Judėti',
    moveConfirm:
      'Jūs ketinate perkelti {{count}} {{label}} į <1>{{destination}}</1>. Ar esate tikri?',
    moveCount: 'Perkelti {{count}} {{label}}',
    moveDown: 'Perkelti žemyn',
    moveUp: 'Pakilti',
    moving: 'Keliauja',
    movingCount: 'Perkeliama {{count}} {{label}}',
    newPassword: 'Naujas slaptažodis',
    next: 'Toliau',
    noDateSelected: 'Pasirinktos datos nėra',
    noFiltersSet: 'Nenustatyti jokie filtrai',
    noLabel: '<Ne {{label}}>',
    none: 'Jokios',
    noOptions: 'Jokių variantų',
    noResults:
      'Nerasta jokių {{label}}. Arba dar nėra sukurtų {{label}}, arba jie neatitinka nurodytų filtrų aukščiau.',
    notFound: 'Nerasta',
    nothingFound: 'Nieko nerasta',
    noUpcomingEventsScheduled: 'Nėra suplanuotų būsimų renginių.',
    noValue: 'Nėra vertės',
    of: 'apie',
    only: 'Tik',
    open: 'Atidaryti',
    or: 'Arba',
    order: 'Užsakyti',
    overwriteExistingData: 'Perrašyti esamus lauko duomenis',
    pageNotFound: 'Puslapis nerastas',
    password: 'Slaptažodis',
    payloadSettings: 'Payload nustatymai',
    perPage: 'Puslapyje: {{limit}}',
    previous: 'Ankstesnis',
    reindex: 'Perindeksuoti',
    reindexingAll: 'Perindeksuojamos visos {{collections}}.',
    remove: 'Pašalinti',
    rename: 'Pervadinti',
    reset: 'Atstatyti',
    resetPreferences: 'Atstatyti nuostatas',
    resetPreferencesDescription: 'Tai atstatys visas jūsų nuostatas į numatytąsias reikšmes.',
    resettingPreferences: 'Nustatymų atstatymas.',
    row: 'Eilutė',
    rows: 'Eilutės',
    save: 'Išsaugoti',
    saving: 'Išsaugoti...',
    schedulePublishFor: 'Suplanuokite publikaciją „{{title}}“',
    searchBy: 'Ieškokite pagal {{label}}',
    selectAll: 'Pasirinkite visus {{count}} {{label}}',
    selectAllRows: 'Pasirinkite visas eilutes',
    selectedCount: '{{count}} {{label}} pasirinkta',
    selectValue: 'Pasirinkite reikšmę',
    showAllLabel: 'Rodyti visus {{label}}',
    sorryNotFound: 'Atsiprašau - nėra nieko, atitinkančio jūsų užklausą.',
    sort: 'Rūšiuoti',
    sortByLabelDirection: 'Rūšiuoti pagal {{label}} {{direction}}',
    stayOnThisPage: 'Likite šiame puslapyje',
    submissionSuccessful: 'Pateikimas sėkmingas.',
    submit: 'Pateikti',
    submitting: 'Pateikiama...',
    success: 'Sėkmė',
    successfullyCreated: '{{label}} sėkmingai sukurtas.',
    successfullyDuplicated: '{{label}} sėkmingai dubliuotas.',
    successfullyReindexed:
      'Sėkmingai perindeksuota {{count}} iš {{total}} dokumentų iš {{collections}}',
    takeOver: 'Perimti',
    thisLanguage: 'Lietuvių',
    time: 'Laikas',
    timezone: 'Laiko juosta',
    titleDeleted: '{{label}} "{{title}}" sėkmingai ištrinta.',
    true: 'Tiesa',
    unauthorized: 'Neleistinas',
    unsavedChanges: 'Turite neišsaugotų pakeitimų. Išsaugokite arba atmestkite prieš tęsdami.',
    unsavedChangesDuplicate: 'Jūs turite neišsaugotų pakeitimų. Ar norėtumėte tęsti dubliavimą?',
    untitled: 'Neužpavadinamas',
    upcomingEvents: 'Artimieji renginiai',
    updatedAt: 'Atnaujinta',
    updatedCountSuccessfully: '{{count}} {{label}} sėkmingai atnaujinta.',
    updatedSuccessfully: 'Sėkmingai atnaujinta.',
    updating: 'Atnaujinimas',
    uploading: 'Įkeliama',
    uploadingBulk: 'Įkeliamas {{current}} iš {{total}}',
    user: 'Vartotojas',
    username: 'Vartotojo vardas',
    users: 'Vartotojai',
    value: 'Vertė',
    viewReadOnly: 'Peržiūrėti tik skaitymui',
    welcome: 'Sveiki',
  },
  localization: {
    cannotCopySameLocale: 'Negalima kopijuoti į tą pačią vietovę',
    copyFrom: 'Kopijuoti iš',
    copyFromTo: 'Kopijavimas iš {{from}} į {{to}}',
    copyTo: 'Kopijuoti į',
    copyToLocale: 'Kopijuoti į vietovę',
    localeToPublish: 'Publikuoti lokacijoje',
    selectLocaleToCopy: 'Pasirinkite lokalės kopijavimui',
  },
  operators: {
    contains: 'yra',
    equals: 'lygus',
    exists: 'egzistuoja',
    intersects: 'susikerta',
    isGreaterThan: 'yra didesnis nei',
    isGreaterThanOrEqualTo: 'yra didesnis arba lygus',
    isIn: 'yra',
    isLessThan: 'yra mažiau nei',
    isLessThanOrEqualTo: 'yra mažiau arba lygu',
    isLike: 'yra panašu',
    isNotEqualTo: 'nelygu',
    isNotIn: 'nėra',
    isNotLike: 'nėra panašus',
    near: 'šalia',
    within: 'viduje',
  },
  upload: {
    addFile: 'Pridėti failą',
    addFiles: 'Pridėti failus',
    bulkUpload: 'Masinis įkėlimas',
    crop: 'Pasėlis',
    cropToolDescription:
      'Temkite pasirinktos srities kampus, nubrėžkite naują sritį arba koreguokite žemiau esančias reikšmes.',
    dragAndDrop: 'Temkite ir numeskite failą',
    dragAndDropHere: 'arba nuvilkite failą čia',
    editImage: 'Redaguoti vaizdą',
    fileName: 'Failo pavadinimas',
    fileSize: 'Failo dydis',
    filesToUpload: 'Įkelti failai',
    fileToUpload: 'Įkelti failą',
    focalPoint: 'Fokuso Taškas',
    focalPointDescription:
      'Temkite fokusavimo tašką tiesiogiai peržiūroje arba reguliuokite žemiau esančias reikšmes.',
    height: 'Aukštis',
    lessInfo: 'Mažiau informacijos',
    moreInfo: 'Daugiau informacijos',
    noFile: 'Nėra failo',
    pasteURL: 'Įklijuokite URL',
    previewSizes: 'Peržiūros dydžiai',
    selectCollectionToBrowse: 'Pasirinkite kolekciją, kurią norėtumėte naršyti',
    selectFile: 'Pasirinkite failą',
    setCropArea: 'Nustatykite pjovimo plotą',
    setFocalPoint: 'Nustatyti fokuso tašką',
    sizes: 'Dydžiai',
    sizesFor: 'Dydžiai skirti {{label}}',
    width: 'Plotis',
  },
  validation: {
    emailAddress: 'Įveskite galiojantį el. pašto adresą.',
    enterNumber: 'Įveskite galiojantį skaičių.',
    fieldHasNo: 'Šiame lauke nėra {{label}}',
    greaterThanMax:
      '{{value}} yra didesnė nei leidžiama maksimali {{label}} reikšmė, kuri yra {{max}}.',
    invalidInput: 'Šis laukas turi netinkamą įvestį.',
    invalidSelection: 'Šiame lauke yra netinkamas pasirinkimas.',
    invalidSelections: 'Šiame lauke yra šios netinkamos parinktys:',
    lessThanMin:
      '{{value}} yra mažesnė nei leidžiama minimali {{label}} reikšmė, kuri yra {{min}}.',
    limitReached: 'Pasiektas limitas, galima pridėti tik {{max}} daiktus.',
    longerThanMin:
      'Ši reikšmė turi būti ilgesnė nei minimalus simbolių skaičius, kuris yra {{minLength}} simboliai.',
    notValidDate: '"{{value}}" nėra galiojanti data.',
    required: 'Šis laukas yra privalomas.',
    requiresAtLeast: 'Šis laukas reikalauja bent {{count}} {{label}}.',
    requiresNoMoreThan: 'Šiame laukelyje gali būti ne daugiau kaip {{count}} {{label}}.',
    requiresTwoNumbers: 'Šiame lauke reikia įvesti du skaičius.',
    shorterThanMax: 'Ši reikšmė turi būti trumpesnė nei maksimalus {{maxLength}} simbolių ilgis.',
    timezoneRequired: 'Reikia nustatyti laiko juostą.',
    trueOrFalse: 'Šis laukas gali būti lygus tik „true“ ar „false“.',
    username:
      'Įveskite galiojantį vartotojo vardą. Galima naudoti raides, skaičius, brūkšnelius, taškus ir pabraukimus.',
    validUploadID: 'Šis laukas nėra tinkamas įkėlimo ID.',
  },
  version: {
    type: 'Įveskite',
    aboutToPublishSelection: 'Jūs ketinate išleisti visus {{label}} išrinktame. Ar esate tikri?',
    aboutToRestore:
      'Jūs ketinate atkurti šį {{label}} dokumentą į būklę, kurioje jis buvo {{versionDate}}.',
    aboutToRestoreGlobal:
      'Jūs ketinate atkurti visuotinę {{label}} būklę, kokia ji buvo {{versionDate}}.',
    aboutToRevertToPublished:
      'Jūs ketinate atšaukti šio dokumento pakeitimus ir grįžti prie publikuotos versijos. Ar esate įsitikinęs?',
    aboutToUnpublish: 'Jūs ketinate panaikinti šio dokumento publikavimą. Ar esate tikri?',
    aboutToUnpublishSelection:
      'Jūs ketinate atšaukti visų {{label}} pasirinkime. Ar esate įsitikinęs?',
    autosave: 'Automatinis išsaugojimas',
    autosavedSuccessfully: 'Sėkmingai automatiškai išsaugota.',
    autosavedVersion: 'Automatiškai išsaugota versija',
    changed: 'Pakeistas',
    changedFieldsCount_one: '{{count}} pakeistas laukas',
    changedFieldsCount_other: '{{count}} pakeisti laukai',
    compareVersion: 'Palyginkite versiją su:',
    confirmPublish: 'Patvirtinkite publikaciją',
    confirmRevertToSaved: 'Patvirtinkite grįžimą į įrašytą',
    confirmUnpublish: 'Patvirtinkite nepublikavimą',
    confirmVersionRestoration: 'Patvirtinkite versijos atkūrimą',
    currentDocumentStatus: 'Dabartinis {{docStatus}} dokumentas',
    currentDraft: 'Dabartinis projektas',
    currentPublishedVersion: 'Dabartinė publikuota versija',
    draft: 'Projektas',
    draftSavedSuccessfully: 'Juosmuo sėkmingai išsaugotas.',
    lastSavedAgo: 'Paskutinį kartą išsaugota prieš {{distance}}',
    modifiedOnly: 'Tik modifikuotas',
    noFurtherVersionsFound: 'Nerasta daugiau versijų',
    noRowsFound: 'Nerasta {{label}}',
    noRowsSelected: 'Pasirinkta ne viena {{label}}',
    preview: 'Peržiūra',
    previouslyPublished: 'Ankstesnė publikacija',
    problemRestoringVersion: 'Buvo problema atkuriant šią versiją',
    publish: 'Paskelbti',
    publishAllLocales: 'Publikuokite visus lokalizacijas',
    publishChanges: 'Paskelbti pakeitimus',
    published: 'Paskelbta',
    publishIn: 'Paskelbti {{locale}}',
    publishing: 'Leidyba',
    restoreAsDraft: 'Atkurti kaip juodraštį',
    restoredSuccessfully: 'Sėkmingai atkurtas.',
    restoreThisVersion: 'Atkurti šią versiją',
    restoring: 'Atkuriamas...',
    reverting: 'Grįžtama...',
    revertToPublished: 'Grįžti prie publikuotojo',
    saveDraft: 'Išsaugoti juodraštį',
    scheduledSuccessfully: 'Sėkmingai suplanuota.',
    schedulePublish: 'Suplanuokite publikaciją',
    selectLocales: 'Pasirinkite lokales, kurias norėtumėte rodyti',
    selectVersionToCompare: 'Pasirinkite versiją, kurią norite palyginti',
    showingVersionsFor: 'Rodomos versijos:',
    showLocales: 'Rodyti lokalizacijas:',
    status: 'Būsena',
    unpublish: 'Nebepublikuoti',
    unpublishing: 'Nebepublikuojama...',
    version: 'Versija',
    versionCount_many: 'Rasta {{count}} versijų',
    versionCount_none: 'Nerasta jokių versijų',
    versionCount_one: 'Rasta {{count}} versija',
    versionCount_other: 'Rasta {{count}} versijų',
    versionCreatedOn: '{{version}} sukurtas:',
    versionID: 'Versijos ID',
    versions: 'Versijos',
    viewingVersion: 'Peržiūrėkite versiją {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Peržiūrint visuotinę {{entityLabel}} versiją',
    viewingVersions: 'Peržiūrint versijas {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Peržiūrėti globalaus {{entityLabel}} versijas',
  },
}

export const lt: Language = {
  dateFNSKey: 'lt',
  translations: ltTranslations,
}
