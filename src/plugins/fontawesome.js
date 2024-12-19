// src/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChrome, faDribbble, faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown, faAngleUp, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faStar, faStarHalfAlt,faChrome,faFacebookF, faTwitter, faGooglePlusG, faDribbble, faAngleUp, faAngleDown])

export { FontAwesomeIcon }
