export const API_URL =
  "http://devbios-api-env.eba-u8mh4mmp.us-west-2.elasticbeanstalk.com";

export const getDevelopers = () => {
  return fetch(`${API_URL}/developers`).then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  });
};

export const getHealthStatus = async () => {
  let res = await fetch(`${API_URL}/actuator/health`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
};

export const postDeveloper = async (developer) => {
  return await fetch(`${API_URL}/developers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(developer),
  });
};
