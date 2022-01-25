import React, {useState} from 'react'; 
import Menu from '../Components/Menu';
import Categories from '../Components/Categories';
import items from '../Components/data';



const allCategories = ['all',... new Set(items.map((item) => item.category))]; 

function Catalogue() {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
    const filterItems = (category) => {
      if(category === 'all') {
        setMenuItems(items); 
        console.log(items)
        return
      }
      const newItems = items.filter((item)=> item.category === category)
      setMenuItems(newItems)
      console.log(newItems.length) 
    }

  
    return (
        <main>
          <section className="menu section">
              <div className='title'>
              </div>
              <Categories categories={categories} filterItems={filterItems} />
              <Menu items={menuItems}/>
          </section>
        </main>
        );
      }

export default Catalogue;