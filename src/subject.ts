import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { payments_module } from "./modules/payments/payments.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-pagos",
  name: "Pagos",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-pagos:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "pagos.root",
    label: "Pagos",
    order: 0,
  },
  modules: [payments_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
