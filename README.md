# NjuškaHide

NjuškaHide is a Greasemonkey/Tampermonkey userscript that enables hiding certain ads on Njuškalo.hr (a Croatian online marketplace).

## Usage

To use NjuškaHide, you can either 
* import `NjuskaHide.user.js` into Greasemonkey/Tampermonkey, or
* install the provided .crx file in Chrome

After that, you get a new cross icon right below the star (save) icon on each ad. When you want to hide an ad, click the cross.

## Bugs
* There is currently no way of clearing hidden ads, other than executing `localStorage.removeItem('Jankovic--hiddenAds');` in the Chrome console.

## Contributing
* Submit a pull request.
