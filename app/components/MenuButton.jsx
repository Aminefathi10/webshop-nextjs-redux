'use client'
import MenuIcon from '@mui/icons-material/Menu';

function MenuButton() {

  function slideMenu() {
    document.getElementById("slideref").classList.remove("-translate-x-full");
    document.getElementById('shadowLayerRef').classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
 }

  return (
    
      <button onClick={slideMenu} className="text-white mr-2"><MenuIcon /></button>
    
  )
}

export default MenuButton
