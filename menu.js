
      document.addEventListener("DOMContentLoaded", () => {
        const menuTabs = document.querySelectorAll(".menu-tab");
        const menuSections = document.querySelectorAll(".menu-section");
        const orderButtons = document.querySelectorAll(".order-btn");
        const closeBtn = document.querySelector(".close-btn");
        const orderedItemSpan = document.getElementById("orderedItem");
        const orderedPriceSpan = document.getElementById("orderedPrice");
        const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
        const navMenu = document.querySelector(".nav-menu");

        // Tab functionality
        menuTabs.forEach((tab) => {
          tab.addEventListener("click", (e) => {
            e.preventDefault();

            menuTabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");

            const category = tab.dataset.category;

            menuSections.forEach((section) => {
              if (section.id === category) {
                section.classList.add("active");
              } else {
                section.classList.remove("active");
              }
            });
          });
        });

        // Add a style rule for .nav-menu.active for mobile menu
        const style = document.createElement("style");
        style.innerHTML = `
                @media (max-width: 768px) {
                    .nav-menu.active {
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: 80px; /* Adjust based on header height */
                        left: 0;
                        width: 100%;
                        background: rgba(255, 255, 255, 0.98);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                        padding: 1rem 0;
                        animation: slideDown 0.3s ease-out forwards;
                    }
                    .nav-menu.active li {
                        width: 100%;
                        text-align: center;
                    }
                    .nav-menu.active a {
                        display: block;
                        padding: 1rem;
                        border-radius: 0;
                    }
                }
                @keyframes slideDown {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `;
          

        document.head.appendChild(style);
      });
    
