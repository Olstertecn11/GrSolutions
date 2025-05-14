import VerticalCarousel from "@/components/Navbar/VerticalCarousel";


const Hero = () => {

  const items = [
    {
      title: "Mudanzas Completas",
      description:
        "Ideal para hogares, apartamentos y oficinas. Nuestro servicio de mudanza completa incluye la recolección, embalaje, traslado y descarga de tus pertenencias con total cuidado. Contamos con personal capacitado, vehículos adaptados y herramientas como mantas protectoras, cinchos y carretillas para asegurar que todo llegue en perfectas condiciones. También ofrecemos cobertura de seguro opcional para mayor tranquilidad.",
      image: "https://serveiestacio.com/blog/wp-content/uploads/2022/10/cajas-mudanza.jpg",
    },
    {
      title: "Transporte Empresarial",
      description:
        "Diseñado especialmente para empresas que necesitan trasladar productos en pallets, maquinaria liviana o equipos de oficina. Ofrecemos soluciones logísticas con unidades de carga cerradas, operadores entrenados y programación de rutas según requerimientos. Ideal para distribución en tiendas, movimientos entre bodegas o entregas de productos terminados a clientes.",
      image: "https://cdn.prod.website-files.com/6624dafd5ec71461271eb9b5/6643c870510283a049943dea_1c27dcfa51b6.webp",
    },
    {
      title: "Fletes Livianos",
      description:
        "Servicio económico y rápido para el traslado de artículos de menor tamaño como escritorios, estanterías, paquetes medianos o materiales de construcción. Se realiza con pickups o microcamiones, con disponibilidad inmediata y cobertura en zonas urbanas y rurales. Ideal para quienes necesitan agilidad sin comprometer la seguridad de sus bienes.",
      image: "https://vrioeurope.com/wp-content/uploads/2020/07/ligeros.jpg",
    },
  ];

  return (
    <VerticalCarousel items={items} />
  );
}

export default Hero;
