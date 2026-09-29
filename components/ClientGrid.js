import { clients } from '@/lib/clients';

export default function ClientGrid() {
  return (
    <div className="cpgrid">
      {clients.map((name) => (
        <div className="cpc reveal" key={name}>
          {name}
        </div>
      ))}
    </div>
  );
}
