const loadPage = (() => {

    let content;

    const header = function() {

        content = document.createElement('div');
        content.classList.add('content');
        document.body.appendChild(content);

        let header = document.createElement('div');
        header.classList.add('header');
        content.appendChild(header);

        let hero = document.createElement('h1');
        hero.classList.add('hero');
        hero.innerHTML = 'Wayfair Bites';
        header.appendChild(hero);

        let tabs = document.createElement('div');
        tabs.classList.add('tabs');
        header.appendChild(tabs);

        let homeCat = document.createElement('div');
        homeCat.classList.add('tab');
        homeCat.setAttribute('id', 'home');
        homeCat.innerHTML = 'Home';
        tabs.appendChild(homeCat);

        let menuCat = document.createElement('div');
        menuCat.classList.add('tab');
        menuCat.setAttribute('id', 'menu');
        menuCat.innerHTML = 'Menu';
        tabs.appendChild(menuCat);

        let contactCat = document.createElement('div');
        contactCat.classList.add('tab');
        contactCat.setAttribute('id', 'contact');
        contactCat.innerHTML = 'Contact';
        tabs.appendChild(contactCat);
    }

    const home = function() {
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');
        content.appendChild(contentWrapper);

        let title = document.createElement('div');
        title.classList.add('Title');
        title.innerHTML = 'Since 1996..';
        contentWrapper.appendChild(title)

        let info = document.createElement('p');
        info.classList.add('info');
        info.innerHTML = 'Have we served Brooklyn customers great snacks just outside Brakestreet 4A from 10am to 7pm every day.';
        contentWrapper.appendChild(info)
    }

    const menu = function() {
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');
        content.appendChild(contentWrapper);

        let title = document.createElement('div');
        title.classList.add('Title');
        title.innerHTML = 'Our food..';
        contentWrapper.appendChild(title)

        let info = document.createElement('p');
        info.classList.add('info');
        info.innerHTML = 'Is some of the best there is in east Brooklyn, a $40 cupcake and a $60 cafe latte, it doesn\'t get better than that!';
        contentWrapper.appendChild(info)
    }

    const contact = function() {
        let contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');
        content.appendChild(contentWrapper);

        let title = document.createElement('div');
        title.classList.add('Title');
        title.innerHTML = 'Come give us a vist!';
        contentWrapper.appendChild(title)

        let info = document.createElement('p');
        info.classList.add('info');
        info.innerHTML = 'or.. The following also works: <br> +1 010 01 01 <br>\
                          contact@wayFairbites.com'
        contentWrapper.appendChild(info)
    }

    const sleep = function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const initializeEventL = function() {
        homeBtn = document.getElementById('home')
        menuBtn = document.getElementById('menu')
        contactBtn = document.getElementById('contact')

        homeBtn.addEventListener("click", function() {
            loadPage.changePage('home');
        });

        menuBtn.addEventListener("click", function() {
            console.log('test')
            loadPage.changePage('menu');
        });
        
        contactBtn.addEventListener("click", function() {
            loadPage.changePage('contact');
        });
    }

    const initialize = function(page) {
        header();

        if (page == 'home') {
            home();
        } else if (page == 'menu') {
            menu();
        } else if (page == 'contact') {
            contact();
        } else {
            home();
        }

        initializeEventL();
    }

    const clearPage = function() {
        let body = document.body

        console.log(body.firstChild)

        while (body.firstChild) {
            document.body.removeChild(document.body.lastChild)
        }
    }

    const changePage = function(page) {
        clearPage();
        header(); 

        if (page == 'home') {
            home();
        } else if (page == 'menu') {
            menu();
        } else if (page == 'contact') {
            contact();
        } else {
            home();
        }

        initializeEventL();
    }

    return { initialize, changePage }

})()

loadPage.initialize();
