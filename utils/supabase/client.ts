// Re-export supabase client from src
import { supabase } from '../../src/integrations/supabase/client';

// Export a createClient function for compatibility with Next.js API routes
export const createClient = () => supabase;

// Also export the supabase instance directly
export { supabase };
