import Home from './components/Home/index'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
  {
    id: 10,
    timeAccessed: '7:00 PM',
    logoUrl: 'https://www.pinclipart.com/picdir/middle/44-447094_slider-image-isha-foundation-logo-png-clipart.png',
    title: 'Isha Official Website',
    domainUrl: 'isha.sadhguru.org',
  },
  {
    id: 11,
    timeAccessed: '6:20 PM',
    logoUrl: 'https://www.pinclipart.com/picdir/middle/44-447094_slider-image-isha-foundation-logo-png-clipart.png',
    title: 'Inner Engineering - tools for transformation',
    domainUrl: 'isha.sadhguru.org/in/en/inner-engineering',
  },
  {
    id: 12,
    timeAccessed: '10:00 AM',
    logoUrl: 'https://www.pinclipart.com/picdir/middle/44-447094_slider-image-isha-foundation-logo-png-clipart.png',
    title: 'Isha Kriya',
    domainUrl: 'https://isha.sadhguru.org/in/en/yoga-meditation/yoga-program-for-beginners/isha-kriya-meditation',
  },
  {
    id: 13,
    timeAccessed: '9:00 PM',
    logoUrl: 'https://pbs.twimg.com/media/FNOqIXUVgAANYEi?format=jpg&name=4096x4096',
    title: 'Sadhguru Exclusive',
    domainUrl: 'isha.sadhguru.org/in/en/sadhguru-exclusive',
  },
  {
    id: 14,
    timeAccessed: '6:00 PM',
    logoUrl: 'https://d1tgh8fmlzexmh.cloudfront.net/website/nextwave-logo.png',
    title: 'learn ReactJS',
    domainUrl: 'learning.ccbp.in/reactJS',
  },
  {
    id: 15,
    timeAccessed: '7:15 PM',
    logoUrl: 'https://d1tgh8fmlzexmh.cloudfront.net/website/nextwave-logo.png',
    title: 'learn NodeJS',
    domainUrl: 'learning.ccbp.in/nodeJS',
  },
]

const App = () => < Home historyList={initialHistoryList} />

export default App
