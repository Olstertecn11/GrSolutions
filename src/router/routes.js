import Home from "../pages/Home"
import QuouteSteps from "@/pages/QuoteSteps"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"



export default [
  { title: 'Inicio', path: '/', component: Home },
  {
    title: 'Servicios', path: '/Servicios', component: Services, subs: [
      { title: 'Servicios de transporte', path: '/Servicios#transporte' },
      { title: 'Servicios de proveedores', path: '/Servicios#proveedores' },
    ]
  },
  { title: 'Cotización', path: '/Cotizacion', component: QuouteSteps },
  { title: 'Contact', path: '/Contacto', component: Contact },

]

