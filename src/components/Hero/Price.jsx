import '../Hero/Price.css'
import MacImages from './MacImage'
import PriceCount from './PriceCount'

const obj = [
  {
    id: 1,
    title: "MacBook Air 13-inch",
    ram: '8',
    color: ['Gold', 'Silver', 'Spacegray'],
    med: [
      {
        memory: '256GB',
        price: 1200,
        oldPrice: '1400$',
      },
      {
        memory: '512GB',
        price: 1300,
        oldPrice: '1500$',
      },
    ],
    gold: [
      "https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1",

      "https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca",

      "https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12",

      "https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf",

      "https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3",
    ],
    silver: [
      "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",
      
      "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",

      "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",

      "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",

      "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
    ],
    SpaceGray: [
      "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",

      "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",

      "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",

      "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",

      "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943",
    ],
  },
  {
    id: 2,
    title: "MacBook Air 13-inch",
    ram: '16',
    color: ['Gold', 'Silver', 'Spacegray'],
    med: [
      {
        memory: '256GB',
        price: 1200,
        oldPrice: '1400$',
      },
      {
        memory: '512GB',
        price: 1300,
        oldPrice: '1500$',
      },
      {
        memory: '1TB',
        price: 1500,
        oldPrice: '1700$',

      },
    ],
    gold: [
      "https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1",

      "https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca",

      "https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12",

      "https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf",

      "https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3",
    ],
    silver: [
      "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8",

      "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f",

      "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e",

      "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58",

      "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c",
    ],
    SpaceGray: [
      "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045",

      "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181",

      "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275",

      "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae",

      "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943",
    ],
  },
  
]




export default function Price(){
  return (

    <>
      <section>
        <div className="container">
          <div className='d-flex main-inner align-items-center'>
            
           <MacImages/>

            <PriceCount/>
            
          </div>
        </div>
        
      </section>
    
    </>
  )
}
