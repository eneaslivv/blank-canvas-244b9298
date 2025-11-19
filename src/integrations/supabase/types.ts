export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      adjust: {
        Row: {
          amount: number | null
          associated_cost: number | null
          created_at: string
          description: string | null
          destination_bar: number | null
          economic_value: number | null
          id: string
          inventory_id: number | null
          is_opened: boolean | null
          reason: string | null
          type: string | null
        }
        Insert: {
          amount?: number | null
          associated_cost?: number | null
          created_at?: string
          description?: string | null
          destination_bar?: number | null
          economic_value?: number | null
          id?: string
          inventory_id?: number | null
          is_opened?: boolean | null
          reason?: string | null
          type?: string | null
        }
        Update: {
          amount?: number | null
          associated_cost?: number | null
          created_at?: string
          description?: string | null
          destination_bar?: number | null
          economic_value?: number | null
          id?: string
          inventory_id?: number | null
          is_opened?: boolean | null
          reason?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "adjust_destination_bar_fkey"
            columns: ["destination_bar"]
            isOneToOne: false
            referencedRelation: "bars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "adjust_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
        ]
      }
      apps_registry: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_core: boolean
          key: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_core?: boolean
          key: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_core?: boolean
          key?: string
          name?: string
        }
        Relationships: []
      }
      attendees: {
        Row: {
          created_at: string
          email: string | null
          id: number
          name: string | null
          status: string | null
          ticket_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          status?: string | null
          ticket_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          status?: string | null
          ticket_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendees_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "ticket_types"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: string
          action_type: string
          changes_after: Json | null
          changes_before: Json | null
          created_at: string | null
          description: string
          error_message: string | null
          id: string
          ip_address: unknown
          session_id: string | null
          status: string
          target_id: string
          target_name: string
          target_type: string
          user_agent: string | null
          user_email: string
          user_id: string
          user_name: string
          user_role: string
        }
        Insert: {
          action: string
          action_type: string
          changes_after?: Json | null
          changes_before?: Json | null
          created_at?: string | null
          description: string
          error_message?: string | null
          id?: string
          ip_address?: unknown
          session_id?: string | null
          status?: string
          target_id: string
          target_name: string
          target_type: string
          user_agent?: string | null
          user_email: string
          user_id: string
          user_name: string
          user_role: string
        }
        Update: {
          action?: string
          action_type?: string
          changes_after?: Json | null
          changes_before?: Json | null
          created_at?: string | null
          description?: string
          error_message?: string | null
          id?: string
          ip_address?: unknown
          session_id?: string | null
          status?: string
          target_id?: string
          target_name?: string
          target_type?: string
          user_agent?: string | null
          user_email?: string
          user_id?: string
          user_name?: string
          user_role?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_log_user_id_idx"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          actor_role: string | null
          actor_user_id: string | null
          after_data: Json | null
          before_data: Json | null
          created_at: string
          entity_id: string | null
          entity_type: string
          id: string
          ip_address: string | null
        }
        Insert: {
          action: string
          actor_role?: string | null
          actor_user_id?: string | null
          after_data?: Json | null
          before_data?: Json | null
          created_at?: string
          entity_id?: string | null
          entity_type: string
          id?: string
          ip_address?: string | null
        }
        Update: {
          action?: string
          actor_role?: string | null
          actor_user_id?: string | null
          after_data?: Json | null
          before_data?: Json | null
          created_at?: string
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip_address?: string | null
        }
        Relationships: []
      }
      balance_transfers: {
        Row: {
          amount: number
          created_at: string
          from_user: string
          id: string
          note: string | null
          status: string | null
          to_user: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          from_user: string
          id?: string
          note?: string | null
          status?: string | null
          to_user?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          from_user?: string
          id?: string
          note?: string | null
          status?: string | null
          to_user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "balance_transfers_from_user_fkey1"
            columns: ["from_user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "balance_transfers_to_user_fkey1"
            columns: ["to_user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      balances_log: {
        Row: {
          action: string
          amount: number
          card_id: string | null
          created_at: string
          id: string
          source: string
          staff_id: string
          user_id: string | null
        }
        Insert: {
          action: string
          amount: number
          card_id?: string | null
          created_at: string
          id?: string
          source: string
          staff_id: string
          user_id?: string | null
        }
        Update: {
          action?: string
          amount?: number
          card_id?: string | null
          created_at?: string
          id?: string
          source?: string
          staff_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "balances_log_card_id_fkey"
            columns: ["card_id"]
            isOneToOne: false
            referencedRelation: "nfc_cards"
            referencedColumns: ["id"]
          },
        ]
      }
      bars: {
        Row: {
          capacity: number | null
          created_at: string
          description: string | null
          id: number
          isVip: boolean | null
          location: string | null
          name: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          id?: number
          isVip?: boolean | null
          location?: string | null
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          capacity?: number | null
          created_at?: string
          description?: string | null
          id?: number
          isVip?: boolean | null
          location?: string | null
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      event_order_items: {
        Row: {
          amount: number | null
          created_at: string
          event_id: string | null
          id: string
          order_id: string | null
          price_paid: number | null
          purchase_id: string | null
          purchaser_id: string | null
          qr_code: string | null
          scanned_at: string | null
          status: string | null
          ticket_type_id: string | null
          transferred_to_email: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          event_id?: string | null
          id?: string
          order_id?: string | null
          price_paid?: number | null
          purchase_id?: string | null
          purchaser_id?: string | null
          qr_code?: string | null
          scanned_at?: string | null
          status?: string | null
          ticket_type_id?: string | null
          transferred_to_email?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          event_id?: string | null
          id?: string
          order_id?: string | null
          price_paid?: number | null
          purchase_id?: string | null
          purchaser_id?: string | null
          qr_code?: string | null
          scanned_at?: string | null
          status?: string | null
          ticket_type_id?: string | null
          transferred_to_email?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_order_items_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "event_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_order_items_purchase_id_fkey"
            columns: ["purchase_id"]
            isOneToOne: false
            referencedRelation: "event_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_order_items_purchaser_id_fkey"
            columns: ["purchaser_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_order_items_ticket_type_id_fkey"
            columns: ["ticket_type_id"]
            isOneToOne: false
            referencedRelation: "ticket_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_order_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_orders: {
        Row: {
          created_at: string
          event_id: string | null
          id: string
          payment_method: string | null
          qr_code: string | null
          status: string | null
          total_price: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_id?: string | null
          id?: string
          payment_method?: string | null
          qr_code?: string | null
          status?: string | null
          total_price?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_id?: string | null
          id?: string
          payment_method?: string | null
          qr_code?: string | null
          status?: string | null
          total_price?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_orders_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_scans: {
        Row: {
          created_at: string
          id: string
          order_id: string | null
          scanned_at: string | null
          scanned_by: string | null
          status: string | null
          vip_guest_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          order_id?: string | null
          scanned_at?: string | null
          scanned_by?: string | null
          status?: string | null
          vip_guest_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: string | null
          scanned_at?: string | null
          scanned_by?: string | null
          status?: string | null
          vip_guest_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_scans_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "event_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_scans_scanned_by_fkey"
            columns: ["scanned_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_scans_vip_guest_id_fkey"
            columns: ["vip_guest_id"]
            isOneToOne: false
            referencedRelation: "vip_guests"
            referencedColumns: ["id"]
          },
        ]
      }
      event_transactions: {
        Row: {
          amount: number | null
          created_at: string
          id: string
          order_id: string | null
          payment_url: string | null
          preference_id: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: string
          order_id?: string | null
          payment_url?: string | null
          preference_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: string
          order_id?: string | null
          payment_url?: string | null
          preference_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_transactions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "event_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string
          created_by: string | null
          date: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          time: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          time?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          date?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          time?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      gifts: {
        Row: {
          accepted: boolean | null
          created_at: string
          description: string | null
          id: string
          product_id: string | null
          quantity: number | null
          sender_id: string | null
          status: string | null
          table_id: number | null
          user_id: string | null
        }
        Insert: {
          accepted?: boolean | null
          created_at?: string
          description?: string | null
          id?: string
          product_id?: string | null
          quantity?: number | null
          sender_id?: string | null
          status?: string | null
          table_id?: number | null
          user_id?: string | null
        }
        Update: {
          accepted?: boolean | null
          created_at?: string
          description?: string | null
          id?: string
          product_id?: string | null
          quantity?: number | null
          sender_id?: string | null
          status?: string | null
          table_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gifts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gifts_sender_id_fkey1"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      global_admins: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["global_admin_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          role: Database["public"]["Enums"]["global_admin_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["global_admin_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ingredients: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          is_active: boolean | null
          is_liquid: boolean
          name: string
          original_quantity: number | null
          product_id: string | null
          purchase_price: number | null
          quantity: number
          stock: number
          unit: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_active?: boolean | null
          is_liquid?: boolean
          name: string
          original_quantity?: number | null
          product_id?: string | null
          purchase_price?: number | null
          quantity?: number
          stock?: number
          unit: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_active?: boolean | null
          is_liquid?: boolean
          name?: string
          original_quantity?: number | null
          product_id?: string | null
          purchase_price?: number | null
          quantity?: number
          stock?: number
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ingredients_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          bar_id: number | null
          created_at: string
          id: number
          product_id: string | null
          quantity: number | null
          status: string | null
          threshold_level: number | null
          unit_cost: number | null
        }
        Insert: {
          bar_id?: number | null
          created_at?: string
          id?: number
          product_id?: string | null
          quantity?: number | null
          status?: string | null
          threshold_level?: number | null
          unit_cost?: number | null
        }
        Update: {
          bar_id?: number | null
          created_at?: string
          id?: number
          product_id?: string | null
          quantity?: number | null
          status?: string | null
          threshold_level?: number | null
          unit_cost?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "bars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      nfc_cards: {
        Row: {
          balance: number
          card_uid: string
          created_at: string
          id: string
          status: string
          table_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          balance: number
          card_uid: string
          created_at: string
          id?: string
          status: string
          table_id?: string | null
          updated_at: string
          user_id?: string | null
        }
        Update: {
          balance?: number
          card_uid?: string
          created_at?: string
          id?: string
          status?: string
          table_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          expires_at: string | null
          id: string
          is_read: boolean | null
          message: string
          metadata: Json | null
          title: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          title?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          title?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          notes: string | null
          order_id: number | null
          product_id: string | null
          quantity: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          notes?: string | null
          order_id?: number | null
          product_id?: string | null
          quantity: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          id?: string
          notes?: string | null
          order_id?: number | null
          product_id?: string | null
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          id: number
          is_table_order: boolean | null
          notes: string | null
          payment_method: string | null
          qr_id: string | null
          status: string | null
          table_id: string | null
          table_number: string | null
          total_amount: number
          updated_at: string | null
          user_id: string | null
          user_name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_table_order?: boolean | null
          notes?: string | null
          payment_method?: string | null
          qr_id?: string | null
          status?: string | null
          table_id?: string | null
          table_number?: string | null
          total_amount?: number
          updated_at?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_table_order?: boolean | null
          notes?: string | null
          payment_method?: string | null
          qr_id?: string | null
          status?: string | null
          table_id?: string | null
          table_number?: string | null
          total_amount?: number
          updated_at?: string | null
          user_id?: string | null
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_qr_id_fkey"
            columns: ["qr_id"]
            isOneToOne: false
            referencedRelation: "qr_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_links: {
        Row: {
          amount: number | null
          completed_at: string | null
          created_at: string
          from_user: string | null
          id: number
          note: string | null
          status: string | null
          token: string
        }
        Insert: {
          amount?: number | null
          completed_at?: string | null
          created_at?: string
          from_user?: string | null
          id?: number
          note?: string | null
          status?: string | null
          token: string
        }
        Update: {
          amount?: number | null
          completed_at?: string | null
          created_at?: string
          from_user?: string | null
          id?: number
          note?: string | null
          status?: string | null
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_links_from_user_fkey"
            columns: ["from_user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          created_at: string | null
          id: string
          module: string
          role_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          module: string
          role_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          module?: string
          role_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      pr_commissions: {
        Row: {
          amount: number
          created_at: string
          id: string
          pr_id: string
          reference_id: string
          source: string
          venue_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          pr_id: string
          reference_id: string
          source: string
          venue_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          pr_id?: string
          reference_id?: string
          source?: string
          venue_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pr_commissions_pr_id_fkey"
            columns: ["pr_id"]
            isOneToOne: false
            referencedRelation: "prs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_commissions_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          },
        ]
      }
      pr_complimentary_items: {
        Row: {
          assigned_to: string | null
          created_at: string
          id: number
          pr_id: string | null
          product_id: number | null
          status: string | null
          updated_at: string | null
          venue_id: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          id?: number
          pr_id?: string | null
          product_id?: number | null
          status?: string | null
          updated_at?: string | null
          venue_id?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          id?: number
          pr_id?: string | null
          product_id?: number | null
          status?: string | null
          updated_at?: string | null
          venue_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pr_complimentary_items_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_complimentary_items_pr_id_fkey"
            columns: ["pr_id"]
            isOneToOne: false
            referencedRelation: "prs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_complimentary_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_complimentary_items_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          },
        ]
      }
      pr_consumptions: {
        Row: {
          created_at: string
          id: string
          order_id: number | null
          pr_id: string | null
          tokens_used: number | null
          updated_at: string | null
          venue_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          order_id?: number | null
          pr_id?: string | null
          tokens_used?: number | null
          updated_at?: string | null
          venue_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          order_id?: number | null
          pr_id?: string | null
          tokens_used?: number | null
          updated_at?: string | null
          venue_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pr_consumptions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_consumptions_pr_id_fkey"
            columns: ["pr_id"]
            isOneToOne: false
            referencedRelation: "prs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_consumptions_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          },
        ]
      }
      pr_invitations: {
        Row: {
          client_email: string
          client_id: string | null
          client_phone: string | null
          created_at: string
          id: string
          pr_id: string
          qr_code: string
          status: string
          type: string
          user_id: string | null
          venue_id: string
        }
        Insert: {
          client_email: string
          client_id?: string | null
          client_phone?: string | null
          created_at?: string
          id?: string
          pr_id: string
          qr_code: string
          status?: string
          type: string
          user_id?: string | null
          venue_id: string
        }
        Update: {
          client_email?: string
          client_id?: string | null
          client_phone?: string | null
          created_at?: string
          id?: string
          pr_id?: string
          qr_code?: string
          status?: string
          type?: string
          user_id?: string | null
          venue_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pr_invitations_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_invitations_pr_id_fkey"
            columns: ["pr_id"]
            isOneToOne: false
            referencedRelation: "prs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_invitations_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          },
        ]
      }
      pr_table_sales: {
        Row: {
          buyer_email: string
          buyer_id: string | null
          buyer_phone: string | null
          created_at: string
          event_id: string
          id: string
          pr_id: string
          price_sold: number
          sold_at: string | null
          status: string
          table_id: string
          venue_id: string
        }
        Insert: {
          buyer_email: string
          buyer_id?: string | null
          buyer_phone?: string | null
          created_at?: string
          event_id: string
          id?: string
          pr_id: string
          price_sold: number
          sold_at?: string | null
          status?: string
          table_id: string
          venue_id: string
        }
        Update: {
          buyer_email?: string
          buyer_id?: string | null
          buyer_phone?: string | null
          created_at?: string
          event_id?: string
          id?: string
          pr_id?: string
          price_sold?: number
          sold_at?: string | null
          status?: string
          table_id?: string
          venue_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pr_table_sales_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_table_sales_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_table_sales_pr_id_fkey"
            columns: ["pr_id"]
            isOneToOne: false
            referencedRelation: "prs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_table_sales_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_table_sales_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          },
        ]
      }
      pr_tokens: {
        Row: {
          assigned_by: string | null
          balance: number | null
          created_at: string
          date_assigned: string | null
          id: string
          pr_id: string | null
          venue_id: string | null
        }
        Insert: {
          assigned_by?: string | null
          balance?: number | null
          created_at?: string
          date_assigned?: string | null
          id?: string
          pr_id?: string | null
          venue_id?: string | null
        }
        Update: {
          assigned_by?: string | null
          balance?: number | null
          created_at?: string
          date_assigned?: string | null
          id?: string
          pr_id?: string | null
          venue_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pr_tokens_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_tokens_pr_id_fkey"
            columns: ["pr_id"]
            isOneToOne: false
            referencedRelation: "prs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pr_tokens_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string | null
          created_at: string
          deleted_at: string | null
          description: string | null
          has_recipe: boolean | null
          id: string
          image_url: string | null
          ingredient_id: string | null
          is_active: boolean | null
          is_courtsey: boolean | null
          is_pr: boolean | null
          name: string
          purchase_price: number
          recipe_id: string | null
          sale_price: number | null
          stock: number | null
          type: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          has_recipe?: boolean | null
          id?: string
          image_url?: string | null
          ingredient_id?: string | null
          is_active?: boolean | null
          is_courtsey?: boolean | null
          is_pr?: boolean | null
          name?: string
          purchase_price?: number
          recipe_id?: string | null
          sale_price?: number | null
          stock?: number | null
          type?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          has_recipe?: boolean | null
          id?: string
          image_url?: string | null
          ingredient_id?: string | null
          is_active?: boolean | null
          is_courtsey?: boolean | null
          is_pr?: boolean | null
          name?: string
          purchase_price?: number
          recipe_id?: string | null
          sale_price?: number | null
          stock?: number | null
          type?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          approval_status: string | null
          balance: number | null
          created_at: string
          email: string | null
          id: string
          name: string | null
          phone: string | null
          qr_id: string | null
          role: string | null
          sector_id: number | null
          spent: number | null
          status: string | null
          table_id: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          approval_status?: string | null
          balance?: number | null
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          phone?: string | null
          qr_id?: string | null
          role?: string | null
          sector_id?: number | null
          spent?: number | null
          status?: string | null
          table_id?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          approval_status?: string | null
          balance?: number | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          qr_id?: string | null
          role?: string | null
          sector_id?: number | null
          spent?: number | null
          status?: string | null
          table_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_qr_id_fkey"
            columns: ["qr_id"]
            isOneToOne: false
            referencedRelation: "qr_codes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
        ]
      }
      prs: {
        Row: {
          assigned_events: Json | null
          created_at: string
          email: string | null
          id: string
          name: string | null
          phone: string | null
          status: Database["public"]["Enums"]["pr_status"] | null
          updated_at: string | null
          user_id: string | null
          venue_id: string | null
        }
        Insert: {
          assigned_events?: Json | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          status?: Database["public"]["Enums"]["pr_status"] | null
          updated_at?: string | null
          user_id?: string | null
          venue_id?: string | null
        }
        Update: {
          assigned_events?: Json | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          phone?: string | null
          status?: Database["public"]["Enums"]["pr_status"] | null
          updated_at?: string | null
          user_id?: string | null
          venue_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prs_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venue"
            referencedColumns: ["id"]
          },
        ]
      }
      qr_codes: {
        Row: {
          bar_id: number | null
          created_at: string
          id: string
          last_used: string | null
          location: string | null
          name: string | null
          purpose: string | null
        }
        Insert: {
          bar_id?: number | null
          created_at?: string
          id?: string
          last_used?: string | null
          location?: string | null
          name?: string | null
          purpose?: string | null
        }
        Update: {
          bar_id?: number | null
          created_at?: string
          id?: string
          last_used?: string | null
          location?: string | null
          name?: string | null
          purpose?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "qr_codes_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "bars"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ingredients: {
        Row: {
          created_at: string | null
          deduct_quantity: number
          deduct_stock: number
          deleted_at: string | null
          id: string
          ingredient_id: string | null
          product_id: string | null
          recipe_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deduct_quantity?: number
          deduct_stock?: number
          deleted_at?: string | null
          id?: string
          ingredient_id?: string | null
          product_id?: string | null
          recipe_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deduct_quantity?: number
          deduct_stock?: number
          deleted_at?: string | null
          id?: string
          ingredient_id?: string | null
          product_id?: string | null
          recipe_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_items: {
        Row: {
          created_at: string
          id: string
          ingredient_id: string
          ingredient_name: string
          percentage: number
          recipe_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          ingredient_id: string
          ingredient_name: string
          percentage?: number
          recipe_id: string
        }
        Update: {
          created_at?: string
          id?: string
          ingredient_id?: string
          ingredient_name?: string
          percentage?: number
          recipe_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipe_items_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "t_recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          created_at: string | null
          deleted_at: string | null
          id: string
          is_active: boolean | null
          name: string
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deleted_at?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          created_at: string | null
          id: string
          role_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          level: string
          name: string
          transaction_limit: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          level: string
          name: string
          transaction_limit?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          level?: string
          name?: string
          transaction_limit?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      staff: {
        Row: {
          bar_id: number | null
          created_at: string
          id: number
          role: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          bar_id?: number | null
          created_at?: string
          id?: number
          role?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          bar_id?: number | null
          created_at?: string
          id?: number
          role?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "staff_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "bars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_items: {
        Row: {
          bar_id: string
          id: string
          min_quantity: number
          product_id: string | null
          product_name: string
          quantity: number
          unit: string
          updated_at: string | null
        }
        Insert: {
          bar_id: string
          id?: string
          min_quantity?: number
          product_id?: string | null
          product_name: string
          quantity?: number
          unit?: string
          updated_at?: string | null
        }
        Update: {
          bar_id?: string
          id?: string
          min_quantity?: number
          product_id?: string | null
          product_name?: string
          quantity?: number
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stock_items_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "venue_bars"
            referencedColumns: ["id"]
          },
        ]
      }
      stock_purchases: {
        Row: {
          created_at: string | null
          id: string
          ingredient_id: string | null
          notes: string | null
          product_id: string | null
          purchase_date: string
          responsible_user: string | null
          resulting_average_cost: number | null
          stock: number
          supplier: string | null
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          ingredient_id?: string | null
          notes?: string | null
          product_id?: string | null
          purchase_date?: string
          responsible_user?: string | null
          resulting_average_cost?: number | null
          stock: number
          supplier?: string | null
          unit_price: number
        }
        Update: {
          created_at?: string | null
          id?: string
          ingredient_id?: string | null
          notes?: string | null
          product_id?: string | null
          purchase_date?: string
          responsible_user?: string | null
          resulting_average_cost?: number | null
          stock?: number
          supplier?: string | null
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "stock_purchases_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stock_purchases_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      system_alerts: {
        Row: {
          bar_id: string | null
          created_at: string
          id: string
          is_resolved: boolean | null
          message: string
          resolved_at: string | null
          severity: string
          type: string
          venue_id: string | null
        }
        Insert: {
          bar_id?: string | null
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          message: string
          resolved_at?: string | null
          severity?: string
          type: string
          venue_id?: string | null
        }
        Update: {
          bar_id?: string | null
          created_at?: string
          id?: string
          is_resolved?: boolean | null
          message?: string
          resolved_at?: string | null
          severity?: string
          type?: string
          venue_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "system_alerts_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "venue_bars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "system_alerts_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      t_qr_codes: {
        Row: {
          bar_id: string
          created_at: string
          id: string
          is_active: boolean | null
          qr_code: string
          restrictions: Json | null
          table_number: string
        }
        Insert: {
          bar_id: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          qr_code: string
          restrictions?: Json | null
          table_number: string
        }
        Update: {
          bar_id?: string
          created_at?: string
          id?: string
          is_active?: boolean | null
          qr_code?: string
          restrictions?: Json | null
          table_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "t_qr_codes_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "venue_bars"
            referencedColumns: ["id"]
          },
        ]
      }
      t_recipes: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      table_notifications: {
        Row: {
          created_at: string | null
          id: string
          resolved_at: string | null
          status: Database["public"]["Enums"]["notification_status"] | null
          table_id: string
          type: Database["public"]["Enums"]["notification_type"]
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"] | null
          table_id: string
          type: Database["public"]["Enums"]["notification_type"]
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"] | null
          table_id?: string
          type?: Database["public"]["Enums"]["notification_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "table_notifications_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
        ]
      }
      table_orders: {
        Row: {
          created_at: string | null
          id: string
          order_id: number | null
          table_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id?: number | null
          table_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: number | null
          table_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "table_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "table_orders_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
        ]
      }
      table_sessions: {
        Row: {
          end_time: string | null
          id: string
          start_time: string | null
          status: Database["public"]["Enums"]["session_status"] | null
          table_id: string
          total_spent: number | null
          updated_at: string | null
        }
        Insert: {
          end_time?: string | null
          id?: string
          start_time?: string | null
          status?: Database["public"]["Enums"]["session_status"] | null
          table_id: string
          total_spent?: number | null
          updated_at?: string | null
        }
        Update: {
          end_time?: string | null
          id?: string
          start_time?: string | null
          status?: Database["public"]["Enums"]["session_status"] | null
          table_id?: string
          total_spent?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "table_sessions_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "tables"
            referencedColumns: ["id"]
          },
        ]
      }
      tables: {
        Row: {
          assigned_waiter_id: string | null
          capacity: number
          created_at: string | null
          current_guests: number | null
          extra_balance: number | null
          id: string
          status: Database["public"]["Enums"]["table_status"] | null
          table_number: number
          updated_at: string | null
          venue_id: string | null
        }
        Insert: {
          assigned_waiter_id?: string | null
          capacity: number
          created_at?: string | null
          current_guests?: number | null
          extra_balance?: number | null
          id?: string
          status?: Database["public"]["Enums"]["table_status"] | null
          table_number: number
          updated_at?: string | null
          venue_id?: string | null
        }
        Update: {
          assigned_waiter_id?: string | null
          capacity?: number
          created_at?: string | null
          current_guests?: number | null
          extra_balance?: number | null
          id?: string
          status?: Database["public"]["Enums"]["table_status"] | null
          table_number?: number
          updated_at?: string | null
          venue_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tables_assigned_waiter_id_fkey"
            columns: ["assigned_waiter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_contacts: {
        Row: {
          created_at: string
          email: string
          id: string
          is_primary: boolean
          name: string
          notes: string | null
          phone: string | null
          role_label: string | null
          tenant_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_primary?: boolean
          name: string
          notes?: string | null
          phone?: string | null
          role_label?: string | null
          tenant_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_primary?: boolean
          name?: string
          notes?: string | null
          phone?: string | null
          role_label?: string | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_contacts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_locations: {
        Row: {
          address: string | null
          city: string | null
          code: string | null
          country: string | null
          created_at: string
          id: string
          name: string
          status: string
          tenant_id: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          code?: string | null
          country?: string | null
          created_at?: string
          id?: string
          name: string
          status?: string
          tenant_id: string
        }
        Update: {
          address?: string | null
          city?: string | null
          code?: string | null
          country?: string | null
          created_at?: string
          id?: string
          name?: string
          status?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_locations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_modules: {
        Row: {
          activated_at: string | null
          app_id: string
          config: Json | null
          created_by: string | null
          deactivated_at: string | null
          enabled: boolean
          id: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          activated_at?: string | null
          app_id: string
          config?: Json | null
          created_by?: string | null
          deactivated_at?: string | null
          enabled?: boolean
          id?: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          activated_at?: string | null
          app_id?: string
          config?: Json | null
          created_by?: string | null
          deactivated_at?: string | null
          enabled?: boolean
          id?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tenant_modules_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "apps_registry"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenant_modules_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_users: {
        Row: {
          created_at: string
          id: string
          last_login_at: string | null
          role: Database["public"]["Enums"]["tenant_user_role"]
          status: Database["public"]["Enums"]["tenant_user_status"]
          tenant_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_login_at?: string | null
          role: Database["public"]["Enums"]["tenant_user_role"]
          status?: Database["public"]["Enums"]["tenant_user_status"]
          tenant_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_login_at?: string | null
          role?: Database["public"]["Enums"]["tenant_user_role"]
          status?: Database["public"]["Enums"]["tenant_user_status"]
          tenant_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_users_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          created_at: string
          default_currency: string
          id: string
          legal_name: string | null
          name: string
          notes_internal: string | null
          onboarding_step: number
          slug: string
          status: Database["public"]["Enums"]["tenant_status"]
          timezone: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          default_currency?: string
          id?: string
          legal_name?: string | null
          name: string
          notes_internal?: string | null
          onboarding_step?: number
          slug: string
          status?: Database["public"]["Enums"]["tenant_status"]
          timezone?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          default_currency?: string
          id?: string
          legal_name?: string | null
          name?: string
          notes_internal?: string | null
          onboarding_step?: number
          slug?: string
          status?: Database["public"]["Enums"]["tenant_status"]
          timezone?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ticket_types: {
        Row: {
          combo: string | null
          created_at: string
          description: string | null
          event_id: string | null
          id: string
          name: string | null
          price: number | null
          total_quantity: number | null
          updated_at: string | null
        }
        Insert: {
          combo?: string | null
          created_at?: string
          description?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
          price?: number | null
          total_quantity?: number | null
          updated_at?: string | null
        }
        Update: {
          combo?: string | null
          created_at?: string
          description?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
          price?: number | null
          total_quantity?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_types_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number | null
          created_at: string
          id: string
          order_id: number | null
          payment_url: string | null
          preference_id: string | null
          status: string | null
          type: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: string
          order_id?: number | null
          payment_url?: string | null
          preference_id?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: string
          order_id?: number | null
          payment_url?: string | null
          preference_id?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      transfer: {
        Row: {
          amount: number | null
          created_at: string
          description: string | null
          from_bar: number | null
          id: number
          inventory_id: number | null
          status: string | null
          to_bar: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          description?: string | null
          from_bar?: number | null
          id?: number
          inventory_id?: number | null
          status?: string | null
          to_bar?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          description?: string | null
          from_bar?: number | null
          id?: number
          inventory_id?: number | null
          status?: string | null
          to_bar?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transfer_from_bar_fkey"
            columns: ["from_bar"]
            isOneToOne: false
            referencedRelation: "bars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfer_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transfer_to_bar_fkey"
            columns: ["to_bar"]
            isOneToOne: false
            referencedRelation: "bars"
            referencedColumns: ["id"]
          },
        ]
      }
      venue: {
        Row: {
          closing_time: string | null
          created_at: string | null
          description: string | null
          id: string
          max_capacity: number | null
          name: string
          open_time: string | null
          updated_at: string | null
        }
        Insert: {
          closing_time?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          max_capacity?: number | null
          name: string
          open_time?: string | null
          updated_at?: string | null
        }
        Update: {
          closing_time?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          max_capacity?: number | null
          name?: string
          open_time?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      venue_bars: {
        Row: {
          created_at: string
          id: string
          name: string
          status: string
          updated_at: string | null
          venue_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          status?: string
          updated_at?: string | null
          venue_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          status?: string
          updated_at?: string | null
          venue_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "venue_bars_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      venue_cashflow: {
        Row: {
          amount: number
          bar_id: string | null
          created_at: string
          created_by: string | null
          id: string
          note: string | null
          type: string
          venue_id: string
        }
        Insert: {
          amount: number
          bar_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          note?: string | null
          type: string
          venue_id: string
        }
        Update: {
          amount?: number
          bar_id?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          note?: string | null
          type?: string
          venue_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "venue_cashflow_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "venue_bars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venue_cashflow_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      venue_orders: {
        Row: {
          bar_id: string
          completed_at: string | null
          created_at: string
          id: string
          items: Json | null
          prep_time_minutes: number | null
          status: string
          total_amount: number
          updated_at: string | null
          user_id: string | null
          venue_id: string
        }
        Insert: {
          bar_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          items?: Json | null
          prep_time_minutes?: number | null
          status?: string
          total_amount?: number
          updated_at?: string | null
          user_id?: string | null
          venue_id: string
        }
        Update: {
          bar_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          items?: Json | null
          prep_time_minutes?: number | null
          status?: string
          total_amount?: number
          updated_at?: string | null
          user_id?: string | null
          venue_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "venue_orders_bar_id_fkey"
            columns: ["bar_id"]
            isOneToOne: false
            referencedRelation: "venue_bars"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venue_orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "venue_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "venue_orders_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      venue_users: {
        Row: {
          balance: number
          created_at: string
          email: string | null
          has_nfc: boolean | null
          id: string
          name: string
          nfc_card_id: string | null
          updated_at: string | null
          venue_id: string
        }
        Insert: {
          balance?: number
          created_at?: string
          email?: string | null
          has_nfc?: boolean | null
          id?: string
          name: string
          nfc_card_id?: string | null
          updated_at?: string | null
          venue_id: string
        }
        Update: {
          balance?: number
          created_at?: string
          email?: string | null
          has_nfc?: boolean | null
          id?: string
          name?: string
          nfc_card_id?: string | null
          updated_at?: string | null
          venue_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "venue_users_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      venues: {
        Row: {
          created_at: string
          id: string
          is_offline: boolean | null
          last_sync: string | null
          name: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_offline?: boolean | null
          last_sync?: string | null
          name: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_offline?: boolean | null
          last_sync?: string | null
          name?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      vip_guests: {
        Row: {
          created_at: string
          email: string | null
          event_id: string | null
          id: string
          name: string | null
          notes: string | null
          qr_code: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          qr_code?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          event_id?: string | null
          id?: string
          name?: string | null
          notes?: string | null
          qr_code?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vip_guests_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      audit_log_summary: {
        Row: {
          action: string | null
          action_date: string | null
          action_display: string | null
          action_hour: number | null
          action_type: string | null
          created_at: string | null
          description: string | null
          id: string | null
          monetary_amount: number | null
          status: string | null
          target_name: string | null
          target_type: string | null
          user_email: string | null
          user_name: string | null
          user_role: string | null
        }
        Insert: {
          action?: string | null
          action_date?: never
          action_display?: never
          action_hour?: never
          action_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string | null
          monetary_amount?: never
          status?: string | null
          target_name?: string | null
          target_type?: string | null
          user_email?: string | null
          user_name?: string | null
          user_role?: string | null
        }
        Update: {
          action?: string | null
          action_date?: never
          action_display?: never
          action_hour?: never
          action_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string | null
          monetary_amount?: never
          status?: string | null
          target_name?: string | null
          target_type?: string | null
          user_email?: string | null
          user_name?: string | null
          user_role?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_balance: {
        Args: {
          p_action: string
          p_amount: number
          p_card_id: string
          p_source: string
          p_staff_id: string
        }
        Returns: number
      }
      create_super_admin_for_user: {
        Args: { user_id_param: string }
        Returns: undefined
      }
      current_global_role: { Args: never; Returns: string }
      deduct_balance: {
        Args: {
          p_action: string
          p_amount: number
          p_card_id: string
          p_source: string
          p_staff_id: string
        }
        Returns: number
      }
      deduct_ingredient_stock: {
        Args: { amount_to_deduct: number; ingredient_id: number }
        Returns: undefined
      }
      get_order_cancellation_stats: {
        Args: { date_from?: string }
        Returns: {
          cancellations_by_user: Json
          total_cancellations: number
          total_cancelled_amount: number
        }[]
      }
      get_stock_update_summary: {
        Args: { days_back?: number; product_id?: string }
        Returns: {
          last_updated: string
          product_name: string
          recent_changes: Json
          update_count: number
        }[]
      }
      get_user_balance_history: {
        Args: { limit_count?: number; user_target_id: string }
        Returns: {
          change_amount: number
          created_at: string
          description: string
          id: string
          new_balance: number
          old_balance: number
          performed_by: string
        }[]
      }
      insert_audit_log: {
        Args: {
          p_action: string
          p_after_data?: Json
          p_before_data?: Json
          p_entity_id: string
          p_entity_type: string
        }
        Returns: string
      }
      is_global_admin: { Args: never; Returns: boolean }
      is_member_of_tenant: { Args: { _tenant_id: string }; Returns: boolean }
      is_tenant_admin: { Args: { _tenant_id: string }; Returns: boolean }
      register_as_super_admin: { Args: never; Returns: undefined }
      transfer_balance: {
        Args: {
          from_user_id: string
          to_user_id: string
          transfer_amount: number
          transfer_note?: string
        }
        Returns: {
          from_balance: number
          to_balance: number
          transfer_id: string
        }[]
      }
      user_tenant_ids: { Args: never; Returns: string[] }
    }
    Enums: {
      global_admin_role:
        | "super_admin"
        | "support_admin"
        | "sales_admin"
        | "read_only"
      notification_status: "pending" | "resolved"
      notification_type:
        | "waiter_call"
        | "bill_request"
        | "special_request"
        | "new_order"
      pr_status: "active" | "inactive"
      session_status: "active" | "closed"
      table_status:
        | "free"
        | "occupied"
        | "waiting_order"
        | "producing"
        | "delivered"
        | "bill_requested"
        | "paid"
      tenant_status: "trial" | "active" | "suspended" | "cancelled" | "free"
      tenant_user_role:
        | "tenant_owner"
        | "tenant_admin"
        | "tenant_ops"
        | "tenant_finance"
        | "tenant_viewer"
      tenant_user_status: "invited" | "active" | "disabled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      global_admin_role: [
        "super_admin",
        "support_admin",
        "sales_admin",
        "read_only",
      ],
      notification_status: ["pending", "resolved"],
      notification_type: [
        "waiter_call",
        "bill_request",
        "special_request",
        "new_order",
      ],
      pr_status: ["active", "inactive"],
      session_status: ["active", "closed"],
      table_status: [
        "free",
        "occupied",
        "waiting_order",
        "producing",
        "delivered",
        "bill_requested",
        "paid",
      ],
      tenant_status: ["trial", "active", "suspended", "cancelled", "free"],
      tenant_user_role: [
        "tenant_owner",
        "tenant_admin",
        "tenant_ops",
        "tenant_finance",
        "tenant_viewer",
      ],
      tenant_user_status: ["invited", "active", "disabled"],
    },
  },
} as const
