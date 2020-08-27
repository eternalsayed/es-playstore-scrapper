# es-playstore-scrapper
NodeJS package to scrap basic information about an app from the Google Playstore. It does so by fetching the page html through request module and then parsing it using the cheerio package.
## Installation
    npm i es-playstore-scrapper
    
## Usage
    const esPlayScrapper = require('es-playstore-scrapper');
    esPlayScrapper.getPackageInfo('com.facebook.katana', (err, result) => {
      err ?console.log('Failed with error: ', err) :console.log('Result: ', result);
    })
You should get something like below in result:

    {
     title: 'Facebook',
     description: "Keeping up with friends is faster and easier than ever. Share updates and photos, engage with friends and Pages, and stay connected to communities important to you. Features on the Facebook app include:* Connect with friends and family and meet new people on your social media network* Set status updates & use Facebook emoji to help relay what’s going on in your world* Share photos, videos, and your favorite memories.* Get notifications when friends like and comment on your posts* Find local social events, and make plans to meet up with friends* Play games with any of your Facebook friends* Backup photos by saving them in albums* Follow your favorite artists, websites, and companies to get their latest news* Look up local businesses to see reviews, operation hours, and pictures* Buy and sell locally on Facebook Marketplace* Watch live videos on the goThe Facebook app does more than help you stay connected with your friends and interests. It's also your personal organizer for storing, saving and sharing photos. It's easy to share photos straight from your Android camera, and you have full control over your photos and privacy settings. You can choose when to keep individual photos private or even set up a secret photo album to control who sees it.Facebook also helps you keep up with the latest news and current events around the world. Subscribe to your favorite celebrities, brands, news sources, artists, or sports teams to follow their newsfeeds, watch live streaming videos and be caught up on the latest happenings no matter where you are!The most important desktop features of Facebook are also available on the app, such as writing on timelines, liking photos, browsing for people, and editing your profile and groups. Now you can get early access to the next version of Facebook for Android by becoming a beta tester. Learn how to sign up, give feedback and leave the program in our Help Center: http://on.fb.me/133NwuP Sign up directly here: http://play.google.com/apps/testing/com.facebook.katanaProblems downloading or installing the app? See http://bit.ly/GPDownload1Still need help? Please tell us more about the issue. http://bit.ly/invalidpackageFacebook is only available for users age 13 and over.Terms of Service: http://m.facebook.com/terms.php.",
     logo: 'https://play-lh.googleusercontent.com/ccWDU4A7fX1R24v-vvT480ySh26AYp97g1VrIB_FIdjRcuQB2JP2WdY7h_wVVAeSpg=s180',
     rating: '4.2',
     ratings: '102,638,053',
     whatsNew: '',
     updated: 'August 26, 2020',
     size: 'Varies with device',
     installs: '5,000,000,000+',
     currentVersion: '284.0.0.50.107',
     requires: 'Varies with device',
     contentRating: 'Parental guidanceParental Guidance Recommended',
     developer: {
      name: 'Facebook',
      pageUrl: 'https://play.google.com/store/apps/developer?id=Facebook',
      website: 'https://www.facebook.com/facebook',
      email: 'android-support@fb.com',
      privacyPolicy: 'https://www.facebook.com/about/privacy/'
     }
    }
## Notes
This is a WIP so please beware if using for production. I created this small script because `google-play-scraper` has started failing for me and I needed to get current app version for my app for automated scripts.

## PRs
Pull requests are welcome. Let me know if I can improve it for you!
