import React, { Component } from 'react'


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




class PriceCount extends Component{
  constructor(){
    super();
    this.state = {
     currentPrice: 1200,
     count: 1,
     OldPrice: 1400
    }

   
  }

  Increment = () =>{
     this.setState({currentPrice: this.state.currentPrice + 1200})
     this.setState({OldPrice: this.state.OldPrice + 1400})
     this.setState({count: this.state.count + 1})
  }

  Decrement = () =>{
   
    if(this.state.count < 2){
      this.setState({count: this.state.count = 2})
      this.setState({currentPrice: this.state.currentPrice = 1200*2})
      this.setState({OldPrice: this.state.OldPrice = 1400*2})
    }
    
     this.setState({currentPrice: this.state.currentPrice - 1200})
     this.setState({count: this.state.count - 1})
     this.setState({OldPrice: this.state.OldPrice - 1400})


  }

  render(){

    return(
      <>
    <div className='col-6 ps-2 second-inner-part'>
      <div className='d-flex mb-3 align-items-center'>
        <h1 className='macbook-title'>
          {obj[0].title}
          <span>
            {obj[0].ram+'/'}
          </span>
          <span>
            {obj[0].med[0].memory}
          </span>
          <span>
            {obj[0].color[0]}
          </span>
        </h1>
        <i className='bx bx-exit'></i>
      </div>

      <div className='mb-4'>
        <h4 className="ram-title mb-3">Ram</h4>

          {obj.map((ram, i) =>{
            return <button className='macbook-btn me-3'>{ram.ram + 'GB'}</button>
          })}
      </div>

      <div className='mb-5'>
        <h4 className="ram-title mb-3">Memory Capacity</h4>

        {obj[1].med.map((memory, i) =>{
          return <button className='macbook-btn me-3'>{memory.memory }</button>
        })}
    </div>

    <div>
      <h4 className="ram-title mb-3">Colors</h4>
      <ul className='d-flex flex-wrap'>
        <li>
            <button className='macbook-btn d-flex flex-column align-items-center color-btn me-3'>
              <span className='golden-color'></span>Golden
            </button>
        </li>

        <li>
            <button className='macbook-btn d-flex flex-column align-items-center color-btn me-3'>
              <span className='golden-color silver'></span>Silver
            </button>
        </li>

        <li>
            <button className='macbook-btn d-flex flex-column align-items-center color-btn me-3'>
              <span className='golden-color space-gray'></span>Space Gray
            </button>
        </li>
            
      </ul>
    </div>

    <div className="d-flex mt-3">
      <button onClick={() => this.Decrement()} className="price__minus__btn">
        <i className='bx count-icon bx-minus'></i>
      </button>

      <p className='price__count m-0 pt-2'>{this.state.count}</p>

      <button onClick={() => this.Increment()}  className="price__minus__btn price__plus__btn">
        <i className='bx count-icon bx-plus'></i>
      </button>
    </div>

    <div className='mb-3'>
      <p className='mt-3 mb-1 price-outcome'>{this.state.currentPrice}$</p>
      <del>{this.state.OldPrice}</del>
    </div>

    <div className="d-flex flex-column">
      <button className="add-card-btn mb-2">Add to card</button>
      <button className="add-card-btn compare-btn">Compare</button>
    </div>
    </div>
      
      </>
    )

  }
}

export default PriceCount;