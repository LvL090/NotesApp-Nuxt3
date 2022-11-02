import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();

const SUPABASE_KEY = config.SUPABASE_KEY
const SUPABASE_URL = config.SUPABASE_KEY

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

  return {
    supabase,
  };
};

export default useSupabase;