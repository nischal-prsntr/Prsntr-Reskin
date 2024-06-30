document.addEventListener('DOMContentLoaded', (event) => {
    // Theme toggle functionality
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    const toggleButton = document.querySelector('.meta-switcher');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        toggleButton.classList.toggle('switch-active');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Create presentation button functionality
    const createPresentTrg = document.querySelector('.create-present');
    const presenScreen = document.querySelector('.create-presentation');

    if (createPresentTrg && presenScreen) {
        createPresentTrg.addEventListener('click', (e) => {
            e.preventDefault();
            presenScreen.classList.add('active');
        });
    }

    // Question help functionality
    const questionIcon = document.querySelector('.progress-help__icon');
    if (questionIcon) {
        const progressHelp = document.querySelector('.progress-help');
        questionIcon.addEventListener('click', () => {
            progressHelp.classList.toggle('active-help');
        });

        const progressNavTogg = document.querySelector('.progress-nav__head .icon');
        const progressNavOpener = document.querySelector('.progress-nav-opener');

        progressNavOpener.addEventListener('click', () => {
            document.body.classList.add('active-progress-nav');
        });
        progressNavTogg.addEventListener('click', () => {
            document.body.classList.remove('active-progress-nav');
        });
    }

    // Tooltip position functionality
    const tooltipHovElements = document.querySelectorAll('.sidenav-bar .icon-list ul li');

    function updateTooltipPositions() {
        tooltipHovElements.forEach((tooltipHovElement) => {
            const eachToolTip = tooltipHovElement.querySelector('.tool-tip');
            if (eachToolTip) {
                const boundRect = tooltipHovElement.getBoundingClientRect();
                const boundRectY = boundRect.top;
                eachToolTip.style.top = `${boundRectY}px`;
            }
        });
    }

    // Initial tooltip position update
    updateTooltipPositions();

    // Handle mouse enter and leave to show/hide tooltips
    tooltipHovElements.forEach((tooltipHovElement) => {
        tooltipHovElement.addEventListener('mouseenter', () => {
            updateTooltipPositions();
            tooltipHovElement.classList.add('tool-active');
        });

        tooltipHovElement.addEventListener('mouseleave', () => {
            tooltipHovElement.classList.remove('tool-active');
        });
    });

    // Debounce function for resize and orientation change
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateTooltipPositions, 100);
    });

    window.addEventListener('orientationchange', updateTooltipPositions);

    // Sub menu toggle progress nav
    const progressHasSubItems = document.querySelectorAll('.has-sub-list > .list-upper');

    progressHasSubItems.forEach((progressHasSubItem) => {
        progressHasSubItem.addEventListener('click', () => {
            const isOpen = progressHasSubItem.parentElement.classList.contains('open-sub');

            progressHasSubItems.forEach((item) => {
                item.parentElement.classList.remove('open-sub');
            });

            if (!isOpen) {
                progressHasSubItem.parentElement.classList.add('open-sub');
            }
        });
    });

    // Sub text toggle
    const hasSubTexts = document.querySelectorAll('.progress-nav__sub-list .has-sub-text.checked');

    hasSubTexts.forEach((hasSubText) => {
        const listUp = hasSubText.querySelector('.list-upper');

        listUp.addEventListener('click', () => {
            hasSubText.classList.toggle('opened-sub-text');
        });
    });

    // Help cat list items
    const helpCatItems = document.querySelectorAll('.help-cat-list__item');

    helpCatItems.forEach((helpCatItem) => {
        helpCatItem.addEventListener('click', () => {
            const isActive = helpCatItem.classList.contains('active-help-cat');

            helpCatItems.forEach((item) => {
                item.classList.remove('active-help-cat');
            });

            if (!isActive) {
                helpCatItem.classList.add('active-help-cat');
            }
        });
    });

    // Custom tab functionality
    const tabOpeners = document.querySelectorAll("[data-tab]");
    tabOpeners.forEach((tabOpener) => {
        tabOpener.addEventListener("click", () => {
            const tabAttrValue = tabOpener.getAttribute("data-tab");

            const activeTabContent = document.querySelector(".site-tab__content-item.active");
            if (activeTabContent) {
                activeTabContent.classList.remove("active");
            }

            const activeTabOpener = document.querySelector(".site-tab__head-item.active");
            if (activeTabOpener) {
                activeTabOpener.classList.remove("active");
            }

            const respectiveTabContent = document.querySelector(`#${tabAttrValue}`);
            if (respectiveTabContent) {
                respectiveTabContent.classList.add("active");
            }

            tabOpener.classList.add("active");
        });
    });

    // Sub tab functionality
    const subTabOpeners = document.querySelectorAll("[nested-data-tab]");
    subTabOpeners.forEach((subTabOpener) => {
        subTabOpener.addEventListener("click", () => {
            const tabAttrValue = subTabOpener.getAttribute("nested-data-tab");

            const activeTabContent = document.querySelector(".site-tab__nested-tab__content-item.active");
            if (activeTabContent) {
                activeTabContent.classList.remove("active");
            }

            const activeSubTabOpener = document.querySelector(".site-tab__nested-tab__head-item.active");
            if (activeSubTabOpener) {
                activeSubTabOpener.classList.remove("active");
            }

            const respectiveTabContent = document.querySelector(`#${tabAttrValue}`);
            if (respectiveTabContent) {
                respectiveTabContent.classList.add("active");
            }

            subTabOpener.classList.add("active");
        });
    });

    // Navigation to Presentation Feedback
    const tableRows = document.querySelectorAll('table tbody tr');

    tableRows.forEach(row => {
        row.addEventListener('click', (e) => {
            if (e.target.closest('.edit') || e.target.closest('.delete')) {
                return;
            }
            window.location.href = 'presentation-expanded.html';
        });
    });
});

// Navigation to respective power-tips pages
document.addEventListener('DOMContentLoaded', () => {
    const tipsBlocks = document.querySelectorAll('.tips__block');

    tipsBlocks.forEach(block => {
        block.addEventListener('click', () => {
            const tabNumber = block.getAttribute('data-tab');
            window.location.href = `power-tips.html?tab=${tabNumber}`;
        });
    });
});

//Handle add key person
document.addEventListener('DOMContentLoaded', () => {
    const addPersonBtn = document.getElementById('add-person-btn');
    const keyPersonContainer = document.getElementById('key-person-container');
    
    addPersonBtn.addEventListener('click', () => {
        // Clone the first key person block
        const keyPersonBlocks = document.querySelectorAll('.key-person-block');
        const lastKeyPersonBlock = keyPersonBlocks[keyPersonBlocks.length - 1];
        const newKeyPersonBlock = lastKeyPersonBlock.cloneNode(true);

        // Update the title and IDs/Names of the cloned block
        const newIndex = keyPersonBlocks.length + 1;
        newKeyPersonBlock.querySelector('h6').textContent = `Key Person ${newIndex}:`;

        const checkboxes = newKeyPersonBlock.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            checkbox.id = `check-${newIndex * 4 - 3 + index}`;
            checkbox.name = `check-group-${newIndex}`;
            checkbox.nextElementSibling.setAttribute('for', checkbox.id);
        });

        // Append the new block to the container
        keyPersonContainer.appendChild(newKeyPersonBlock);
    });
});

//Handle add agenda
document.getElementById('add-agenda-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the data-field container
    var dataFieldContainer = document.querySelector('.data-field__inner');

    // Get the current number of agenda items
    var agendaCount = dataFieldContainer.querySelectorAll('.data-field__block').length;

    // Create a new data-field block
    var newDataFieldBlock = document.createElement('div');
    newDataFieldBlock.className = 'data-field__block';
    newDataFieldBlock.innerHTML = `
        <div class="data-field__block-text-holder">
            <h6 class="data-field__title weight-700">Agenda ${agendaCount + 1}</h6>
            <span class="data-light-text">What would you want the agenda ${agendaCount + 1} to be?</span>
        </div>
        <div class="data-field__textarea">
            <textarea></textarea>
        </div>
    `;

    // Append the new data-field block to the container
    dataFieldContainer.appendChild(newDataFieldBlock);
});



