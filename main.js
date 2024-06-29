document.addEventListener('DOMContentLoaded', (event) => {
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

	// Create presentation button
	const createPresentTrg = document.querySelector('.create-present');
	const presenScreen = document.querySelector('.create-presentation');

	if (createPresentTrg && presenScreen) {
		createPresentTrg.addEventListener('click', (e) => {
			e.preventDefault();
			presenScreen.classList.add('active');
		});
	}

	// --------------- Question Help
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

	// ------------------------------- Tooltip Position
	const tooltipHovElements = document.querySelectorAll('.sidenav-bar .icon-list ul li');

	function updateTooltipPositions() {
		if (tooltipHovElements) { // Check if any elements are found
			tooltipHovElements.forEach((tooltipHovElement) => {
				const eachToolTip = tooltipHovElement.querySelector('.tool-tip'); // Ensure the correct selector
				if (eachToolTip) {
					const boundRect = tooltipHovElement.getBoundingClientRect();
					const boundRectY = boundRect.top;
					eachToolTip.style.top = `${boundRectY}px`; // Properly set the style
				}
			});
		}
	}

	// Initial tooltip position update
	updateTooltipPositions();

	// Handle mouse enter and leave to show/hide tooltips
	tooltipHovElements.forEach((tooltipHovElement) => {
		tooltipHovElement.addEventListener('mouseenter', () => {
			updateTooltipPositions(); // Update position on mouse enter
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
		resizeTimeout = setTimeout(updateTooltipPositions, 100); // Adjust delay as needed
	});

	window.addEventListener('orientationchange', updateTooltipPositions);


	// ------------------------------- Sub Menu Toggle progress nav
	const progressHasSubItems = document.querySelectorAll('.has-sub-list > .list-upper');

	progressHasSubItems.forEach((progressHasSubItem) => {
		progressHasSubItem.addEventListener('click', () => {
			// Check if the clicked submenu is already open
			const isOpen = progressHasSubItem.parentElement.classList.contains('open-sub');

			// Close all submenus
			progressHasSubItems.forEach((item) => {
				item.parentElement.classList.remove('open-sub');
			});

			// If the clicked submenu was not open, open it
			if (!isOpen) {
				progressHasSubItem.parentElement.classList.add('open-sub');
			}
		});
	});

	// ------------------------------ Sub text toggle
	const hasSubTexts = document.querySelectorAll('.progress-nav__sub-list .has-sub-text.checked');

	hasSubTexts.forEach((hasSubText) => {
		const listUp = hasSubText.querySelector('.list-upper');

		listUp.addEventListener('click', () => {
			hasSubText.classList.toggle('opened-sub-text');
		})
	});




	// ------------------------------- Help cat list items
	const helpCatItems = document.querySelectorAll('.help-cat-list__item');

	helpCatItems.forEach((helpCatItem) => {
		helpCatItem.addEventListener('click', () => {
			// Check if the clicked item already has the active class
			const isActive = helpCatItem.classList.contains('active-help-cat');

			// Remove the active class from all items
			helpCatItems.forEach((item) => {
				item.classList.remove('active-help-cat');
			});

			// If the clicked item was not active, add the active class
			if (!isActive) {
				helpCatItem.classList.add('active-help-cat');
			}
		});
	});


	// ===================================== Custom Tab
	const tabOpeners = document.querySelectorAll("[data-tab]");
	tabOpeners.forEach((tabOpener) => {
		tabOpener.addEventListener("click", () => {
			// Get the value of the data-tab attribute
			const tabAttrValue = tabOpener.getAttribute("data-tab");

			// Deactivate currently active tab content
			const activeTabContent = document.querySelector(".site-tab__content-item.active");
			if (activeTabContent) {
				activeTabContent.classList.remove("active");
			}

			// Deactivate currently active tab opener
			const activeTabOpener = document.querySelector(".site-tab__head-item.active");
			if (activeTabOpener) {
				activeTabOpener.classList.remove("active");
			}

			// Activate the respective tab content
			const respectiveTabContent = document.querySelector(`#${tabAttrValue}`);
			if (respectiveTabContent) {
				respectiveTabContent.classList.add("active");
			}

			// Set the current tab opener as active
			tabOpener.classList.add("active");
		});
	});

	const subTabOpeners = document.querySelectorAll("[nested-data-tab]");
	subTabOpeners.forEach((subTabOpener) => {
		subTabOpener.addEventListener("click", () => {
			// Get the value of the nested-data-tab attribute
			const tabAttrValue = subTabOpener.getAttribute("nested-data-tab");

			// Deactivate currently active tab content
			const activeTabContent = document.querySelector(".site-tab__nested-tab__content-item.active");
			if (activeTabContent) {
				activeTabContent.classList.remove("active");
			}

			// Deactivate currently active tab opener
			const activeSubTabOpener = document.querySelector(".site-tab__nested-tab__head-item.active");
			if (activeSubTabOpener) {
				activeSubTabOpener.classList.remove("active");
			}

			// Activate the respective tab content
			const respectiveTabContent = document.querySelector(`#${tabAttrValue}`);
			if (respectiveTabContent) {
				respectiveTabContent.classList.add("active");
			}

			// Set the current tab opener as active
			subTabOpener.classList.add("active");
		});
	});
});

