# WALID VOYAGES — Studio Vidéo

Publicité verticale de **40 secondes** (**1080 × 1920**, **30 fps**) destinée à Facebook Reels et Instagram.

Site officiel à présenter : **https://www.walid-voyages.com/**

## Télécharger le MP4 directement depuis GitHub (sans Claude, sans PowerShell)

1. Ouvrir **[Actions — Exporter la video Walid Voyages (MP4)](https://github.com/boumiza-1/walidvideo/actions/workflows/render-video.yml)**.
2. Cliquer sur **Run workflow** → sélectionner **main** → **Run workflow**.
3. Ouvrir la nouvelle exécution. Lorsque le statut devient vert, descendre jusqu'à **Artifacts**.
4. Cliquer sur **Walid-Voyages-Video-MP4** pour télécharger un ZIP contenant **out/walid-site-40s.mp4**. Décompresser pour récupérer la vidéo.

Les modifications poussées dans `main` déclenchent également un rendu automatiquement.

## Depuis Windows, si souhaité

Télécharger le ZIP du dépôt (bouton **Code → Download ZIP**), le décompresser, puis double-cliquer `OUVRIR_LE_STUDIO.bat` pour voir le projet ou `EXPORTER_MP4.bat` pour exporter. Le rendu local apparaît dans `out\walid-site-40s.mp4`.

## Révision éditoriale importante

Le film actuel est une **maquette de motion design**. Les images `public/assets/site-home.png` et `site-results.png` sont des démonstrations. Le workflow essaie de capturer les pages **réelles** du site au moment du rendu; s'il n'y parvient pas, il utilise les images de démonstration. **Inspectez impérativement le résultat avant diffusion.**

Le logo actuellement affiché est du texte stylisé : il doit être remplacé par le **logo officiel** avant publication.

La narration et la musique ne sont pas incluses dans la vidéo actuelle. Texte tunisien suggéré dans `VOICEOVER_TN.txt`. Le workflow ne fait aucun paiement réel, et les prix / promotions sont susceptibles de changer.

## Composition

`WalidSiteAd40` dans `src/video.tsx`. Modifier le texte ou le rythme ici, puis relancer le workflow pour obtenir le nouveau MP4.
