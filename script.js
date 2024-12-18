function openTab(tabId, event) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    if (event) {
        event.preventDefault();
        const clickedTab = event.currentTarget;
        if (clickedTab) {
            clickedTab.classList.add('active');
        }

        window.location.hash = `#${tabId}`;
    }
}

function loadTabFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        openTab(hash);
    } else {
        openTab('gioithieu');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadTabFromHash();

    const script = document.createElement("script");

    script.src = "https://messenger.svc.chative.io/static/v1.0/channels/sfec637c8-9178-4319-bbdf-da0b70ff8c93/messenger.js?mode=livechat";
    script.defer = true;

    document.head.appendChild(script);
});

window.addEventListener('hashchange', loadTabFromHash);
