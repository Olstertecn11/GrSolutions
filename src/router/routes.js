import Home from "../pages/Home"
import MovingQuouteSteps from "@/pages/MovingQuoteSteps"
import TransportQuoteSteps from "@/pages/TransportQuoteSteps"
import Services from "@/pages/Services"
import Contact from "@/pages/Contact"
import ProviderQuoteSteps from "@/pages/ProviderQuouteSteps"



export default [
  { title: 'Inicio', path: '/', component: Home },
  {
    title: 'Servicios', path: '/servicios', component: Services, subs: [
      { title: 'Servicios de transporte', path: '/servicios#transporte' },
      { title: 'Servicios de proveedores', path: '/servicios#proveedores' },
    ]
  },
  // create cotizacion route with 3 subroutes
  {
    title: 'Cotización', path: '/cotizacion', component: MovingQuouteSteps, subs: [
      { title: 'Traslado', path: '/cotizacion-traslado' },
      { title: 'Mudanzas', path: '/cotizacion-mudanzas' },
      { title: 'Proveedores', path: '/cotizacion-proveedores' },
    ]
  },
  { title: 'Cotización Mudanza', path: '/cotizacion-mudanzas', component: MovingQuouteSteps, isChild: true },
  { title: 'Cotización Traslado', path: '/cotizacion-traslado', component: TransportQuoteSteps, isChild: true },
  { title: 'Cotización Proveedores', path: '/cotizacion-proveedores', component: ProviderQuoteSteps, isChild: true },
  { title: 'Contacto', path: '/contacto', component: Contact },

]

