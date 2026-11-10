# Pagos

Quien usa la app abre el submenú Pagos y ve la lista de pagos registrados
(nombre, activo, referencia, monto, estado, servicio, proveedor, moneda y
referencia del proveedor). Queda probado que la lista responde y muestra los
registros de la app.

## Sub-features

La app hace la acción de `payments.list`. Escribe: no. Esta ficha no lleva
línea `Subject:` con imagen: el catálogo no da un tag para rellenarla. El
hueco está en `despliegue.md`.

- `payments.list` responde `GET /payments` con 200 y la lista de pagos.

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-pagos`; no declara
  `dependsOn`.
- `src/modules/payments/payments.routes.ts` — CRUD de `payments`:
  `GET /payments`, `GET /payments/:id`, `POST /payments`,
  `PATCH /payments/:id`, `DELETE /payments/:id`.
- `src/modules/payments/payments.pages.ts` — página `pagos.payments`, ruta
  `payments`, permiso `subject.pagos.payments.read`.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-pagos.payments.list` | `GET /payments` | sin base QA definida | pedir la lista | HTTP 200 | no | sin receta de arnés |

## How to get to it (user POV)

- Menú Pagos → Pagos (página `pagos.payments`, ruta `payments`, permiso
  `subject.pagos.payments.read`).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-pagos`, la receta sale `omitida`.

- **Abrir.** `GET /payments` y el resultado de la sub-feature
  `payments.list`.
- **Proof.** `evidence/pagos/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- Este repo no nombra base QA: no correr recetas que muten.
- `omitida` no cuenta como probada.
