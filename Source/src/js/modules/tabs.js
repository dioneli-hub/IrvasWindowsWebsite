const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.classList.add("hide");
            item.classList.remove( "fade");

        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        content[i].classList.add("fade");
        content[i].classList.remove("hide");
        tabs[i].classList.add(activeClass);
    }


    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, ""))
                || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;