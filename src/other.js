import axios from "axios";

function other() {
   const config = {
    headers: {
        Accept: 'application/json'
    }
   }

   axios.get('https://icanhazdzdjoke.com', config).then(res => {
    document.getElementById('joke').innerHTML = res.data.joke
   })
}

export default other;