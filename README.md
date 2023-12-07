<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->





<!-- PROJECT LOGO -->
<br />
<div align="center">

  
 [![My Skills](https://skillicons.dev/icons?i=rocket)](https://skillicons.dev)
   <h3 align="center">Proyecto encuestas FLM </h3>
  
  <p align="center">
    .
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Ver Documentacion</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">Ver Demo</a>
    ·
    <a href="/../../issues">Reportar Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla Contenidos</summary>
  <ol>
    <li>
      <a href="#about-the-project">Acerca del proyecto</a>
      <ul>
        <li><a href="#built-with">Tecnologías</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Para Empezar</a>
      <ul>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Notas Adicionales</a> 
    </li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto

Frontend de encuestas para ser usado con el plugin de survejs en wordpress

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


### Tecnologías



* [![React][React.js]][React-url]
* CAPACITOR
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]



  
<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- GETTING STARTED -->
## Para Empezar
Consideraciónes para hacer funcionar el proyecto

### Endpoints

En caso de cambiar el back de dominio, se debe modificar el archivo src/constants.js

### Proyecto React

El proyecto está dividido en sus respectivos componentes y páginas, si se necesita algún cambio de css cada folder tiene su archivo de estilos, hechos con [Styled-Components](https://styled-components.com/)

### Encuestas FLM

El proyecto para mobile está construido con Capacitor, por lo cual se tienen que generar las builds con los siguientes comandos:

* Generar minificado:

```bash
$ npm run build
```

* Instalar plataformas nativas

```bash
$ npx cap add android
$ npx cap add ios
```

* Actualizar paquetes

```bash
$ npx cap sync
```

* Copiar proyecto minificado a las builds nativas

```bash
$ npx cap copy
```
* Abrir proyecto con su software determinado automáticamente (Andorid Studio / xCode)

```bash
$ npx cap open android
$ npx cap open ios
```

Para más información consultar la [documentación de capacitor](https://capacitorjs.com/docs/v3)



<p align="right">(<a href="#readme-top">volver arriba</a>)</p>







<!-- USAGE EXAMPLES -->
## Notas Adicionales




<p align="right">(<a href="#readme-top">volver arriba</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 


