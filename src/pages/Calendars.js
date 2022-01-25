import React, {useState} from 'react'; 
import Menu from '../Components/Menu';
import Categories from '../Components/Categories';
import items from '../Components/data';


const allCategories = ['all',... new Set(items.map((item) => item.category))]; 
console.log(allCategories)


function Calendars() {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
  
    const filterItems = (category) => {
      if(category === 'calendars') {
        setMenuItems(items); 
        return
      }
      const newItems = items.filter((item)=> item.category === category)
      setMenuItems(newItems)
    }


    return (
        <main>
          <section className="menu section">
              <div className='title'>
                <h2></h2>
              </div>
              <Categories categories={categories} filterItems={filterItems} />
              <Menu items={menuItems}/>
          </section>
        </main>
        );
      }

export default Calendars;