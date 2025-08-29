import { Mail, Phone } from "lucide-react";
import { Container } from "./container";

export function FooterHomePage() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container className="flex flex-col gap-4">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-2 lg:w-1/2">
          <h3 className="text-2xl font-bold">Dr. Angelo Tamanini Cipriani</h3>
          <p className="text-xl">
            Médico Veterinário especialista em inspeção de alimentos, dedicado à
            qualidade e conformidade regulatória.
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:w-1/2 lg:ml-10">
          <h4 className="text-2xl font-bold">Serviços</h4>
          <ul className="flex flex-col gap-2">
            <li className="text-xl">Documentações Técnicas</li>
            <li className="text-xl">Planilhas de Controle</li>
            <li className="text-xl">Consultoria em Rotulagem</li>
            <li className="text-xl">Treinamentos Especializados</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 lg:w-1/2">
          <h4 className="text-2xl font-bold">Contatos</h4>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <Phone className="text-primary" width={22} />
              <p className="text-xl">(48) 9 8431-8693</p>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-primary" width={22} />
              <p className="text-xl">veterinario.angelo@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center text-lg border-t p-4">
        <div className="flex flex-col text-center lg:flex-row lg:gap-1">
          <p>&copy; {`${year} Dr. Angelo Tamanini Cipriani. `}</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </Container>
  );
}
