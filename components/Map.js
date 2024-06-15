export default function Map() {
  return (
    <section className="map-container map">
      <h2>
          KNOW
          <b> OUR LOCATION</b>
        </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9584862909564!2d-74.06832208545298!3d4.601458096657137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f998501a7b1ff%3A0xe2ed0a81932fe14c!2sEdificio%20Mario%20Laserna!5e0!3m2!1ses!2sco!4v1676311023434!5m2!1ses!2sco"
        width="1280"
        height="720"
        style={{ border: 0, width: "100vw", height: "28.125rem", backgroundColor: "var(--main-raven)", filter: "invert(100%)saturate(50%)"}}
        allowFullScreen="True"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
