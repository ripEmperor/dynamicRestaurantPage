/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWNyZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkUGFnZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgY29udGVudDtcblxuICAgIGNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBsZXQgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgICAgICBoZXJvLmlubmVySFRNTCA9ICdXYXlmYWlyIEJpdGVzJztcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gICAgICAgIGxldCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYnMuY2xhc3NMaXN0LmFkZCgndGFicycpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFicyk7XG5cbiAgICAgICAgbGV0IGhvbWVDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZUNhdC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgaG9tZUNhdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICAgICAgaG9tZUNhdC5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgICAgIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZUNhdCk7XG5cbiAgICAgICAgbGV0IG1lbnVDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUNhdC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgbWVudUNhdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICAgICAgbWVudUNhdC5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgICAgIHRhYnMuYXBwZW5kQ2hpbGQobWVudUNhdCk7XG5cbiAgICAgICAgbGV0IGNvbnRhY3RDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdENhdC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICAgICAgY29udGFjdENhdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcbiAgICAgICAgY29udGFjdENhdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gICAgICAgIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdENhdCk7XG4gICAgfVxuXG4gICAgY29uc3QgaG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC13cmFwcGVyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdUaXRsZScpO1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnU2luY2UgMTk5Ni4uJztcbiAgICAgICAgY29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBpbmZvLmlubmVySFRNTCA9ICdIYXZlIHdlIHNlcnZlZCBCcm9va2x5biBjdXN0b21lcnMgZ3JlYXQgc25hY2tzIGp1c3Qgb3V0c2lkZSBCcmFrZXN0cmVldCA0QSBmcm9tIDEwYW0gdG8gN3BtIGV2ZXJ5IGRheS4nO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChpbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IG1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtd3JhcHBlcicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnVGl0bGUnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gJ091ciBmb29kLi4nO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gJ0lzIHNvbWUgb2YgdGhlIGJlc3QgdGhlcmUgaXMgaW4gZWFzdCBCcm9va2x5biwgYSAkNDAgY3VwY2FrZSBhbmQgYSAkNjAgY2FmZSBsYXR0ZSwgaXQgZG9lc25cXCd0IGdldCBiZXR0ZXIgdGhhbiB0aGF0ISc7XG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC13cmFwcGVyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdUaXRsZScpO1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnQ29tZSBnaXZlIHVzIGEgdmlzdCEnO1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gICAgICAgIGluZm8uaW5uZXJIVE1MID0gJ29yLi4gVGhlIGZvbGxvd2luZyBhbHNvIHdvcmtzOiA8YnI+ICsxIDAxMCAwMSAwMSA8YnI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdEB3YXlGYWlyYml0ZXMuY29tJ1xuICAgICAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChpbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IHNsZWVwID0gZnVuY3Rpb24obXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpemVFdmVudEwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbiAgICAgICAgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbiAgICAgICAgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcblxuICAgICAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxvYWRQYWdlLmNoYW5nZVBhZ2UoJ2hvbWUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gICAgICAgICAgICBsb2FkUGFnZS5jaGFuZ2VQYWdlKCdtZW51Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsb2FkUGFnZS5jaGFuZ2VQYWdlKCdjb250YWN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpemUgPSBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgIGhlYWRlcigpO1xuXG4gICAgICAgIGlmIChwYWdlID09ICdob21lJykge1xuICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICBtZW51KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PSAnY29udGFjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxpemVFdmVudEwoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhclBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgICAgY29uc29sZS5sb2coYm9keS5maXJzdENoaWxkKVxuXG4gICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VQYWdlID0gZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgaGVhZGVyKCk7IFxuXG4gICAgICAgIGlmIChwYWdlID09ICdob21lJykge1xuICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICBtZW51KCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PSAnY29udGFjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhY3QoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxpemVFdmVudEwoKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0aWFsaXplLCBjaGFuZ2VQYWdlIH1cblxufSkoKVxuXG5sb2FkUGFnZS5pbml0aWFsaXplKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=