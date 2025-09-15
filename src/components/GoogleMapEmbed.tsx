const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-card">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.66014878272!2d-54.58832628498518!3d-25.54249818377987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69074898166e7%3A0x6a94d3a66a7b3c6d!2sAv.%20Paran%C3%A1%2C%201161%20-%20Centro%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085851-000!5e0!3m2!1spt-BR!2sbr!4v1678886456789!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Solaris Engenharia Solar - Foz do Iguaçu"
      />
    </div>
  );
};

export default GoogleMapEmbed;