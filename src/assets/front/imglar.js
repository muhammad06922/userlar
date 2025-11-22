import adlog from "./adlog.png";
import doc from "./doc.png";
import wir from "./wir.png";
import hand from "./hand.png";
import light from "./light.png";
import order from "./order.png";
import belgibir from "./vir_taqiq.png";
import kana from "./kana.png";
import sichqon from "./sichqon.png";
import bit from "./bit.jpg";
import tarakan from "./tarakan.jpg";
import chayon from "./chayon.jpg";
import kemiruvchi from "./kemiruvchi.jpg";
import burga from "./burga.jpg";
import instagram from './insta.png'
import fecbook from './facebook.png'
import tel from './tel.png'
import location from './location.png'
import copyright from './copyright.png'
import telegram from './telegram.png'

const rasmlar = {
  burga,
  instagram,
  fecbook,
  tel,
  location,
  copyright,
  telegram,
  kemiruvchi,
  chayon,
  tarakan,
  bit,
  adlog,
  doc,
  wir,
  hand,
  light,
  order,
  belgibir,
  kana,
  sichqon,
};
export default rasmlar;

export const hizmat = [
  {
    id: "1",
    img: belgibir,
    name:`Dezinfeksiya – zararli mikroorganizmlarni yo‘q qilish.
`,
    index: `
              Har qanday dezinfeksiyaning asosiy vazifasi infeksiyalar va
              kasalliklarga olib kelishi mumkin bo‘lgan xavfli
              mikroorganizmlarni yo‘q qilishdir. Dezinfeksiya choralari bo‘sh
              joyni mog‘or, virus, chiriyotgan va bakteriyalardan tozalaydi.
              Jarayon atrof-muhitni patogen organizmlardan tozalaydi. Agar
              o‘zingizni yomon his qilsangiz, charchoq yoki sabab­siz
              zaiflashsangiz kerak.`,
  },
  {
    id: "2",
    img: kana,
    name:`Dezinseksiya – hasharotlarni yo‘q qilish.
`,
    index: `
            Ko‘p odamlar birinchi navbatda 'dezinfestatsiya' so‘zini istalmagan
            qo‘shnilaridan – choyshablar, hamamböcekler, chumolilar va boshqa
            hasharotlardan xalos bo‘lish yo‘lini qidirganda duch kelishadi.
            Ularning o‘zlari yoqimsiz va ular ham ma’lum infeksiya
            tashuvchilari. Dezinfeksiya – bu hasharotlarni: chivinlar,
            choyshablar, tarakanlar, kuya, shomil, qobiq qo‘ng‘izlari, yog‘och
            bitlari va boshqa sudralib yuruvchi hamda uchuvchi jonzotlarni yo‘q
            qilish.`,
  },
  {
    id: "3",
    img: sichqon,
    name:`Deratizatsiya – kemiruvchilarni yo‘q qilish.
`,
    index: `Toshkentda deratizatsiya kemiruvchilarni yo‘q qilishga 
    qaratilgan kompleks chora-tadbirlarning butun majmuasidir.
     Ma’lumki, kemiruvchilar juda qattiq jonzotlar bo‘lib,
      ular turli xil xavfli ta’sirlarga dosh beradilar. Shuning uchun 
      ularni yo‘q qilish uchun bir qator usullardan foydalanish kerak.
       Deratizatsiya Toshkent shahrida kemiruvchilar paydo bo‘lgan
        joylarda: ko‘p qavatli uylar, omborlar, do‘konlar, umumiy
         ovqatlanish korxonalarida amalga oshiriladi.
`,
  },
];

export const hizmat_turlari = [
  {
    id: "1",
    name: "Klaplar",
    text: `Ular to‘shakda, yumshoq mebelda, to‘qimachilikda, 
    eshik romlari va deraza romlari ostida yashaydilar. Ular odamlar 
    va issiq qonli hayvonlarning qoni bilan oziqlanadi. Allergiya va 
    og‘ir psixologik noqulaylikni qo‘zg‘atadi...
`,
    img: bit,
  },
  {
    id: "2",
    name: "Tarkanlar",
    text: `Ular patogenlarni olib yuradilar. Ular yoriqlarda, taglik
     tagida, mebel orqasida, hammom ostida, shkaflar ostida va hokazolarda
      yashaydilar. Ular oziq-ovqat, maishiy chiqindilar, charm buyumlar
       va qog‘oz bilan oziqlanadilar.
`,
    img: tarakan,
  },
  {
    id:"3",
    name: "Chayon",
    text: `Hasharotlar va araxnidlar bilan oziqlanadigan issiqlikni yaxshi ko‘radigan jonzotlar. Ular omborlarda va uylerde yashashlari mumkin, lekin ko‘pincha ular yog‘och binolarda topiladi...
`,
    img: chayon,
  },
  {
    id: "4",
    name: "Kemiruvchilar",
    text: `Eng keng tarqalgan kalamushlar va sichqonlar.
     Ular patogenlarni olib yuradi, barcha sirtlarda ishlaydi,
      devor va shiftlarda o‘tish joylarini yaratadi, strukturani
       ishonchliligini pasaytiradi. Ular oziq-ovqat va maishiy
        chiqindilar bilan oziqlanadi...
`,
    img: kemiruvchi,
  },
  {
    id: "5",
    name: "Burga",
    text: `Ular uy hayvonlari tanasiga kirib, qo‘shnilardan ko‘chib 
  ketishadi. Ular yumshoq mebellar, ko‘rpa-to‘shaklar, gilamlar,
   yumshoq o‘yinchoqlar, taglik tagida va deraza hamda eshik
    romlarida yashaydilar. Ular odamlar va hayvonlarning qoni
     bilan oziqlanadi. Ular kasalliklarga olib keladi...
`,
img:burga
  },
];
