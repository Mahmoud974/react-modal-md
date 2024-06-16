### Librairie React Modal

## Installation
Pour installer le package, utilisez la commande suivante :
```cmd
npm i modal-md-reactjs
```

## Utilisation
Import the plugin in your project like this : 
```javascript
import Modal from "modal-md-reactjs";
```

Dans votre fonction de rendu, utilisez le composant Modal de la manière suivante : 
```javascript
<Modal 
  id="modal-created" 
  showModal={isModalOpen} 
  closeModal={closeModal} 
  parameter={modalParameter} 
  message={modalMessage}
>
  <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Notification</h2>
  <p style={{ marginBottom: '1rem' }}>{modalMessage}</p>
  <button 
    onClick={closeModal} 
    style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '5px' }}
  >
    Close
  </button>
</Modal>

```

## Customizer avec du css
1. Ajoutez ceci dans votre composant pour personnaliser le modal :
```javascript
const modalParameter = {
	"backgroundColor": "#EEEEEE",   
	"borderRadius": 10,
	"boxShadow": "0 0 5px #1B1919",
	"color": "#1B1919",
	"fontSize": 18,
	"height": "fit-content",
	"padding": "20px 50px",
	"width": "fit-content"
}
```