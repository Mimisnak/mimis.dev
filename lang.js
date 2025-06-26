// Language System for Portfolio
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio-lang') || 'el';
        this.translations = {
            el: {
                // Navigation
                'nav.home': 'Αρχική',
                'nav.about': 'Βιογραφικό',
                'nav.projects': 'Έργα',
                'nav.contact': 'Επικοινωνία',
                
                // Hero Section
                'hero.greeting': 'Γεια σας, είμαι ο',
                'hero.name': 'Δημήτριος Νάκος',
                'hero.title': 'Web Developer & Φοιτητής Πληροφορικής',
                'hero.description': 'Δημιουργώ σύγχρονες και λειτουργικές ιστοσελίδες με καθαρό κώδικα και όμορφο design.',
                'hero.viewWork': 'Δες τη Δουλειά μου',
                'hero.contact': 'Επικοινωνία',
                'hero.downloadCV': 'Κατέβασε CV',
                
                // Stats
                'stats.experience': 'Έτη Εμπειρίας',
                'stats.projects': 'Έργα',
                'stats.clients': 'Πελάτες',
                
                // About Page
                'about.title': 'Σπουδές & Εμπειρία',
                'about.subtitle': 'Η εκπαιδευτική μου πορεία και οι δεξιότητες που έχω αναπτύξει',
                'about.education': 'Εκπαίδευση & Εμπειρία',
                'about.university': 'Σπουδάζει Πληροφορικής',
                'about.university.name': 'Πανεπιστήμιο Δυτικής Μακεδονίας (Καστοριά)',
                'about.university.desc': 'Σπουδάζω Πληροφορική με εξειδίκευση στον Web Development και τις Δικτυακές Τεχνολογίες',
                'about.internship': 'Πρώην Πρακτική Technical Services',
                'about.internship.company': 'COSMOTE - Ξάνθη, Θράκη',
                'about.internship.desc': 'Πρακτική άσκηση στον τομέα των τεχνικών υπηρεσιών με εμπειρία σε δικτυακές υποδομές και τεχνική υποστήριξη',
                'about.highschool': '2ο Τεχνικό Λύκειο Ξάνθης',
                'about.highschool.spec': 'Ειδικότητα: Ηλεκτρολόγος Εσωτερικών Εγκαταστάσεων',
                'about.highschool.desc': 'Απόκτηση τεχνικών γνώσεων σε ηλεκτρολογικές εγκαταστάσεις και συστήματα',
                
                // Projects Page
                'projects.title': 'Έργα',
                'projects.subtitle': 'Μερικά από τα πρόγραμμα που έχω δημιουργήσει',
                'projects.all': 'Όλα',
                'projects.website': 'Ιστοσελίδα',
                'projects.coming': 'Σύντομα...',
                'projects.liveDemo': 'Demo',
                'projects.sourceCode': 'Κώδικας',
                
                // Contact Page
                'contact.title': 'Επικοινωνία',
                'contact.subtitle': 'Στείλτε μου μήνυμα ή βρείτε με στα social media',
                'contact.info': 'Στοιχεία Επικοινωνίας',
                'contact.phone': 'Τηλεφωνική Επικοινωνία',
                'contact.location': 'Ξάνθη, Ελλάδα',
                'contact.form.title': 'Βάλτε τα στοιχεία σας για επικοινωνία',
                'contact.form.name': 'Το όνομά σας',
                'contact.form.email': 'Email',
                'contact.form.message': 'Το μήνυμά σας',
                'contact.form.terms': 'Αποδέχομαι τους όρους χρήσης και τη μεταχείριση των προσωπικών μου δεδομένων για την επικοινωνία',
                'contact.form.send': 'Αποστολή Μηνύματος',
                'contact.phone.modal.title': 'Τηλεφωνική Επικοινωνία',
                'contact.phone.modal.text': 'Για να λάβετε το τηλέφωνό μου, παρακαλώ επικοινωνήστε μαζί μου πρώτα μέσω email ή των social media για να παρέχω αυτήν την πληροφορία.',
                'contact.phone.modal.ok': 'Κατανοητό',
                
                // Footer
                'footer.rights': '© 2025 Portfolio by Dimitris Nakos. All rights reserved.',
                
                // Breadcrumb
                'breadcrumb.home': 'Αρχική',
                'breadcrumb.about': 'Βιογραφικό',
                'breadcrumb.projects': 'Έργα',
                'breadcrumb.contact': 'Επικοινωνία',
                
                // Terminal
                'terminal.user': 'χρήστης',
                'terminal.role': 'Web Developer & Φοιτητής Πληροφορικής',
                'terminal.skills': 'HTML, CSS, JavaScript, PHP, MySQL, Python',
                'terminal.learning': 'Μαθαίνω νέες τεχνολογίες κάθε μέρα...',
                'terminal.passion': 'Πάθος για καθαρό κώδικα και όμορφο design!',
                
                // Alerts & Messages
                'alert.formRequired': 'Παρακαλώ συμπληρώστε όλα τα πεδία!',
                'alert.emailInvalid': 'Παρακαλώ εισάγετε ένα έγκυρο email!',
                'alert.emailSent': 'Το email client σας θα ανοίξει για αποστολή. Αν δεν ανοίξει, στείλτε email απευθείας στο: dimitriosnakos.g@gmail.com',
                
                // Hero additions
                'hero.badge': '📚 Μαθαίνω & δημιουργώ κάθε μέρα',
                'hero.about': 'Σπουδές & Εμπειρία',
                'stats.learning': 'Διάθεση για Μάθηση',
                
                // About additions
                'about.present': 'Τώρα',
                'about.internship.date': '1 Ιουλίου 2024 - 3 Οκτωβρίου 2024',
                'about.internship.learnMore': 'Μάθε Περισσότερα',
                'about.internship.modal.title': 'Λεπτομέρειες Πρακτικής - COSMOTE',
                'about.internship.modal.text': 'Η μοναδική εργασιακή εμπειρία που είχα ήταν μια τρίμηνη πρακτική άσκηση στη Cosmote μέσω ΤΤΛΠ, όπου εργάστηκα ως τεχνικός πεδίου στο Κέντρο Διανομής Οπτικών Ινών Ξάνθης. Εκεί, είχα την ευκαιρία να εργαστώ, πέρα από το τεχνικό μέρος (νέες συνδέσεις, βλάβες, μεταφορές κ.λπ.), με οπτικές ίνες. Ήμουν, μαζί με έναν συνάδελφο, από τους πρώτους που εγκατέστησαν οπτικές ίνες στη Ξάνθη, εκτελώντας συνδέσεις και επισκευάζοντας βλάβες. Κατά τη διάρκεια της πρακτικής μου στη Cosmote, ολοκληρώσαμε 40 πρώτες συνδέσεις σε όλη τη Ξάνθη. Ακόμη και όταν άρχισαν άλλοι, μας ζητούσαν να τους δείξουμε τα προβλήματα που αντιμετωπίζαμε. Εργάστηκα επίσης με εξοπλισμό Cisco. Η πρακτική μου συνέπεσε με την αλλαγή προγράμματος από WFM σε FSM. Συνολικά, κατά τη διάρκεια αυτής της τρίμηνης περιόδου έμαθα πολλά και ήμουν έτοιμος για μόνιμη θέση στη Cosmote, αλλά η πρακτική μου τελείωσε.',
                'about.internship.modal.close': 'Κλείσιμο',

                // Projects additions
                'projects.websites': 'Websites',
                'projects.menu': 'Menu App',
                'projects.practice': 'Practice',
                'projects.comingSoon.desc': 'Νέο project σε ανάπτυξη',
                'projects.github.title': 'Δείτε όλα τα projects μου στο GitHub',
                'projects.github.visit': 'Επισκεφθείτε το GitHub μου',
                'projects.github.desc': 'Ανακαλύψτε περισσότερα projects, code snippets και τη διαδρομή της μάθησής μου'
            },
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.projects': 'Projects',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.greeting': 'Hello, I am',
                'hero.name': 'Dimitrios Nakos',
                'hero.title': 'Web Developer & Computer Science Student',
                'hero.description': 'I create modern and functional websites with clean code and beautiful design.',
                'hero.viewWork': 'View My Work',
                'hero.contact': 'Contact Me',
                'hero.downloadCV': 'Download CV',
                
                // Stats
                'stats.experience': 'Years Experience',
                'stats.projects': 'Projects',
                'stats.clients': 'Clients',
                
                // About Page
                'about.title': 'Education & Experience',
                'about.subtitle': 'My educational journey and the skills I have developed',
                'about.education': 'Education & Experience',
                'about.university': 'Computer Science Student',
                'about.university.name': 'University of Western Macedonia (Kastoria)',
                'about.university.desc': 'Studying Computer Science with specialization in Web Development and Network Technologies',
                'about.internship': 'Former Technical Services Intern',
                'about.internship.company': 'COSMOTE - Xanthi, Thrace',
                'about.internship.desc': 'Internship in technical services with experience in network infrastructure and technical support',
                'about.highschool': '2nd Technical High School of Xanthi',
                'about.highschool.spec': 'Specialty: Interior Electrical Installations Electrician',
                'about.highschool.desc': 'Acquired technical knowledge in electrical installations and systems',
                
                // Projects Page
                'projects.title': 'Projects',
                'projects.subtitle': 'Some of the programs I have created',
                'projects.all': 'All',
                'projects.website': 'Website',
                'projects.coming': 'Coming Soon...',
                'projects.liveDemo': 'Live Demo',
                'projects.sourceCode': 'Source Code',
                
                // Contact Page
                'contact.title': 'Contact',
                'contact.subtitle': 'Send me a message or find me on social media',
                'contact.info': 'Contact Information',
                'contact.phone': 'Phone Contact',
                'contact.location': 'Xanthi, Greece',
                'contact.form.title': 'Enter your details for contact',
                'contact.form.name': 'Your Name',
                'contact.form.email': 'Email',
                'contact.form.message': 'Your Message',
                'contact.form.terms': 'I accept the terms of use and the handling of my personal data for communication',
                'contact.form.send': 'Send Message',
                'contact.phone.modal.title': 'Phone Contact',
                'contact.phone.modal.text': 'To get my phone number, please contact me first via email or social media to provide this information.',
                'contact.phone.modal.ok': 'Understood',
                
                // Footer
                'footer.rights': '© 2025 Portfolio by Dimitris Nakos. All rights reserved.',
                
                // Breadcrumb
                'breadcrumb.home': 'Home',
                'breadcrumb.about': 'About',
                'breadcrumb.projects': 'Projects',
                'breadcrumb.contact': 'Contact',
                
                // Terminal
                'terminal.user': 'user',
                'terminal.role': 'Web Developer & Computer Science Student',
                'terminal.skills': 'HTML, CSS, JavaScript, PHP, MySQL, Python',
                'terminal.learning': 'Learning new technologies every day...',
                'terminal.passion': 'Passion for clean code and beautiful design!',
                
                // Alerts & Messages
                'alert.formRequired': 'Please fill in all fields!',
                'alert.emailInvalid': 'Please enter a valid email!',
                'alert.emailSent': 'Your email client will open for sending. If it doesn\'t open automatically, send email directly to: dimitriosnakos.g@gmail.com',
                
                // Hero additions
                'hero.badge': '📚 Learning & creating every day',
                'hero.about': 'Education & Experience',
                'stats.learning': 'Passion for Learning',
                
                // About additions
                'about.present': 'Present',
                'about.internship.date': 'July 1, 2024 - October 3, 2024',
                'about.internship.learnMore': 'Learn More',
                'about.internship.modal.title': 'Internship Details - COSMOTE',
                'about.internship.modal.text': 'The only work experience I had was a three-month internship at Cosmote through ΤΤΛΠ, where I worked as a field technician at the Xanthi Optical Fiber Distribution Center. There, I had the opportunity to work, beyond the technical part (new connections, faults, transfers, etc.), with optical fibers. I was, together with a colleague, one of the first to install optical fibers in Xanthi, performing connections and repairing faults. During my internship at Cosmote, we completed 40 first connections throughout Xanthi. Even when others started, they asked us to show them the problems we were facing. I also worked with Cisco equipment. My internship coincided with the program change from WFM to FSM. Overall, during this three-month period I learned a lot and was ready for a permanent position at Cosmote, but my internship was over.',
                'about.internship.modal.close': 'Close',

                // Projects additions
                'projects.websites': 'Websites',
                'projects.menu': 'Menu App',
                'projects.practice': 'Practice',
                'projects.comingSoon.desc': 'New project in development',
                'projects.github.title': 'See all my projects on GitHub',
                'projects.github.visit': 'Visit my GitHub',
                'projects.github.desc': 'Discover more projects, code snippets and my learning journey'
            }
        };
        this.init();
    }
    
    init() {
        this.updateContent();
        this.updateLanguageButton();
        this.updateDocumentTitle();
    }
    
    toggleLanguage() {
        this.currentLang = this.currentLang === 'el' ? 'en' : 'el';
        localStorage.setItem('portfolio-lang', this.currentLang);
        this.updateContent();
        this.updateLanguageButton();
        this.updateDocumentTitle();
        this.updateHtmlLang();
    }
    
    updateContent() {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
    
    updateLanguageButton() {
        const langButton = document.querySelector('.lang-toggle');
        if (langButton) {
            langButton.innerHTML = `<i class="fas fa-globe"></i> ${this.currentLang === 'el' ? 'EN' : 'ΕΛ'}`;
        }
    }
    
    updateDocumentTitle() {
        const titleMap = {
            'el': {
                'index.html': 'Δημήτριος Νάκος - Web Developer & Φοιτητής Πληροφορικής',
                'about.html': 'Σπουδές & Εμπειρία - Δημήτριος Νάκος',
                'projects.html': 'Έργα - Δημήτριος Νάκος',
                'contact.html': 'Επικοινωνία - Δημήτριος Νάκος'
            },
            'en': {
                'index.html': 'Dimitrios Nakos - Web Developer & Computer Science Student',
                'about.html': 'Education & Experience - Dimitrios Nakos',
                'projects.html': 'Projects - Dimitrios Nakos',
                'contact.html': 'Contact - Dimitrios Nakos'
            }
        };
        
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const newTitle = titleMap[this.currentLang][currentPage];
        if (newTitle) {
            document.title = newTitle;
        }
    }
    
    updateHtmlLang() {
        document.documentElement.lang = this.currentLang;
    }
    
    getTranslation(key) {
        return this.translations[this.currentLang][key] || this.translations['el'][key] || key;
    }
    
    alert(key) {
        const message = this.getTranslation(key);
        alert(message);
    }
}

// Initialize Language Manager
const langManager = new LanguageManager();

// Global function για toggle
function toggleLanguage() {
    langManager.toggleLanguage();
}

// Export για χρήση σε άλλα scripts
window.langManager = langManager;
