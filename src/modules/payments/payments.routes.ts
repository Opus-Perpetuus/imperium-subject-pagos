import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { payments_pages } from "./payments.pages.ts";
import { payments_tables } from "./payments.tables.ts";

export const payments_module = define_module({
  resource: "payments",
  labels: {
    singular: "Pagos",
    plural: "Pagos",
    read: "Ver Pagos",
    write: "Editar Pagos",
  },
  routes: define_crud({
    resource: "payments",
    table: "payments",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "payments",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      amount: { type: "number" },
      status: { type: "string", search: true },
      service_slug: { type: "string", search: true },
      provider: { type: "string", search: true },
      currency: { type: "string", search: true },
      provider_ref: { type: "string", search: true },
      webhook_event_id: { type: "string", search: true },
      external_ref: { type: "string", search: true },
      customer_email: { type: "string", search: true },
      invoice_requested: { type: "boolean" },
      invoice_request_id: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: payments_tables,
  pages: payments_pages,
  menu: [
    {
      id: "pagos.payments",
      label: "Pagos",
      order: 10,
      pageId: "pagos.payments",
      path: "payments",
      permission: "subject.pagos.payments.read",
      icon: "document",
    }
    ],
});
