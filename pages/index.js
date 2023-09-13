import Link from "next/link"

function Home() {
  const clients = [
    {
      clientId: 'Huy',
      fullName: 'Nguyen Nhat Huy'
    },
    {
      clientId: 'Khuong',
      fullName: 'Nguyen Nhat Khuong'
    },
    {
      clientId: 'Duy',
      fullName: 'Nguyen Nhat Duy'
    },
  ]
  return (
      <div>
        <h1>Hello Im home</h1>
        <ul>
          {
            clients.map((client, index) => (
              <li key={index}><Link href={`/clients/${client.clientId}`}>{client.clientId} profile</Link></li>
            ))
          }
        </ul>
      </div>
  )
};

export default Home
