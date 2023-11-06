import avs2 from '../SVG/avatars/Avatars2.svg'
import avs3 from '../SVG/avatars/Avatars3.svg'
import avs1 from '../SVG/avatars/Avatars1.svg'
import avs4 from '../SVG/avatars/Avatars4.svg'
import avs5 from '../SVG/avatars/Avatars5.svg'
import avs6 from '../SVG/avatars/Avatars6.svg'
import avs7 from '../SVG/avatars/Avatars7.svg'
import avs8 from '../SVG/avatars/Avatars8.svg'
import avs9 from '../SVG/avatars/Avatars9.svg'
import avs10 from '../SVG/avatars/Avatars10.svg'
import avs11 from '../SVG/avatars/Avatars11.svg'
import avs12 from '../SVG/avatars/Avatars12.svg'
import avs13 from '../SVG/avatars/Avatars13.svg'
import avs14 from '../SVG/avatars/Avatars14.svg'
import avs15 from '../SVG/avatars/Avatars15.svg'
import avs16 from '../SVG/avatars/Avatars16.svg'
import avs17 from '../SVG/avatars/Avatars17.svg'
import avs18 from '../SVG/avatars/Avatars18.svg'
import avs19 from '../SVG/avatars/Avatars19.svg'
import avs20 from '../SVG/avatars/Avatars20.svg'
import avs21 from '../SVG/avatars/Avatars21.svg'
import avs22 from '../SVG/avatars/Avatars22.svg'
import avs23 from '../SVG/avatars/Avatars23.svg'
import avs24 from '../SVG/avatars/Avatars24.svg'
import avs25 from '../SVG/avatars/Avatars25.svg'

let select = 0
const setSelect = newSelect => {
  select = newSelect
}
const arrayAvatars = () => {
  return [{ ref: 0, img: avs25 }, { ref: 1, img: avs1 }, { ref: 2, img: avs2 }, { ref: 3, img: avs3 }, { ref: 4, img: avs4 }, { ref: 5, img: avs5 }, { ref: 6, img: avs6 }, { ref: 7, img: avs7 }, { ref: 8, img: avs8 }, { ref: 9, img: avs9 }, { ref: 10, img: avs10 }, { ref: 11, img: avs11 }, { ref: 12, img: avs12 }, { ref: 13, img: avs13 }, { ref: 14, img: avs14 }, { ref: 15, img: avs15 }, { ref: 16, img: avs16 }, { ref: 17, img: avs17 }, { ref: 18, img: avs18 }, { ref: 19, img: avs19 }, { ref: 20, img: avs20 }, { ref: 21, img: avs21 }, { ref: 22, img: avs22 }, { ref: 23, img: avs23 }, { ref: 24, img: avs24 }]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { arrayAvatars, setSelect, select }
