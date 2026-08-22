import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const payments_tables: KirletTableDecl[] = [
  {
    name: "payments",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "amount", type: "real" },
      { name: "status", type: "text" },
      { name: "service_slug", type: "text" },
      { name: "provider", type: "text" },
      { name: "currency", type: "text" },
      { name: "provider_ref", type: "text" },
      { name: "webhook_event_id", type: "text" },
      { name: "external_ref", type: "text" },
      { name: "customer_email", type: "text" },
      { name: "invoice_requested", type: "boolean" },
      { name: "invoice_request_id", type: "text" },
    ],
    indexes: [
      { name: "idx_payments_name", columns: ["name"] },
      { name: "idx_payments_active", columns: ["is_active"] },
    ],
  },
];
