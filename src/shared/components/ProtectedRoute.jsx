import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  if (isLoading) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

export { ProtectedRoute };
