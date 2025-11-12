import en from '../locales/en.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import ar from '../locales/ar.json'

const map = { en, es, fr, ar }

export default function translations(lang='en') {
  return map[lang] || map['en']
}
