## TODO

### High Priority

- [x] check review errors
- [x] validate

### Low Priority

# My Project

This is a sample project that demonstrates basics of HTML and CSS, based on BEM approach.

Files structure:

```
.
├── README.md
├── blocks - css files based on BEM approach
├── build.js
├── images
├── index.html
├── pages
│   └── index.css - import all css files here
└── vendor - libs
    └── normalize.css
```

## Getting Started

Use git clone to get copy of the project.

### Prerequisites

Live server vscode extension to run project locally.

### Installing

Step by step instructions on how to install the project

1. Clone the repository
2. Start the server

## Usage

open 127.0.0.1 port 5500 locally

## Contributing

None

## License

This project is licensed under the MIT License

## Contact

- Email: dev.miroshnikov.m@ya.ru

## Commments

This project is dependent to odering imports css fils in pages.css

Example:

```
 <h3 class="section-subtitle section-subtitle_theme_dark kaufman__section-subtitle">
```

```
/\*
у текстовых элементов мы сбрасываем отступы
section-title
section-subtitle

- это основные блоки в которох задаются основные стили
  чтобы они не перезатерли мисксы убираем их наверх
  \*/
  @import url(../blocks/section-subtitle/section-subtitle.css);
  @import url(../blocks/section-subtitle/section-subtitle_theme_dark.css);
  @import url(../blocks/section-title/section-title.css);
  @import url(../blocks/section-title/section-title_theme_dark.css);

```
