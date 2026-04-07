import { useEffect, useState } from "react";
import { getHealthStatus } from "../utils/devAPI";

export default function Home() {
  const [status, setStatus] = useState("unknown");

  useEffect(() => {
    getHealthStatus().then((data) => setStatus(data.status));
  }, []);

  return (
    <div className="text-center">
      <h1>Developer Bios</h1>

      <div
        className={
          status === "UP"
            ? "alert alert-success"
            : status === "DOWN"
              ? "alert alert-danger"
              : "alert alert-warning"
        }
      >
        Status is: {status}
      </div>

      <p>
        Welcome to dev bios. Use the navbar to browse bios or add a new
        developer.
      </p>
    </div>
  );
}
