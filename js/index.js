// let effect = document.querySelector(".effect");
// let prog = "Mostafa Magdy.";
// let i = 1;

// setInterval(writeText, 300);
// function writeText() {
//     effect.innerHTML = prog.slice(0, i);
//     i++;
//     if (i > prog.length) {
//         i = 1;
//     }
// }

const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

sectBtn.forEach(button => {
    button.addEventListener('click', function () {
        sectBtn.forEach(btn => btn.classList.remove("active-btn"));
        this.classList.add('active-btn');
    })
})
allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        sectBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        sections.forEach((section) => {
            section.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})


let themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
})

// document.addEventListener('DOMContentLoaded', () => {
//     const certModal = document.getElementById('cert-js-modal');
//     const openCertBtn = document.getElementById('open-alx-cert');
//     const closeXBtn = document.querySelector('.modal-x-close');

//     if (openCertBtn && certModal) {
//         openCertBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             certModal.classList.add('active-modal');
//             document.body.style.overflow = 'hidden'; 
//     }

//     if (closeXBtn && certModal) {
//         closeXBtn.addEventListener('click', () => {
//             certModal.classList.remove('active-modal');
//             document.body.style.overflow = 'auto'; 
//         });
//     }

//     if (certModal) {
//         certModal.addEventListener('click', (e) => {
//             if (e.target === certModal) {
//                 certModal.classList.remove('active-modal');
//                 document.body.style.overflow = 'auto';
//             }
//         });
//     }
// });


const technicalProjects = [
    {
        title: "Multi-Tenant Pharmacy SaaS",
        category: "fullstack",
        displayCategory: "Enterprise Backend Architecture",
        status: "construction",
        tags: ["Python", "Flask", "SQLAlchemy", "Multi-Tenancy", "Database Design", "React.js"],
        description: "A scalable Multi-Tenant SaaS platform architecture designed for pharmacy management ecosystems. Features an intricate relational schema handling secure isolated tenancies, unified inventory tracking, comprehensive billing/returns, and automated notification webhooks.",
        image: "assets/saas-phramacy.png",
        github: "",
    },
    {
        title: "ALX Capstone: MERN Stack Blogging Platform",
        category: "fullstack",
        displayCategory: "Full-Stack Application",
        status: "completed",
        tags: ["MongoDB", "Express.js", "React", "Node.js"],
        description: "The official ALX graduation capstone project. A comprehensive production-ready blogging platform engineered using the MERN stack. Features a secure RESTful API, dynamic CRUD operations, robust state management, and optimized NoSQL data modeling.",
        image: "",
        github: "https://github.com/mostafa-m-desouky/MERN-Blog",
        live: ""
    },
    {
        title: "EduStream-Pro (LMS Backend Architecture)",
        category: "backend",
        displayCategory: "Backend System",
        status: "construction",
        tags: ["Python", "Flask", "SQLAlchemy", "Role-Based Auth", "Payment Integration"],
        description: "A comprehensive Learning Management System (LMS) backend engine built with Python and Flask. Features a multi-layered database architecture managing scalable student-instructor authentication, relational course/lesson structures, dynamic enrollments, and secure financial payment tracking.",
        image: "assets/edo_stream.png",
        github: "",
        live: "https://github.com/mostafa-m-desouky/EduStream-Pro"
    },
    {
        title: "Flask RESTful Blogging Engine",
        category: "backend",
        displayCategory: "Backend System",
        status: "completed",
        tags: ["Python", "Flask", "SQLite", "SQLAlchemy ORM", "Flask-Login"],
        description: "A robust backend blogging engine powered by Python and Flask. Features a relational SQLite database schema managed via SQLAlchemy ORM, incorporating secure user authentication, stateful session loading, and relational integrity with cascade operations.",
        image: "assets/Blog.png",
        github: "https://github.com/mostafa-m-desouky/Blog_project",
        live: ""
    },
    {
        title: "GPT-3 OpenAI Landing Page",
        category: "frontend",
        displayCategory: "Frontend Web (Vanilla)",
        status: "completed",
        tags: ["React.js", "JavaScript (ES6+)", "CSS BEM Methodology", "Responsive Design"],
        description: "A high-fidelity AI-themed tech landing page built using React.js. Focused on transforming complex Figma mockups into reusable React components while implementing modern dark-themed CSS styling and fully fluid layouts.",
        image: "assets/ai.png",
        github: "https://github.com/mostafa-m-desouky/react-project",
        live: "https://react-project-gamma-bice.vercel.app/"
    },
    {
        title: "Room Homepage (Frontend Mentor)",
        category: "frontend",
        displayCategory: "Frontend Web (Vanilla)",
        status: "completed",
        tags: ["React.js", "JavaScript (ES6+)", "CSS Grid/Flexbox", "State Management"],
        description: "A high-fidelity implementation of the advanced 'Room Homepage' challenge from Frontend Mentor. Built with React.js to deliver a pixel-perfect e-commerce slider, focusing on robust state management for dynamic content routing and intricate grid alignments.",
        image: "assets/room.png",
        github: "https://github.com/mostafa-m-desouky/room-homepage",
        live: "https://room-homepage-dun.vercel.app/index.html"
    },
    {
        title: "Creative Agency Landing Page",
        category: "frontend",
        displayCategory: "Frontend Web (Vanilla)",
        status: "completed",
        tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Grid"],
        description: "A sleek and fully responsive agency landing page engineered using pure native JavaScript, custom CSS layouts, and semantic HTML. Optimized for fluid navigation, interactive UI components, and modern typography hierarchy across all viewport scales.",
        image: "assets/agency.png",
        github: "https://github.com/mostafa-m-desouky/modern-agency-ui",
        live: "https://mostafa-m-desouky.github.io/modern-agency-ui/"
    },
    {
        title: "Modern E-Commerce UI Concept",
        category: "frontend",
        displayCategory: "Frontend Web (Vanilla)",
        status: "completed",
        tags: ["HTML5", "CSS3", "Responsive Design", "UI/UX Optimization"],
        description: "A pixel-perfect frontend landing page designed to master advanced CSS layouts, creative shapes, and responsive modern store interfaces. Focused on slicing complex UI designs into clean, semantic HTML structure.",
        image: "assets/fashion.png",
        github: "https://github.com/mostafa-m-desouky/Fashion-Ecommerce",
        live: "https://mostafa-m-desouky.github.io/Fashion-Ecommerce/"
    },
    {
        title: "iMovies Responsive Interface",
        category: "frontend",
        displayCategory: "Frontend Web (Vanilla)",
        status: "completed",
        tags: ["HTML5", "CSS3", "JavaScript (ES6)", "Flexbox/Grid"],
        description: "An interactive movie streaming dashboard concept built to practice dynamic content presentation, responsive media grids, and hover-state transitions. Developed as a practical study in building modern media layouts.",
        image: "assets/movies.png",
        github: "https://github.com/mostafa-m-desouky/Movie-Website",
        live: "https://mostafa-m-desouky.github.io/Movie-Website/"
    },
    {
        title: "UNIX Command-Line Interpreter (Simple Shell)",
        category: "systems",
        displayCategory: "Systems & Algorithms",
        status: "refactoring",
        tags: ["C Language", "Systems Programming", "POSIX API", "Process Control"],
        description: "A functional UNIX command-line interpreter designed to explore core operating system concepts. Features command parsing, environment variable handling, and process lifecycle management using native system calls.",
        image: "",
        github: "https://github.com/mostafa-m-desouky/simple_shell",
        live: ""
    },

    {
        title: "Custom printf Function",
        category: "systems",
        displayCategory: "Systems & Algorithms",
        status: "completed",
        tags: ["C Language", "Memory Management", "Pointers", "Low-Level IO"],
        description: "A custom low-level implementation of the standard C library 'printf' function. Built from scratch to handle variadic arguments and dynamic format specifiers, emphasizing optimized memory allocation and manual character buffer management.",
        image: "",
        github: "https://github.com/mostafa-m-desouky/c-algorithms",
        live: ""
    }
];

// 2. دالة توليد شارة الحالة الملونة والشفافة (توضع أعلى اليمين)
function getStatusMarkup(status) {
    if (status === 'completed') {
        return `<div class="project-status-badge status-completed"><span class="status-dot"></span>Completed</div>`;
    }
    if (status === 'refactoring') {
        return `<div class="project-status-badge status-refactoring"><span class="status-dot"></span>Refactoring</div>`;
    }
    if (status === 'construction') {
        return `<div class="project-status-badge status-construction"><span class="status-dot"></span>In Progress</div>`;
    }
    return '';
}

// 3. دالة جلب الأيقونة المناسبة للخلفيات التجريدية (Fallback Icons)
function getDomainIcon(category) {
    if (category === 'fullstack') return 'fas fa-layer-group';
    if (category === 'backend') return 'fas fa-server';
    if (category === 'frontend') return 'fas fa-laptop-code';
    if (category === 'systems') return 'fas fa-microchip';
    return 'fas fa-code';
}

// 4. الدالة الأساسية لبناء ورص كروت الـ Grid في الـ HTML
function renderPortfolioGrid(projectsToDisplay) {
    const gridContainer = document.getElementById('portfolio-grid-container');
    gridContainer.innerHTML = ""; // تنظيف الشبكة تماماً قبل الرص الجديد

    projectsToDisplay.forEach(project => {
        // إدارة ظهور زر الجيت هاب ذكياً لحماية مستودعاتك الخاصة
        const githubLinkHTML = project.github
            ? `<a href="${project.github}" target="_blank" class="hover-icon-link" title="Source Code"><i class="fab fa-github"></i></a>`
            : '';

        // إدارة ظهور زر الـ Live Demo بناءً على وجود الرابط
        const liveLinkHTML = project.live
            ? `<a href="${project.live}" target="_blank" class="hover-icon-link" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>`
            : '';

        // إدارة طريقة عرض ميديا الكارت (صورة حقيقية مقصوصة أو خلفية متدرجة ذكية لـ C)
        const mediaHTML = project.image
            ? `<img src="${project.image}" alt="${project.title}" class="project-real-img">`
            : `<div class="project-placeholder-bg ${project.category}"><i class="${getDomainIcon(project.category)}"></i></div>`;

        // توليد التاجات التقنية الصغيرة
        const techTagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

        // تجميع هيكل الكارت الكامل والمطور
        const cardMarkup = `
            <div class="portfolio-card-item">
                <div class="card-image-wrapper">
                    ${getStatusMarkup(project.status)} ${mediaHTML}
                    <div class="card-hover-overlay">
                        ${githubLinkHTML}
                        ${liveLinkHTML}
                    </div>
                </div>
                <div class="card-info-content">
                    <span class="project-category-tag">${project.displayCategory}</span>
                    <h3>${project.title}</h3>
                    <div class="tech-tags-list">
                        ${techTagsHTML}
                    </div>
                    <p>${project.description}</p>
                </div>
            </div>
        `;
        gridContainer.insertAdjacentHTML('beforeend', cardMarkup);
    });
}

// 5. إدارة أحداث الضغط على أزرار الأقسام (Filter Tabs) والبدء الفوري
document.addEventListener('DOMContentLoaded', () => {
    // رص كافة المشاريع تلقائياً عند فتح الصفحة لأول مرة
    renderPortfolioGrid(technicalProjects);

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // نقل كلاس الفاعلية (Active) للزر الجديد
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');

            const selectedFilter = e.target.getAttribute('data-filter');

            if (selectedFilter === 'all') {
                renderPortfolioGrid(technicalProjects);
            } else {
                // فلترة مصفوفة البيانات الكبيرة بناءً على القسم الهندسي المختار
                const filteredData = technicalProjects.filter(p => p.category === selectedFilter);
                renderPortfolioGrid(filteredData);
            }
        });
    });
});