        /* JS Exercises should go here */

        // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector(".blog-sidebar .p-4:nth-of-type(3) li:nth-child(2)").style.display = "none"
        })

        // EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
        rimuoviPadre = document.querySelector('.jumbotron a')
        rimuoviPadre.addEventListener('click', function (event) {
            event.preventDefault()
            document.querySelector('.px-0').style.display = 'none'
        })

        // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.
        let autori = document.querySelectorAll('.blog-post .blog-post-meta a')

        for (let i = 0; i < autori.length; i++) {
            autori[i].addEventListener('mouseover', function () {
                alert(autori[i].textContent)
            })
        }

        // aut1 = document.querySelector('.blog-main .blog-post:nth-of-type(1) .blog-post-meta a')
        // aut2 = document.querySelector('.blog-main .blog-post:nth-of-type(2) .blog-post-meta a')
        // aut3 = document.querySelector('.blog-main .blog-post:nth-of-type(3) .blog-post-meta a')

        // aut1.addEventListener('mouseover', function () {
        //     alert(aut1.textContent)
        // })
        // aut2.addEventListener('mouseover', function () {
        //     alert(aut2.textContent)
        // })
        // aut3.addEventListener('mouseover', function () {
        //     alert(aut3.textContent)
        // })



