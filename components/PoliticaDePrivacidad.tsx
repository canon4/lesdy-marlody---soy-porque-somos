import React from "react";

const PoliticaDePrivacidad = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold mb-6">
        Política de Privacidad y Tratamiento de Datos Personales
      </h1>

      <section className="space-y-4">
        <p>
          <strong>1. Responsable del tratamiento</strong>
          <br />
          El responsable del tratamiento de los datos personales es
          <strong> [...]</strong>, persona natural, en Colombia.
        </p>

        <p>
          Correo de contacto: <strong>[...]</strong>
        </p>

        <p>
          <strong>2. Datos personales recolectados</strong>
          <br />A través del sitio web se pueden recolectar los siguientes
          datos:
        </p>

        <ul className="list-disc pl-6">
          <li>Nombre</li>
          <li>Número de teléfono (WhatsApp)</li>
          <li>Información enviada mediante formularios</li>
        </ul>

        <p>
          <strong>3. Finalidad del tratamiento</strong>
          <br />
          Los datos personales serán utilizados exclusivamente para:
        </p>

        <ul className="list-disc pl-6">
          <li>Enviar información relacionada con la campaña política</li>
          <li>
            Comunicar actividades, propuestas, eventos o mensajes informativos
          </li>
          <li>
            Mantener contacto con personas que manifiesten interés en la campaña
          </li>
        </ul>

        <p>
          <strong>4. Consentimiento del titular</strong>
          <br />
          Al enviar sus datos mediante los formularios del sitio, el titular
          autoriza de manera libre, previa y expresa el tratamiento de sus datos
          personales conforme a esta Política de Privacidad.
        </p>

        <p>
          <strong>5. Derechos del titular</strong>
          <br />
          El titular de los datos tiene derecho a:
        </p>

        <ul className="list-disc pl-6">
          <li>Conocer, actualizar y corregir sus datos</li>
          <li>Solicitar la eliminación de sus datos</li>
          <li>Revocar la autorización otorgada</li>
        </ul>

        <p>
          Para ejercer estos derechos, puede escribir al correo:
          <strong> [correo@dominio.com]</strong>
        </p>

        <p>
          <strong>6. Seguridad de la información</strong>
          <br />
          El responsable adopta medidas razonables para proteger los datos
          personales y evitar su acceso no autorizado.
        </p>

        <p>
          <strong>7. No cesión de datos a terceros</strong>
          <br />
          Los datos personales no serán vendidos, cedidos ni compartidos con
          terceros, salvo obligación legal.
        </p>

        <p>
          <strong>8. Vigencia</strong>
          <br />
          Esta Política de Privacidad rige a partir de su publicación y podrá
          ser modificada en cualquier momento.
        </p>

        <p>
          <strong>9. Legislación aplicable</strong>
          <br />
          Esta política se rige por la Ley 1581 de 2012 y demás normas de
          protección de datos personales en Colombia.
        </p>
      </section>
    </main>
  );
};

export default PoliticaDePrivacidad;
