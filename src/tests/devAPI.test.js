import { afterEach, expect, it, vi } from "vitest";
import {
  API_URL,
  getDevelopers,
  getHealthStatus,
  postDeveloper,
} from "../utils/devAPI";

const fakeDevs = [
  {
    id: 1,
    firstName: "Ada",
    lastName: "Lovelace",
    favoriteLanguage: "Python",
    yearStarted: 1843,
  },
  {
    id: 2,
    firstName: "Grace",
    lastName: "Hopper",
    favoriteLanguage: "COBOL",
    yearStarted: 1952,
  },
];

afterEach(() => {
  vi.restoreAllMocks();
});

it("should return a list of developers when getDevelopers is called", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    status: 200,
    json: () => Promise.resolve(fakeDevs),
  });

  const result = await getDevelopers();
  expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/developers`);
  expect(result).toEqual(fakeDevs);
});

it("should return health status when getHealthStatus is called", async () => {
  const health = { status: "UP", groups: ["liveness", "readiness"] };
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    status: 200,
    json: () => Promise.resolve(health),
  });

  const result = await getHealthStatus();
  expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/actuator/health`);
  expect(result).toEqual(health);
});

it("should throw an error when getDevelopers gets a non-ok response", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: false,
    status: 500,
  });

  await expect(getDevelopers()).rejects.toThrow("HTTP 500");
  expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/developers`);
});

it("should throw an error when getHealthStatus gets a non-ok response", async () => {
  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: false,
    status: 503,
  });

  await expect(getHealthStatus()).rejects.toThrow("HTTP 503");
  expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/actuator/health`);
});

it("should call POST fetch with a json body", async () => {
  const dev = {
    firstName: "Ada",
    lastName: "Lovelace",
    favoriteLanguage: "Python",
    yearStarted: 1843,
  };

  const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({});
  await postDeveloper(dev);
  
  expect(fetchSpy).toHaveBeenCalledWith(`${API_URL}/developers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dev),
  });
});
