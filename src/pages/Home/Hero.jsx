import VerticalCarousel from "@/components/Navbar/VerticalCarousel";


const Hero = () => {

  const items = [
    {
      title: "Mudanzas Completas",
      description:
        "Ideal para hogares y oficinas. Transportamos tus muebles, cajas y objetos personales con cuidado y seguridad. Servicio con embalaje, carga, descarga y personal especializado.",
      image: "https://serveiestacio.com/blog/wp-content/uploads/2022/10/cajas-mudanza.jpg", // usa tu propia ruta local si es necesario
    },
    {
      title: "Transporte Empresarial",
      description:
        "Perfecto para cargas en pallets, equipos industriales o logística de distribución. Transporte profesional para empresas con montacargas y vehículos cerrados.",
      image: "https://cdn.prod.website-files.com/6624dafd5ec71461271eb9b5/6643c870510283a049943dea_1c27dcfa51b6.webp",
    },
    {
      title: "Fletes Livianos",
      description:
        "Para traslados pequeños o entregas rápidas. Pickups ideales para llevar materiales de construcción, muebles pequeños o paquetes de forma ágil y eficiente.",
      image: "https://vrioeurope.com/wp-content/uploads/2020/07/ligeros.jpg",
    },
  ];


  return (
    <VerticalCarousel items={items} />
  );
}

export default Hero;
