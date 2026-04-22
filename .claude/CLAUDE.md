# vegeceutic-labs.com — Contexte projet

## Hébergement

- **Serveur** : VPS Hetzner avec cPanel
- **Username cPanel** : `vegeceuticlabs`
- **Deploy path** : `/home/vegeceuticlabs/public_html/`
- **Déploiement** : via `.cpanel.yml` (cPanel > Git Version Control > Deploy HEAD Commit)
- **Domaine** : https://vegeceutic-labs.com

## Stack

- HTML5 / CSS3 / JavaScript vanilla
- Pas de framework, pas de bundler, pas de build step
- Tout ce qui est livré doit être directement servable par Apache

## Arborescence

```
/
├── .cpanel.yml           # Tâches de déploiement cPanel
├── .htaccess             # Config Apache (HTTPS, cache, sécurité)
├── .gitignore
├── index.html            # Homepage
├── 404.html              # Page erreur
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/               # Images, fonts, favicon, og-image
```

## Conventions front

- **Mobile-first** : on écrit le CSS pour mobile d'abord, puis `@media (min-width: …)` pour étendre
- **Images** : format **WebP** (fallback JPEG/PNG seulement si nécessaire)
- **Icônes** : **SVG inline** dans le HTML (pas d'icon font, pas de sprite externe)
- **Jamais de hotlink** d'images externes — tout doit être hébergé dans `/assets/`
- **Alt text obligatoire** sur toutes les `<img>` (chaîne vide `alt=""` uniquement pour les images purement décoratives)
- **Lazy loading** sur les images below-the-fold : `loading="lazy"`
- **Liens externes** : `rel="noopener noreferrer"` + `target="_blank"` quand on ouvre ailleurs

## Règles SEO

- `<title>` unique par page, ≤ 60 caractères
- `<meta name="description">` unique par page, 140–160 caractères
- **Open Graph** complet sur chaque page : `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` (`fr_FR`)
- **Twitter Card** : `summary_large_image`
- **Schema.org** : ajouter les données structurées pertinentes (Organization, WebSite, Product, Article, FAQPage…) en JSON-LD dans le `<head>`
- **Canonical** : `<link rel="canonical">` sur chaque page
- **Sitemap** : `sitemap.xml` à jour à chaque nouvelle page
- **robots.txt** : pointe vers le sitemap

## Règles Git

- `main` = **production** (déployée par cPanel)
- **Jamais de push direct sur `main`** — toujours passer par une branche `feature/xxx` et merger après revue
- Commits en français, style impératif : "Ajoute section hero", "Corrige lien footer"
- Ne pas commiter : `.DS_Store`, `.env`, secrets, node_modules, backups — le `.gitignore` s'en charge

## Workflow de déploiement

1. Travailler sur une branche `feature/xxx`
2. Merger dans `main` après test local
3. Push sur GitHub
4. cPanel > Git Version Control > Update from Remote > Deploy HEAD Commit
5. Vérifier en prod sur https://vegeceutic-labs.com
