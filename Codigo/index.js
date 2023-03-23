let ListaDePlatos = []

function agregarComidaEnCola(comida) {
    fetch(`http://localhost:3000/menu/:${comida}`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: 'habicuela'
      })
    })
    .then(response => {
      console.log('Solicitud POST exitosa!');
    })
    .catch(error => {
      console.error('Error en la solicitud POST:', error);
    });
  }
  class InformationPlate{
    constructor(avaible, description, price, ingredients, Imagen){
      this.avaible = avaible;
      this.description = description;
      this.price = price;
      this.ingredients = ingredients;
      this.Imagen = Imagen;
    }
  }

  class Plate {
    constructor(InformationPlate,name) {  
        this.InformationPlate = InformationPlate
        
        ConstruirBottonDelPlato();
  
        function ConstruirBottonDelPlato() {
  
            const botton = document.createElement('button');
            botton.innerHTML += `<button class ="Botton" type="submit">
            <div class="Information"> 
                <div id="Image"><img src="${InformationPlate.Imagen}" alt="${name}"></div>
                <span id="foot">${name}</span>
                <span id="price">${InformationPlate.price}</span>
                <span id="avaible">${InformationPlate.avaible}</span>
                <span id="Description">${InformationPlate.description}</span>
            </div>
        </button>`
        }
    }
  
    
  }
let arrozBlanco_PolloHorneado_Habichuela_Ensalada = new Plate(new InformationPlate("si","Si estás buscando una comida deliciosa, te recomiendo nuestro plato de arroz blanco con pollo horneado, habichuela y ensalada. El arroz blanco es suave y esponjoso, el pollo horneado es jugoso y lleno de sabor, las habichuelas son tiernas y sabrosas, y la ensalada es fresca y crujiente. ¡Es una combinación perfecta de sabores y texturas! ¿Te gustaría saber más sobre nuestro restaurante o hacer una reserva?",200,"arrozBlanco_PolloHorneado_Habichuela_Ensalada",'./Assets/Pollo.jpeg'))


ListaDePlatos.push(arrozBlanco_PolloHorneado_Habichuela_Ensalada);
console.log(arrozBlanco_PolloHorneado_Habichuela_Ensalada);
 


class ButtonGiveMePlate{
  constructor(x, y, width, height, image){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
  }
}
  