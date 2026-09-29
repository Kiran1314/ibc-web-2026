import { clients } from '@/lib/clients';

// Scrolling client-name strip on the home page. The list is doubled so the CSS marquee loops seamlessly.
export default function ClientTrack() {
  return (
    <div className="ctrack">
      {[...clients, ...clients].map((name, i) => (
        <div className="clog" key={i}>
          {name}
        </div>
      ))}
    </div>
  );
}
