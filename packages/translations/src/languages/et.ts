import type { DefaultTranslationsObject, Language } from '../types.js'

export const etTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Konto',
    accountOfCurrentUser: 'Praeguse kasutaja konto',
    accountVerified: 'Konto edukalt kinnitatud.',
    alreadyActivated: 'Juba aktiveeritud',
    alreadyLoggedIn: 'Juba sisse logitud',
    apiKey: 'API võti',
    authenticated: 'Autenditud',
    backToLogin: 'Tagasi sisselogimise juurde',
    beginCreateFirstUser: 'Alustuseks loo oma esimene kasutaja.',
    changePassword: 'Muuda parooli',
    checkYourEmailForPasswordReset:
      'Kui e-posti aadress on kontoga seotud, saate varsti juhised parooli lähtestamiseks. Kui te ei näe e-kirja postkastis, kontrollige rämpsposti kausta.',
    confirmGeneration: 'Kinnita genereerimine',
    confirmPassword: 'Kinnita parool',
    createFirstUser: 'Loo esimene kasutaja',
    emailNotValid: 'Sisestatud e-post ei ole kehtiv',
    emailOrUsername: 'E-post või kasutajanimi',
    emailSent: 'E-kiri saadetud',
    emailVerified: 'E-post edukalt kinnitatud.',
    enableAPIKey: 'Luba API võti',
    failedToUnlock: 'Avamine ebaõnnestus',
    forceUnlock: 'Sunni avamine',
    forgotPassword: 'Unustasid parooli',
    forgotPasswordEmailInstructions:
      'Palun sisesta oma e-posti aadress. Saadame sulle e-kirja juhistega parooli lähtestamiseks.',
    forgotPasswordQuestion: 'Unustasid parooli?',
    forgotPasswordUsernameInstructions:
      'Palun sisesta oma kasutajanimi. Saadame parooli lähtestamise juhised sinu kasutajanimega seotud e-posti aadressile.',
    generate: 'Genereeri',
    generateNewAPIKey: 'Genereeri uus API võti',
    generatingNewAPIKeyWillInvalidate:
      'Uue API võtme genereerimine <1>tühistab</1> eelmise võtme. Kas soovid jätkata?',
    lockUntil: 'Lukusta kuni',
    logBackIn: 'Logi uuesti sisse',
    loggedIn: 'Teise kasutajana sisselogimiseks peate esmalt <0>välja logima</0>.',
    loggedInChangePassword: 'Parooli muutmiseks mine oma <0>kontosse</0> ja muuda seal oma parool.',
    loggedOutInactivity: 'Teid on tegevusetuse tõttu välja logitud.',
    loggedOutSuccessfully: 'Olete edukalt välja logitud.',
    loggingOut: 'Väljalogimine...',
    login: 'Logi sisse',
    loginAttempts: 'Sisselogimiskatsed',
    loginUser: 'Logi kasutaja sisse',
    loginWithAnotherUser: 'Teise kasutajana sisselogimiseks peate esmalt <0>välja logima</0>.',
    logOut: 'Logi välja',
    logout: 'Logi välja',
    logoutSuccessful: 'Väljalogimine õnnestus.',
    logoutUser: 'Logi kasutaja välja',
    newAccountCreated:
      'Teile on loodud uus konto juurdepääsuks <a href="{{serverURL}}">{{serverURL}}</a> Palun klõpsake järgmisel lingil või kopeerige URL brauserisse oma e-posti kinnitamiseks: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Pärast e-posti kinnitamist saate edukalt sisse logida.',
    newAPIKeyGenerated: 'Uus API võti genereeritud.',
    newPassword: 'Uus parool',
    passed: 'Autentimine õnnestus',
    passwordResetSuccessfully: 'Parool edukalt lähtestatud.',
    resetPassword: 'Lähtesta parool',
    resetPasswordExpiration: 'Parooli lähtestamise aegumistähtaeg',
    resetPasswordToken: 'Parooli lähtestamise võti',
    resetYourPassword: 'Lähtesta oma parool',
    stayLoggedIn: 'Jää sisselogituks',
    successfullyRegisteredFirstUser: 'Esimene kasutaja edukalt registreeritud.',
    successfullyUnlocked: 'Edukalt avatud',
    tokenRefreshSuccessful: 'Võtme värskendamine õnnestus.',
    unableToVerify: 'Ei saa kinnitada',
    username: 'Kasutajanimi',
    usernameNotValid: 'Sisestatud kasutajanimi ei ole kehtiv',
    verified: 'Kinnitatud',
    verifiedSuccessfully: 'Edukalt kinnitatud',
    verify: 'Kinnita',
    verifyUser: 'Kinnita kasutaja',
    verifyYourEmail: 'Kinnita oma e-post',
    youAreInactive:
      'Te pole mõnda aega aktiivne olnud ja teid logitakse peagi teie turvalisuse huvides automaatselt välja. Kas soovite jääda sisselogituks?',
    youAreReceivingResetPassword:
      'Saite selle kirja, kuna teie (või keegi teine) on taotlenud teie konto parooli lähtestamist. Protsessi lõpuleviimiseks klõpsake järgmisel lingil või kopeerige see brauserisse:',
    youDidNotRequestPassword:
      'Kui te seda ei taotlenud, ignoreerige seda e-kirja ja teie parool jääb muutmata.',
  },
  error: {
    accountAlreadyActivated: 'See konto on juba aktiveeritud.',
    autosaving: 'Dokumendi automaatsel salvestamisel tekkis probleem.',
    correctInvalidFields: 'Palun paranda vigased väljad.',
    deletingFile: 'Faili kustutamisel tekkis viga.',
    deletingTitle:
      '{{title}} kustutamisel tekkis viga. Palun kontrollige ühendust ja proovige uuesti.',
    emailOrPasswordIncorrect: 'Sisestatud e-post või parool on vale.',
    followingFieldsInvalid_one: 'Järgmine väli on vigane:',
    followingFieldsInvalid_other: 'Järgmised väljad on vigased:',
    incorrectCollection: 'Vale kollektsioon',
    invalidFileType: 'Vale failitüüp',
    invalidFileTypeValue: 'Vale failitüüp: {{value}}',
    invalidRequestArgs: 'Päringule edastati vigased argumendid: {{args}}',
    loadingDocument: 'Dokumendi ID-ga {{id}} laadimisel tekkis probleem.',
    localesNotSaved_one: 'Järgmist keelt ei saanud salvestada:',
    localesNotSaved_other: 'Järgmisi keeli ei saanud salvestada:',
    logoutFailed: 'Väljalogimine ebaõnnestus.',
    missingEmail: 'E-post puudub.',
    missingIDOfDocument: 'Puudub uuendatava dokumendi ID.',
    missingIDOfVersion: 'Puudub versiooni ID.',
    missingRequiredData: 'Puuduvad vajalikud andmed.',
    noFilesUploaded: 'Ühtegi faili ei laaditud üles.',
    noMatchedField: 'Välja "{{label}}" ei leitud',
    notAllowedToAccessPage: 'Teil pole õigust sellele lehele ligi pääseda.',
    notAllowedToPerformAction: 'Teil pole õigust seda toimingut teha.',
    notFound: 'Soovitud ressurssi ei leitud.',
    noUser: 'Kasutajat pole',
    previewing: 'Selle dokumendi eelvaatamisel tekkis probleem.',
    problemUploadingFile: 'Faili üleslaadimisel tekkis probleem.',
    tokenInvalidOrExpired: 'Võti on kas vigane või aegunud.',
    tokenNotProvided: 'Võtit ei esitatud.',
    unableToDeleteCount: 'Ei õnnestunud kustutada {{count}} {{total}}-st {{label}}.',
    unableToReindexCollection:
      'Viga kollektsiooni {{collection}} taasindekseerimisel. Toiming katkestatud.',
    unableToUpdateCount: 'Ei õnnestunud uuendada {{count}} {{total}}-st {{label}}.',
    unauthorized: 'Volitamata, selle päringu tegemiseks peate olema sisse logitud.',
    unauthorizedAdmin: 'Volitamata, sellel kasutajal puudub juurdepääs administreerimispaneelile.',
    unknown: 'Tekkis tundmatu viga.',
    unPublishingDocument: 'Selle dokumendi avaldamise tühistamisel tekkis probleem.',
    unspecific: 'Tekkis viga.',
    unverifiedEmail: 'Palun kinnitage oma e-posti aadress enne sisselogimist.',
    userEmailAlreadyRegistered: 'Selle e-posti aadressiga kasutaja on juba registreeritud.',
    userLocked: 'See kasutaja on lukustatud liiga paljude ebaõnnestunud sisselogimiskatsete tõttu.',
    usernameAlreadyRegistered: 'Selle kasutajanimega kasutaja on juba registreeritud.',
    usernameOrPasswordIncorrect: 'Sisestatud kasutajanimi või parool on vale.',
    valueMustBeUnique: 'Väärtus peab olema unikaalne',
    verificationTokenInvalid: 'Kinnituskood on vigane.',
  },
  fields: {
    addLabel: 'Lisa {{label}}',
    addLink: 'Lisa link',
    addNew: 'Lisa uus',
    addNewLabel: 'Lisa uus {{label}}',
    addRelationship: 'Lisa seos',
    addUpload: 'Lisa üleslaadimine',
    block: 'plokk',
    blocks: 'plokid',
    blockType: 'Ploki tüüp',
    chooseBetweenCustomTextOrDocument:
      'Vali kohandatud teksti URL-i või teise dokumendiga linkimise vahel.',
    chooseDocumentToLink: 'Vali dokument, millega linkida',
    chooseFromExisting: 'Vali olemasolevate seast',
    chooseLabel: 'Vali {{label}}',
    collapseAll: 'Ahenda kõik',
    customURL: 'Kohandatud URL',
    editLabelData: 'Muuda {{label}} andmeid',
    editLink: 'Muuda linki',
    editRelationship: 'Muuda seost',
    enterURL: 'Sisesta URL',
    internalLink: 'Sisemine link',
    itemsAndMore: '{{items}} ja {{count}} veel',
    labelRelationship: '{{label}} seos',
    latitude: 'Laiuskraad',
    linkedTo: 'Lingitud <0>{{label}}</0>',
    linkType: 'Lingi tüüp',
    longitude: 'Pikkuskraad',
    newLabel: 'Uus {{label}}',
    openInNewTab: 'Ava uues sakis',
    passwordsDoNotMatch: 'Paroolid ei ühti.',
    relatedDocument: 'Seotud dokument',
    relationTo: 'Seos',
    removeRelationship: 'Eemalda seos',
    removeUpload: 'Eemalda üleslaadimine',
    saveChanges: 'Salvesta muudatused',
    searchForBlock: 'Otsi plokki',
    selectExistingLabel: 'Vali olemasolev {{label}}',
    selectFieldsToEdit: 'Vali väljad muutmiseks',
    showAll: 'Näita kõiki',
    swapRelationship: 'Vaheta seos',
    swapUpload: 'Vaheta üleslaadimine',
    textToDisplay: 'Kuvatav tekst',
    toggleBlock: 'Lülita plokk',
    uploadNewLabel: 'Lae üles uus {{label}}',
  },
  folder: {
    deleteConfirmation:
      'Pesastatud kaustad kustutatakse. Pesastatud dokumendid liiguvad lähimasse ülemkausta. Kas olete kindel?',
    deleteFolder: 'Kustuta kaust',
    folderName: 'Kausta nimi',
    moveFolder: 'Liiguta kausta',
    newFolder: 'Uus kaust',
    removeFromFolder: 'Eemalda kaustast',
    renameFolder: 'Nimeta kaust ümber',
    selectFolder: 'Vali kaust',
  },
  general: {
    aboutToDelete: 'Olete kustutamas {{label}} <1>{{title}}</1>. Olete kindel?',
    aboutToDeleteCount_many: 'Olete kustutamas {{count}} {{label}}',
    aboutToDeleteCount_one: 'Olete kustutamas {{count}} {{label}}',
    aboutToDeleteCount_other: 'Olete kustutamas {{count}} {{label}}',
    addBelow: 'Lisa alla',
    addFilter: 'Lisa filter',
    adminTheme: 'Administreerimisliidese teema',
    all: 'Kõik',
    allCollections: 'Kõik kollektsioonid',
    and: 'Ja',
    anotherUser: 'Teine kasutaja',
    anotherUserTakenOver: 'Teine kasutaja on võtnud selle dokumendi muutmise üle.',
    applyChanges: 'Rakenda muudatused',
    ascending: 'Kasvav',
    automatic: 'Automaatne',
    backToDashboard: 'Tagasi töölaua juurde',
    cancel: 'Tühista',
    changesNotSaved: 'Teie muudatusi pole salvestatud. Kui lahkute praegu, kaotate oma muudatused.',
    clearAll: 'Tühjenda kõik',
    close: 'Sulge',
    collapse: 'Ahenda',
    collections: 'Kollektsioonid',
    columns: 'Veerud',
    columnToSort: 'Sorteeritav veerg',
    confirm: 'Kinnita',
    confirmCopy: 'Kinnita kopeerimine',
    confirmDeletion: 'Kinnita kustutamine',
    confirmDuplication: 'Kinnita dubleerimine',
    confirmReindex: 'Indekseeri uuesti kõik {{collections}}?',
    confirmReindexAll: 'Indekseeri uuesti kõik kollektsioonid?',
    confirmReindexDescription:
      'See eemaldab olemasolevad indeksid ja indekseerib uuesti dokumendid kollektsioonides {{collections}}.',
    confirmReindexDescriptionAll:
      'See eemaldab olemasolevad indeksid ja indekseerib uuesti dokumendid kõigis kollektsioonides.',
    copied: 'Kopeeritud',
    copy: 'Kopeeri',
    copying: 'Kopeerimine',
    copyWarning: 'Olete üle kirjutamas {{to}} {{from}}-ga {{label}} {{title}} jaoks. Olete kindel?',
    create: 'Loo',
    created: 'Loodud',
    createdAt: 'Loomisaeg',
    createNew: 'Loo uus',
    createNewLabel: 'Loo uus {{label}}',
    creating: 'Loomine',
    creatingNewLabel: 'Uue {{label}} loomine',
    currentlyEditing:
      'muudab praegu seda dokumenti. Kui võtate üle, blokeeritakse neil muutmise jätkamine ja nad võivad kaotada salvestamata muudatused.',
    custom: 'Kohandatud',
    dark: 'Tume',
    dashboard: 'Töölaud',
    delete: 'Kustuta',
    deletedCountSuccessfully: 'Kustutatud {{count}} {{label}} edukalt.',
    deletedSuccessfully: 'Edukalt kustutatud.',
    deleting: 'Kustutamine...',
    depth: 'Sügavus',
    descending: 'Kahanev',
    deselectAllRows: 'Tühista kõigi ridade valik',
    document: 'Dokument',
    documentLocked: 'Dokument lukustatud',
    documents: 'Dokumendid',
    duplicate: 'Dubleeri',
    duplicateWithoutSaving: 'Dubleeri ilma muudatusi salvestamata',
    edit: 'Muuda',
    editAll: 'Muuda kõiki',
    editedSince: 'Muudetud alates',
    editing: 'Muutmine',
    editingLabel_many: 'Muudan {{count}} {{label}}',
    editingLabel_one: 'Muudan {{count}} {{label}}',
    editingLabel_other: 'Muudan {{count}} {{label}}',
    editingTakenOver: 'Muutmine üle võetud',
    editLabel: 'Muuda {{label}}',
    email: 'E-post',
    emailAddress: 'E-posti aadress',
    enterAValue: 'Sisesta väärtus',
    error: 'Viga',
    errors: 'Vead',
    fallbackToDefaultLocale: 'Kasuta vaikekeelt',
    false: 'Väär',
    filter: 'Filter',
    filters: 'Filtrid',
    filterWhere: 'Filtreeri {{label}} kus',
    globals: 'Globaalsed',
    goBack: 'Mine tagasi',
    isEditing: 'muudab',
    item: 'üksus',
    items: 'esemed',
    language: 'Keel',
    lastModified: 'Viimati muudetud',
    leaveAnyway: 'Lahku ikkagi',
    leaveWithoutSaving: 'Lahku ilma salvestamata',
    light: 'Hele',
    livePreview: 'Reaalajas eelvaade',
    loading: 'Laadimine',
    locale: 'Keel',
    locales: 'Keeled',
    menu: 'Menüü',
    moreOptions: 'Rohkem valikuid',
    move: 'Liiguta',
    moveConfirm: 'Te olete liikumas {{count}} {{label}} <1>{{destination}}</1>. Kas olete kindel?',
    moveCount: 'Teisalda {{count}} {{label}}',
    moveDown: 'Liiguta alla',
    moveUp: 'Liiguta üles',
    moving: 'Liikumine',
    movingCount: 'Liigutan {{count}} {{label}}',
    newPassword: 'Uus parool',
    next: 'Järgmine',
    noDateSelected: 'Kuupäeva ei ole valitud',
    noFiltersSet: 'Filtreid pole määratud',
    noLabel: '<{{label}} puudub>',
    none: 'Puudub',
    noOptions: 'Valikud puuduvad',
    noResults:
      '{{label}} ei leitud. Kas ühtegi {{label}} pole veel olemas või ükski ei vasta ülal määratud filtritele.',
    notFound: 'Ei leitud',
    nothingFound: 'Midagi ei leitud',
    noUpcomingEventsScheduled: 'Eelseisvaid sündmusi ei ole plaanitud.',
    noValue: 'Väärtus puudub',
    of: '/',
    only: 'Ainult',
    open: 'Ava',
    or: 'Või',
    order: 'Järjestus',
    overwriteExistingData: 'Kirjuta olemasolevad välja andmed üle',
    pageNotFound: 'Lehte ei leitud',
    password: 'Parool',
    payloadSettings: 'Payload seaded',
    perPage: 'Lehel: {{limit}}',
    previous: 'Eelmine',
    reindex: 'Indekseeri uuesti',
    reindexingAll: 'Indekseerin uuesti kõik {{collections}}.',
    remove: 'Eemalda',
    rename: 'Nimeta ümber',
    reset: 'Lähtesta',
    resetPreferences: 'Lähtesta eelistused',
    resetPreferencesDescription: 'See lähtestab kõik teie eelistused vaikeväärtustele.',
    resettingPreferences: 'Lähtestan eelistusi.',
    row: 'Rida',
    rows: 'Read',
    save: 'Salvesta',
    saving: 'Salvestamine...',
    schedulePublishFor: 'Planeeri avaldamine {{title}} jaoks',
    searchBy: 'Otsi {{label}} järgi',
    selectAll: 'Vali kõik {{count}} {{label}}',
    selectAllRows: 'Vali kõik read',
    selectedCount: '{{count}} {{label}} valitud',
    selectValue: 'Vali väärtus',
    showAllLabel: 'Näita kõiki {{label}}',
    sorryNotFound: 'Vabandust - teie päringule vastavat sisu ei leitud.',
    sort: 'Sorteeri',
    sortByLabelDirection: 'Sorteeri {{label}} {{direction}}',
    stayOnThisPage: 'Jää sellele lehele',
    submissionSuccessful: 'Esitamine õnnestus.',
    submit: 'Esita',
    submitting: 'Esitamine...',
    success: 'Õnnestus',
    successfullyCreated: '{{label}} edukalt loodud.',
    successfullyDuplicated: '{{label}} edukalt dubleeritud.',
    successfullyReindexed:
      'Edukalt indekseeritud {{count}} {{total}}-st dokumendist kollektsioonides {{collections}}',
    takeOver: 'Võta üle',
    thisLanguage: 'Eesti',
    time: 'Aeg',
    timezone: 'Ajavöönd',
    titleDeleted: '{{label}} "{{title}}" edukalt kustutatud.',
    true: 'Tõene',
    unauthorized: 'Volitamata',
    unsavedChanges: 'Teil on salvestamata muudatusi. Salvestage või tühistage enne jätkamist.',
    unsavedChangesDuplicate: 'Teil on salvestamata muudatusi. Kas soovite jätkata dubleerimisega?',
    untitled: 'Pealkirjata',
    upcomingEvents: 'Eelseisvad sündmused',
    updatedAt: 'Uuendatud',
    updatedCountSuccessfully: 'Uuendatud {{count}} {{label}} edukalt.',
    updatedSuccessfully: 'Edukalt uuendatud.',
    updating: 'Uuendamine',
    uploading: 'Üleslaadimine',
    uploadingBulk: 'Üleslaadimine {{current}} / {{total}}',
    user: 'Kasutaja',
    username: 'Kasutajanimi',
    users: 'Kasutajad',
    value: 'Väärtus',
    viewReadOnly: 'Vaata ainult lugemiseks',
    welcome: 'Tere tulemast',
  },
  localization: {
    cannotCopySameLocale: 'Ei saa kopeerida samasse keelde',
    copyFrom: 'Kopeeri keelest',
    copyFromTo: 'Kopeerin keelest {{from}} keelde {{to}}',
    copyTo: 'Kopeeri keelde',
    copyToLocale: 'Kopeeri keelde',
    localeToPublish: 'Lokaal avaldamiseks',
    selectLocaleToCopy: 'Vali keel kopeerimiseks',
  },
  operators: {
    contains: 'sisaldab',
    equals: 'võrdub',
    exists: 'eksisteerib',
    intersects: 'lõikub',
    isGreaterThan: 'on suurem kui',
    isGreaterThanOrEqualTo: 'on suurem või võrdne kui',
    isIn: 'on hulgas',
    isLessThan: 'on väiksem kui',
    isLessThanOrEqualTo: 'on väiksem või võrdne kui',
    isLike: 'on sarnane',
    isNotEqualTo: 'ei võrdu',
    isNotIn: 'ei ole hulgas',
    isNotLike: 'ei ole nagu',
    near: 'lähedal',
    within: 'vahemikus',
  },
  upload: {
    addFile: 'Lisa fail',
    addFiles: 'Lisa failid',
    bulkUpload: 'Massiüleslaadimine',
    crop: 'Kärbi',
    cropToolDescription:
      'Lohista valitud ala nurki, joonista uus ala või kohanda väärtusi allpool.',
    dragAndDrop: 'Lohista ja aseta fail',
    dragAndDropHere: 'või lohista ja aseta fail siia',
    editImage: 'Muuda pilti',
    fileName: 'Failinimi',
    fileSize: 'Failisuurus',
    filesToUpload: 'Üleslaetavad failid',
    fileToUpload: 'Üleslaetav fail',
    focalPoint: 'Fookuspunkt',
    focalPointDescription: 'Lohista fookuspunkti otse eelvaatel või kohanda väärtusi allpool.',
    height: 'Kõrgus',
    lessInfo: 'Vähem infot',
    moreInfo: 'Rohkem infot',
    noFile: 'Pole faili',
    pasteURL: 'Kleebi URL',
    previewSizes: 'Eelvaate suurused',
    selectCollectionToBrowse: 'Vali kollektsioon sirvimiseks',
    selectFile: 'Vali fail',
    setCropArea: 'Määra kärpeala',
    setFocalPoint: 'Määra fookuspunkt',
    sizes: 'Suurused',
    sizesFor: 'Suurused {{label}} jaoks',
    width: 'Laius',
  },
  validation: {
    emailAddress: 'Palun sisesta kehtiv e-posti aadress.',
    enterNumber: 'Palun sisesta kehtiv number.',
    fieldHasNo: 'Sellel väljal pole {{label}}',
    greaterThanMax: '{{value}} on suurem kui lubatud maksimaalne {{label}} {{max}}.',
    invalidInput: 'Sellel väljal on vigane sisend.',
    invalidSelection: 'Sellel väljal on vigane valik.',
    invalidSelections: 'Sellel väljal on järgmised vigased valikud:',
    lessThanMin: '{{value}} on väiksem kui lubatud minimaalne {{label}} {{min}}.',
    limitReached: 'Limiit saavutatud, saab lisada ainult {{max}} üksust.',
    longerThanMin: 'See väärtus peab olema pikem kui minimaalne pikkus {{minLength}} tähemärki.',
    notValidDate: '"{{value}}" ei ole kehtiv kuupäev.',
    required: 'See väli on kohustuslik.',
    requiresAtLeast: 'See väli nõuab vähemalt {{count}} {{label}}.',
    requiresNoMoreThan: 'See väli ei tohi sisaldada rohkem kui {{count}} {{label}}.',
    requiresTwoNumbers: 'See väli nõuab kahte numbrit.',
    shorterThanMax: 'See väärtus peab olema lühem kui maksimaalne pikkus {{maxLength}} tähemärki.',
    timezoneRequired: 'Ajavöönd on vajalik.',
    trueOrFalse: 'See väli saab olla ainult tõene või väär.',
    username:
      'Palun sisesta kehtiv kasutajanimi. Võib sisaldada tähti, numbreid, sidekriipse, punkte ja alakriipse.',
    validUploadID: 'See väli ei ole kehtiv üleslaadimise ID.',
  },
  version: {
    type: 'Tüüp',
    aboutToPublishSelection: 'Olete avaldamas kõiki valitud {{label}}. Olete kindel?',
    aboutToRestore:
      'Olete taastamas seda {{label}} dokumenti seisundisse, milles see oli {{versionDate}}.',
    aboutToRestoreGlobal:
      'Olete taastamas globaalset {{label}} seisundisse, milles see oli {{versionDate}}.',
    aboutToRevertToPublished:
      'Olete taastamas selle dokumendi muudatusi avaldatud seisundisse. Olete kindel?',
    aboutToUnpublish: 'Olete tühistamas selle dokumendi avaldamist. Olete kindel?',
    aboutToUnpublishSelection: 'Olete tühistamas kõigi valitud {{label}} avaldamist. Olete kindel?',
    autosave: 'Automaatne salvestamine',
    autosavedSuccessfully: 'Automaatselt salvestatud.',
    autosavedVersion: 'Automaatselt salvestatud versioon',
    changed: 'Muudetud',
    changedFieldsCount_one: '{{count}} muudetud väli',
    changedFieldsCount_other: '{{count}} muudetud välja',
    compareVersion: 'Võrdle versiooni:',
    confirmPublish: 'Kinnita avaldamine',
    confirmRevertToSaved: 'Kinnita taastamine salvestatud seisundisse',
    confirmUnpublish: 'Kinnita avaldamise tühistamine',
    confirmVersionRestoration: 'Kinnita versiooni taastamine',
    currentDocumentStatus: 'Praegune {{docStatus}} dokument',
    currentDraft: 'Praegune mustand',
    currentPublishedVersion: 'Praegune avaldatud versioon',
    draft: 'Mustand',
    draftSavedSuccessfully: 'Mustand edukalt salvestatud.',
    lastSavedAgo: 'Viimati salvestatud {{distance}} tagasi',
    modifiedOnly: 'Muudetud ainult',
    noFurtherVersionsFound: 'Rohkem versioone ei leitud',
    noRowsFound: '{{label}} ei leitud',
    noRowsSelected: '{{label}} pole valitud',
    preview: 'Eelvaade',
    previouslyPublished: 'Varem avaldatud',
    problemRestoringVersion: 'Selle versiooni taastamisel tekkis probleem',
    publish: 'Avalda',
    publishAllLocales: 'Avaldage kõik lokaadid',
    publishChanges: 'Avalda muudatused',
    published: 'Avaldatud',
    publishIn: 'Avalda keeles {{locale}}',
    publishing: 'Avaldamine',
    restoreAsDraft: 'Taasta mustandina',
    restoredSuccessfully: 'Edukalt taastatud.',
    restoreThisVersion: 'Taasta see versioon',
    restoring: 'Taastamine...',
    reverting: 'Taastamine...',
    revertToPublished: 'Taasta avaldatud seisund',
    saveDraft: 'Salvesta mustand',
    scheduledSuccessfully: 'Planeeritud edukalt.',
    schedulePublish: 'Planeeri avaldamine',
    selectLocales: 'Vali kuvatavad keeled',
    selectVersionToCompare: 'Vali versioon võrdlemiseks',
    showingVersionsFor: 'Näitan versioone:',
    showLocales: 'Näita keeli:',
    status: 'Olek',
    unpublish: 'Tühista avaldamine',
    unpublishing: 'Avaldamise tühistamine...',
    version: 'Versioon',
    versionCount_many: '{{count}} versiooni leitud',
    versionCount_none: 'Versioone ei leitud',
    versionCount_one: '{{count}} versioon leitud',
    versionCount_other: '{{count}} versiooni leitud',
    versionCreatedOn: '{{version}} loodud:',
    versionID: 'Versiooni ID',
    versions: 'Versioonid',
    viewingVersion: 'Vaatan versiooni {{entityLabel}} {{documentTitle}} jaoks',
    viewingVersionGlobal: 'Vaatan versiooni globaalse {{entityLabel}} jaoks',
    viewingVersions: 'Vaatan versioone {{entityLabel}} {{documentTitle}} jaoks',
    viewingVersionsGlobal: 'Vaatan versioone globaalse {{entityLabel}} jaoks',
  },
}

export const et: Language = {
  dateFNSKey: 'et',
  translations: etTranslations,
}
