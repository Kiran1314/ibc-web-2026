# Photo credits

All photography on the site is now original IBC Studio production imagery (the earlier
Unsplash placeholders have been retired — see below).

## Home page carousel — `assets/images/opt/hero/`

Eight behind-the-scenes stills from IBC Studio shoots, resized to 900px wide.

| File | Scene |
| --- | --- |
| `sunset-silhouette.jpg` | Camera operator, desert sunset shoot |
| `camera-viewfinder.jpg` | Viewfinder close-up on set |
| `vocal-booth.jpg` | Vocal recording session |
| `gimbal-exhibition.jpg` | Gimbal operator at an exhibition |
| `control-room.jpg` | Broadcast mixing / control room |
| `green-screen.jpg` | Green-screen studio setup |
| `broadcast-studio.jpg` | TV-style studio interview |
| `gallery-interview.jpg` | On-location gallery interview |

## About page — `assets/images/opt/about/`

`founder.jpg` — the Founder & Director on location, used as the photo background of the
"From the Founder's Desk" card.

## Services page — `assets/images/opt/services/`

One representative photo per service tab, shown as the poster image behind each showreel
placeholder.

| File | Service |
| --- | --- |
| `audio.jpg` | Audio Production |
| `video.jpg` | Video Production |
| `photography.jpg` | Photography |
| `ai.jpg` | AI Production |
| `digital.jpg` | Digital & Development |
| `motion-vr.jpg` | Motion Graphics & VR/AR |

## Adding more photos

Dropping a file into these folders does nothing on its own — each image is wired to a
specific filename in `assets/css/style.css` (hero, services) or inline in `about.html`
(founder photo). To add or swap a photo, replace one of the files above by the same name,
or ask for the corresponding CSS/HTML rule to be added for a new filename.

## Full-resolution originals

The uploaded full-resolution source photos (including the ones not used on the site) are
kept outside the site folder, in `../ibc-studio-original-photos/`, so the deployed site
stays light. Nothing there is referenced by the site.
