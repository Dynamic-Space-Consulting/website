import Image from "next/image";

export default function SuccessfulClients() {
  const clients = [
    { name: "Client A", logo: "/clients/client_a.svg" },
    { name: "Client B", logo: "/clients/client_b.svg" },
    { name: "Client C", logo: "/clients/client_c.png" },
    { name: "Client D", logo: "/clients/client_d.png" },
    { name: "Client E", logo: "/clients/client_e.png" },
    { name: "Client F", logo: "/clients/client_f.svg" },
  ];
  return (
    <section className="w-full bg-[#CAD4DC] my-16 py-16 max-w-8xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-sans-pro text-[#0A3D62] mb-10">
        Our Successful Clients
      </h2>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-between px-2">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center">
              <Image src={client.logo} alt={client.name} width={120} height={100} className="mb-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
