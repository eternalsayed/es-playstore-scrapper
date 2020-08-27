module.exports = {
    getPackageInfo: function(packageId, callback) {
        const cb = callback? callback :() => {console.log("No callback! Result was: ", ...arguments)};
        const request = require('request');
        const storeUrl = 'https://play.google.com';
        const url = `${storeUrl}/store/apps/details?id=${packageId}&hl=en`;
        request.get(url, (error, status, body) => {
        // console.log('resul: ', error || body);
            if(error) {
                return cb(error, null, status);
            }
            const cheerio = require('cheerio');
            const $ = cheerio.load(body);
            const $additional = $("h2:contains('Additional Information')").parent().parent();
            const devLinks = $('a', $("div:contains('Developer') + span", $additional));
            const developer = {
                name: $('a[href^="/store/apps/dev"]', $('c-wiz + div')).text(),
                pageUrl: storeUrl+$('a[href^="/store/apps/dev"]', $('c-wiz + div')).attr('href')
            };
            devLinks.each((i, a) => {
                const $a = $(a);
                const temp = $a.text().trim();
                if(temp.match(/website/ig)) {
                    developer.website = $a.attr('href');
                } else if($a.attr('href').includes('mailto:')) {
                    developer.email = $a.attr('href').replace('mailto:', '');
                } else if(temp.match(/privacy policy/gi)) {
                    developer.privacyPolicy = $a.attr('href');
                } else {
                    developer.address = temp;
                }
            });
            
            const result = {
                title: $('h1').text(),
                description: $('span>div[jsname]', $('h2[aria-label="Description"] + div')).text(),
                logo: $('[itemprop="image"]').attr('src'),
                rating: $('[aria-label^="Rated"]:first-child').text(),
                ratings: $('[aria-label$="ratings"]:first-child').text(),
                whatsNew: $('[itemprop="description"]', $(`div:contains("What's New")+div`)).text(),
                // additional: $additional.html(),
                updated: $("div:contains('Updated') + span", $additional).text().trim(),
                size: $("div:contains('Size') + span", $additional).text().trim(),
                installs: $("div:contains('Installs') + span", $additional).text().trim(),
                currentVersion: $("div:contains('Current Version') + span", $additional).text().trim(),
                requires: $("div:contains('Requires Android') + span", $additional).text().trim(),
                contentRating: $("div:contains('Content Rating') + span", $additional).text().trim().replace(/learn more/i, ''),
                developer
            };
            return cb(null, result, status);
        });
    }
}