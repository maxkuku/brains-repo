class Hamburger {
    constructor(size, stuffing, topping, hamburgerReady) { 
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
        this.hamburgerReady = hamburgerReady;
    }

    
    fetchSize() {
        this.size = [
            {title:'Большой', calories: 40, price: 100 },
            {title:'Маленький', calories: 20, price: 50 },
        ];
    }

    fetchStuffing() {
        this.stuffing = [
            {title: 'С сыром', calories: 20, price: 10},
            {title: 'С салатом', calories: 5, price: 20},
            {title: 'С картофелем', calories: 10, price: 15},
        ];
    }

    fetchTopping() {
        this.topping = [
            {title: 'Приправа', calories: 0, price: 15},
            {title: 'Майонез', calories: 5, price: 20},
        ];
    }


    
 

    addTopping(topping) {    
        // Добавить добавку 
        this.hamburgerReady = {
            calories: 0,
            price: 0,
        };
        this.topping.forEach(topping => {
            if(topping == 'Приправа'){
                this.hamburgerReady.calories += this.topping.calories;
                this.hamburgerReady.price += this.topping.price;
            }
            else {
                this.hamburgerReady.calories += topping.calories;
                this.hamburgerReady.price += topping.price;
            }
        });
        
        return this.hamburgerReady;
    }
    removeTopping(topping) { 
        // Убрать добавку 
    }
    getToppings(topping) {   
        // Получить список добавок 
        
    }
    getSize() {              
        // Узнать размер гамбургера 
        let sizeBurgerInputs = '';
        return this.hamburger[index].size;
    }
    getStuffing() {          
        // Узнать начинку гамбургера 
        let stuffing = '';
        return stuffing;
    }
    calculatePrice() {       
        // Узнать цену 
    }
    calculateCalories() {    
        // Узнать калорийность 
    }
  }
  
  const Ham = new Hamburger();

  Ham.fetchSize();
  Ham.fetchStuffing();
  Ham.fetchTopping();

  Ham.addTopping('Приправа')
  console.log(Ham);