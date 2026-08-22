import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-pagos";

export const payments_pages: KirletPageDecl[] = [
  {
    id: "pagos.payments",
    path: "payments",
    permission: "subject.pagos.payments.read",
    build: () =>
      build_feature_shell_page({
        id: "pagos.payments",
        owner: "subject-pagos",
        title: "Pagos",
        props: {
          basePath: "payments",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Pagos",
            subtitle: "Submenú de pagos",
            pluralLabel: "pagos",
            singularLabel: "pagos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/payments`,
            record: `${API}/payments/:id`,
            create: { method: "POST", action: `${API}/payments` },
            update: { method: "PATCH", action: `${API}/payments/:id` },
            delete: { method: "DELETE", action: `${API}/payments/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "amount", label: "amount", sortable: true, priority: 3 },
              { key: "status", label: "status", sortable: true, priority: 3 },
              { key: "service_slug", label: "service slug", sortable: true, priority: 3 },
              { key: "provider", label: "provider", sortable: true, priority: 3 },
              { key: "currency", label: "currency", sortable: true, priority: 3 },
              { key: "provider_ref", label: "provider ref", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "amount", component: "input-number", label: "amount" },
              { name: "status", component: "input-text", label: "status" },
              { name: "service_slug", component: "input-text", label: "service slug" },
              { name: "provider", component: "input-text", label: "provider" },
              { name: "currency", component: "input-text", label: "currency" },
              { name: "provider_ref", component: "input-text", label: "provider ref" },
              { name: "webhook_event_id", component: "input-text", label: "webhook event id" },
              { name: "external_ref", component: "input-text", label: "external ref" },
              { name: "customer_email", component: "input-text", label: "customer email" },
              { name: "invoice_requested", component: "input-checkbox", label: "invoice requested" },
              { name: "invoice_request_id", component: "input-text", label: "invoice request id" },
            ],
          },
        },
      }),
  },
];
