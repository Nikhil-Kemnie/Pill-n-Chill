import { Injectable } from '@angular/core';
import { Medicine } from '../Models/MedicideModel';

@Injectable({
  providedIn: 'root'
})
export class MedicineServiceService {
  medicineList: Medicine[] = [{	
    medicineId: 101,
    name: "Johnson's Baby Powder",
    chemical: 'Sodium Citrate / Citric Acid',
    exp: '07/2022',
    qty: 5,
    power: '400 g',
    type: 'powder',
    description: "Johnson's Baby Powder is a specially formulated talcum powder designed for the soft skin of your baby.",
    seller: "JOHNSON'S Store",
    brandName: "JOHNSON'S BABY",
    price: 200.2,
    url: 'Powder.jpg',
    dateCreated: "NO Date",
    dateUpdated: "No Date",
    category: 'baby',
    categoryName: 'Baby Care',
  },
  {
    medicineId: 102,
    name: 'Himalaya Baby care - Gift Pack (Set of 7)',
    chemical: 'Various Chemicals',
    exp: '07/2022',
    qty: 4,
    power: '510 g',
    type: 'combo',
    description: "The products that are included in the baby gift pack will soothe, nourish and provide gentle care to your baby's skin.",
    seller: 'Jain & Brothers',
    brandName: 'Himalaya Herbs',
    price: 495.00,
    url: 'Baby_Care.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'baby',
    categoryName: 'Baby Care',
  },
  {
    medicineId: 103,
    name: 'Himalaya Guduchi Tablets',
    chemical: 'No Chemicals Used',
    exp: '07/2022',
    qty: 6,
    power: '250 mg',
    type: 'tablet',
    description: 'It is a health supplement and are created to be effective against fevers and other infective conditions, backed by Ayurveda and modern research.',
    seller: 'Jain & Brothers',
    brandName: 'Himalaya Pure Herbs',
    price: 138.6,
    url: 'Guduchi_tablets.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'baby',
    categoryName: 'Baby Care',
  },
  {
    medicineId: 104,
    name: 'Liveasy Baby Care Feeding Bottle',
    chemical: 'No Chemicals Used',
    exp: '07/2022',
    qty: 3,
    power: '250 ml',
    type: 'syrup',
    description: 'This bottle is specially designed for the convenience of feeding as evidenced in the slim neck and splendid body which helps with a firm and comfortable grip.',
    seller: 'MD Labs',
    brandName: 'LivEasy',
    price: 199,
    url: 'Feeding_Bottle.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'baby',
    categoryName: 'Baby Care',
  },
  {
    medicineId: 105,
    name: 'Merocrit Baby Injection',
    chemical: 'Meropenem',
    exp: '07/2022',
    qty: 2,
    power: '125 mg',
    type: 'injection',
    description: ' It treats infections of various body parts like skin, soft tissues, blood, brain (meningitis), lungs (pneumonia), urinary tract.',
    seller: 'Aggarwal Medicose',
    brandName: 'Cipla Ltd',
    price: 154,
    url: 'merocrit-injection.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'baby',
    categoryName: 'Baby Care',
  },
  {
    medicineId: 106,
    name: 'Dexolac Special Care Infant Formula',
    chemical: 'Amino Acids',
    exp: '07/2022',
    qty: 1,
    power: '400 g',
    type: 'powder',
    description: ' Dexolac Stage 1 Infant Formula is a powdered milk substitute for babies upto 6 months age. It contains nutrients that support overall growth & development.',
    seller: 'Aggarwal Medicose',
    brandName: 'Nutrica International Pvt Ltd',
    price: 495,
    url: 'Dexolac.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'baby',
    categoryName: 'Baby Care',
  },
  {
    medicineId: 107,
    name: "Dolo 650mg Tablet 15'S",
    chemical: 'Acetaminophen',
    exp: '07/2022',
    qty: 8,
    power: '650 mg',
    type: 'tablet',
    description: 'Dolo is used to reduce fever and treat mild to moderate pain. Also, it is used to relieve headache, migraine, toothache, period pain, back pain, muscle pain and rheumatic pains.',
    seller: 'Aarx Pharmacy',
    brandName: 'Micro Labs Ltd',
    price: 27,
    url: 'Dolo.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'general',
    categoryName: 'General Medicines',
  },
  {
    medicineId: 108,
    name: 'Vomikind Fast Strip 4mg',
    chemical: 'Ondansetron',
    exp: '07/2022',
    qty: 5,
    power: '4 mg',
    type: 'tablet',
    description: 'Vomikind Fast Orally Disintegrating Strip is used to prevent and manage nausea and vomiting induced due to chemotherapy and radiotherapy.',
    seller: 'Aarx Pharmacy',
    brandName: 'Mankind Pharma Pvd Ltd',
    price: 12,
    url: 'Vomikind.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'general',
    categoryName: 'General Medicines',
  },
  {
    medicineId: 109,
    name: 'Patanjali Balm 10 gm',
    chemical: 'No Chemicals Used',
    exp: '07/2022',
    qty: 3,
    power: '10 g',
    type: 'Gel',
    description: 'Patanjali Ayurveda Balm contains Gandhpurataila, Pudina satva and Neelgiritaila. Patanjali Balm provides relief from head aches and pains..',
    seller: 'Yadav Medical Store',
    brandName: 'Patanjali Ayurved Ltd',
    price: 24.50,
    url: 'Balm.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'general',
    categoryName: 'General Medicines',
  },
  {
    medicineId: 110,
    name: 'Moov Spray Pain Relief Specialist 80 gm',
    chemical: 'No Chemicals Used',
    exp: '07/2022',
    qty: 5,
    power: '80 g',
    type: 'spray',
    description: 'It provides you fast and long lasting relief from muscle pain, neck pain and backache, inflammation, sprain, myositis, fibrositis and sciatica. It is a fast pain relief spray for frozen shoulder and body ache.',
    seller: 'Yadav Medical Store',
    brandName: 'Patanjali Ayurved Ltd',
    price: 232,
    url: 'Moov.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'general',
    categoryName: 'General Medicines',
  },
  {
    medicineId: 111,
    name: "Buscogast Tablet 10's",
    chemical: 'Hyoscine Butylbromide',
    exp: '07/2022',
    qty: 5,
    power: '10 mg',
    type: 'tablet',
    description: 'Buscogast 10 mg Tablet is also used to treat symptoms such as abdominal pain, bloating, indigestion, stomach cramps, diarrhoea, etc.',
    seller: 'Om Medical Agency',
    brandName: 'Sanofi India Limited',
    price: 34.88,
    url: 'Buscogast.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'general',
    categoryName: 'General Medicines',
  },
  {
    medicineId: 112,
    name: 'Torex Cough Syrup 100ml',
    chemical: 'Ammonium Chloride',
    exp: '07/2022',
    qty: 5,
    power: '100 ml',
    type: 'syrup',
    description: 'Torex Cough Syrup is a combination medicine used to treat cough. It thins the mucus in the nose and windpipe, making it easier to cough out.',
    seller: 'Om Medical Agency',
    brandName: 'Torque Pharmaceuticals Pvt Ltd',
    price: 94.40,
    url: 'Torex.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'general',
    categoryName: 'General Medicines',
  },
  {
    medicineId: 113,
    name: 'Dermadew Soap, 75 gm',
    chemical: 'Sodium Chloride, Titanium Dioxide',
    exp: '07/2022',
    qty: 4,
    power: '75 g',
    type: 'soap',
    description: 'Dermadew soap moisturizers the skin and also be used to prevent or reduce acne, dermatitis, itching or dry skin. It effectively removes dead skin cells and dirt away from the body.',
    seller: 'Fortis Healthworld Store',
    brandName: 'Hegde & Hegde Pharmaceutica Llp',
    price: 128,
    url: 'Soap.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'skin',
    categoryName: 'Skin Care',
  },
  {
    medicineId: 114,
    name: 'Betadine 10% Ointment',
    chemical: 'Povidone Iodine',
    exp: '07/2022',
    qty: 3,
    power: '20 g',
    type: 'gel',
    description: ' It is used for the treatment and prevention of infections in wounds and cuts. It kills the harmful microbes and controls their growth, thereby preventing infections in the affected area.',
    seller: 'Fortis Healthworld Store',
    brandName: 'Win-Medicare Pvt Ltd',
    price: 113,
    url: 'Betadine.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'skin',
    categoryName: 'Skin Care',
  },
  {
    medicineId: 115,
    name: 'Himalaya Purifying Neem Face Pack 100 gm',
    chemical: 'No Chemicals Used',
    exp: '07/2022',
    qty: 5,
    power: '100 g',
    type: 'cream',
    description: "Himalaya's Purifying Neem Pack brings together the goodness of Neem, Fuller's Earth and Turmeric, which work together to regulate excess oil secretion, clean clogged pores and prevent the recurrence of pimples.",
    seller: 'Divine Pharmacy',
    brandName: 'Himalaya Herbs',
    price: 91.80,
    url: 'Facewash.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'skin',
    categoryName: 'Skin Care',
  },
  {
    medicineId: 116,
    name: 'Ring Out Dusting Powder 65gm',
    chemical: 'Clotrimazole',
    exp: '07/2022',
    qty: 4,
    power: '65 g',
    type: 'powder',
    description: 'Ring Out Dusting Powder is a topical antifungal medicine that is used to prevent or treat fungal infections of the skin. It helps in relieving associated symptoms like rashes, itching in intimate bod parts, etc. ',
    seller: 'Divine Pharmacy',
    brandName: 'Mankind Pharmaceuticals Ltd',
    price: 69.50,
    url: 'Ring-Out.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'skin',
    categoryName: 'Skin Care',
  },
  {
    medicineId: 117,
    name: 'Everherb Neem - Immunity Booster',
    chemical: 'No Chemicals Used',
    exp: '07/2022',
    qty: 7,
    power: '250 mg',
    type: 'capsule',
    description: 'It is an excellent blood purifier. It removes toxins from the body and cleanses the blood which supports healthy skin. ',
    seller: 'Ambika Medicose',
    brandName: 'EverHerb',
    price: 455.24,
    url: 'Neem.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'skin',
    categoryName: 'Skin Care',
  },
  {
    medicineId: 118,
    name: 'Wash Proof Adhesive Bandages, 8 Count',
    chemical: 'Benzalkonium Chloride',
    exp: '07/2022',
    qty: 12,
    power: '8 s',
    type: 'surgical',
    description: 'Adhesive Bandages is designed to protect the Wound and Scab from Friction, Bacteria, Damage, and Dirt. This making the healing process of the wound fast and safe. ',
    seller: 'Ambika Medicose',
    brandName: 'Apollo Hospitals Enterprise Ltd',
    price: 20,
    url: 'Bandage.jpg',
    dateCreated:"NO Date",
    dateUpdated:"No Date",
    category: 'surgical',
    categoryName: 'Surgical Items',
  }];
  medicineObj:Medicine = {
    medicineId: 0,
    name: '',
    chemical: '',
    exp: '',
    qty: 0,
    power: '',
    type: '',
    description: '',
    seller: '',
    brandName: '',
    price: 0,
    url: '',
    dateCreated: '',
    dateUpdated: '',
    category: '',
    categoryName: '',
  };


  medicineFilterList: Medicine[] = [];
  constructor() { }

  getAllMedicines(){
    return this.medicineList;
  }
  
  getTop6(){
    this.medicineFilterList = [];
    for(let i = 0; i< 6 ; i++){
      this.medicineFilterList.push(this.medicineList[i]);
    }

    return this.medicineFilterList;
  }

  GetMedicines(category: string, type: string){
    this.medicineFilterList = [];

    if(category.toLowerCase() === 'all'){
      this.medicineList.forEach(medicine => {
        if(medicine.type == type){
          this.medicineFilterList.push(medicine);
        }
      })
    }
    else if(type.toLowerCase() === 'all'){
      this.medicineList.forEach(medicine => {
        if(medicine.category === category){
          this.medicineFilterList.push(medicine);
        }
      })
    }
    else{
      this.medicineList.forEach(medicine => {
        if(medicine.category === category && medicine.type == type){
          this.medicineFilterList.push(medicine);
        }
      })
    }
    return this.medicineFilterList;
  }

  getMedicine(id: number){
    this.medicineList.forEach(medicine => {
      if(medicine.medicineId == id){
        this.medicineObj = medicine;
      }
    });
    return this.medicineObj;
  }

}
