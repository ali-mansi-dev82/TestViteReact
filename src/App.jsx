import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./api";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data?.data?.map((user) => (
          <li key={user.id}>{user.username}:{user.firstName}-{user.lastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
