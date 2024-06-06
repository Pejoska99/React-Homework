function MyTrips(){
const Trips: string[] = ['London', 'Paris', 'Tokyo'];

return (
    <div>
        <h2>My Trips:</h2>
        <ul>
        {Trips.map((trip: string) => (
          <li key={trip}>{trip}</li>
        ))}
        </ul>
    </div>
)
}

export default MyTrips;